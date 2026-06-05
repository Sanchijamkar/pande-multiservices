"use client"

import { useParams, notFound } from "next/navigation"
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
  ArrowLeft,
  CheckCircle2,
  FileQuestion,
  MessageCircle,
  Phone,
  Clock,
  MapPin,
} from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { getServiceById, services } from "@/lib/services-data"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

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

export default function ServiceDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const service = getServiceById(slug)
  const { t } = useLanguage()

  if (!service) {
    notFound()
  }

  const Icon = iconMap[service.icon] || FileText
  const title = t.serviceItems[service.titleKey as keyof typeof t.serviceItems]
  const desc = t.serviceItems[service.descKey as keyof typeof t.serviceItems]
  const categoryImage = categoryImages[service.category] || "/images/csc-center.jpg"
  const categoryColor = categoryColors[service.category] || "from-primary/90"

  // Related services
  const relatedServices = services
    .filter((s) => s.category === service.category && s.id !== service.id)
    .slice(0, 3)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={categoryImage}
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className={`absolute inset-0 bg-gradient-to-r ${categoryColor} to-foreground/80`} />
        </div>

        <div className="container relative mx-auto px-4 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Button
              asChild
              variant="ghost"
              className="mb-8 gap-2 text-primary-foreground hover:bg-background/20 hover:text-primary-foreground"
            >
              <Link href="/services">
                <ArrowLeft className="h-4 w-4" />
                Back to Services
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-background shadow-xl">
                <Icon className="h-10 w-10 text-primary" />
              </div>
              <span className="rounded-full bg-background/20 px-4 py-2 text-sm font-medium text-primary-foreground backdrop-blur-sm">
                {t.services[service.category as keyof typeof t.services]}
              </span>
            </div>
            <h1 className="mb-4 text-4xl font-bold text-primary-foreground md:text-5xl">
              {title}
            </h1>
            <p className="text-lg text-primary-foreground/80">{desc}</p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main Content */}
            <div className="space-y-8 lg:col-span-2">
              {/* Required Documents */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card className="overflow-hidden border-0 shadow-lg">
                  <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10">
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                        <FileText className="h-5 w-5" />
                      </div>
                      {t.services.requiredDocs}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ul className="grid gap-3 sm:grid-cols-2">
                      {service.requiredDocs.map((doc, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + index * 0.05 }}
                          className="flex items-start gap-3 rounded-lg bg-muted/50 p-3"
                        >
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                          <span className="text-sm text-muted-foreground">{doc}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Process Steps */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="overflow-hidden border-0 shadow-lg">
                  <CardHeader className="bg-gradient-to-r from-secondary/10 to-accent/10">
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                      {t.services.process}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ol className="relative border-l-2 border-primary/20 pl-6">
                      {service.processSteps.map((step, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + index * 0.05 }}
                          className="relative pb-6 last:pb-0"
                        >
                          <span className="absolute -left-[31px] flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                            {index + 1}
                          </span>
                          <p className="pt-1 text-muted-foreground">{step}</p>
                        </motion.li>
                      ))}
                    </ol>
                  </CardContent>
                </Card>
              </motion.div>

              {/* FAQ */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Card className="overflow-hidden border-0 shadow-lg">
                  <CardHeader className="bg-gradient-to-r from-accent/10 to-primary/10">
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                        <FileQuestion className="h-5 w-5" />
                      </div>
                      {t.services.faq}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <Accordion type="single" collapsible className="w-full">
                      {service.faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`faq-${index}`} className="border-border/50">
                          <AccordionTrigger className="text-left hover:text-primary">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                className="sticky top-28 space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {/* Apply Card */}
                <Card className="overflow-hidden border-0 bg-gradient-to-br from-primary to-secondary text-primary-foreground shadow-xl">
                  <CardContent className="p-6">
                    <div className="mb-4 text-center">
                      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-background/20">
                        <Icon className="h-8 w-8" />
                      </div>
                      <h3 className="text-xl font-bold">{t.services.applyNow}</h3>
                      <p className="mt-2 text-sm text-primary-foreground/80">
                        Get started with your application today
                      </p>
                    </div>

                    <Button
                      asChild
                      className="w-full gap-2 bg-background text-foreground hover:bg-background/90"
                      size="lg"
                    >
                      <a
                        href={`https://wa.me/917620269353?text=Hi, I want to apply for ${title}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="h-5 w-5" />
                        Chat on WhatsApp
                      </a>
                    </Button>

                    <div className="mt-6 space-y-3 border-t border-primary-foreground/20 pt-6">
                      <div className="flex items-center gap-3 text-sm">
                        <Phone className="h-4 w-4" />
                        <a href="tel:7620269353" className="hover:underline">+91 7620269353</a>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Clock className="h-4 w-4" />
                        <span>Mon-Sat: 9AM - 8PM</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <MapPin className="h-4 w-4" />
                        <span>Pande Multiservices, Udgir</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Related Services */}
                {relatedServices.length > 0 && (
                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-lg">Related Services</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {relatedServices.map((relatedService) => {
                        const RelatedIcon = iconMap[relatedService.icon] || FileText
                        const relatedTitle =
                          t.serviceItems[relatedService.titleKey as keyof typeof t.serviceItems]
                        return (
                          <Link
                            key={relatedService.id}
                            href={`/services/${relatedService.id}`}
                            className="flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-muted"
                          >
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                              <RelatedIcon className="h-5 w-5 text-primary" />
                            </div>
                            <span className="font-medium text-foreground">{relatedTitle}</span>
                          </Link>
                        )
                      })}
                    </CardContent>
                  </Card>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border bg-muted py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
            Need Help with {title}?
          </h2>
          <p className="mb-8 text-muted-foreground">
            Our team is ready to assist you with your application
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" className="gap-2">
              <a
                href={`https://wa.me/917620269353?text=Hi, I need help with ${title}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <a href="tel:7620269353">
                <Phone className="h-5 w-5" />
                Call Now
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
