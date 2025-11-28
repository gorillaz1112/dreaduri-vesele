"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"
import { TikTokIcon, InstagramIcon, FacebookIcon } from "@/components/social-icons"

const footerLinks = [
  {
    title: "Navigare",
    links: [
      { label: "Acasă", href: "#acasa" },
      { label: "Despre", href: "#despre" },
      { label: "Servicii", href: "#servicii" },
      { label: "Galerie", href: "#galerie" },
    ],
  },
  {
    title: "Servicii",
    links: [
      { label: "Dreaduri Sintetice", href: "#servicii" },
      { label: "Dreaduri Naturale", href: "#servicii" },
      { label: "Cornrows", href: "#servicii" },
      { label: "Întreținere", href: "#servicii" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Programări", href: "#contact" },
      { label: "FAQ", href: "#faq" },
      { label: "Testimoniale", href: "#testimoniale" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#acasa" className="font-display text-3xl gradient-text inline-block mb-4">
              Dreaduri Vesele
            </a>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Transformăm părul în artă. Spirit liber, vibes bune și pasiune pentru dreaduri și cornrows în inima
              Bucureștiului.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="p-3 rounded-xl bg-muted hover:bg-primary/20 transition-colors"
              >
                <InstagramIcon className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="p-3 rounded-xl bg-muted hover:bg-primary/20 transition-colors"
              >
                <TikTokIcon className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="p-3 rounded-xl bg-muted hover:bg-primary/20 transition-colors"
              >
                <FacebookIcon className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="font-semibold text-foreground mb-4">{group.title}</h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Dreaduri Vesele. Toate drepturile rezervate.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Făcut cu <Heart className="w-4 h-4 text-accent fill-accent" /> în București
          </p>
        </div>
      </div>
    </footer>
  )
}
