"use client"

import { useEffect, useState, useRef } from "react"

export function RobotCursor() {
    // Cursor tracking using useRef for performance
    const cursorRef = useRef<HTMLDivElement>(null)
    const [isActive, setIsActive] = useState(false)
    const [isScrolling, setIsScrolling] = useState(false)
    const [isJumping, setIsJumping] = useState(false)

    useEffect(() => {
        let timeoutId: NodeJS.Timeout
        let scrollTimeoutId: NodeJS.Timeout
        let jumpTimeoutId: NodeJS.Timeout

        const handleMouseMove = (e: MouseEvent) => {
            if (cursorRef.current) {
                cursorRef.current.style.left = `${e.clientX}px`
                cursorRef.current.style.top = `${e.clientY}px`
                cursorRef.current.style.opacity = "1"
            }
            clearTimeout(timeoutId)
        }

        const handleMouseDown = () => {
            setIsActive(true)
            setIsJumping(true)
            clearTimeout(jumpTimeoutId)
            jumpTimeoutId = setTimeout(() => setIsJumping(false), 500)
        }

        const handleMouseUp = () => {
            setIsActive(false)
        }

        const handleScroll = () => {
            setIsScrolling(true)
            if (cursorRef.current) {
                cursorRef.current.style.opacity = "1"
            }
            clearTimeout(scrollTimeoutId)
            scrollTimeoutId = setTimeout(() => {
                setIsScrolling(false)
            }, 150)
        }

        const handleMouseEnter = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            if (
                target.tagName === "A" ||
                target.tagName === "BUTTON" ||
                target.onclick ||
                target.classList.contains("cursor-pointer") ||
                target.closest("a") ||
                target.closest("button")
            ) {
                setIsActive(true)
            }
        }

        const handleMouseLeave = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            if (
                target.tagName === "A" ||
                target.tagName === "BUTTON" ||
                target.onclick ||
                target.classList.contains("cursor-pointer") ||
                target.closest("a") ||
                target.closest("button")
            ) {
                setIsActive(false)
            }
        }

        const handleMouseOut = () => {
            timeoutId = setTimeout(() => {
                if (cursorRef.current) {
                    cursorRef.current.style.opacity = "0"
                }
            }, 100)
        }

        document.addEventListener("mousemove", handleMouseMove)
        document.addEventListener("mousedown", handleMouseDown)
        document.addEventListener("mouseup", handleMouseUp)
        window.addEventListener("scroll", handleScroll, { passive: true })
        document.addEventListener("mouseover", handleMouseEnter, true)
        document.addEventListener("mouseout", handleMouseLeave, true)
        document.addEventListener("mouseleave", handleMouseOut)

        return () => {
            document.removeEventListener("mousemove", handleMouseMove)
            document.removeEventListener("mousedown", handleMouseDown)
            document.removeEventListener("mouseup", handleMouseUp)
            window.removeEventListener("scroll", handleScroll)
            document.removeEventListener("mouseover", handleMouseEnter, true)
            document.removeEventListener("mouseout", handleMouseLeave, true)
            document.removeEventListener("mouseleave", handleMouseOut)
            clearTimeout(timeoutId)
            clearTimeout(scrollTimeoutId)
            clearTimeout(jumpTimeoutId)
        }
    }, [])

    return (
        <div
            ref={cursorRef}
            className={`robot-cursor ${isJumping ? "robot-cursor-jumping" : ""} ${isScrolling ? "robot-cursor-walking" : ""
                } ${isActive ? "robot-cursor-active" : ""}`}
        />
    )
}
