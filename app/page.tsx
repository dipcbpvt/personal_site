"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { SpotlightBg } from "@/components/spotlight-bg"
import { ThreeBackground } from "@/components/three-background"
import { Hero } from "@/components/hero"
import { PageTransition } from "@/components/page-transition"
import { CTASection } from "@/components/cta-section"
import { SectionHeader } from "@/components/section-header"
import { Capabilities } from "@/components/capabilities"
import { SystemDesignProcess } from "@/components/system-design-process"
import { CareerTimeline } from "@/components/career-timeline"
import { Heart } from "lucide-react"

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
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      <SpotlightBg />
      <ThreeBackground />
      <Navigation />
      <div className="pt-16 md:pt-20"></div>
      <PageTransition>
        <Hero />

        {/* Purpose Section */}
        <div ref={containerRef} className="py-28 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader
              title="The Story So Far"
              description="A journey from childhood curiosity and Iron Man dreams to building meaningful systems that connect people."
            />

            <div className="mt-16 space-y-24 md:space-y-32">
              {/* Story Section with Subsections */}
              <section id="story">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="relative mb-12"
                >
                  <div className="relative aspect-[16/12] sm:aspect-[16/10] md:aspect-[16/7] rounded-2xl overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent z-10" />
                    <Image
                      src="/dip_looking.png"
                      alt="Dip Chakraborty"
                      fill
                      className="object-cover brightness-105"
                      priority
                    />
                  </div>
                  {/* Decorative reflection element */}
                  <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-16 sm:w-32 h-16 sm:h-32 glass rounded-xl -z-10 opacity-50" />
                </motion.div>

                {/* Subsection 1: The Beginning */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="glass rounded-2xl p-6 md:p-8 mb-8 space-y-4"
                >
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground">The Beginning</h3>
                  <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed" style={{ textAlign: "justify", textJustify: "inter-word" }}>
                    <p>
                      My curiosity about technology began in a place common to many tech enthusiasts — cinema. Growing up with films like The Matrix and The Terminator introduced me to the idea that machines and intelligence could reshape the world. But it was Iron Man that made the idea feel personal.
                    </p>
                    <p>
                      Tony Stark wasn't just a superhero — he was a builder. Constantly tweaking, upgrading, talking to his suit like it was his best friend. I remember thinking: yeah… I want to be that kind of person.
                    </p>
                    <p>
                      I was never the perfect student, but I've always been curious. Toward the end of high school I started experimenting with programming. One of the first things I made was a tiny Python script that printed "Yo, what's good today?" every time my laptop booted.
                    </p>
                    <p>
                      Nothing fancy - but seeing my own code come alive felt almost magical. From there it turned into constant tinkering: small automation hacks, some messy robotics experiments, and whatever interesting problem I could poke at.
                    </p>
                  </div>
                </motion.div>

                {/* Subsection 2: Learning to Think in Systems */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="glass rounded-2xl p-6 md:p-8 mb-8 space-y-4"
                >
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground">Learning to Think in Systems</h3>
                  <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed" style={{ textAlign: "justify", textJustify: "inter-word" }}>
                    <p>
                      Over time I stopped seeing software as just code. To me, building systems feels closer to architecture or art. The best work isn't about writing the tightest algorithm - it's about understanding what people actually need and why they would trust the thing you built.
                    </p>
                    <p>
                      Every system eventually leads back to two simple questions:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-2">
                      <li>What human problem does this solve?</li>
                      <li>Why should someone trust this solution?</li>
                    </ul>
                    <p>
                      Like many engineers, my path hasn't been smooth. There have been moments of frustration, underestimation, and professional struggles that forced me to ask uncomfortable questions:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-2">
                      <li>What skills am I missing?</li>
                      <li>What mindset separates builders from spectators?</li>
                      <li>What does it truly mean to think like an engineer?</li>
                    </ul>
                    <p>
                      Those questions continue to shape how I learn and work. I may learn slowly and in small steps, but I prefer learning deeply - understanding why something works, how it works, and where its limitations are.
                    </p>
                  </div>
                </motion.div>

                {/* Subsection 3: From Robotics to Software */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="glass rounded-2xl p-6 md:p-8 mb-8 space-y-4"
                >
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground">From Robotics to Software</h3>
                  <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed" style={{ textAlign: "justify", textJustify: "inter-word" }}>
                    <p>
                      My early technical journey was heavily rooted in robotics and hardware-driven systems. But in my country, large-scale robotics development faces practical barriers: expensive hardware, costly semiconductor components, and relatively limited industrial adoption. Because of that, sustained robotics innovation becomes difficult.
                    </p>
                    <p>
                      Software and artificial intelligence, on the other hand, are far more accessible. Computers and mobile devices are everywhere, which means intelligent systems can be deployed and scaled much faster.
                    </p>
                    <p>
                      This is why my professional focus shifted toward software engineering and AI — a space where ideas can move from prototype to impact much more quickly.
                    </p>
                  </div>
                </motion.div>

                {/* Subsection 4: Looking Forward */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="glass rounded-2xl p-6 md:p-8 mb-8 space-y-4"
                >
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground">Looking Forward</h3>
                  <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed" style={{ textAlign: "justify", textJustify: "inter-word" }}>
                    <p>
                      Technology evolves insanely fast. When I was a kid, a flip phone felt futuristic. Today we have generative and agentic AI systems that can reason, write, assist, and build alongside humans.
                    </p>
                    <p>
                      Beyond AI, fields like Human–Computer Interaction, augmented and virtual reality, and intelligent systems are redefining how humans collaborate with machines.
                    </p>
                    <p>
                      As hardware becomes cheaper, lighter, and more accessible, these technologies will likely accelerate the next major phase of robotics - automating large-scale physical work through advances in sensing, computing, and control.
                    </p>
                    <p>
                      That possibility is what keeps me curious.
                    </p>
                  </div>
                </motion.div>

                {/* Subsection 5: My Vision */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="glass rounded-2xl p-6 md:p-8 space-y-4"
                >
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground">My Vision</h3>
                  <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed" style={{ textAlign: "justify", textJustify: "inter-word" }}>
                    <p>
                      My goal is simple: Build thoughtful technology that solves real problems and makes the world a little more capable, productive, and connected. Even small improvements matter.
                    </p>
                    <p>
                      Outside of technology, I'm still the same person who enjoys history documentaries, rewatching old movies, shouting at exciting cricket matches, and blasting music way too loudly.
                    </p>
                    <p className="text-foreground font-medium mt-6">
                      If any of this vibes with you, hit me up. Would be cool to chat.
                    </p>
                  </div>
                </motion.div>
              </section>

              {/* Philosophy Section */}
              <section id="philosophy">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-2xl md:text-3xl font-semibold text-foreground mb-12 flex items-center gap-3"
                >
                  <Heart className="text-primary" size={24} />
                  Philosophy & Values
                </motion.h3>

                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Continuous Learning",
                      text: "I treat every project as a learning system. Post-mortems, documentation, and reflection are part of my workflow.",
                    },
                    {
                      title: "User-Centered Design",
                      text: "I spend time with real users before designing abstractions.",
                    },
                    {
                      title: "Quality Over Quantity",
                      text: "I prioritize maintainability over speed when systems will live for years.",
                    },
                    {
                      title: "Collaboration",
                      text: "I invest in communication before optimization.",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="glass rounded-2xl p-6"
                    >
                      <h4 className="text-lg font-semibold text-foreground mb-2">{item.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* Career Timeline - After Story So Far */}
              <div className="mt-24 md:mt-32 pt-24 md:pt-32 border-t border-border/50">
                <CareerTimeline />
              </div>

              {/* Capabilities Section - Core Products & Engineering Foundations */}
              <div className="mt-24 md:mt-32 pt-24 md:pt-32 border-t border-border/50">
                <Capabilities />
              </div>
            </div>
          </div>
        </div>

        {/* Process/Trajectory Section */}
        <div className="py-28 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader
              title="Trajectory"
              description="Building sustainable systems through engineering, experimentation, and discipline"
            />

            {/* Hero Image - from Process page */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative mb-24 mt-16"
            >
              <div className="relative aspect-[21/9] rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 z-10" />
                <Image
                  src="/dip_working.png"
                  alt="Dip Chakraborty at work"
                  fill
                  className="object-cover brightness-110"
                />
              </div>
              {/* Offset decorative element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 glass rounded-xl -z-10" />
            </motion.div>

            {/* System Design Process - Flowchart Algorithm */}
            <div className="mb-24">
              <SystemDesignProcess />
            </div>
          </div>
        </div>

        {/* Passions & Interests Section - Last Section */}
        <div className="py-28 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader
              title="Passions & Interests"
              description=""
            />
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto text-justify"
              style={{ textJustify: "inter-word" }}
            >
              One day, I dream of stepping into filmmaking as a director. Stories have always fascinated me—whether it's the narrative arc of a great war drama or the rhythm of classical music. Creating visual stories that move people is a goal I'm working towards.
            </motion.p>

            <div className="mt-16">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {passions.map((passion, index) => (
                  <motion.div
                    key={passion.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group glass rounded-2xl p-6 hover:bg-primary/5 hover:border-primary/20 transition-all"
                  >
                    <h4 className="font-semibold text-foreground mb-2">{passion.title}</h4>
                    <p className="text-sm text-muted-foreground">{passion.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <CTASection />
      </PageTransition>
    </main>
  )
}
