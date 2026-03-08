"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"
import { listContainerVariants, listItemVariants } from "@/lib/animation-variants"

interface StaggeredListProps {
  items: ReactNode[]
  className?: string
  itemClassName?: string
  staggerDelay?: number
  direction?: "vertical" | "horizontal"
  delayChildren?: number
}

/**
 * Staggered List Component with automatic animation
 * Items animate in with a cascading effect
 */
export function StaggeredList({
  items,
  className = "",
  itemClassName = "",
  staggerDelay = 0.08,
  direction = "vertical",
  delayChildren = 0.1,
}: StaggeredListProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: staggerDelay * 0.5,
        staggerDirection: -1,
      },
    },
  }

  const itemVariant = {
    hidden: {
      opacity: 0,
      x: direction === "horizontal" ? 20 : 0,
      y: direction === "vertical" ? 10 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      x: direction === "horizontal" ? 20 : 0,
      y: direction === "vertical" ? 10 : 0,
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true, margin: "-100px" }}
      className={`flex ${direction === "horizontal" ? "gap-4" : "flex-col gap-3"} ${className}`}
    >
      {items.map((item, index) => (
        <motion.div
          key={index}
          variants={itemVariant}
          className={itemClassName}
          layout
        >
          {item}
        </motion.div>
      ))}
    </motion.div>
  )
}
