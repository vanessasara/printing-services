import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Recycle, Droplet, TreePine, Award, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Sustainability & Eco-Friendly Printing | Fast Printing & Packaging",
  description: "Learn about our commitment to sustainable printing and packaging. We use recycled materials, eco-friendly inks, and responsible practices to protect the environment.",
  keywords: "eco-friendly printing, sustainable packaging, recycled materials, FSC certified, green printing pakistan",
};

export default function SustainabilityPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-green-50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex p-4 bg-green-100 rounded-full mb-6">
              <Leaf className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Printing with Purpose
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Quality printing and packaging that protects your brand and our planet. 
              We're committed to sustainable practices every step of the way.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <span className="font-medium">FSC Certified Materials</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <span className="font-medium">Soy-Based Inks</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <span className="font-medium">Zero Waste Goal</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden order-2 md:order-1">
              <Image
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop"
                alt="Sustainable printing practices"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Environmental Commitment</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  At Fast Printing & Packaging, we believe that exceptional quality shouldn't come at 
                  the expense of our environment. That's why we've integrated sustainable practices 
                  into every aspect of our operations.
                </p>
                <p>
                  From sourcing eco-friendly materials to minimizing waste and reducing our carbon 
                  footprint, we're committed to making a positive impact. Our goal is simple: deliver 
                  premium printing and packaging solutions while protecting the planet for future generations.
                </p>
                <p>
                  We continuously invest in new technologies and processes that reduce environmental impact 
                  without compromising on the quality you expect from us.
                </p>
              </div>
              <Button asChild className="mt-6">
                <Link href="/request-quote">Request Eco-Friendly Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainable Practices */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Sustainable Practices
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We've implemented comprehensive eco-friendly practices across our entire operation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: TreePine,
                title: "FSC Certified Paper",
                description: "All our paper products come from responsibly managed forests certified by the Forest Stewardship Council (FSC), ensuring sustainable forestry practices.",
                image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&q=75",
              },
              {
                icon: Recycle,
                title: "Recycled Materials",
                description: "We use 100% post-consumer recycled paper and packaging materials whenever possible, reducing demand for virgin materials and saving trees.",
                image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&q=75",
              },
              {
                icon: Droplet,
                title: "Eco-Friendly Inks",
                description: "Our vegetable and soy-based inks are renewable, biodegradable, and produce less VOC emissions compared to traditional petroleum-based inks.",
                image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=600&q=75",
              },
              {
                icon: Leaf,
                title: "Biodegradable Packaging",
                description: "We offer biodegradable and compostable packaging options that break down naturally, leaving no harmful residue in the environment.",
                image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&q=75",
              },
              {
                icon: Award,
                title: "Waste Reduction",
                description: "Advanced printing technology and optimized processes minimize paper waste. All scrap materials are recycled or repurposed whenever possible.",
                image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&q=75",
              },
              {
                icon: Recycle,
                title: "Energy Efficiency",
                description: "Our facility uses energy-efficient LED lighting and equipment, and we're working toward renewable energy sources for our operations.",
                image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=75",
              },
            ].map((practice) => (
              <Card key={practice.title} className="border-2 hover:border-green-500/50 transition-colors overflow-hidden relative group">
                <div className="absolute inset-0 z-0 opacity-10">
                  <Image
                    src={practice.image}
                    alt={practice.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="pt-6 relative z-10">
                  <div className="mb-4 inline-flex p-3 bg-green-100 rounded-lg">
                    <practice.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{practice.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {practice.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Eco-Friendly Products */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Eco-Friendly Product Options
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose from our range of sustainable materials and finishes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Sustainable Materials</h3>
                <ul className="space-y-3">
                  {[
                    "100% recycled paper and cardstock",
                    "FSC-certified virgin paper",
                    "Kraft paper packaging",
                    "Biodegradable film and lamination",
                    "Cornstarch-based packaging",
                    "Recycled corrugated boxes",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Green Printing Options</h3>
                <ul className="space-y-3">
                  {[
                    "Soy-based and vegetable inks",
                    "Water-based coatings",
                    "Alcohol-free printing",
                    "Carbon-neutral delivery options",
                    "Minimal packaging waste",
                    "Energy-efficient production",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 md:py-20 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Environmental Impact
            </h2>
            <p className="text-green-100 text-lg max-w-2xl mx-auto">
              Together with our clients, we're making a real difference
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { number: "500+", label: "Trees Saved", sublabel: "Through recycled materials" },
              { number: "80%", label: "Waste Reduction", sublabel: "Compared to 5 years ago" },
              { number: "100%", label: "Recyclable", sublabel: "Of our packaging options" },
              { number: "30%", label: "Energy Savings", sublabel: "With LED equipment" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg font-semibold mb-1">{stat.label}</div>
                <p className="text-sm text-green-100">{stat.sublabel}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Our Certifications & Commitments
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-green-100 rounded-lg flex-shrink-0">
                      <Award className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">FSC Certification</h3>
                      <p className="text-sm text-muted-foreground">
                        Forest Stewardship Council certified, ensuring our paper comes from responsibly 
                        managed forests that provide environmental, social, and economic benefits.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-green-100 rounded-lg flex-shrink-0">
                      <Recycle className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Recycling Program</h3>
                      <p className="text-sm text-muted-foreground">
                        Active recycling program for all paper, cardboard, and packaging materials. 
                        We work with certified recycling partners to ensure proper waste management.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-green-100 rounded-lg flex-shrink-0">
                      <Leaf className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Carbon Footprint Reduction</h3>
                      <p className="text-sm text-muted-foreground">
                        Committed to reducing our carbon emissions through energy-efficient equipment, 
                        optimized logistics, and sustainable business practices.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-green-100 rounded-lg flex-shrink-0">
                      <TreePine className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Sustainable Partnerships</h3>
                      <p className="text-sm text-muted-foreground">
                        We partner with suppliers who share our environmental values and are committed 
                        to sustainable, ethical, and responsible business practices.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Green Materials Showcase */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Sustainable Materials Close-Up
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Explore our eco-friendly material options and see the quality for yourself
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Recycled Paper */}
              <Card className="overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&q=75"
                    alt="Recycled paper texture"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">100% Recycled Paper</h3>
                    <p className="text-white/90 text-sm mb-3">
                      Post-consumer recycled content with excellent printability and durability
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-green-600 rounded-full text-xs font-semibold">FSC Certified</span>
                      <span className="px-3 py-1 bg-green-600 rounded-full text-xs font-semibold">100% Recyclable</span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Eco Packaging */}
              <Card className="overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=600&q=75"
                    alt="Eco-friendly packaging materials"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Sustainable Packaging</h3>
                    <p className="text-white/90 text-sm mb-3">
                      Biodegradable and compostable packaging options that protect both your product and the planet
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-green-600 rounded-full text-xs font-semibold">Biodegradable</span>
                      <span className="px-3 py-1 bg-green-600 rounded-full text-xs font-semibold">Compostable</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Sustainable Alternatives Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* Bamboo Paper */}
              <Card className="overflow-hidden group hover:shadow-xl transition-all">
                <div className="relative h-48">
                  <Image
                    src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&q=75"
                    alt="Bamboo paper alternative"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h4 className="font-bold text-lg mb-1">Bamboo Paper</h4>
                    <p className="text-xs text-white/90">Fast-growing, renewable resource</p>
                  </div>
                </div>
              </Card>

              {/* Hemp Paper */}
              <Card className="overflow-hidden group hover:shadow-xl transition-all">
                <div className="relative h-48">
                  <Image
                    src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&q=75"
                    alt="Hemp paper alternative"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h4 className="font-bold text-lg mb-1">Hemp Paper</h4>
                    <p className="text-xs text-white/90">Durable and eco-friendly fiber</p>
                  </div>
                </div>
              </Card>

              {/* Biodegradable Materials */}
              <Card className="overflow-hidden group hover:shadow-xl transition-all">
                <div className="relative h-48">
                  <Image
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=75"
                    alt="Biodegradable materials"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h4 className="font-bold text-lg mb-1">Plant-Based Films</h4>
                    <p className="text-xs text-white/90">Compostable alternative to plastic</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Call-out Box */}
            <Card className="mt-8 bg-green-50 border-2 border-green-200">
              <CardContent className="pt-6 pb-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-600 rounded-lg flex-shrink-0">
                    <Leaf className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Need Help Choosing?</h3>
                    <p className="text-muted-foreground mb-4">
                      Our team can help you select the best sustainable materials for your project, balancing environmental impact with quality and budget requirements.
                    </p>
                    <Button asChild variant="default" className="bg-green-600 hover:bg-green-700">
                      <Link href="/contact">Consult with Our Green Team</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-green-50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Make a Green Choice for Your Next Project
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Choose eco-friendly printing and packaging that doesn't compromise on quality. 
              Let's create something beautiful that's good for your brand and the planet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/request-quote">
                  <Leaf className="mr-2 h-5 w-5" />
                  Request Eco-Friendly Quote
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
