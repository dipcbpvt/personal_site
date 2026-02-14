"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface TimelineEvent {
    year: number
    title: string
    description: string
    category: "childhood" | "education" | "sports" | "technology" | "leadership" | "professional"
}

const timelineEvents: TimelineEvent[] = [
    { year: 1998, title: "I'm here 😄", description: "Born in Bangladesh, beginning a journey of curiosity and wonder.", category: "childhood" },
    { year: 2005, title: "First Cricket Memory", description: "First time watching Bangladesh beat Australia-ignited a lifelong passion for sports.", category: "sports" },
    { year: 2008, title: "Iron Man Changed Everything", description: "Watched Iron Man and fell in love with JARVIS-the dream of building intelligent systems was born.", category: "technology" },
    { year: 2010, title: "Moving to Dhaka", description: "Relocated to Dhaka, opening new horizons and opportunities.", category: "childhood" },
    { year: 2015, title: "First Lines of Code", description: "Started programming in Python-printing 'Hello World' felt like magic.", category: "technology" },
    { year: 2016, title: "Entering UIU", description: "Joined United International University, beginning formal computer science education.", category: "education" },
    { year: 2018, title: "Robotics Changed Everything", description: "Joined the robotics club-discovered the intersection of hardware, software, and real-world impact.", category: "technology" },
    { year: 2019, title: "Founding Mars Rover Team", description: "Co-founded UIU's Mars Rover team, leading ambitious aerospace-adjacent projects.", category: "leadership" },
    { year: 2020, title: "Research Begins", description: "Started research in autonomous systems and computer vision-turning curiosity into methodology.", category: "education" },
    { year: 2021, title: "Startup Exploration", description: "Experimented with startup ideas, learning about product-market fit and real-world problem solving.", category: "professional" },
    { year: 2022, title: "Leadership Roles", description: "Took on leadership positions, learning to align teams and ship working systems.", category: "leadership" },
    { year: 2023, title: "Professional Growth", description: "Entered the professional world, building automation platforms and operational tools.", category: "professional" },
    { year: 2024, title: "Systems Thinking", description: "Deepened expertise in architecture design, workflow orchestration, and product engineering.", category: "professional" },
    { year: 2026, title: "Present Day", description: "Continuing to build, learn, and create meaningful solutions at the intersection of software and hardware.", category: "professional" },
]

const categoryColors = {
    childhood: "from-pink-500/20 to-purple-500/20 border-pink-500/30",
    education: "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
    sports: "from-green-500/20 to-emerald-500/20 border-green-500/30",
    technology: "from-violet-500/20 to-indigo-500/20 border-violet-500/30",
    leadership: "from-orange-500/20 to-amber-500/20 border-orange-500/30",
    professional: "from-cyan-500/20 to-blue-500/20 border-cyan-500/30",
}

const categoryLabels = {
    childhood: "Childhood",
    education: "Education",
    sports: "Sports & Culture",
    technology: "Technology",
    leadership: "Leadership",
    professional: "Professional",
}

export function InteractiveTimeline() {
    const [selectedYear, setSelectedYear] = useState<number | null>(2026)
    const [hoveredYear, setHoveredYear] = useState<number | null>(null)

    const selectedEvent = timelineEvents.find(e => e.year === selectedYear)
    const minYear = 1998
    const maxYear = 2026

    return (
        <div className="w-full space-y-8">
            {/* Timeline Scrubber */}
            <div className="relative">
                <div className="relative h-24 overflow-x-auto overflow-y-hidden scrollbar-thin">
                    <div className="absolute inset-0 flex items-center">
                        {/* Timeline Line */}
                        <div className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20" />

                        {/* Year Markers */}
                        <div className="relative w-full flex justify-between px-4">
                            {timelineEvents.map((event) => {
                                const isSelected = selectedYear === event.year
                                const isHovered = hoveredYear === event.year

                                return (
                                    <motion.button
                                        key={event.year}
                                        onClick={() => setSelectedYear(event.year)}
                                        onMouseEnter={() => setHoveredYear(event.year)}
                                        onMouseLeave={() => setHoveredYear(null)}
                                        className={cn(
                                            "relative flex flex-col items-center gap-2 cursor-pointer group",
                                            "min-w-[60px]"
                                        )}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {/* Year Dot */}
                                        <motion.div
                                            className={cn(
                                                "w-3 h-3 rounded-full border-2 transition-all duration-300",
                                                isSelected
                                                    ? "bg-primary border-primary scale-150 shadow-lg shadow-primary/50"
                                                    : isHovered
                                                        ? "bg-primary/50 border-primary/70 scale-125"
                                                        : "bg-background border-primary/30 hover:border-primary/60"
                                            )}
                                            animate={{
                                                scale: isSelected ? 1.5 : isHovered ? 1.25 : 1,
                                            }}
                                        />

                                        {/* Year Label */}
                                        <span
                                            className={cn(
                                                "text-xs font-medium transition-all duration-300",
                                                isSelected
                                                    ? "text-primary scale-110"
                                                    : "text-muted-foreground group-hover:text-foreground"
                                            )}
                                        >
                                            {event.year}
                                        </span>
                                    </motion.button>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {/* Event Display */}
            <AnimatePresence mode="wait">
                {selectedEvent && (
                    <motion.div
                        key={selectedEvent.year}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className={cn(
                            "glass rounded-2xl p-8 border-2",
                            "bg-gradient-to-br",
                            categoryColors[selectedEvent.category]
                        )}
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <motion.h3
                                    className="text-3xl font-bold text-foreground mb-2"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 }}
                                >
                                    {selectedEvent.year}
                                </motion.h3>
                                <motion.p
                                    className="text-sm text-muted-foreground uppercase tracking-wider"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.15 }}
                                >
                                    {categoryLabels[selectedEvent.category]}
                                </motion.p>
                            </div>
                        </div>

                        <motion.h4
                            className="text-xl font-semibold text-foreground mb-3"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            {selectedEvent.title}
                        </motion.h4>

                        <motion.p
                            className="text-muted-foreground leading-relaxed"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.25 }}
                        >
                            {selectedEvent.description}
                        </motion.p>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Category Legend */}
            <div className="flex flex-wrap gap-3 justify-center">
                {Object.entries(categoryLabels).map(([key, label]) => (
                    <div
                        key={key}
                        className={cn(
                            "px-3 py-1.5 rounded-full text-xs font-medium",
                            "glass border",
                            categoryColors[key as keyof typeof categoryColors]
                        )}
                    >
                        {label}
                    </div>
                ))}
            </div>
        </div>
    )
}
