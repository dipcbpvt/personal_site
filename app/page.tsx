"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { SpotlightBg } from "@/components/spotlight-bg"
import { ThreeBackground } from "@/components/three-background"
import { Hero } from "@/components/hero"
import { PageTransition } from "@/components/page-transition"
import { CTASection } from "@/components/cta-section"

const passions = [
  {
    title: "Filmmaking",
    description: "Aspiring director passionate about storytelling and visual narratives",
  },
  {
    title: "Music",
    description: "Deep appreciation for Indian classical and world music traditions",
  },
  {
    title: "Cricket",
    description: "Passionate follower and player of the sport",
  },
  {
    title: "Reading",
    description: "Enjoys suspense, historical fiction, and strategic thinking",
  },
  {
    title: "Writing",
    description: "Blogging about technology, culture, and personal insights",
  },
  {
    title: "Gaming",
    description: "Enjoys strategy and story-driven narrative games",
  },
]

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      <SpotlightBg />
      <ThreeBackground />
      <Navigation />
      <div className="pt-16 md:pt-20"></div>
      <PageTransition>
        <Hero />

        {/* Passions & Interests Section */}
        <div className="py-16 md:py-24" id="hobbies">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Passions & Interests</h2>

              <div
                className="text-muted-foreground text-base md:text-lg leading-relaxed space-y-4 mb-14"
                style={{ textAlign: "justify", textJustify: "inter-word" }}
              >
                <p>
                  One day, I dream of stepping into filmmaking as a director. Stories have always fascinated me—whether it's the narrative arc of a great war drama or the rhythm of classical music. Creating visual stories that move people is a goal I'm working towards.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {passions.map((passion, index) => (
                  <motion.div
                    key={passion.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group glass rounded-2xl p-6 hover:bg-primary/5 hover:border-primary/20 transition-all border border-border/50"
                  >
                    <h4 className="font-semibold text-foreground mb-2 text-base md:text-lg">{passion.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{passion.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <CTASection />
      </PageTransition>
    </main>
  )
}
