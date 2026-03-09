"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function CursorGlow() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        // Only show on non-touch devices
        if (window.matchMedia("(pointer: coarse)").matches) return

        setIsVisible(true)

        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }

        window.addEventListener("mousemove", updateMousePosition)
        return () => window.removeEventListener("mousemove", updateMousePosition)
    }, [])

    if (!isVisible) return null

    return (
        <motion.div
            className="pointer-events-none fixed top-0 left-0 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[100px] z-20"
            animate={{
                x: mousePosition.x - 250,
                y: mousePosition.y - 250,
            }}
            transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
            style={{ willChange: "transform" }}
        />
    )
}
