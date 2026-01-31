'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function CustomCursor() {
    const [isVisible, setIsVisible] = useState(false)
    const [isHovering, setIsHovering] = useState(false)
    const [trailParticles, setTrailParticles] = useState<Array<{ id: number; x: number; y: number }>>([])
    const cursorX = useMotionValue(-100)
    const cursorY = useMotionValue(-100)
    const trailTimeoutRef = useRef<NodeJS.Timeout>()
    const particleIdRef = useRef(0)

    const springConfig = { damping: 25, stiffness: 200, mass: 0.5 }
    const cursorXSpring = useSpring(cursorX, springConfig)
    const cursorYSpring = useSpring(cursorY, springConfig)

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX)
            cursorY.set(e.clientY)
            setIsVisible(true)

            // Add trail particles with throttling
            if (Math.random() > 0.7) {
                const newParticle = {
                    id: particleIdRef.current++,
                    x: e.clientX,
                    y: e.clientY,
                }
                setTrailParticles((prev) => {
                    const updated = [...prev, newParticle]
                    return updated.slice(-15) // Keep only last 15 particles
                })
            }
        }

        const handleMouseLeave = () => {
            setIsVisible(false)
            setTrailParticles([])
        }

        const handleMouseEnter = () => setIsVisible(true)
        const handleHoverEnter = () => setIsHovering(true)
        const handleHoverLeave = () => setIsHovering(false)

        window.addEventListener('mousemove', moveCursor)
        window.addEventListener('mouseenter', handleMouseEnter)
        window.addEventListener('mouseleave', handleMouseLeave)

        // Add hover effects for interactive elements
        const interactiveElements = document.querySelectorAll(
            'a, button, input, textarea, select, [role="button"], [onclick], .cursor-interactive'
        )

        interactiveElements.forEach((el) => {
            el.addEventListener('mouseenter', handleHoverEnter)
            el.addEventListener('mouseleave', handleHoverLeave)
        })

        return () => {
            window.removeEventListener('mousemove', moveCursor)
            window.removeEventListener('mouseenter', handleMouseEnter)
            window.removeEventListener('mouseleave', handleMouseLeave)
            interactiveElements.forEach((el) => {
                el.removeEventListener('mouseenter', handleHoverEnter)
                el.removeEventListener('mouseleave', handleHoverLeave)
            })
            if (trailTimeoutRef.current) clearTimeout(trailTimeoutRef.current)
        }
    }, [cursorX, cursorY])

    // Clean up old particles
    useEffect(() => {
        if (trailParticles.length === 0) return

        trailTimeoutRef.current = setTimeout(() => {
            setTrailParticles((prev) => prev.slice(1))
        }, 50)

        return () => {
            if (trailTimeoutRef.current) clearTimeout(trailTimeoutRef.current)
        }
    }, [trailParticles])

    return (
        <>
            {/* Hide default cursor */}
            <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>

            {/* Trail particles */}
            {trailParticles.map((particle, index) => (
                <motion.div
                    key={particle.id}
                    className="fixed top-0 left-0 pointer-events-none rounded-full"
                    initial={{ opacity: 1, scale: 1 }}
                    animate={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{
                        width: '6px',
                        height: '6px',
                        backgroundColor: 'rgba(59, 130, 246, 0.6)',
                        left: `${particle.x}px`,
                        top: `${particle.y}px`,
                        transform: 'translate(-50%, -50%)',
                        boxShadow: '0 0 10px rgba(59, 130, 246, 0.8)',
                    }}
                />
            ))}

            {/* Custom cursor - only show when visible */}
            {isVisible && (
                <motion.div
                    className="fixed top-0 left-0 pointer-events-none z-[10000]"
                    style={{
                        x: cursorXSpring,
                        y: cursorYSpring,
                    }}
                >
                    {/* Main cursor circle */}
                    <motion.div
                        className="relative -translate-x-1/2 -translate-y-1/2"
                        animate={{
                            scale: isHovering ? 1.8 : 1,
                        }}
                        transition={{ duration: 0.25 }}
                    >
                        {/* Outer glow ring */}
                        <motion.div
                            className="absolute rounded-full border-2"
                            style={{
                                width: '36px',
                                height: '36px',
                                left: '-18px',
                                top: '-18px',
                                borderColor: 'rgba(59, 130, 246, 0.8)',
                                boxShadow: '0 0 15px rgba(59, 130, 246, 0.6), inset 0 0 15px rgba(59, 130, 246, 0.2)',
                            }}
                            animate={{
                                scale: isHovering ? 1.3 : 1,
                                opacity: isHovering ? 0.6 : 0.7,
                            }}
                            transition={{ duration: 0.25 }}
                        />

                        {/* Middle ring */}
                        <motion.div
                            className="absolute rounded-full border"
                            style={{
                                width: '24px',
                                height: '24px',
                                left: '-12px',
                                top: '-12px',
                                borderColor: 'rgba(59, 130, 246, 0.4)',
                            }}
                            animate={{
                                scale: isHovering ? 1.2 : 1,
                                opacity: isHovering ? 0.8 : 0.5,
                            }}
                            transition={{ duration: 0.25 }}
                        />

                        {/* Center dot */}
                        <motion.div
                            className="absolute rounded-full bg-gradient-to-br from-blue-400 to-blue-600"
                            style={{
                                width: '8px',
                                height: '8px',
                                left: '-4px',
                                top: '-4px',
                            }}
                            animate={{
                                scale: isHovering ? 0.6 : 1,
                                boxShadow: isHovering 
                                    ? '0 0 20px rgba(59, 130, 246, 1)' 
                                    : '0 0 10px rgba(59, 130, 246, 0.8)',
                            }}
                            transition={{ duration: 0.25 }}
                        />
                    </motion.div>
                </motion.div>
            )}
        </>
    )
}
