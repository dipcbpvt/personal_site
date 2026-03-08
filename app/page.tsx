"use client"

import dynamic from "next/dynamic"
import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { PageTransition } from "@/components/page-transition"
import { CTASection } from "@/components/cta-section"
import { motion } from "framer-motion"
import Image from "next/image"
import { SectionHeader } from "@/components/section-header"
import { Heart } from "lucide-react"

import { Capabilities } from "@/components/capabilities"
import { SystemDesignProcess } from "@/components/system-design-process"
import { CareerTimeline } from "@/components/career-timeline"
import { LeftSidebar } from "@/components/left-sidebar"
import { RightSidebar } from "@/components/right-sidebar"
import { TiltCard } from "@/components/tilt-card"

const SpotlightBg = dynamic(() => import("@/components/spotlight-bg").then(m => m.SpotlightBg), { ssr: false })
const ThreeBackground = dynamic(() => import("@/components/three-background").then(m => m.ThreeBackground), { ssr: false })

const passions = [
  {
    icon: "🎬",
    title: "Filmmaking",
    description: "Aspiring director passionate about storytelling and visual narratives",
  },
  {
    icon: "🎵",
    title: "Music",
    description: "Deep appreciation for Indian classical and world music traditions",
  },
  {
    icon: "🏏",
    title: "Cricket",
    description: "Passionate follower and player of the sport",
  },
  {
    icon: "📚",
    title: "Reading",
    description: "Enjoys suspense, historical fiction, and strategic thinking",
  },
  {
    icon: "✍️",
    title: "Writing",
    description: "Blogging about technology, culture, and personal insights",
  },
  {
    icon: "🎮",
    title: "Gaming",
    description: "Enjoys strategy and story-driven narrative games",
  },
]

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-background overflow-x-clip w-full">
      <SpotlightBg />
      <ThreeBackground />
      <Navigation />
      <div className="pt-16 md:pt-20"></div>
      <PageTransition>
        <Hero />

        <div className="max-w-[1400px] mx-auto w-full flex flex-col lg:flex-row relative items-start gap-4 xl:gap-8">
          <LeftSidebar />

          <div className="flex-1 min-w-0 pb-20">
            {/* 1. The Story So Far */}
            <div className="max-w-5xl mx-auto px-6 py-20">
              <section id="intro">
                <SectionHeader
                  label="Purpose"
                  title="The Story So Far"
                  description="A journey from childhood curiosity and Iron Man dreams to building meaningful systems that connect people."
                />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="relative mb-12 mt-12"
                >
                  <div className="relative aspect-[16/10] md:aspect-[16/7] rounded-2xl overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent z-10" />
                    <Image
                      src="/dip_looking.png"
                      alt="Dip Chakraborty"
                      fill
                      className="object-cover brightness-105"
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 1000px"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 glass rounded-xl -z-10 opacity-50" />
                </motion.div>

                <div className="glass rounded-3xl p-6 md:p-10 border border-border/50 bg-card/10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Part 1 */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="glass rounded-2xl p-8 border border-border/50 bg-background/50 h-full"
                    >
                      <h3 id="initiation" className="text-xl font-bold text-foreground mb-4">
                        The Initiation of the path
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed" style={{ textAlign: "justify", textJustify: "inter-word" }}>
                        My curiosity about technology began in a place common to many tech enthusiasts - cinema. Growing up with films like The Matrix and Terminator introduced me to the idea that machines and intelligence could reshape the world. But it was Iron Man that made the idea feel personal. <span className="font-serif italic text-foreground">Tony Stark wasn’t just a superhero - he was a builder. Constantly tweaking, upgrading, talking to his suit like it was his best friend. I was like… yeah, I wanna be that kind of person.</span> I was never the perfect student, but I have always been curious. Toward the end of high school, I began experimenting with programming. <span className="font-serif italic text-foreground">A dumb little Python thing that said “Yo what’s good today” every time I booted my laptop. Nothing fancy, but seeing my own words pop up on screen felt straight-up magical.</span> From there it was just non-stop tinkering: random automation hacks, some janky robotics attempts, whatever problem looked fun enough to poke at. Over time I stopped seeing software as just code. To me, building systems feels closer to architecture or art. The best stuff isn’t about who can write the tightest algorithm - it’s about who actually gets what people need and why they’d ever trust the thing you made. The real question behind every system is simple: <span className="font-serif italic text-foreground">What human problem does this solve, and why would someone trust this solution?</span>
                      </p>
                    </motion.div>

                    {/* Part 2 */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="glass rounded-2xl p-8 border border-border/50 bg-background/50 h-full"
                    >
                      <h3 id="setbacks" className="text-xl font-bold text-foreground mb-4">
                        Setbacks and Expansions
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed" style={{ textAlign: "justify", textJustify: "inter-word" }}>
                        Like many engineers, there have been moments of frustration, underestimation, and professional struggles that forced me to ask uncomfortable questions about myself: <span className="font-serif italic text-foreground">What skills am I missing? What mindset separates builders from spectators? What does it truly mean to think like an engineer? Those questions shape how I learn and work.</span> I may learn slowly but deeply - understanding why something works, how it works. Tech moves insane fast. When I was little, a flip phone felt futuristic. Now we’ve got Generative and Agentic AIs that roast you, reason with you, write your emails, make applications. Wild! While AI is advancing rapidly, fields like Human–Computer Interaction, AR/VR, robotics, and intelligent systems are redefining how humans and machines collaborate. <span className="font-serif italic text-foreground">For these technologies to truly transform everyday life, when the hardware gets cheaper, lighter, and reaches way more people.</span> That’s the part that keeps me up at night. My goal is simple: build thoughtful tech that fixes real problems and makes the world feel a little more capable, enhance productivity, a little more connected. Even tiny wins count. Outside of screens I’m still that guy geeking out over history docs, rewatching old movies, yelling at good cricket matches, blasting music way too loud.
                      </p>
                    </motion.div>

                    {/* Footer statement */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="md:col-span-2 pt-4 flex justify-center text-center"
                    >
                      <p className="text-xl text-foreground font-medium leading-relaxed">
                        If any of this vibes with you, hit me up. Would be cool to chat.
                      </p>
                    </motion.div>
                  </div>
                </div>
              </section>
            </div>

            {/* 6. From Robotics to Software. */}
            <div className="max-w-5xl mx-auto px-6 mb-24 mt-12">
              <section id="robotics">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-foreground">From Robotics to Software.</h3>
                    <div className="space-y-6 text-muted-foreground leading-relaxed text-justify" style={{ textJustify: "inter-word" }}>
                      <p>
                        My early technical journey was deeply rooted in robotics and hardware-intensive systems. However, in my country, the practical scope of large-scale robotics development remains limited due to high hardware costs, expensive semiconductor components, and relatively low mass adoption of automation technologies. These constraints make sustained innovation and commercialization in robotics challenging.
                      </p>
                      <p>
                        In contrast, software engineering and artificial intelligence present immediate and scalable opportunities, as computers and mobile devices are widely accessible to the general population. AI represents the current technological revolution, enabling intelligent systems to be deployed at scale with minimal hardware dependency. Looking ahead, augmented and virtual reality are expected to become mainstream as devices become more affordable, allowing users to experience immersive digital environments.
                      </p>
                      <p>
                        This evolution will eventually accelerate the next major phase of robotics, driven by increasing demand for large-scale manual labor automation and continuous advances in computing, sensing, and control technologies. My transition to professional software development reflects a strategic alignment with this technological trajectory and long-term innovation potential.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </section>
            </div>

            {/* 7. Philosophy & Values */}
            <div className="max-w-5xl mx-auto px-6 mb-24">
              <section id="philosophy">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-2xl font-semibold text-foreground mb-12 flex items-center gap-3"
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
                    <TiltCard key={item.title}>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="glass rounded-2xl p-6 h-full"
                      >
                        <h4 className="text-lg font-semibold text-foreground mb-2">{item.title}</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
                      </motion.div>
                    </TiltCard>
                  ))}
                </div>
              </section>
            </div>

            {/* 5. Career Chapters */}
            <div className="mb-24">
              <section id="career">
                <CareerTimeline />
              </section>
            </div>

            {/* 2 & 3. Core Products & Platforms and Engineering Foundations */}
            <div className="mb-24">
              <section id="process" className="px-6">
                <div className="max-w-5xl mx-auto">
                  <SectionHeader
                    label="🤖 PROCESS"
                    title="Trajectory"
                    description="Building sustainable systems through engineering, experimentation, and discipline"
                  />

                  {/* Hero Image - from Process page */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative mb-8"
                  >
                    <div className="relative aspect-[21/9] md:aspect-[24/9] rounded-2xl overflow-hidden shadow-2xl">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 z-10" />
                      <Image
                        src="/dip_working.png"
                        alt="Dip Chakraborty at work"
                        fill
                        className="object-cover brightness-110"
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 1000px"
                      />
                    </div>
                    {/* Offset decorative element */}
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 glass rounded-xl -z-10 opacity-50" />
                  </motion.div>
                </div>
              </section>
              <Capabilities />
            </div>

            {/* 4. Execution Model */}
            <div className="mb-24">
              <section id="execution">
                <SystemDesignProcess />
              </section>
            </div>

            {/* 8. Passions & Interests */}
            <div className="max-w-5xl mx-auto px-6 mb-32">
              <section id="hobbies">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-2xl font-semibold text-foreground mb-8"
                >
                  Passions & Interests
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mt-12 text-muted-foreground leading-relaxed"
                >
                  One day, I dream of stepping into filmmaking as a director. Stories have always fascinated
                  me-whether it's the narrative arc of a great war drama or the rhythm of classical music. Creating
                  visual stories that move people is a goal I'm working towards.
                </motion.p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {passions.map((passion, index) => (
                    <TiltCard key={passion.title} className="h-full">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="glass rounded-2xl p-6 h-full flex flex-col"
                      >
                        <div className="text-4xl mb-4">{passion.icon}</div>
                        <h3 className="text-lg font-bold text-foreground mb-2">{passion.title}</h3>
                        <p className="text-muted-foreground text-sm flex-grow">{passion.description}</p>
                      </motion.div>
                    </TiltCard>
                  ))}
                </div>
              </section>
            </div>
          </div>
          <RightSidebar />
        </div>

        <CTASection />
      </PageTransition>
    </main>
  )
}
