"use client"

import { useEffect, useRef } from "react"

export function SpotlightBg() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Only track mouse if it is not a mobile device
    if (window.innerWidth < 768) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        // Use window sizes directly since it is fixed inset-0
        const x = (e.clientX / window.innerWidth) * 100
        const y = (e.clientY / window.innerHeight) * 100
        containerRef.current.style.setProperty("--mouse-x", `${x}%`)
        containerRef.current.style.setProperty("--mouse-y", `${y}%`)
      }
    }

    // Passive listener for better scroll/touch performance
    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div ref={containerRef} className="fixed inset-0 spotlight pointer-events-none z-0 overflow-hidden">
      {/* Primary Blob - Using CSS for performance */}
      <div
        className="absolute top-1/4 -left-32 w-64 md:w-96 h-64 md:h-96 rounded-full opacity-10 md:opacity-20 color-flash animate-float-slow"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)",
        }}
      />
      
      {/* Secondary Blob */}
      <div
        className="absolute bottom-1/4 -right-32 w-80 md:w-[500px] h-80 md:h-[500px] rounded-full opacity-5 md:opacity-10 color-flash animate-float-reverse"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.4) 0%, transparent 70%)",
        }}
      />

      {/* Grid Pattern - Simplified */}
      <div
        className="absolute inset-0 opacity-[0.015] dark:opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(128,128,128,0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(128,128,128,0.2) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />
    </div>
  )
}
