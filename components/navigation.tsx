"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Github, Linkedin, Twitter, Mail, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "./theme-toggle"
import { useTheme } from "next-themes"

const navItems: { href: string; label: string; isExternal?: boolean }[] = []

const socialLinks = [
    { name: "GitHub", href: "https://github.com/dipbhai", icon: Github },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/dip-chakraborty/", icon: Linkedin },
    { name: "Twitter", href: "https://twitter.com/dipchakraborty_", icon: Twitter },
    { name: "Email", href: "mailto:hello@dipchakraborty.com", icon: Mail },
]

const externalLinks = [
    { title: "Dev Works", href: "https://dev.dipchakraborty.com", icon: ExternalLink },
    { title: "Writings", href: "https://writings.dipchakraborty.com", icon: ExternalLink },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                target={item.isExternal ? "_blank" : undefined}
                rel={item.isExternal ? "noopener noreferrer" : undefined}
                className="relative px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {pathname === item.href && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute inset-0 bg-primary/10 rounded-lg"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className={cn("relative z-10", pathname === item.href && "text-primary")}>{item.label}</span>
              </Link>
            ))}
            <div className="ml-2 pl-2 border-l border-border/50">
              <ThemeToggle />
            </div>
          </nav>

          {/* Mobile Menu Toggle & Theme Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden pt-20"
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center justify-start h-full overflow-y-auto px-6 py-8 max-w-sm mx-auto w-full"
            >
              {/* Social Links Grid */}
              <div className="w-full">
                <div className="grid grid-cols-2 gap-3 mb-12">
                  {socialLinks.map((social, index) => (
                    <motion.div
                      key={social.name}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.15 + index * 0.05, type: "spring", bounce: 0.5 }}
                    >
                      <Link
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl glass hover:bg-primary/20 border border-border/50 transition-all duration-300 group"
                        aria-label={social.name}
                      >
                        <social.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                        <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground">{social.name}</span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.35 }}
                className="w-12 h-px bg-border/50 mb-12"
              />

              {/* Navigation Items */}
              {navItems.length > 0 && (
                <nav className="w-full flex flex-col gap-3 mb-8">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.4 + index * 0.06 }}
                    >
                      <Link
                        href={item.href}
                        target={item.isExternal ? "_blank" : undefined}
                        rel={item.isExternal ? "noopener noreferrer" : undefined}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                          "text-base font-light transition-colors block px-1 py-2",
                          pathname === item.href ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground",
                        )}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
