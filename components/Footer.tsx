import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1: About */}
          <div>
            <div className="font-heading text-2xl font-bold text-primary mb-4">
              Fast <span className="text-foreground">Printing</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Leading printing and packaging company in Pakistan. We deliver quality, speed, and sustainability in every project.
            </p>
            <div className="flex gap-3">
              <Link href="https://facebook.com" target="_blank" className="hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://instagram.com" target="_blank" className="hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="https://linkedin.com" target="_blank" className="hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="https://twitter.com" target="_blank" className="hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/digital-printing" className="text-muted-foreground hover:text-primary transition-colors">
                  Digital Printing
                </Link>
              </li>
              <li>
                <Link href="/offset-printing" className="text-muted-foreground hover:text-primary transition-colors">
                  Offset Printing
                </Link>
              </li>
              <li>
                <Link href="/custom-packaging" className="text-muted-foreground hover:text-primary transition-colors">
                  Custom Packaging
                </Link>
              </li>
              <li>
                <Link href="/brand-design" className="text-muted-foreground hover:text-primary transition-colors">
                  Design Services
                </Link>
              </li>
              <li>
                <Link href="" className="text-primary hover:underline font-medium">
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-muted-foreground hover:text-primary transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="text-muted-foreground hover:text-primary transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Get In Touch</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-[#FDB913] flex-shrink-0 mt-0.5" />
                <Link
                  href="https://maps.google.com/?q=101A+J1+Block+Valencia+Town+Main+Defence+Road+Lahore+Pakistan"
                  target="_blank"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  101A, J1 Block, Valencia Town<br />
                  Main Defence Road, Lahore, Pakistan
                </Link>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-5 w-5 text-[#FDB913] flex-shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <Link href="tel:+923252467463" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                    0325 2467463 (WhatsApp)
                  </Link>
                  <Link href="tel:+923395447890" className="text-muted-foreground hover:text-primary transition-colors">
                    0339 5447890
                  </Link>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-[#FDB913] flex-shrink-0" />
                <Link href="mailto:xfastgroup001@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  xfastgroup001@gmail.com
                </Link>
              </li>
            </ul>
            <div className="mt-4">
              <p className="text-sm text-muted-foreground mb-2">Business Hours:</p>
              <p className="text-sm">Mon-Sat: 10:00 AM - 8:00 PM</p>
              <p className="text-sm text-muted-foreground">Sunday: Closed</p>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-border pt-8 mb-8">
          <div className="max-w-md mx-auto text-center">
            <h3 className="font-semibold text-lg mb-2">Subscribe to Our Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Get printing tips, special offers, and industry insights
            </p>
            <form className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>

        {/* Payment/Certification Icons */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-muted-foreground">
            <span className="px-4 py-2 border border-border rounded">FSC Certified</span>
            <span className="px-4 py-2 border border-border rounded">ISO 9001</span>
            <span className="px-4 py-2 border border-border rounded">Eco-Friendly</span>
            <span className="px-4 py-2 border border-border rounded">100% Secure</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border bg-secondary/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-muted-foreground">
            <p>© 2025 Fast Printing & Packaging. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="/privacy-policy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-conditions" className="hover:text-primary transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
