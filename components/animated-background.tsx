"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const floatingKeywords = [
  "Engineering",
  "Product",
  "Design",
  "Strategy",
  "Innovation",
  "Leadership",
  "Automation",
  "AI",
  "Creativity",
  "Architecture",
  "Technology",
  "Movies",
]

export function AnimatedBackground() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -100, 50, 0],
          rotate: [0, 360],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/15 via-transparent to-blue-500/10 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -100, 50, 0],
          y: [0, 100, -50, 0],
          rotate: [360, 0],
        }}
        transition={{
          duration: 30,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-primary/10 via-transparent to-purple-500/5 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, 50, -100, 0],
          y: [0, 50, 100, 0],
        }}
        transition={{
          duration: 35,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute top-1/2 left-0 w-80 h-80 bg-gradient-to-r from-cyan-500/5 via-transparent to-blue-500/10 rounded-full blur-3xl"
      />

      {/* Floating keywords */}
      <div className="absolute inset-0">
        {floatingKeywords.map((keyword, index) => (
          <motion.div
            key={keyword}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: 15 + index * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="absolute text-sm font-medium text-primary/40 pointer-events-none"
          >
            {keyword}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
