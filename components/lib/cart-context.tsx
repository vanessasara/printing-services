"use client"

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface CartItem {
  id: string;
  slug: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  specifications?: {
    size?: string;
    material?: string;
    finish?: string;
    [key: string]: string | undefined;
  };
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'fast_printing_cart';

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);

  // Load cart from sessionStorage on mount
  useEffect(() => {
    try {
      const stored = sessionStorage.getItem(CART_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        setItems(parsed.cartItems || []);
      }
    } catch (error) {
      console.error('Failed to load cart from storage:', error);
    }
    setIsInitialized(true);
  }, []);

  // Save cart to sessionStorage whenever it changes
  useEffect(() => {
    if (isInitialized) {
      try {
        sessionStorage.setItem(CART_STORAGE_KEY, JSON.stringify({
          cartItems: items,
          timestamp: new Date().toISOString()
        }));
      } catch (error) {
        console.error('Failed to save cart to storage:', error);
      }
    }
  }, [items, isInitialized]);

  const addItem = (item: CartItem) => {
    setItems((currentItems) => {
      const existingItem = currentItems.find((i) => i.id === item.id);

      if (existingItem) {
        // Update quantity if item exists
        return currentItems.map((i) =>
          i.id === item.id
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        );
      }

      // Add new item
      return [...currentItems, item];
    });
  };

  const removeItem = (id: string) => {
    setItems((currentItems) => currentItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id);
      return;
    }

    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
