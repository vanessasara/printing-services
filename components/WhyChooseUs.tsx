import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Palette as PaletteIcon, Leaf, Award, Truck, Users } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast Turnaround",
    description: "Express printing services with rush orders available. We respect your deadlines and deliver on time, every time.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=75"
  },
  {
    icon: PaletteIcon,
    title: "100% Custom Solutions",
    description: "Every project is tailored to your unique needs. From materials to finishes, we customize everything to match your vision.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=75"
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Materials.",
    description: "Sustainable printing with recycled paper, biodegradable inks, and FSC-certified materials. Quality that protects the planet.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&q=75"
  },
  {
    icon: Award,
    title: "Premium Quality Guaranteed",
    description: "State-of-the-art printing technology and rigorous quality checks ensure flawless results. 100% satisfaction guaranteed.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=75"
  },
  {
    icon: Truck,
    title: "Nationwide Delivery",
    description: "Fast, secure shipping across Pakistan. From Karachi to Lahore, Islamabad to Faisalabad — we deliver everywhere.",
    image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=600&q=75"
  },
  {
    icon: Users,
    title: "Expert Design Support",
    description: "Free design consultation with every order. Our creative team helps bring your ideas to life with professional expertise.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=75"
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Businesses Trust Fast Printing & Packaging
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We combine speed, quality, and sustainability to deliver exceptional results that elevate your brand
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="border-none shadow-sm bg-background overflow-hidden group">
              <div className="relative">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-white/85"></div>
                </div>

                {/* Content */}
                <CardContent className="pt-6 relative z-10">
                  <div className="mb-4 inline-flex p-3 bg-[#FDB913]/10 rounded-lg">
                    <feature.icon className="h-6 w-6 text-[#FDB913]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
