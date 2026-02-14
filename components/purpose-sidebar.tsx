"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const sections = [
  { id: "intro", label: "My Purpose" },
  { id: "philosophy", label: "Philosophy & Values" },
  { id: "hobbies", label: "Passions" },
]

export function PurposeSidebar() {
  const [activeSection, setActiveSection] = useState("intro")

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <nav className="sticky top-32 space-y-2">
      {sections.map((section, index) => (
        <motion.button
          key={section.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          onClick={() => scrollToSection(section.id)}
          className={cn(
            "flex items-center gap-3 w-full text-left py-2 px-4 rounded-lg transition-all",
            activeSection === section.id
              ? "text-primary bg-primary/10"
              : "text-muted-foreground hover:text-foreground hover:bg-secondary/50",
          )}
        >
          <span
            className={cn(
              "w-8 h-px transition-all",
              activeSection === section.id ? "bg-primary w-12" : "bg-muted-foreground/30",
            )}
          />
          <span className="text-sm font-medium">{section.label}</span>
        </motion.button>
      ))}
    </nav>
  )
}
