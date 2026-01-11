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

// Helper functions for category banners and product in-use sections
function getCategoryBannerImage(categoryName: string): string {
  const banners: Record<string, string> = {
    "Business Essentials": "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=1920&q=85",
    "Marketing Materials": "https://images.unsplash.com/photo-1561070791-36c11767b26a?w=1920&q=85",
    "Large Format": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=85",
    "Packaging Products": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=85",
    "Specialty Items": "https://images.unsplash.com/photo-1555421689-d68471e189f2?w=1920&q=85",
  };
  return banners[categoryName] || "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=1920&q=85";
}

function getCategoryDescription(categoryName: string): string {
  const descriptions: Record<string, string> = {
    "Business Essentials": "Professional business stationery that makes a lasting impression",
    "Marketing Materials": "Eye-catching promotional materials to amplify your brand message",
    "Large Format": "Bold, impactful prints for maximum visibility and brand presence",
    "Packaging Products": "Custom packaging solutions that protect and promote your products",
    "Specialty Items": "Unique printing solutions for special occasions and events",
  };
  return descriptions[categoryName] || "Quality printing solutions for your business needs";
}

function getProductInUseImage(index: number): string {
  const images = [
    "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&q=80", // Business cards in use
    "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=800&q=80", // Brochures display
    "https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=800&q=80", // Packaging example
    "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=800&q=80", // Banner installation
    "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=800&q=80", // Office materials
  ];
  return images[index] || images[0];
}

function getInUseTitle(index: number): string {
  const titles = [
    "Make Every Connection Count",
    "Marketing That Gets Noticed",
    "Packaging That Sells",
    "Visibility That Drives Traffic",
  ];
  return titles[index] || "Professional Printing Solutions";
}

function getInUseDescription(index: number): string {
  const descriptions = [
    "From networking events to client meetings, our business cards help you make memorable first impressions. Premium quality materials and finishes ensure your brand stands out.",
    "Transform your marketing campaigns with professionally printed materials. Our brochures, flyers, and promotional items are designed to capture attention and drive engagement.",
    "Protect your products while showcasing your brand with our custom packaging solutions. From retail boxes to shipping materials, we deliver quality that impresses.",
    "Maximize your brand visibility with large format printing. Perfect for trade shows, storefronts, and events that demand attention.",
  ];
  return descriptions[index] || "Discover how our printing solutions can elevate your business.";
}

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
        <div key={idx}>
          <section className={idx % 2 === 1 ? "py-16 md:py-20 bg-muted/30" : "py-16 md:py-20"}>
            <div className="container mx-auto px-4">
              {/* Category Header Banner */}
              <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden mb-12">
                <Image
                  src={getCategoryBannerImage(category.name)}
                  alt={`${category.name} banner`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent flex items-center">
                  <div className="container mx-auto px-8">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">{category.name}</h2>
                    <p className="text-white/90 text-lg max-w-2xl">
                      {getCategoryDescription(category.name)}
                    </p>
                  </div>
                </div>
              </div>

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

          {/* Product in Use Section - Between Categories */}
          {idx < productCategories.length - 1 && (
            <section className="py-12 md:py-16 bg-gradient-to-br from-primary/5 to-background">
              <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="relative h-80 md:h-96 rounded-xl overflow-hidden">
                    <Image
                      src={getProductInUseImage(idx)}
                      alt="Product in use"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                      {getInUseTitle(idx)}
                    </h3>
                    <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                      {getInUseDescription(idx)}
                    </p>
                    <Button asChild size="lg">
                      <Link href="/portfolio">
                        See More Examples
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
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
