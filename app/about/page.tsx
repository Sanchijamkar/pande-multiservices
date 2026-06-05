"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import {
  Target,
  Eye,
  Award,
  Users,
  Clock,
  Shield,
  CheckCircle2,
  ThumbsUp,
  HeartHandshake,
  Zap,
} from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { Card, CardContent } from "@/components/ui/card"

const stats = [
  { value: "5+", labelKey: "experience", icon: Clock },
  { value: "10K+", labelKey: "customers", icon: Users },
  { value: "50+", labelKey: "servicesCount", icon: Award },
  { value: "100%", labelKey: "trust", icon: Shield },
]

const features = [
  {
    icon: Zap,
    title: { en: "Fast Service", hi: "तेज़ सेवा", mr: "जलद सेवा" },
    desc: {
      en: "Quick processing with minimal waiting time",
      hi: "न्यूनतम प्रतीक्षा समय के साथ तेज़ प्रसंस्करण",
      mr: "किमान प्रतीक्षा वेळेसह जलद प्रक्रिया",
    },
  },
  {
    icon: ThumbsUp,
    title: { en: "Expert Guidance", hi: "विशेषज्ञ मार्गदर्शन", mr: "तज्ञ मार्गदर्शन" },
    desc: {
      en: "Professional help at every step",
      hi: "हर कदम पर पेशेवर मदद",
      mr: "प्रत्येक टप्प्यावर व्यावसायिक मदत",
    },
  },
  {
    icon: HeartHandshake,
    title: { en: "Customer First", hi: "ग्राहक पहले", mr: "ग्राहक प्रथम" },
    desc: {
      en: "Your satisfaction is our priority",
      hi: "आपकी संतुष्टि हमारी प्राथमिकता है",
      mr: "तुमची समाधान आमचे प्राधान्य",
    },
  },
  {
    icon: CheckCircle2,
    title: { en: "Reliable", hi: "विश्वसनीय", mr: "विश्वसनीय" },
    desc: {
      en: "Trusted by thousands of customers",
      hi: "हजारों ग्राहकों द्वारा विश्वसनीय",
      mr: "हजारो ग्राहकांकडून विश्वासार्ह",
    },
  },
]

export default function AboutPage() {
  const { t, language } = useLanguage()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 via-background to-background py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <motion.h1
              className="mb-6 text-balance text-4xl font-bold text-foreground md:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {t.about.title}
            </motion.h1>
            <motion.p
              className="text-lg text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {t.about.subtitle}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              const label = t.about[stat.labelKey as keyof typeof t.about]
              return (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{label}</div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="mb-3 text-2xl font-bold text-foreground">
                    {t.about.mission}
                  </h2>
                  <p className="text-muted-foreground">{t.about.missionText}</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="h-full border-l-4 border-l-secondary">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                    <Eye className="h-6 w-6 text-secondary" />
                  </div>
                  <h2 className="mb-3 text-2xl font-bold text-foreground">
                    {t.about.vision}
                  </h2>
                  <p className="text-muted-foreground">{t.about.visionText}</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="mx-auto mb-12 max-w-2xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              {t.about.whyChoose}
            </h2>
          </motion.div>

          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full text-center">
                    <CardContent className="p-6">
                      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <Icon className="h-7 w-7" />
                      </div>
                      <h3 className="mb-2 font-semibold text-foreground">
                        {feature.title[language]}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.desc[language]}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* About Story */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <motion.div
              className="rounded-2xl bg-card p-8 shadow-sm md:p-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col items-center gap-8 md:flex-row">
                <div className="w-full md:w-1/3">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_n2ollen2ollen2ol-hcBa1ODyLCXg47juyripaY4fdO73Fv.png"
                    alt="Pande Multiservices Logo"
                    width={200}
                    height={200}
                    className="mx-auto"
                  />
                </div>
                <div className="w-full md:w-2/3">
                  <h2 className="mb-4 text-2xl font-bold text-foreground">
                    Pande Multiservices, Udgir
                  </h2>
                  <p className="mb-4 text-muted-foreground">
                    {language === "en" &&
                      "Pande Multiservices is a trusted service center in Udgir, dedicated to providing all government and digital services under one roof. We believe in making government services accessible to every citizen with ease and efficiency."}
                    {language === "hi" &&
                      "पांडे मल्टीसर्विसेज उदगीर में एक विश्वसनीय सेवा केंद्र है, जो एक ही छत के नीचे सभी सरकारी और डिजिटल सेवाएं प्रदान करने के लिए समर्पित है। हम हर नागरिक के लिए सरकारी सेवाओं को आसानी और दक्षता के साथ सुलभ बनाने में विश्वास करते हैं।"}
                    {language === "mr" &&
                      "पांडे मल्टीसर्व्हिसेस हे उदगीरमधील एक विश्वासार्ह सेवा केंद्र आहे, जे एकाच छताखाली सर्व सरकारी आणि डिजिटल सेवा प्रदान करण्यासाठी समर्पित आहे. आम्ही प्रत्येक नागरिकासाठी सरकारी सेवा सहज आणि कार्यक्षमतेने उपलब्ध करून देण्यावर विश्वास ठेवतो."}
                  </p>
                  <p className="text-muted-foreground">
                    {language === "en" &&
                      "With years of experience and a team of dedicated professionals, we have helped thousands of customers with their documentation and service needs. Our commitment to quality and customer satisfaction has made us the preferred choice for government services in Udgir."}
                    {language === "hi" &&
                      "वर्षों के अनुभव और समर्पित पेशेवरों की एक टीम के साथ, हमने हजारों ग्राहकों की उनके दस्तावेज़ीकरण और सेवा आवश्यकताओं में मदद की है। गुणवत्ता और ग्राहक संतुष्टि के प्रति हमारी प्रतिबद्धता ने हमें उदगीर में सरकारी सेवाओं के लिए पसंदीदा विकल्प बना दिया है।"}
                    {language === "mr" &&
                      "वर्षानुवर्षांचा अनुभव आणि समर्पित व्यावसायिकांच्या टीमसह, आम्ही हजारो ग्राहकांना त्यांच्या कागदपत्रे आणि सेवा गरजांमध्ये मदत केली आहे. गुणवत्ता आणि ग्राहक समाधानाप्रती आमची बांधिलकी यामुळे आम्ही उदगीरमध्ये सरकारी सेवांसाठी पसंतीचा पर्याय बनलो आहोत."}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
