import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Privacy Policy | Fast Printing & Packaging",
  description: "Learn how Fast Printing & Packaging collects, uses, and protects your personal information. Our commitment to your privacy.",
  keywords: "privacy policy, data protection, personal information, privacy",
};

export default function PrivacyPage() {
  const lastUpdated = "December 13, 2025";

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground">
              Last updated: {lastUpdated}
            </p>
          </div>

          {/* Introduction */}
          <Card className="mb-6">
            <CardContent className="pt-6">
              <p className="text-muted-foreground leading-relaxed mb-4">
                At Fast Printing & Packaging, we are committed to protecting your privacy and ensuring 
                the security of your personal information. This Privacy Policy explains how we collect, 
                use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                By using our services, you agree to the collection and use of information in accordance 
                with this policy. If you do not agree with our policies and practices, please do not use our services.
              </p>
            </CardContent>
          </Card>

          {/* Privacy Sections */}
          <div className="space-y-6">
            {/* 1. Information We Collect */}
            <Card>
              <CardHeader>
                <CardTitle>1. Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">1.1 Personal Information</h4>
                  <p className="mb-2">We may collect personally identifiable information that you voluntarily provide to us, including:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Name and contact information (email, phone number, address)</li>
                    <li>Company name and business information</li>
                    <li>Payment and billing information</li>
                    <li>Shipping and delivery addresses</li>
                    <li>Project specifications and artwork files</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">1.2 Automatically Collected Information</h4>
                  <p className="mb-2">When you visit our website, we may automatically collect:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>IP address and browser type</li>
                    <li>Device information and operating system</li>
                    <li>Pages visited and time spent on our site</li>
                    <li>Referring website addresses</li>
                    <li>Click patterns and site usage data</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">1.3 Cookies and Tracking Technologies</h4>
                  <p>
                    We use cookies and similar tracking technologies to enhance your browsing experience, 
                    analyze site traffic, and understand how our services are being used.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* 2. How We Use Your Information */}
            <Card>
              <CardHeader>
                <CardTitle>2. How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Process and fulfill your orders</li>
                  <li>Communicate with you about your projects and orders</li>
                  <li>Provide customer support and respond to inquiries</li>
                  <li>Send you quotes, invoices, and order confirmations</li>
                  <li>Improve our services and website functionality</li>
                  <li>Send marketing communications (with your consent)</li>
                  <li>Detect and prevent fraud or unauthorized access</li>
                  <li>Comply with legal obligations</li>
                  <li>Maintain business records and archives</li>
                </ul>
              </CardContent>
            </Card>

            {/* 3. How We Share Your Information */}
            <Card>
              <CardHeader>
                <CardTitle>3. How We Share Your Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">3.1 Service Providers</h4>
                  <p>
                    We may share information with trusted third-party service providers who assist us in operating 
                    our business, such as payment processors, shipping companies, and IT service providers. 
                    These providers are contractually obligated to protect your information.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">3.2 Legal Requirements</h4>
                  <p>
                    We may disclose your information if required by law, court order, or government regulation, 
                    or to protect our rights, property, or safety.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">3.3 Business Transfers</h4>
                  <p>
                    In the event of a merger, acquisition, or sale of assets, your information may be transferred 
                    to the acquiring entity.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* 4. Data Security */}
            <Card>
              <CardHeader>
                <CardTitle>4. Data Security</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>
                  We implement appropriate technical and organizational security measures to protect your 
                  personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
                <p>These measures include:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Secure SSL encryption for data transmission</li>
                  <li>Restricted access to personal information</li>
                  <li>Regular security audits and updates</li>
                  <li>Secure storage of physical and digital records</li>
                  <li>Employee training on data protection</li>
                </ul>
                <p className="mt-3">
                  However, no method of transmission over the internet or electronic storage is 100% secure. 
                  While we strive to protect your information, we cannot guarantee absolute security.
                </p>
              </CardContent>
            </Card>

            {/* 5. Data Retention */}
            <Card>
              <CardHeader>
                <CardTitle>5. Data Retention</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>
                  We retain your personal information for as long as necessary to fulfill the purposes outlined 
                  in this Privacy Policy, unless a longer retention period is required by law.
                </p>
                <p>Specifically:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Order and customer information: Retained for 7 years for accounting and tax purposes</li>
                  <li>Artwork files: Retained for 2 years for potential reprints</li>
                  <li>Marketing data: Retained until you unsubscribe or request deletion</li>
                  <li>Website analytics: Retained in anonymized form indefinitely</li>
                </ul>
              </CardContent>
            </Card>

            {/* 6. Your Rights and Choices */}
            <Card>
              <CardHeader>
                <CardTitle>6. Your Rights and Choices</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal obligations)</li>
                  <li><strong>Opt-Out:</strong> Unsubscribe from marketing emails at any time</li>
                  <li><strong>Data Portability:</strong> Request your data in a structured, commonly used format</li>
                  <li><strong>Withdraw Consent:</strong> Withdraw consent for data processing where applicable</li>
                </ul>
                <p className="mt-3">
                  To exercise any of these rights, please contact us at info@fastprinting.com. We will respond 
                  to your request within 30 days.
                </p>
              </CardContent>
            </Card>

            {/* 7. Cookies Policy */}
            <Card>
              <CardHeader>
                <CardTitle>7. Cookies and Tracking Technologies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">7.1 Types of Cookies We Use</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li><strong>Essential Cookies:</strong> Required for website functionality</li>
                    <li><strong>Performance Cookies:</strong> Help us understand how visitors use our site</li>
                    <li><strong>Functional Cookies:</strong> Remember your preferences</li>
                    <li><strong>Marketing Cookies:</strong> Track your activity for advertising purposes</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">7.2 Managing Cookies</h4>
                  <p>
                    You can control cookies through your browser settings. However, disabling certain cookies 
                    may affect the functionality of our website.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* 8. Third-Party Links */}
            <Card>
              <CardHeader>
                <CardTitle>8. Third-Party Links</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>
                  Our website may contain links to third-party websites. We are not responsible for the privacy 
                  practices or content of these external sites. We encourage you to review their privacy policies 
                  before providing any personal information.
                </p>
              </CardContent>
            </Card>

            {/* 9. Children's Privacy */}
            <Card>
              <CardHeader>
                <CardTitle>9. Children's Privacy</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>
                  Our services are not directed to individuals under the age of 18. We do not knowingly collect 
                  personal information from children. If we become aware that we have collected information from 
                  a child without parental consent, we will take steps to delete that information.
                </p>
              </CardContent>
            </Card>

            {/* 10. Changes to Privacy Policy */}
            <Card>
              <CardHeader>
                <CardTitle>10. Changes to This Privacy Policy</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p className="mb-3">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or 
                  legal requirements. The "Last Updated" date at the top of this page indicates when this policy 
                  was last revised.
                </p>
                <p>
                  We will notify you of any material changes by posting the new Privacy Policy on our website 
                  and, where appropriate, by email. Your continued use of our services after changes are posted 
                  constitutes acceptance of the updated policy.
                </p>
              </CardContent>
            </Card>

            {/* 11. International Data Transfers */}
            <Card>
              <CardHeader>
                <CardTitle>11. International Data Transfers</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>
                  Your information may be transferred to and processed in countries other than Pakistan. We ensure 
                  that appropriate safeguards are in place to protect your information in accordance with this 
                  Privacy Policy.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Section */}
          <Card className="mt-8">
            <CardContent className="pt-6">
              <h3 className="font-semibold text-lg mb-3">Contact Us About Privacy</h3>
              <p className="text-muted-foreground mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data 
                practices, please contact us:
              </p>
              <div className="space-y-2 text-sm mb-6">
                <p>
                  <strong>Email:</strong> info@fastprinting.com
                </p>
                <p>
                  <strong>Phone:</strong> +92-XXX-XXXXXXX
                </p>
                <p>
                  <strong>Address:</strong> 123 Printing Street, Lahore, Pakistan
                </p>
              </div>
              <div className="flex gap-4">
                <Button asChild variant="outline">
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/terms">View Terms & Conditions</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
