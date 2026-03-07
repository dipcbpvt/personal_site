"use client"

import { useRef, useState } from "react"
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

interface TiltCardProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode
    className?: string
}

export function TiltCard({ children, className, ...props }: TiltCardProps) {
    const ref = useRef<HTMLDivElement>(null)
    const [isHovered, setIsHovered] = useState(false)

    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 })
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 })

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"])
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"])

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return
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
        setIsHovered(true)
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
        x.set(0)
        y.set(0)
    }

    const background = useMotionTemplate`radial-gradient(400px circle at ${(x.get() + 0.5) * 100}% ${(y.get() + 0.5) * 100}%, rgba(59, 130, 246, 0.1), transparent 40%)`

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className={cn("relative z-10", className)}
            {...props}
        >
            <div
                style={{
                    transform: isHovered ? "translateZ(30px)" : "translateZ(0px)",
                    transition: "transform 0.3s ease-out"
                }}
                className="w-full h-full"
            >
                {children}
            </div>

            {/* Glow effect that follows mouse */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300"
                style={{
                    opacity: isHovered ? 1 : 0,
                    background,
                }}
            />
        </motion.div>
    )
}
