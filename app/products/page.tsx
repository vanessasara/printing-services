import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight, Filter, Check, Zap, ShieldCheck, Tag, Palette, Leaf } from "lucide-react";
import {productCategories} from '@/components/lib/products'

export const metadata = {
  title: "Our Products - Printing & Packaging Products | Fast Printing",
  description: "Browse our extensive range of printing and packaging products. Business cards, brochures, boxes, labels, and more - all customizable to your needs.",
  keywords: "printing products, packaging products, business cards, brochures, custom boxes, labels, stickers",
};

export default function ProductsPage() {
  const totalProducts = productCategories.reduce((acc, cat) => acc + cat.products.length, 0);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Products
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Browse our extensive range of {totalProducts}+ customizable printing and packaging products.
              From business essentials to specialty items, we've got everything you need.
            </p>

            {/* Inline Pills Benefits */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <div className="inline-flex items-center gap-2 bg-[#FDB913] text-black px-4 py-2 rounded-full font-semibold text-sm shadow-md">
                <Palette className="h-4 w-4" strokeWidth={3} />
                <span>FREE Design</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-[#FDB913] text-black px-4 py-2 rounded-full font-semibold text-sm shadow-md">
                <Zap className="h-4 w-4" strokeWidth={3} />
                <span>Fast Delivery</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-[#FDB913] text-black px-4 py-2 rounded-full font-semibold text-sm shadow-md">
                <ShieldCheck className="h-4 w-4" strokeWidth={3} />
                <span>Premium Quality</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-[#FDB913] text-black px-4 py-2 rounded-full font-semibold text-sm shadow-md">
                <Tag className="h-4 w-4" strokeWidth={3} />
                <span>Best Price</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-[#FDB913] text-black px-4 py-2 rounded-full font-semibold text-sm shadow-md">
                <Leaf className="h-4 w-4" strokeWidth={3} />
                <span>Eco-Friendly</span>
              </div>
            </div>

            <Button asChild size="lg">
              <Link href="/request-quote">
                Get Custom Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Filter Section - Placeholder for future functionality */}
      <section className="py-8 bg-muted/30 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-semibold">Showing {totalProducts} Products</h2>
            </div>
            <Button variant="outline" size="sm">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </div>
        </div>
      </section>

      {/* Products by Category */}
      {productCategories.map((category, idx) => (
        <section key={idx} className={idx % 2 === 1 ? "py-16 md:py-20 bg-muted/30" : "py-16 md:py-20"}>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">{category.name}</h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.products.map((product) => (
                <Link key={product.slug} href={`/products/${product.slug}`}>
                  <Card className="h-full hover:shadow-xl transition-all duration-300 group overflow-hidden">
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-3 right-3 bg-background px-3 py-1 rounded-full text-xs font-medium">
                        From {product.startingPrice}
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="group-hover:text-primary transition-colors">
                        {product.name}
                      </CardTitle>
                      <CardDescription>{product.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <span className="text-primary font-medium inline-flex items-center group-hover:gap-2 transition-all">
                        View Details
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              We offer custom solutions for unique requirements. Contact us to discuss your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link href="/request-samples">Request Samples</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
