'use client'

import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

// Dynamic import so the robot cursor is only loaded client-side (no SSR)
const RobotCursor = dynamic(
  () =>
    import('./robot-cursor').then((mod) => ({
      default: mod.RobotCursor,
    })),
  {
    ssr: false,
    loading: () => null,
  }
)

export default function CustomCursorLoader() {
  const [shouldRender, setShouldRender] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    // Respect reduced motion preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    // Skip on touch devices
    const maxTouchPoints =
      navigator.maxTouchPoints ?? (navigator as Navigator & { msMaxTouchPoints?: number }).msMaxTouchPoints ?? 0
    const hasTouchSupport = 'ontouchstart' in window || maxTouchPoints > 0
    const hasCoarsePointer = window.matchMedia('(pointer: coarse)').matches

    if (prefersReducedMotion.matches || (hasTouchSupport && hasCoarsePointer)) {
      return
    }

    const activate = () => setShouldRender(true)
    let idleHandle: number | undefined
    let timeoutHandle: ReturnType<typeof setTimeout> | undefined

    if ('requestIdleCallback' in window) {
      idleHandle = window.requestIdleCallback(activate, { timeout: 900 })
    } else {
      timeoutHandle = setTimeout(activate, 700)
    }

    return () => {
      if (idleHandle !== undefined && 'cancelIdleCallback' in window) {
        window.cancelIdleCallback(idleHandle)
      }
      if (timeoutHandle !== undefined) {
        clearTimeout(timeoutHandle)
      }
    }
  }, [])

  if (!shouldRender) {
    return null
  }

  return <RobotCursor />
}
