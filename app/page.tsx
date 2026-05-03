"use client"

import dynamic from "next/dynamic"
import { Hero } from "@/components/hero"

const SpotlightBg = dynamic(() => import("@/components/spotlight-bg").then((m) => m.SpotlightBg), {
  loading: () => null,
})
const ThreeBackground = dynamic(() => import("@/components/three-background").then((m) => m.ThreeBackground), {
  loading: () => null,
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
