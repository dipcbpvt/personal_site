import dynamic from "next/dynamic"
import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { PageTransition } from "@/components/page-transition"
import { CTASection } from "@/components/cta-section"

// Lazy load 3D background - heavy on mobile, not critical for above-the-fold
const AnimatedBackground = dynamic(() => import("@/components/animated-background").then(mod => ({ default: mod.AnimatedBackground })), {
  ssr: false,
  loading: () => <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-gradient-to-b from-background to-background/80" />
})

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      <AnimatedBackground />
      <Navigation />
      <div className="pt-16 md:pt-20"></div>
      <PageTransition>
        <Hero />
        <CTASection />
      </PageTransition>
    </main>
  )
}
