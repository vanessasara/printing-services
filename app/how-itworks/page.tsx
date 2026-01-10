import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle2, HelpCircle, Calculator, TrendingDown } from "lucide-react";

export const metadata = {
  title: "Pricing & Packages | Fast Printing & Packaging",
  description: "Transparent pricing for printing and packaging services. View our price ranges, volume discounts, and package deals. Get a custom quote for your specific needs.",
  keywords: "printing prices pakistan, packaging costs, printing quotes, bulk printing discounts, affordable printing lahore",
};

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex p-3 bg-primary/10 rounded-full mb-6">
              <Calculator className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Transparent, Competitive Pricing
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Quality printing and packaging at prices that make sense for your business. 
              No hidden fees, just honest pricing.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <span className="font-medium">Volume Discounts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <span className="font-medium">Free Quotes</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <span className="font-medium">No Hidden Costs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Philosophy */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Pricing Philosophy</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Every project is unique, which is why we don't believe in one-size-fits-all pricing. 
              We provide custom quotes based on your specific requirements, ensuring you only pay for 
              what you need. The more you order, the better the value—our volume discounts make 
              quality printing affordable for businesses of all sizes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="inline-flex p-3 bg-primary/10 rounded-full mb-4">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Transparent Pricing</h3>
                <p className="text-sm text-muted-foreground">
                  Every quote includes a detailed breakdown with no surprise charges or hidden fees
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <div className="inline-flex p-3 bg-primary/10 rounded-full mb-4">
                  <TrendingDown className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Volume Discounts</h3>
                <p className="text-sm text-muted-foreground">
                  The more you print, the lower your per-unit cost. Bulk orders get significant savings
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <div className="inline-flex p-3 bg-primary/10 rounded-full mb-4">
                  <Calculator className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Custom Quotes</h3>
                <p className="text-sm text-muted-foreground">
                  Tailored pricing for your specific project requirements and budget
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sample Price Ranges */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Sample Price Ranges
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Indicative pricing to help you budget. Final prices depend on specifications, quantity, and materials.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Business Cards */}
            <Card>
              <CardHeader>
                <CardTitle>Business Cards</CardTitle>
                <CardDescription>Standard size, full color</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">250 cards</span>
                    <span className="font-semibold">PKR 3,000 - 5,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">500 cards</span>
                    <span className="font-semibold">PKR 4,500 - 7,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">1,000 cards</span>
                    <span className="font-semibold">PKR 7,000 - 10,000</span>
                  </div>
                  <p className="text-xs text-muted-foreground pt-2">
                    Prices vary with paper quality and finishing options
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Flyers */}
            <Card>
              <CardHeader>
                <CardTitle>Flyers</CardTitle>
                <CardDescription>A5 size, single-sided, full color</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">500 flyers</span>
                    <span className="font-semibold">PKR 5,000 - 8,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">1,000 flyers</span>
                    <span className="font-semibold">PKR 8,000 - 12,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">5,000 flyers</span>
                    <span className="font-semibold">PKR 25,000 - 35,000</span>
                  </div>
                  <p className="text-xs text-muted-foreground pt-2">
                    Double-sided and premium paper available
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Brochures */}
            <Card>
              <CardHeader>
                <CardTitle>Brochures</CardTitle>
                <CardDescription>A4 tri-fold, full color</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">100 brochures</span>
                    <span className="font-semibold">PKR 8,000 - 12,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">500 brochures</span>
                    <span className="font-semibold">PKR 25,000 - 35,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">1,000 brochures</span>
                    <span className="font-semibold">PKR 40,000 - 55,000</span>
                  </div>
                  <p className="text-xs text-muted-foreground pt-2">
                    Custom sizes and folding options available
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Custom Boxes */}
            <Card>
              <CardHeader>
                <CardTitle>Custom Boxes</CardTitle>
                <CardDescription>Product packaging, custom size</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">100 boxes</span>
                    <span className="font-semibold">PKR 15,000 - 25,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">500 boxes</span>
                    <span className="font-semibold">PKR 50,000 - 80,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">1,000 boxes</span>
                    <span className="font-semibold">PKR 85,000 - 130,000</span>
                  </div>
                  <p className="text-xs text-muted-foreground pt-2">
                    Pricing depends heavily on size and material
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Labels & Stickers */}
            <Card>
              <CardHeader>
                <CardTitle>Labels & Stickers</CardTitle>
                <CardDescription>Custom size, full color</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">500 labels</span>
                    <span className="font-semibold">PKR 4,000 - 7,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">1,000 labels</span>
                    <span className="font-semibold">PKR 6,000 - 10,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">5,000 labels</span>
                    <span className="font-semibold">PKR 20,000 - 30,000</span>
                  </div>
                  <p className="text-xs text-muted-foreground pt-2">
                    Waterproof and die-cut options available
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Banners */}
            <Card>
              <CardHeader>
                <CardTitle>Banners</CardTitle>
                <CardDescription>Vinyl banner, full color</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">3x6 ft banner</span>
                    <span className="font-semibold">PKR 2,500 - 4,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">4x8 ft banner</span>
                    <span className="font-semibold">PKR 4,500 - 7,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">6x10 ft banner</span>
                    <span className="font-semibold">PKR 8,000 - 12,000</span>
                  </div>
                  <p className="text-xs text-muted-foreground pt-2">
                    Includes grommets and hemming
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground mb-6">
              These are sample prices only. Actual prices vary based on specifications, materials, finishing, and quantity.
            </p>
            <Button asChild size="lg">
              <Link href="/request-quote">Get Your Custom Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What Affects Pricing */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              What Affects Your Price?
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <HelpCircle className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Quantity</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Higher quantities significantly reduce per-unit costs. Printing 1,000 units often costs 
                    only 30-40% more than 500 units.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <HelpCircle className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Material Quality</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Premium papers, specialty stocks, and eco-friendly materials cost more but deliver 
                    exceptional quality and durability.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <HelpCircle className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Finishing Options</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Lamination, UV coating, embossing, foil stamping, and die-cutting add cost but create 
                    premium, professional results.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <HelpCircle className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Turnaround Time</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Standard 5-7 day turnaround has no rush fees. Express 2-3 day service and same-day 
                    orders incur additional charges.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <HelpCircle className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Size & Complexity</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Larger sizes require more material. Complex designs with multiple folds, die-cuts, or 
                    special assembly add production time.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <HelpCircle className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Color & Printing Method</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Full-color (CMYK) costs more than black & white. Digital printing is great for small 
                    runs; offset is more economical for large quantities.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Volume Discount Tier */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Volume Discounts
            </h2>
            <p className="text-lg mb-8 opacity-90">
              The more you order, the more you save. Enjoy significant discounts on bulk orders.
            </p>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { range: "100-499", discount: "Standard Price" },
                { range: "500-999", discount: "Save 10-15%" },
                { range: "1,000-4,999", discount: "Save 20-25%" },
                { range: "5,000+", discount: "Save 30-35%" },
              ].map((tier) => (
                <Card key={tier.range} className="bg-primary-foreground text-foreground">
                  <CardContent className="pt-6 text-center">
                    <div className="text-3xl font-bold mb-2">{tier.range}</div>
                    <div className="text-sm text-muted-foreground mb-1">units</div>
                    <div className="text-lg font-semibold text-primary">{tier.discount}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <p className="mt-8 text-sm opacity-90">
              Discounts apply automatically based on your order quantity. Contact us for enterprise pricing on 10,000+ units.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Request a detailed quote tailored to your specific needs. Free, fast, and no obligation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/request-quote">Request Free Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">Contact Sales Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
