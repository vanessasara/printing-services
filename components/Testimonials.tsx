"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    name: "Ahmed Hassan",
    company: "Sunrise Restaurants",
    role: "Owner",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=70",
    text: "Fast Printing transformed our restaurant branding. The custom menus and packaging are exceptional quality, and the turnaround time was incredibly fast. Our customers constantly compliment the professional presentation.",
  },
  {
    name: "Dr. Fatima Khan",
    company: "MediCare Clinic",
    role: "Medical Director",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=70",
    text: "We needed compliant medical labels and brochures urgently. Fast Printing delivered beyond expectations - premium quality materials, perfect color matching, and they understood our regulatory requirements perfectly.",
  },
  {
    name: "Sarah Malik",
    company: "BrightMinds School",
    role: "Principal",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=70",
    text: "Working with Fast Printing for our school materials has been wonderful. They created custom notebooks, ID cards, and certificates that the students love. The bulk pricing and quality are unbeatable.",
  },
  {
    name: "Hamza Ali",
    company: "TechVenture Startup",
    role: "Founder & CEO",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=70",
    text: "As a startup, we needed professional branding on a budget. Fast Printing provided excellent design support and delivered premium business cards and packaging that made us look established. Highly recommended!",
  },
  {
    name: "Ayesha Raza",
    company: "Luxe Cosmetics",
    role: "Brand Manager",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=70",
    text: "The custom packaging for our cosmetic line exceeded all expectations. The attention to detail, eco-friendly materials, and stunning finishes have significantly elevated our brand perception. Worth every rupee!",
  },
  {
    name: "Bilal Ahmed",
    company: "Pakistan Traders Association",
    role: "Secretary",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=70",
    text: "Fast Printing has been our go-to for all corporate events and promotional materials. Reliable, professional, and always deliver on time. The quality consistency across thousands of prints is remarkable.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Trusted by hundreds of businesses across Pakistan for quality, reliability, and exceptional service
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-muted-foreground mb-6 flex-1 leading-relaxed">
                      "{testimonial.text}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={testimonial.image} alt={testimonial.name} />
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          {testimonial.name.split(" ").map(n => n[0]).join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
}
