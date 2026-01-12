"use client"

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight, Check, Award, Users, Star, Palette, Truck, ShieldCheck, Tag, Headset, Leaf } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Subtle yellow accent elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FDB913]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#FDB913]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 py-12 md:py-20 lg:py-24">
        <div className="grid lg:grid-cols-[60%_40%] gap-8 lg:gap-12 items-center relative z-10">
          {/* Left: Text Content (60%) */}
          <div className="order-2 lg:order-1">
            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Pakistan&apos;s{" "}
              <span className="text-[#FDB913]">Fastest</span>{" "}
              <span className="text-[#FDB913]">Custom</span>{" "}
              Printing & Packaging Solutions
            </h1>

            {/* Sub-headline with USPs */}
            <div className="mb-8 space-y-3">
              <div className="flex items-center gap-3 text-base md:text-lg text-gray-700">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#FDB913] flex items-center justify-center">
                  <Check className="h-4 w-4 text-black font-bold" strokeWidth={3} />
                </div>
                <span className="font-medium">FREE Design Support</span>
              </div>
              <div className="flex items-center gap-3 text-base md:text-lg text-gray-700">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#FDB913] flex items-center justify-center">
                  <Check className="h-4 w-4 text-black font-bold" strokeWidth={3} />
                </div>
                <span className="font-medium">24-Hour Quotation</span>
              </div>
              <div className="flex items-center gap-3 text-base md:text-lg text-gray-700">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#FDB913] flex items-center justify-center">
                  <Check className="h-4 w-4 text-black font-bold" strokeWidth={3} />
                </div>
                <span className="font-medium">Premium Quality Guaranteed</span>
              </div>
              <div className="flex items-center gap-3 text-base md:text-lg text-gray-700">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#FDB913] flex items-center justify-center">
                  <Check className="h-4 w-4 text-black font-bold" strokeWidth={3} />
                </div>
                <span className="font-medium">Fast Nationwide Delivery</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                asChild
                size="lg"
                className="h-12 md:h-14 px-6 md:px-8 text-base md:text-lg font-bold bg-[#FDB913] text-black hover:bg-[#FDB913]/90 hover:scale-105 transition-all shadow-lg shadow-[#FDB913]/20"
              >
                <Link href="/request-quote">
                  Get Instant Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 md:h-14 px-6 md:px-8 text-base md:text-lg font-semibold border-2 border-black text-black hover:bg-black hover:text-white transition-all"
              >
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 text-sm text-gray-600 mb-10">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-[#FDB913]" />
                <span className="font-medium">1000+ Happy Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-[#FDB913] fill-[#FDB913]" />
                <span className="font-medium">5-Star Rated</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-[#FDB913]" />
                <span className="font-medium">Trusted Since 2020</span>
              </div>
            </div>

            {/* Benefits Icon Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {/* FREE Design Draft */}
              <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center">
                <div className="flex justify-center mb-3">
                  <Palette className="h-8 w-8 text-[#FDB913]" />
                </div>
                <p className="text-xs font-bold text-gray-800 leading-tight">FREE Design Draft</p>
              </div>

              {/* Fast Delivery */}
              <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center">
                <div className="flex justify-center mb-3">
                  <Truck className="h-8 w-8 text-[#FDB913]" />
                </div>
                <p className="text-xs font-bold text-gray-800 leading-tight">Fast Delivery 24-48h</p>
              </div>

              {/* Premium Quality */}
              <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center">
                <div className="flex justify-center mb-3">
                  <ShieldCheck className="h-8 w-8 text-[#FDB913]" />
                </div>
                <p className="text-xs font-bold text-gray-800 leading-tight">Premium Quality</p>
              </div>

              {/* Best Price */}
              <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center">
                <div className="flex justify-center mb-3">
                  <Tag className="h-8 w-8 text-[#FDB913]" />
                </div>
                <p className="text-xs font-bold text-gray-800 leading-tight">Best Price Guarantee</p>
              </div>

              {/* 24/7 Support */}
              <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center">
                <div className="flex justify-center mb-3">
                  <Headset className="h-8 w-8 text-[#FDB913]" />
                </div>
                <p className="text-xs font-bold text-gray-800 leading-tight">24/7 Support</p>
              </div>

              {/* Eco-Friendly */}
              <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center">
                <div className="flex justify-center mb-3">
                  <Leaf className="h-8 w-8 text-[#FDB913]" />
                </div>
                <p className="text-xs font-bold text-gray-800 leading-tight">Eco-Friendly Options</p>
              </div>
            </div>
          </div>

          {/* Right: Hero Image Carousel (40%) */}
          <div className="order-1 lg:order-2 relative">
            <Carousel
              className="w-full"
              opts={{ loop: true }}
              plugins={[
                Autoplay({
                  delay: 4000,
                })
              ]}
            >
              <CarouselContent>
                <CarouselItem>
                  <div className="relative w-full aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src="/Hero1.jpg"
                      alt="Modern printing facility with professional equipment"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FDB913]/10 to-black/10"></div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="relative w-full aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden shadow-2xl">
                    <Image
src="/Hero2.jpg"
                      alt="Team collaboration on printing projects"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FDB913]/10 to-black/10"></div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="relative w-full aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src="/Hero3.jpg"
                      alt="Finished product showcase and samples"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FDB913]/10 to-black/10"></div>
                  </div>
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
