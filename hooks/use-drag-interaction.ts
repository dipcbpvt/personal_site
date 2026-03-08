'use client'

import { useState, useCallback } from 'react'
import { useMotionValue, useSpring } from 'framer-motion'

export interface UseDragInteractionReturn {
  x: ReturnType<typeof useMotionValue>
  y: ReturnType<typeof useMotionValue>
  isDragging: boolean
  handleDragStart: (e: React.PointerEvent<HTMLDivElement>) => void
  handleDrag: (e: PointerEvent) => void
  handleDragEnd: () => void
}

export function useDragInteraction(
  springConfig = { stiffness: 300, damping: 30, mass: 1 }
): UseDragInteractionReturn {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const [isDragging, setIsDragging] = useState(false)

  // Apply spring physics to motion values
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  const handleDragStart = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true)
  }, [])

  const handleDrag = useCallback((e: PointerEvent) => {
    if (!isDragging) return
    x.set(e.clientX)
    y.set(e.clientY)
  }, [isDragging, x, y])

  const handleDragEnd = useCallback(() => {
    setIsDragging(false)
    x.set(0)
    y.set(0)
  }, [x, y])

  return {
    x: springX,
    y: springY,
    isDragging,
    handleDragStart,
    handleDrag,
    handleDragEnd,
  }
}
