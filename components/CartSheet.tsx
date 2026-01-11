"use client"

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/components/lib/cart-context";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";

interface CartSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function CartSheet({ open, onOpenChange }: CartSheetProps) {
  const { items, updateQuantity, removeItem, subtotal, totalItems } = useCart();

  const formatPrice = (price: number) => {
    return `PKR ${price.toLocaleString()}`;
  };

  if (items.length === 0) {
    return (
      <Sheet open={open} onOpenChange={onOpenChange}>
        <SheetContent className="w-full sm:max-w-md flex flex-col">
          <SheetHeader>
            <SheetTitle>Shopping Cart</SheetTitle>
          </SheetHeader>

          {/* Empty State */}
          <div className="flex-1 flex flex-col items-center justify-center py-12">
            <ShoppingBag className="h-24 w-24 text-muted-foreground/30 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Your cart is empty</h3>
            <p className="text-sm text-muted-foreground mb-6 text-center">
              Add some products to get started
            </p>
            <Button asChild onClick={() => onOpenChange(false)}>
              <Link href="/products">Browse Products</Link>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-md flex flex-col p-0">
        <SheetHeader className="px-6 py-4 border-b">
          <SheetTitle>Shopping Cart ({totalItems})</SheetTitle>
        </SheetHeader>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto px-6">
          <div className="space-y-4 py-4">
            {items.map((item) => (
              <div key={item.id} className="flex gap-4">
                {/* Product Image */}
                <div className="relative w-20 h-20 rounded-md overflow-hidden bg-muted flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Product Details */}
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-sm mb-1 truncate">{item.name}</h4>

                  {/* Specifications */}
                  {item.specifications && Object.keys(item.specifications).length > 0 && (
                    <p className="text-xs text-muted-foreground mb-2">
                      {Object.entries(item.specifications)
                        .filter(([_, value]) => value)
                        .map(([key, value]) => `${key}: ${value}`)
                        .join(', ')}
                    </p>
                  )}

                  {/* Price */}
                  <p className="text-sm font-bold text-[#FDB913] mb-2">
                    {formatPrice(item.price)}
                  </p>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center border rounded-md">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 hover:bg-accent transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="px-3 text-sm font-medium min-w-[2rem] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 hover:bg-accent transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-1 text-destructive hover:bg-destructive/10 rounded transition-colors ml-auto"
                      aria-label="Remove item"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>

                  {/* Subtotal for this item */}
                  <p className="text-xs text-muted-foreground mt-1">
                    Subtotal: {formatPrice(item.price * item.quantity)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer with Total and Actions */}
        <SheetFooter className="px-6 py-4 border-t space-y-4">
          {/* Subtotal */}
          <div className="w-full space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Subtotal:</span>
              <span className="font-medium">{formatPrice(subtotal)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Tax:</span>
              <span className="font-medium">Calculated at checkout</span>
            </div>
            <div className="h-px bg-border my-2" />
            <div className="flex justify-between text-base font-bold">
              <span>Total:</span>
              <span className="text-[#FDB913]">{formatPrice(subtotal)}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="w-full space-y-2">
            <Button asChild className="w-full" size="lg">
              <Link href="/checkout" onClick={() => onOpenChange(false)}>
                Checkout
              </Link>
            </Button>
            <Button asChild variant="outline" className="w-full" onClick={() => onOpenChange(false)}>
              <Link href="/products">Continue Shopping</Link>
            </Button>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
