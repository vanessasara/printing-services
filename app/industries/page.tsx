import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight, GraduationCap, Stethoscope, Utensils, ShoppingBag, Briefcase, Calendar, Cpu, Shirt } from "lucide-react";
import {industriesList} from '@/components/lib/industries'

export const metadata = {
  title: "Industries We Serve - Printing & Packaging Solutions | Fast Printing",
  description: "Specialized printing and packaging solutions for schools, healthcare, restaurants, retail, corporate, events, and more. Industry-specific expertise.",
  keywords: "industry printing solutions, school printing, healthcare printing, restaurant printing, retail packaging, corporate printing",
};


export default function IndustriesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Industries We Serve
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Specialized printing and packaging solutions tailored to your industry's unique needs. 
              We understand the challenges and opportunities in your sector.
            </p>
            <div className="flex items-center justify-center gap-8 text-sm">
              <div>
                <div className="text-3xl font-bold text-primary mb-1">8+</div>
                <div className="text-muted-foreground">Industries</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">500+</div>
                <div className="text-muted-foreground">Clients</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">15+</div>
                <div className="text-muted-foreground">Years</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industriesList.map((industry) => (
              <Link key={industry.slug} href={`/industries/${industry.slug}`}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 group overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={industry.image}
                      alt={industry.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className="p-2 bg-white rounded-lg">
                        <industry.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {industry.name}
                    </CardTitle>
                    <CardDescription>{industry.tagline}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {industry.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        {industry.caseStudies} projects completed
                      </span>
                      <span className="text-primary font-medium inline-flex items-center group-hover:gap-2 transition-all">
                        Explore
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Preview */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Success Stories & Results
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                See how we've helped businesses across industries achieve their goals with our printing and packaging solutions
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Before/After Example 1 */}
              <Card className="overflow-hidden">
                <div className="grid grid-cols-2">
                  <div className="relative h-64">
                    <Image
                      src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&q=75"
                      alt="Before state"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Before
                    </div>
                  </div>
                  <div className="relative h-64">
                    <Image
                      src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=75"
                      alt="After state"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      After
                    </div>
                  </div>
                </div>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-2">Retail Brand Transformation</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Upgraded from generic packaging to custom-designed boxes with premium finishes, resulting in 45% increase in customer satisfaction.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-primary font-medium">
                    <ArrowRight className="h-4 w-4" />
                    <span>45% satisfaction increase</span>
                  </div>
                </CardContent>
              </Card>

              {/* Before/After Example 2 */}
              <Card className="overflow-hidden">
                <div className="grid grid-cols-2">
                  <div className="relative h-64">
                    <Image
                      src="https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=600&q=75"
                      alt="Before implementation"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Before
                    </div>
                  </div>
                  <div className="relative h-64">
                    <Image
                      src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&q=75"
                      alt="After implementation"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      After
                    </div>
                  </div>
                </div>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-2">Educational Institution Rebrand</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Streamlined printing process across 15 campuses with consistent branding, saving 30% on costs while improving quality.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-primary font-medium">
                    <ArrowRight className="h-4 w-4" />
                    <span>30% cost reduction</span>
                  </div>
                </CardContent>
              </Card>

              {/* Results Showcase */}
              <Card className="md:col-span-2">
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-4 gap-6 text-center">
                    <div>
                      <div className="relative h-20 w-20 mx-auto mb-3">
                        <Image
                          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=200&q=70"
                          alt="Client satisfaction"
                          fill
                          className="object-cover rounded-full"
                        />
                      </div>
                      <div className="text-3xl font-bold text-primary mb-1">500+</div>
                      <div className="text-sm text-muted-foreground">Happy Clients</div>
                    </div>
                    <div>
                      <div className="relative h-20 w-20 mx-auto mb-3">
                        <Image
                          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=200&q=70"
                          alt="Quality results"
                          fill
                          className="object-cover rounded-full"
                        />
                      </div>
                      <div className="text-3xl font-bold text-primary mb-1">99%</div>
                      <div className="text-sm text-muted-foreground">Quality Rate</div>
                    </div>
                    <div>
                      <div className="relative h-20 w-20 mx-auto mb-3">
                        <Image
                          src="https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=200&q=70"
                          alt="Projects completed"
                          fill
                          className="object-cover rounded-full"
                        />
                      </div>
                      <div className="text-3xl font-bold text-primary mb-1">2000+</div>
                      <div className="text-sm text-muted-foreground">Projects Done</div>
                    </div>
                    <div>
                      <div className="relative h-20 w-20 mx-auto mb-3">
                        <Image
                          src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=200&q=70"
                          alt="Fast delivery"
                          fill
                          className="object-cover rounded-full"
                        />
                      </div>
                      <div className="text-3xl font-bold text-primary mb-1">24h</div>
                      <div className="text-sm text-muted-foreground">Rush Available</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Industry-Specific Matters */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Why Industry Expertise Matters
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3">Compliance Knowledge</h3>
                  <p className="text-muted-foreground">
                    We understand industry-specific regulations and standards, from food-safe materials 
                    to medical compliance requirements.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3">Proven Solutions</h3>
                  <p className="text-muted-foreground">
                    Years of experience in each industry means we know what works and can recommend 
                    the best solutions for your needs.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3">Industry Trends</h3>
                  <p className="text-muted-foreground">
                    We stay updated on trends and innovations in your industry, ensuring your materials 
                    are modern and effective.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3">Specialized Materials</h3>
                  <p className="text-muted-foreground">
                    Access to industry-specific materials and finishes that meet your sector's unique 
                    requirements and aesthetic preferences.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's Discuss Your Industry Needs
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Get expert advice on the best printing and packaging solutions for your specific industry
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/request-quote">Request Free Quote</Link>
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
