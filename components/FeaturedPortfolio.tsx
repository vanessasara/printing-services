"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const categories = ["All", "Packaging", "Printing", "Design"];

const portfolioItems = [
  {
    id: 1,
    title: "Luxury Cosmetic Packaging",
    category: "Packaging",
    image: "/cosmetic-packaging.jpg",
    href: "/portfolio/luxury-cosmetic-packaging",
  },
  {
    id: 2,
    title: "Restaurant Brand Identity",
    category: "Design",
    image: "/restaurant-branding.jpg",
    href: "/portfolio/restaurant-brand-identity",
  },
  {
    id: 3,
    title: "E-commerce Shipping Boxes",
    category: "Packaging",
    image: "/shipping-boxes.jpg",
    href: "/portfolio/ecommerce-shipping-boxes",
  },
  {
    id: 4,
    title: "Tech Startup Brand Identity",
    category: "Branding",
    image: "/tech-startup-branding.jpg",
    href: "/portfolio/tech-startup-branding",
  },
  {
    id: 5,
    title: "School Prospectus & Marketing Materials",
    category: "Marketing Materials",
    image: "/images/portfolio/event-materials.jpg",
    href: "/portfolio/school-prospectus-design",
  },
  {
    id: 6,
    title: "Food Product Labels",
    category: "Design",
    image: "/food-label.jpeg",
    href: "/portfolio/food-product-labels",
  },
  {
    id: 7,
    title: "Tech Startup Branding",
    category: "Design",
    image: "/tech-startup.jpeg",
    href: "/portfolio/tech-startup-branding",
  },
  {
    id: 8,
    title: "Retail Display Packaging",
    category: "Packaging",
    image: "/retail-label.jpeg",
    href: "/portfolio/retail-display-packaging",
  },
];

export default function FeaturedPortfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Work Speaks For Itself
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our portfolio of successful projects across various industries
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="min-w-[100px]"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {filteredItems.slice(0, 8).map((item) => (
            <Link key={item.id} href={item.href}>
              <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-square bg-muted overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-medium">View Project</span>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.category}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/portfolio">
              View Full Portfolio
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
