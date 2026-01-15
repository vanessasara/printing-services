"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, ArrowRight, Package, Ruler, Palette, ZoomIn } from "lucide-react"
import { Product, urlFor } from "@/lib/sanity.queries"
import PortableTextRenderer from "@/components/PortableTextRenderer"

interface ProductDetailSanityProps {
  product: Product
}

export default function ProductDetailSanity({ product }: ProductDetailSanityProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Prepare all images (banner + gallery)
  const allImages = [
    product.bannerImage,
    ...(product.gallery || [])
  ]

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setMousePosition({ x, y })
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section with Product Images */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Images - Left Side (2 columns) */}
            <div className="lg:col-span-2 space-y-4">
              <div
                className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden group cursor-zoom-in bg-muted"
                onMouseEnter={() => setIsZoomed(true)}
                onMouseLeave={() => setIsZoomed(false)}
                onMouseMove={handleMouseMove}
              >
                {allImages[selectedImage] && (
                  <Image
                    src={urlFor(allImages[selectedImage]).width(1000).height(800).url()}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-in-out"
                    style={isZoomed ? {
                      transform: 'scale(1.5)',
                      transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`
                    } : {}}
                  />
                )}
                {/* Zoom Icon Indicator */}
                <div className="absolute top-4 right-4 bg-black/50 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:block">
                  <ZoomIn className="h-5 w-5 text-white" />
                </div>
              </div>

              {/* Thumbnail Gallery */}
              {allImages.length > 1 && (
                <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                  {allImages.map((img, idx) => (
                    <div
                      key={idx}
                      className={`relative h-32 rounded-lg overflow-hidden cursor-pointer transition-all ${
                        selectedImage === idx
                          ? 'ring-2 ring-primary ring-offset-2'
                          : 'hover:opacity-75'
                      }`}
                      onClick={() => setSelectedImage(idx)}
                    >
                      <Image
                        src={urlFor(img).width(200).height(200).url()}
                        alt={`${product.name} ${idx + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* Product Info - Mobile/Tablet */}
              <div className="lg:hidden">
                <div className="text-sm text-muted-foreground mb-2">{product.category}</div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{product.name}</h1>
                {product.bannerDescription && (
                  <p className="text-xl text-muted-foreground mb-6">{product.bannerDescription}</p>
                )}

                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {product.shortDescription}
                </p>

                {product.features && product.features.length > 0 && (
                  <div className="space-y-2 mb-8">
                    <h3 className="font-semibold mb-3">Key Features:</h3>
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Right Sidebar - Product Info (1 column) */}
            <div className="lg:col-span-1">
              {/* Product Info - Desktop Only */}
              <div className="hidden lg:block mb-6">
                <div className="text-sm text-muted-foreground mb-2">{product.category}</div>
                <h1 className="text-3xl font-bold mb-3">{product.name}</h1>
                {product.bannerDescription && (
                  <p className="text-lg text-muted-foreground mb-4">{product.bannerDescription}</p>
                )}

                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {product.shortDescription}
                </p>

                {product.features && product.features.length > 0 && (
                  <div className="space-y-1.5 mb-6">
                    <h3 className="font-semibold text-sm mb-2">Key Features:</h3>
                    {product.features.slice(0, 5).map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-xs text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Pricing Section */}
              <Card className="mb-6">
                <CardContent className="p-6">
                  {product.startingPrice && (
                    <div className="mb-4">
                      <p className="text-sm text-muted-foreground mb-1">Starting at</p>
                      <p className="text-3xl font-bold">{product.startingPrice}</p>
                    </div>
                  )}

                  <div className="space-y-3">
                    <Button asChild size="lg" className="w-full">
                      <Link href="/request-quote">
                        Get Custom Quote
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="w-full">
                      <Link href="/request-samples">Request Samples</Link>
                    </Button>
                  </div>

                  <div className="mt-6 pt-6 border-t space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Package className="h-4 w-4" />
                      <span>Free Design Support</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Palette className="h-4 w-4" />
                      <span>Custom Printing Options</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Ruler className="h-4 w-4" />
                      <span>Multiple Sizes Available</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      {product.overview && (
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Product Overview</h2>
              <PortableTextRenderer value={product.overview} />
            </div>
          </div>
        </section>
      )}

      {/* Specifications */}
      {product.specifications && (
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Specifications</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {product.specifications.sizes && product.specifications.sizes.length > 0 && (
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-4 flex items-center gap-2">
                        <Ruler className="h-5 w-5 text-primary" />
                        Available Sizes
                      </h3>
                      <ul className="space-y-2">
                        {product.specifications.sizes.map((size, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground">{size}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}

                {product.specifications.materials && product.specifications.materials.length > 0 && (
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-4 flex items-center gap-2">
                        <Package className="h-5 w-5 text-primary" />
                        Materials
                      </h3>
                      <ul className="space-y-2">
                        {product.specifications.materials.map((material, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground">{material}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}

                {product.specifications.finishes && product.specifications.finishes.length > 0 && (
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-4 flex items-center gap-2">
                        <Palette className="h-5 w-5 text-primary" />
                        Finishes
                      </h3>
                      <ul className="space-y-2">
                        {product.specifications.finishes.map((finish, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground">{finish}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Pricing Tiers */}
      {product.pricingTiers && product.pricingTiers.length > 0 && (
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Pricing Options</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {product.pricingTiers.map((tier, idx) => (
                  <Card key={idx} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <p className="text-sm text-muted-foreground mb-2">Quantity</p>
                      <p className="text-2xl font-bold mb-4">{tier.quantity}</p>
                      <p className="text-3xl font-bold text-primary">{tier.price}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <p className="text-center text-sm text-muted-foreground mt-6">
                * Prices may vary based on customization options
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Related Products */}
      {product.relatedProducts && product.relatedProducts.length > 0 && (
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Related Products</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {product.relatedProducts.map((related) => (
                <Link key={related._id} href={`/products/${related.slug.current}`}>
                  <Card className="h-full hover:shadow-xl transition-all duration-300 group overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      {related.cardImage && (
                        <Image
                          src={urlFor(related.cardImage).width(400).height(300).url()}
                          alt={related.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      )}
                      {related.startingPrice && (
                        <div className="absolute top-3 right-3 bg-background px-3 py-1 rounded-full text-xs font-medium">
                          {related.startingPrice}
                        </div>
                      )}
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        {related.name}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">{related.shortDescription}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Request a custom quote for {product.name} and we'll help you create something amazing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/request-quote">Get Custom Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
