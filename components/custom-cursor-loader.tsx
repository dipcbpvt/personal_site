'use client'

import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

// Client-side loader so we can keep the fancy cursor hydrated only in the browser
const CustomCursor = dynamic(
  () =>
    import('./custom-cursor').then((mod) => ({
      default: mod.CustomCursor,
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

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const maxTouchPoints =
      navigator.maxTouchPoints ?? (navigator as Navigator & { msMaxTouchPoints?: number }).msMaxTouchPoints ?? 0
    const hasTouchSupport = 'ontouchstart' in window || maxTouchPoints > 0

    if (prefersReducedMotion.matches || hasTouchSupport) {
      return
    }

    const activate = () => setShouldRender(true)
    let idleHandle: number | undefined
    let timeoutHandle: number | undefined

    if ('requestIdleCallback' in window) {
      idleHandle = window.requestIdleCallback(activate, { timeout: 900 })
    } else {
      timeoutHandle = window.setTimeout(activate, 700)
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
    return null
  }

  return <CustomCursor />
}
