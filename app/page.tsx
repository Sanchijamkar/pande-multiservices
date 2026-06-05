"use client"

import { HeroSection } from "@/components/home/hero-section"
import { ServicesSection } from "@/components/home/services-section"
import { CategoriesSection } from "@/components/home/categories-section"
import { WhyChooseSection } from "@/components/home/why-choose-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <CategoriesSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
