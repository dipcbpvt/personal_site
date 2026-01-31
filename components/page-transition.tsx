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
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
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
        animate="visible"
        exit="hidden"
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
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{
        duration: 0.5,
        ease: 'easeOut',
        delay,
      }}
    >
      {children}
    </motion.div>
  )
}
