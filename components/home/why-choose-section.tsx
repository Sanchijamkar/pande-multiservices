"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Shield, Clock, Users, Award, CheckCircle2 } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const features = [
  {
    icon: Shield,
    titleKey: "certified",
    descKey: "certifiedDesc",
    color: "bg-primary",
  },
  {
    icon: Clock,
    titleKey: "fast",
    descKey: "fastDesc",
    color: "bg-secondary",
  },
  {
    icon: Users,
    titleKey: "expert",
    descKey: "expertDesc",
    color: "bg-accent",
  },
  {
    icon: Award,
    titleKey: "trusted",
    descKey: "trustedDesc",
    color: "bg-primary",
  },
]

const benefits = [
  "Government Certified CSC Center",
  "All Services Under One Roof",
  "Transparent Pricing",
  "Quick Document Processing",
  "Expert Guidance & Support",
  "Secure & Confidential",
]

export function WhyChooseSection() {
  const { t } = useLanguage()

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              Why Choose Us
            </span>
            <h2 className="mb-6 text-balance text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              {t.about.whyChooseTitle}
            </h2>
            <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
              {t.about.whyChooseDesc}
            </p>

            {/* Feature Grid */}
            <div className="mb-8 grid gap-6 sm:grid-cols-2">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group flex gap-4"
                  >
                    <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl ${feature.color} text-primary-foreground shadow-lg transition-transform group-hover:scale-110`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-bold text-foreground">
                        {t.about[feature.titleKey as keyof typeof t.about]}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {t.about[feature.descKey as keyof typeof t.about]}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Benefits List */}
            <div className="grid gap-3 sm:grid-cols-2">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  className="flex items-center gap-2 text-muted-foreground"
                >
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-accent" />
                  <span className="text-sm">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative aspect-square overflow-hidden rounded-3xl lg:aspect-[4/5]">
              <Image
                src="/images/about-team.jpg"
                alt="Pande Multiservices Team"
                fill
                className="object-cover"
              />
              {/* Overlay Card */}
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-background/95 p-6 shadow-2xl backdrop-blur-sm">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <span className="text-2xl font-bold">5+</span>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">Years of Trust</p>
                    <p className="text-muted-foreground">Serving Udgir Community</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-2xl bg-primary/20" />
            <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-2xl bg-secondary/20" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
