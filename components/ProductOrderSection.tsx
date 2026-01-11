"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/components/lib/cart-context";
import { Product } from "@/components/lib/products";
import { ShoppingCart, Check, ArrowRight } from "lucide-react";
import Link from "next/link";

interface ProductOrderSectionProps {
  product: Product;
  onCartOpen: () => void;
}

export default function ProductOrderSection({ product, onCartOpen }: ProductOrderSectionProps) {
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedMaterial, setSelectedMaterial] = useState("");
  const [selectedFinish, setSelectedFinish] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  // Extract specifications options
  const sizeSpec = product.specifications.find(spec => spec.name.toLowerCase().includes('size'));
  const materialSpec = product.specifications.find(spec =>
    spec.name.toLowerCase().includes('paper') ||
    spec.name.toLowerCase().includes('material') ||
    spec.name.toLowerCase().includes('stock')
  );
  const finishSpec = product.specifications.find(spec =>
    spec.name.toLowerCase().includes('finish') ||
    spec.name.toLowerCase().includes('lamination') ||
    spec.name.toLowerCase().includes('coating')
  );

  const handleAddToCart = () => {
    setIsAdding(true);

    // Create cart item with selected specifications
    const cartItem = {
      id: `${product.slug}-${Date.now()}`,
      slug: product.slug,
      name: product.name,
      price: 5000, // Base price - in real app, calculate based on specifications
      quantity,
      image: product.heroImage,
      specifications: {
        ...(selectedSize && { size: selectedSize }),
        ...(selectedMaterial && { material: selectedMaterial }),
        ...(selectedFinish && { finish: selectedFinish }),
      }
    };

    addItem(cartItem);

    // Small delay for UX
    setTimeout(() => {
      setIsAdding(false);
      onCartOpen();
    }, 300);
  };

  const canAddToCart = selectedSize || selectedMaterial || selectedFinish;

  return (
    <Card className="sticky top-20">
      <CardContent className="pt-6 space-y-6">
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Order</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Select your preferences and add to cart for a quick quote
          </p>
        </div>

        {/* Size Selection */}
        {sizeSpec && sizeSpec.options.length > 0 && (
          <div>
            <label className="text-sm font-medium mb-2 block">
              {sizeSpec.name}
            </label>
            <div className="grid grid-cols-2 gap-2">
              {sizeSpec.options.slice(0, 4).map((option) => (
                <button
                  key={option}
                  onClick={() => setSelectedSize(option)}
                  className={`p-2 text-xs border rounded-md transition-all ${
                    selectedSize === option
                      ? 'border-primary bg-primary/10 text-primary font-medium'
                      : 'border-input hover:border-primary/50'
                  }`}
                >
                  {option.split(':')[0]}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Material Selection */}
        {materialSpec && materialSpec.options.length > 0 && (
          <div>
            <label className="text-sm font-medium mb-2 block">
              {materialSpec.name}
            </label>
            <div className="space-y-2">
              {materialSpec.options.slice(0, 3).map((option) => (
                <button
                  key={option}
                  onClick={() => setSelectedMaterial(option)}
                  className={`w-full p-2 text-xs text-left border rounded-md transition-all ${
                    selectedMaterial === option
                      ? 'border-primary bg-primary/10 text-primary font-medium'
                      : 'border-input hover:border-primary/50'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Finish Selection */}
        {finishSpec && finishSpec.options.length > 0 && (
          <div>
            <label className="text-sm font-medium mb-2 block">
              {finishSpec.name}
            </label>
            <div className="space-y-2">
              {finishSpec.options.slice(0, 3).map((option) => (
                <button
                  key={option}
                  onClick={() => setSelectedFinish(option)}
                  className={`w-full p-2 text-xs text-left border rounded-md transition-all ${
                    selectedFinish === option
                      ? 'border-primary bg-primary/10 text-primary font-medium'
                      : 'border-input hover:border-primary/50'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Quantity */}
        <div>
          <label className="text-sm font-medium mb-2 block">
            Quantity
          </label>
          <div className="flex items-center border rounded-md">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-4 py-2 hover:bg-accent transition-colors"
            >
              -
            </button>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
              className="flex-1 text-center py-2 border-x outline-none"
              min="1"
            />
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-4 py-2 hover:bg-accent transition-colors"
            >
              +
            </button>
          </div>
        </div>

        {/* Estimated Price */}
        <div className="bg-muted/30 rounded-lg p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted-foreground">Estimated Price:</span>
            <span className="text-lg font-bold text-[#FDB913]">
              PKR {(5000 * quantity).toLocaleString()}
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            Final price may vary based on specifications
          </p>
        </div>

        {/* Add to Cart Button */}
        <Button
          onClick={handleAddToCart}
          disabled={!canAddToCart || isAdding}
          className="w-full h-12"
          size="lg"
        >
          {isAdding ? (
            <>
              <Check className="mr-2 h-5 w-5" />
              Adding...
            </>
          ) : (
            <>
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </>
          )}
        </Button>

        {!canAddToCart && (
          <p className="text-xs text-center text-muted-foreground">
            Please select at least one specification
          </p>
        )}

        {/* Get Custom Quote */}
        <div className="pt-4 border-t space-y-2">
          <p className="text-sm font-medium text-center">Need a custom quote?</p>
          <Button asChild variant="outline" className="w-full">
            <Link href="/request-quote">
              Get Custom Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
