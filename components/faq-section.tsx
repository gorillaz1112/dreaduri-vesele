"use client"

import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react"
import { Plus, Minus } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "Cât durează realizarea dreadurilor?",
    answer:
      "Durata variază în funcție de tipul de dreaduri și lungimea părului. Pentru dreaduri sintetice, durează între 4-6 ore, iar pentru cele naturale, între 6-10 ore. Îți recomandăm să îți rezervi o zi întreagă pentru experiența completă.",
  },
  {
    question: "Cum îmi întrețin dreadurile acasă?",
    answer:
      "Pentru o întreținere corectă, îți recomandăm să speli dreadurile la 7-10 zile cu un șampon fără reziduu. Evită să le freci prea tare și lasă-le să se usuce natural sau cu un uscător la temperatură mică. Vino la control o dată la 4-6 săptămâni.",
  },
  {
    question: "Pot face dreaduri dacă am părul vopsit?",
    answer:
      "Da, poți face dreaduri și pe părul vopsit! Totuși, îți recomandăm să aștepți cel puțin 2 săptămâni după vopsire pentru a permite părului să se recupereze. Vom evalua starea părului tău la consultație.",
  },
  {
    question: "Dreadurile îmi distrug părul?",
    answer:
      "Nu, dreadurile făcute corect nu distrug părul. De fapt, părul tău este protejat de factorii externi. La îndepărtarea dreadurilor, vei avea părul la aceeași lungime sau chiar mai lung. Important este să vii la întreținere regulată.",
  },
  {
    question: "Cât costă și cum mă pot programa?",
    answer:
      "Prețurile încep de la 150 RON pentru întreținere și de la 350 RON pentru dreaduri noi. Pentru o estimare exactă, te invităm să ne contactezi. Programările se fac telefonic sau prin mesaj pe rețelele sociale.",
  },
  {
    question: "Oferiti consultație înainte de programare?",
    answer:
      "Da! Oferim consultații gratuite unde discutăm despre stilul dorit, evaluăm starea părului tău și îți dăm toate detaliile despre proces. Poți veni personal sau ne poți trimite poze pe WhatsApp.",
  },
  {
    question: "Pot alege culoarea dreadurilor sintetice?",
    answer:
      "Absolut! Avem o gamă largă de culori disponibile - de la nuanțe naturale la culori vibrante ca violet, albastru, verde sau chiar combinații multicolore. Îți putem personaliza look-ul exact cum îți dorești.",
  },
  {
    question: "Ce trebuie să fac înainte de programare?",
    answer:
      "Vino cu părul curat și uscat. Nu folosi balsam sau produse de styling în ziua programării. Dacă ai părul foarte încurcat, încearcă să îl descurci înainte. Ia-ți și ceva de mâncare/băutură pentru că vom petrece câteva ore împreună!",
  },
]

export function FaqSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24 md:py-32 relative bg-card/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-4 block">Întrebări Frecvente</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
            Ai <span className="gradient-text">Întrebări?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Găsește răspunsuri la cele mai comune întrebări despre serviciile noastre.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={cn(
                  "w-full flex items-center justify-between p-6 rounded-2xl text-left transition-all duration-300",
                  openIndex === index
                    ? "bg-primary/10 border border-primary/30"
                    : "bg-card border border-border hover:border-primary/30",
                )}
              >
                <span className="font-medium text-foreground pr-4">{faq.question}</span>
                <div
                  className={cn(
                    "flex-shrink-0 p-2 rounded-full transition-colors",
                    openIndex === index ? "bg-primary text-primary-foreground" : "bg-muted",
                  )}
                >
                  {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-2 text-muted-foreground">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
