"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { useIsMobile } from "@/hooks/use-mobile"
import { ChevronDown } from "lucide-react"

const sections = [
  { id: "intro", label: "My Purpose" },
  { id: "philosophy", label: "Philosophy & Values" },
  { id: "hobbies", label: "Passions" },
]

export function PurposeSidebar() {
  const [activeSection, setActiveSection] = useState("intro")
  const [isTabsVisible, setIsTabsVisible] = useState(false)
  const isMobile = useIsMobile()

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

  // Mobile version - collapsible tabs
  if (isMobile) {
    return (
      <>
        <motion.button
          onClick={() => setIsTabsVisible(!isTabsVisible)}
          className="w-full mb-6 flex items-center justify-between p-4 rounded-lg glass border border-border/50 hover:border-primary/30 transition-all"
          whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.05)" }}
        >
          <span className="text-sm font-medium text-foreground">
            {sections.find(s => s.id === activeSection)?.label || "Sections"}
          </span>
          <motion.div
            animate={{ rotate: isTabsVisible ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown size={18} className="text-muted-foreground" />
          </motion.div>
        </motion.button>

        <AnimatePresence>
          {isTabsVisible && (
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="flex gap-2 overflow-x-auto pb-2 mb-6 -mx-6 px-6 scrollbar-hide"
            >
              {sections.map((section, index) => (
                <motion.button
                  key={section.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => {
                    scrollToSection(section.id)
                    setIsTabsVisible(false)
                  }}
                  className={cn(
                    "flex-shrink-0 py-2 px-4 rounded-lg transition-all text-sm font-medium whitespace-nowrap",
                    activeSection === section.id
                      ? "text-primary bg-primary/10 border border-primary/30"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50 border border-border/30",
                  )}
                >
                  {section.label}
                </motion.button>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </>
    )
  }

  // Desktop version - vertical sidebar
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
