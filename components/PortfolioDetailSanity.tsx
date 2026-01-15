"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, User, ArrowRight } from "lucide-react"
import { Portfolio, urlFor } from "@/lib/sanity.queries"
import PortableTextRenderer from "@/components/PortableTextRenderer"

interface PortfolioDetailSanityProps {
  portfolio: Portfolio
}

export default function PortfolioDetailSanity({ portfolio }: PortfolioDetailSanityProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[400px] md:h-[500px]">
        {portfolio.bannerImage && (
          <Image
            src={urlFor(portfolio.bannerImage).width(1920).height(800).url()}
            alt={portfolio.title}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              {portfolio.featured && (
                <div className="inline-flex px-4 py-2 bg-[#FDB913] text-black rounded-full text-sm font-semibold mb-4">
                  Featured Project
                </div>
              )}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                {portfolio.title}
              </h1>
              {portfolio.bannerDescription && (
                <p className="text-xl text-white/90 mb-6">{portfolio.bannerDescription}</p>
              )}
              <div className="flex flex-wrap gap-6 text-white/80 text-sm">
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  <span>{portfolio.clientName}</span>
                </div>
                {portfolio.completionDate && (
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    <span>{new Date(portfolio.completionDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}</span>
                  </div>
                )}
                <div className="px-3 py-1 bg-white/20 rounded-full">
                  {portfolio.category}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      {portfolio.overview && (
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Project Overview</h2>
              <PortableTextRenderer value={portfolio.overview} />
            </div>
          </div>
        </section>
      )}

      {/* Challenge Section */}
      {portfolio.challenge && (
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">The Challenge</h2>
              <PortableTextRenderer value={portfolio.challenge} />
            </div>
          </div>
        </section>
      )}

      {/* Solution Section */}
      {portfolio.solution && (
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Our Solution</h2>
              <PortableTextRenderer value={portfolio.solution} />
            </div>
          </div>
        </section>
      )}

      {/* Image Gallery */}
      {portfolio.gallery && portfolio.gallery.length > 0 && (
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Project Gallery</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {portfolio.gallery.map((item, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src={urlFor(item.image).width(600).height(400).url()}
                      alt={item.caption || `Gallery image ${idx + 1}`}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  {item.caption && (
                    <p className="text-sm text-muted-foreground text-center">{item.caption}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Results Section */}
      {portfolio.results && (
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Results & Impact</h2>
              <PortableTextRenderer value={portfolio.results} />
            </div>
          </div>
        </section>
      )}

      {/* Services & Products Used */}
      {((portfolio.servicesUsed && portfolio.servicesUsed.length > 0) ||
        (portfolio.productsUsed && portfolio.productsUsed.length > 0)) && (
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Services & Products Used</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {portfolio.servicesUsed && portfolio.servicesUsed.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold mb-6">Services</h3>
                  <div className="grid gap-4">
                    {portfolio.servicesUsed.map((service) => (
                      <Link key={service._id} href={`/services/${service.slug.current}`}>
                        <Card className="hover:shadow-lg transition-shadow group">
                          <CardContent className="p-4 flex gap-4">
                            {service.cardImage && (
                              <div className="relative w-20 h-20 flex-shrink-0 rounded overflow-hidden">
                                <Image
                                  src={urlFor(service.cardImage).width(100).height(100).url()}
                                  alt={service.name}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                            )}
                            <div className="flex-1">
                              <h4 className="font-semibold group-hover:text-primary transition-colors">
                                {service.name}
                              </h4>
                              <p className="text-sm text-muted-foreground line-clamp-2">
                                {service.shortDescription}
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {portfolio.productsUsed && portfolio.productsUsed.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold mb-6">Products</h3>
                  <div className="grid gap-4">
                    {portfolio.productsUsed.map((product) => (
                      <Link key={product._id} href={`/products/${product.slug.current}`}>
                        <Card className="hover:shadow-lg transition-shadow group">
                          <CardContent className="p-4 flex gap-4">
                            {product.cardImage && (
                              <div className="relative w-20 h-20 flex-shrink-0 rounded overflow-hidden">
                                <Image
                                  src={urlFor(product.cardImage).width(100).height(100).url()}
                                  alt={product.name}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                            )}
                            <div className="flex-1">
                              <h4 className="font-semibold group-hover:text-primary transition-colors">
                                {product.name}
                              </h4>
                              <p className="text-sm text-muted-foreground line-clamp-2">
                                {product.shortDescription}
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Client Testimonial */}
      {portfolio.testimonial && portfolio.testimonial.quote && (
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-gradient-to-br from-primary/5 to-background border-2">
                <CardContent className="p-8 md:p-12">
                  <div className="text-4xl md:text-5xl text-primary mb-6">"</div>
                  <blockquote className="text-xl md:text-2xl font-medium mb-8 leading-relaxed">
                    {portfolio.testimonial.quote}
                  </blockquote>
                  <div>
                    <p className="font-semibold text-lg">{portfolio.testimonial.author}</p>
                    <p className="text-muted-foreground">{portfolio.testimonial.position}</p>
                    <p className="text-sm text-muted-foreground mt-1">{portfolio.clientName}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Let's create something amazing together. Get in touch to discuss your printing and packaging needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/request-quote">Get Free Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link href="/portfolio">View More Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
