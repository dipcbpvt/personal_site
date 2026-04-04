"use client"

import { useEffect, useRef } from "react"

export function CursorGlow() {
    const glowRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        // Only show on non-touch devices
        if (window.matchMedia("(pointer: coarse)").matches) return

        const updateMousePosition = (e: MouseEvent) => {
            if (glowRef.current) {
                // Using transform: translate for optimal performance
                glowRef.current.style.transform = `translate(${e.clientX - 250}px, ${e.clientY - 250}px)`
            }
        }

        window.addEventListener("mousemove", updateMousePosition)
        return () => window.removeEventListener("mousemove", updateMousePosition)
    }, [])

    return (
        <div
            ref={glowRef}
            className="pointer-events-none fixed top-0 left-0 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[100px] z-20 pointer-events-none will-change-transform"
        />
    )
}
