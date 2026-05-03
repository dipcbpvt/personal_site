"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { FloatingLinks } from "./floating-links"
import { Mail, Calendar } from "lucide-react"
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { dmChannels, followChannels } from "./cta-section"
import { ThemeToggle } from "./theme-toggle"

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Use a stable portraitSrc calculation to avoid hydration mismatch if possible
  // Default to a specific theme for the first paint to catch LCP
  const portraitSrc = resolvedTheme === "light" ? "/dip.png" : "/dip2.webp";


  // Do not return null to allow LCP element to be identified ASAP by pre-renderer
  // but keep it subtle before mounting.

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center py-2 sm:py-4 px-4 md:px-6 overflow-hidden select-none">
      {/* Theme Toggle - Top Left */}
      <div className="absolute top-6 left-6 z-50">
        <ThemeToggle />
      </div>

      <div className="max-w-7xl mx-auto w-full flex flex-col items-center relative z-10">
        {/* Header Section */}
        <div className="text-center mb-4 lg:mb-8 mt-2 lg:mt-0">
          <h1 
            className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter mb-1 text-foreground"
          >
            Dip Chakraborty
          </h1>
          <p 
            className="text-base sm:text-lg md:text-2xl text-muted-foreground font-medium tracking-wide opacity-80"
          >
            Engineer . Researcher . Writer
          </p>
        </div>

        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12 items-start w-full">
          
          {/* Left Column */}
          <div 
            className="order-2 lg:order-1 flex justify-center lg:justify-start"
          >
            <div className="w-full max-w-sm lg:max-w-none">
              <FloatingLinks />
            </div>
          </div>

          {/* Center Column - Optimized for LCP */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-[220px] sm:max-w-[280px] md:max-w-[320px] aspect-[5/6]">
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-blue-400/10 to-primary/10 rounded-[2.5rem] blur-3xl opacity-20" />

              <div
                className="relative h-full rounded-[2.5rem] overflow-hidden glass p-1 transition-all duration-500"
              >
                <div className="relative h-full rounded-[2rem] overflow-hidden w-full">
                  <Image
                    src={portraitSrc}
                    alt="Dip Chakraborty"
                    fill
                    priority
                    fetchPriority="high"
                    sizes="(max-width: 640px) 240px, (max-width: 1024px) 300px, 340px"
                    className={`object-cover contrast-[1.05] brightness-[1.02] transition-opacity duration-300 ${mounted ? 'opacity-100' : 'opacity-0'}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent opacity-60" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div 
            className="order-3 flex flex-col gap-3 lg:gap-4 items-center lg:items-end w-full"
          >
            {/* Action Buttons */}
            <div className="flex flex-col gap-2 w-full max-w-xs">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-2xl h-11 text-base font-bold border-primary/30 dark:border-primary/40 hover:bg-primary/5 hover:border-primary/60 text-foreground hover:text-primary dark:hover:text-white transition-all duration-300 hover:scale-[1.02] bg-background/30 backdrop-blur-xl shadow-sm relative overflow-hidden group/btn"
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
                className="rounded-2xl h-11 text-base font-bold border-primary/30 dark:border-primary/40 hover:bg-primary/5 hover:border-primary/60 text-foreground hover:text-primary dark:hover:text-white transition-all duration-300 hover:scale-[1.02] bg-background/30 backdrop-blur-xl shadow-sm relative overflow-hidden group/btn"
              >
                <a href="https://calendly.com/dipcb05" target="_blank" rel="noopener noreferrer">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                  <Calendar className="mr-3 h-5 w-5 text-primary" />
                  Schedule a Call
                </a>
              </Button>
            </div>

            {/* DM Me Section */}
            <div className="w-full max-w-xs glass rounded-2xl p-3 flex flex-col gap-2 items-center group/card transition-all duration-300 hover:bg-background/60 relative overflow-hidden">
              <div className="absolute inset-0 border border-primary/20 dark:border-primary/25 group-hover/card:border-primary/40 dark:group-hover/card:border-primary/50 transition-colors duration-500 rounded-2xl pointer-events-none" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground/40 group-hover/card:text-primary transition-colors relative z-10">DM Me</span>
              <div className="flex gap-3">
                {dmChannels.map((channel) => (
                  <a
                    key={channel.label}
                    href={channel.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/30 dark:border-primary/40 hover:border-primary/60 transition-all duration-300"
                    title={channel.label}
                  >
                    <div className="scale-90">{channel.icon}</div>
                  </a>
                ))}
              </div>
            </div>

            {/* Follow Me Section */}
            <div className="w-full max-w-xs glass rounded-2xl p-3 flex flex-col gap-2 items-center group/card transition-all duration-300 hover:bg-background/60 relative overflow-hidden">
              <div className="absolute inset-0 border border-primary/20 dark:border-primary/25 group-hover/card:border-primary/40 dark:group-hover/card:border-primary/50 transition-colors duration-500 rounded-2xl pointer-events-none" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground/40 group-hover/card:text-primary transition-colors relative z-10">Follow Me</span>
              <div className="flex gap-3 flex-wrap justify-center">
                {followChannels.map((channel) => (
                  <a
                    key={channel.label}
                    href={channel.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/30 dark:border-primary/40 hover:border-primary/60 transition-all duration-300"
                    title={channel.label}
                  >
                    <div className="scale-90">{channel.icon}</div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
