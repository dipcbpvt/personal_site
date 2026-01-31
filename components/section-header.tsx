'use client'

import { motion } from 'framer-motion'

interface SectionHeaderProps {
  label: string
  title: string
  description?: string
}

const labelVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.34, 1.56, 0.64, 1],
    },
  },
}

const titleVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      delay: 0.1,
      ease: [0.34, 1.56, 0.64, 1],
    },
  },
}

const descriptionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.2,
      ease: [0.34, 1.56, 0.64, 1],
    },
  },
}

export function SectionHeader({ label, title, description }: SectionHeaderProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className="mb-16"
    >
      <motion.span
        variants={labelVariants}
        className="text-xs font-medium tracking-[0.2em] text-primary uppercase mb-4 block"
      >
        {label}
      </motion.span>
      <motion.h2 variants={titleVariants} className="text-4xl md:text-5xl font-bold text-foreground mb-4">
        {title}
      </motion.h2>
      {description && <motion.p variants={descriptionVariants} className="text-lg text-muted-foreground max-w-2xl">
        {description}
      </motion.p>}
    </motion.div>
  )
}
