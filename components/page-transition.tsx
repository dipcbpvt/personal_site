'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface PageTransitionProps {
  children: React.ReactNode
  delay?: number
  staggerChildren?: boolean
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.34, 1.56, 0.64, 1],
    },
  },
}

export function PageTransition({
  children,
  delay = 0,
  staggerChildren = false,
}: PageTransitionProps) {
  const childrenArray = React.Children.toArray(children)
  const shouldStagger = staggerChildren && childrenArray.length > 1

  if (shouldStagger) {
    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        exit="hidden"
        viewport={{ once: true, margin: '-100px' }}
      >
        {childrenArray.map((child, i) => (
          <motion.div key={i} variants={itemVariants}>
            {child}
          </motion.div>
        ))}
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.85 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -50, scale: 0.9 }}
      transition={{
        duration: 0.7,
        ease: [0.34, 1.56, 0.64, 1],
        delay,
      }}
      viewport={{ once: true, margin: '-100px' }}
    >
      {children}
    </motion.div>
  )
}
