import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Ready to Make Your Brand Unforgettable?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-primary-foreground/90">
            Get a free quote in 24 hours — No commitment required
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button asChild size="lg" variant="secondary" className="text-base px-8 min-w-[200px]">
              <Link href="/request-quote">
                Get Your Free Quote Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-base px-8 min-w-[200px] bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link href="tel:+923252467463">
                <Phone className="mr-2 h-5 w-5" />
                Call: 0325 2467463
              </Link>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6 text-sm text-primary-foreground/90">
            <div className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              <span>Free Consultation</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-primary-foreground/30"></div>
            <span>Fast Response</span>
            <div className="hidden sm:block w-px h-4 bg-primary-foreground/30"></div>
            <span>No Hidden Fees</span>
          </div>
        </div>
      </div>
    </section>
  );
}
