"use client"

import { motion } from "framer-motion"
import { Lightbulb, Users, Network, Brain, Code, Cloud, Cpu, BookOpen, ChevronDown } from "lucide-react"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

const technicalFocus = [
  {
    title: "Platform & Systems Architecture",
    items: [
      "Built automation-heavy internal platforms",
      "Designed enterprise-grade API ecosystems",
      "Developed workflow orchestration systems",
      "Implemented access control and identity pipelines",
      "Focused on scalability, reliability, and maintainability",
    ],
  },
  {
    title: "Product Engineering & Delivery",
    items: [
      "Developed large-scale staff management systems",
      "Built integrated decision-support dashboards",
      "Implemented chatbot and communication layers",
      "Led products from concept to production",
      "Balanced speed with engineering discipline",
    ],
  },
  {
    title: "Technical Leadership & Coordination",
    items: [
      "Coordinated across multiple engineering teams",
      "Refined ambiguous and evolving requirements",
      "Modeled systems before implementation",
      "Guided engineers toward predictable delivery",
      "Established structured development processes",
    ],
  },
  {
    title: "Architecture–Execution Bridge",
    items: [
      "Provided architectural guidance and hands-on engineering",
      "Aligned business goals with technical systems",
      "Translated non-technical needs into solutions",
      "Set realistic technical expectations",
      "Ensured sustainable long-term delivery",
    ],
  },
]

const capabilityGroups = [
  {
    icon: <Lightbulb className="w-5 h-5" />,
    title: "Product Strategy & Design",
    items: [
      "Requirements analysis & feasibility studies",
      "Stakeholder alignment & discovery",
      "SRS/PRD creation & roadmapping",
      "UX direction & user research",
      "Market analysis & competitive positioning",
      "Product vision & go-to-market strategy",
    ],
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Engineering Leadership",
    items: [
      "Team allocation & resource planning",
      "Workflow standards & code review",
      "Sprint modeling & delivery tracking",
      "Mentoring & knowledge transfer",
      "Architecture reviews & technical decisions",
      "Team building & culture development",
    ],
  },
  {
    icon: <Network className="w-5 h-5" />,
    title: "System Architecture",
    items: [
      "Distributed systems design",
      "Microservices architecture",
      "Event-driven systems",
      "API design & integration patterns",
      "Database optimization & scaling",
      "System observability & monitoring",
    ],
  },
  {
    icon: <Brain className="w-5 h-5" />,
    title: "AI & Automation",
    items: [
      "LLM workflows & integration",
      "RAG pipelines & knowledge systems",
      "Process automation & optimization",
      "ML model integration",
      "Prompt engineering & optimization",
      "AI-powered feature development",
    ],
  },
  {
    icon: <Code className="w-5 h-5" />,
    title: "Full-Stack Development",
    items: [
      "Frontend frameworks & modern UX",
      "Backend frameworks & API development",
      "Database design & optimization",
      "Real-time systems & WebSockets",
      "Performance optimization & profiling",
      "Testing strategies & automation",
    ],
  },
  {
    icon: <Cloud className="w-5 h-5" />,
    title: "DevOps & Cloud",
    items: [
      "AWS infrastructure & deployment",
      "Docker & containerization",
      "CI/CD pipeline setup",
      "Infrastructure as code",
      "Cloud security & compliance",
      "Scaling & high availability",
    ],
  },
  {
    icon: <Cpu className="w-5 h-5" />,
    title: "IoT & Robotics",
    items: [
      "Embedded systems development",
      "IoT device integration",
      "Real-time sensor data processing",
      "Robotics control systems",
      "Hardware-software integration",
      "Edge computing & low-latency systems",
    ],
  },
  {
    icon: <BookOpen className="w-5 h-5" />,
    title: "Continuous Learning",
    items: [
      "Technology research & evaluation",
      "Industry best practices adoption",
      "Documentation & knowledge sharing",
      "Community engagement & open source",
      "Certification & skill development",
      "Staying current with tech trends",
    ],
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.02,
      delayChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.3 } },
}

export function Capabilities() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const [expandedTechnicalIndex, setExpandedTechnicalIndex] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
  }, [])

  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto space-y-16">


        {/* SECTION 2: Engineering Foundations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Engineering Foundations
          </h2>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-4"
          >
            {capabilityGroups.map((group, index) => (
              <motion.div key={group.title} variants={item} className="group">
                <button
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  className="w-full text-left"
                >
                  <motion.div
                    className="p-5 rounded-xl glass hover:bg-primary/5 transition-all cursor-pointer border border-border/50 group-hover:border-primary/20"
                    whileHover={{ y: -2 }}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3 flex-1">
                        <div className="text-primary/70 group-hover:text-primary transition-colors mt-0.5 flex-shrink-0">
                          {group.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground text-base">{group.title}</h3>
                        </div>
                      </div>
                      <ChevronDown
                        className={cn(
                          "w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300",
                          expandedIndex === index ? "rotate-180" : ""
                        )}
                      />
                    </div>

                    {/* Expanded content */}
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: expandedIndex === index ? 1 : 0,
                        height: expandedIndex === index ? "auto" : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 mt-4 border-t border-border/30 space-y-2">
                        {group.items.map((item, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{
                              opacity: expandedIndex === index ? 1 : 0,
                              x: expandedIndex === index ? 0 : -10,
                            }}
                            transition={{ delay: i * 0.05 }}
                            className="text-sm text-muted-foreground flex items-start gap-2"
                          >
                            <span className="text-primary/50 flex-shrink-0 mt-1">•</span>
                            <span>{item}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                </button>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
