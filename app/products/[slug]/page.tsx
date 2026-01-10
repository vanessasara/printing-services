import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, ArrowRight, Star, Package, Ruler, Palette } from "lucide-react";
import { getProductBySlug, getAllProducts } from "@/components/lib/products";

interface ProductPageProps {
  params: {
    slug: string;
  };
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

  return (
    <div className="min-h-screen">
      {/* Hero Section with Product Images */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Images */}
            <div className="space-y-4">
              <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
                <Image
                  src={product.heroImage}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {product.images.map((img, idx) => (
                  <div key={idx} className="relative h-32 rounded-lg overflow-hidden cursor-pointer hover:opacity-75 transition">
                    <Image
                      src={img}
                      alt={`${product.name} ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
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

              <div className="bg-muted/30 rounded-lg p-6 mb-8">
                <div className="flex items-center gap-2 mb-3">
                  <Package className="h-5 w-5 text-primary" />
                  <span className="font-semibold">Starting from PKR 3,000</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Final price depends on quantity, materials, and finishing options
                </p>
                <div className="text-sm text-muted-foreground">
                  <strong>Turnaround:</strong> {product.turnaround}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button asChild size="lg" className="flex-1">
                  <Link href="/request-quote">
                    Get Custom Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="flex-1">
                  <Link href="/request-samples">Request Samples</Link>
                </Button>
              </div>

              <div className="space-y-2">
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
        </div>
      </section>

      {/* Specifications */}
      <section className="py-16 md:py-24 bg-muted/30">
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
  );
}

// Generate static params for all products
export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}
