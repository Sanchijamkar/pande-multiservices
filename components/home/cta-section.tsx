"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Phone, MapPin, Clock, MessageCircle } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"

export function CTASection() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/csc-center.jpg"
          alt="Pande Multiservices Office"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-secondary/80" />
      </div>

      {/* Animated Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-background/10"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-background/10"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mb-6 inline-block rounded-full bg-background/20 px-6 py-2 text-sm font-medium text-primary-foreground backdrop-blur-sm"
            >
              Ready to Get Started?
            </motion.span>

            <h2 className="mb-6 text-balance text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
              {t.contact.title}
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-primary-foreground/80">
              {t.contact.subtitle}
            </p>

            {/* Contact Info Cards */}
            <div className="mb-10 flex flex-wrap items-center justify-center gap-4 md:gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex items-center gap-3 rounded-xl bg-background/10 px-5 py-3 backdrop-blur-sm"
              >
                <div className="rounded-lg bg-background/20 p-2">
                  <MapPin className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-primary-foreground">Pande Multiservices, Udgir</span>
              </motion.div>

              <motion.a
                href="tel:7620269353"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-3 rounded-xl bg-background/10 px-5 py-3 backdrop-blur-sm transition-colors hover:bg-background/20"
              >
                <div className="rounded-lg bg-background/20 p-2">
                  <Phone className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-primary-foreground">+91 7620269353</span>
              </motion.a>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-3 rounded-xl bg-background/10 px-5 py-3 backdrop-blur-sm"
              >
                <div className="rounded-lg bg-background/20 p-2">
                  <Clock className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-primary-foreground">Mon-Sat: 9AM - 8PM</span>
              </motion.div>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Button
                asChild
                size="lg"
                className="gap-2 bg-background text-primary shadow-xl hover:bg-background/90"
              >
                <Link href="/contact">
                  {t.common.contactUs}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-2 border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <a
                  href="https://wa.me/917620269353"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-4 w-4" />
                  {t.hero.whatsapp}
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
