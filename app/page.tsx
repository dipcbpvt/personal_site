"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { SpotlightBg } from "@/components/spotlight-bg"
import { ThreeBackground } from "@/components/three-background"
import { PageTransition } from "@/components/page-transition"

const principles = [
  "Clarity beats noise.",
  "Ship before perfect.",
  "Ideas are cheap, execution is character.",
  "Build in public, learn in public.",
]

const aboutPoints = [
  "I’m building systems that help people move faster from confusion to clarity.",
  "I’m experimenting with storytelling as a tool for thinking, not just entertainment.",
  "I care about turning raw ideas into real things — products, writing, and content.",
]

const nowItems = [
  "Designing small products around decision-making and learning loops.",
  "Writing sharper breakdowns on mindset, building, and modern tech culture.",
  "Preparing long-form video essays that blend systems thinking and storytelling.",
]

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      <SpotlightBg />
      <ThreeBackground />
      <Navigation />

      <PageTransition>
        <div className="max-w-5xl mx-auto px-6 pt-28 md:pt-36 pb-20 space-y-20">
          <section className="space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="text-sm uppercase tracking-[0.2em] text-primary"
            >
              In progress · not finished
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-semibold text-foreground leading-[1.1]"
            >
              Rising builder.
              <br />
              Thinker in motion.
              <br />
              Future founder.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl"
            >
              From ideas to execution.
            </motion.p>
          </section>

          <section id="about" className="space-y-5">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">What I’m about</h2>
            <div className="space-y-3 text-muted-foreground text-base md:text-lg">
              {aboutPoints.map((point) => (
                <p key={point}>{point}</p>
              ))}
            </div>
          </section>

          <section id="thinking" className="space-y-5">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">How I think</h2>
            <ul className="space-y-2 text-base md:text-lg text-muted-foreground">
              {principles.map((principle) => (
                <li key={principle} className="flex items-start gap-3">
                  <span className="text-primary">→</span>
                  <span>{principle}</span>
                </li>
              ))}
            </ul>
          </section>

          <section id="content" className="space-y-5">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">Content & ideas</h2>
            <p className="text-base md:text-lg text-muted-foreground">
              I write to think clearer, break down ideas to make them useful, and I’m stepping into video to tell deeper stories around systems, ambition, and modern creation.
            </p>
          </section>

          <section id="now" className="space-y-5">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">Now</h2>
            <ul className="space-y-2 text-base md:text-lg text-muted-foreground">
              {nowItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section id="explore" className="space-y-4 pb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">Explore more dimensions</h2>
            <div className="space-y-3 text-base md:text-lg">
              <p>
                Wanna explore my dev works →{" "}
                <Link href="https://dev.dipchakraborty.com" className="text-primary hover:underline" target="_blank" rel="noreferrer">
                  dev.dipchakraborty.com
                </Link>
              </p>
              <p>
                Read and follow the trend with me →{" "}
                <Link href="https://writings.dipchakraborty.com" className="text-primary hover:underline" target="_blank" rel="noreferrer">
                  writings.dipchakraborty.com
                </Link>
              </p>
              <p>
                Some of my unfiltered thoughts and creations →{" "}
                <Link href="https://thoughts.dipchakraborty.com" className="text-primary hover:underline" target="_blank" rel="noreferrer">
                  thoughts.dipchakraborty.com
                </Link>
              </p>
            </div>
          </section>
        </div>
      </PageTransition>
    </main>
  )
}
