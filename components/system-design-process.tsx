"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"
import {
    Eye,
    Target,
    Boxes,
    ShieldAlert,
    Layers,
    FlaskConical,
    Activity,
    BookMarked,
    Workflow,
    Server,
    ShieldCheck,
    Rocket,
    HeartPulse,
    Wrench,
    X,
    ArrowRight,
    ArrowDown,
    Zap,
    GitBranch,
    ChevronLeft,
    ChevronRight,
} from "lucide-react"

/* ───────────────────── types ───────────────────── */
interface ProcessStep {
    id: number
    short: string
    title: string
    icon: React.ReactNode
    gradient: string
    whatIDo: string[]
    pastWorks: string
    inThisSystem: string
}

/* ───────────────────── data ───────────────────── */
const steps: ProcessStep[] = [
    {
        id: 1,
        short: "Observe",
        title: "Observe the Ground Reality",
        icon: <Eye className="w-4 h-4" />,
        gradient: "from-violet-500/20 to-indigo-500/20",
        whatIDo: [
            "Review business requirement documents",
            "Trace manual workflows",
            "Follow data movement",
            "Identify friction points",
        ],
        pastWorks:
            "I mapped operational bottlenecks and replaced them with automation, reducing repetitive actions by 60–70%.",
        inThisSystem:
            "I will observe how stock is received, stored, transferred, and audited. I will evaluate where AI adds real value instead of decorative complexity.",
    },
    {
        id: 2,
        short: "Define",
        title: "Define the System Core",
        icon: <Target className="w-4 h-4" />,
        gradient: "from-blue-500/20 to-cyan-500/20",
        whatIDo: [
            "Source of truth",
            "Authorization rules",
            "Approval chains",
            "Audit boundaries",
        ],
        pastWorks:
            "I designed payroll engines for 20,000+ users with traceable approval flows and validated payout mechanisms.",
        inThisSystem:
            "I will formalize canonical inventory records, approval hierarchies, and immutable transaction history, and lock them through documented governance.",
    },
    {
        id: 3,
        short: "Model",
        title: "Model the Architecture",
        icon: <Boxes className="w-4 h-4" />,
        gradient: "from-cyan-500/20 to-teal-500/20",
        whatIDo: [
            "Domain separation",
            "Contract definitions",
            "Failure scenarios",
            "Integration surfaces",
        ],
        pastWorks:
            "I built modular SaaS platforms that evolved independently without destabilizing the core.",
        inThisSystem:
            "I will separate inventory, procurement, reporting, and analytics into loosely coupled modules.",
    },
    {
        id: 4,
        short: "Design",
        title: "Engineer for Imperfection",
        icon: <ShieldAlert className="w-4 h-4" />,
        gradient: "from-emerald-500/20 to-green-500/20",
        whatIDo: [
            "Intermittent connectivity",
            "Partial synchronization",
            "Device inconsistencies",
            "Human overrides",
        ],
        pastWorks:
            "I stabilized IoT platforms through resilient state recovery and synchronization.",
        inThisSystem:
            "I will implement offline queues, reconciliation logic, and conflict resolution to preserve data integrity.",
    },
    {
        id: 5,
        short: "Build",
        title: "Implement in Layers",
        icon: <Layers className="w-4 h-4" />,
        gradient: "from-amber-500/20 to-yellow-500/20",
        whatIDo: ["Core → Services → APIs → Interfaces → Automation"],
        pastWorks:
            "I delivered orchestration layers that isolated failures and simplified complex workflows.",
        inThisSystem:
            "I will keep the stock engine independent and expose functionality through service contracts and microservices.",
    },
    {
        id: 6,
        short: "Validate",
        title: "Validate in Real Operations",
        icon: <FlaskConical className="w-4 h-4" />,
        gradient: "from-orange-500/20 to-red-500/20",
        whatIDo: [
            "Peak load",
            "Boundary cases",
            "User mistakes",
            "Recovery simulations",
        ],
        pastWorks:
            "I improved conversational platforms to sustain millions of queries with ~90% response accuracy.",
        inThisSystem:
            "I will simulate audits, high-volume transfers, and month-end closures before release.",
    },
    {
        id: 7,
        short: "Optimize",
        title: "Monitor Before Tuning",
        icon: <Activity className="w-4 h-4" />,
        gradient: "from-rose-500/20 to-pink-500/20",
        whatIDo: [
            "Latency patterns",
            "Error distribution",
            "Correction frequency",
            "Throughput trends",
        ],
        pastWorks:
            "I improved observability and reduced duplicated logic across integrated systems.",
        inThisSystem:
            "I will instrument reconciliation delays, anomaly rates, and processing queues before refactoring.",
    },
    {
        id: 8,
        short: "Institutionalize",
        title: "Institutionalize the System",
        icon: <BookMarked className="w-4 h-4" />,
        gradient: "from-purple-500/20 to-violet-500/20",
        whatIDo: [
            "Technical documentation",
            "Operational playbooks",
            "Ownership boundaries",
            "Change protocols",
        ],
        pastWorks:
            "I delivered platforms that remained stable across organizational transitions.",
        inThisSystem:
            "I will formalize inventory rules, escalation paths, and recovery procedures.",
    },
    {
        id: 9,
        short: "Scale",
        title: "Evolve Without Destabilizing",
        icon: <Workflow className="w-4 h-4" />,
        gradient: "from-indigo-500/20 to-blue-500/20",
        whatIDo: [
            "API versioning",
            "Compatibility layers",
            "Progressive rollout",
            "Structured deprecation",
        ],
        pastWorks:
            "I scaled identity systems for 2,000+ users while reducing operational cost by ~40%.",
        inThisSystem:
            "I will onboard new warehouses, SKUs, and partners without disrupting active workflows.",
    },
    {
        id: 10,
        short: "Serve",
        title: "Design Production Infrastructure",
        icon: <Server className="w-4 h-4" />,
        gradient: "from-teal-500/20 to-emerald-500/20",
        whatIDo: [
            "Environment separation (dev / staging / prod)",
            "Resource isolation",
            "Backup strategies",
            "Deployment pipelines",
            "Rollback mechanisms",
        ],
        pastWorks:
            "I provisioned cloud environments using Terraform and optimized resource usage across AWS, GCP, and DigitalOcean for cost-effective scalability.",
        inThisSystem:
            "I will design multi-environment infrastructure with automated provisioning, monitored scaling, and disaster recovery paths.",
    },
    {
        id: 11,
        short: "Secure",
        title: "Enforce Quality and Security Standards",
        icon: <ShieldCheck className="w-4 h-4" />,
        gradient: "from-sky-500/20 to-blue-500/20",
        whatIDo: [
            "Automated test suites",
            "Integration validation",
            "Access control reviews",
            "Vulnerability scanning",
            "Compliance documentation",
        ],
        pastWorks:
            "I implemented structured testing and access control frameworks that reduced system-error-related incidents and audit findings.",
        inThisSystem:
            "I will integrate Selenium and ZeuZ into CI pipelines, enforce RBAC policies, and conduct security reviews before every major release.",
    },
    {
        id: 12,
        short: "Launch",
        title: "Prepare for Production Launch",
        icon: <Rocket className="w-4 h-4" />,
        gradient: "from-fuchsia-500/20 to-pink-500/20",
        whatIDo: [
            "Load testing",
            "Failover validation",
            "Deployment rehearsals",
            "Incident response plans",
            "Stakeholder sign-offs",
        ],
        pastWorks:
            "I led structured release cycles for enterprise platforms serving thousands of daily users.",
        inThisSystem:
            "I will execute controlled rollouts, validate rollback procedures, and prepare operational teams before go-live.",
    },
    {
        id: 13,
        short: "Operate",
        title: "Operate in Production",
        icon: <HeartPulse className="w-4 h-4" />,
        gradient: "from-red-500/20 to-orange-500/20",
        whatIDo: [
            "Incident monitoring",
            "Root cause analysis",
            "Performance tuning",
            "Support coordination",
            "Reliability reporting",
        ],
        pastWorks:
            "I maintained high-availability systems handling millions of interactions with reduced human intervention.",
        inThisSystem:
            "I will monitor transaction flows, investigate anomalies, and maintain service continuity under real-world pressure.",
    },
    {
        id: 14,
        short: "Sustain",
        title: "Design Continuous Maintenance Mode",
        icon: <Wrench className="w-4 h-4" />,
        gradient: "from-stone-500/20 to-zinc-500/20",
        whatIDo: [
            "Scheduled refactoring cycles",
            "Dependency upgrades",
            "Knowledge transfer",
            "Technical debt management",
            "System health reviews",
        ],
        pastWorks:
            "I sustained enterprise platforms through multi-year evolution without major architectural regressions.",
        inThisSystem:
            "I will establish maintenance cadences, upgrade strategies, and documentation practices to ensure long-term resilience.",
    },
]

const row1 = steps.slice(0, 7)
const row2 = [...steps.slice(7, 14)].reverse() // reversed so step 14 is leftmost, step 8 rightmost

const pipelineLabels = steps.map((s) => s.short)

/* ───────────────────── Modal ───────────────────── */
function StepModal({
    step,
    onClose,
    onPrev,
    onNext,
    hasPrev,
    hasNext,
}: {
    step: ProcessStep
    onClose: () => void
    onPrev: () => void
    onNext: () => void
    hasPrev: boolean
    hasNext: boolean
}) {
    // close on Escape
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose()
            if (e.key === "ArrowLeft" && hasPrev) onPrev()
            if (e.key === "ArrowRight" && hasNext) onNext()
        }
        window.addEventListener("keydown", handler)
        return () => window.removeEventListener("keydown", handler)
    }, [onClose, onPrev, onNext, hasPrev, hasNext])

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
            onClick={onClose}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

            {/* Modal */}
            <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 20 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-background border border-border/50 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Banner Image */}
                <div className="relative w-full h-48 md:h-56 bg-muted/30 overflow-hidden rounded-t-2xl">
                    <Image
                        src={`/algorithm/step${step.id}.png`}
                        alt={step.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 672px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />

                    {/* Step badge on image */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full bg-background/80 backdrop-blur-md border border-border/50 text-xs font-mono font-bold text-primary">
                            Step {String(step.id).padStart(2, "0")}
                        </span>
                    </div>

                    {/* Close button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 w-8 h-8 rounded-full bg-background/80 backdrop-blur-md border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-destructive/20 transition-all"
                        aria-label="Close modal"
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 -mt-8 relative z-10">
                    {/* Title area */}
                    <div className="flex items-start gap-3 mb-6">
                        <div
                            className={cn(
                                "w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center border text-primary",
                                "bg-gradient-to-br",
                                step.gradient,
                                "border-primary/20"
                            )}
                        >
                            {step.icon}
                        </div>
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-foreground leading-tight">
                                {step.title}
                            </h3>
                            <span className="text-xs font-semibold uppercase tracking-widest text-primary/60 mt-1 block">
                                {step.short}
                            </span>
                        </div>
                    </div>

                    {/* Three sections */}
                    <div className="space-y-5">
                        {/* What I do */}
                        <div className="glass rounded-xl p-4 border border-primary/10">
                            <div className="flex items-center gap-2 mb-3">
                                <Zap className="w-3.5 h-3.5 text-primary/70" />
                                <span className="text-xs font-bold uppercase tracking-wider text-primary/70">
                                    What this phase need
                                </span>
                            </div>
                            <div className="space-y-1.5">
                                {step.whatIDo.map((item, i) => (
                                    <div
                                        key={i}
                                        className="flex items-start gap-2 text-sm text-muted-foreground"
                                    >
                                        <span className="text-primary/40 mt-0.5 flex-shrink-0 text-xs">
                                            –
                                        </span>
                                        <span className="leading-relaxed">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* In my past works */}
                        <div className="glass rounded-xl p-4 border border-amber-500/10">
                            <div className="flex items-center gap-2 mb-3">
                                <GitBranch className="w-3.5 h-3.5 text-amber-500/70" />
                                <span className="text-xs font-bold uppercase tracking-wider text-amber-500/70">
                                    In My Past Works
                                </span>
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {step.pastWorks}
                            </p>
                        </div>

                        {/* In this system */}
                        <div className="glass rounded-xl p-4 border border-emerald-500/10">
                            <div className="flex items-center gap-2 mb-3">
                                <Target className="w-3.5 h-3.5 text-emerald-500/70" />
                                <span className="text-xs font-bold uppercase tracking-wider text-emerald-500/70">
                                    In This System I will do
                                </span>
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {step.inThisSystem}
                            </p>
                        </div>
                    </div>

                    {/* Navigation footer */}
                    <div className="flex items-center justify-between mt-6 pt-4 border-t border-border/20">
                        <button
                            onClick={onPrev}
                            disabled={!hasPrev}
                            className={cn(
                                "flex items-center gap-2 text-sm font-medium transition-all",
                                hasPrev
                                    ? "text-muted-foreground hover:text-foreground cursor-pointer"
                                    : "text-muted-foreground/25 cursor-default"
                            )}
                        >
                            <ChevronLeft className="w-4 h-4" /> Previous
                        </button>
                        <span className="text-xs font-mono text-muted-foreground/50">
                            {step.id} / {steps.length}
                        </span>
                        <button
                            onClick={onNext}
                            disabled={!hasNext}
                            className={cn(
                                "flex items-center gap-2 text-sm font-medium transition-all",
                                hasNext
                                    ? "text-muted-foreground hover:text-foreground cursor-pointer"
                                    : "text-muted-foreground/25 cursor-default"
                            )}
                        >
                            Next <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}

/* ───────────────────── Step Box Node ───────────────────── */
function StepNode({
    step,
    index,
    isInView,
    onClick,
}: {
    step: ProcessStep
    index: number
    isInView: boolean
    onClick: () => void
}) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div className="relative flex flex-col items-center w-full min-w-[90px] md:min-w-[110px]">
            {/* Floating tooltip above node */}
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.92 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.92 }}
                        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute -top-12 z-20 glass rounded-lg px-3 py-1.5 border border-primary/20 shadow-xl shadow-primary/5 pointer-events-none whitespace-nowrap"
                    >
                        <span className="text-[11px] font-medium text-primary/80">
                            Click to see explanation
                        </span>
                        {/* Tooltip arrow */}
                        <div className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-2 h-2 rotate-45 bg-background border-r border-b border-primary/20" />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Node button */}
            <motion.button
                onClick={onClick}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.06, duration: 0.5 }}
                className={cn(
                    "relative flex flex-col items-center gap-1.5 px-2 py-3 md:px-3 md:py-4 rounded-xl border-2 transition-all duration-300 cursor-pointer group w-full",
                    "bg-card/50 backdrop-blur-md",
                    isHovered
                        ? "border-primary/60 shadow-lg shadow-primary/10 scale-[1.04] -translate-y-1"
                        : "border-muted-foreground/20 hover:border-primary/40"
                )}
                aria-label={`View step ${step.id}: ${step.title}`}
            >
                {/* Icon */}
                <div
                    className={cn(
                        "w-8 h-8 md:w-9 md:h-9 rounded-lg flex items-center justify-center transition-all duration-300",
                        "bg-gradient-to-br",
                        step.gradient,
                        isHovered
                            ? "text-primary scale-110"
                            : "text-muted-foreground"
                    )}
                >
                    {step.icon}
                </div>

                {/* Title */}
                <span
                    className={cn(
                        "text-[11px] md:text-[13px] text-center leading-tight font-bold transition-all duration-300",
                        isHovered ? "text-primary" : "text-foreground/80"
                    )}
                >
                    {step.short}
                </span>
            </motion.button>
        </div>
    )
}

/* ───────────────────── Main Component ───────────────────── */
export function SystemDesignProcess() {
    const [modalStepId, setModalStepId] = useState<number | null>(null)
    const [activePhase, setActivePhase] = useState<number | null>(null)
    const sectionRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(sectionRef, { once: true, margin: "-80px" })

    const openModal = useCallback((id: number) => {
        setModalStepId(id)
        document.body.style.overflow = "hidden"
    }, [])

    const closeModal = useCallback(() => {
        setModalStepId(null)
        document.body.style.overflow = ""
    }, [])

    const goToPrev = useCallback(() => {
        if (modalStepId && modalStepId > 1) setModalStepId(modalStepId - 1)
    }, [modalStepId])

    const goToNext = useCallback(() => {
        if (modalStepId && modalStepId < steps.length) setModalStepId(modalStepId + 1)
    }, [modalStepId])

    const modalStep = modalStepId ? steps.find((s) => s.id === modalStepId) : null

    return (
        <section ref={sectionRef} className="py-0 px-0 overflow-hidden">
            {/* ── Narrative Intro ── */}
            <div className="max-w-5xl mx-auto px-6 mb-8">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Execution Model
                    </h2>
                    <div
                        className="text-muted-foreground text-base md:text-lg leading-relaxed space-y-4"
                        style={{ textAlign: "justify", textJustify: "inter-word" }}
                    >
                        <p>
                            I approach software as a long-term product, not a short-term project.
                        </p>
                        <p>
                            I follow iterative delivery through Agile practices, clear sprint goals, and
                            continuous feedback loops. I pair-program with agentic coding tools like Codex,
                            Claude Code, and Antigravity to accelerate development while preserving
                            architectural clarity.
                        </p>
                        <p>
                            For quality assurance, I rely on automated and scenario-driven testing using
                            Selenium and ZeuZ. Infrastructure is provisioned through Terraform with
                            reproducible environments.
                        </p>
                        <p>
                            I work primarily on AWS and Google Cloud Platform, and I often choose
                            DigitalOcean when cost-efficiency matters without sacrificing reliability.
                        </p>
                        <p className="font-medium text-foreground/80">
                            The goal is simple: predictable delivery, measurable quality, and systems that
                            remain stable under change.
                        </p>
                        <p className="mb-8">
                            My process follows a structured lifecycle:
                        </p>
                    </div>

                    {/* New Boxed Lifecycle Section in Container */}
                    <div className="mt-10 p-8 rounded-3xl border border-border/10 bg-card/50 backdrop-blur-md">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
                            {[
                                {
                                    title: "Problem Analysis & Modeling",
                                    sub: "Define • Modelling",
                                    description: "This phase focuses on understanding business objectives, operational constraints, and system requirements through structured analysis. It involves identifying core problems, defining system boundaries, and creating conceptual and logical models that guide architectural and implementation decisions."
                                },
                                {
                                    title: "System Architecture & Design",
                                    sub: "Design • Specification",
                                    description: "This stage establishes the overall system structure, component interactions, data flows, and technology stack. It ensures that the system meets requirements for scalability, security, maintainability, and performance while aligning with organizational standards."
                                },
                                {
                                    title: "System Development & Optimization",
                                    sub: "Build, Validate, Optimize, Institutionalize",
                                    description: "This phase converts system designs into functional, production-ready solutions through disciplined implementation and continuous improvement. It emphasizes code quality, testing, performance tuning, and institutionalizing best practices for long-term sustainability."
                                },
                                {
                                    title: "Infrastructure & Scalability Engineering",
                                    sub: "Scale • Serve",
                                    description: "This stage focuses on designing and implementing infrastructure that supports system availability, scalability, and service reliability. It includes capacity planning, deployment architecture, and operational readiness for growth."
                                },
                                {
                                    title: "System Deployment & Launch",
                                    sub: "Launch • Transition",
                                    description: "This phase manages the controlled release of systems into production environments. It ensures deployment stability, configuration accuracy, user readiness, and alignment with operational and business stakeholders."
                                },
                                {
                                    title: "IT Service Management & Operations",
                                    sub: "Secure, Operate • Sustain, Monitoring",
                                    description: "This stage governs the ongoing operation, security, and sustainability of systems in production. It establishes monitoring, incident management, compliance, and continuous improvement processes to maintain service quality."
                                }
                            ].map((phase, idx) => (
                                <div
                                    key={idx}
                                    className="group relative"
                                    onClick={() => setActivePhase(activePhase === idx ? null : idx)}
                                >
                                    <div className={cn(
                                        "glass p-6 rounded-2xl border-2 border-border/50 transition-all duration-300 h-full flex flex-col justify-center items-center shadow-lg min-h-[120px] relative z-10",
                                        "hover:border-primary/60 hover:shadow-primary/10",
                                        activePhase === idx ? "border-primary/60 shadow-primary/10" : "border-border/50"
                                    )}>
                                        <h4 className={cn(
                                            "font-bold text-foreground text-center transition-colors text-base md:text-lg leading-tight",
                                            "group-hover:text-primary",
                                            activePhase === idx ? "text-primary" : "text-foreground"
                                        )}>
                                            {phase.title}
                                        </h4>
                                    </div>

                                    {/* Arrow between boxes (visible on large screens) */}
                                    {idx % 3 !== 2 && idx < 5 && (
                                        <div className="hidden lg:flex absolute -right-[2.5rem] top-1/2 -translate-y-1/2 z-0">
                                            <ArrowRight className="w-6 h-6 text-muted-foreground/20" />
                                        </div>
                                    )}

                                    {/* Toolbox style tooltip explaining the phase */}
                                    <div className={cn(
                                        "absolute transition-all duration-300 pointer-events-none z-[100] bottom-full left-1/2 -translate-x-1/2 mb-6 w-[280px] md:w-[320px]",
                                        activePhase === idx
                                            ? "opacity-100 scale-100 translate-y-0"
                                            : "opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 translate-y-2 group-hover:translate-y-0"
                                    )}>
                                        <div className="bg-background/98 p-5 rounded-2xl border border-primary/40 shadow-2xl shadow-primary/20 backdrop-blur-3xl">
                                            <div className="flex items-center gap-2 mb-3">
                                                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                                <span className="text-xs font-bold text-primary uppercase tracking-tighter">Phase Insight</span>
                                            </div>
                                            <p className="text-sm text-foreground leading-relaxed text-justify" style={{ textJustify: "inter-word" }}>
                                                {phase.description}
                                            </p>
                                            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-background border-r border-b border-primary/30" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

            </div>

            {/* ── From Idea to Living System - bordered container ── */}
            <div className="max-w-5xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="rounded-2xl border-2 border-muted-foreground/20 p-6 md:p-8"
                >
                    {/* Subsection header */}
                    <div className="mb-6">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center backdrop-blur">
                                <GitBranch className="w-4 h-4 text-primary" />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                                System Lifecycle
                            </h3>
                        </div>
                        <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-3xl">
                            Let&apos;s say I have to design and lead the development of an{" "}
                            <span className="text-primary font-semibold">
                                AI-Powered Inventory Platform
                            </span>
                            . Here&apos;s my process -
                        </p>
                    </div>



                    {/* ── Algorithm Grid: 2 rows of 7 ── */}
                    <div>
                        {/* Mobile view (Snake Layout with Arrows) */}
                        <div className="md:hidden">
                            <div className="space-y-2">
                                {Array.from({ length: Math.ceil(steps.length / 2) }).map((_, rowIndex) => {
                                    const isEvenRow = rowIndex % 2 === 0;
                                    const startIdx = rowIndex * 2;
                                    const rowSteps = isEvenRow
                                        ? [steps[startIdx], steps[startIdx + 1]]
                                        : [steps[startIdx + 1], steps[startIdx]];

                                    return (
                                        <div key={rowIndex} className="flex flex-col">
                                            <div className="grid grid-cols-2 gap-4 relative">
                                                {rowSteps.map((step, colIdx) => {
                                                    const currentStepIdx = isEvenRow
                                                        ? startIdx + colIdx
                                                        : startIdx + (1 - colIdx);

                                                    return (
                                                        <div key={step.id} className="relative flex items-center">
                                                            <StepNode
                                                                step={step}
                                                                index={currentStepIdx}
                                                                isInView={isInView}
                                                                onClick={() => openModal(step.id)}
                                                            />
                                                            {/* Horizontal Arrow between nodes */}
                                                            {((isEvenRow && colIdx === 0) || (!isEvenRow && colIdx === 1)) && (
                                                                <div className={cn(
                                                                    "absolute z-10 w-full flex justify-center pointer-events-none",
                                                                    isEvenRow ? "left-[50%]" : "right-[50%]"
                                                                )}>
                                                                    <ArrowRight className={cn(
                                                                        "w-4 h-4 text-primary/40",
                                                                        !isEvenRow && "rotate-180"
                                                                    )} />
                                                                </div>
                                                            )}
                                                        </div>
                                                    );
                                                })}
                                            </div>

                                            {/* Vertical Arrow to next row */}
                                            {rowIndex < Math.ceil(steps.length / 2) - 1 && (
                                                <div className="grid grid-cols-2 w-full py-2">
                                                    <div className={cn(
                                                        "flex justify-center",
                                                        isEvenRow ? "col-start-2" : "col-start-1"
                                                    )}>
                                                        <div className="flex flex-col items-center gap-0.5">
                                                            <div className="w-[2px] h-4 bg-gradient-to-b from-primary/30 to-primary/10" />
                                                            <ArrowDown className="w-4 h-4 text-primary/30" />
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Desktop view (Snake Layout) */}
                        <div className="hidden md:block">
                            {/* Row 1: Steps 1–7 */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={isInView ? { opacity: 1 } : {}}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="grid md:grid-cols-7 gap-3"
                            >
                                {row1.map((step, index) => (
                                    <div key={step.id} className="flex items-center">
                                        <StepNode
                                            step={step}
                                            index={index}
                                            isInView={isInView}
                                            onClick={() => openModal(step.id)}
                                        />
                                        {/* Arrow between nodes (desktop) */}
                                        {index < row1.length - 1 && (
                                            <ArrowRight className="w-4 h-4 text-primary/20 flex-shrink-0 mx-0.5 hidden md:block" />
                                        )}
                                    </div>
                                ))}
                            </motion.div>

                            {/* Row connector: vertical arrow from step 7 → step 8 */}
                            <motion.div
                                initial={{ opacity: 0, scaleY: 0 }}
                                animate={isInView ? { opacity: 1, scaleY: 1 } : {}}
                                transition={{ duration: 0.5, delay: 0.7 }}
                                className="flex justify-end pr-[calc((100%/7)/2+0.375rem)] py-3"
                            >
                                <div className="flex flex-col items-center gap-0.5">
                                    <div className="w-[2px] h-6 bg-gradient-to-b from-primary/30 to-primary/10" />
                                    <ArrowDown className="w-4 h-4 text-primary/30" />
                                </div>
                            </motion.div>

                            {/* Row 2: Steps 14–8 (reversed array, LTR grid, left-pointing arrows) */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={isInView ? { opacity: 1 } : {}}
                                transition={{ duration: 0.6, delay: 0.75 }}
                                className="grid md:grid-cols-7 gap-3"
                            >
                                {row2.map((step, index) => (
                                    <div key={step.id} className="flex items-center">
                                        <StepNode
                                            step={step}
                                            index={index + 7}
                                            isInView={isInView}
                                            onClick={() => openModal(step.id)}
                                        />
                                        {/* Left-pointing arrow between nodes (desktop) */}
                                        {index < row2.length - 1 && (
                                            <ArrowRight className="w-4 h-4 text-primary/20 flex-shrink-0 mx-0.5 hidden md:block rotate-180" />
                                        )}
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>


                </motion.div>
            </div>

            {/* ── Modal ── */}
            <AnimatePresence>
                {modalStep && (
                    <StepModal
                        step={modalStep}
                        onClose={closeModal}
                        onPrev={goToPrev}
                        onNext={goToNext}
                        hasPrev={modalStep.id > 1}
                        hasNext={modalStep.id < steps.length}
                    />
                )}
            </AnimatePresence>
        </section>
    )
}
