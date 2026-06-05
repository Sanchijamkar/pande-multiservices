"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown, Phone, MapPin } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { languageNames, type Language } from "@/lib/translations"
import { services } from "@/lib/services-data"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const serviceCategories = [
  { id: "csc", label: "CSC Services", labelHi: "CSC सेवाएं", labelMr: "CSC सेवा" },
  { id: "digital", label: "Digital Services", labelHi: "डिजिटल सेवाएं", labelMr: "डिजिटल सेवा" },
  { id: "financial", label: "Financial Services", labelHi: "वित्तीय सेवाएं", labelMr: "आर्थिक सेवा" },
  { id: "online", label: "Online Forms", labelHi: "ऑनलाइन फॉर्म", labelMr: "ऑनलाइन फॉर्म" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/contact", label: t.nav.contact },
  ]

  const getCategoryLabel = (cat: typeof serviceCategories[0]) => {
    if (language === "hi") return cat.labelHi
    if (language === "mr") return cat.labelMr
    return cat.label
  }

  return (
    <>
      {/* Top Bar */}
      <div className="hidden border-b border-border/50 bg-secondary py-2 text-secondary-foreground md:block">
        <div className="container mx-auto flex items-center justify-between px-4 text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+917620269353" className="flex items-center gap-2 transition-colors hover:text-primary-foreground">
              <Phone className="h-4 w-4" />
              <span>+91 7620269353</span>
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Udgir, Maharashtra</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-secondary-foreground/80">Mon - Sat: 9:00 AM - 8:00 PM</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-lg">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_n2ollen2ollen2ol-hcBa1ODyLCXg47juyripaY4fdO73Fv.png"
              alt="Pande Multiservices Logo"
              width={160}
              height={55}
              className="h-11 w-auto md:h-14"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex">
            <Link
              href="/"
              className="rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {t.nav.home}
            </Link>

            {/* Services Mega Menu */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground">
                    {t.nav.services}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[600px] gap-4 p-6 lg:w-[800px] lg:grid-cols-2">
                      {serviceCategories.map((category) => {
                        const categoryServices = services.filter((s) => s.category === category.id)
                        return (
                          <div key={category.id} className="space-y-3">
                            <h4 className="border-b border-border pb-2 text-sm font-semibold text-primary">
                              {getCategoryLabel(category)}
                            </h4>
                            <ul className="space-y-1">
                              {categoryServices.map((service) => (
                                <li key={service.id}>
                                  <NavigationMenuLink asChild>
                                    <Link
                                      href={`/services/${service.id}`}
                                      className="block rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                                    >
                                      {t.serviceItems[service.titleKey as keyof typeof t.serviceItems]}
                                    </Link>
                                  </NavigationMenuLink>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )
                      })}
                      <div className="col-span-2 mt-4 border-t border-border pt-4">
                        <Link
                          href="/services"
                          className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                        >
                          View All Services
                          <ChevronDown className="h-4 w-4 rotate-[-90deg]" />
                        </Link>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link
              href="/about"
              className="rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {t.nav.about}
            </Link>
            <Link
              href="/contact"
              className="rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {t.nav.contact}
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="gap-1 border-primary/30 hover:border-primary">
                  {languageNames[language]}
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {(Object.keys(languageNames) as Language[]).map((lang) => (
                  <DropdownMenuItem
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={language === lang ? "bg-primary/10 text-primary" : ""}
                  >
                    {languageNames[lang]}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* CTA Button - Desktop */}
            <Button asChild className="hidden gap-2 bg-primary hover:bg-primary/90 md:inline-flex">
              <a href="https://wa.me/917620269353" target="_blank" rel="noopener noreferrer">
                <Phone className="h-4 w-4" />
                {t.common.contact}
              </a>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-border/40 bg-background lg:hidden"
            >
              <nav className="container mx-auto flex flex-col px-4 py-4">
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                >
                  {t.nav.home}
                </Link>

                {/* Mobile Services Accordion */}
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                >
                  {t.nav.services}
                  <ChevronDown className={`h-4 w-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden pl-4"
                    >
                      {serviceCategories.map((category) => {
                        const categoryServices = services.filter((s) => s.category === category.id)
                        return (
                          <div key={category.id} className="py-2">
                            <p className="px-4 py-2 text-xs font-semibold uppercase tracking-wide text-primary">
                              {getCategoryLabel(category)}
                            </p>
                            {categoryServices.map((service) => (
                              <Link
                                key={service.id}
                                href={`/services/${service.id}`}
                                onClick={() => setIsOpen(false)}
                                className="block rounded-lg px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                              >
                                {t.serviceItems[service.titleKey as keyof typeof t.serviceItems]}
                              </Link>
                            ))}
                          </div>
                        )
                      })}
                      <Link
                        href="/services"
                        onClick={() => setIsOpen(false)}
                        className="block rounded-lg px-4 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary/10"
                      >
                        View All Services
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>

                <Link
                  href="/about"
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                >
                  {t.nav.about}
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                >
                  {t.nav.contact}
                </Link>

                {/* Mobile CTA */}
                <div className="mt-4 border-t border-border pt-4">
                  <Button asChild className="w-full gap-2">
                    <a href="https://wa.me/917620269353" target="_blank" rel="noopener noreferrer">
                      <Phone className="h-4 w-4" />
                      {t.common.contact}
                    </a>
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
