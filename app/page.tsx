"use client"

import dynamic from "next/dynamic"

const SpotlightBg = dynamic(() => import("@/components/spotlight-bg").then((m) => m.SpotlightBg))
const ThreeBackground = dynamic(() => import("@/components/three-background").then((m) => m.ThreeBackground))
const Hero = dynamic(() => import("@/components/hero").then((m) => m.Hero), {
  loading: () => <div className="min-h-screen" aria-hidden="true" />,
})

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-background overflow-hidden flex flex-col justify-center">
      <SpotlightBg />
      <ThreeBackground />
      <Hero />
    </main>
  )
}
