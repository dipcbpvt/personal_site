import { Navigation } from "@/components/navigation"
import { SpotlightBg } from "@/components/spotlight-bg"
import { ThreeBackground } from "@/components/three-background"
import { Hero } from "@/components/hero"
import { PageTransition } from "@/components/page-transition"
import { CTASection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      <SpotlightBg />
      <ThreeBackground />
      <Navigation />
      <div className="pt-16 md:pt-20"></div>
      <PageTransition>
        <Hero />
        <CTASection />
      </PageTransition>
    </main>
  )
}
