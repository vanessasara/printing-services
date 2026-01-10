import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Phone, Palette, Printer, CheckCircle, Truck, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Consultation",
    description: "Share your vision and requirements with our expert team",
    detail: "Free consultation • 24-hour response • No obligation",
  },
  {
    number: "02",
    icon: Palette,
    title: "Design & Approval",
    description: "Review digital mockups and approve every detail",
    detail: "Unlimited revisions • Professional design support",
  },
  {
    number: "03",
    icon: Printer,
    title: "Production",
    description: "State-of-the-art printing with rigorous quality checks",
    detail: "Premium materials • Expert craftsmanship",
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Quality Check",
    description: "Every detail inspected to ensure perfection",
    detail: "100% satisfaction guaranteed",
  },
  {
    number: "05",
    icon: Truck,
    title: "Delivery",
    description: "Fast and secure shipping nationwide",
    detail: "Track your order • Secure packaging",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How It Works — Simple, Transparent, Professional
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From concept to delivery, we make the entire process seamless and stress-free
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block mb-12">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-primary/20 -translate-y-1/2"></div>
            
            <div className="grid grid-cols-5 gap-4 relative z-10">
              {steps.map((step, index) => (
                <div key={step.number} className="text-center">
                  <div className="mb-4 mx-auto w-20 h-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold shadow-lg">
                    {step.number}
                  </div>
                  <div className="mb-2 inline-flex p-2 bg-primary/10 rounded-lg">
                    <step.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground mb-1">
                    {step.description}
                  </p>
                  <p className="text-xs text-primary font-medium">
                    {step.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet View */}
        <div className="lg:hidden space-y-4 mb-10">
          {steps.map((step) => (
            <Card key={step.number} className="border-l-4 border-l-primary">
              <CardContent className="p-6 flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <step.icon className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-lg">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-1">
                    {step.description}
                  </p>
                  <p className="text-sm text-primary font-medium">
                    {step.detail}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center bg-muted/50 rounded-lg p-6">
          <p className="text-lg mb-4">
            <span className="font-semibold">Total Timeline:</span> 5-12 days (standard) • Rush orders available
          </p>
          <Button asChild size="lg">
            <Link href="/request-quote">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
