'use client'

import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

// Lazy background loader keeps the heavy three.js scene client-side only
const AnimatedBackground = dynamic(
  () =>
    import('./animated-background').then((mod) => ({
      default: mod.AnimatedBackground,
    })),
  {
    ssr: false,
    loading: () => (
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-gradient-to-b from-background to-background/80" />
    ),
  }
)

export default function AnimatedBackgroundLoader() {
  const [shouldRender, setShouldRender] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (prefersReducedMotion.matches) {
      return
    }

    const activate = () => setShouldRender(true)
    let idleHandle: number | undefined
    let timeoutHandle: number | undefined

    if ('requestIdleCallback' in window) {
      idleHandle = window.requestIdleCallback(activate, { timeout: 800 })
    } else {
      timeoutHandle = window.setTimeout(activate, 650)
    }

    return () => {
      if (idleHandle !== undefined && 'cancelIdleCallback' in window) {
        window.cancelIdleCallback(idleHandle)
      }
      if (timeoutHandle !== undefined) {
        window.clearTimeout(timeoutHandle)
      }
    }
  }, [])

  if (!shouldRender) {
    return (
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-gradient-to-b from-background to-background/80" />
    )
  }

  return <AnimatedBackground />
}
