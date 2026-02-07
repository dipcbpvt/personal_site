"use client"

import { useState, useEffect, useCallback, useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"
import { useTheme } from "next-themes"

function NavigationInner() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  const navItems = useMemo(() => [
    { href: "https://dev.dipchakraborty.com", label: "Dev", external: true },
    { href: "https://blogs.dipchakraborty.com", label: "Writings", external: true },
    { href: "/journey", label: "Journey", external: false },
  ], [])

  // Ensure component is mounted before showing theme-specific logo
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

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled ? "py-2 sm:py-3 md:py-4 glass" : "py-3 sm:py-4 md:py-6",
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between">
          {/* Left side: Theme Toggle + Logo */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
            <ThemeToggle />
            <Link href="/" className="group flex items-center">
              {mounted ? (
                <motion.div
                  className="relative h-8 sm:h-10 md:h-12 w-auto"
                  style={{ width: 'auto', minWidth: '140px' }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Image
                    src={resolvedTheme === 'dark' ? '/dc-logo-dark-v3.png' : '/dc-logo-transperant.png'}
                    alt="Dip Chakraborty"
                    width={240}
                    height={20}
                    sizes="240px"
                    className={cn(
                      "object-contain object-left h-full w-auto",
                      resolvedTheme === 'dark' ? "mix-blend-screen" : "mix-blend-multiply"
                    )}
                    priority
                  />
                </motion.div>
              ) : (
                <div className="h-8 sm:h-10 md:h-12 w-36 sm:w-40 md:w-48 bg-transparent" />
              )}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <motion.div key={item.href} whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative px-3 lg:px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-interactive"
                  >
                    <span className="relative z-10 transition-colors duration-200">{item.label}</span>
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className="relative px-3 lg:px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-interactive"
                  >
                    {pathname === item.href && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute inset-0 bg-primary/10 rounded-lg"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className={cn("relative z-10 transition-colors duration-200", pathname === item.href && "text-primary font-medium")}>{item.label}</span>
                  </Link>
                )}
              </motion.div>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:bg-primary/10 rounded-lg transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden"
          >
            <motion.nav
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 60, opacity: 0 }}
              transition={{ delay: 0.08, duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
              className="flex flex-col items-center justify-center h-full gap-6 sm:gap-8 px-4 pt-16"
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ y: 30, opacity: 0, scale: 0.95 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  exit={{ y: 30, opacity: 0, scale: 0.95 }}
                  transition={{
                    delay: 0.08 + index * 0.08,
                    duration: 0.5,
                    ease: [0.34, 1.56, 0.64, 1],
                  }}
                  whileHover={{ x: 8 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-2xl sm:text-3xl font-light transition-colors min-h-[44px] flex items-center cursor-interactive text-muted-foreground hover:text-foreground"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "text-2xl sm:text-3xl font-light transition-colors min-h-[44px] flex items-center cursor-interactive",
                        pathname === item.href
                          ? 'text-primary font-medium'
                          : 'text-muted-foreground hover:text-foreground',
                      )}
                    >
                      {item.label}
                    </Link>
                  )}
                </motion.div>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export const Navigation = NavigationInner
