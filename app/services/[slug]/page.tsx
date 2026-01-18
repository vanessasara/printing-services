import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, ArrowRight, Clock, Tag, Zap } from "lucide-react";
import { getServiceBySlug, getAllServices } from "@/components/lib/services";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.name} - Professional Printing Services | Fast Printing`,
    description: service.description,
    keywords: `${service.name}, ${service.category}, printing services, ${slug}`,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px]">
        <Image
          src={service.heroImage}
          alt={service.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <div className="text-sm text-white/70 mb-2">{service.category}</div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                {service.name}
              </h1>
              <p className="text-xl text-white/90 mb-6">{service.tagline}</p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-[#FDB913] text-black hover:bg-[#FDB913]/90">
                  <Link href="/request-quote">
                    Get Free Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-black">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="py-6 bg-muted/30 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-2">
              <Tag className="h-5 w-5 text-primary" />
              <span className="text-sm">
                Starting from <span className="font-semibold">{service.pricing.startingFrom}</span>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              <span className="text-sm">
                Turnaround: <span className="font-semibold">{service.pricing.turnaround}</span>
              </span>
            </div>
            {service.pricing.rushAvailable && (
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-[#FDB913]" />
                <span className="text-sm font-semibold text-[#FDB913]">Rush Available</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* About Service */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">About {service.name}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {service.longDescription}
            </p>

            {/* Features */}
            <div className="grid md:grid-cols-2 gap-4">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      {service.benefits && service.benefits.length > 0 && (
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Our {service.name}</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {service.benefits.map((benefit, idx) => (
                <Card key={idx} className="text-center">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process */}
      {service.process && service.process.length > 0 && (
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Process</h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {service.process.map((step, idx) => (
                  <div key={idx} className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold">
                        {step.step}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Applications */}
      {service.applications && service.applications.length > 0 && (
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Applications</h2>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {service.applications.map((application, idx) => (
                <span key={idx} className="px-4 py-2 bg-background rounded-full text-sm font-medium border">
                  {application}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Services */}
      {service.relatedServices && service.relatedServices.length > 0 && (
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Related Services</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.relatedServices.map((related) => {
                const relatedService = getServiceBySlug(related.slug);
                return (
                  <Link key={related.slug} href={`/services/${related.slug}`}>
                    <Card className="h-full hover:shadow-xl transition-all duration-300 group overflow-hidden">
                      <div className="relative h-48 overflow-hidden">
                        {relatedService && (
                          <Image
                            src={relatedService.heroImage}
                            alt={related.name}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                          <h3 className="font-semibold">{related.name}</h3>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        {relatedService && (
                          <p className="text-sm text-muted-foreground line-clamp-2">{relatedService.tagline}</p>
                        )}
                        <span className="text-primary font-medium text-sm inline-flex items-center mt-3 group-hover:gap-2 transition-all">
                          Learn More
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </span>
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
              Ready to Get Started with {service.name}?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Contact us today to discuss your project requirements and get a custom quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/request-quote">Get Free Quote</Link>
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

// Generate static params for all services
export async function generateStaticParams() {
  const services = getAllServices();
  return services.map((service) => ({
    slug: service.slug,
  }));
}
