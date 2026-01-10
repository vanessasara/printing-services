import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Printer, Package, Palette, Maximize, Leaf, Scissors } from "lucide-react";
import { getAllServices, getServicesByCategory } from "@/components/lib/services";
import {serviceCategories,additionalServices} from '@/components/lib/services'

export const metadata = {
  title: "Our Services - Printing & Packaging Solutions | Fast Printing",
  description: "Explore our comprehensive range of printing and packaging services. From digital printing to custom packaging, we deliver quality solutions for your business.",
  keywords: "printing services, packaging services, digital printing, offset printing, custom packaging, design services",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Complete Printing & Packaging Solutions
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              From concept to delivery, we provide comprehensive services to bring your vision to life. 
              Quality, speed, and reliability in every project.
            </p>
            <Button asChild size="lg">
              <Link href="/request-quote">
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      {serviceCategories.map((category, idx) => (
        <section key={idx} className={idx % 2 === 1 ? "py-16 md:py-24 bg-muted/30" : "py-16 md:py-24"}>
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-primary/10 rounded-lg">
                <category.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold">{category.category}</h2>
                <p className="text-muted-foreground">{category.description}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.services.map((service) => (
                <Link key={service.slug} href={`/services/${service.slug}`}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 group overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={service.heroImage}
                        alt={service.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="group-hover:text-primary transition-colors">
                        {service.name}
                      </CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <span className="text-primary font-medium inline-flex items-center group-hover:gap-2 transition-all">
                        Learn More
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

      {/* Additional Services */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Additional Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Specialized solutions for unique printing and packaging needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {additionalServices.map((service) => (
              <Card key={service.slug}>
                <CardContent className="pt-6">
                  <div className="mb-4 inline-flex p-3 bg-primary/10 rounded-lg">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{service.name}</h3>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Why Choose Our Services
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "End-to-End Solutions",
                  description: "From design to delivery, we handle every aspect of your project with expertise and care.",
                },
                {
                  title: "State-of-the-Art Technology",
                  description: "Latest printing equipment and techniques ensure superior quality and consistency.",
                },
                {
                  title: "Expert Team",
                  description: "Skilled professionals with years of experience in printing, packaging, and design.",
                },
                {
                  title: "Fast Turnaround",
                  description: "Quick production times without compromising on quality. Rush orders available.",
                },
                {
                  title: "Competitive Pricing",
                  description: "Volume discounts and transparent pricing make quality affordable for all businesses.",
                },
                {
                  title: "Quality Guaranteed",
                  description: "100% satisfaction guarantee. If you're not happy, we'll make it right.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle2 className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
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
              Ready to Get Started?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Let's discuss your project and find the perfect solution for your needs
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
