"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Upload, X, MessageCircle, Shield, Clock } from "lucide-react";
import Image from "next/image";

export default function RequestQuotePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    projectType: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const maxSize = 10 * 1024 * 1024; // 10MB

      if (file.size > maxSize) {
        alert("File size must be less than 10MB");
        return;
      }

      setUploadedFile(file);
    }
  };

  const handleRemoveFile = () => {
    setUploadedFile(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log("Quote request submitted:", {
      ...formData,
      file: uploadedFile?.name,
    });

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Get Your FREE Quote</h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6">
              Submit your project details and receive a detailed quote within 24 hours
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-[#FDB913]" />
                <span className="font-medium">Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-[#FDB913]" />
                <span className="font-medium">24-Hour Response</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-[#FDB913]" />
                <span className="font-medium">No Obligation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Imagery Section */}
      <section className="py-12 bg-gradient-to-br from-primary/5 to-background border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Why Choose Us?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Customer Service */}
              <Card className="overflow-hidden group hover:shadow-xl transition-all">
                <div className="relative h-48">
                  <Image
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=75"
                    alt="Professional customer service"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-bold text-lg mb-1">Expert Consultation</h3>
                    <p className="text-sm text-white/90">Professional guidance every step of the way</p>
                  </div>
                </div>
              </Card>

              {/* Happy Client */}
              <Card className="overflow-hidden group hover:shadow-xl transition-all">
                <div className="relative h-48">
                  <Image
                    src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&q=75"
                    alt="Happy satisfied clients"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-bold text-lg mb-1">500+ Satisfied Clients</h3>
                    <p className="text-sm text-white/90">Trusted by businesses across Pakistan</p>
                  </div>
                </div>
              </Card>

              {/* Finished Projects */}
              <Card className="overflow-hidden group hover:shadow-xl transition-all">
                <div className="relative h-48">
                  <Image
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=75"
                    alt="High quality finished projects"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-bold text-lg mb-1">Premium Quality</h3>
                    <p className="text-sm text-white/90">Exceptional results that exceed expectations</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-[600px] mx-auto">
            {!isSuccess ? (
              <Card className="border-t-4 border-t-[#FDB913] shadow-xl">
                <CardContent className="pt-8 pb-8 px-6 md:px-8">
                  {/* Form Header */}
                  <div className="mb-8 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-3">Quick Quote Request</h2>
                    <p className="text-gray-600">Fill in the details below and we'll get back to you within 24 hours</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
                        Your Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                        className="h-12 rounded-lg border-2 border-gray-200 focus:border-[#FDB913] focus:ring-2 focus:ring-[#FDB913]/20 transition-all"
                      />
                    </div>

                    {/* WhatsApp Number Field */}
                    <div className="space-y-2">
                      <label htmlFor="whatsapp" className="block text-sm font-semibold text-gray-700">
                        WhatsApp Number *
                      </label>
                      <div className="relative">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-2 pointer-events-none">
                          <MessageCircle className="h-5 w-5 text-green-600" />
                          <span className="text-sm font-medium text-gray-600">+92</span>
                          <span className="text-gray-300">|</span>
                        </div>
                        <Input
                          id="whatsapp"
                          name="whatsapp"
                          type="tel"
                          value={formData.whatsapp}
                          onChange={handleChange}
                          placeholder="3XX XXXXXXX"
                          required
                          maxLength={10}
                          pattern="[0-9]{10}"
                          className="h-12 pl-24 rounded-lg border-2 border-gray-200 focus:border-[#FDB913] focus:ring-2 focus:ring-[#FDB913]/20 transition-all"
                        />
                      </div>
                      <p className="text-xs text-gray-500">Enter 10-digit number without country code</p>
                    </div>

                    {/* Project Type Dropdown */}
                    <div className="space-y-2">
                      <label htmlFor="projectType" className="block text-sm font-semibold text-gray-700">
                        Project Type *
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        required
                        className="h-12 w-full rounded-lg border-2 border-gray-200 focus:border-[#FDB913] focus:ring-2 focus:ring-[#FDB913]/20 bg-white px-3 text-base transition-all cursor-pointer"
                      >
                        <option value="">Select your project type</option>
                        <option value="business-cards">Business Cards</option>
                        <option value="brochures-flyers">Brochures & Flyers</option>
                        <option value="packaging-boxes">Packaging Boxes</option>
                        <option value="labels-stickers">Labels & Stickers</option>
                        <option value="banners-posters">Banners & Posters</option>
                        <option value="custom">Custom Project</option>
                      </select>
                    </div>

                    {/* File Upload Area */}
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700">
                        Upload Design File (Optional)
                      </label>
                      {!uploadedFile ? (
                        <label
                          htmlFor="file-upload"
                          className="border-2 border-dashed border-[#FDB913] rounded-lg p-8 text-center hover:bg-[#FDB913]/5 transition-colors cursor-pointer block"
                        >
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                            onChange={handleFileChange}
                            accept=".pdf,.ai,.psd,.jpg,.jpeg,.png"
                          />
                          <Upload className="h-10 w-10 mx-auto mb-3 text-[#FDB913]" />
                          <p className="text-sm font-medium text-gray-700 mb-1">
                            Drop your design file here or click to browse
                          </p>
                          <p className="text-xs text-gray-500">
                            PDF, AI, PSD, JPG, PNG (Max 10MB)
                          </p>
                        </label>
                      ) : (
                        <div className="border-2 border-[#FDB913] bg-[#FDB913]/5 rounded-lg p-4 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-[#FDB913] rounded">
                              <Upload className="h-5 w-5 text-black" />
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-700">{uploadedFile.name}</p>
                              <p className="text-xs text-gray-500">
                                {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                              </p>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={handleRemoveFile}
                            className="p-1 hover:bg-red-100 rounded-full transition-colors"
                          >
                            <X className="h-5 w-5 text-red-600" />
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-14 text-lg font-bold bg-[#FDB913] text-black hover:bg-[#FDB913]/90 hover:scale-[1.02] transition-all shadow-lg"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin h-5 w-5 border-2 border-black border-t-transparent rounded-full mr-2" />
                          Submitting...
                        </>
                      ) : (
                        "GET FREE QUOTE"
                      )}
                    </Button>

                    {/* Bottom Info */}
                    <div className="space-y-3 text-center pt-4">
                      <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                        <Clock className="h-4 w-4 text-[#FDB913]" />
                        <span>We'll respond within 24 hours!</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                        <Shield className="h-4 w-4" />
                        <span>Your information is secure and confidential</span>
                      </div>
                    </div>
                  </form>
                </CardContent>
              </Card>
            ) : (
              /* Success State */
              <Card className="border-t-4 border-t-green-500 shadow-xl">
                <CardContent className="pt-12 pb-12 text-center">
                  <div className="mb-6 inline-flex p-4 bg-green-100 rounded-full">
                    <CheckCircle2 className="h-16 w-16 text-green-600" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4 text-gray-900">Quote Request Received!</h2>
                  <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
                    Thank you for reaching out! We've received your quote request and our team will contact you via WhatsApp within 24 hours.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                      <MessageCircle className="h-5 w-5 text-green-600" />
                      <span>We'll message you on <strong>+92 {formData.whatsapp}</strong></span>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                      <Button asChild className="bg-[#FDB913] text-black hover:bg-[#FDB913]/90">
                        <a href="/">Return to Homepage</a>
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => {
                          setIsSuccess(false);
                          setFormData({ name: "", whatsapp: "", projectType: "" });
                          setUploadedFile(null);
                        }}
                      >
                        Request Another Quote
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* What Happens Next Section - Visual Timeline */}
      {!isSuccess && (
        <section className="py-16 bg-gradient-to-br from-primary/5 to-background border-t">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">What Happens Next?</h2>
              <p className="text-center text-muted-foreground mb-12">Your journey from quote to delivery</p>

              <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 relative">
                {/* Connecting line - hidden on mobile */}
                <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-primary/20" style={{ zIndex: 0 }}></div>

                {/* Step 1: Submit Request */}
                <div className="relative">
                  <Card className="overflow-hidden hover:shadow-lg transition-all">
                    <div className="relative h-32">
                      <Image
                        src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=75"
                        alt="Submit request"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="pt-4 pb-4 text-center">
                      <div className="w-10 h-10 rounded-full bg-[#FDB913] text-black flex items-center justify-center text-lg font-bold mx-auto mb-2 relative z-10">
                        1
                      </div>
                      <h3 className="font-semibold text-sm mb-1">Submit Request</h3>
                      <p className="text-xs text-muted-foreground">Fill out the form</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Step 2: Review & Quote */}
                <div className="relative">
                  <Card className="overflow-hidden hover:shadow-lg transition-all">
                    <div className="relative h-32">
                      <Image
                        src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&q=75"
                        alt="Review and quote"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="pt-4 pb-4 text-center">
                      <div className="w-10 h-10 rounded-full bg-[#FDB913] text-black flex items-center justify-center text-lg font-bold mx-auto mb-2 relative z-10">
                        2
                      </div>
                      <h3 className="font-semibold text-sm mb-1">Review & Quote</h3>
                      <p className="text-xs text-muted-foreground">Within 24 hours</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Step 3: Approve Quote */}
                <div className="relative">
                  <Card className="overflow-hidden hover:shadow-lg transition-all">
                    <div className="relative h-32">
                      <Image
                        src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&q=75"
                        alt="Approve quote"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="pt-4 pb-4 text-center">
                      <div className="w-10 h-10 rounded-full bg-[#FDB913] text-black flex items-center justify-center text-lg font-bold mx-auto mb-2 relative z-10">
                        3
                      </div>
                      <h3 className="font-semibold text-sm mb-1">Approve Quote</h3>
                      <p className="text-xs text-muted-foreground">Confirm details</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Step 4: Production Begins */}
                <div className="relative">
                  <Card className="overflow-hidden hover:shadow-lg transition-all">
                    <div className="relative h-32">
                      <Image
                        src="https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=400&q=75"
                        alt="Production begins"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="pt-4 pb-4 text-center">
                      <div className="w-10 h-10 rounded-full bg-[#FDB913] text-black flex items-center justify-center text-lg font-bold mx-auto mb-2 relative z-10">
                        4
                      </div>
                      <h3 className="font-semibold text-sm mb-1">Production</h3>
                      <p className="text-xs text-muted-foreground">We start printing</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Step 5: Quality Check */}
                <div className="relative">
                  <Card className="overflow-hidden hover:shadow-lg transition-all">
                    <div className="relative h-32">
                      <Image
                        src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=75"
                        alt="Quality check"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="pt-4 pb-4 text-center">
                      <div className="w-10 h-10 rounded-full bg-[#FDB913] text-black flex items-center justify-center text-lg font-bold mx-auto mb-2 relative z-10">
                        5
                      </div>
                      <h3 className="font-semibold text-sm mb-1">Quality Check</h3>
                      <p className="text-xs text-muted-foreground">Thorough inspection</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Step 6: Delivery */}
                <div className="relative">
                  <Card className="overflow-hidden hover:shadow-lg transition-all">
                    <div className="relative h-32">
                      <Image
                        src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=400&q=75"
                        alt="Delivery"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="pt-4 pb-4 text-center">
                      <div className="w-10 h-10 rounded-full bg-[#FDB913] text-black flex items-center justify-center text-lg font-bold mx-auto mb-2 relative z-10">
                        6
                      </div>
                      <h3 className="font-semibold text-sm mb-1">Delivery</h3>
                      <p className="text-xs text-muted-foreground">Receive your order</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
