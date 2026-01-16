"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { SpotlightBg } from "@/components/spotlight-bg"
import { PageTransition } from "@/components/page-transition"
import { SectionHeader } from "@/components/section-header"
import { AboutSidebar } from "@/components/about-sidebar"
import { ExperienceCarousel } from "@/components/experience-carousel"
import { Heart, Briefcase, ExternalLink, Download, Zap, Cpu, Sparkles } from "lucide-react"
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

const experience = [
  {
    title: "Software Engineer",
    organization: "PreneurLab Digital",
    period: "2022 — Present",
    description:
      "Lead the design, development, and implementation of core software products. Delegate tasks and provide counsel on all aspects of projects. Supervise code assessment to ensure quality and accuracy. Work directly with clients on requirements, SRS documents, and project plans.",
    tags: ["Laravel", "React", "Node.js", "AWS", "Project Management"],
    type: "work" as const,
  },
  {
    title: "Software Engineer",
    organization: "IftiSoft",
    period: "2019 — 2021",
    description:
      "Managed up to 5 projects simultaneously while meeting tight deadlines. Consulted with clients on optimal system design approaches. Created multiple presentations and proposals monthly for stakeholders.",
    tags: ["PHP", "JavaScript", "MySQL", "System Design"],
    type: "work" as const,
  },
]

const systemsWorkedOn = [
  "Automation pipelines",
  "Payroll & finance workflows",
  "Access control & identity management",
  "Chatbots",
  "Staff & capacity management systems",
  "Multi-module enterprise platforms",
  "Customer service dashboards",
  "Operational analytics",
  "IoT device interfaces",
  "API orchestration layers",
  "Support assistants",
  "CRM modules",
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
                {/* Banner Image - Half Height */}
                <section id="intro">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative mb-8"
                  >
                    <div className="relative aspect-[21/9] md:aspect-[16/5] rounded-2xl overflow-hidden">
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

                  {/* Summary Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="glass rounded-2xl p-8 mb-16"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-3">Dip Chakraborty</h3>
                        <p className="text-muted-foreground leading-relaxed max-w-2xl">
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
                        <Button className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                          <Download size={16} />
                          Resume
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* Professional Experience Section */}
                <section id="experience">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-20"
                  >
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Briefcase className="text-primary" size={20} />
                      </div>
                      <h2 className="text-2xl font-semibold text-foreground">Professional Experience</h2>
                    </div>
                    <ExperienceCarousel items={experience} />
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
                        Good engineering is not just about shipping software; it's about designing systems that preserve structure under pressure. My work operates at the intersection of product strategy, system architecture, and execution—translating ambiguous requirements into durable, scalable solutions. I focus on architectural clarity, simplicity of design, and predictable delivery, combining strategic thinking with hands-on engineering. Across automation platforms, access control systems, financial workflows, internal tooling, and high-volume operational systems, I've worked end-to-end: shaping direction, aligning teams, and ensuring systems remain reliable well beyond version one.
                      </p>
                      <p style={{ textAlign: "justify", textJustify: "inter-word" }}>
                        My engineering practice centers on building technology that supports real operations. I've led and contributed to automation-heavy internal platforms, enterprise APIs, workflow orchestration systems, identity and access pipelines, chatbot and communication layers, and decision-making dashboards. These efforts required system modeling, cross-team coordination, and translating business intent into executable architecture. My role typically blends architectural guidance, direct implementation, and process structuring—aligning technical teams and non-technical stakeholders toward the same outcome: dependable systems, scalable design, and calm, high-quality execution.
                      </p>
                    </div>
                  </motion.div>
                </section>

                {/* Types of Systems Section */}
                <section id="systems">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-16"
                  >
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Zap className="text-primary" size={20} />
                      </div>
                      <h2 className="text-2xl font-semibold text-foreground">Types of Systems I've Worked On</h2>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {systemsWorkedOn.map((system, index) => (
                        <motion.div
                          key={system}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.05 }}
                          className="glass rounded-lg p-4 border border-primary/10 hover:bg-primary/5 transition-all"
                        >
                          <p className="text-sm text-foreground font-medium">{system}</p>
                        </motion.div>
                      ))}
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
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
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
                    className="mb-8 text-muted-foreground leading-relaxed"
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
