"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Rajesh Patil",
    location: "Udgir",
    avatar: "/images/csc-center.jpg",
    rating: 5,
    text: {
      en: "Excellent service! Got my PAN card done in just 2 weeks. Very professional and helpful staff. They made the entire process smooth and hassle-free.",
      hi: "उत्कृष्ट सेवा! मेरा पैन कार्ड सिर्फ 2 सप्ताह में बन गया। बहुत पेशेवर और मददगार स्टाफ। उन्होंने पूरी प्रक्रिया को आसान बना दिया।",
      mr: "उत्कृष्ट सेवा! माझे पॅन कार्ड फक्त 2 आठवड्यात तयार झाले. अतिशय व्यावसायिक आणि मदत करणारे कर्मचारी.",
    },
  },
  {
    name: "Sunita Jadhav",
    location: "Udgir",
    avatar: "/images/about-team.jpg",
    rating: 5,
    text: {
      en: "Very helpful in getting all my certificates done. They guided me through every step of the process. I highly recommend their services to everyone.",
      hi: "मेरे सभी प्रमाणपत्र बनवाने में बहुत मददगार। उन्होंने प्रक्रिया के हर चरण में मेरा मार्गदर्शन किया। मैं सभी को उनकी सेवाओं की सिफारिश करता हूं।",
      mr: "माझी सर्व प्रमाणपत्रे बनवण्यात खूप मदत झाली. त्यांनी प्रत्येक चरणात माझे मार्गदर्शन केले.",
    },
  },
  {
    name: "Amit Kulkarni",
    location: "Udgir",
    avatar: "/images/services/aadhaar.jpg",
    rating: 5,
    text: {
      en: "Fast and reliable service for Aadhaar updates. No long queues like government offices. Highly recommended! The staff is very knowledgeable.",
      hi: "आधार अपडेट के लिए तेज और विश्वसनीय सेवा। सरकारी कार्यालयों की तरह लंबी कतारें नहीं। अत्यधिक अनुशंसित!",
      mr: "आधार अपडेटसाठी जलद आणि विश्वसनीय सेवा. सरकारी कार्यालयांप्रमाणे लांब रांगा नाहीत. अत्यंत शिफारसीय!",
    },
  },
  {
    name: "Priya Deshmukh",
    location: "Udgir",
    avatar: "/images/services/certificates.jpg",
    rating: 5,
    text: {
      en: "Got my income and caste certificates done quickly. The team is very patient and explains everything clearly. Best service center in Udgir!",
      hi: "मेरे आय और जाति प्रमाणपत्र जल्दी बन गए। टीम बहुत धैर्यवान है और सब कुछ स्पष्ट रूप से समझाती है।",
      mr: "माझी उत्पन्न आणि जात प्रमाणपत्रे त्वरित तयार झाली. संघ खूप संयमी आहे आणि सर्वकाही स्पष्टपणे समजावून सांगतो.",
    },
  },
]

export function TestimonialsSection() {
  const { t, language } = useLanguage()
  const [currentSlide, setCurrentSlide] = useState(0)

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  )

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on("select", () => setCurrentSlide(emblaApi.selectedScrollSnap()))
  }, [emblaApi])

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />

      <div className="container relative mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="mx-auto mb-16 max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-4 inline-block rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
            Testimonials
          </span>
          <h2 className="mb-4 text-balance text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            {t.testimonials.title}
          </h2>
          <p className="text-lg text-muted-foreground">{t.testimonials.subtitle}</p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="embla overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="embla__slide min-w-0 flex-[0_0_100%] px-3 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                >
                  <Card className="h-full border-0 bg-card shadow-xl">
                    <CardContent className="flex h-full flex-col p-8">
                      {/* Quote Icon */}
                      <div className="mb-6">
                        <Quote className="h-10 w-10 text-primary/20" />
                      </div>

                      {/* Rating */}
                      <div className="mb-4 flex gap-1">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star
                            key={i}
                            className="h-5 w-5 fill-primary text-primary"
                          />
                        ))}
                      </div>

                      {/* Text */}
                      <p className="mb-6 flex-1 text-muted-foreground leading-relaxed">
                        {testimonial.text[language]}
                      </p>

                      {/* Author */}
                      <div className="flex items-center gap-4">
                        <div className="relative h-14 w-14 overflow-hidden rounded-full">
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <div className="font-bold text-foreground">
                            {testimonial.name}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {testimonial.location}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={scrollPrev}
              className="rounded-full border border-border bg-background p-3 text-foreground transition-colors hover:bg-muted"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={`h-2.5 w-2.5 rounded-full transition-all ${
                    currentSlide === index
                      ? "w-8 bg-primary"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={scrollNext}
              className="rounded-full border border-border bg-background p-3 text-foreground transition-colors hover:bg-muted"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
