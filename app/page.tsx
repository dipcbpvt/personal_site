"use client"

import { SpotlightBg } from "@/components/spotlight-bg"
import { ThreeBackground } from "@/components/three-background"
import { Hero } from "@/components/hero"

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-background overflow-hidden flex flex-col justify-center">
      <SpotlightBg />
      <ThreeBackground />
      <SpotlightBg />
      <ThreeBackground />
      <Hero />
    </main>
  )
}
