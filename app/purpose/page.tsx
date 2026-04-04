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
                      My curiosity about technology began in a place common to many tech enthusiasts - cinema. Growing up with films like The Matrix and Terminator introduced me to the idea that machines and intelligence could reshape the world. But it was Iron Man that made the idea feel personal. Tony Stark wasn’t just a superhero - he was a builder. Constantly tweaking, upgrading, talking to his suit like it was his best friend. I was like… yeah, I wanna be that kind of person.
                    </p>

                    <p className="text-lg text-muted-foreground leading-relaxed"
                      style={{ textAlign: "justify", textJustify: "inter-word" }}
                    >
                      I was never the perfect student, but I have always been curious. Toward the end of high school, I began experimenting with programming. A dumb little Python thing that said “Yo what’s good today” every time I booted my laptop. Nothing fancy, but seeing my own words pop up on screen felt straight-up magical. From there it was just non-stop tinkering: random automation hacks, some janky robotics attempts, whatever problem looked fun enough to poke at.
                    </p>

                    <p className="text-lg text-muted-foreground leading-relaxed"
                      style={{ textAlign: "justify", textJustify: "inter-word" }}
                    >
                      Over time I stopped seeing software as just code. To me, building systems feels closer to architecture or art. The best stuff isn’t about who can write the tightest algorithm - it’s about who actually gets what people need and why they’d ever trust the thing you made. The real question behind every system is simple: What human problem does this solve, and why would someone trust this solution?
                    </p>

                    <p className="text-lg text-muted-foreground leading-relaxed"
                      style={{ textAlign: "justify", textJustify: "inter-word" }}
                    >
                      Like many engineers, my path hasn’t been smooth. There have been moments of frustration, underestimation, and professional struggles that forced me to ask uncomfortable questions about myself: What skills am I missing? What mindset separates builders from spectators? What does it truly mean to think like an engineer?
                    </p>

                    <p className="text-lg text-muted-foreground leading-relaxed"
                      style={{ textAlign: "justify", textJustify: "inter-word" }}
                    >
                      Those questions continue to shape how I learn and work. I may learn slowly and in small steps, but I prefer learning deeply - understanding why something works, how it works, and what its strengths and limitations are.
                    </p>

                    <p className="text-lg text-muted-foreground leading-relaxed"
                      style={{ textAlign: "justify", textJustify: "inter-word" }}
                    >
                      Tech moves insane fast. When I was little, a flip phone felt futuristic. Now we’ve got Generative and Agentic AIs that roast you, reason with you, write your emails, make applications. Wild!
                      While AI is advancing rapidly, fields like Human–Computer Interaction, AR/VR, robotics, and intelligent systems are redefining how humans and machines collaborate. For these technologies to truly transform everyday life, when the hardware gets cheaper, lighter, and reaches way more people. That’s the part that keeps me up at night.
                    </p>

                    <p className="text-lg text-muted-foreground leading-relaxed"
                      style={{ textAlign: "justify", textJustify: "inter-word" }}
                    >
                      My goal is simple: build thoughtful tech that fixes real problems and makes the world feel a little more capable, enhance productivity, a little more connected. Even tiny wins count.
                    </p>

                    <p className="text-lg text-muted-foreground leading-relaxed"
                      style={{ textAlign: "justify", textJustify: "inter-word" }}
                    >
                      Outside of screens I’m still that guy geeking out over history docs, rewatching old movies, yelling at good cricket matches, blasting music way too loud.
                    </p>

                    <p className="text-lg text-foreground font-medium leading-relaxed mt-8">
                      If any of this vibes with you, hit me up. Would be cool to chat.
                    </p>
                  </motion.div>
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
