"use client";

import { useState } from "react";
import Image from "next/image";
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

      {/* Sample Showcase Section */}
      <section className="py-16 bg-muted/30 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Explore Our Sample Collection</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              See what you'll receive: A comprehensive selection of materials, finishes, and printing techniques
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* Paper Samples */}
              <Card className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=75"
                    alt="Paper samples and materials"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-bold text-lg mb-1">Paper Samples</h3>
                    <p className="text-sm text-white/90">Various weights and textures</p>
                  </div>
                </div>
              </Card>

              {/* Cardstock */}
              <Card className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=75"
                    alt="Premium cardstock samples"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-bold text-lg mb-1">Premium Cardstock</h3>
                    <p className="text-sm text-white/90">Thick, durable options</p>
                  </div>
                </div>
              </Card>

              {/* Specialty Papers */}
              <Card className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="https://images.unsplash.com/photo-1561070791-36c11767b26a?w=400&q=75"
                    alt="Specialty paper samples"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-bold text-lg mb-1">Specialty Papers</h3>
                    <p className="text-sm text-white/90">Textured and unique stocks</p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Glossy Finish */}
              <Card className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="https://images.unsplash.com/photo-1555421689-d68471e189f2?w=400&q=75"
                    alt="Glossy finish samples"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-bold text-lg mb-1">Glossy Finish</h3>
                    <p className="text-sm text-white/90">Vibrant and reflective</p>
                  </div>
                </div>
              </Card>

              {/* Matte Finish */}
              <Card className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=75"
                    alt="Matte finish samples"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-bold text-lg mb-1">Matte Finish</h3>
                    <p className="text-sm text-white/90">Elegant and professional</p>
                  </div>
                </div>
              </Card>

              {/* Textured Finish */}
              <Card className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=75"
                    alt="Textured finish samples"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-bold text-lg mb-1">Textured Finish</h3>
                    <p className="text-sm text-white/90">Unique tactile feel</p>
                  </div>
                </div>
              </Card>
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

      {/* What You'll Receive Section */}
      <section className="py-16 bg-white border-t">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">What You'll Receive</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              A curated sample kit delivered to your door, showcasing our finest materials and printing quality
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Unboxing Visual */}
              <Card className="overflow-hidden">
                <div className="relative h-96">
                  <Image
                    src="https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=600&q=75"
                    alt="Sample kit unboxing"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Professional Sample Kit</h3>
                    <p className="text-white/90">
                      Carefully packaged samples delivered directly to you
                    </p>
                  </div>
                </div>
              </Card>

              {/* Contents Display */}
              <Card>
                <CardHeader>
                  <CardTitle>Inside Your Sample Kit</CardTitle>
                  <CardDescription>Everything you need to make an informed decision</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Material Swatches</h4>
                      <p className="text-sm text-muted-foreground">
                        20+ paper stocks ranging from standard to premium, each labeled with weight and specifications
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Finish Examples</h4>
                      <p className="text-sm text-muted-foreground">
                        Glossy, matte, soft-touch lamination, UV coating, and embossing samples
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Print Quality Samples</h4>
                      <p className="text-sm text-muted-foreground">
                        Actual printed pieces showcasing color accuracy, detail, and sharpness
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Packaging Samples</h4>
                      <p className="text-sm text-muted-foreground">
                        Box prototypes, bag samples, and packaging material options
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Information Guide</h4>
                      <p className="text-sm text-muted-foreground">
                        Detailed guide explaining each material, its best uses, and pricing information
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sample Kit Image */}
            <Card className="mt-8 overflow-hidden">
              <div className="relative h-80">
                <Image
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=75"
                  alt="Sample kit contents display"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute inset-0 flex items-center">
                  <div className="container mx-auto px-8">
                    <div className="max-w-xl text-white">
                      <h3 className="text-3xl font-bold mb-3">Experience Quality First-Hand</h3>
                      <p className="text-lg text-white/90 mb-6">
                        Our sample kit is designed to help you make confident decisions about materials, finishes, and printing techniques for your project.
                      </p>
                      <div className="inline-flex items-center gap-2 text-sm">
                        <Package className="h-5 w-5" />
                        <span className="font-semibold">Free shipping • 2-3 day delivery • No commitment required</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
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
