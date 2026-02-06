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
    y: 30,
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
  const [hasAppeared, setHasAppeared] = React.useState(false)
  const childrenArray = React.Children.toArray(children)
  const shouldStagger = staggerChildren && childrenArray.length > 1

  React.useEffect(() => {
    // Small delay to ensure smooth transition after preloader
    const timer = setTimeout(() => {
      setHasAppeared(true)
    }, 50)
    return () => clearTimeout(timer)
  }, [])

  if (shouldStagger) {
    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={hasAppeared ? "visible" : "hidden"}
        exit="hidden"
        suppressHydrationWarning
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
      variants={itemVariants}
      initial="hidden"
      animate={hasAppeared ? "visible" : "hidden"}
      exit="hidden"
      transition={{
        duration: 0.5,
        ease: 'easeOut',
        delay,
      }}
      suppressHydrationWarning
    >
      {children}
    </motion.div>
  )
}
