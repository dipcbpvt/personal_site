"use client"

import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { PageTransition } from "@/components/page-transition"

// Lazy load spotlight background
const SpotlightBg = dynamic(() => import("@/components/spotlight-bg").then(mod => ({ default: mod.SpotlightBg })), {
  ssr: false,
  loading: () => null,
})
import { SectionHeader } from "@/components/section-header"
import { Heart, Cpu, Sparkles } from "lucide-react"

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

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <main className="relative min-h-screen bg-background">
      <SpotlightBg />
      <Navigation />
      <PageTransition>
        <div ref={containerRef} className="pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader
              label="About"
              title="The Story So Far"
            // description="Technical leader passionate about building innovative products and fostering engineering excellence."
            />

            <div className="space-y-24">
              {/* Banner Image - Removed */}
              <section id="intro">
                {/* Summary Card */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="glass rounded-2xl p-8 mb-16"
                >
                  {/* <h3 className="text-xl font-semibold text-foreground mb-3">Dip Chakraborty</h3> */}
                  <p className="text-muted-foreground leading-relaxed text-justify">
                    Growing up in a home filled with song, where my family practiced music together and I happily joined in, I was always a bit of a dreamer. As a kid, I was obsessed with sports, chasing every game and match I could find. But movies? They hit differently. They made me pause, reflect, and see life from fresh angles.
                    <br />
                    Science fascinated me, though not in the classic “become a doctor or engineer” way. Through SSC and HSC in the science group, I chased curiosity more than a fixed career path-what made things work, what hidden magic lay in the world around us?
                    <br /><br />
                    Then came Iron Man!
                    <br /><br />
                    Watching Tony Stark on screen changed everything. His wit, his relentless problem solving, that sleek suit powered by ingenuity… but most of all, JARVIS. The idea of building my own intelligent companion one that understood me, anticipated needs, and turned ideas into reality, lit a fire. I wanted to create something like that. Not just a tool, but a partner. Tony wasn’t only a hero, he was a builder, an inventor who turned problems into solutions people would actually want. That mindset stuck.
                    <br /><br />
                    At around 12th grade, I dipped my toes into programming as a hobby. My first lines of Python printed a simple welcome message that felt like magic on the screen. From there, I experimented trying to automate a basic water meter with robotics ideas, tinkering with whatever small project excited me.
                    <br /><br />
                    Over time, I started seeing software differently, not as cold code, but as art. Like painting or music, programming lets you connect deeply with people. The more creative you are in solving real human needs, the more beautiful and valuable the result becomes.
                    <br />
                    I approach every challenge with the same lens: What problem does this solve? Why would someone choose this solution? I think of systems the way I think of life - interconnected, evolving, full of potential.
                    <br /><br />
                    Alongside code, I stay hungry for history, art, sports, and stories. I love turning what I learn into lessons for others - whether teaching, writing, or simply sharing ideas that spark something in someone else.
                    Today, I’m still that curious kid who got hooked on a movie, but now I channel it into building meaningful things.
                    <br /><br />
                    If you’re reading this, maybe we share that same spark. I’d love to connect, collaborate, or just chat about ideas.
                    Thanks for taking the time to read my story.
                    Let’s create something great together.
                  </p>
                </motion.div>
              </section>

              {/* Technical Product Engineering Capabilities */}
              <section id="capabilities">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="glass rounded-2xl p-8 mb-16"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Cpu className="text-primary" size={20} />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground">
                      Technical Product Engineering Capabilities
                    </h3>
                  </div>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p style={{ textAlign: "justify", textJustify: "inter-word" }}>
                      I’m biased toward automation. I tend to automate anything repetitive, from backend workflows to everyday operational tools. I care about solving real problems, user's painpoints and getting products into the real world. Most of my work lives at the intersection of software, hardware, and operations, often before requirements are clean or fully agreed upon.
                    </p>
                    <p style={{ textAlign: "justify", textJustify: "inter-word" }}>
                      I’m good at turning ambiguity into structure: modeling real-world constraints, designing architectures that are feasible and durable, and planning execution so systems actually ship. I don’t obsess over tools, AI can handle plenty of them. But I do obsess over edge cases, failure modes, and whether a system will stay calm under pressure.
                    </p>
                    <p style={{ textAlign: "justify", textJustify: "inter-word" }}>
                      I’ve worked across automation platforms, robotic navigation and aerospace-adjacent systems, physical access control and identity pipelines, workflow orchestration, and internal operational tooling. I usually operate as a product-minded engineer: shaping direction early, building core systems hands-on, and using clear documentation, visual thinking, and straightforward explanations to align people so what ships keeps working beyond version one.
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
                  className="text-2xl font-semibold text-foreground mb-12 flex items-center gap-3"
                >
                  <Heart className="text-primary" size={24} />
                  Philosophy & Values
                </motion.h3>

                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Continuous Learning",
                      text: "Technology evolves rapidly. I embrace change and constantly update my skills to stay at the forefront of innovation.",
                    },
                    {
                      title: "User-Centered Design",
                      text: "Every line of code should serve a purpose. I build solutions that truly solve problems for real people.",
                    },
                    {
                      title: "Quality Over Quantity",
                      text: "I believe in writing clean, maintainable code. Taking time to do things right pays dividends in the long run.",
                    },
                    {
                      title: "Collaboration",
                      text: "The best solutions come from diverse perspectives. I value teamwork and open, transparent communication.",
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
                      <p className="text-sm text-muted-foreground leading-relaxed text-justify">{item.text}</p>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* Passions Section */}
              <section id="hobbies">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 mb-8"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Sparkles className="text-primary" size={20} />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">
                    Passions & Interests
                  </h3>
                </motion.div>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-8 text-muted-foreground leading-relaxed text-justify"
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
                      <p className="text-sm text-muted-foreground text-justify">{passion.description}</p>
                    </motion.div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </PageTransition>
    </main >
  )
}
