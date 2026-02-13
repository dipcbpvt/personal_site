"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { SpotlightBg } from "@/components/spotlight-bg"
import { PageTransition } from "@/components/page-transition"
import { SectionHeader } from "@/components/section-header"
import { ExperienceCarousel } from "@/components/experience-carousel"
import { Capabilities } from "@/components/capabilities"
import { Briefcase, ExternalLink, Download, Zap, Wrench, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

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

const achievements = [
  { title: "ACM ICPC Participant", description: "Competed in regional programming contests" },
  { title: "Robotics Competitions", description: "Multiple participations with UIU Robotics" },
  { title: "3+ Years Experience", description: "Professional software development" },
  { title: "5+ Major Projects", description: "Successfully delivered enterprise solutions" },
]

const engineeringPrinciples = [
  "Clarity before execution",
  "Systems over shortcuts",
  "Simplicity before cleverness",
  "Automation where it creates leverage",
  "Documentation as design",
  "Predictability over speed",
  "Modular thinking",
  "Cost-aware engineering",
  "Observability as a requirement",
  "Consistency in decisions",
]

const systemsWorkedOn = [
  "Automation pipelines",
  "Payroll & finance workflows",
  "Access control & identity management",
  "Internal communication/chatbots",
  "Staff & capacity management systems",
  "Multi-module enterprise platforms",
  "Customer service dashboards",
  "Operational analytics",
  "IoT device interfaces",
  "API orchestration layers",
  "Support assistants",
  "Agentic AI systems",
  "CRM modules",
]

const toolsAndMethods = [
  "Requirement workshops",
  "Architecture diagrams",
  "System modeling",
  "SRS/PRD drafting",
  "Process design",
  "Decision logs",
  "CI/CD workflows",
  "Incident reviews",
  "API modeling",
  "Automation planning",
  "Monitoring dashboards",
]

export default function CareerPage() {
  return (
    <main className="relative min-h-screen bg-background">
      <SpotlightBg />
      <Navigation />
      <PageTransition>
        <div className="pt-32 pb-20">
          <div className="max-w-6xl mx-auto px-6">
            <SectionHeader
              label="Career"
              title="Professional Journey"
              description="Building software solutions and leading projects with passion and precision."
            />

            {/* Summary Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
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
                <div className="flex gap-3">
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

            {/* Capabilities Section */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <Capabilities />
            </motion.div>

            {/* Engineering Principles Section */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Lightbulb className="text-primary" size={20} />
                </div>
                <h2 className="text-2xl font-semibold text-foreground">Engineering Principles</h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {engineeringPrinciples.map((principle, index) => (
                  <motion.div
                    key={principle}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="glass rounded-lg p-4 border border-primary/10"
                  >
                    <p className="text-sm text-foreground font-medium">{principle}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Types of Systems Section */}
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

            {/* Tools & Methods Section */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Wrench className="text-primary" size={20} />
                </div>
                <h2 className="text-2xl font-semibold text-foreground">Tools & Methods I Use</h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {toolsAndMethods.map((tool, index) => (
                  <motion.div
                    key={tool}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="glass rounded-lg p-4 border border-primary/10"
                  >
                    <p className="text-sm text-foreground font-medium">{tool}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Experience Section */}
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
                <h2 className="text-2xl font-semibold text-foreground">Experience</h2>
              </div>
              <ExperienceCarousel items={experience} />
            </motion.div>
          </div>
        </div>
      </PageTransition>
    </main>
  )
}
