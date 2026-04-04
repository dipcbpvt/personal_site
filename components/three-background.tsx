"use client"

import { useEffect, useState } from "react"

export function ThreeBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 -z-20 pointer-events-none transition-opacity duration-500 overflow-hidden">
      {/* Animated Subtle Blobs (Pure CSS) - Optimized for mobile */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[60px] md:blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-400/5 rounded-full blur-[60px] md:blur-[120px] animate-pulse [animation-delay:3s]" />
      
      {/* Mesh/Grid Effect */}
      <div 
        className="absolute inset-0 opacity-[0.02] md:opacity-[0.04] dark:opacity-[0.03] md:dark:opacity-[0.05] md:bg-[length:40px_40px]" 
        style={{
          backgroundImage: `radial-gradient(circle at 1.5px 1.5px, currentColor 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background pointer-events-none" />
    </div>
  )
}
