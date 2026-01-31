'use client'

import dynamic from 'next/dynamic'

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
  return <AnimatedBackground />
}
