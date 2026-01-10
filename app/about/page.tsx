import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Award, Users, Target, Heart, Zap, Shield, Leaf } from "lucide-react";

export const metadata = {
  title: "About Us - Fast Printing & Packaging | 15+ Years of Excellence",
  description: "Learn about Fast Printing & Packaging's journey, values, and commitment to delivering premium printing and packaging solutions across Pakistan since 2008.",
  keywords: "about fast printing, printing company pakistan, packaging company history, professional printing services",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary/10 via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Crafting Quality Since 2008
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              From a small local print shop to Pakistan's trusted printing and packaging partner, 
              our journey has been defined by quality, innovation, and unwavering commitment to our clients.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <span className="font-medium">15+ Years in Business</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <span className="font-medium">500+ Happy Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <span className="font-medium">10,000+ Projects Delivered</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Fast Printing & Packaging was founded in 2008 with a simple mission: to provide 
                  businesses across Pakistan with high-quality, affordable printing and packaging solutions 
                  that help their brands stand out.
                </p>
                <p>
                  What started as a small print shop in Lahore has grown into a comprehensive printing 
                  and packaging company serving clients nationwide. Our success is built on three pillars: 
                  exceptional quality, lightning-fast turnaround times, and personalized customer service.
                </p>
                <p>
                  Today, we operate state-of-the-art digital and offset printing equipment, offer 
                  custom packaging design and manufacturing, and provide complete brand identity services. 
                  We've helped over 500 businesses—from startups to established enterprises—elevate 
                  their brand presence through premium printed materials.
                </p>
                <p>
                  Our commitment to sustainability drives us to use eco-friendly materials and processes 
                  wherever possible, ensuring that quality and environmental responsibility go hand in hand.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop"
                alt="Fast Printing team at work"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              These principles guide everything we do and drive our commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Award,
                title: "Quality First",
                description: "We never compromise on quality. Every project receives meticulous attention to detail and rigorous quality checks.",
              },
              {
                icon: Zap,
                title: "Speed & Reliability",
                description: "Fast turnaround times without sacrificing quality. We respect your deadlines and deliver on our promises.",
              },
              {
                icon: Heart,
                title: "Customer-Centric",
                description: "Your success is our success. We go above and beyond to understand and exceed your expectations.",
              },
              {
                icon: Leaf,
                title: "Sustainability",
                description: "Committed to eco-friendly practices, using recycled materials and sustainable processes wherever possible.",
              },
              {
                icon: Shield,
                title: "Integrity",
                description: "Transparent pricing, honest communication, and ethical business practices in everything we do.",
              },
              {
                icon: Target,
                title: "Innovation",
                description: "Continuously investing in new technology and techniques to deliver cutting-edge solutions.",
              },
              {
                icon: Users,
                title: "Collaboration",
                description: "We work as partners with our clients, providing expert guidance and creative support throughout.",
              },
              {
                icon: CheckCircle2,
                title: "Excellence",
                description: "Striving for perfection in every print, every package, and every client interaction.",
              },
            ].map((value) => (
              <Card key={value.title} className="border-2 hover:border-primary/50 transition-colors">
                <CardContent className="pt-6">
                  <div className="mb-4 inline-flex p-3 bg-primary/10 rounded-lg">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Do</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive printing and packaging solutions under one roof
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Commercial Printing",
                items: [
                  "Business cards & stationery",
                  "Brochures & flyers",
                  "Catalogs & booklets",
                  "Posters & banners",
                  "Marketing materials",
                ],
                image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
              },
              {
                title: "Custom Packaging",
                items: [
                  "Product boxes & containers",
                  "Food packaging",
                  "E-commerce shipping boxes",
                  "Labels & stickers",
                  "Luxury packaging",
                ],
                image: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=600&h=400&fit=crop",
              },
              {
                title: "Design Services",
                items: [
                  "Brand identity development",
                  "Logo design",
                  "Packaging design",
                  "Marketing materials design",
                  "Complete creative solutions",
                ],
                image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
              },
            ].map((service) => (
              <Card key={service.title} className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <ul className="space-y-2">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Why Businesses Trust Us</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  stat: "15+",
                  label: "Years Experience",
                  description: "Serving businesses across Pakistan since 2008",
                },
                {
                  stat: "500+",
                  label: "Happy Clients",
                  description: "From startups to Fortune 500 companies",
                },
                {
                  stat: "10,000+",
                  label: "Projects Completed",
                  description: "Delivering excellence in every print",
                },
                {
                  stat: "99%",
                  label: "Satisfaction Rate",
                  description: "Clients who return and recommend us",
                },
              ].map((item) => (
                <Card key={item.label}>
                  <CardContent className="pt-6 text-center">
                    <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                      {item.stat}
                    </div>
                    <div className="text-lg font-semibold mb-2">{item.label}</div>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 md:p-12 text-center text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Experience the Difference?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who trust us with their printing and packaging needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/request-quote">Get Free Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
