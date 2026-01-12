import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, ArrowRight, Clock, Award, Zap, Settings } from "lucide-react";
import { getServiceBySlug, getAllServices } from "@/components/lib/services";

// Helper function to get equipment images based on service slug
function getEquipmentImages(slug: string): { image: string; name: string; description: string }[] {
  const equipmentMap: Record<string, { image: string; name: string; description: string }[]> = {
    "digital-printing": [
      {
        image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=600&q=75",
        name: "Digital Press Equipment",
        description: "State-of-the-art digital printing presses for high-quality output"
      },
      {
        image: "https://images.unsplash.com/photo-1612538498456-e861df91b2ce?w=600&q=75",
        name: "Color Management System",
        description: "Advanced color calibration for accurate and consistent results"
      },
      {
        image: "https://images.unsplash.com/photo-1585282263861-f55e341878f8?w=600&q=75",
        name: "Finishing Equipment",
        description: "Professional cutting and finishing tools for perfect edges"
      },
    ],
    "offset-printing": [
      {
        image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=600&q=75",
        name: "Offset Press",
        description: "High-volume offset printing press for exceptional quality"
      },
      {
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=75",
        name: "Plate Making System",
        description: "Modern plate-making technology for precise image transfer"
      },
      {
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=75",
        name: "Quality Control Station",
        description: "Rigorous quality checks throughout the printing process"
      },
    ],
    "large-format-printing": [
      {
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=75",
        name: "Large Format Printer",
        description: "Wide-format printers capable of printing up to 10ft wide"
      },
      {
        image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&q=75",
        name: "Mounting Equipment",
        description: "Professional mounting and lamination systems"
      },
      {
        image: "https://images.unsplash.com/photo-1487260211189-670c54da558d?w=600&q=75",
        name: "Cutting & Finishing",
        description: "Precision cutting tools for large format materials"
      },
    ],
    "screen-printing": [
      {
        image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=600&q=75",
        name: "Screen Printing Press",
        description: "Multi-color screen printing equipment for vibrant results"
      },
      {
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=75",
        name: "Screen Preparation",
        description: "Professional screen preparation and exposure units"
      },
      {
        image: "https://images.unsplash.com/photo-1612538498456-e861df91b2ce?w=600&q=75",
        name: "Curing System",
        description: "Industrial curing ovens for durable prints"
      },
    ],
    "custom-boxes": [
      {
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=75",
        name: "Box Making Machine",
        description: "Automated box manufacturing equipment for precision"
      },
      {
        image: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=600&q=75",
        name: "Die Cutting Press",
        description: "Precision die cutting for custom box shapes"
      },
      {
        image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=600&q=75",
        name: "Printing Systems",
        description: "High-quality printing on various packaging materials"
      },
    ],
  };

  // Default equipment for services not specifically mapped
  const defaultEquipment = [
    {
      image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=600&q=75",
      name: "Professional Equipment",
      description: "State-of-the-art machinery for superior quality"
    },
    {
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=75",
      name: "Production Facility",
      description: "Modern facility with climate-controlled environment"
    },
    {
      image: "https://images.unsplash.com/photo-1612538498456-e861df91b2ce?w=600&q=75",
      name: "Quality Assurance",
      description: "Advanced inspection and quality control systems"
    },
  ];

  return equipmentMap[slug] || defaultEquipment;
}

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

      {/* Equipment Showcase Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4">
                <Settings className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Equipment & Technology
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Industry-leading equipment and technology to deliver exceptional results
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {getEquipmentImages(service.slug).map((equipment, idx) => (
                <Card key={idx} className="overflow-hidden group">
                  <div className="relative h-56">
                    <Image
                      src={equipment.image}
                      alt={equipment.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-lg mb-2">{equipment.name}</h3>
                    <p className="text-sm text-muted-foreground">{equipment.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 md:py-24">
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
