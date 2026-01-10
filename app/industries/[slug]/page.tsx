import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, ArrowRight, Users, Award, TrendingUp } from "lucide-react";
import { getIndustryBySlug, getAllIndustries } from "@/components/lib/industries";

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
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Your Challenges, Our Solutions
            </h2>

            <div className="space-y-8">
              {industry.challenges.map((challenge, idx) => (
                <div key={idx} className="grid md:grid-cols-2 gap-8 items-center">
                  <Card className="border-l-4 border-l-destructive">
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3 text-destructive">
                        Challenge: {challenge.title}
                      </h3>
                      <p className="text-muted-foreground">{challenge.description}</p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-green-600">
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3 text-green-600">
                        Solution: {industry.solutions[idx].title}
                      </h3>
                      <p className="text-muted-foreground">{industry.solutions[idx].description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
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
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Success Stories
            </h2>

            <div className="space-y-6">
              {industry.caseStudies.map((study, idx) => (
                <Card key={idx}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <CheckCircle2 className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">{study.client}</h3>
                        <p className="text-muted-foreground mb-2">{study.project}</p>
                        <p className="text-sm font-medium text-green-600">{study.result}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
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
