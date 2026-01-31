'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function CustomCursor() {
    const [isVisible, setIsVisible] = useState(false)
    const [isHovering, setIsHovering] = useState(false)
    const cursorX = useMotionValue(0)
    const cursorY = useMotionValue(0)
    const hideTimeoutRef = useRef<NodeJS.Timeout>()

    // Smooth spring config for natural cursor movement
    const springConfig = { damping: 20, stiffness: 300, mass: 0.1 }
    const cursorXSpring = useSpring(cursorX, springConfig)
    const cursorYSpring = useSpring(cursorY, springConfig)

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX)
            cursorY.set(e.clientY)
            setIsVisible(true)

            // Clear hide timeout if cursor is moving
            if (hideTimeoutRef.current) {
                clearTimeout(hideTimeoutRef.current)
            }
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

        window.addEventListener('mousemove', moveCursor)
        window.addEventListener('mouseenter', handleMouseEnter)
        window.addEventListener('mouseleave', handleMouseLeave)

        // Hide cursor when window loses focus
        const handleBlur = () => {
            setIsVisible(false)
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
            if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current)
        }
    }, [cursorX, cursorY])

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
