"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight, Briefcase, Rss, Target, Zap, Download } from "lucide-react"

const links = [
  {
    href: "https://dev.dipchakraborty.com",
    label: "Dev Works",
    description: "Engineering Portfolio",
    icon: <Briefcase size={24} />,
  },
  {
    href: "https://writings.dipchakraborty.com",
    label: "Writings",
    description: "Engineering Magazine",
    icon: <Rss size={24} />,
  },
]

export function FloatingLinks() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 -ml-4 md:-ml-6 mt-4 md:mt-6">
      {links.map((link, index) => (
        <motion.div
          key={link.label}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
        >
          <Link
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-4 md:p-6 w-full sm:w-64 glass glass-card rounded-2xl hover:bg-primary/5 hover:border-primary/20 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-2 md:mb-4">
              <span className="text-primary/60 group-hover:text-primary transition-colors">{link.icon}</span>
              <ArrowUpRight
                size={20}
                className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
              />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-1">{link.label}</h3>
            <p className="text-sm text-muted-foreground">{link.description}</p>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}
