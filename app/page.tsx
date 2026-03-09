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
import { Heart, ExternalLink, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

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
        <div ref={containerRef} className="py-20 md:py-24">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader
              label="Purpose"
              title="The Story So Far"
              description="A journey from childhood curiosity and Iron Man dreams to building meaningful systems that connect people."
            />

            <div className="mt-16 space-y-20 md:space-y-24">
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
                  className="glass rounded-2xl p-6 md:p-8 space-y-6"
                >
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed"
                    style={{ textAlign: "justify", textJustify: "inter-word" }}
                  >
                    My curiosity about technology began in a place common to many tech enthusiasts - cinema. Growing up with films like The Matrix and Terminator introduced me to the idea that machines and intelligence could reshape the world. But it was Iron Man that made the idea feel personal. Tony Stark wasn't just a superhero - he was a builder. Constantly tweaking, upgrading, talking to his suit like it was his best friend. I was like… yeah, I wanna be that kind of person.
                  </p>

                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed"
                    style={{ textAlign: "justify", textJustify: "inter-word" }}
                  >
                    I was never the perfect student, but I have always been curious. Toward the end of high school, I began experimenting with programming. A dumb little Python thing that said "Yo what's good today" every time I booted my laptop. Nothing fancy, but seeing my own words pop up on screen felt straight-up magical. From there it was just non-stop tinkering: random automation hacks, some janky robotics attempts, whatever problem looked fun enough to poke at.
                  </p>

                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed"
                    style={{ textAlign: "justify", textJustify: "inter-word" }}
                  >
                    Over time I stopped seeing software as just code. To me, building systems feels closer to architecture or art. The best stuff isn't about who can write the tightest algorithm - it's about who actually gets what people need and why they'd ever trust the thing you made. The real question behind every system is simple: What human problem does this solve, and why would someone trust this solution?
                  </p>

                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed"
                    style={{ textAlign: "justify", textJustify: "inter-word" }}
                  >
                    Like many engineers, my path hasn't been smooth. There have been moments of frustration, underestimation, and professional struggles that forced me to ask uncomfortable questions about myself: What skills am I missing? What mindset separates builders from spectators? What does it truly mean to think like an engineer?
                  </p>

                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed"
                    style={{ textAlign: "justify", textJustify: "inter-word" }}
                  >
                    Those questions continue to shape how I learn and work. I may learn slowly and in small steps, but I prefer learning deeply - understanding why something works, how it works, and what its strengths and limitations are.
                  </p>

                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed"
                    style={{ textAlign: "justify", textJustify: "inter-word" }}
                  >
                    Tech moves insane fast. When I was little, a flip phone felt futuristic. Now we've got Generative and Agentic AIs that roast you, reason with you, write your emails, make applications. Wild!
                    While AI is advancing rapidly, fields like Human–Computer Interaction, AR/VR, robotics, and intelligent systems are redefining how humans and machines collaborate. For these technologies to truly transform everyday life, when the hardware gets cheaper, lighter, and reaches way more people. That's the part that keeps me up at night.
                  </p>

                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed"
                    style={{ textAlign: "justify", textJustify: "inter-word" }}
                  >
                    My goal is simple: build thoughtful tech that fixes real problems and makes the world feel a little more capable, enhance productivity, a little more connected. Even tiny wins count.
                  </p>

                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed"
                    style={{ textAlign: "justify", textJustify: "inter-word" }}
                  >
                    Outside of screens I'm still that guy geeking out over history docs, rewatching old movies, yelling at good cricket matches, blasting music way too loud.
                  </p>

                  <p className="text-base md:text-lg text-foreground font-medium leading-relaxed mt-8">
                    If any of this vibes with you, hit me up. Would be cool to chat.
                  </p>
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

              {/* Passions Section */}
              <section id="hobbies">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-2xl md:text-3xl font-semibold text-foreground mb-8"
                >
                  Passions & Interests
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mt-8 md:mt-12 text-muted-foreground leading-relaxed max-w-3xl"
                >
                  One day, I dream of stepping into filmmaking as a director. Stories have always fascinated
                  me-whether it's the narrative arc of a great war drama or the rhythm of classical music. Creating
                  visual stories that move people is a goal I'm working towards.
                </motion.p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
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

        {/* Process Section */}
        <div className="py-20 md:py-24">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader
              label="Process"
              title="Trajectory"
              description="Building sustainable systems through engineering, experimentation, and discipline"
            />

            {/* Summary Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass rounded-2xl p-6 md:p-8 mb-24 mt-16"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Dip Chakraborty</h3>
                  <p className="text-muted-foreground leading-relaxed max-w-2xl text-justify" style={{ textJustify: "inter-word" }}>
                    Innovative and deadline-driven Software Engineer with 3+ years of experience designing and
                    developing user-centered software solutions. Specializing in API and Progressive Web App
                    Development, adept in software design patterns with a focus on system-level architecture.
                  </p>
                </div>
                <div className="flex gap-3 flex-shrink-0">
                  <Button variant="outline" asChild className="gap-2 bg-transparent">
                    <Link href="https://dev.dipchakraborty.com" target="_blank">
                      <ExternalLink size={16} />
                      Portfolio
                    </Link>
                  </Button>
                  <Button className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                    <a href="/Dip_Chakraborty_Software_Engineer_4_Years_Experience.pdf" target="_blank" rel="noopener noreferrer">
                      <Download size={16} />
                      Resume
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Hero Image - from Process page */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative mb-24"
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

            {/* Capabilities Section */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-24"
            >
              <Capabilities />
            </motion.div>
          </div>

          {/* System Design Process - Flowchart Algorithm */}
          <div className="mb-24">
            <SystemDesignProcess />
          </div>

          {/* Career Timeline - after System Design Process */}
          <CareerTimeline />

          {/* Narrative Trajectory */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto px-6 mt-8 pb-32"
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
        </div>

        <CTASection />
      </PageTransition>
    </main>
  )
}
