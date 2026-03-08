'use client'

import { useRef } from 'react'
import { useScroll, useTransform, MotionValue } from 'framer-motion'

interface UseScrollAnimationReturn {
  ref: React.RefObject<HTMLDivElement>
  scrollProgress: MotionValue<number>
  y: MotionValue<number>
  opacity: MotionValue<number>
  scale: MotionValue<number>
}

export function useScrollAnimation(
  distance = 200,
  fadeStart = 0,
  fadeEnd = 0.8
): UseScrollAnimationReturn {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, distance])
  const opacity = useTransform(scrollYProgress, [fadeStart, fadeEnd], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.98])

  return { ref, scrollProgress: scrollYProgress, y, opacity, scale }
}
