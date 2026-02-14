"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"
import {
    Sparkles,
    Rocket,
    Globe,
    Crown,
    Building2,
    Layers,
    Eye,
    ArrowRight,
    ChevronLeft,
    ChevronRight,
    X,
} from "lucide-react"

interface TimelineChapter {
    year: string
    label: string
    theme: string
    subtitle: string
    tagline: string
    bullets: string[]
    icon: React.ReactNode
    gradient: string
    image?: string
}

const chapters: TimelineChapter[] = [
    {
        year: "2018",
        label: "The Beginning",
        theme: "Curiosity",
        subtitle: "The Start - Trainee",
        tagline: "Entered UIU Robotics as a trainee.\nCurious. Quiet. Observing.",
        bullets: [
            "Learned hardware fails more than theory admits",
            "Understood debugging is patience, not intelligence",
            "First exposure to structured SDLC",
            "Saw how ideas become physical systems",
        ],
        icon: <Sparkles className="w-4 h-4" />,
        gradient: "from-violet-500/20 to-purple-500/20",
        image: "/timeline/2018.jpg",
    },
    {
        year: "2019",
        label: "Finding Voice",
        theme: "Contribution",
        subtitle: "From Introvert to Contributor",
        tagline: "Less watching. More doing.",
        bullets: [
            "First robotics competition win",
            "Volunteered in intra & inter-university technical events",
            "Campus Ambassador: GitHub, Microsoft Student Partner, Facebook Developer Circle",
        ],
        icon: <Rocket className="w-4 h-4" />,
        gradient: "from-blue-500/20 to-cyan-500/20",
        image: "/timeline/2019.jpg",
    },
    {
        year: "2020",
        label: "Exploration",
        theme: "Exploration",
        subtitle: "Beyond Campus Walls",
        tagline: "Stepped into industry and writing.",
        bullets: [
            "First startup internship as developer",
            "Published technical articles on platforms like GeeksforGeeks",
            "Promoted to Publications Secretary, UIU Robotics",
            "Contributed to national hackathons and programming events",
        ],
        icon: <Globe className="w-4 h-4" />,
        gradient: "from-emerald-500/20 to-teal-500/20",
        image: "/timeline/2020.jpg",
    },
    {
        year: "2021",
        label: "Leadership",
        theme: "Leadership",
        subtitle: "Building Teams, Not Just Code",
        tagline: "Responsibility increased.",
        bullets: [
            "Organized national competitions",
            "Initiated Mars Rover project (URC participation)",
            "Designed workshops and technical programs",
            "Worked on rover autonav & ground control systems",
            "Led field testing cycles",
            "Became President of UIU Robotics (100+ members)",
            "Built internal management tools",
            "Worked as Contractual Remote Developer (US-based company)",
        ],
        icon: <Crown className="w-4 h-4" />,
        gradient: "from-amber-500/20 to-orange-500/20",
        image: "/timeline/2021.jpg",
    },
    {
        year: "2022",
        label: "Stability",
        theme: "Industry",
        subtitle: "Industry & Institutional Impact",
        tagline: "Transition from student leader to full-time engineer.",
        bullets: [
            "Joined AIMS Lab as Full-time Engineer",
            "Concluded tenure at UIU Robotics",
            "Founding IT Executive, Bangladesh Robotics Foundation",
            "Judge at national robotics competitions",
            "Conducted workshops in schools & colleges",
        ],
        icon: <Building2 className="w-4 h-4" />,
        gradient: "from-rose-500/20 to-pink-500/20",
        image: "/timeline/2022.jpg",
    },
    {
        year: "2023–25",
        label: "Rebuilding",
        theme: "Systems",
        subtitle: "From Projects to Platforms",
        tagline: "Industry complexity deepened.",
        bullets: [
            "Joined Preneur Lab as Full-time Developer",
            "Initiated CanSat project targeting NASA competition",
            "Worked on SaaS and enterprise-scale systems",
            "Designed automation pipelines and orchestration layers",
            "Built systems serving thousands to millions of users",
        ],
        icon: <Layers className="w-4 h-4" />,
        gradient: "from-cyan-500/20 to-blue-500/20",
        image: "/timeline/2023.jpg",
    },
    {
        year: "Now",
        label: "Continuity",
        theme: "Vision",
        subtitle: "Engineer · Researcher · Writer",
        tagline: "",
        bullets: [
            "Designing scalable operational systems",
            "Building layered architectures",
            "Studying AI-driven automation",
            "Writing about systems thinking",
        ],
        icon: <Eye className="w-4 h-4" />,
        gradient: "from-indigo-500/20 to-violet-500/20",
        image: "/timeline/now.jpg",
    },
    {
        year: "Future",
        label: "Trend",
        theme: "Vision",
        subtitle: "Toward Durable Systems",
        tagline: "",
        bullets: [
            "Research-driven engineering",
            "AI + IoT convergence",
            "Resilient infrastructure",
            "Long-term institution building",
        ],
        icon: <ArrowRight className="w-4 h-4" />,
        gradient: "from-fuchsia-500/20 to-purple-500/20",
        image: "/timeline/future.jpg",
    },
]

const themeFlow = [
    "Curiosity",
    "Contribution",
    "Exploration",
    "Leadership",
    "Industry",
    "Systems",
    "Vision",
]

export function CareerTimeline() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
    const scrollRef = useRef<HTMLDivElement>(null)
    const sectionRef = useRef<HTMLDivElement>(null)
    const storyCardRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

    const scrollTimeline = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const scrollAmount = 300
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            })
        }
    }

    const handleNodeClick = (index: number) => {
        const isClosing = expandedIndex === index
        setExpandedIndex(isClosing ? null : index)

        if (!isClosing) {
            // Scroll down to the story card after a brief delay for the animation
            setTimeout(() => {
                storyCardRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                })
            }, 100)
        }
    }

    return (
        <section ref={sectionRef} className="py-16 px-0">
            <div className="max-w-5xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-6"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                        Career Chapters
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        From curiosity to building stuff.
                    </p>
                </motion.div>

                {/* Theme Flow Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="flex flex-wrap items-center gap-2 mb-10"
                >
                    {themeFlow.map((theme, i) => (
                        <span key={theme} className="flex items-center gap-2">
                            <span className="text-xs font-semibold uppercase tracking-widest text-primary/70">
                                {theme}
                            </span>
                            {i < themeFlow.length - 1 && (
                                <ArrowRight className="w-3 h-3 text-muted-foreground/40" />
                            )}
                        </span>
                    ))}
                </motion.div>
            </div>

            {/* ─ Horizontal Timeline Scroll ─ */}
            <div className="max-w-5xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.25 }}
                    className="relative"
                >
                    {/* Scroll Arrows (desktop) */}
                    <button
                        onClick={() => scrollTimeline("left")}
                        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full glass items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all"
                        aria-label="Scroll left"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                        onClick={() => scrollTimeline("right")}
                        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full glass items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all"
                        aria-label="Scroll right"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>

                    {/* Scrollable Row */}
                    <div
                        ref={scrollRef}
                        className="overflow-x-auto scrollbar-thin pb-4 px-4 md:px-12"
                        style={{ scrollSnapType: "x mandatory" }}
                    >
                        <div className="flex items-start gap-0 min-w-max relative pt-28 pb-2">
                            {/* Connecting Line */}
                            <div className="absolute top-[calc(7rem+18px)] left-8 right-8 h-[2px] bg-gradient-to-r from-primary/10 via-primary/40 to-primary/10 z-0" />

                            {chapters.map((chapter, index) => {
                                const isExpanded = expandedIndex === index
                                const isHovered = hoveredIndex === index

                                return (
                                    <motion.div
                                        key={chapter.year}
                                        className="relative flex flex-col items-center"
                                        style={{ scrollSnapAlign: "center", minWidth: "110px" }}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ delay: 0.3 + index * 0.08, duration: 0.5 }}
                                    >
                                        {/* Hover Tooltip */}
                                        <AnimatePresence>
                                            {isHovered && !isExpanded && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                                    exit={{ opacity: 0, y: 10, scale: 0.9 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="absolute -top-20 z-30 glass rounded-xl px-4 py-3 min-w-[180px] text-center shadow-2xl pointer-events-none"
                                                >
                                                    <p className="text-xs font-semibold text-primary uppercase tracking-wider">
                                                        {chapter.theme}
                                                    </p>
                                                    <p className="text-sm font-bold text-foreground mt-1">
                                                        {chapter.label}
                                                    </p>
                                                    <p className="text-[11px] text-muted-foreground mt-0.5">
                                                        {chapter.subtitle}
                                                    </p>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>

                                        {/* Node */}
                                        <motion.button
                                            onClick={() => handleNodeClick(index)}
                                            onMouseEnter={() => setHoveredIndex(index)}
                                            onMouseLeave={() => setHoveredIndex(null)}
                                            className={cn(
                                                "relative z-10 w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 cursor-pointer",
                                                isExpanded
                                                    ? "bg-primary border-primary text-primary-foreground scale-125 shadow-lg shadow-primary/40"
                                                    : isHovered
                                                        ? "bg-primary/20 border-primary/60 text-primary scale-110"
                                                        : "bg-background border-border text-muted-foreground hover:border-primary/40 hover:text-primary/70"
                                            )}
                                            whileTap={{ scale: 0.9 }}
                                            aria-label={`View ${chapter.year} - ${chapter.label}`}
                                        >
                                            {chapter.icon}
                                        </motion.button>

                                        {/* Year Label */}
                                        <span
                                            className={cn(
                                                "mt-3 text-sm font-bold transition-all duration-300",
                                                isExpanded
                                                    ? "text-primary"
                                                    : "text-muted-foreground"
                                            )}
                                        >
                                            {chapter.year}
                                        </span>

                                        {/* Chapter Name */}
                                        <span
                                            className={cn(
                                                "text-[11px] text-center max-w-[120px] leading-tight mt-1 transition-all duration-300",
                                                isExpanded
                                                    ? "text-foreground font-medium"
                                                    : "text-muted-foreground/60"
                                            )}
                                        >
                                            {chapter.label}
                                        </span>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* - Expanded Story Card - */}
            <div ref={storyCardRef} className="max-w-5xl mx-auto px-6">
                <AnimatePresence mode="wait">
                    {expandedIndex !== null && (
                        <motion.div
                            key={chapters[expandedIndex].year}
                            initial={{ opacity: 0, y: 30, height: 0 }}
                            animate={{ opacity: 1, y: 0, height: "auto" }}
                            exit={{ opacity: 0, y: -20, height: 0 }}
                            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                            className="mt-8 overflow-hidden"
                        >
                            <div
                                className={cn(
                                    "glass rounded-2xl border-2 overflow-hidden",
                                    "bg-gradient-to-br",
                                    chapters[expandedIndex].gradient,
                                    "border-primary/15"
                                )}
                            >
                                <div className="flex flex-col md:flex-row">
                                    {/* Left - Photo */}
                                    <div className="md:w-2/5 relative min-h-[250px] md:min-h-[380px] bg-black/10 overflow-hidden">
                                        {chapters[expandedIndex].image ? (
                                            <Image
                                                src={chapters[expandedIndex].image!}
                                                alt={`${chapters[expandedIndex].year} - ${chapters[expandedIndex].label}`}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 768px) 100vw, 40vw"
                                            />
                                        ) : (
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="text-center space-y-3">
                                                    <motion.div
                                                        animate={{ rotate: [0, 360] }}
                                                        transition={{
                                                            duration: 20,
                                                            repeat: Infinity,
                                                            ease: "linear",
                                                        }}
                                                        className="w-20 h-20 mx-auto rounded-full border-2 border-dashed border-primary/20 flex items-center justify-center"
                                                    >
                                                        <span className="text-3xl">
                                                            {chapters[expandedIndex].year === "Now"
                                                                ? "⚡"
                                                                : "🚀"}
                                                        </span>
                                                    </motion.div>
                                                    <p className="text-sm font-semibold text-muted-foreground/50">
                                                        {chapters[expandedIndex].year === "Future"
                                                            ? "Building toward..."
                                                            : "In progress..."}
                                                    </p>
                                                </div>
                                            </div>
                                        )}
                                        {/* Overlay gradient for text readability */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20 md:bg-gradient-to-r md:from-transparent md:to-background/50" />

                                        {/* Year Badge on photo */}
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.15 }}
                                            className="absolute top-4 left-4 glass rounded-full px-4 py-2"
                                        >
                                            <span className="text-sm font-bold text-foreground">
                                                {chapters[expandedIndex].year}
                                            </span>
                                        </motion.div>
                                    </div>

                                    {/* Right - Description */}
                                    <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-center relative">
                                        {/* Close button */}
                                        <button
                                            onClick={() => setExpandedIndex(null)}
                                            className="absolute top-4 right-4 w-8 h-8 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-destructive/10 transition-all"
                                            aria-label="Close story card"
                                        >
                                            <X className="w-4 h-4" />
                                        </button>

                                        {/* Theme tag */}
                                        <motion.span
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1 }}
                                            className="text-xs font-bold uppercase tracking-[0.2em] text-primary/70 mb-2"
                                        >
                                            {chapters[expandedIndex].theme}
                                        </motion.span>

                                        {/* Title */}
                                        <motion.h3
                                            initial={{ opacity: 0, x: -15 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.15 }}
                                            className="text-2xl md:text-3xl font-bold text-foreground mb-1"
                                        >
                                            {chapters[expandedIndex].label}
                                        </motion.h3>

                                        {/* Subtitle */}
                                        <motion.p
                                            initial={{ opacity: 0, x: -15 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.2 }}
                                            className="text-sm font-semibold text-muted-foreground mb-4"
                                        >
                                            {chapters[expandedIndex].subtitle}
                                        </motion.p>

                                        {/* Tagline */}
                                        {chapters[expandedIndex].tagline && (
                                            <motion.p
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.25 }}
                                                className="text-muted-foreground italic text-sm mb-5 whitespace-pre-line text-justify"
                                                style={{ textJustify: "inter-word" }}
                                            >
                                                {chapters[expandedIndex].tagline}
                                            </motion.p>
                                        )}

                                        {/* Bullets */}
                                        <div className="space-y-2.5">
                                            {chapters[expandedIndex].bullets.map((bullet, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, x: -12 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.3 + i * 0.06 }}
                                                    className="flex items-start gap-2.5 text-sm text-muted-foreground"
                                                >
                                                    <span className="text-primary/50 mt-0.5 flex-shrink-0 font-mono text-xs">
                                                        –
                                                    </span>
                                                    <span className="leading-relaxed">{bullet}</span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    )
}
