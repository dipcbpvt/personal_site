"use client"

import { motion } from "framer-motion"

interface SectionHeaderProps {
  label?: string
  title: string
  description?: string
}

export function SectionHeader({ label, title, description }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="mb-16"
    >
      {label && <span className="text-xs font-medium tracking-[0.2em] text-primary uppercase mb-4 block">{label}</span>}
      <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground via-primary/80 to-foreground animate-gradient-x mb-4">{title}</h2>
      {description && <p className="text-lg text-muted-foreground max-w-2xl">{description}</p>}
    </motion.div>
  )
}
