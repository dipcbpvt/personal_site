"use client"

import type React from "react"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface InfoCardProps {
  icon: React.ReactNode
  title: string
  value: string
  className?: string
  index?: number
}

export function InfoCard({ icon, title, value, className, index = 0 }: InfoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "glass rounded-2xl p-6 hover:bg-primary/5 hover:border-primary/20 transition-all duration-300",
        className,
      )}
    >
      <div className="text-primary/60 mb-4">{icon}</div>
      <p className="text-sm text-muted-foreground mb-1">{title}</p>
      <p className="text-foreground font-medium">{value}</p>
    </motion.div>
  )
}
