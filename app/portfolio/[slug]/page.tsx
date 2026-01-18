import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User, ArrowRight, CheckCircle2 } from "lucide-react";
import { getPortfolioBySlug, getAllPortfolio } from "@/components/lib/portfolio";

interface PortfolioPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PortfolioPageProps) {
  const { slug } = await params;
  const portfolio = getPortfolioBySlug(slug);

  if (!portfolio) {
    return {
      title: "Portfolio Item Not Found",
    };
  }

  return {
    title: `${portfolio.title} - ${portfolio.client} | Portfolio`,
    description: portfolio.excerpt,
    keywords: `${portfolio.title}, ${portfolio.client}, printing portfolio, ${slug}`,
  };
}

export default async function PortfolioDetailPage({ params }: PortfolioPageProps) {
  const { slug } = await params;
  const portfolio = getPortfolioBySlug(slug);

  if (!portfolio) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[400px] md:h-[500px]">
        <Image
          src={portfolio.heroImage}
          alt={portfolio.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <div className="inline-flex px-4 py-2 bg-[#FDB913] text-black rounded-full text-sm font-semibold mb-4">
                {portfolio.category}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                {portfolio.title}
              </h1>
              <p className="text-xl text-white/90 mb-6">{portfolio.excerpt}</p>
              <div className="flex flex-wrap gap-6 text-white/80 text-sm">
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  <span>{portfolio.client}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>{portfolio.date}</span>
                </div>
                <div className="px-3 py-1 bg-white/20 rounded-full">
                  {portfolio.industry}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">The Challenge</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {portfolio.challenge}
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Our Solution</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {portfolio.solution}
            </p>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      {portfolio.images && portfolio.images.length > 0 && (
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Project Gallery</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {portfolio.images.map((img, idx) => (
                <div key={idx} className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src={img}
                    alt={`${portfolio.title} - Image ${idx + 1}`}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Results Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Results & Impact</h2>
            <div className="grid gap-4">
              {portfolio.results.map((result, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-lg text-muted-foreground">{result}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services & Products Used */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Services & Products Used</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold mb-6">Services</h3>
              <div className="flex flex-wrap gap-2">
                {portfolio.services.map((service, idx) => (
                  <span key={idx} className="px-4 py-2 bg-primary/10 rounded-full text-sm font-medium">
                    {service}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">Products</h3>
              <div className="flex flex-wrap gap-2">
                {portfolio.products.map((product, idx) => (
                  <span key={idx} className="px-4 py-2 bg-primary/10 rounded-full text-sm font-medium">
                    {product}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonial */}
      {portfolio.testimonial && (
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-gradient-to-br from-primary/5 to-background border-2">
                <CardContent className="p-8 md:p-12">
                  <div className="text-4xl md:text-5xl text-primary mb-6">"</div>
                  <blockquote className="text-xl md:text-2xl font-medium mb-8 leading-relaxed">
                    {portfolio.testimonial.text}
                  </blockquote>
                  <div>
                    <p className="font-semibold text-lg">{portfolio.testimonial.author}</p>
                    <p className="text-muted-foreground">{portfolio.testimonial.role}</p>
                    <p className="text-sm text-muted-foreground mt-1">{portfolio.client}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Related Projects */}
      {portfolio.relatedProjects && portfolio.relatedProjects.length > 0 && (
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Related Projects</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolio.relatedProjects.map((related) => {
                const relatedItem = getPortfolioBySlug(related.slug);
                return (
                  <Link key={related.slug} href={`/portfolio/${related.slug}`}>
                    <Card className="h-full hover:shadow-xl transition-all duration-300 group overflow-hidden">
                      <div className="relative h-48 overflow-hidden">
                        {relatedItem && (
                          <Image
                            src={relatedItem.image}
                            alt={related.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        )}
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                          {related.title}
                        </h3>
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
  );
}

// Generate static params for all portfolio items
export async function generateStaticParams() {
  const portfolios = getAllPortfolio();
  return portfolios.map((portfolio) => ({
    slug: portfolio.slug,
  }));
}
