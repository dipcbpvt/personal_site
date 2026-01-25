"use client"

import { motion } from "framer-motion"
import { useRef } from "react"

interface ExperienceItem {
  title: string
  organization: string
  period: string
  description: string | string[]
  subtitle?: string
  tags?: string[]
  type: "work" | "education" | "community"
}

interface ExperienceCarouselProps {
  items: ExperienceItem[]
}

export function ExperienceCarousel({ items }: ExperienceCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="relative">
      {/* Horizontal scrollable carousel with snap scrolling */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 px-6"
        style={{ scrollBehavior: "smooth" }}
      >
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex-shrink-0 w-full sm:w-96 snap-start"
          >
            <div className="glass rounded-2xl p-6 hover:bg-primary/5 hover:border-primary/20 transition-all duration-300 h-full flex flex-col">
              <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4 w-fit">
                {item.period}
              </span>
              <h3 className="text-lg font-semibold text-foreground mb-1">{item.title}</h3>
              <p className="text-primary/80 font-medium mb-3">{item.organization}</p>

              {/* Subtitle if present */}
              {item.subtitle && (
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 italic">
                  {item.subtitle}
                </p>
              )}

              {/* Description - either string or bullet list */}
              {typeof item.description === "string" ? (
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">{item.description}</p>
              ) : (
                <ul className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow space-y-2 list-disc list-inside">
                  {item.description.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              )}

              {item.tags && (
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Horizontal scroll indicator */}
      <div className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </motion.div>
  )
}
