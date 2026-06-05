"use client"

import { Suspense, useMemo, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import {
  CreditCard,
  Fingerprint,
  Vote,
  FileText,
  Users,
  Home,
  FormInput,
  FileUser,
  Printer,
  Mail,
  ArrowLeftRight,
  Receipt,
  Shield,
  Building,
  GraduationCap,
  FileCheck,
  Building2,
  Landmark,
  Monitor,
  Wallet,
  Globe,
  ArrowRight,
  Search,
} from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { services, serviceCategories, getServicesByCategory } from "@/lib/services-data"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  CreditCard,
  Fingerprint,
  Vote,
  FileText,
  Users,
  Home,
  FormInput,
  FileUser,
  Printer,
  Mail,
  ArrowLeftRight,
  Receipt,
  Shield,
  Building,
  GraduationCap,
  FileCheck,
  Building2,
  Landmark,
  Monitor,
  Wallet,
  Globe,
}

const categoryIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2,
  Landmark,
  Monitor,
  Wallet,
  Globe,
}

const categoryImages: Record<string, string> = {
  csc: "/images/csc-center.jpg",
  digital: "/images/services/digital-services.jpg",
  financial: "/images/services/financial.jpg",
  online: "/images/services/online-forms.jpg",
  government: "/images/services/certificates.jpg",
}

const categoryColors: Record<string, string> = {
  csc: "from-primary/90",
  digital: "from-secondary/90",
  financial: "from-accent/90",
  online: "from-primary/90",
  government: "from-secondary/90",
}

export default function ServicesPage() {
  return (
    <Suspense fallback={<ServicesPageFallback />}>
      <ServicesPageContent />
    </Suspense>
  )
}

function ServicesPageContent() {
  const searchParams = useSearchParams()
  const initialCategory = searchParams.get("category") || "all"
  const [activeCategory, setActiveCategory] = useState(initialCategory)
  const [searchQuery, setSearchQuery] = useState("")
  const { t } = useLanguage()

  const filteredServices = useMemo(() => {
    let result = activeCategory === "all" ? services : getServicesByCategory(activeCategory)
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter((service) => {
        const title = t.serviceItems[service.titleKey as keyof typeof t.serviceItems]?.toLowerCase() || ""
        const desc = t.serviceItems[service.descKey as keyof typeof t.serviceItems]?.toLowerCase() || ""
        return title.includes(query) || desc.includes(query)
      })
    }
    
    return result
  }, [activeCategory, searchQuery, t.serviceItems])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-secondary py-16 md:py-24">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/csc-center.jpg"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="container relative mx-auto px-4">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="mb-4 inline-block rounded-full bg-background/20 px-4 py-2 text-sm font-medium text-primary-foreground backdrop-blur-sm">
              50+ Services Available
            </span>
            <h1 className="mb-6 text-balance text-4xl font-bold text-primary-foreground md:text-5xl lg:text-6xl">
              {t.services.title}
            </h1>
            <p className="mb-8 text-lg text-primary-foreground/80">
              {t.services.subtitle}
            </p>

            {/* Search Bar */}
            <div className="relative mx-auto max-w-md">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-14 rounded-full border-0 bg-background pl-12 pr-4 text-foreground shadow-xl placeholder:text-muted-foreground"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="sticky top-[72px] z-40 border-b border-border bg-background/95 py-4 backdrop-blur-lg md:top-[104px]">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setActiveCategory("all")}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                activeCategory === "all"
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              All Services
            </button>
            {serviceCategories.map((category) => {
              const Icon = categoryIconMap[category.icon] || Building2
              const label = t.services[category.labelKey as keyof typeof t.services]
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                    activeCategory === category.id
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{label}</span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          {filteredServices.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-lg text-muted-foreground">No services found matching your search.</p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredServices.map((service, index) => {
                const Icon = iconMap[service.icon] || FileText
                const title = t.serviceItems[service.titleKey as keyof typeof t.serviceItems]
                const desc = t.serviceItems[service.descKey as keyof typeof t.serviceItems]
                const categoryImage = categoryImages[service.category] || "/images/csc-center.jpg"
                const categoryColor = categoryColors[service.category] || "from-primary/90"

                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <Link href={`/services/${service.id}`}>
                      <Card className="group h-full cursor-pointer overflow-hidden border-0 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                        {/* Image Header */}
                        <div className="relative h-40 overflow-hidden">
                          <Image
                            src={categoryImage}
                            alt={title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className={`absolute inset-0 bg-gradient-to-t ${categoryColor} to-transparent`} />
                          
                          {/* Icon Badge */}
                          <div className="absolute right-4 top-4 rounded-xl bg-background p-3 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>

                          {/* Category Tag */}
                          <div className="absolute bottom-4 left-4">
                            <span className="rounded-full bg-background/20 px-3 py-1 text-xs font-medium text-primary-foreground backdrop-blur-sm">
                              {t.services[service.category as keyof typeof t.services]}
                            </span>
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
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-muted py-16 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
              Need Help Choosing a Service?
            </h2>
            <p className="mb-8 text-muted-foreground">
              Contact us on WhatsApp and we will guide you through the right service for your needs.
            </p>
            <Button asChild size="lg" className="gap-2 px-8">
              <a
                href="https://wa.me/917620269353"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.hero.whatsapp}
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

function ServicesPageFallback() {
  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-secondary py-16 md:py-24">
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-4 h-9 w-40 rounded-full bg-background/20" />
            <div className="mx-auto mb-6 h-14 max-w-xl rounded-xl bg-background/20" />
            <div className="mx-auto mb-8 h-7 max-w-lg rounded-lg bg-background/20" />
            <div className="mx-auto h-14 max-w-md rounded-full bg-background" />
          </div>
        </div>
      </section>
    </div>
  )
}
