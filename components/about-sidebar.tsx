"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { User, Briefcase, Lightbulb, Zap, Heart, Sparkles } from "lucide-react"

const sections = [
  { id: "intro", label: "About Myself", icon: User },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "capabilities", label: "Capabilities", icon: Lightbulb },
  { id: "systems", label: "Systems", icon: Zap },
  { id: "philosophy", label: "Philosophy & Values", icon: Heart },
  { id: "hobbies", label: "Passions", icon: Sparkles },
]

export function AboutSidebar() {
  const [activeSection, setActiveSection] = useState("intro")

  useEffect(() => {
    const handleScroll = () => {
      // Use a smaller offset from the top to detect which section is in view
      const scrollPosition = window.scrollY + 150
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      // Check if we're near the bottom of the page (within 100px)
      const isNearBottom = windowHeight + window.scrollY >= documentHeight - 100

      // If near bottom, highlight the last section
      if (isNearBottom) {
        setActiveSection(sections[sections.length - 1].id)
        return
      }

      // Find the section that's currently most visible
      let currentSection = sections[0].id

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i].id)
        if (element) {
          const { offsetTop } = element
          // Check if we've scrolled past this section's top
          if (scrollPosition >= offsetTop) {
            currentSection = sections[i].id
            break
          }
        }
      }

      setActiveSection(currentSection)
    }

    handleScroll() // Call once on mount
    window.addEventListener("scroll", handleScroll, { passive: true })
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
      {sections.map((section, index) => {
        const Icon = section.icon
        return (
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
            <Icon
              size={16}
              className={cn(
                "transition-all flex-shrink-0",
                activeSection === section.id ? "text-primary" : "text-muted-foreground/50",
              )}
            />
            <span className="text-sm font-medium">{section.label}</span>
          </motion.button>
        )
      })}
    </nav>
  )
}
