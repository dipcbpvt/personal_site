"use client"

import type React from "react"

import { motion } from "framer-motion"
import Link from "next/link"

interface ContactItem {
  icon: React.ReactNode
  label: string
  value: string
  href: string
}

export function ContactInfoCard({ item, index }: { item: ContactItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Link
        href={item.href}
        target={item.href.startsWith("mailto") || item.href.startsWith("tel") ? undefined : "_blank"}
      >
        <div className="glass rounded-xl p-4 hover:bg-primary/5 hover:border-primary/20 transition-all duration-300 cursor-pointer group">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors">
              <span className="text-primary">{item.icon}</span>
            </div>
            <div className="flex-1">
              <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
              <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                {item.value}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
