"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileQuestion, Home, Search, ArrowLeft, Package, Settings, Mail } from "lucide-react";

export default function NotFoundPage() {
  // Sample suggested products (in a real app, these would come from your products data)
  const suggestedProducts = [
    {
      name: "Business Cards",
      href: "/products/business-cards",
      icon: Package,
    },
    {
      name: "Brochures",
      href: "/products/brochures",
      icon: Package,
    },
    {
      name: "Custom Boxes",
      href: "/products/custom-boxes",
      icon: Package,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          {/* 404 Icon & Message */}
          <div className="text-center mb-12">
            {/* Large 404 Illustration */}
            <div className="relative mb-8">
              <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-[#FDB913]/20 to-[#FDB913]/5 mb-4">
                <FileQuestion className="h-16 w-16 text-[#FDB913]" />
              </div>
            </div>

            <h1 className="text-7xl md:text-9xl font-bold text-[#FDB913] mb-4">404</h1>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Oops! Page Not Found</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              The page you're looking for doesn't exist or has been moved. Don't worry, we can help you find what you need!
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button asChild size="lg">
                <Link href="/">
                  <Home className="mr-2 h-5 w-5" />
                  Back to Home
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/products">
                  <Package className="mr-2 h-5 w-5" />
                  Browse Products
                </Link>
              </Button>
            </div>
          </div>

          {/* Search Bar */}
          <Card className="mb-12">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-2">
                <Search className="h-5 w-5 text-muted-foreground" />
                <h3 className="font-semibold text-lg">Search our site</h3>
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className="flex h-12 w-full rounded-md border border-input bg-background px-4 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      const searchTerm = (e.target as HTMLInputElement).value;
                      window.location.href = `/products?search=${encodeURIComponent(searchTerm)}`;
                    }
                  }}
                />
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Press Enter to search
              </p>
            </CardContent>
          </Card>

          {/* Quick Links */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Quick Links</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="hover:border-primary/50 transition-colors">
                <CardContent className="pt-6">
                  <Link href="/" className="block text-center">
                    <Home className="h-8 w-8 mx-auto mb-3 text-[#FDB913]" />
                    <h4 className="font-semibold mb-1">Home</h4>
                    <p className="text-sm text-muted-foreground">Back to homepage</p>
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:border-primary/50 transition-colors">
                <CardContent className="pt-6">
                  <Link href="/products" className="block text-center">
                    <Package className="h-8 w-8 mx-auto mb-3 text-[#FDB913]" />
                    <h4 className="font-semibold mb-1">Products</h4>
                    <p className="text-sm text-muted-foreground">Browse our catalog</p>
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:border-primary/50 transition-colors">
                <CardContent className="pt-6">
                  <Link href="/services" className="block text-center">
                    <Settings className="h-8 w-8 mx-auto mb-3 text-[#FDB913]" />
                    <h4 className="font-semibold mb-1">Services</h4>
                    <p className="text-sm text-muted-foreground">Explore our services</p>
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:border-primary/50 transition-colors">
                <CardContent className="pt-6">
                  <Link href="/contact" className="block text-center">
                    <Mail className="h-8 w-8 mx-auto mb-3 text-[#FDB913]" />
                    <h4 className="font-semibold mb-1">Contact</h4>
                    <p className="text-sm text-muted-foreground">Get in touch</p>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Suggested Products */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center">Popular Products</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {suggestedProducts.map((product) => (
                <Card key={product.name} className="hover:border-primary/50 transition-colors">
                  <CardContent className="pt-6">
                    <Link href={product.href} className="block text-center">
                      <product.icon className="h-12 w-12 mx-auto mb-3 text-[#FDB913]" />
                      <h4 className="font-semibold">{product.name}</h4>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Back Button */}
          <div className="text-center mt-12">
            <Button asChild variant="ghost" size="lg">
              <button onClick={() => window.history.back()}>
                <ArrowLeft className="mr-2 h-5 w-5" />
                Go Back
              </button>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
