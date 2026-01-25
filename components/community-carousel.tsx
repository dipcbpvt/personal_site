"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface CommunityItem {
    title: string
    organization: string
    period: string
    description: string | string[]
    subtitle?: string
    tags?: string[]
    type: "work" | "education" | "community"
}

interface CommunityCarouselProps {
    items: CommunityItem[]
}

export function CommunityCarousel({ items }: CommunityCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const handlePrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1))
    }

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1))
    }

    const currentItem = items[currentIndex]

    return (
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="relative">
            {/* Main content area */}
            <div className="relative min-h-[400px]">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.3 }}
                        className="w-full"
                    >
                        <div className="glass rounded-2xl p-8 hover:bg-primary/5 hover:border-primary/20 transition-all duration-300">
                            <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4 w-fit">
                                {currentItem.period}
                            </span>
                            <h3 className="text-xl font-semibold text-foreground mb-2">{currentItem.title}</h3>
                            <p className="text-primary/80 font-medium mb-4">{currentItem.organization}</p>

                            {/* Subtitle if present */}
                            {currentItem.subtitle && (
                                <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic text-justify">
                                    {currentItem.subtitle}
                                </p>
                            )}

                            {/* Description - either string or bullet list */}
                            {typeof currentItem.description === "string" ? (
                                <p className="text-muted-foreground text-sm leading-relaxed mb-4 text-justify">{currentItem.description}</p>
                            ) : (
                                <ul className="text-muted-foreground text-sm leading-relaxed mb-4 space-y-2 list-disc list-inside text-justify">
                                    {currentItem.description.map((point, idx) => (
                                        <li key={idx}>{point}</li>
                                    ))}
                                </ul>
                            )}

                            {currentItem.tags && (
                                <div className="flex flex-wrap gap-2 mt-6">
                                    {currentItem.tags.map((tag) => (
                                        <span key={tag} className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-md">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation controls */}
            <div className="flex items-center justify-center gap-2 mt-6">
                {/* Previous button */}
                <button
                    onClick={handlePrevious}
                    className="w-4 h-4 rounded flex items-center justify-center bg-primary/5 hover:bg-primary/10 transition-all"
                    aria-label="Previous item"
                >
                    <ChevronLeft className="text-primary" size={10} />
                </button>

                {/* Number indicators */}
                <div className="flex items-center gap-0.5">
                    {items.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-4 h-4 rounded flex items-center justify-center text-[8px] font-medium transition-all ${index === currentIndex
                                ? "bg-primary text-primary-foreground"
                                : "bg-primary/5 text-primary/60 hover:bg-primary/10 hover:text-primary"
                                }`}
                            aria-label={`Go to item ${index + 1}`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>

                {/* Next button */}
                <button
                    onClick={handleNext}
                    className="w-4 h-4 rounded flex items-center justify-center bg-primary/5 hover:bg-primary/10 transition-all"
                    aria-label="Next item"
                >
                    <ChevronRight className="text-primary" size={10} />
                </button>
            </div>
        </motion.div>
    )
}

