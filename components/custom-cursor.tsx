'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function CustomCursor() {
    const [isVisible, setIsVisible] = useState(false)
    const [isHovering, setIsHovering] = useState(false)
    const cursorX = useMotionValue(-100)
    const cursorY = useMotionValue(-100)

    const springConfig = { damping: 25, stiffness: 200, mass: 0.5 }
    const cursorXSpring = useSpring(cursorX, springConfig)
    const cursorYSpring = useSpring(cursorY, springConfig)

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX)
            cursorY.set(e.clientY)
            setIsVisible(true)
        }

        const handleMouseEnter = () => setIsHovering(true)
        const handleMouseLeave = () => setIsHovering(false)

        // Add event listener for cursor movement
        window.addEventListener('mousemove', moveCursor)

        // Add hover effects for interactive elements
        const interactiveElements = document.querySelectorAll(
            'a, button, input, textarea, select, [role="button"], [onclick]'
        )

        interactiveElements.forEach((el) => {
            el.addEventListener('mouseenter', handleMouseEnter)
            el.addEventListener('mouseleave', handleMouseLeave)
        })

        return () => {
            window.removeEventListener('mousemove', moveCursor)
            interactiveElements.forEach((el) => {
                el.removeEventListener('mouseenter', handleMouseEnter)
                el.removeEventListener('mouseleave', handleMouseLeave)
            })
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

            {/* Custom cursor */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[10000] mix-blend-difference"
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
                    transition={{ duration: 0.2 }}
                >
                    {/* Outer ring */}
                    <motion.div
                        className="absolute rounded-full border-2 border-white"
                        style={{
                            width: '32px',
                            height: '32px',
                            left: '-16px',
                            top: '-16px',
                        }}
                        animate={{
                            scale: isHovering ? 1.2 : 1,
                            opacity: isHovering ? 0.5 : 0.8,
                        }}
                        transition={{ duration: 0.2 }}
                    />

                    {/* Inner dot */}
                    <motion.div
                        className="absolute rounded-full bg-white"
                        style={{
                            width: '8px',
                            height: '8px',
                            left: '-4px',
                            top: '-4px',
                        }}
                        animate={{
                            scale: isHovering ? 0.5 : 1,
                        }}
                        transition={{ duration: 0.2 }}
                    />
                </motion.div>
            </motion.div>
        </>
    )
}
