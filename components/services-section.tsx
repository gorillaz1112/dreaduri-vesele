"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Clock, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

const services = [
  {
    id: 1,
    title: "Dreaduri Sintetice",
    description:
      "Dreaduri realizate din materiale sintetice de înaltă calitate. Perfecte pentru cei care vor un look dramatic fără commitment pe termen lung.",
    duration: "4-6 ore",
    price: "de la 350 RON",
    image: "/synthetic-dreadlocks-hairstyle-colorful-profession.jpg",
  },
  {
    id: 2,
    title: "Dreaduri Naturale",
    description:
      "Dreaduri create din părul tău natural. Procesul necesită răbdare, dar rezultatul este autentic și durabil pentru mulți ani.",
    duration: "6-10 ore",
    price: "de la 500 RON",
    image: "/natural-dreadlocks-african-hairstyle-professional.jpg",
  },
  {
    id: 3,
    title: "Cornrows",
    description:
      "Împletituri tradiționale africane, realizate cu precizie și atenție. Ideale pentru un look elegant sau ca bază pentru extensii.",
    duration: "2-4 ore",
    price: "de la 200 RON",
    image: "/cornrows-braids-african-hairstyle-professional.jpg",
  },
  {
    id: 4,
    title: "Întreținere Dreaduri",
    description:
      "Serviciu de întreținere pentru dreadurile existente. Include re-twist, reparații și tratamente pentru un look proaspăt.",
    duration: "2-3 ore",
    price: "de la 150 RON",
    image: "/dreadlock-maintenance-retwist-professional.jpg",
  },
  {
    id: 5,
    title: "Extensii Dreaduri",
    description:
      "Adaugă lungime și volum dreadurilor tale cu extensii de calitate premium. Disponibile în multiple culori și texturi.",
    duration: "3-5 ore",
    price: "de la 400 RON",
    image: "/dreadlock-extensions-colorful-long-professional.jpg",
  },
  {
    id: 6,
    title: "Styling Creativ",
    description:
      "Serviciu de styling pentru ocazii speciale. Coafuri elaborate, accesorii și decorațiuni pentru un look unic.",
    duration: "1-2 ore",
    price: "de la 100 RON",
    image: "/creative-dreadlock-styling-accessories-wedding.jpg",
  },
]

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="servicii" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-4 block">Ce Oferim</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
            Serviciile <span className="gradient-text">Noastre</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            De la dreaduri clasice la stiluri creative, avem tot ce ai nevoie pentru transformarea ta capilară.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={cn(
                "group relative rounded-3xl overflow-hidden bg-card border border-border transition-all duration-500",
                hoveredId === service.id && "scale-[1.02] border-primary/50 glow",
              )}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-2xl mb-3 text-foreground group-hover:gradient-text transition-all">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{service.description}</p>

                {/* Meta info */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{service.duration}</span>
                  </div>
                  <div className="font-semibold text-primary">{service.price}</div>
                </div>

                {/* Hover CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: hoveredId === service.id ? 1 : 0, y: hoveredId === service.id ? 0 : 10 }}
                  className="mt-4"
                >
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                  >
                    Programează-te
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
