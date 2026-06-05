"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  CreditCard,
  Fingerprint,
  Vote,
  FileText,
  Users,
  Home,
  ArrowRight,
  Printer,
  ArrowLeftRight,
  GraduationCap,
} from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  CreditCard,
  Fingerprint,
  Vote,
  FileText,
  Users,
  Home,
  Printer,
  ArrowLeftRight,
  GraduationCap,
}

const featuredServices = [
  {
    id: "pan-card",
    titleKey: "panCard",
    descKey: "panCardDesc",
    icon: "CreditCard",
    image: "/images/services/pan-card.jpg",
    color: "from-primary/20 to-primary/5",
  },
  {
    id: "aadhaar-services",
    titleKey: "aadhaar",
    descKey: "aadhaarDesc",
    icon: "Fingerprint",
    image: "/images/services/aadhaar.jpg",
    color: "from-secondary/20 to-secondary/5",
  },
  {
    id: "voter-id",
    titleKey: "voterId",
    descKey: "voterIdDesc",
    icon: "Vote",
    image: "/images/services/certificates.jpg",
    color: "from-accent/20 to-accent/5",
  },
  {
    id: "income-certificate",
    titleKey: "incomeCert",
    descKey: "incomeCertDesc",
    icon: "FileText",
    image: "/images/services/certificates.jpg",
    color: "from-primary/20 to-primary/5",
  },
  {
    id: "printing-scanning",
    titleKey: "printing",
    descKey: "printingDesc",
    icon: "Printer",
    image: "/images/services/digital-services.jpg",
    color: "from-secondary/20 to-secondary/5",
  },
  {
    id: "money-transfer",
    titleKey: "moneyTransfer",
    descKey: "moneyTransferDesc",
    icon: "ArrowLeftRight",
    image: "/images/services/financial.jpg",
    color: "from-accent/20 to-accent/5",
  },
]

export function ServicesSection() {
  const { t } = useLanguage()

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="mx-auto mb-16 max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            Our Services
          </span>
          <h2 className="mb-4 text-balance text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            {t.services.title}
          </h2>
          <p className="text-lg text-muted-foreground">{t.services.subtitle}</p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((service, index) => {
            const Icon = iconMap[service.icon] || FileText
            const title = t.serviceItems[service.titleKey as keyof typeof t.serviceItems]
            const desc = t.serviceItems[service.descKey as keyof typeof t.serviceItems]

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/services/${service.id}`}>
                  <Card className="group h-full cursor-pointer overflow-hidden border-0 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${service.color}`} />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                      
                      {/* Icon Badge */}
                      <div className="absolute right-4 top-4 rounded-xl bg-background p-3 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <h3 className="mb-2 text-lg font-bold text-foreground transition-colors group-hover:text-primary">
                        {title}
                      </h3>
                      <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">{desc}</p>
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                        {t.common.learnMore}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* View All Button */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button asChild size="lg" className="gap-2 px-8">
            <Link href="/services">
              {t.services.viewAll}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
