import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Filter } from "lucide-react";
import {portfolioCategories, portfolioItems}from '@/components/lib/portfolio'

export const metadata = {
  title: "Portfolio - Our Work | Fast Printing & Packaging",
  description: "Explore our portfolio of successful printing and packaging projects. Real results for real businesses across Pakistan.",
  keywords: "printing portfolio, packaging portfolio, case studies, printing examples, packaging examples",
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Real projects, real results. Explore how we've helped businesses across Pakistan 
              elevate their brand through exceptional printing and packaging.
            </p>
            <div className="flex items-center justify-center gap-8 text-sm">
              <div>
                <div className="text-3xl font-bold text-primary mb-1">{portfolioItems.length}+</div>
                <div className="text-muted-foreground">Projects Featured</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">500+</div>
                <div className="text-muted-foreground">Total Completed</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">99%</div>
                <div className="text-muted-foreground">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-muted/30 border-b sticky top-16 z-10 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {portfolioCategories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </div>
            <Button variant="outline" size="sm">
              <Filter className="mr-2 h-4 w-4" />
              More Filters
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Featured Projects
              </h2>
              <p className="text-muted-foreground text-lg">
                Showcasing our most impactful work and success stories
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Featured Project 1 */}
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="relative h-80">
                  <Image
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=75"
                    alt="Featured packaging project"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                    <div className="inline-flex px-3 py-1 bg-[#FDB913] text-black rounded-full text-sm font-semibold mb-3 self-start">
                      Featured
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Premium Packaging Design</h3>
                    <p className="text-white/90 text-sm mb-4">
                      Custom luxury packaging that elevated brand perception and increased sales by 45%
                    </p>
                    <Link href="/portfolio/luxury-cosmetic-packaging" className="inline-flex items-center text-[#FDB913] font-semibold hover:gap-2 transition-all">
                      View Case Study
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </Card>

              {/* Featured Project 2 */}
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="relative h-80">
                  <Image
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=75"
                    alt="Featured branding project"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                    <div className="inline-flex px-3 py-1 bg-[#FDB913] text-black rounded-full text-sm font-semibold mb-3 self-start">
                      Featured
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Complete Brand Identity</h3>
                    <p className="text-white/90 text-sm mb-4">
                      Full rebranding and print collateral suite for a leading restaurant chain
                    </p>
                    <Link href="/portfolio/restaurant-brand-identity" className="inline-flex items-center text-[#FDB913] font-semibold hover:gap-2 transition-all">
                      View Case Study
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </Card>

              {/* Featured Project 3 */}
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="relative h-80">
                  <Image
                    src="https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=800&q=75"
                    alt="Featured marketing materials"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                    <div className="inline-flex px-3 py-1 bg-[#FDB913] text-black rounded-full text-sm font-semibold mb-3 self-start">
                      Featured
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Trade Show Materials</h3>
                    <p className="text-white/90 text-sm mb-4">
                      Large format printing and displays that captured 30% more leads at exhibitions
                    </p>
                    <Link href="/portfolio/tech-startup-branding" className="inline-flex items-center text-[#FDB913] font-semibold hover:gap-2 transition-all">
                      View Case Study
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <Link key={item.slug} href={`/portfolio/${item.slug}`}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 group overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-sm font-medium">View Case Study →</span>
                    </div>
                  </div>
                  <CardContent className="pt-6">
                    <div className="text-sm text-primary mb-2">{item.client}</div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {item.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 bg-muted rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Let's discuss how we can help elevate your brand with exceptional printing and packaging
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/request-quote">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
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
