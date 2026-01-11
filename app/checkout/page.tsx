"use client"

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCart } from "@/components/lib/cart-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingBag, CreditCard, Banknote, Smartphone, ArrowLeft, Shield } from "lucide-react";

export default function CheckoutPage() {
  const router = useRouter();
  const { items, subtotal, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    country: "Pakistan",
    orderNotes: "",
  });

  const formatPrice = (price: number) => {
    return `PKR ${price.toLocaleString()}`;
  };

  const tax = 0; // Tax calculation can be added
  const shipping = 0; // Shipping calculation can be added
  const total = subtotal + tax + shipping;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const isFormValid = () => {
    return (
      formData.fullName &&
      formData.email &&
      formData.phone &&
      formData.streetAddress &&
      formData.city &&
      formData.state &&
      formData.postalCode &&
      paymentMethod &&
      agreedToTerms
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid()) {
      alert("Please fill in all required fields and agree to terms.");
      return;
    }

    setIsSubmitting(true);

    // Simulate order processing
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log("Order submitted:", {
      ...formData,
      paymentMethod,
      items,
      total,
    });

    alert(`Order placed successfully! Total: ${formatPrice(total)}\n\nWe'll contact you within 24 hours to confirm your order.`);

    clearCart();
    router.push("/");
    setIsSubmitting(false);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <ShoppingBag className="h-24 w-24 mx-auto text-muted-foreground/30 mb-6" />
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Your cart is empty</h1>
            <p className="text-muted-foreground mb-8">
              Add some products to your cart before checking out
            </p>
            <Button asChild size="lg">
              <Link href="/products">Browse Products</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 md:py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Button asChild variant="ghost" className="mb-6">
          <Link href="/products">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Continue Shopping
          </Link>
        </Button>

        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Checkout</h1>
          <p className="text-muted-foreground">Complete your order</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Order Summary */}
            <div className="lg:col-span-1 order-2 lg:order-1">
              <Card className="sticky top-20">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Cart Items */}
                  <div className="space-y-3 max-h-[400px] overflow-y-auto">
                    {items.map((item) => (
                      <div key={item.id} className="flex gap-3 pb-3 border-b">
                        <div className="relative w-16 h-16 rounded-md overflow-hidden bg-muted flex-shrink-0">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-sm truncate">{item.name}</h4>
                          <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                          <p className="text-sm font-semibold text-[#FDB913]">
                            {formatPrice(item.price * item.quantity)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Pricing Breakdown */}
                  <div className="space-y-2 pt-4 border-t">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal:</span>
                      <span>{formatPrice(subtotal)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Tax:</span>
                      <span>{tax > 0 ? formatPrice(tax) : "Calculated at confirmation"}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Shipping:</span>
                      <span>{shipping > 0 ? formatPrice(shipping) : "Free"}</span>
                    </div>
                    <div className="h-px bg-border my-2" />
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total:</span>
                      <span className="text-[#FDB913]">{formatPrice(total)}</span>
                    </div>
                  </div>

                  {/* Security Badge */}
                  <div className="pt-4 border-t">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Shield className="h-4 w-4 text-green-600" />
                      <span>Secure checkout guaranteed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Checkout Form */}
            <div className="lg:col-span-2 order-1 lg:order-2 space-y-6">
              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="fullName" className="text-sm font-medium">
                        Full Name *
                      </label>
                      <Input
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+92-XXX-XXXXXXX"
                      required
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Shipping Address */}
              <Card>
                <CardHeader>
                  <CardTitle>Shipping Address</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="streetAddress" className="text-sm font-medium">
                      Street Address *
                    </label>
                    <Input
                      id="streetAddress"
                      name="streetAddress"
                      value={formData.streetAddress}
                      onChange={handleChange}
                      placeholder="123 Main Street, Apt 4"
                      required
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="city" className="text-sm font-medium">
                        City *
                      </label>
                      <Input
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="Lahore"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="state" className="text-sm font-medium">
                        State / Province *
                      </label>
                      <Input
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        placeholder="Punjab"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="postalCode" className="text-sm font-medium">
                        Postal Code *
                      </label>
                      <Input
                        id="postalCode"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleChange}
                        placeholder="54000"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="country" className="text-sm font-medium">
                        Country *
                      </label>
                      <Input
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        readOnly
                        className="bg-muted"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Method */}
              <Card>
                <CardHeader>
                  <CardTitle>Payment Method</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {/* Cash on Delivery */}
                  <label className="flex items-start gap-3 p-4 border-2 rounded-lg cursor-pointer hover:border-primary/50 transition-colors">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={paymentMethod === "cod"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Banknote className="h-5 w-5" />
                        <span className="font-semibold">Cash on Delivery</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Pay when you receive your order
                      </p>
                    </div>
                  </label>

                  {/* Bank Transfer */}
                  <label className="flex items-start gap-3 p-4 border-2 rounded-lg cursor-pointer hover:border-primary/50 transition-colors">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="bank"
                      checked={paymentMethod === "bank"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <CreditCard className="h-5 w-5" />
                        <span className="font-semibold">Bank Transfer</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Bank account details will be provided after order confirmation
                      </p>
                    </div>
                  </label>

                  {/* Credit/Debit Card - Coming Soon */}
                  <label className="flex items-start gap-3 p-4 border-2 rounded-lg opacity-50 cursor-not-allowed">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      disabled
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <CreditCard className="h-5 w-5" />
                        <span className="font-semibold">Credit / Debit Card</span>
                        <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full">Coming Soon</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Payment gateway integration in progress
                      </p>
                    </div>
                  </label>

                  {/* Mobile Payment - Coming Soon */}
                  <label className="flex items-start gap-3 p-4 border-2 rounded-lg opacity-50 cursor-not-allowed">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="mobile"
                      disabled
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Smartphone className="h-5 w-5" />
                        <span className="font-semibold">Mobile Payment</span>
                        <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full">Coming Soon</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        JazzCash, EasyPaisa integration in progress
                      </p>
                    </div>
                  </label>
                </CardContent>
              </Card>

              {/* Order Notes */}
              <Card>
                <CardHeader>
                  <CardTitle>Additional Information (Optional)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <label htmlFor="orderNotes" className="text-sm font-medium">
                      Order Notes / Special Instructions
                    </label>
                    <textarea
                      id="orderNotes"
                      name="orderNotes"
                      value={formData.orderNotes}
                      onChange={handleChange}
                      placeholder="Any special requirements or delivery instructions..."
                      rows={4}
                      className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Terms & Place Order */}
              <Card>
                <CardContent className="pt-6 space-y-4">
                  {/* Terms Checkbox */}
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={agreedToTerms}
                      onChange={(e) => setAgreedToTerms(e.target.checked)}
                      className="mt-1"
                      required
                    />
                    <span className="text-sm text-muted-foreground">
                      I agree to the{" "}
                      <Link href="/terms" className="text-primary hover:underline" target="_blank">
                        Terms & Conditions
                      </Link>{" "}
                      and{" "}
                      <Link href="/privacy" className="text-primary hover:underline" target="_blank">
                        Privacy Policy
                      </Link>
                    </span>
                  </label>

                  {/* Place Order Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={!isFormValid() || isSubmitting}
                  >
                    {isSubmitting ? "Processing..." : `Place Order - ${formatPrice(total)}`}
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    By placing your order, you agree to our terms. We'll contact you within 24 hours to confirm.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
