"use client"

import type React from "react"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { TikTokIcon, InstagramIcon, FacebookIcon } from "@/components/social-icons"

const contactInfo = [
  {
    icon: MapPin,
    label: "Locație",
    value: "București, Sector X",
    subvalue: "Strada Lorem Ipsum Nr. 123",
  },
  {
    icon: Phone,
    label: "Telefon",
    value: "+40 7XX XXX XXX",
    subvalue: "Luni - Sâmbătă, 10:00 - 20:00",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contact@dreadurivesele.ro",
    subvalue: "Răspundem în maxim 24h",
  },
  {
    icon: Clock,
    label: "Program",
    value: "Luni - Sâmbătă",
    subvalue: "10:00 - 20:00 (cu programare)",
  },
]

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] rounded-full bg-secondary/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-4 block">Contact</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
            Hai să <span className="gradient-text">Vorbim</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Programează-te pentru o consultație gratuită sau trimite-ne un mesaj cu întrebările tale.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-display text-2xl mb-8">Informații de Contact</h3>

            <div className="space-y-6 mb-10">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <info.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">{info.label}</div>
                    <div className="font-medium text-foreground">{info.value}</div>
                    <div className="text-sm text-muted-foreground">{info.subvalue}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-medium text-foreground mb-4">Urmărește-ne</h4>
              <div className="flex gap-4">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 rounded-2xl bg-card border border-border hover:border-primary/50 hover:bg-primary/10 transition-all"
                >
                  <InstagramIcon className="w-6 h-6 text-foreground" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 rounded-2xl bg-card border border-border hover:border-primary/50 hover:bg-primary/10 transition-all"
                >
                  <TikTokIcon className="w-6 h-6 text-foreground" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 rounded-2xl bg-card border border-border hover:border-primary/50 hover:bg-primary/10 transition-all"
                >
                  <FacebookIcon className="w-6 h-6 text-foreground" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-card border border-border rounded-3xl p-8 md:p-10">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="font-display text-2xl mb-3">Mesaj Trimis!</h3>
                  <p className="text-muted-foreground mb-6">Mulțumim pentru mesaj! Te vom contacta în curând.</p>
                  <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                    Trimite alt mesaj
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Nume</label>
                      <Input
                        type="text"
                        placeholder="Numele tău"
                        required
                        className="bg-background border-border focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Telefon</label>
                      <Input
                        type="tel"
                        placeholder="+40 7XX XXX XXX"
                        required
                        className="bg-background border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                    <Input
                      type="email"
                      placeholder="email@exemplu.ro"
                      required
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Serviciul dorit</label>
                    <select
                      className="w-full h-10 px-3 rounded-md bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground"
                      required
                    >
                      <option value="">Selectează un serviciu</option>
                      <option value="dreaduri-sintetice">Dreaduri Sintetice</option>
                      <option value="dreaduri-naturale">Dreaduri Naturale</option>
                      <option value="cornrows">Cornrows</option>
                      <option value="intretinere">Întreținere</option>
                      <option value="extensii">Extensii Dreaduri</option>
                      <option value="styling">Styling Creativ</option>
                      <option value="consultatie">Doar Consultație</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Mesaj</label>
                    <Textarea
                      placeholder="Spune-ne mai multe despre ce îți dorești..."
                      rows={4}
                      required
                      className="bg-background border-border focus:border-primary resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground py-6 text-lg rounded-xl hover:scale-[1.02] transition-transform"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        Se trimite...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-5 h-5" />
                        Trimite Mesajul
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
