"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface SystemItem {
    title: string
    description: string
}

interface SystemsCarouselProps {
    items: SystemItem[]
}

export function SystemsCarousel({ items }: SystemsCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const itemsPerPage = 3

    const handlePrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? Math.max(0, items.length - itemsPerPage) : Math.max(0, prev - itemsPerPage)))
    }

    const handleNext = () => {
        setCurrentIndex((prev) => {
            const nextIndex = prev + itemsPerPage
            return nextIndex >= items.length ? 0 : nextIndex
        })
    }

    const currentItems = items.slice(currentIndex, currentIndex + itemsPerPage)
    const totalPages = Math.ceil(items.length / itemsPerPage)
    const currentPage = Math.floor(currentIndex / itemsPerPage)

    return (
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="relative">
            {/* Main content area */}
            <div className="relative min-h-[300px]">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.3 }}
                        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
                    >
                        {currentItems.map((item, idx) => (
                            <motion.div
                                key={currentIndex + idx}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="glass rounded-xl p-5 border border-primary/10 hover:bg-primary/5 transition-all h-full flex flex-col"
                            >
                                <h4 className="text-base font-semibold text-foreground mb-3">{item.title}</h4>
                                <p className="text-xs text-muted-foreground leading-relaxed flex-grow text-justify">{item.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation controls */}
            <div className="flex items-center justify-center gap-2 mt-6">
                {/* Previous button */}
                <button
                    onClick={handlePrevious}
                    className="w-4 h-4 rounded flex items-center justify-center bg-primary/5 hover:bg-primary/10 transition-all"
                    aria-label="Previous items"
                >
                    <ChevronLeft className="text-primary" size={10} />
                </button>

                {/* Page indicators */}
                <div className="flex items-center gap-0.5">
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index * itemsPerPage)}
                            className={`w-4 h-4 rounded flex items-center justify-center text-[8px] font-medium transition-all ${index === currentPage
                                ? "bg-primary text-primary-foreground"
                                : "bg-primary/5 text-primary/60 hover:bg-primary/10 hover:text-primary"
                                }`}
                            aria-label={`Go to page ${index + 1}`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>

                {/* Next button */}
                <button
                    onClick={handleNext}
                    className="w-4 h-4 rounded flex items-center justify-center bg-primary/5 hover:bg-primary/10 transition-all"
                    aria-label="Next items"
                >
                    <ChevronRight className="text-primary" size={10} />
                </button>
            </div>
        </motion.div>
    )
}
