import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Printer, Package, Palette, Sparkles, Maximize, Leaf, ArrowRight, Check, Zap, ShieldCheck, Tag, Clock } from "lucide-react";

const services = [
  {
    icon: Printer,
    title: "Digital Printing",
    description: "Fast, flexible, high-quality printing for short runs and quick turnarounds",
    href: "services/digital-printing",
  },
  {
    icon: Printer,
    title: "Offset Printing",
    description: "Large volume printing with consistent quality and cost-effectiveness",
    href: "services/offset-printing",
  },
  {
    icon: Package,
    title: "Screen Printing",
    description: "Screen printing for t-shirts, promotional items, signage, and specialty applications. Perfect for bold designs and unique materials.",
    href: "services/screen-printing",
  },
  {
    icon: Maximize,
    title: "Large Format Printing",
    description: "Banners, posters, billboards, and exhibition displays that make an impact",
    href: "services/large-format-printing",
  },
  {
    icon: Palette,
    title: "Labels Stickers",
    description: "Custom labels and stickers in any shape, size, or material. Perfect for products, packaging, and promotions.",
    href: "services/labels-stickers",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Solutions",
    description: "Sustainable materials, recyclable packaging, and environmentally responsible printing",
    href: "services/eco-friendly-packaging",
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive Printing & Packaging Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            From concept to delivery, we provide end-to-end solutions for all your printing and packaging needs
          </p>

          {/* Inline Pills Benefits */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <div className="inline-flex items-center gap-2 bg-[#FDB913] text-black px-4 py-2 rounded-full font-semibold text-sm shadow-md hover:shadow-lg transition-shadow">
              <Check className="h-4 w-4" strokeWidth={3} />
              <span>FREE Design</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-[#FDB913] text-black px-4 py-2 rounded-full font-semibold text-sm shadow-md hover:shadow-lg transition-shadow">
              <Zap className="h-4 w-4" strokeWidth={3} />
              <span>Fast Delivery</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-[#FDB913] text-black px-4 py-2 rounded-full font-semibold text-sm shadow-md hover:shadow-lg transition-shadow">
              <ShieldCheck className="h-4 w-4" strokeWidth={3} />
              <span>Premium Quality</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-[#FDB913] text-black px-4 py-2 rounded-full font-semibold text-sm shadow-md hover:shadow-lg transition-shadow">
              <Tag className="h-4 w-4" strokeWidth={3} />
              <span>Best Price</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-[#FDB913] text-black px-4 py-2 rounded-full font-semibold text-sm shadow-md hover:shadow-lg transition-shadow">
              <Clock className="h-4 w-4" strokeWidth={3} />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {services.map((service) => (
                <Link key={service.title} href={service.href}>
            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50">
              <CardHeader>
                <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                  <span className="text-primary font-medium inline-flex items-center hover:gap-2 transition-all group-hover:underline">Learn More

                  <ArrowRight className="ml-1 h-4 w-4" />
                  </span>
              </CardContent>
            </Card>
                </Link>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/services">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
