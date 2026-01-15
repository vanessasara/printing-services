"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, ArrowRight, Clock, Award, Zap, Settings } from "lucide-react"
import { Service, urlFor } from "@/lib/sanity.queries"
import PortableTextRenderer from "@/components/PortableTextRenderer"

interface ServiceDetailSanityProps {
  service: Service
}

export default function ServiceDetailSanity({ service }: ServiceDetailSanityProps) {
  const [selectedImage, setSelectedImage] = useState(0)

  // Hero image is the main image
  const mainImage = service.heroImage

  return (
    <div className="min-h-screen">
      {/* Hero Section with Service Image */}
      <section className="relative h-[400px] md:h-[500px]">
        {mainImage && (
          <Image
            src={urlFor(mainImage).width(1920).height(800).url()}
            alt={service.name}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <div className="text-sm text-white/80 mb-2 uppercase tracking-wide">{service.category}</div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                {service.name}
              </h1>
              {service.tagline && (
                <p className="text-xl md:text-2xl text-white/90 mb-6">{service.tagline}</p>
              )}
              {service.bannerDescription && (
                <p className="text-lg text-white/80 mb-8 max-w-2xl">{service.bannerDescription}</p>
              )}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="/request-quote">
                    Get Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-white text-black hover:bg-white/90">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      {service.overview && (
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Service Overview</h2>
              <PortableTextRenderer value={service.overview} />
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      {service.features && service.features.length > 0 && (
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Key Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {service.features.map((feature, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex p-3 bg-primary/10 rounded-lg">
                      <CheckCircle2 className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process Steps */}
      {service.process && service.process.length > 0 && (
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Our Process</h2>
              <div className="grid gap-8">
                {service.process.map((step) => (
                  <div key={step.stepNumber} className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-2xl">
                      {step.stepNumber}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground text-lg">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Benefits */}
      {service.benefits && service.benefits.length > 0 && (
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Benefits</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                    <p className="text-lg text-muted-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Applications */}
      {service.applications && service.applications.length > 0 && (
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Applications</h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {service.applications.map((application, idx) => (
                  <Card key={idx}>
                    <CardContent className="p-4">
                      <p className="font-medium">{application}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Us</h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Clock,
                title: "Fast Turnaround",
                description: "Quick delivery without compromising quality"
              },
              {
                icon: Award,
                title: "Quality Guaranteed",
                description: "Premium materials and expert craftsmanship"
              },
              {
                icon: Zap,
                title: "Advanced Technology",
                description: "State-of-the-art equipment and techniques"
              },
              {
                icon: Settings,
                title: "Custom Solutions",
                description: "Tailored to your specific requirements"
              }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      {service.relatedServices && service.relatedServices.length > 0 && (
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Related Services</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.relatedServices.map((related) => (
                <Link key={related._id} href={`/services/${related.slug.current}`}>
                  <Card className="h-full hover:shadow-xl transition-all duration-300 group overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      {related.cardImage && (
                        <Image
                          src={urlFor(related.cardImage).width(400).height(300).url()}
                          alt={related.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      )}
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        {related.name}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">{related.shortDescription}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
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
              Let's discuss your project requirements and create something amazing together.
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
  )
}
