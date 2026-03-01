"use client"

import { useEffect, useRef, useCallback, useState } from "react"

/**
 * RobotCursor — A tiny, animated robot that replaces the native cursor.
 *
 * • Follows the mouse with spring-physics interpolation (smooth, no jitter).
 * • Legs animate in a walking cycle while the user scrolls.
 * • Eyes react when hovering interactive elements.
 * • Smoothly fades out when the cursor leaves the viewport.
 * • Entirely hidden on touch devices and prefers-reduced-motion.
 */
export function RobotCursor() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const stateRef = useRef({
        // target = raw mouse position; current = eased position
        targetX: -100,
        targetY: -100,
        currentX: -100,
        currentY: -100,
        visible: false,
        opacity: 0,
        isScrolling: false,
        scrollFrame: 0,        // continuous frame counter for walk cycle
        isHovering: false,     // hovering over interactive element
        isClicking: false,
        clickScale: 1,         // instant squish on click (1 = normal)
        clickBounce: 0,        // upward bounce on click
        lastScrollTime: 0,
        animFrameId: 0,
        facingRight: true,     // direction the robot faces
        prevTargetX: -100,
        // Walk bounce
        bounceY: 0,
        // Sparkle particles
        sparkles: [] as { x: number; y: number; life: number; vx: number; vy: number; size: number; hue: number }[],
    })

    const [mounted, setMounted] = useState(false)

    // ---- Draw the robot on canvas ----
    const drawRobot = useCallback((ctx: CanvasRenderingContext2D, x: number, y: number) => {
        const s = stateRef.current
        const scale = 0.65
        const size = 28 * scale // overall robot size reference
        const halfSize = size / 2

        // Offset so robot sits above the cursor point
        const robotX = x
        const robotY = y - size * 0.3 - s.clickBounce

        // Walk cycle
        const walkPhase = s.scrollFrame * 0.35 // speed of walk cycle
        const legSwing = s.isScrolling ? Math.sin(walkPhase) * 5 : 0
        const armSwing = s.isScrolling ? Math.sin(walkPhase + Math.PI) * 4 : 0
        const bodyBounce = s.isScrolling ? Math.abs(Math.sin(walkPhase)) * 2 : 0

        // Facing direction
        const dir = s.facingRight ? 1 : -1

        ctx.save()
        ctx.translate(robotX, robotY - bodyBounce)
        // Click squish: scale wider and shorter
        ctx.scale(1 + (1 - s.clickScale) * 0.5, s.clickScale)

        // Shadow under robot
        ctx.beginPath()
        ctx.ellipse(0, halfSize * 0.55 + bodyBounce, 10, 3, 0, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0,0,0,${0.15 * s.opacity})`
        ctx.fill()

        // ---- Antenna ----
        const antennaWobble = s.isScrolling ? Math.sin(walkPhase * 2) * 2 : 0
        ctx.strokeStyle = `rgba(100,160,255,${0.8 * s.opacity})`
        ctx.lineWidth = 1.5
        ctx.beginPath()
        ctx.moveTo(0, -halfSize * 0.5)
        ctx.lineTo(antennaWobble, -halfSize * 0.85)
        ctx.stroke()

        // Antenna tip glow
        const tipGlow = ctx.createRadialGradient(antennaWobble, -halfSize * 0.85, 0, antennaWobble, -halfSize * 0.85, 5)
        tipGlow.addColorStop(0, `rgba(100,200,255,${0.9 * s.opacity})`)
        tipGlow.addColorStop(1, `rgba(100,200,255,${0 * s.opacity})`)
        ctx.fillStyle = tipGlow
        ctx.beginPath()
        ctx.arc(antennaWobble, -halfSize * 0.85, 5, 0, Math.PI * 2)
        ctx.fill()

        // Antenna ball
        ctx.fillStyle = `rgba(120,200,255,${s.opacity})`
        ctx.beginPath()
        ctx.arc(antennaWobble, -halfSize * 0.85, 2.5, 0, Math.PI * 2)
        ctx.fill()

        // ---- Head / Body (combined rounded rectangle) ----
        const bodyW = 18
        const bodyH = 20
        const bodyTop = -halfSize * 0.5
        const cornerR = 5

        // Body gradient
        const bodyGrad = ctx.createLinearGradient(-bodyW / 2, bodyTop, bodyW / 2, bodyTop + bodyH)
        bodyGrad.addColorStop(0, `rgba(50,80,120,${s.opacity})`)
        bodyGrad.addColorStop(0.5, `rgba(60,100,160,${s.opacity})`)
        bodyGrad.addColorStop(1, `rgba(40,70,110,${s.opacity})`)
        ctx.fillStyle = bodyGrad
        ctx.beginPath()
        ctx.roundRect(-bodyW / 2, bodyTop, bodyW, bodyH, cornerR)
        ctx.fill()

        // Body outline glow
        ctx.strokeStyle = `rgba(100,180,255,${0.5 * s.opacity})`
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.roundRect(-bodyW / 2, bodyTop, bodyW, bodyH, cornerR)
        ctx.stroke()

        // ---- Face plate ----
        const faceY = bodyTop + 3
        const faceH = 10
        const faceW = 14
        ctx.fillStyle = `rgba(20,30,50,${0.85 * s.opacity})`
        ctx.beginPath()
        ctx.roundRect(-faceW / 2, faceY, faceW, faceH, 3)
        ctx.fill()

        // ---- Eyes ----
        const eyeY = faceY + faceH / 2
        const eyeSpacing = 3.5
        const eyeSize = s.isHovering ? 2.8 : 2

        // Left eye
        ctx.fillStyle = s.isHovering
            ? `rgba(255,200,50,${s.opacity})`   // excited golden
            : s.isClicking
                ? `rgba(255,80,80,${s.opacity})`  // click red
                : `rgba(80,200,255,${s.opacity})` // normal cyan

        ctx.beginPath()
        if (s.isHovering) {
            // Star-shaped excited eyes
            for (let i = 0; i < 5; i++) {
                const angle = (i * 2 * Math.PI) / 5 - Math.PI / 2
                const outerX = -eyeSpacing + Math.cos(angle) * eyeSize
                const outerY = eyeY + Math.sin(angle) * eyeSize
                const innerAngle = angle + Math.PI / 5
                const innerX = -eyeSpacing + Math.cos(innerAngle) * (eyeSize * 0.4)
                const innerY = eyeY + Math.sin(innerAngle) * (eyeSize * 0.4)
                if (i === 0) ctx.moveTo(outerX, outerY)
                else ctx.lineTo(outerX, outerY)
                ctx.lineTo(innerX, innerY)
            }
            ctx.closePath()
            ctx.fill()

            ctx.beginPath()
            for (let i = 0; i < 5; i++) {
                const angle = (i * 2 * Math.PI) / 5 - Math.PI / 2
                const outerX = eyeSpacing + Math.cos(angle) * eyeSize
                const outerY = eyeY + Math.sin(angle) * eyeSize
                const innerAngle = angle + Math.PI / 5
                const innerX = eyeSpacing + Math.cos(innerAngle) * (eyeSize * 0.4)
                const innerY = eyeY + Math.sin(innerAngle) * (eyeSize * 0.4)
                if (i === 0) ctx.moveTo(outerX, outerY)
                else ctx.lineTo(outerX, outerY)
                ctx.lineTo(innerX, innerY)
            }
            ctx.closePath()
            ctx.fill()
        } else {
            // Normal round eyes
            ctx.arc(-eyeSpacing, eyeY, eyeSize, 0, Math.PI * 2)
            ctx.fill()

            ctx.beginPath()
            ctx.arc(eyeSpacing, eyeY, eyeSize, 0, Math.PI * 2)
            ctx.fill()
        }

        // Eye glow
        const eyeGlow = ctx.createRadialGradient(-eyeSpacing, eyeY, 0, -eyeSpacing, eyeY, eyeSize * 2.5)
        eyeGlow.addColorStop(0, s.isHovering
            ? `rgba(255,200,50,${0.3 * s.opacity})`
            : `rgba(80,200,255,${0.3 * s.opacity})`)
        eyeGlow.addColorStop(1, `rgba(0,0,0,0)`)
        ctx.fillStyle = eyeGlow
        ctx.beginPath()
        ctx.arc(-eyeSpacing, eyeY, eyeSize * 2.5, 0, Math.PI * 2)
        ctx.fill()

        const eyeGlow2 = ctx.createRadialGradient(eyeSpacing, eyeY, 0, eyeSpacing, eyeY, eyeSize * 2.5)
        eyeGlow2.addColorStop(0, s.isHovering
            ? `rgba(255,200,50,${0.3 * s.opacity})`
            : `rgba(80,200,255,${0.3 * s.opacity})`)
        eyeGlow2.addColorStop(1, `rgba(0,0,0,0)`)
        ctx.fillStyle = eyeGlow2
        ctx.beginPath()
        ctx.arc(eyeSpacing, eyeY, eyeSize * 2.5, 0, Math.PI * 2)
        ctx.fill()

        // ---- Mouth / display ----
        if (s.isScrolling) {
            // Happy mouth when walking
            ctx.strokeStyle = `rgba(80,200,255,${0.6 * s.opacity})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.arc(0, eyeY + 3.5, 2, 0, Math.PI)
            ctx.stroke()
        }

        // ---- Chest indicator light ----
        const chestY = bodyTop + faceH + 5.5
        const indicatorPulse = (Math.sin(Date.now() * 0.005) + 1) / 2
        ctx.fillStyle = `rgba(80,255,120,${(0.4 + indicatorPulse * 0.5) * s.opacity})`
        ctx.beginPath()
        ctx.arc(0, chestY, 1.5, 0, Math.PI * 2)
        ctx.fill()

        // Chest light glow
        const chestGlow = ctx.createRadialGradient(0, chestY, 0, 0, chestY, 6)
        chestGlow.addColorStop(0, `rgba(80,255,120,${0.2 * indicatorPulse * s.opacity})`)
        chestGlow.addColorStop(1, `rgba(0,0,0,0)`)
        ctx.fillStyle = chestGlow
        ctx.beginPath()
        ctx.arc(0, chestY, 6, 0, Math.PI * 2)
        ctx.fill()

        // ---- Arms ----
        const armY = bodyTop + 8
        ctx.strokeStyle = `rgba(70,120,180,${s.opacity})`
        ctx.lineWidth = 2.5
        ctx.lineCap = "round"

        // Left arm
        ctx.beginPath()
        ctx.moveTo(-bodyW / 2 - 1, armY)
        ctx.lineTo(-bodyW / 2 - 5, armY + 6 + armSwing)
        ctx.stroke()

        // Right arm
        ctx.beginPath()
        ctx.moveTo(bodyW / 2 + 1, armY)
        ctx.lineTo(bodyW / 2 + 5, armY + 6 - armSwing)
        ctx.stroke()

        // Arm hands (small circles)
        ctx.fillStyle = `rgba(90,150,210,${s.opacity})`
        ctx.beginPath()
        ctx.arc(-bodyW / 2 - 5, armY + 6 + armSwing, 2, 0, Math.PI * 2)
        ctx.fill()
        ctx.beginPath()
        ctx.arc(bodyW / 2 + 5, armY + 6 - armSwing, 2, 0, Math.PI * 2)
        ctx.fill()

        // ---- Legs ----
        const legY = bodyTop + bodyH - 1
        ctx.strokeStyle = `rgba(70,120,180,${s.opacity})`
        ctx.lineWidth = 2.5

        // Left leg
        ctx.beginPath()
        ctx.moveTo(-3.5, legY)
        ctx.lineTo(-3.5 - legSwing, legY + 7)
        ctx.stroke()

        // Right leg  
        ctx.beginPath()
        ctx.moveTo(3.5, legY)
        ctx.lineTo(3.5 + legSwing, legY + 7)
        ctx.stroke()

        // Feet
        ctx.fillStyle = `rgba(60,100,160,${s.opacity})`
        ctx.beginPath()
        ctx.ellipse(-3.5 - legSwing, legY + 7.5, 3, 1.5, 0, 0, Math.PI * 2)
        ctx.fill()
        ctx.beginPath()
        ctx.ellipse(3.5 + legSwing, legY + 7.5, 3, 1.5, 0, 0, Math.PI * 2)
        ctx.fill()

        ctx.restore()

        // ---- Sparkles when hovering interactive ----
        if (s.isHovering) {
            if (Math.random() < 0.3) {
                s.sparkles.push({
                    x: robotX + (Math.random() - 0.5) * 20,
                    y: robotY + (Math.random() - 0.5) * 20 - bodyBounce,
                    life: 1,
                    vx: (Math.random() - 0.5) * 1.5,
                    vy: -Math.random() * 2 - 0.5,
                    size: Math.random() * 2 + 1,
                    hue: Math.random() * 60 + 180, // cyan-blue range
                })
            }
        }

        // Draw & update sparkles
        for (let i = s.sparkles.length - 1; i >= 0; i--) {
            const sp = s.sparkles[i]
            sp.x += sp.vx
            sp.y += sp.vy
            sp.life -= 0.03
            if (sp.life <= 0) {
                s.sparkles.splice(i, 1)
                continue
            }
            ctx.fillStyle = `hsla(${sp.hue}, 100%, 70%, ${sp.life * s.opacity})`
            ctx.beginPath()
            ctx.arc(sp.x, sp.y, sp.size * sp.life, 0, Math.PI * 2)
            ctx.fill()
        }
    }, [])

    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        if (!mounted) return

        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext("2d")
        if (!ctx) return

        const s = stateRef.current

        // Resize canvas to full window
        const resize = () => {
            const dpr = window.devicePixelRatio || 1
            canvas.width = window.innerWidth * dpr
            canvas.height = window.innerHeight * dpr
            canvas.style.width = `${window.innerWidth}px`
            canvas.style.height = `${window.innerHeight}px`
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
        }
        resize()
        window.addEventListener("resize", resize)

        // Mouse move
        const onMouseMove = (e: MouseEvent) => {
            const dx = e.clientX - s.prevTargetX
            if (Math.abs(dx) > 2) {
                s.facingRight = dx > 0
            }
            s.prevTargetX = s.targetX
            s.targetX = e.clientX
            s.targetY = e.clientY
            s.visible = true
        }

        // Scroll — use wheel event to capture both vertical AND horizontal scrolling
        let scrollTimeout: ReturnType<typeof setTimeout>
        const onWheel = () => {
            s.isScrolling = true
            s.lastScrollTime = Date.now()
            clearTimeout(scrollTimeout)
            scrollTimeout = setTimeout(() => {
                s.isScrolling = false
            }, 200)
        }
        // Also listen to native scroll for page-level scrolls
        const onScroll = () => {
            s.isScrolling = true
            s.lastScrollTime = Date.now()
            clearTimeout(scrollTimeout)
            scrollTimeout = setTimeout(() => {
                s.isScrolling = false
            }, 200)
        }

        // Hover interactive elements
        const onMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            if (
                target.tagName === "A" ||
                target.tagName === "BUTTON" ||
                target.closest("a") ||
                target.closest("button") ||
                target.classList.contains("cursor-pointer") ||
                target.closest("[role='button']")
            ) {
                s.isHovering = true
            }
        }
        const onMouseOut = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            if (
                target.tagName === "A" ||
                target.tagName === "BUTTON" ||
                target.closest("a") ||
                target.closest("button") ||
                target.classList.contains("cursor-pointer") ||
                target.closest("[role='button']")
            ) {
                s.isHovering = false
            }
        }

        // Click — instant squish + bounce
        const onMouseDown = () => {
            s.isClicking = true
            s.clickScale = 0.7    // squish immediately
            s.clickBounce = 6     // bounce up
        }
        const onMouseUp = () => {
            s.isClicking = false
        }

        // Leave / enter viewport
        const onDocLeave = () => { s.visible = false }
        const onDocEnter = () => { s.visible = true }
        const onBlur = () => { s.visible = false }
        const onFocus = () => { s.visible = true }

        document.addEventListener("mousemove", onMouseMove)
        window.addEventListener("wheel", onWheel, { passive: true })
        window.addEventListener("scroll", onScroll, { passive: true })
        document.addEventListener("mouseover", onMouseOver, true)
        document.addEventListener("mouseout", onMouseOut, true)
        document.addEventListener("mousedown", onMouseDown)
        document.addEventListener("mouseup", onMouseUp)
        document.addEventListener("mouseleave", onDocLeave)
        document.addEventListener("mouseenter", onDocEnter)
        window.addEventListener("blur", onBlur)
        window.addEventListener("focus", onFocus)

        // Animation loop
        const loop = () => {
            ctx.clearRect(0, 0, canvas.width / (window.devicePixelRatio || 1), canvas.height / (window.devicePixelRatio || 1))

            // Spring interpolation towards target
            const ease = 0.25
            s.currentX += (s.targetX - s.currentX) * ease
            s.currentY += (s.targetY - s.currentY) * ease

            // Smooth opacity fade in/out
            const targetOpacity = s.visible ? 1 : 0
            s.opacity += (targetOpacity - s.opacity) * 0.15

            // Walk frame counter
            if (s.isScrolling) {
                s.scrollFrame += 1
            }

            // Animate click scale back to normal (spring-like)
            s.clickScale += (1 - s.clickScale) * 0.25
            s.clickBounce += (0 - s.clickBounce) * 0.18

            // Only draw if there's some opacity
            if (s.opacity > 0.01) {
                drawRobot(ctx, s.currentX, s.currentY)
            }

            s.animFrameId = requestAnimationFrame(loop)
        }
        s.animFrameId = requestAnimationFrame(loop)

        return () => {
            cancelAnimationFrame(s.animFrameId)
            window.removeEventListener("resize", resize)
            document.removeEventListener("mousemove", onMouseMove)
            window.removeEventListener("wheel", onWheel)
            window.removeEventListener("scroll", onScroll)
            document.removeEventListener("mouseover", onMouseOver, true)
            document.removeEventListener("mouseout", onMouseOut, true)
            document.removeEventListener("mousedown", onMouseDown)
            document.removeEventListener("mouseup", onMouseUp)
            document.removeEventListener("mouseleave", onDocLeave)
            document.removeEventListener("mouseenter", onDocEnter)
            window.removeEventListener("blur", onBlur)
            window.removeEventListener("focus", onFocus)
            clearTimeout(scrollTimeout)
        }
    }, [mounted, drawRobot])

    if (!mounted) return null

    return (
        <>
            {/* Hide default cursor globally */}
            <style dangerouslySetInnerHTML={{
                __html: `
        @media (pointer: fine) {
          *, *::before, *::after {
            cursor: none !important;
          }
        }
      ` }} />
            <canvas
                ref={canvasRef}
                className="fixed inset-0 pointer-events-none"
                style={{ zIndex: 99999 }}
                aria-hidden="true"
            />
        </>
    )
}
