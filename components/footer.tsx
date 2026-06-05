"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { MapPin, Phone, MessageCircle, Clock, Mail, Facebook, Instagram, Twitter } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const quickLinks = [
  { href: "/", labelKey: "home" },
  { href: "/services", labelKey: "services" },
  { href: "/about", labelKey: "about" },
  { href: "/contact", labelKey: "contact" },
]

const serviceLinks = [
  { href: "/services/pan-card", labelKey: "panCard" },
  { href: "/services/aadhaar-services", labelKey: "aadhaar" },
  { href: "/services/voter-id", labelKey: "voterId" },
  { href: "/services/income-certificate", labelKey: "incomeCert" },
  { href: "/services/caste-certificate", labelKey: "casteCert" },
  { href: "/services/money-transfer", labelKey: "moneyTransfer" },
]

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="relative overflow-hidden border-t border-border bg-foreground text-background">
      {/* Decorative Elements */}
      <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />

      <div className="container relative mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_n2ollen2ollen2ol-hcBa1ODyLCXg47juyripaY4fdO73Fv.png"
              alt="Pande Multiservices Logo"
              width={160}
              height={55}
              className="h-14 w-auto brightness-0 invert"
            />
            <p className="text-sm text-background/70 leading-relaxed">{t.footer.description}</p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-background/10 text-background transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-background/10 text-background transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-background/10 text-background transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="mb-6 text-lg font-bold text-background">{t.footer.quickLinks}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 transition-colors hover:text-primary"
                  >
                    {t.nav[link.labelKey as keyof typeof t.nav]}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="mb-6 text-lg font-bold text-background">{t.footer.ourServices}</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 transition-colors hover:text-primary"
                  >
                    {t.serviceItems[link.labelKey as keyof typeof t.serviceItems]}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="mb-6 text-lg font-bold text-background">{t.footer.contactInfo}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/20">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-background">Address</p>
                  <p className="text-sm text-background/70">Pande Multiservices, Udgir, Maharashtra</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/20">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-background">Phone</p>
                  <a href="tel:7620269353" className="text-sm text-background/70 hover:text-primary">
                    +91 7620269353
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/20">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-background">Working Hours</p>
                  <p className="text-sm text-background/70">Mon - Sat: 9AM - 8PM</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/20">
                  <MessageCircle className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-background">WhatsApp</p>
                  <a
                    href="https://wa.me/917620269353"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-background/70 hover:text-primary"
                  >
                    Chat with us
                  </a>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-background/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-background/60">
              &copy; {new Date().getFullYear()} Pande Multiservices. {t.footer.rights}
            </p>
            <div className="flex gap-6 text-sm text-background/60">
              <Link href="#" className="hover:text-primary">Privacy Policy</Link>
              <Link href="#" className="hover:text-primary">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
