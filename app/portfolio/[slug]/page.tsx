import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, ArrowRight, Calendar, Tag, User } from "lucide-react";
import { getPortfolioBySlug, getAllPortfolio } from "@/components/lib/portfolio";

interface PortfolioPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PortfolioPageProps) {
  const { slug } = await params;
  const project = getPortfolioBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} - Case Study | Fast Printing & Packaging`,
    description: project.challenge,
    keywords: `case study, ${project.title}, ${project.category}, ${slug}`,
  };
}

export default async function PortfolioCaseStudyPage({ params }: PortfolioPageProps) {
  const { slug } = await params;
  const project = getPortfolioBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            className="object-cover brightness-50"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl text-white">
            <div className="flex flex-wrap gap-4 mb-4">
              <span className="px-3 py-1 bg-white/20 backdrop-blur rounded-full text-sm">
                {project.category}
              </span>
              <span className="px-3 py-1 bg-white/20 backdrop-blur rounded-full text-sm">
                {project.industry}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-6 text-sm opacity-90 mb-8">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{project.client}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{project.date}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.challenge}
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Our Solution</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6">Services Provided</h2>
              <div className="flex flex-wrap gap-3">
                {project.services.map((service) => (
                  <span
                    key={service}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6">Results</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {project.results.map((result, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{result}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Process
              </h2>
              <p className="text-muted-foreground text-lg">
                Behind the scenes of bringing this project to life
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 relative">
              {/* Connecting line - hidden on mobile */}
              <div className="hidden md:block absolute top-32 left-0 right-0 h-0.5 bg-primary/20" style={{ zIndex: 0 }}></div>

              {/* Step 1 */}
              <div className="relative">
                <Card className="overflow-hidden hover:shadow-lg transition-all">
                  <div className="relative h-48">
                    <Image
                      src="https://images.unsplash.com/photo-1561070791-36c11767b26a?w=600&q=75"
                      alt="Initial mockup stage"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="pt-6 text-center">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-3 relative z-10">
                      1
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Initial Mockup</h3>
                    <p className="text-sm text-muted-foreground">
                      Design concepts and client collaboration
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <Card className="overflow-hidden hover:shadow-lg transition-all">
                  <div className="relative h-48">
                    <Image
                      src="https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=600&q=75"
                      alt="Production stage 1"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="pt-6 text-center">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-3 relative z-10">
                      2
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Pre-Production</h3>
                    <p className="text-sm text-muted-foreground">
                      File preparation and material selection
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <Card className="overflow-hidden hover:shadow-lg transition-all">
                  <div className="relative h-48">
                    <Image
                      src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=75"
                      alt="Production stage 2"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="pt-6 text-center">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-3 relative z-10">
                      3
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Production</h3>
                    <p className="text-sm text-muted-foreground">
                      Printing and manufacturing process
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Step 4 */}
              <div className="relative">
                <Card className="overflow-hidden hover:shadow-lg transition-all">
                  <div className="relative h-48">
                    <Image
                      src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=75"
                      alt="Final assembly"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="pt-6 text-center">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-3 relative z-10">
                      4
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Final Assembly</h3>
                    <p className="text-sm text-muted-foreground">
                      Quality check and finishing touches
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Project Gallery
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {project.images.map((image, idx) => (
                <div key={idx} className="relative h-80 rounded-lg overflow-hidden">
                  <Image
                    src={image}
                    alt={`${project.title} ${idx + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial & Client Collaboration */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Client Feedback
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Testimonial Content */}
              <div>
                <Card className="border-2">
                  <CardContent className="pt-8 pb-8">
                    <div className="text-6xl text-primary mb-4">"</div>
                    <blockquote className="text-xl font-medium mb-6 leading-relaxed">
                      {project.testimonial.text}
                    </blockquote>
                    <div className="flex items-center gap-4">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden">
                        <Image
                          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=200&q=70"
                          alt={project.testimonial.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{project.testimonial.author}</div>
                        <div className="text-sm text-muted-foreground">
                          {project.testimonial.role}, {project.client}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Collaboration Image */}
              <div className="relative h-96 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=75"
                  alt="Client collaboration and consultation"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Collaborative Process</h3>
                  <p className="text-white/90 text-sm">
                    Working closely with our clients to understand their vision and bring it to life
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tags */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <Tag className="h-5 w-5 text-muted-foreground" />
              <h3 className="font-semibold">Tags</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-background border rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Related Projects</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {project.relatedProjects.map((related) => (
                <Link key={related.slug} href={`/portfolio/${related.slug}`}>
                  <Card className="hover:shadow-lg transition-all">
                    <CardContent className="pt-6">
                      <h3 className="font-semibold mb-2 hover:text-primary transition-colors">
                        {related.title}
                      </h3>
                      <span className="text-sm text-primary inline-flex items-center">
                        View Case Study
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
              Want Similar Results?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Let's create a success story for your business too
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/request-quote">Start Your Project</Link>
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
  const portfolio = getAllPortfolio();
  return portfolio.map((project) => ({
    slug: project.slug,
  }));
}
