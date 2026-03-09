'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function CustomCursor() {
    const [isVisible, setIsVisible] = useState(false)
    const [isHovering, setIsHovering] = useState(false)
    const [isTouchDevice, setIsTouchDevice] = useState(false)
    const cursorX = useMotionValue(0)
    const cursorY = useMotionValue(0)
    const hideTimeoutRef = useRef<NodeJS.Timeout>()

    // Smooth spring config for natural cursor movement
    const springConfig = { damping: 25, stiffness: 250, mass: 0.15 }
    const cursorXSpring = useSpring(cursorX, springConfig)
    const cursorYSpring = useSpring(cursorY, springConfig)

    useEffect(() => {
        // Detect touch device
        const hasTouchScreen = () => {
            return (
                (typeof window !== 'undefined' &&
                    ('ontouchstart' in window ||
                        (navigator as any).maxTouchPoints > 0 ||
                        (navigator as any).msMaxTouchPoints > 0))
            )
        }
        
        if (hasTouchScreen()) {
            setIsTouchDevice(true)
            return
        }

        let rafId: number
        const moveCursor = (e: MouseEvent) => {
            cancelAnimationFrame(rafId)
            rafId = requestAnimationFrame(() => {
                cursorX.set(e.clientX)
                cursorY.set(e.clientY)
                setIsVisible(true)

                // Clear hide timeout if cursor is moving
                if (hideTimeoutRef.current) {
                    clearTimeout(hideTimeoutRef.current)
                }
            })
        }

        const handleMouseLeave = () => {
            // Hide cursor after it leaves the window
            hideTimeoutRef.current = setTimeout(() => {
                setIsVisible(false)
            }, 100)
        }

        const handleMouseEnter = () => {
            setIsVisible(true)
            if (hideTimeoutRef.current) {
                clearTimeout(hideTimeoutRef.current)
            }
        }

        const handleHoverEnter = () => setIsHovering(true)
        const handleHoverLeave = () => setIsHovering(false)

        window.addEventListener('mousemove', moveCursor, { passive: true })
        window.addEventListener('mouseenter', handleMouseEnter, { passive: true })
        window.addEventListener('mouseleave', handleMouseLeave, { passive: true })

        // Hide cursor when window loses focus
        const handleBlur = () => {
            setIsVisible(false)
        }
        window.addEventListener('blur', handleBlur, { passive: true })

        // Delegate event handling for interactive elements
        const handleInteractiveHover = (e: Event) => {
            const target = e.target as HTMLElement
            if (target?.closest('a, button, input, textarea, select, [role="button"], .cursor-interactive')) {
                setIsHovering(e.type === 'mouseenter')
            }
        }

        document.addEventListener('mouseenter', handleInteractiveHover, { passive: true, capture: true })
        document.addEventListener('mouseleave', handleInteractiveHover, { passive: true, capture: true })

        return () => {
            cancelAnimationFrame(rafId)
            window.removeEventListener('mousemove', moveCursor)
            window.removeEventListener('mouseenter', handleMouseEnter)
            window.removeEventListener('mouseleave', handleMouseLeave)
            window.removeEventListener('blur', handleBlur)
            document.removeEventListener('mouseenter', handleInteractiveHover, true)
            document.removeEventListener('mouseleave', handleInteractiveHover, true)
            if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current)
        }
    }, [cursorX, cursorY])

    // Don't render on touch devices
    if (isTouchDevice) return null

    return (
        <>
            {/* Hide default cursor */}
            <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>

            {/* Custom cursor - simple and elegant */}
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
                            scale: isHovering ? 1.5 : 1,
                        }}
                        transition={{ duration: 0.2, type: 'spring', stiffness: 400, damping: 25 }}
                    >
                        {/* Outer ring */}
                        <motion.div
                            className="absolute rounded-full border-1.5"
                            style={{
                                width: '20px',
                                height: '20px',
                                left: '-10px',
                                top: '-10px',
                                borderColor: 'rgba(59, 130, 246, 0.7)',
                            }}
                            animate={{
                                scale: isHovering ? 1.3 : 1,
                                opacity: isHovering ? 0.9 : 0.6,
                            }}
                            transition={{ duration: 0.2 }}
                        />

                        {/* Center dot */}
                        <motion.div
                            className="absolute rounded-full"
                            style={{
                                width: '6px',
                                height: '6px',
                                left: '-3px',
                                top: '-3px',
                                backgroundColor: 'rgba(59, 130, 246, 1)',
                                boxShadow: '0 0 8px rgba(59, 130, 246, 0.8)',
                            }}
                            animate={{
                                scale: isHovering ? 0.6 : 1,
                            }}
                            transition={{ duration: 0.2 }}
                        />
                    </motion.div>
                </motion.div>
            )}
        </>
    )
}
