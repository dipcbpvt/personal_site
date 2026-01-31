import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { PageTransition } from "@/components/page-transition"
import { CTASection } from "@/components/cta-section"
import AnimatedBackgroundLoader from "@/components/animated-background-loader"

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      <AnimatedBackgroundLoader />
      <Navigation />
      <div className="pt-16 md:pt-20"></div>
      <PageTransition>
        <Hero />
        <CTASection />
      </PageTransition>
    </main>
  )
}
