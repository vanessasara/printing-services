import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight, CheckCircle2} from "lucide-react";
import {serviceCategories,additionalServices} from '@/components/lib/services'

export const metadata = {
  title: "Our Services - Printing & Packaging Solutions | Fast Printing",
  description: "Explore our comprehensive range of printing and packaging services. From digital printing to custom packaging, we deliver quality solutions for your business.",
  keywords: "printing services, packaging services, digital printing, offset printing, custom packaging, design services",
};

// Helper functions for category banners and benefit images
function getCategoryBannerImage(category: string): string {
  const banners: Record<string, string> = {
    "Printing Services": "/service-page-first-banner.jpeg",
    "Packaging Solutions": "/service-page-second-banner.jpeg",
    "Design Services": "https://images.unsplash.com/photo-1561070791-36c11767b26a?w=1920&q=85",
  };
  return banners[category] || "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=1920&q=85";
}

function getBenefitImage(title: string): string {
  const images: Record<string, string> = {
    "End-to-End Solutions": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=75",
    "State-of-the-Art Technology": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=75",
    "Expert Team": "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=75",
    "Fast Turnaround": "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=75",
    "Competitive Pricing": "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=75",
    "Quality Guaranteed": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=75",
  };
  return images[title] || "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=600&q=75";
}

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
        <section key={category.category} className={idx % 2 === 1 ? "py-16 md:py-24 bg-muted/30" : "py-16 md:py-24"}>
          <div className="container mx-auto px-4">
            {/* Category Header Banner */}
            <div className="relative h-56 sm:h-64 md:h-72 lg:h-80 rounded-xl md:rounded-2xl overflow-hidden mb-8 md:mb-12">
              <Image
                src={getCategoryBannerImage(category.category)}
                alt={`${category.category} banner`}
                fill
                className="object-cover"
                priority={idx === 0}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/40 md:to-transparent flex items-center">
                <div className="container mx-auto px-4 sm:px-6 md:px-8">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4 max-w-4xl">
                    <div className="p-2.5 sm:p-3 md:p-4 bg-[#FDB913] rounded-lg flex-shrink-0">
                      <category.icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-black" />
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 sm:mb-2">
                        {category.category}
                      </h2>
                      <p className="text-white/90 text-sm sm:text-base md:text-lg max-w-2xl line-clamp-2 sm:line-clamp-none">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
              {category.services.map((service) => (
                <Link key={service.slug} href={`/services/${service.slug}`}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 group overflow-hidden border-2 hover:border-primary/30">
                    <div className="relative h-44 sm:h-48 md:h-52 lg:h-48 overflow-hidden bg-muted">
                      <Image
                        src={service.heroImage}
                        alt={service.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      />
                    </div>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base sm:text-lg group-hover:text-primary transition-colors line-clamp-1">
                        {service.name}
                      </CardTitle>
                      <CardDescription className="text-sm line-clamp-2">{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <span className="text-primary font-medium text-sm inline-flex items-center group-hover:gap-2 transition-all">
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
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Why Choose Our Services
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
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
                <Card key={item.title} className="overflow-hidden border-none shadow-md group">
                  <div className="relative min-h-[240px] sm:min-h-[260px]">
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                      <Image
                        src={getBenefitImage(item.title)}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/92 to-white/88"></div>
                    </div>

                    {/* Content */}
                    <CardContent className="pt-5 sm:pt-6 pb-5 sm:pb-6 relative z-10">
                      <div className="mb-3 sm:mb-4 inline-flex p-2.5 sm:p-3 bg-[#FDB913]/10 rounded-lg">
                        <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-[#FDB913]" />
                      </div>
                      <h3 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3">{item.title}</h3>
                      <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{item.description}</p>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry Certifications */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Certified & Trusted
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Our commitment to quality is backed by industry certifications and recognition
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="relative h-40 sm:h-44 md:h-48 rounded-lg overflow-hidden mb-3 sm:mb-4 bg-muted">
                  <Image
                    src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=75"
                    alt="ISO Certification"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  />
                </div>
                <h3 className="font-semibold text-base sm:text-lg mb-1.5 sm:mb-2">ISO Certified</h3>
                <p className="text-xs sm:text-sm text-muted-foreground px-2">
                  Quality management systems certified to international standards
                </p>
              </div>

              <div className="text-center">
                <div className="relative h-40 sm:h-44 md:h-48 rounded-lg overflow-hidden mb-3 sm:mb-4 bg-muted">
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=75"
                    alt="Quality Awards"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  />
                </div>
                <h3 className="font-semibold text-base sm:text-lg mb-1.5 sm:mb-2">Award Winning</h3>
                <p className="text-xs sm:text-sm text-muted-foreground px-2">
                  Recognized for excellence in printing and packaging services
                </p>
              </div>

              <div className="text-center sm:col-span-2 md:col-span-1">
                <div className="relative h-40 sm:h-44 md:h-48 rounded-lg overflow-hidden mb-3 sm:mb-4 bg-muted">
                  <Image
                    src="https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=600&q=75"
                    alt="State-of-the-art Equipment"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  />
                </div>
                <h3 className="font-semibold text-base sm:text-lg mb-1.5 sm:mb-2">Modern Equipment</h3>
                <p className="text-xs sm:text-sm text-muted-foreground px-2">
                  Latest technology meeting industry standards and certifications
                </p>
              </div>
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
