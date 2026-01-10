import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import WhyChooseUs from "@/components/WhyChooseUs";
import StatsCounter from "@/components/StatsCounter";
import FeaturedPortfolio from "@/components/FeaturedPortfolio";
import IndustriesWeServe from "@/components/IndustriesWeServe";
import ProcessSection from "@/components/ProcessSection";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <WhyChooseUs />
      <StatsCounter />
      <FeaturedPortfolio />
      <IndustriesWeServe />
      <ProcessSection />
      <Testimonials />
      <CTASection />
    </>
  );
}
