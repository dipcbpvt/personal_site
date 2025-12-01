"use client"

import type React from "react"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

interface ContactCardProps {
  icon: React.ReactNode
  label: string
  value: string
  href: string
  index?: number
  iconOnly?: boolean
}

export function ContactCard({ icon, label, value, href, index = 0, iconOnly = false }: ContactCardProps) {
  if (iconOnly) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: index * 0.05 }}
      >
        <Link
          href={href}
          target={href.startsWith("http") || href.startsWith("mailto") || href.startsWith("tel") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="group flex items-center justify-center w-14 h-14 glass rounded-xl hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
          title={label}
        >
          <div className="text-muted-foreground group-hover:text-primary transition-colors">{icon}</div>
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        href={href}
        target={href.startsWith("http") || href.startsWith("mailto") || href.startsWith("tel") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className="group flex items-center gap-4 p-6 glass rounded-2xl hover:bg-primary/5 hover:border-primary/20 transition-all duration-300"
      >
        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
          {icon}
        </div>
        <div className="flex-grow min-w-0">
          <p className="text-sm text-muted-foreground mb-1">{label}</p>
          <p className="text-foreground font-medium truncate">{value}</p>
        </div>
        <ArrowUpRight
          size={20}
          className="flex-shrink-0 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
        />
      </Link>
    </motion.div>
  )
}
