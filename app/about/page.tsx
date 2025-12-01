"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { SpotlightBg } from "@/components/spotlight-bg"
import { PageTransition } from "@/components/page-transition"
import { SectionHeader } from "@/components/section-header"
import { AboutSidebar } from "@/components/about-sidebar"
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
              description="Technical leader passionate about building innovative products and fostering engineering excellence."
            />

            <div className="grid lg:grid-cols-[200px_1fr] gap-12">
              {/* Sticky Sidebar */}
              <div className="hidden lg:block">
                <AboutSidebar />
              </div>

              {/* Main Content */}
              <div className="space-y-24">
                {/* Introduction Section */}
                <section id="intro">
                  <motion.div className="relative mb-8">
                    <div className="relative aspect-[21/9] rounded-2xl overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 z-10" />
                      <Image
                        src="dip_working.png"
                        alt="Dip Chakraborty at work"
                        fill
                        className="object-cover brightness-110"
                      />
                    </div>
                    {/* Offset decorative element */}
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 glass rounded-xl -z-10" />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass rounded-2xl p-8"
                  >
                    <p className="text-lg text-muted-foreground leading-relaxed mb-4"
                      style={{ textAlign: "justify", textJustify: "inter-word" }}
                    >
                      <span className="text-foreground font-medium">Good engineering is not just about building software - its about creating systems that hold their shape under pressure.</span>{" "}
                      With that belief, my work sits at the crossroads of product strategy, system architecture, and innovation. 
                      I enjoy untangling ambiguous requirements, aligning teams around a clear direction, and shaping solutions that remain reliable long after version one. 
                      Whether it's architecting scalable systems, leading cross-functional teams, or integrating cutting-edge AI technologies, I bring both strategic thinking and hands-on expertise to every project. 
                      My approach emphasizes clarity in communication, simplicity in design, and predictable delivery of high-quality solutions.
                      
                      Over the years, I’ve contributed to platforms that power automation pipelines, access control systems, customer assistance tools, financial workflows, operational dashboards, and high-volume internal management systems. 
                      These projects demanded a mix of architectural clarity, practical engineering, and steady leadership across design, development, DevOps, automation, and process execution.
                      My approach is simple: create order, reduce noise, build scalable systems, and support the people who operate them.
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
                    me—whether it's the narrative arc of a great war drama or the rhythm of classical music. Creating
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
