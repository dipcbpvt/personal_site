"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { SpotlightBg } from "@/components/spotlight-bg"
import { PageTransition } from "@/components/page-transition"
import { SectionHeader } from "@/components/section-header"
import { PurposeSidebar } from "@/components/purpose-sidebar"
import { Heart } from "lucide-react"

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

import { ThreeBackground } from "@/components/three-background"

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <main className="relative min-h-screen bg-background">
      <SpotlightBg />
      <ThreeBackground />
      <Navigation />
      <PageTransition>
        <div ref={containerRef} className="pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader
              label="Purpose"
              title="The Story So Far"
              description="A journey from childhood curiosity and Iron Man dreams to building meaningful systems that connect people."
            />

            <div className="grid lg:grid-cols-[200px_1fr] gap-12">
              {/* Sticky Sidebar */}
              <div className="hidden lg:block">
                <PurposeSidebar />
              </div>

              {/* Main Content */}
              <div className="space-y-24">
                {/* Introduction Section */}
                <section id="intro">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative mb-12"
                  >
                    <div className="relative aspect-[16/10] md:aspect-[16/7] rounded-2xl overflow-hidden shadow-2xl">
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
                    <div className="absolute -bottom-4 -right-4 w-32 h-32 glass rounded-xl -z-10 opacity-50" />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass rounded-2xl p-8 space-y-6"
                  >
                    <p className="text-lg text-muted-foreground leading-relaxed"
                      style={{ textAlign: "justify", textJustify: "inter-word" }}
                    >
                      Growing up in a home filled with song, where my family practiced music together and I happily joined in, I was always a bit of a dreamer. As a kid, I was obsessed with sports, chasing every game and match I could find. But movies? They hit differently. They made me pause, reflect, and see life from fresh angles.
                      Science fascinated me, though not in the classic “become a doctor or engineer” way. Through SSC and HSC in the science group, I chased curiosity more than a fixed career path—what made things work, what hidden magic lay in the world around us?
                    </p>

                    <div className="py-4">
                      <h4 className="text-2xl font-bold text-foreground">Then came Iron Man</h4>
                    </div>

                    <p className="text-lg text-muted-foreground leading-relaxed"
                      style={{ textAlign: "justify", textJustify: "inter-word" }}
                    >
                      Watching Tony Stark on screen changed everything. His wit, his relentless problem solving, that sleek suit powered by ingenuity… but most of all, JARVIS. The idea of building my own intelligent companion one that understood me, anticipated needs, and turned ideas into reality, lit a fire. I wanted to create something like that. Not just a tool, but a partner. Tony wasn’t only a hero, he was a builder, an inventor who turned problems into solutions people would actually want. That mindset stuck.
                    </p>

                    <p className="text-lg text-muted-foreground leading-relaxed"
                      style={{ textAlign: "justify", textJustify: "inter-word" }}
                    >
                      At around 12th grade, I dipped my toes into programming as a hobby. My first lines of Python printed a simple welcome message that felt like magic on the screen. From there, I experimented trying to automate a basic water meter with robotics ideas, tinkering with whatever small project excited me.
                    </p>

                    <p className="text-lg text-muted-foreground leading-relaxed"
                      style={{ textAlign: "justify", textJustify: "inter-word" }}
                    >
                      Over time, I started seeing software differently, not as cold code, but as art. Like painting or music, programming lets you connect deeply with people. The more creative you are in solving real human needs, the more beautiful and valuable the result becomes.
                      I approach every challenge with the same lens: What problem does this solve? Why would someone choose this solution? I think of systems the way I think of life—interconnected, evolving, full of potential.
                    </p>

                    <p className="text-lg text-muted-foreground leading-relaxed"
                      style={{ textAlign: "justify", textJustify: "inter-word" }}
                    >
                      Alongside code, I stay hungry for history, art, sports, and stories. I love turning what I learn into lessons for others—whether teaching, writing, or simply sharing ideas that spark something in someone else. Today, I’m still that curious kid who got hooked on a movie, but now I channel it into building meaningful things.
                    </p>

                    <p className="text-lg text-foreground font-medium leading-relaxed mt-8">
                      If you’re reading this, maybe we share that same spark. I’d love to connect, collaborate, or just chat about ideas. Thanks for taking the time to read my story. Let’s create something great together.
                    </p>
                  </motion.div>
                </section>

                {/* Philosophy Section */}
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

                {/* Passions Section */}
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
                        <div className="text-2xl mb-4">{passion.icon}</div>
                        <h4 className="font-semibold text-foreground mb-1">{passion.title}</h4>
                        <p className="text-sm text-muted-foreground">{passion.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </PageTransition>
    </main>
  )
}
