"use client"

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, ArrowRight, Star, Package, Ruler, Palette, ZoomIn } from "lucide-react";
import { Product } from "@/components/lib/products";
import ProductOrderSection from "@/components/ProductOrderSection";
import CartSheet from "@/components/CartSheet";

interface ProductDetailClientProps {
  product: Product;
}

// Helper function for usage example images
function getUsageImage(slug: string, index: number): string {
  const usageImages: Record<string, string[]> = {
    "business-cards": [
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&q=75",
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=75",
      "https://images.unsplash.com/photo-1560472355-536de3962603?w=600&q=75",
    ],
    "brochures": [
      "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=600&q=75",
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&q=75",
      "https://images.unsplash.com/photo-1561070791-36c11767b26a?w=600&q=75",
    ],
    "flyers": [
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=75",
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&q=75",
      "https://images.unsplash.com/photo-1561070791-36c11767b26a?w=600&q=75",
    ],
    "posters": [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=75",
      "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=600&q=75",
      "https://images.unsplash.com/photo-1561070791-36c11767b26a?w=600&q=75",
    ],
    "banners": [
      "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&q=75",
      "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=600&q=75",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=75",
    ],
    "custom-boxes": [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=75",
      "https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=600&q=75",
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&q=75",
    ],
    "stickers": [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=75",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=75",
      "https://images.unsplash.com/photo-1561070791-36c11767b26a?w=600&q=75",
    ],
    "letterheads": [
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&q=75",
      "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=600&q=75",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=75",
    ],
  };

  const defaultImages = [
    "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=600&q=75",
    "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&q=75",
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=75",
  ];

  return (usageImages[slug] || defaultImages)[index] || defaultImages[0];
}

export default function ProductDetailClient({ product }: ProductDetailClientProps) {
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(product.heroImage);
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  return (
    <>
      <div className="min-h-screen">
        {/* Hero Section with Product Images */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Images - Left Side (2 columns) */}
              <div className="lg:col-span-2 space-y-4">
                <div
                  className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden group cursor-zoom-in"
                  onMouseEnter={() => setIsZoomed(true)}
                  onMouseLeave={() => setIsZoomed(false)}
                  onMouseMove={handleMouseMove}
                >
                  <Image
                    src={selectedImage}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-in-out"
                    style={isZoomed ? {
                      transform: 'scale(1.5)',
                      transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`
                    } : {}}
                  />
                  {/* Zoom Icon Indicator */}
                  <div className="absolute top-4 right-4 bg-black/50 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:block">
                    <ZoomIn className="h-5 w-5 text-white" />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {product.images.map((img, idx) => (
                    <div
                      key={idx}
                      className={`relative h-32 rounded-lg overflow-hidden cursor-pointer transition-all ${
                        selectedImage === img
                          ? 'ring-2 ring-primary ring-offset-2'
                          : 'hover:opacity-75'
                      }`}
                      onClick={() => setSelectedImage(img)}
                    >
                      <Image
                        src={img}
                        alt={`${product.name} ${idx + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>

                {/* Product Info - Mobile/Tablet */}
                <div className="lg:hidden">
                  <div className="text-sm text-muted-foreground mb-2">{product.category}</div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">{product.name}</h1>
                  <p className="text-xl text-muted-foreground mb-6">{product.tagline}</p>

                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">(500+ reviews)</span>
                  </div>

                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="space-y-2 mb-8">
                    <h3 className="font-semibold mb-3">Key Features:</h3>
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Sidebar - Order Section (1 column) */}
              <div className="lg:col-span-1">
                {/* Product Info - Desktop Only */}
                <div className="hidden lg:block mb-6">
                  <div className="text-sm text-muted-foreground mb-2">{product.category}</div>
                  <h1 className="text-3xl font-bold mb-3">{product.name}</h1>
                  <p className="text-lg text-muted-foreground mb-4">{product.tagline}</p>

                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">(500+ reviews)</span>
                  </div>

                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="space-y-1.5 mb-6">
                    <h3 className="font-semibold text-sm mb-2">Key Features:</h3>
                    {product.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-xs text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Order Section */}
                <ProductOrderSection product={product} onCartOpen={() => setCartOpen(true)} />
              </div>
            </div>
          </div>
        </section>

        {/* Usage Examples Gallery */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                See It In Action
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Real-world applications and examples of {product.name.toLowerCase()} in professional settings
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="relative h-64 rounded-lg overflow-hidden group">
                  <Image
                    src={getUsageImage(product.slug, 0)}
                    alt={`${product.name} usage example 1`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <p className="text-white font-medium p-4">Professional Use</p>
                  </div>
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden group">
                  <Image
                    src={getUsageImage(product.slug, 1)}
                    alt={`${product.name} usage example 2`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <p className="text-white font-medium p-4">Material Quality</p>
                  </div>
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden group">
                  <Image
                    src={getUsageImage(product.slug, 2)}
                    alt={`${product.name} usage example 3`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <p className="text-white font-medium p-4">Design Variations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specifications */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Specifications & Options
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                {product.specifications.map((spec, idx) => (
                  <Card key={idx}>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3 mb-4">
                        {idx === 0 && <Ruler className="h-5 w-5 text-primary mt-0.5" />}
                        {idx === 1 && <Package className="h-5 w-5 text-primary mt-0.5" />}
                        {idx === 2 && <Palette className="h-5 w-5 text-primary mt-0.5" />}
                        {idx === 3 && <Palette className="h-5 w-5 text-primary mt-0.5" />}
                        <h3 className="font-semibold text-lg">{spec.name}</h3>
                      </div>
                      <ul className="space-y-2">
                        {spec.options.map((option, optIdx) => (
                          <li key={optIdx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{option}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Table */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Sample Pricing
              </h2>

              <Card>
                <CardContent className="pt-6">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-4 px-4">Quantity</th>
                          <th className="text-left py-4 px-4">Price Range</th>
                          <th className="text-left py-4 px-4">Per Unit</th>
                        </tr>
                      </thead>
                      <tbody>
                        {product.pricing.map((tier, idx) => (
                          <tr key={idx} className="border-b last:border-0">
                            <td className="py-4 px-4 font-semibold">{tier.quantity} units</td>
                            <td className="py-4 px-4">{tier.price}</td>
                            <td className="py-4 px-4 text-sm text-muted-foreground">
                              {Math.round(parseInt(tier.price.split('-')[0].replace(/[^0-9]/g, '')) / parseInt(tier.quantity))} PKR
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm text-muted-foreground mt-6">
                    * Prices are indicative and may vary based on specifications, materials, and finishing options.
                    Contact us for an exact quote.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Related Products */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>

              <div className="grid md:grid-cols-3 gap-6">
                {product.relatedProducts.map((related) => (
                  <Link key={related.slug} href={`/products/${related.slug}`}>
                    <Card className="hover:shadow-lg transition-all">
                      <CardContent className="pt-6">
                        <h3 className="font-semibold mb-2 hover:text-primary transition-colors">
                          {related.name}
                        </h3>
                        <span className="text-sm text-primary inline-flex items-center">
                          View Product
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </span>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Order {product.name}?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Get a custom quote tailored to your specific requirements
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary">
                  <Link href="/request-quote">Request Free Quote</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <Link href="/contact">Contact Sales</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Cart Sheet */}
      <CartSheet open={cartOpen} onOpenChange={setCartOpen} />
    </>
  );
}
