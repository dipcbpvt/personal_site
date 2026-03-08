"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { useIsMobile } from "@/hooks/use-mobile"

const sections = [
    { id: "intro", label: "The Story So Far" },
    { id: "philosophy", label: "Philosophy & Values" },
    { id: "career", label: "Career Chapters" },
    { id: "execution", label: "Execution Model" },
    { id: "hobbies", label: "Passions & Interests" },
]

export function LeftSidebar() {
    const [activeSection, setActiveSection] = useState("intro")
    const prevScrollY = useRef(0)
    const isMobile = useIsMobile()

    useEffect(() => {
        let currentActiveId = activeSection

        const observer = new IntersectionObserver(
            (entries) => {
                const currentScrollY = window.scrollY
                const scrollingDown = currentScrollY > prevScrollY.current

                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        currentActiveId = entry.target.id
                    }
                })

                setActiveSection(currentActiveId)
                prevScrollY.current = currentScrollY
            },
            { rootMargin: "0px 0px -40% 0px", threshold: [0, 0.5, 1] }
        )

        sections.forEach(({ id }) => {
            const element = document.getElementById(id)
            if (element) observer.observe(element)
        })

        return () => observer.disconnect()
    }, [activeSection])

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault()
        const element = document.getElementById(id)
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 100, // Offset for navbar
                behavior: "smooth",
            })
        }
    }

    // Mobile version - horizontal scrollable tabs
    if (isMobile) {
        return (
            <aside className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-t border-border/50 glass">
                <nav className="flex gap-0 overflow-x-auto overflow-y-hidden py-2 px-2 scrollbar-hide">
                    {sections.map(({ id, label }) => {
                        const isActive = activeSection === id
                        return (
                            <a
                                key={id}
                                href={`#${id}`}
                                onClick={(e) => handleClick(e, id)}
                                className={cn(
                                    "flex-shrink-0 px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap",
                                    isActive
                                        ? "bg-primary text-primary-foreground shadow-lg"
                                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                                )}
                            >
                                {label}
                            </a>
                        )
                    })}
                </nav>
            </aside>
        )
    }

    // Desktop version - vertical sidebar
    return (
        <aside className="hidden lg:block w-[240px] sticky top-32 h-[calc(100vh-8rem)] overflow-y-auto overflow-x-hidden p-4">
            <nav className="flex flex-col gap-2">
                {sections.map(({ id, label }) => {
                    const isActive = activeSection === id
                    return (
                        <a
                            key={id}
                            href={`#${id}`}
                            onClick={(e) => handleClick(e, id)}
                            className={cn(
                                "group relative flex items-center gap-4 px-4 py-3 rounded-2xl transition-all duration-300",
                                isActive
                                    ? "bg-primary/10 text-primary font-medium"
                                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                            )}
                        >
                            <div
                                className={cn(
                                    "h-[1px] transition-all duration-300",
                                    isActive ? "w-8 bg-primary" : "w-4 bg-muted-foreground/30 group-hover:bg-foreground/50 group-hover:w-6"
                                )}
                            />
                            <span className="text-sm">{label}</span>
                            {isActive && (
                                <motion.div
                                    layoutId="active-sidebar"
                                    className="absolute inset-0 bg-primary/10 rounded-2xl -z-10"
                                    initial={false}
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                        </a>
                    )
                })}
            </nav>
        </aside>
    )
}
