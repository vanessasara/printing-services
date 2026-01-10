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

      {/* Testimonial */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2">
              <CardContent className="pt-8 pb-8">
                <div className="text-6xl text-primary mb-4">"</div>
                <blockquote className="text-xl md:text-2xl font-medium mb-6 leading-relaxed">
                  {project.testimonial.text}
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="h-6 w-6 text-primary" />
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
