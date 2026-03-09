"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true)
  const pathname = usePathname()

  // Only show preloader on specific pages
  const showPreloader = ["/", "/purpose", "/process"].includes(pathname)

  useEffect(() => {
    if (!showPreloader) {
      setIsLoading(false)
      return
    }

    let isMounted = true
    const startTime = Date.now()
    const minimumWait = 800 // Ensure at least some animation

    const handleLoad = () => {
      const checkResources = () => {
        // Check images
        const images = Array.from(document.images)
        const imagesLoaded = images.every((img) => img.complete)

        // Check if DOM is fully interactive
        const domReady = document.readyState === "complete"

        if (imagesLoaded && domReady) {
          const elapsedTime = Date.now() - startTime
          const remainingWait = Math.max(0, minimumWait - elapsedTime)

          setTimeout(() => {
            if (isMounted) setIsLoading(false)
          }, remainingWait)
        } else {
          // Check again in 100ms
          setTimeout(checkResources, 100)
        }
      }

      checkResources()
    }

    // Start checking when DOM is interactive
    if (document.readyState === "complete") {
      handleLoad()
    } else {
      window.addEventListener("load", handleLoad)
      document.addEventListener("DOMContentLoaded", handleLoad)
    }

    // Safety timeout after 5 seconds
    const safetyTimeout = setTimeout(() => {
      if (isMounted) setIsLoading(false)
    }, 5000)

    return () => {
      isMounted = false
      window.removeEventListener("load", handleLoad)
      document.removeEventListener("DOMContentLoaded", handleLoad)
      clearTimeout(safetyTimeout)
    }
  }, [showPreloader, pathname])

  if (!showPreloader && !isLoading) return null

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
        >
          {/* Animated background flashes */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-blue-400/10 blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.15, 0.25, 0.15],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
            />
          </div>

          <div className="relative flex flex-col items-center">
            {/* Loading text - simple and clean */}
            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {["L", "O", "A", "D", "I", "N", "G"].map((letter, index) => (
                <motion.span
                  key={index}
                  className="text-lg font-mono text-primary font-semibold"
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{
                    duration: 0.8,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: index * 0.08,
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>

            {/* Progress bar */}
            <motion.div className="mt-6 w-48 h-1 bg-muted rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-blue-400"
                initial={{ width: "20%" }}
                animate={{ width: "85%" }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
