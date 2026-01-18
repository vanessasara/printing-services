import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, ArrowRight, Package, Ruler, Palette } from "lucide-react";
import { getProductBySlug, getAllProducts } from "@/components/lib/products";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.name} - Custom Printing | Fast Printing & Packaging`,
    description: product.description,
    keywords: `${product.name}, custom ${product.name}, printing, ${slug}`,
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  // All images including hero and gallery
  const allImages = [product.heroImage, ...product.images];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Product Images */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Images - Left Side (2 columns) */}
            <div className="lg:col-span-2 space-y-4">
              <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden bg-muted">
                <Image
                  src={product.heroImage}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Thumbnail Gallery */}
              {allImages.length > 1 && (
                <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                  {allImages.slice(0, 4).map((img, idx) => (
                    <div
                      key={idx}
                      className="relative h-24 md:h-32 rounded-lg overflow-hidden cursor-pointer hover:opacity-75 transition-all"
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
              )}

              {/* Product Info - Mobile/Tablet */}
              <div className="lg:hidden">
                <div className="text-sm text-muted-foreground mb-2">{product.category}</div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{product.name}</h1>
                <p className="text-xl text-muted-foreground mb-6">{product.tagline}</p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {product.description}
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
                <p className="text-lg text-muted-foreground mb-4">{product.tagline}</p>

                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {product.description}
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
                  <div className="mb-4">
                    <p className="text-sm text-muted-foreground mb-1">Turnaround Time</p>
                    <p className="text-lg font-semibold">{product.turnaround}</p>
                  </div>

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

      {/* Specifications */}
      {product.specifications && product.specifications.length > 0 && (
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Specifications</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {product.specifications.map((spec, idx) => (
                  <Card key={idx}>
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-4 flex items-center gap-2">
                        {spec.name}
                      </h3>
                      <ul className="space-y-2">
                        {spec.options.map((option, optIdx) => (
                          <li key={optIdx} className="text-sm text-muted-foreground">{option}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Pricing Tiers */}
      {product.pricing && product.pricing.length > 0 && (
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Pricing Options</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {product.pricing.map((tier, idx) => (
                  <Card key={idx} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <p className="text-sm text-muted-foreground mb-2">Quantity</p>
                      <p className="text-2xl font-bold mb-4">{tier.quantity}</p>
                      <p className="text-lg font-semibold text-primary">{tier.price}</p>
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
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Related Products</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.relatedProducts.map((related) => {
                const relatedProduct = getProductBySlug(related.slug);
                return (
                  <Link key={related.slug} href={`/products/${related.slug}`}>
                    <Card className="h-full hover:shadow-xl transition-all duration-300 group overflow-hidden">
                      <div className="relative h-48 overflow-hidden">
                        {relatedProduct && (
                          <Image
                            src={relatedProduct.heroImage}
                            alt={related.name}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        )}
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                          {related.name}
                        </h3>
                        {relatedProduct && (
                          <p className="text-sm text-muted-foreground line-clamp-2">{relatedProduct.tagline}</p>
                        )}
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
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
  );
}

// Generate static params for all products
export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}
