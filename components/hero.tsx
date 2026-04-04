"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import Image from "next/image"
import { FloatingLinks } from "./floating-links"
import { Mail, Calendar } from "lucide-react"
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { dmChannels, followChannels } from "./cta-section"
import { ThemeToggle } from "./theme-toggle"

export function Hero() {
  const [isImageHovered, setIsImageHovered] = useState(false)
  const [mounted, setMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    setIsDesktop(window.innerWidth >= 1024);
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const portraitSrc = resolvedTheme === "light" ? "/dip.png" : "/dip2.webp";

  // Light-weight & Fast Transitions
  const slideLeft = isDesktop ? {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5, delay: 0.4 }
  } : { initial: { opacity: 1 }, animate: { opacity: 1 } };

  const slideRight = isDesktop ? {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5, delay: 0.4 }
  } : { initial: { opacity: 1 }, animate: { opacity: 1 } };

  if (!mounted) return null;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center py-6 sm:py-12 px-4 md:px-6 overflow-hidden select-none">
      {/* Theme Toggle - Top Left */}
      <div className="absolute top-6 left-6 z-50">
        <ThemeToggle />
      </div>

      <div className="max-w-7xl mx-auto w-full flex flex-col items-center relative z-10">
        {/* Header Section */}
        <div className="text-center mb-8 lg:mb-16 mt-8 lg:mt-0">
          <motion.h1 
            initial={isDesktop ? { opacity: 0, y: 15 } : { opacity: 1 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter mb-3 text-foreground"
          >
            Dip Chakraborty
          </motion.h1>
          <motion.p 
            initial={isDesktop ? { opacity: 0 } : { opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-base sm:text-lg md:text-2xl text-muted-foreground font-medium tracking-wide opacity-80"
          >
            Engineer . Researcher . Writer
          </motion.p>
        </div>

        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-20 items-start w-full">
          
          {/* Left Column */}
          <motion.div 
            initial={slideLeft.initial}
            animate={slideLeft.animate}
            transition={slideLeft.transition}
            className="order-2 lg:order-1 flex justify-center lg:justify-start"
          >
            <div className="w-full max-w-sm lg:max-w-none">
              <FloatingLinks />
            </div>
          </motion.div>

          {/* Center Column */}
          <motion.div 
            initial={isDesktop ? { opacity: 0, scale: 0.98 } : { opacity: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-full max-w-[260px] sm:max-w-sm md:max-w-md aspect-[3/4]">
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-blue-400/10 to-primary/10 rounded-[2.5rem] blur-3xl opacity-20" />

              <div
                className="relative h-full rounded-[2.5rem] overflow-hidden glass p-1.5 transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl hover:shadow-primary/5"
                onMouseEnter={() => setIsImageHovered(true)}
                onMouseLeave={() => setIsImageHovered(false)}
              >
                <div className="relative h-full rounded-[2rem] overflow-hidden w-full">
                  <Image
                    src={portraitSrc}
                    alt="Dip Chakraborty"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover contrast-[1.05] brightness-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent opacity-60" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div 
            initial={slideRight.initial}
            animate={slideRight.animate}
            transition={slideRight.transition}
            className="order-3 flex flex-col gap-5 lg:gap-6 items-center lg:items-end w-full"
          >
            {/* Action Buttons */}
            <div className="flex flex-col gap-4 w-full max-w-xs">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-2xl h-14 text-base font-bold border-primary/20 hover:bg-primary/5 hover:border-primary/40 text-foreground hover:text-primary dark:hover:text-white transition-all duration-300 hover:scale-[1.02] bg-background/30 backdrop-blur-xl shadow-sm relative overflow-hidden group/btn"
              >
                <a href="mailto:connect@dipchakraborty.com">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                  <Mail className="mr-3 h-5 w-5 text-primary" />
                  Email
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-2xl h-14 text-base font-bold border-primary/20 hover:bg-primary/5 hover:border-primary/40 text-foreground hover:text-primary dark:hover:text-white transition-all duration-300 hover:scale-[1.02] bg-background/30 backdrop-blur-xl shadow-sm relative overflow-hidden group/btn"
              >
                <a href="https://calendly.com/dipcb05" target="_blank" rel="noopener noreferrer">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                  <Calendar className="mr-3 h-5 w-5 text-primary" />
                  Schedule a Call
                </a>
              </Button>
            </div>

            {/* DM Me Section */}
            <div className="w-full max-w-xs glass rounded-3xl p-6 flex flex-col gap-4 items-center group/card transition-all duration-300 hover:bg-background/60">
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-muted-foreground/40 group-hover/card:text-primary transition-colors">DM Me</span>
              <div className="flex gap-4">
                {dmChannels.map((channel) => (
                  <motion.a
                    key={channel.label}
                    href={channel.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20 hover:border-primary/50 transition-all duration-300"
                    title={channel.label}
                  >
                    <div className="scale-95">{channel.icon}</div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Follow Me Section */}
            <div className="w-full max-w-xs glass rounded-3xl p-6 flex flex-col gap-4 items-center group/card transition-all duration-300 hover:bg-background/60">
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-muted-foreground/40 group-hover/card:text-primary transition-colors">Follow Me</span>
              <div className="flex gap-4 flex-wrap justify-center">
                {followChannels.map((channel) => (
                  <motion.a
                    key={channel.label}
                    href={channel.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20 hover:border-primary/50 transition-all duration-300"
                    title={channel.label}
                  >
                    <div className="scale-95">{channel.icon}</div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
