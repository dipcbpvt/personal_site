'use client'

import { useRef } from 'react'
import { useScroll, useTransform, MotionValue } from 'framer-motion'

interface UseParallaxReturn {
  ref: React.RefObject<HTMLDivElement>
  y: MotionValue<number>
  opacity: MotionValue<number>
  scale: MotionValue<number>
}

export function useParallax(
  speed = 0.5,
  distance = 100
): UseParallaxReturn {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, distance * speed])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.95])

  return { ref, y, opacity, scale }
}
