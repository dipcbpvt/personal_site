"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface TimelineItem {
  title: string
  organization: string
  period: string
  description: string
  tags?: string[]
  type: "work" | "education"
}

interface TimelineProps {
  items: TimelineItem[]
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent md:-translate-x-1/2" />

      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className={cn("relative grid md:grid-cols-2 gap-8 mb-12", index % 2 === 0 ? "md:text-right" : "")}
        >
          {/* Timeline dot */}
          <div className="absolute left-0 md:left-1/2 w-4 h-4 -translate-x-1/2 top-2">
            <div className="w-full h-full rounded-full bg-primary neon-glow" />
            <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-30" />
          </div>

          {/* Content */}
          <div className={cn("ml-8 md:ml-0", index % 2 === 0 ? "md:pr-12" : "md:col-start-2 md:pl-12")}>
            <div className="glass rounded-2xl p-6 hover:bg-primary/5 hover:border-primary/20 transition-all duration-300">
              <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
                {item.period}
              </span>
              <h3 className="text-xl font-semibold text-foreground mb-1">{item.title}</h3>
              <p className="text-primary/80 font-medium mb-3">{item.organization}</p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{item.description}</p>
              {item.tags && (
                <div className={cn("flex flex-wrap gap-2", index % 2 === 0 ? "md:justify-end" : "")}>
                  {item.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
