"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Building2, Monitor, Wallet, Globe, ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const categories = [
  {
    id: "csc",
    icon: Building2,
    image: "/images/csc-center.jpg",
    titleKey: "csc",
    count: "6+ Services",
    gradient: "from-primary to-primary/80",
  },
  {
    id: "digital",
    icon: Monitor,
    image: "/images/services/digital-services.jpg",
    titleKey: "digital",
    count: "4+ Services",
    gradient: "from-secondary to-secondary/80",
  },
  {
    id: "financial",
    icon: Wallet,
    image: "/images/services/financial.jpg",
    titleKey: "financial",
    count: "3+ Services",
    gradient: "from-accent to-accent/80",
  },
  {
    id: "online",
    icon: Globe,
    image: "/images/services/online-forms.jpg",
    titleKey: "online",
    count: "3+ Services",
    gradient: "from-primary to-secondary",
  },
]

export function CategoriesSection() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden bg-muted py-20 md:py-28">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="mx-auto mb-16 max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-4 inline-block rounded-full bg-secondary/10 px-4 py-2 text-sm font-medium text-secondary">
            Service Categories
          </span>
          <h2 className="mb-4 text-balance text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Browse By Category
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore our comprehensive range of services organized for your convenience
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => {
            const Icon = category.icon
            const title = t.services[category.titleKey as keyof typeof t.services]

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/services?category=${category.id}`}>
                  <div className="group relative h-80 overflow-hidden rounded-2xl">
                    {/* Background Image */}
                    <Image
                      src={category.image}
                      alt={typeof title === "string" ? title : ""}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${category.gradient} opacity-80 transition-opacity duration-300 group-hover:opacity-90`} />
                    
                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-primary-foreground">
                      <div className="mb-4 rounded-2xl bg-background/20 p-4 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                        <Icon className="h-10 w-10" />
                      </div>
                      <h3 className="mb-2 text-xl font-bold">{title}</h3>
                      <p className="mb-4 text-sm text-primary-foreground/80">{category.count}</p>
                      <span className="inline-flex items-center gap-2 rounded-full bg-background/20 px-4 py-2 text-sm font-medium backdrop-blur-sm transition-all duration-300 group-hover:bg-background/30 group-hover:gap-4">
                        Explore
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
