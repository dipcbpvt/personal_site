"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface MagneticIconProps {
  href: string
  icon: React.ReactNode
  label: string
  className?: string
}

export function MagneticIcon({ href, icon, label, className }: MagneticIconProps) {
  const ref = useRef<HTMLAnchorElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const x = (e.clientX - centerX) * 0.3
    const y = (e.clientY - centerY) * 0.3
    setPosition({ x, y })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <Link
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "group relative flex items-center justify-center w-12 h-12 rounded-full",
        "glass transition-all duration-300",
        "hover:bg-primary/10 hover:border-primary/30",
        className,
      )}
      aria-label={label}
    >
      <motion.span
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
        className="text-muted-foreground group-hover:text-primary transition-colors"
      >
        {icon}
      </motion.span>
    </Link>
  )
}
