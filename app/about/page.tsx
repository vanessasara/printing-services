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
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
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
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop"
                alt="Fast Printing team at work"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Additional Company Workspace Image */}
          <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=85"
              alt="Modern company workspace"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-6 md:p-8 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Our Modern Facility</h3>
                <p className="text-sm md:text-base opacity-90">
                  State-of-the-art equipment and a dedicated team working together to deliver excellence
                </p>
              </div>
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
                image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=75"
              },
              {
                icon: Zap,
                title: "Speed & Reliability",
                description: "Fast turnaround times without sacrificing quality. We respect your deadlines and deliver on our promises.",
                image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=75"
              },
              {
                icon: Heart,
                title: "Customer-Centric",
                description: "Your success is our success. We go above and beyond to understand and exceed your expectations.",
                image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=75"
              },
              {
                icon: Leaf,
                title: "Sustainability",
                description: "Committed to eco-friendly practices, using recycled materials and sustainable processes wherever possible.",
                image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&q=75"
              },
              {
                icon: Shield,
                title: "Integrity",
                description: "Transparent pricing, honest communication, and ethical business practices in everything we do.",
                image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&q=75"
              },
              {
                icon: Target,
                title: "Innovation",
                description: "Continuously investing in new technology and techniques to deliver cutting-edge solutions.",
                image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=75"
              },
              {
                icon: Users,
                title: "Collaboration",
                description: "We work as partners with our clients, providing expert guidance and creative support throughout.",
                image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=75"
              },
              {
                icon: CheckCircle2,
                title: "Excellence",
                description: "Striving for perfection in every print, every package, and every client interaction.",
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=75"
              },
            ].map((value) => (
              <Card key={value.title} className="border-2 hover:border-primary/50 transition-colors overflow-hidden group">
                <div className="relative">
                  {/* Background Image */}
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={value.image}
                      alt={value.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/92 to-white/88"></div>
                  </div>

                  {/* Content */}
                  <CardContent className="pt-6 relative z-10">
                    <div className="mb-4 inline-flex p-3 bg-[#FDB913]/10 rounded-lg">
                      <value.icon className="h-6 w-6 text-[#FDB913]" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </div>
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

          <div className="space-y-16">
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
                image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=800&q=80",
                reverse: false,
              },
              {
                title: "Custom Packaging Solutions",
                items: [
                  "Product boxes & containers",
                  "Food packaging",
                  "E-commerce shipping boxes",
                  "Labels & stickers",
                  "Luxury packaging",
                ],
                image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
                reverse: true,
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
                image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
                reverse: false,
              },
            ].map((service) => (
              <div
                key={service.title}
                className={`grid md:grid-cols-2 gap-8 items-center ${
                  service.reverse ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className={`relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-xl ${service.reverse ? 'md:order-2' : 'md:order-1'}`}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className={service.reverse ? 'md:order-1' : 'md:order-2'}>
                  <h3 className="text-2xl md:text-3xl font-bold mb-6">{service.title}</h3>
                  <ul className="space-y-3">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#FDB913] mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="mt-6">
                    <Link href="/services">Learn More</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Dedicated professionals committed to bringing your vision to life
            </p>
          </div>

          {/* Featured Group Photo */}
          <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-xl mb-12">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=85"
              alt="Our team working together"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-6 md:p-8 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Teamwork Makes the Dream Work</h3>
                <p className="text-sm md:text-base opacity-90">
                  Our collaborative approach ensures every project exceeds expectations
                </p>
              </div>
            </div>
          </div>

          {/* Team Members Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                name: "Ahmed Khan",
                role: "Founder & CEO",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=70"
              },
              {
                name: "Sarah Ahmed",
                role: "Creative Director",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=70"
              },
              {
                name: "Hassan Ali",
                role: "Production Manager",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=70"
              },
              {
                name: "Fatima Malik",
                role: "Client Relations",
                image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&q=70"
              },
            ].map((member) => (
              <Card key={member.name} className="text-center overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="pt-4 pb-6">
                  <h4 className="text-lg font-semibold mb-1">{member.name}</h4>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Office Environment */}
          <div className="relative h-[250px] md:h-[350px] rounded-xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=85"
              alt="Our modern office environment"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Our Workspace</h3>
                <p className="text-sm md:text-base opacity-90">
                  A modern, collaborative environment designed for creativity and efficiency
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
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
