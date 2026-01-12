import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, ArrowRight, Users, Award, TrendingUp, BarChart3 } from "lucide-react";
import { getIndustryBySlug, getAllIndustries } from "@/components/lib/industries";

// Helper function to get industry-specific images
function getIndustryImages(slug: string) {
  const imageMap: Record<string, { challenges: string; solutions: string; caseStudy: string; statistics: string }> = {
    "schools-education": {
      challenges: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=75",
      solutions: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=600&q=75",
      caseStudy: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=75",
      statistics: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=75",
    },
    "healthcare-medical": {
      challenges: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=75",
      solutions: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&q=75",
      caseStudy: "https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?w=600&q=75",
      statistics: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=75",
    },
    "restaurants-food": {
      challenges: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=75",
      solutions: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=600&q=75",
      caseStudy: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=600&q=75",
      statistics: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=75",
    },
    "retail-ecommerce": {
      challenges: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=75",
      solutions: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=600&q=75",
      caseStudy: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=600&q=75",
      statistics: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=75",
    },
  };

  // Default images for industries not specifically mapped
  const defaultImages = {
    challenges: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=75",
    solutions: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=75",
    caseStudy: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=75",
    statistics: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=75",
  };

  return imageMap[slug] || defaultImages;
}

interface IndustryPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    return {
      title: "Industry Not Found",
    };
  }

  return {
    title: `${industry.name} Printing Solutions | Fast Printing & Packaging`,
    description: industry.description,
    keywords: `${industry.name}, printing solutions, packaging, ${slug}`,
  };
}

export default async function IndustryDetailPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={industry.heroImage}
            alt={industry.name}
            fill
            className="object-cover brightness-50"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {industry.name}
            </h1>
            <p className="text-xl mb-8 opacity-90">{industry.tagline}</p>
            <div className="flex items-center gap-8 mb-8">
              <div>
                <div className="text-3xl font-bold mb-1">{industry.stats.clientsServed}</div>
                <div className="text-sm opacity-75">Clients Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">{industry.stats.projectsCompleted}</div>
                <div className="text-sm opacity-75">Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">{industry.stats.satisfactionRate}</div>
                <div className="text-sm opacity-75">Satisfaction</div>
              </div>
            </div>
            <Button asChild size="lg">
              <Link href="/request-quote">
                Get Industry-Specific Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Industry-Specific Expertise
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-12">
              {industry.description} With years of experience serving the {industry.name.toLowerCase()} sector, 
              we understand your unique challenges and have developed specialized solutions that deliver results.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="inline-flex p-3 bg-primary/10 rounded-full mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Deep Understanding</h3>
                  <p className="text-sm text-muted-foreground">
                    We know your industry inside and out
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="inline-flex p-3 bg-primary/10 rounded-full mb-4">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Proven Results</h3>
                  <p className="text-sm text-muted-foreground">
                    Track record of successful projects
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="inline-flex p-3 bg-primary/10 rounded-full mb-4">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Continuous Innovation</h3>
                  <p className="text-sm text-muted-foreground">
                    Staying ahead of industry trends
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Your Challenges, Our Solutions
            </h2>

            {/* Challenge Image */}
            <div className="mb-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative h-80 rounded-xl overflow-hidden">
                  <Image
                    src={getIndustryImages(industry.slug).challenges}
                    alt={`${industry.name} challenges`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-6">Industry Challenges We Address</h3>
                  <div className="space-y-4">
                    {industry.challenges.map((challenge, idx) => (
                      <Card key={idx} className="border-l-4 border-l-destructive">
                        <CardContent className="pt-4 pb-4">
                          <h4 className="font-semibold mb-2 text-destructive">
                            {challenge.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">{challenge.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Solution Image */}
            <div>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="text-2xl font-bold mb-6">Our Tailored Solutions</h3>
                  <div className="space-y-4">
                    {industry.solutions.map((solution, idx) => (
                      <Card key={idx} className="border-l-4 border-l-green-600">
                        <CardContent className="pt-4 pb-4">
                          <h4 className="font-semibold mb-2 text-green-600">
                            {solution.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">{solution.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
                <div className="relative h-80 rounded-xl overflow-hidden order-1 md:order-2">
                  <Image
                    src={getIndustryImages(industry.slug).solutions}
                    alt={`${industry.name} solutions`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products for This Industry */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Popular Products for {industry.name}
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industry.products.map((product, idx) => (
                <Card key={idx} className="overflow-hidden hover:shadow-lg transition-all">
                  <div className="relative h-48">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">{product.name}</h3>
                    <p className="text-sm text-muted-foreground">{product.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-10">
              <Button asChild size="lg">
                <Link href="/products">
                  View All Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Success Stories
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
              {/* Case Study Image */}
              <div className="relative h-96 rounded-xl overflow-hidden">
                <Image
                  src={getIndustryImages(industry.slug).caseStudy}
                  alt={`${industry.name} success story`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <div className="inline-flex px-4 py-2 bg-green-500 rounded-full text-sm font-semibold mb-3">
                      Proven Results
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Real Impact for Real Businesses</h3>
                    <p className="text-white/90">
                      See how we've helped companies in the {industry.name.toLowerCase()} sector achieve measurable success
                    </p>
                  </div>
                </div>
              </div>

              {/* Case Studies List */}
              <div className="space-y-4">
                {industry.caseStudies.map((study, idx) => (
                  <Card key={idx}>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <CheckCircle2 className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-2">{study.client}</h3>
                          <p className="text-muted-foreground mb-2 text-sm">{study.project}</p>
                          <p className="text-sm font-medium text-green-600 flex items-center gap-2">
                            <ArrowRight className="h-4 w-4" />
                            {study.result}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Statistics Visualization */}
            <div className="mt-12">
              <Card className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={getIndustryImages(industry.slug).statistics}
                    alt="Industry statistics"
                    fill
                    className="object-cover opacity-20"
                  />
                </div>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <BarChart3 className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">Performance Metrics</h3>
                  </div>
                  <div className="grid grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-4xl font-bold text-primary mb-2">{industry.stats.clientsServed}</div>
                      <div className="text-sm text-muted-foreground font-medium">Clients Served</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-primary mb-2">{industry.stats.projectsCompleted}</div>
                      <div className="text-sm text-muted-foreground font-medium">Projects Completed</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-primary mb-2">{industry.stats.satisfactionRate}</div>
                      <div className="text-sm text-muted-foreground font-medium">Satisfaction Rate</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-2xl md:text-3xl font-medium mb-6">
              "{industry.testimonials[0].text}"
            </blockquote>
            <div className="font-semibold">{industry.testimonials[0].name}</div>
            <div className="text-muted-foreground">{industry.testimonials[0].role}</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Partner With Us?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Let's create printing and packaging solutions perfectly suited to your needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/request-quote">Request Industry Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link href="/contact">Schedule Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Generate static params for all industries
export async function generateStaticParams() {
  const industries = getAllIndustries();
  return industries.map((industry) => ({
    slug: industry.slug,
  }));
}
