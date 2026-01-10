"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle2, Package, Send } from "lucide-react";

export default function RequestSamplesPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    address: "",
    city: "",
    samplesRequested: [] as string[],
    projectDetails: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const sampleOptions = [
    { id: "business-cards", name: "Business Cards", description: "Various paper stocks and finishes" },
    { id: "brochures", name: "Brochures", description: "Different folds and paper qualities" },
    { id: "packaging", name: "Packaging Boxes", description: "Various materials and printing" },
    { id: "labels", name: "Labels & Stickers", description: "Different materials and finishes" },
    { id: "paper-samples", name: "Paper Samples", description: "All available paper stocks" },
    { id: "finishing-samples", name: "Finishing Samples", description: "Lamination, UV, embossing, etc." },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSampleToggle = (sampleId: string) => {
    setFormData({
      ...formData,
      samplesRequested: formData.samplesRequested.includes(sampleId)
        ? formData.samplesRequested.filter(id => id !== sampleId)
        : [...formData.samplesRequested, sampleId],
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sample request submitted:", formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/30 py-16">
        <Card className="max-w-2xl mx-4">
          <CardContent className="pt-12 pb-12 text-center">
            <div className="mb-6 inline-flex p-4 bg-green-100 rounded-full">
              <CheckCircle2 className="h-12 w-12 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Sample Request Received!</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-lg mx-auto">
              Thank you for requesting samples. We'll prepare and ship your samples within 2-3 business days. 
              You'll receive a tracking number at <strong>{formData.email}</strong>
            </p>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Samples being sent to: <br />
                <strong>{formData.address}, {formData.city}</strong>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <a href="/">Return to Homepage</a>
                </Button>
                <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                  Request More Samples
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex p-3 bg-primary/10 rounded-full mb-6">
              <Package className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Request Free Samples
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              See and feel the quality of our printing and materials before placing your order. 
              We'll send you free samples within 2-3 business days.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <span className="font-medium">Completely Free</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <span className="font-medium">Fast Shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <span className="font-medium">No Obligation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Sample Selection */}
              <Card>
                <CardHeader>
                  <CardTitle>Select Samples</CardTitle>
                  <CardDescription>
                    Choose the types of samples you'd like to receive (select multiple)
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {sampleOptions.map((sample) => (
                      <div
                        key={sample.id}
                        onClick={() => handleSampleToggle(sample.id)}
                        className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                          formData.samplesRequested.includes(sample.id)
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`mt-0.5 h-5 w-5 rounded border-2 flex items-center justify-center flex-shrink-0 ${
                            formData.samplesRequested.includes(sample.id)
                              ? "border-primary bg-primary"
                              : "border-muted-foreground"
                          }`}>
                            {formData.samplesRequested.includes(sample.id) && (
                              <CheckCircle2 className="h-4 w-4 text-primary-foreground" />
                            )}
                          </div>
                          <div>
                            <h3 className="font-semibold mb-1">{sample.name}</h3>
                            <p className="text-sm text-muted-foreground">{sample.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {formData.samplesRequested.length === 0 && (
                    <p className="text-sm text-destructive mt-4">
                      * Please select at least one sample type
                    </p>
                  )}
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Contact & Delivery Information</CardTitle>
                  <CardDescription>Where should we send your samples?</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+92-XXX-XXXXXXX"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium">
                        Company Name
                      </label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="address" className="text-sm font-medium">
                      Delivery Address *
                    </label>
                    <Input
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Street address, building number, etc."
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="city" className="text-sm font-medium">
                      City *
                    </label>
                    <Input
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="Lahore, Karachi, Islamabad, etc."
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="projectDetails" className="text-sm font-medium">
                      Tell Us About Your Project (Optional)
                    </label>
                    <textarea
                      id="projectDetails"
                      name="projectDetails"
                      value={formData.projectDetails}
                      onChange={handleChange}
                      placeholder="What are you planning to print? Any specific requirements?"
                      rows={4}
                      className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  * Required fields. We respect your privacy and will never share your information.
                </p>
                <Button 
                  type="submit" 
                  size="lg"
                  disabled={formData.samplesRequested.length === 0}
                >
                  <Send className="mr-2 h-4 w-4" />
                  Request Samples
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">Why Request Samples?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="inline-flex p-3 bg-primary/10 rounded-full mb-4">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Feel the Quality</h3>
                  <p className="text-sm text-muted-foreground">
                    Experience the weight, texture, and finish of our materials firsthand
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="inline-flex p-3 bg-primary/10 rounded-full mb-4">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">See Color Accuracy</h3>
                  <p className="text-sm text-muted-foreground">
                    Verify how colors print on different materials before your full order
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="inline-flex p-3 bg-primary/10 rounded-full mb-4">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Make Informed Decisions</h3>
                  <p className="text-sm text-muted-foreground">
                    Choose the perfect combination of material and finish for your project
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
