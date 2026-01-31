"use client"

import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { PageTransition } from "@/components/page-transition"

// Lazy load spotlight background
const SpotlightBg = dynamic(() => import("@/components/spotlight-bg").then(mod => ({ default: mod.SpotlightBg })), {
  ssr: false,
  loading: () => null,
})
import { SectionHeader } from "@/components/section-header"
import { ExperienceCarousel } from "@/components/experience-carousel"
import { CommunityCarousel } from "@/components/community-carousel"
import { SystemsCarousel } from "@/components/systems-carousel"
import { Briefcase, Users, Zap, ExternalLink, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ExperienceSidebar } from "@/components/experience-sidebar"

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

export default function ExperiencePage() {
    const containerRef = useRef<HTMLDivElement>(null)

    return (
        <main className="relative min-h-screen bg-background">
            <SpotlightBg />
            <Navigation />
            <PageTransition>
                <div ref={containerRef} className="pt-32 pb-20">
                    <div className="max-w-7xl mx-auto px-6">
                        <SectionHeader
                            label="Experience"
                            title="Building Things That Work"
                            description="A journey through professional work, community leadership, and the systems that shaped my engineering perspective."
                        />

                        <div className="grid lg:grid-cols-[200px_1fr] gap-12">
                            {/* Sticky Sidebar */}
                            <div className="hidden lg:block">
                                <ExperienceSidebar />
                            </div>

                            {/* Main Content */}
                            <div className="space-y-24">
                                {/* About Summary */}
                                <section id="intro">
                                    <motion.div
                                        initial={{ opacity: 0, x: -60 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        className="relative mb-8"
                                    >
                                        <div className="relative aspect-[21/9] md:aspect-[16/5] rounded-2xl overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 z-10" />
                                            <Image
                                                src="/dip_working.png"
                                                alt="Dip Chakraborty at work - Software Engineer"
                                                fill
                                                priority={false}
                                                quality={80}
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                                                className="object-cover brightness-110"
                                                loading="lazy"
                                            />
                                        </div>
                                        {/* Offset decorative element */}
                                        <div className="absolute -bottom-6 -right-6 w-32 h-32 glass rounded-xl -z-10" />
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, x: -60 }}
                                        whileInView={{ opacity: 1, x: 0 }}
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
                                        initial={{ opacity: 0, x: -60 }}
                                        whileInView={{ opacity: 1, x: 0 }}
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
                                        initial={{ opacity: 0, x: -60 }}
                                        whileInView={{ opacity: 1, x: 0 }}
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
                                        initial={{ opacity: 0, x: -60 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        className="mb-16"
                                    >
                                        <div className="flex items-center gap-3 mb-8">
                                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                                                <Zap className="text-primary" size={20} />
                                            </div>
                                            <h2 className="text-2xl font-semibold text-foreground">Systems & Architectures</h2>
                                        </div>
                                        <SystemsCarousel items={systemsWorkedOn} />
                                    </motion.div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </PageTransition>
        </main>
    )
}
