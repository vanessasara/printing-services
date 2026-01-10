import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "Terms & Conditions | Fast Printing & Packaging",
  description: "Read our terms and conditions for using Fast Printing & Packaging services. Information about orders, payments, delivery, and more.",
  keywords: "terms and conditions, printing terms, service terms, legal",
};

export default function TermsPage() {
  const lastUpdated = "December 13, 2025";

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Terms & Conditions
            </h1>
            <p className="text-muted-foreground">
              Last updated: {lastUpdated}
            </p>
          </div>

          {/* Introduction */}
          <Card className="mb-6">
            <CardContent className="pt-6">
              <p className="text-muted-foreground leading-relaxed">
                Welcome to Fast Printing & Packaging. These terms and conditions outline the rules and 
                regulations for the use of our services. By accessing our website and using our services, 
                you accept these terms and conditions in full. Do not continue to use Fast Printing & 
                Packaging's services if you do not accept all of the terms and conditions stated on this page.
              </p>
            </CardContent>
          </Card>

          {/* Terms Sections */}
          <div className="space-y-6">
            {/* 1. Orders and Quotations */}
            <Card>
              <CardHeader>
                <CardTitle>1. Orders and Quotations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>
                  <strong>1.1</strong> All quotations provided by Fast Printing & Packaging are valid for 30 days 
                  from the date of issue unless otherwise stated.
                </p>
                <p>
                  <strong>1.2</strong> Orders are only confirmed upon receipt of a signed quotation or purchase 
                  order and payment of the required deposit (if applicable).
                </p>
                <p>
                  <strong>1.3</strong> We reserve the right to refuse any order at our discretion.
                </p>
                <p>
                  <strong>1.4</strong> Prices quoted are based on specifications provided by the client. Any 
                  changes to specifications may result in revised pricing.
                </p>
              </CardContent>
            </Card>

            {/* 2. Payment Terms */}
            <Card>
              <CardHeader>
                <CardTitle>2. Payment Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>
                  <strong>2.1</strong> Payment is due upon completion unless credit terms have been agreed upon in writing.
                </p>
                <p>
                  <strong>2.2</strong> For first-time customers or large orders, a 50% deposit may be required 
                  before production begins.
                </p>
                <p>
                  <strong>2.3</strong> We accept bank transfers, cash, and major credit/debit cards.
                </p>
                <p>
                  <strong>2.4</strong> Late payments may incur interest charges at a rate of 2% per month.
                </p>
                <p>
                  <strong>2.5</strong> All prices are in Pakistani Rupees (PKR) unless otherwise stated.
                </p>
              </CardContent>
            </Card>

            {/* 3. Artwork and Proofs */}
            <Card>
              <CardHeader>
                <CardTitle>3. Artwork and Proofs</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>
                  <strong>3.1</strong> Clients are responsible for providing print-ready artwork in the correct 
                  format, resolution, and color mode (CMYK).
                </p>
                <p>
                  <strong>3.2</strong> We provide digital proofs for all jobs. It is the client's responsibility 
                  to carefully review proofs for errors in content, spelling, layout, and color.
                </p>
                <p>
                  <strong>3.3</strong> Once a proof is approved, Fast Printing & Packaging is not responsible 
                  for any errors that were present in the approved proof.
                </p>
                <p>
                  <strong>3.4</strong> Changes to artwork after approval may result in additional charges and delays.
                </p>
                <p>
                  <strong>3.5</strong> We retain the right to refuse artwork that contains offensive, defamatory, 
                  or illegal content.
                </p>
              </CardContent>
            </Card>

            {/* 4. Production and Delivery */}
            <Card>
              <CardHeader>
                <CardTitle>4. Production and Delivery</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>
                  <strong>4.1</strong> Production begins only after proof approval and receipt of payment/deposit.
                </p>
                <p>
                  <strong>4.2</strong> Estimated delivery times are indicative only and not guaranteed unless 
                  expressly agreed in writing.
                </p>
                <p>
                  <strong>4.3</strong> We are not liable for delays caused by circumstances beyond our control, 
                  including but not limited to equipment failure, material shortages, or force majeure.
                </p>
                <p>
                  <strong>4.4</strong> Delivery charges are additional unless otherwise stated in the quotation.
                </p>
                <p>
                  <strong>4.5</strong> Risk of loss or damage passes to the client upon delivery or collection.
                </p>
              </CardContent>
            </Card>

            {/* 5. Quality and Color Matching */}
            <Card>
              <CardHeader>
                <CardTitle>5. Quality and Color Matching</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>
                  <strong>5.1</strong> We strive for the highest quality, but slight variations in color between 
                  proof and final print are normal due to differences in screen displays and printing processes.
                </p>
                <p>
                  <strong>5.2</strong> Color matching to Pantone or specific brand colors requires additional 
                  costs and may not be 100% exact.
                </p>
                <p>
                  <strong>5.3</strong> A tolerance of +/- 10% on quantities ordered is industry standard and 
                  acceptable.
                </p>
                <p>
                  <strong>5.4</strong> We perform quality checks, but clients should inspect orders upon receipt 
                  and report any issues within 7 days.
                </p>
              </CardContent>
            </Card>

            {/* 6. Returns and Refunds */}
            <Card>
              <CardHeader>
                <CardTitle>6. Returns and Refunds</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>
                  <strong>6.1</strong> Custom-printed products cannot be returned except in cases of manufacturing 
                  defects or errors on our part.
                </p>
                <p>
                  <strong>6.2</strong> Claims for defective products must be made within 7 days of receipt, with 
                  photographic evidence.
                </p>
                <p>
                  <strong>6.3</strong> If we determine a defect was our fault, we will reprint the order at no 
                  charge or provide a full refund.
                </p>
                <p>
                  <strong>6.4</strong> We are not responsible for errors in client-supplied artwork that were 
                  present in the approved proof.
                </p>
                <p>
                  <strong>6.5</strong> Cancellations after production has begun may incur charges for work completed.
                </p>
              </CardContent>
            </Card>

            {/* 7. Copyright and Intellectual Property */}
            <Card>
              <CardHeader>
                <CardTitle>7. Copyright and Intellectual Property</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>
                  <strong>7.1</strong> Clients warrant that they own or have permission to use all content, 
                  images, logos, and trademarks in their artwork.
                </p>
                <p>
                  <strong>7.2</strong> Fast Printing & Packaging is not responsible for any copyright 
                  infringement in client-supplied materials.
                </p>
                <p>
                  <strong>7.3</strong> We retain the right to display completed work in our portfolio and 
                  marketing materials unless otherwise requested.
                </p>
                <p>
                  <strong>7.4</strong> Original designs created by our design team remain the property of 
                  Fast Printing & Packaging until full payment is received.
                </p>
              </CardContent>
            </Card>

            {/* 8. Limitation of Liability */}
            <Card>
              <CardHeader>
                <CardTitle>8. Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>
                  <strong>8.1</strong> Our total liability for any claim arising from our services is limited 
                  to the amount paid for that specific order.
                </p>
                <p>
                  <strong>8.2</strong> We are not liable for any indirect, consequential, or special damages, 
                  including lost profits or business opportunities.
                </p>
                <p>
                  <strong>8.3</strong> We cannot be held responsible for delays or failures caused by events 
                  beyond our reasonable control.
                </p>
              </CardContent>
            </Card>

            {/* 9. Privacy and Data Protection */}
            <Card>
              <CardHeader>
                <CardTitle>9. Privacy and Data Protection</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>
                  <strong>9.1</strong> We collect and process personal information in accordance with our 
                  Privacy Policy.
                </p>
                <p>
                  <strong>9.2</strong> Client information is kept confidential and not shared with third parties 
                  except as necessary to fulfill orders.
                </p>
                <p>
                  <strong>9.3</strong> We retain client artwork and order information for a reasonable period 
                  for potential reprints.
                </p>
              </CardContent>
            </Card>

            {/* 10. General Terms */}
            <Card>
              <CardHeader>
                <CardTitle>10. General Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>
                  <strong>10.1</strong> These terms and conditions may be updated from time to time. The latest 
                  version will always be available on our website.
                </p>
                <p>
                  <strong>10.2</strong> These terms are governed by the laws of Pakistan, and any disputes will 
                  be subject to the jurisdiction of Pakistani courts.
                </p>
                <p>
                  <strong>10.3</strong> If any provision of these terms is found to be invalid, the remaining 
                  provisions will continue in full force.
                </p>
                <p>
                  <strong>10.4</strong> Our failure to enforce any right or provision does not constitute a 
                  waiver of such right or provision.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Section */}
          <Card className="mt-8">
            <CardContent className="pt-6">
              <h3 className="font-semibold text-lg mb-3">Questions About Our Terms?</h3>
              <p className="text-muted-foreground mb-4">
                If you have any questions about these terms and conditions, please contact us:
              </p>
              <div className="space-y-2 text-sm">
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
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
