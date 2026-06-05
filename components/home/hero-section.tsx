"use client"

import { useCallback, useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { ArrowRight, MessageCircle, ChevronLeft, ChevronRight, CheckCircle2, Play } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"

const heroSlides = [
  {
    image: "/images/hero-bg.jpg",
    titleKey: "title",
    subtitleKey: "subtitle",
  },
  {
    image: "/images/csc-center.jpg",
    titleKey: "cscTitle",
    subtitleKey: "cscSubtitle",
  },
  {
    image: "/images/services/digital-services.jpg",
    titleKey: "digitalTitle",
    subtitleKey: "digitalSubtitle",
  },
]

const features = [
  "Government Certified",
  "50+ Services",
  "Quick Service",
  "Expert Team",
]

export function HeroSection() {
  const { t } = useLanguage()
  const [currentSlide, setCurrentSlide] = useState(0)

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ])

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on("select", () => setCurrentSlide(emblaApi.selectedScrollSnap()))
  }, [emblaApi])

  const heroTexts: Record<string, { title: string; subtitle: string }> = {
    title: { title: t.hero.title, subtitle: t.hero.subtitle },
    cscTitle: {
      title: "Your Trusted CSC Partner",
      subtitle: "Complete government services at your doorstep",
    },
    digitalTitle: {
      title: "Digital Services Made Easy",
      subtitle: "From online forms to document services - we handle it all",
    },
  }

  return (
    <section className="relative overflow-hidden">
      {/* Hero Carousel - Resized to proper height */}
      <div className="embla relative h-[400px] md:h-[480px] lg:h-[520px]" ref={emblaRef}>
        <div className="embla__container h-full">
          {heroSlides.map((slide, index) => (
            <div key={index} className="embla__slide relative h-full">
              {/* Background Image with Overlay */}
              <div className="absolute inset-0">
                <Image
                  src={slide.image}
                  alt=""
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/50" />
                {/* Decorative Pattern */}
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
              </div>

              {/* Content */}
              <div className="container relative mx-auto flex h-full items-center px-4">
                <AnimatePresence mode="wait">
                  {currentSlide === index && (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4 }}
                      className="max-w-xl"
                    >
                      <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/90 px-3 py-1.5 text-xs font-medium text-primary-foreground"
                      >
                        <Play className="h-3 w-3 fill-current" />
                        Pande Multiservices, Udgir
                      </motion.span>

                      <motion.h1
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mb-4 text-balance text-2xl font-bold leading-tight text-background sm:text-3xl md:text-4xl lg:text-5xl"
                      >
                        {heroTexts[slide.titleKey]?.title || t.hero.title}
                      </motion.h1>

                      <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="mb-6 text-pretty text-sm text-background/80 sm:text-base md:text-lg"
                      >
                        {heroTexts[slide.titleKey]?.subtitle || t.hero.subtitle}
                      </motion.p>

                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col gap-3 sm:flex-row"
                      >
                        <Button asChild size="lg" className="gap-2 bg-primary text-primary-foreground shadow-lg hover:bg-primary/90">
                          <Link href="/services">
                            {t.hero.cta}
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </Button>
                        <Button
                          asChild
                          size="lg"
                          variant="outline"
                          className="gap-2 border-background/30 bg-background/10 text-background backdrop-blur-sm hover:bg-background/20 hover:text-background"
                        >
                          <a href="https://wa.me/917620269353" target="_blank" rel="noopener noreferrer">
                            <MessageCircle className="h-4 w-4" />
                            {t.hero.whatsapp}
                          </a>
                        </Button>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={scrollPrev}
          className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/20 p-2 text-background backdrop-blur-sm transition-all hover:bg-background/40 md:left-4 md:p-3"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/20 p-2 text-background backdrop-blur-sm transition-all hover:bg-background/40 md:right-4 md:p-3"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`h-2 rounded-full transition-all ${
                currentSlide === index
                  ? "w-6 bg-primary"
                  : "w-2 bg-background/50 hover:bg-background/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Features Bar */}
      <div className="bg-gradient-to-r from-secondary via-secondary to-secondary/90 py-3">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="flex items-center gap-1.5 text-xs text-secondary-foreground sm:text-sm"
              >
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-b from-muted/50 to-background py-10 md:py-14">
        <div className="container mx-auto px-4">
          <motion.div
            className="mx-auto grid max-w-4xl grid-cols-2 gap-6 md:grid-cols-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            {[
              { value: "5+", label: t.about.experience, color: "text-primary" },
              { value: "10K+", label: t.about.customers, color: "text-secondary" },
              { value: "50+", label: t.about.servicesCount, color: "text-accent" },
              { value: "100%", label: t.about.trust, color: "text-primary" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="group text-center"
              >
                <div className={`text-3xl font-bold ${stat.color} md:text-4xl transition-transform group-hover:scale-110`}>
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-muted-foreground sm:text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
