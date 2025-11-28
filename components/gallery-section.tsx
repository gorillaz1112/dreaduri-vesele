"use client"

import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const galleryImages = [
  { id: 1, src: "/beautiful-dreadlocks-woman-portrait-artistic.jpg", alt: "Dreaduri artistice", category: "dreaduri" },
  { id: 2, src: "/cornrows-braids-man-professional-portrait.jpg", alt: "Cornrows elegante", category: "cornrows" },
  { id: 3, src: "/colorful-synthetic-dreadlocks-rainbow.jpg", alt: "Dreaduri colorate", category: "dreaduri" },
  { id: 4, src: "/natural-dreadlocks-long-hair-woman-boho.jpg", alt: "Dreaduri naturale lungi", category: "dreaduri" },
  { id: 5, src: "/intricate-cornrows-pattern-artistic.jpg", alt: "Pattern cornrows complex", category: "cornrows" },
  { id: 6, src: "/dreadlocks-with-accessories-beads-shells.jpg", alt: "Dreaduri cu accesorii", category: "styling" },
  { id: 7, src: "/blonde-dreadlocks-woman-artistic-portrait.jpg", alt: "Dreaduri blonde", category: "dreaduri" },
  { id: 8, src: "/half-cornrows-half-loose-hair-style.jpg", alt: "Stil mixt cornrows", category: "cornrows" },
]

export function GallerySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [filter, setFilter] = useState<string>("toate")

  const filteredImages = filter === "toate" ? galleryImages : galleryImages.filter((img) => img.category === filter)

  const currentIndex = selectedImage !== null ? filteredImages.findIndex((img) => img.id === selectedImage) : -1

  const navigateGallery = (direction: "prev" | "next") => {
    if (currentIndex === -1) return
    const newIndex =
      direction === "next"
        ? (currentIndex + 1) % filteredImages.length
        : (currentIndex - 1 + filteredImages.length) % filteredImages.length
    setSelectedImage(filteredImages[newIndex].id)
  }

  return (
    <section id="galerie" className="py-24 md:py-32 relative bg-card/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium mb-4 block">Portofoliu</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
            Galeria <span className="gradient-text">Noastră</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Descoperă transformările create cu pasiune și măiestrie.
          </p>

          {/* Filter buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {["toate", "dreaduri", "cornrows", "styling"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Gallery grid */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => setSelectedImage(image.id)}
                className={`relative cursor-pointer rounded-2xl overflow-hidden group ${
                  index === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
                style={{ aspectRatio: index === 0 ? "1" : "4/5" }}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-foreground font-medium text-sm">{image.alt}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                navigateGallery("prev")
              }}
              className="absolute left-4 md:left-8 p-3 rounded-full bg-muted hover:bg-muted/80 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[80vh] w-full aspect-square rounded-2xl overflow-hidden"
            >
              <Image
                src={filteredImages.find((img) => img.id === selectedImage)?.src || ""}
                alt={filteredImages.find((img) => img.id === selectedImage)?.alt || ""}
                fill
                className="object-contain"
              />
            </motion.div>

            <button
              onClick={(e) => {
                e.stopPropagation()
                navigateGallery("next")
              }}
              className="absolute right-4 md:right-8 p-3 rounded-full bg-muted hover:bg-muted/80 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
