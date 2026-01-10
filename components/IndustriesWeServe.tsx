import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Stethoscope, Utensils, ShoppingBag, Briefcase, Calendar, ArrowRight } from "lucide-react";

const industries = [
  {
    icon: GraduationCap,
    name: "Schools & Education",
    description: "Notebooks, ID cards, certificates, and educational materials",
    href: "/industries/schools-education",
  },
  {
    icon: Stethoscope,
    name: "Healthcare & Medical",
    description: "Medical brochures, labels, packaging, and compliance materials",
    href: "/industries/healthcare-medical",
  },
  {
    icon: Utensils,
    name: "Restaurants & Food",
    description: "Menus, labels, takeout packaging, and food-safe materials",
    href: "/industries/restaurants-food",
  },
  {
    icon: ShoppingBag,
    name: "Retail & E-commerce",
    description: "Product packaging, labels, shipping boxes, and branded materials",
    href: "/industries/retail-ecommerce",
  },
  {
    icon: Briefcase,
    name: "Corporate & Business",
    description: "Business cards, stationery, folders, and corporate gifts",
    href: "/industries/corporate-business",
  },
  {
    icon: Calendar,
    name: "Events & Hospitality",
    description: "Invitations, banners, badges, and event materials",
    href: "/industries/events-hospitality",
  },
];

export default function IndustriesWeServe() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted Across Industries
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Specialized printing and packaging solutions tailored to your industry's unique needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <Link key={industry.name} href={industry.href}>
              <Card className="group h-full hover:shadow-lg transition-all duration-300 hover:border-primary/50 border-2">
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <industry.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {industry.description}
                  </p>
                  <span className="text-primary font-medium inline-flex items-center group-hover:gap-2 transition-all">
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
  );
}
