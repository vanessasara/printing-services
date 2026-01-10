import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HelpCircle, Phone, Mail } from "lucide-react";

export const metadata = {
  title: "FAQ - Frequently Asked Questions | Fast Printing & Packaging",
  description: "Find answers to common questions about our printing and packaging services, pricing, turnaround times, file formats, and more.",
  keywords: "printing FAQ, packaging questions, printing turnaround time, file formats, custom packaging questions",
};

const faqCategories = [
  {
    category: "General Questions",
    questions: [
      {
        q: "What types of printing services do you offer?",
        a: "We offer comprehensive printing services including digital printing, offset printing, large format printing, screen printing, business cards, brochures, flyers, posters, banners, catalogs, stationery, and more. We handle both small and large volume orders."
      },
      {
        q: "Do you provide design services?",
        a: "Yes! We offer complete design services including logo design, brand identity development, packaging design, and marketing materials design. Our expert designers can help bring your vision to life or create something entirely new for your brand."
      },
      {
        q: "What areas do you serve?",
        a: "We serve clients across Pakistan with offices in Lahore. We offer nationwide delivery to all major cities including Karachi, Islamabad, Faisalabad, Multan, Rawalpindi, and more. International shipping is also available upon request."
      },
      {
        q: "What are your business hours?",
        a: "We're open Monday to Friday from 9:00 AM to 6:00 PM, and Saturday from 10:00 AM to 4:00 PM. We're closed on Sundays and public holidays. However, you can request quotes 24/7 through our website."
      }
    ]
  },
  {
    category: "Ordering & Quotes",
    questions: [
      {
        q: "How do I get a quote?",
        a: "You can request a free quote through our website by filling out the quote request form, emailing us at sales@fastprinting.com, or calling us at +92-XXX-XXXXXXX. We typically respond within 24 hours with a detailed quote."
      },
      {
        q: "What information do I need to provide for a quote?",
        a: "To provide an accurate quote, we need: the type of product/service, quantity, size/dimensions, material preferences, color requirements (full color, black & white, etc.), finishing options, and your target delivery date."
      },
      {
        q: "Can I see a sample before placing a large order?",
        a: "Absolutely! We can provide physical samples of our materials and finishes. For custom designs, we can create a digital proof or a physical sample for approval before proceeding with the full production run."
      },
      {
        q: "What is your minimum order quantity?",
        a: "Our minimum order quantities vary by product. Digital printing typically has lower minimums (as low as 25-50 pieces), while offset printing is more economical for larger runs (500+ pieces). Contact us for specific minimums for your project."
      }
    ]
  },
  {
    category: "Printing & Production",
    questions: [
      {
        q: "What file formats do you accept?",
        a: "We accept PDF, AI (Adobe Illustrator), PSD (Photoshop), EPS, and high-resolution JPG or PNG files. PDF is preferred for final print files. If you need help with file preparation, our design team can assist."
      },
      {
        q: "What is your standard turnaround time?",
        a: "Standard turnaround time is 5-7 business days for most printing projects and 10-12 business days for custom packaging. Rush orders are available with 2-3 day turnaround for an additional fee. Large format and specialty items may require additional time."
      },
      {
        q: "Do you offer rush or same-day services?",
        a: "Yes, we offer rush services with 2-3 day turnaround for most products. Same-day and next-day service is available for select products like business cards, flyers, and some signage. Additional rush fees apply."
      },
      {
        q: "What color mode should my files be in?",
        a: "All print files should be in CMYK color mode, not RGB. RGB is for screens, while CMYK is for print. We can convert RGB files to CMYK, but colors may shift slightly. For best results, design in CMYK from the start."
      },
      {
        q: "Do you offer proofs before printing?",
        a: "Yes, we provide digital proofs (PDF) for all orders at no extra charge. Physical press proofs are available for an additional fee on large or critical orders. We won't proceed with printing until you approve the proof."
      }
    ]
  },
  {
    category: "Custom Packaging",
    questions: [
      {
        q: "What types of custom packaging do you create?",
        a: "We create custom boxes, product packaging, food packaging, cosmetic packaging, retail displays, shipping boxes, labels, stickers, bags, pouches, and luxury packaging. All packaging can be fully customized in size, material, printing, and finishing."
      },
      {
        q: "Can you help design my packaging?",
        a: "Yes! Our design team specializes in packaging design. We can create custom packaging designs from scratch or work with your existing brand guidelines to develop packaging that stands out and protects your product."
      },
      {
        q: "What materials are available for packaging?",
        a: "We offer various materials including corrugated cardboard, kraft paper, rigid boxes, chipboard, white cardstock, colored paper, eco-friendly options, and specialty materials. We'll help you select the best material based on your product and budget."
      },
      {
        q: "Do you offer eco-friendly packaging options?",
        a: "Absolutely! We're committed to sustainability and offer recycled materials, biodegradable options, FSC-certified paper, soy-based inks, and minimal-waste designs. We can help you create packaging that's both beautiful and environmentally responsible."
      }
    ]
  },
  {
    category: "Pricing & Payment",
    questions: [
      {
        q: "How is pricing calculated?",
        a: "Pricing depends on quantity, size, material, color requirements, finishing options, and turnaround time. Generally, larger quantities result in lower per-unit costs. We provide detailed quotes with transparent pricing and no hidden fees."
      },
      {
        q: "Do you offer bulk discounts?",
        a: "Yes, we offer volume discounts for large orders. The more you print, the lower the per-unit cost. Contact us with your quantity requirements for a custom quote with bulk pricing."
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept bank transfers, cash, and major credit/debit cards. For corporate clients, we can arrange payment terms after credit approval. A deposit may be required for large or first-time orders."
      },
      {
        q: "Are there any additional fees I should know about?",
        a: "Our quotes include all standard costs. Additional fees may apply for rush orders, custom dies or printing plates, specialty finishes, or delivery to remote locations. All fees are clearly stated in your quote before you approve."
      }
    ]
  },
  {
    category: "Delivery & Shipping",
    questions: [
      {
        q: "Do you offer delivery?",
        a: "Yes, we offer delivery across Pakistan. Local delivery in Lahore is free for orders over a certain amount. Nationwide shipping is available at competitive rates. We work with reliable courier services to ensure safe, timely delivery."
      },
      {
        q: "How long does shipping take?",
        a: "Shipping within Lahore typically takes 1-2 business days. Delivery to other major cities (Karachi, Islamabad, Faisalabad) takes 2-4 business days. Remote areas may take 5-7 business days. We provide tracking information for all shipments."
      },
      {
        q: "Can I pick up my order?",
        a: "Yes, you can pick up your order from our Lahore facility at no charge. We'll notify you when your order is ready for pickup. Please bring your order confirmation and ID."
      },
      {
        q: "What if my order is damaged during shipping?",
        a: "We package all orders carefully to prevent damage. If your order arrives damaged, please contact us within 48 hours with photos. We'll arrange for a replacement or refund. Your satisfaction is our priority."
      }
    ]
  }
];

export default function FAQPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex p-3 bg-primary/10 rounded-full mb-6">
              <HelpCircle className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground">
              Find answers to common questions about our printing and packaging services
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 pb-2 border-b-2 border-primary/20">
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => (
                    <Card key={faqIndex} className="border-l-4 border-l-primary/30">
                      <CardContent className="pt-6">
                        <h3 className="font-semibold text-lg mb-3 flex items-start gap-2">
                          <span className="text-primary mt-1">Q:</span>
                          <span>{faq.q}</span>
                        </h3>
                        <p className="text-muted-foreground leading-relaxed pl-6">
                          <span className="font-semibold text-foreground">A:</span> {faq.a}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto">
            <CardContent className="pt-8 pb-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Still Have Questions?
              </h2>
              <p className="text-muted-foreground mb-8">
                Can't find the answer you're looking for? Our team is here to help!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/contact">
                    <Mail className="mr-2 h-5 w-5" />
                    Contact Us
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="tel:+92XXXXXXXXX">
                    <Phone className="mr-2 h-5 w-5" />
                    Call +92-XXX-XXXXXXX
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-8">Popular Resources</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Button asChild variant="outline" className="h-auto py-4">
                <Link href="/request-quote">Request a Quote</Link>
              </Button>
              <Button asChild variant="outline" className="h-auto py-4">
                <Link href="/services">Our Services</Link>
              </Button>
              <Button asChild variant="outline" className="h-auto py-4">
                <Link href="/portfolio">View Portfolio</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
