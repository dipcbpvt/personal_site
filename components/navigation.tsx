"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "./theme-toggle"
import { useTheme } from "next-themes"

const navItems: any[] = []

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  // Optimized scroll handler with useCallback and debounced scroll detection
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50)
  }, [])

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout
    const throttledScroll = () => {
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(handleScroll, 16)
    }
    window.addEventListener("scroll", throttledScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", throttledScroll)
      clearTimeout(scrollTimeout)
    }
  }, [handleScroll])

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled ? "py-3 md:py-4 glass" : "py-4 md:py-6",
        )}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link href="/" className="group flex items-center">
            <motion.div whileHover={{ scale: 1.05 }} className="relative h-8 md:h-10 w-32 md:w-40">
              {mounted ? (
                <Image
                  src={resolvedTheme === "dark" ? "/dc-logo-dark-v3_1.png" : "/dc-logo-transperant.png"}
                  alt="Dip Chakraborty Logo"
                  fill
                  className="object-contain transition-opacity duration-300"
                  priority
                />
              ) : (
                <div className="h-full w-full bg-muted/20 animate-pulse rounded" />
              )}
            </motion.div>
          </Link>

          {/* Desktop Navigation - Theme Toggle Only */}
          <div className="hidden md:flex items-center">
            <ThemeToggle />
          </div>

          {/* Mobile Theme Toggle */}
          <div className="md:hidden">
            <ThemeToggle />
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu - Disabled since navItems is empty */}
    </>
  )
}
