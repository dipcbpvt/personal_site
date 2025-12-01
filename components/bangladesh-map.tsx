"use client"

import { motion } from "framer-motion"

export function BangladeshMap() {
  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-64 h-80 bg-primary/20 blur-[100px] rounded-full" />
      </div>

      {/* Map SVG - Simplified Bangladesh outline */}
      <motion.svg
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewBox="0 0 200 250"
        className="w-64 h-80 relative z-10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <motion.path
          d="M100 10 
             L130 25 L145 50 L155 80 L160 110 
             L158 140 L150 170 L140 200 L120 220 
             L100 235 L80 220 L60 200 L50 170 
             L42 140 L40 110 L45 80 L55 50 
             L70 25 Z"
          className="text-primary/30"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          fill="rgba(59, 130, 246, 0.05)"
        />

        {/* Dhaka marker */}
        <motion.g
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <circle cx="105" cy="130" r="6" className="fill-primary" />
          <circle cx="105" cy="130" r="12" className="fill-primary/20" />
          <motion.circle
            cx="105"
            cy="130"
            r="18"
            className="fill-primary/10"
            animate={{ r: [18, 24, 18], opacity: [0.1, 0.05, 0.1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
        </motion.g>
      </motion.svg>

      {/* Location label */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center"
      >
        <p className="text-xs text-muted-foreground tracking-wider uppercase mb-1">Located in</p>
        <p className="text-lg font-medium text-foreground">Dhaka, Bangladesh</p>
      </motion.div>
    </div>
  )
}
