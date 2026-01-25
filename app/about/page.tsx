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
import { CommunityCarousel } from "@/components/community-carousel"
import { SystemsCarousel } from "@/components/systems-carousel"
import { Heart, Briefcase, ExternalLink, Download, Zap, Cpu, Sparkles, Users } from "lucide-react"
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
    period: "2023 — Present",
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

const communityLeadership = [
  {
    title: "President",
    organization: "UIU Robotics",
    period: "2020 – 2022",
    subtitle:
      "A progression from trainee to president, shaped by increasing responsibility, technical ownership, and trust earned across levels, developing judgment in collaboration, decision-making under pressure, and aligning technical ambition with organizational reality.",
    description: [
      "Led a multidisciplinary student organization focused on robotics, embedded systems, and applied AI",
      "Initiated and scaled long-term projects aimed at structured skill development and hands-on engineering exposure",
      "Coordinated national-level competitions, internal workshops, and peer-mentoring initiatives",
    ],
    type: "community" as const,
  },
  {
    title: "Campus Lead",
    organization: "Meta Developer Circle (UIU)",
    period: "2020 – 2023",
    subtitle:
      "Led a campus-wide developer community by organizing conferences, hands-on sessions, and peer-led knowledge sharing around modern software practices, with direct exposure to evolving ecosystems such as React and PyTorch.",
    description: [
      "Organized F8 yearly conference, developer sessions, knowledge sharing meetups, and hands-on learning initiatives",
      "Fostered a peer-driven developer community focused on modern software practices",
    ],
    type: "community" as const,
  },
  {
    title: "Campus Trainer",
    organization: "Arduino",
    period: "2022",
    subtitle:
      "Delivered hands-on training on Arduino and embedded systems, guiding participants from theory to working prototypes with a strong focus on practical debugging, sensor integration, and system-level thinking.",
    description: [
      "Conducted practical training sessions on Arduino and embedded systems development",
      "Guided participants through hands-on prototyping with focus on debugging and sensor integration",
    ],
    type: "community" as const,
  },
  {
    title: "Executive Member",
    organization: "Bangladesh Robotics Foundation",
    period: "2024",
    subtitle:
      "Supported the planning and execution of robotics and STEM outreach programs, contributing to community engagement, coordination efforts, and the promotion of applied robotics education.",
    description: [
      "Contributed to robotics and STEM outreach program planning and execution",
      "Supported community engagement and promotion of applied robotics education",
    ],
    type: "community" as const,
  },
]

const systemsWorkedOn = [
  {
    title: "Automation Pipelines",
    description:
      "Designed event-driven automation pipelines to replace manual operational workflows, supporting high-volume internal operations. Reduced repetitive human actions by ~60–70%, shortened turnaround time across critical flows, and enabled teams to scale operations without proportional headcount growth.",
  },
  {
    title: "Payroll & Finance Workflows",
    description:
      "Built RBAC-based payroll workflows for 20,000+ users, driven by attendance data with multi-level approvals, notifications, and audit-friendly controls. Improved payout accuracy, reduced payroll disputes, and made financial operations traceable, compliant, and safe to evolve at scale.",
  },
  {
    title: "Access Control & Identity Management",
    description:
      "Designed a physical access control system using RFID-based devices for a corporate client with 2,000+ daily users. Centralized identity mapping and device synchronization reduced operational costs by ~40% and significantly lowered system-error-related support requests compared to legacy vendor solutions.",
  },
  {
    title: "Customer Purchase & Support Assistant Platform",
    description:
      "Built conversational platforms for renowned telecom clients, serving 10,000+ users and handling millions of queries. Integrated payment gateways and RAG-based pipelines, achieving ~90% response accuracy and reducing human support effort by ~20% across customer purchase and support flows.",
  },
  {
    title: "Staff & Capacity Management Systems",
    description:
      "Developed staff and capacity management systems used by 300+ daily users, enabling visibility into attendance, workload, and allocation. Improved planning accuracy, reduced last-minute scheduling conflicts, and supported more predictable operational decision-making.",
  },
  {
    title: "Multi-Module Enterprise Platforms",
    description:
      "Worked on SaaS-based, multi-module enterprise platforms designed for long-term extensibility. Established clear module boundaries and shared primitives, enabling independent feature evolution while keeping the overall system stable, maintainable, and scalable.",
  },
  {
    title: "IoT Device Interfaces",
    description:
      "Built backend interfaces for IoT devices handling asynchronous events, unreliable connectivity, and device state synchronization. Improved system resilience in real-world conditions and reduced manual intervention during device failures and recovery scenarios.",
  },
  {
    title: "API Orchestration Layers",
    description:
      "Designed API orchestration layers coordinating workflows across internal services and third-party integrations. Simplified client logic, reduced duplicated business rules, and improved fault isolation and observability across multi-step operational flows.",
  },
  {
    title: "Support Assistants",
    description:
      "Developed voice- and video-based support assistants using an agentic approach to guide users through complex systems. Reduced onboarding time, lowered dependency on human support, and improved user comprehension of workflows through guided, contextual interactions.",
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
                        src="/dip_working.png"
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
                        <p className="text-muted-foreground leading-relaxed max-w-2xl text-justify">
                          Software engineer with 4+ years of building things that actually work, even when everything around them keeps changing. Focused on designing solid systems and shipping reliable APIs and web platforms in messy, real-world environments where requirements are a moving target. Hands-on experience spans automation, robotics, IoT, and data-heavy backends. Lately, work has been focused at the intersection of AI, physical robots, and decentralized systems, where these ideas move beyond hype and become useful products for real people.
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

                {/* Community Leadership & Volunteering Section */}
                <section id="community">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-20"
                  >
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Users className="text-primary" size={20} />
                      </div>
                      <h2 className="text-2xl font-semibold text-foreground">Community Leadership & Volunteering</h2>
                    </div>
                    <CommunityCarousel items={communityLeadership} />
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
                    <SystemsCarousel items={systemsWorkedOn} />
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
                        <p className="text-sm text-muted-foreground text-justify">{passion.description}</p>
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
