'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function CustomCursor() {
    const [isVisible, setIsVisible] = useState(false)
    const [isHovering, setIsHovering] = useState(false)
    const [trailParticles, setTrailParticles] = useState<Array<{ id: number; x: number; y: number }>>([])
    const cursorX = useMotionValue(0)
    const cursorY = useMotionValue(0)
    const trailTimeoutRef = useRef<NodeJS.Timeout>()
    const particleIdRef = useRef(0)

    // Much faster spring for responsive cursor
    const springConfig = { damping: 15, stiffness: 300, mass: 0.2 }
    const cursorXSpring = useSpring(cursorX, springConfig)
    const cursorYSpring = useSpring(cursorY, springConfig)

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX)
            cursorY.set(e.clientY)
            setIsVisible(true)

            // Add trail particles more frequently for better visibility
            if (Math.random() > 0.5) {
                const newParticle = {
                    id: particleIdRef.current++,
                    x: e.clientX,
                    y: e.clientY,
                }
                setTrailParticles((prev) => {
                    const updated = [...prev, newParticle]
                    return updated.slice(-20) // Keep more particles
                })
            }
        }

        const handleMouseLeave = (e: MouseEvent) => {
            // Check if cursor is actually leaving the window
            if (e.clientY <= 0 || e.clientX <= 0 || e.clientX >= window.innerWidth || e.clientY >= window.innerHeight) {
                setIsVisible(false)
                setTrailParticles([])
            }
        }

        const handleMouseEnter = () => setIsVisible(true)
        const handleHoverEnter = () => setIsHovering(true)
        const handleHoverLeave = () => setIsHovering(false)

        window.addEventListener('mousemove', moveCursor)
        window.addEventListener('mouseenter', handleMouseEnter)
        window.addEventListener('mouseleave', handleMouseLeave)
        
        // Hide cursor when window loses focus
        const handleBlur = () => {
            setIsVisible(false)
            setTrailParticles([])
        }
        window.addEventListener('blur', handleBlur)

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
            window.removeEventListener('blur', handleBlur)
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
            {trailParticles.map((particle, index) => {
                const opacity = 1 - index / trailParticles.length
                return (
                    <motion.div
                        key={particle.id}
                        className="fixed top-0 left-0 pointer-events-none rounded-full"
                        initial={{ opacity: 1, scale: 1 }}
                        animate={{ opacity: 0, scale: 0.3 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        style={{
                            width: '8px',
                            height: '8px',
                            backgroundColor: 'rgba(59, 130, 246, 0.8)',
                            left: `${particle.x}px`,
                            top: `${particle.y}px`,
                            transform: 'translate(-50%, -50%)',
                            boxShadow: '0 0 15px rgba(59, 130, 246, 1), inset 0 0 8px rgba(59, 130, 246, 0.6)',
                            opacity: opacity * 0.9,
                        }}
                    />
                )
            })}

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
                            scale: isHovering ? 2 : 1,
                        }}
                        transition={{ duration: 0.15, type: 'spring', stiffness: 300 }}
                    >
                        {/* Outer glow ring - very visible */}
                        <motion.div
                            className="absolute rounded-full border-2"
                            style={{
                                width: '44px',
                                height: '44px',
                                left: '-22px',
                                top: '-22px',
                                borderColor: 'rgba(59, 130, 246, 1)',
                                boxShadow: '0 0 20px rgba(59, 130, 246, 0.9), inset 0 0 20px rgba(59, 130, 246, 0.3)',
                            }}
                            animate={{
                                scale: isHovering ? 1.4 : 1,
                                opacity: isHovering ? 0.8 : 0.85,
                            }}
                            transition={{ duration: 0.15 }}
                        />

                        {/* Middle ring */}
                        <motion.div
                            className="absolute rounded-full border-2"
                            style={{
                                width: '28px',
                                height: '28px',
                                left: '-14px',
                                top: '-14px',
                                borderColor: 'rgba(59, 130, 246, 0.6)',
                            }}
                            animate={{
                                scale: isHovering ? 1.2 : 1,
                                opacity: isHovering ? 0.9 : 0.7,
                            }}
                            transition={{ duration: 0.15 }}
                        />

                        {/* Center dot - bright and prominent */}
                        <motion.div
                            className="absolute rounded-full bg-gradient-to-br from-blue-300 to-blue-500"
                            style={{
                                width: '10px',
                                height: '10px',
                                left: '-5px',
                                top: '-5px',
                            }}
                            animate={{
                                scale: isHovering ? 0.5 : 1,
                                boxShadow: isHovering 
                                    ? '0 0 25px rgba(59, 130, 246, 1)' 
                                    : '0 0 15px rgba(59, 130, 246, 1)',
                            }}
                            transition={{ duration: 0.15 }}
                        />
                    </motion.div>
                </motion.div>
            )}
        </>
    )
}
