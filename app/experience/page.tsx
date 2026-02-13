"use client"

import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { PageTransition } from "@/components/page-transition"
import { SectionHeader } from "@/components/section-header"
import {
    Briefcase, Trophy, GraduationCap, Users,
    Rocket, Code, Cpu, Network, Award, Target
} from "lucide-react"

const SpotlightBg = dynamic(() => import("@/components/spotlight-bg").then(mod => ({ default: mod.SpotlightBg })), {
    ssr: false,
    loading: () => null,
})

interface ExperienceItem {
    title: string
    organization: string
    period: string
    location?: string
    description: string[]
    impact?: string
    technologies?: string[]
    category: "professional" | "leadership" | "research" | "competition" | "systems"
}

const experiences: ExperienceItem[] = [
    {
        title: "Software Engineer",
        organization: "Professional Experience",
        period: "2023 - Present",
        category: "professional",
        description: [
            "Building automation platforms and operational tools that streamline workflows and reduce manual overhead",
            "Designing architectures for workflow orchestration, physical access control, and identity pipelines",
            "Operating as a product-minded engineer—shaping direction early, building core systems hands-on",
            "Using clear documentation and visual thinking to align teams and ensure systems work beyond version one",
        ],
        impact: "Delivered production systems handling real-world operational complexity with focus on durability and edge case handling",
        technologies: ["Python", "TypeScript", "System Design", "Workflow Orchestration", "API Design"],
    },
    {
        title: "Co-Founder & Team Lead",
        organization: "UIU Mars Rover Team",
        period: "2019 - 2022",
        location: "United International University",
        category: "leadership",
        description: [
            "Founded and led UIU's first Mars Rover team, coordinating cross-functional engineering efforts",
            "Managed autonomous navigation, robotic arm control, and computer vision subsystems",
            "Built team culture focused on hands-on experimentation, rapid iteration, and learning from failure",
            "Represented the team in national and international aerospace robotics competitions",
        ],
        impact: "Established a sustainable robotics program that continues to inspire new students and compete successfully",
    },
    {
        title: "Research Assistant",
        organization: "Autonomous Systems Lab",
        period: "2020 - 2022",
        location: "United International University",
        category: "research",
        description: [
            "Conducted research in autonomous navigation, computer vision, and sensor fusion",
            "Developed algorithms for real-time object detection and path planning in constrained environments",
            "Published findings and presented at academic conferences",
            "Collaborated with faculty and peers on multi-disciplinary robotics projects",
        ],
        impact: "Contributed to advancing understanding of autonomous systems in resource-constrained settings",
        technologies: ["Python", "OpenCV", "ROS", "Machine Learning", "Sensor Fusion"],
    },
    {
        title: "Startup Experimentation",
        organization: "Independent Projects",
        period: "2021 - 2023",
        category: "systems",
        description: [
            "Explored multiple startup ideas focused on automation, IoT, and real-world problem solving",
            "Learned product-market fit validation, customer discovery, and rapid prototyping",
            "Built MVPs for workflow automation tools and smart home solutions",
            "Gained deep understanding of what makes products people actually want to use",
        ],
        impact: "Developed product thinking and user-centered design mindset that informs all current work",
    },
    {
        title: "Robotics Competitions",
        organization: "Various National & International Events",
        period: "2018 - 2022",
        category: "competition",
        description: [
            "Competed in University Rover Challenge (URC), European Rover Challenge (ERC), and national robotics competitions",
            "Designed and built autonomous rovers capable of navigation, manipulation, and scientific tasks",
            "Collaborated with teams under tight deadlines and resource constraints",
            "Presented technical designs and defended engineering decisions to judges",
        ],
        impact: "Developed resilience, rapid problem-solving skills, and ability to perform under pressure",
    },
    {
        title: "Community Leadership",
        organization: "UIU Robotics Club & Tech Communities",
        period: "2018 - 2022",
        category: "leadership",
        description: [
            "Led workshops on robotics, programming, and system design for students",
            "Mentored junior members in technical skills and project management",
            "Organized hackathons, tech talks, and collaborative learning sessions",
            "Built inclusive community culture that welcomed beginners and encouraged experimentation",
        ],
        impact: "Empowered dozens of students to pursue careers in robotics and software engineering",
    },
]

const categoryConfig = {
    professional: {
        icon: Briefcase,
        label: "Professional Experience",
        color: "from-blue-500/10 to-cyan-500/10",
        border: "border-blue-500/30",
    },
    leadership: {
        icon: Users,
        label: "Leadership & Community",
        color: "from-orange-500/10 to-amber-500/10",
        border: "border-orange-500/30",
    },
    research: {
        icon: GraduationCap,
        label: "Research & Academia",
        color: "from-purple-500/10 to-violet-500/10",
        border: "border-purple-500/30",
    },
    competition: {
        icon: Trophy,
        label: "Competitions & Achievements",
        color: "from-green-500/10 to-emerald-500/10",
        border: "border-green-500/30",
    },
    systems: {
        icon: Cpu,
        label: "Systems & Architecture",
        color: "from-pink-500/10 to-rose-500/10",
        border: "border-pink-500/30",
    },
}

const coreCompetencies = [
    {
        icon: Code,
        title: "Product Engineering",
        skills: ["Full-stack Development", "API Design", "System Architecture", "Database Design"],
    },
    {
        icon: Network,
        title: "Automation & Orchestration",
        skills: ["Workflow Automation", "CI/CD Pipelines", "Infrastructure as Code", "Process Optimization"],
    },
    {
        icon: Rocket,
        title: "Robotics & IoT",
        skills: ["Autonomous Navigation", "Computer Vision", "Sensor Integration", "Embedded Systems"],
    },
    {
        icon: Target,
        title: "Product Thinking",
        skills: ["User Research", "MVP Development", "Problem Validation", "Iterative Design"],
    },
]

export default function ExperiencePage() {
    return (
        <main className="relative min-h-screen bg-background">
            <SpotlightBg />
            <Navigation />
            <PageTransition>
                <div className="pt-32 pb-20">
                    <div className="max-w-7xl mx-auto px-6">
                        <SectionHeader
                            label="Experience"
                            title="Building, Leading, Creating"
                            description="A track record of shipping systems, leading teams, and solving real-world problems through technology."
                        />

                        <div className="space-y-24">
                            {/* Core Competencies */}
                            <section id="competencies">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="space-y-8"
                                >
                                    <div className="text-center space-y-3">
                                        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                                            Core Competencies
                                        </h2>
                                        <p className="text-muted-foreground max-w-2xl mx-auto">
                                            Technical skills and domain expertise developed through hands-on work
                                        </p>
                                    </div>

                                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                        {coreCompetencies.map((competency, index) => (
                                            <motion.div
                                                key={competency.title}
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: index * 0.1 }}
                                                className="glass rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 group"
                                            >
                                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                                    <competency.icon className="text-primary" size={24} />
                                                </div>
                                                <h3 className="text-lg font-semibold text-foreground mb-3">
                                                    {competency.title}
                                                </h3>
                                                <ul className="space-y-2">
                                                    {competency.skills.map((skill) => (
                                                        <li key={skill} className="text-sm text-muted-foreground flex items-start">
                                                            <span className="text-primary mr-2">•</span>
                                                            <span>{skill}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            </section>

                            {/* Professional Journey */}
                            <section id="journey">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="space-y-8"
                                >
                                    <div className="text-center space-y-3">
                                        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                                            Professional Journey
                                        </h2>
                                        <p className="text-muted-foreground max-w-2xl mx-auto">
                                            Key roles, projects, and achievements that define my career
                                        </p>
                                    </div>

                                    <div className="space-y-8">
                                        {experiences.map((exp, index) => {
                                            const config = categoryConfig[exp.category]
                                            const Icon = config.icon

                                            return (
                                                <motion.div
                                                    key={`${exp.organization}-${index}`}
                                                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: index * 0.1 }}
                                                    className={`glass rounded-3xl p-8 md:p-10 border-2 bg-gradient-to-br ${config.color} ${config.border} hover:border-primary/40 transition-all duration-500`}
                                                >
                                                    {/* Header */}
                                                    <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
                                                        <div className="flex items-start gap-4 flex-1">
                                                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                                                <Icon className="text-primary" size={28} />
                                                            </div>
                                                            <div>
                                                                <h3 className="text-2xl font-bold text-foreground mb-1">
                                                                    {exp.title}
                                                                </h3>
                                                                <p className="text-lg text-muted-foreground font-medium">
                                                                    {exp.organization}
                                                                </p>
                                                                {exp.location && (
                                                                    <p className="text-sm text-muted-foreground">
                                                                        {exp.location}
                                                                    </p>
                                                                )}
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <span className="px-4 py-2 rounded-full text-sm font-medium glass border border-primary/20">
                                                                {exp.period}
                                                            </span>
                                                        </div>
                                                    </div>

                                                    {/* Description */}
                                                    <div className="space-y-4 mb-6">
                                                        <ul className="space-y-3">
                                                            {exp.description.map((item, i) => (
                                                                <li key={i} className="text-muted-foreground flex items-start gap-3">
                                                                    <span className="text-primary mt-1.5 flex-shrink-0">▸</span>
                                                                    <span className="text-justify leading-relaxed">{item}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>

                                                    {/* Impact */}
                                                    {exp.impact && (
                                                        <div className="glass rounded-xl p-4 mb-6 border border-primary/20">
                                                            <div className="flex items-start gap-3">
                                                                <Award className="text-primary flex-shrink-0 mt-0.5" size={20} />
                                                                <div>
                                                                    <p className="text-sm font-semibold text-foreground mb-1">Impact</p>
                                                                    <p className="text-sm text-muted-foreground text-justify">{exp.impact}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}

                                                    {/* Technologies */}
                                                    {exp.technologies && (
                                                        <div className="flex flex-wrap gap-2">
                                                            {exp.technologies.map((tech) => (
                                                                <span
                                                                    key={tech}
                                                                    className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                                                                >
                                                                    {tech}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    )}
                                                </motion.div>
                                            )
                                        })}
                                    </div>
                                </motion.div>
                            </section>

                            {/* Key Achievements Summary */}
                            <section id="achievements">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="glass rounded-3xl p-8 md:p-12 border-2 border-primary/20"
                                >
                                    <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                                        Impact at a Glance
                                    </h2>

                                    <div className="grid md:grid-cols-3 gap-8">
                                        {[
                                            {
                                                metric: "5+",
                                                label: "Years in Tech",
                                                description: "From first Python script to production systems",
                                            },
                                            {
                                                metric: "10+",
                                                label: "Major Projects",
                                                description: "Spanning robotics, automation, and web platforms",
                                            },
                                            {
                                                metric: "50+",
                                                label: "Students Mentored",
                                                description: "Through workshops, clubs, and direct mentorship",
                                            },
                                        ].map((stat, index) => (
                                            <motion.div
                                                key={stat.label}
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: index * 0.1 }}
                                                className="text-center space-y-2"
                                            >
                                                <div className="text-5xl font-bold text-primary mb-2">
                                                    {stat.metric}
                                                </div>
                                                <div className="text-lg font-semibold text-foreground">
                                                    {stat.label}
                                                </div>
                                                <p className="text-sm text-muted-foreground">
                                                    {stat.description}
                                                </p>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            </section>

                            {/* Closing Statement */}
                            <section id="closing">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="glass rounded-3xl p-8 md:p-12 text-center space-y-6"
                                >
                                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                                        What Drives Me
                                    </h2>
                                    <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto text-justify">
                                        I don't just build features—I build systems that last. I don't just lead teams—I create clarity that empowers people. I don't just solve problems—I ask why the problem exists in the first place. Every project is an opportunity to learn, every challenge is a chance to grow, and every collaboration is a step toward creating something meaningful.
                                    </p>
                                    <p className="text-base text-muted-foreground italic">
                                        "Excellence is not a destination—it's a continuous journey of learning, building, and improving."
                                    </p>
                                </motion.div>
                            </section>
                        </div>
                    </div>
                </div>
            </PageTransition>
        </main>
    )
}
