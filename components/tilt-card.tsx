"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate, HTMLMotionProps } from "framer-motion"
import { useIsMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"

interface TiltCardProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode
    className?: string
    glassEffect?: boolean
    enableTilt?: boolean
}

export function TiltCard({ children, className, glassEffect = true, enableTilt = true, ...props }: TiltCardProps) {
    const ref = useRef<HTMLDivElement>(null)
    const [isHovered, setIsHovered] = useState(false)
    const isMobile = useIsMobile()

    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const mouseXSpring = useSpring(x, { stiffness: 400, damping: 25, mass: 0.5 })
    const mouseYSpring = useSpring(y, { stiffness: 400, damping: 25, mass: 0.5 })

    // Enhanced 3D tilt on desktop only
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"])
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"])
    const z = useTransform([mouseXSpring, mouseYSpring], () => isHovered && !isMobile ? 40 : 0)

    // Perspective scale effect
    const scale = useMotionValue(1)
    const scaleSpring = useSpring(scale, { stiffness: 300, damping: 20 })

    // Liquid glass glow effect
    const glowOpacity = useMotionValue(0)
    const glowOpacitySpring = useSpring(glowOpacity, { stiffness: 300, damping: 20 })

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current || isMobile || !enableTilt) return
        
        const rect = ref.current.getBoundingClientRect()
        const width = rect.width
        const height = rect.height
        const mouseX = e.clientX - rect.left
        const mouseY = e.clientY - rect.top

        const xPct = mouseX / width - 0.5
        const yPct = mouseY / height - 0.5

        x.set(xPct)
        y.set(yPct)
    }

    const handleMouseEnter = () => {
        if (isMobile || !enableTilt) return
        setIsHovered(true)
        scale.set(1.02)
        glowOpacity.set(1)
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
        x.set(0)
        y.set(0)
        scale.set(1)
        glowOpacity.set(0)
    }

    // Dynamic glow position based on mouse
    const glowBackground = useMotionTemplate`
        radial-gradient(
            500px circle at ${useTransform(x, v => (v + 0.5) * 100)}% ${useTransform(y, v => (v + 0.5) * 100)}%,
            rgba(59, 130, 246, 0.15),
            transparent 50%
        )`

    // Prefers reduced motion support
    const prefersReducedMotion = useReducedMotion()

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX: prefersReducedMotion ? 0 : rotateX,
                rotateY: prefersReducedMotion ? 0 : rotateY,
                transformStyle: "preserve-3d",
                scale: scaleSpring,
            }}
            className={cn(
                "relative z-10 transition-all duration-300",
                glassEffect && "glass",
                className
            )}
            animate={!isMobile && !prefersReducedMotion ? { y: isHovered ? -5 : 0 } : {}}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            {...props}
        >
            <div
                className="w-full h-full relative overflow-hidden"
                style={{
                    transform: isHovered && !isMobile ? "translateZ(50px)" : "translateZ(0px)",
                    transition: "transform 0.4s cubic-bezier(0.23, 1, 0.320, 1)"
                }}
            >
                {children}
            </div>

            {/* Enhanced liquid glass glow effect */}
            {glassEffect && !isMobile && (
                <motion.div
                    className="pointer-events-none absolute -inset-px rounded-2xl opacity-0"
                    style={{
                        opacity: glowOpacitySpring,
                        background: glowBackground,
                        filter: "blur(1px)",
                    }}
                />
            )}

            {/* Border shimmer effect */}
            {glassEffect && isHovered && !isMobile && (
                <motion.div
                    className="pointer-events-none absolute -inset-px rounded-2xl border border-transparent"
                    style={{
                        borderColor: "rgba(59, 130, 246, 0.3)",
                    }}
                    animate={{
                        boxShadow: [
                            "0 0 0 1px rgba(59, 130, 246, 0.1)",
                            "0 0 20px 1px rgba(59, 130, 246, 0.2)",
                            "0 0 0 1px rgba(59, 130, 246, 0.1)",
                        ],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            )}
        </motion.div>
    )
}

// Helper hook to check for prefers-reduced-motion
function useReducedMotion() {
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
        setPrefersReducedMotion(mediaQuery.matches)

        const handleChange = (e: MediaQueryListEvent) => {
            setPrefersReducedMotion(e.matches)
        }

        mediaQuery.addEventListener("change", handleChange)
        return () => mediaQuery.removeEventListener("change", handleChange)
    }, [])

    return prefersReducedMotion
}
