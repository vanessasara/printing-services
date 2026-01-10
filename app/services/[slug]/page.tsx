import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, ArrowRight, Clock, Award, Zap } from "lucide-react";
import { getServiceBySlug, getAllServices } from "@/components/lib/services";

interface ServicePageProps {
  params: {
    slug: string;
  };
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
    title: `${service.name} Services | Fast Printing & Packaging`,
    description: service.description,
    keywords: `${service.name}, printing services, packaging solutions, ${slug}`,
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
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={service.heroImage}
            alt={service.name}
            fill
            className="object-cover brightness-50"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-white">
            <div className="text-sm font-medium mb-4 opacity-90">{service.category}</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {service.name}
            </h1>
            <p className="text-xl mb-8 opacity-90">{service.tagline}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/request-quote">
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-foreground">
                <Link href="/request-samples">Request Samples</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Overview</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {service.longDescription}
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="inline-flex p-3 bg-primary/10 rounded-full mb-3">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div className="font-semibold mb-1">Turnaround Time</div>
                  <div className="text-sm text-muted-foreground">{service.pricing.turnaround}</div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="inline-flex p-3 bg-primary/10 rounded-full mb-3">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="font-semibold mb-1">Rush Orders</div>
                  <div className="text-sm text-muted-foreground">
                    {service.pricing.rushAvailable ? "Available" : "Not Available"}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="inline-flex p-3 bg-primary/10 rounded-full mb-3">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div className="font-semibold mb-1">Quality</div>
                  <div className="text-sm text-muted-foreground">100% Guaranteed</div>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-2xl font-bold mb-6">Key Features</h3>
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

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Why Choose This Service
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {service.benefits.map((benefit, idx) => (
                <Card key={idx}>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Our Process
            </h2>

            <div className="space-y-6">
              {service.process.map((step) => (
                <div key={step.step} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Perfect For
            </h2>

            <div className="flex flex-wrap justify-center gap-4">
              {service.applications.map((app) => (
                <div key={app} className="px-6 py-3 bg-background rounded-full border-2 border-primary/20 font-medium">
                  {app}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Related Services</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {service.relatedServices.map((related) => (
                <Link key={related.slug} href={`/services/${related.slug}`}>
                  <Card className="hover:shadow-lg transition-all">
                    <CardContent className="pt-6">
                      <h3 className="font-semibold mb-2 hover:text-primary transition-colors">
                        {related.name}
                      </h3>
                      <span className="text-sm text-primary inline-flex items-center">
                        Learn More
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
              Ready to Get Started with {service.name}?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Request a free quote and let's discuss your project
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

// Generate static params for all services
export async function generateStaticParams() {
  const services = getAllServices();
  return services.map((service) => ({
    slug: service.slug,
  }));
}
