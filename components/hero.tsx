"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import { SocialBar } from "./social-bar"
import { FloatingLinks } from "./floating-links"
import { Target, Sparkles, Zap } from "lucide-react"
import { useTheme } from "next-themes";
import { useEffect } from "react";

const floatingTerms = [
  { text: "Full-Stack", delay: 0, x: 120, y: -80 },
  { text: "DevOps", delay: 0.2, x: -100, y: -60 },
  { text: "AI & Automation", delay: 0.4, x: 140, y: 40 },
  { text: "System Design", delay: 0.6, x: -120, y: 100 },
  { text: "IoT/Robotics", delay: 0.8, x: 80, y: -120 },
  { text: "FastAPI", delay: 1, x: -80, y: 80 },
  { text: "Next.js", delay: 1.2, x: 100, y: 120 },
  { text: "Vue.js", delay: 1.4, x: -140, y: -40 },
  { text: "Laravel", delay: 1.6, x: 60, y: -100 },
  { text: "Python", delay: 1.8, x: -60, y: 60 },
  { text: "Docker", delay: 2, x: 130, y: 70 },
  { text: "Kubernetes", delay: 2.2, x: -110, y: -80 },
  { text: "Redis", delay: 2.4, x: 90, y: 90 },
  { text: "API Design", delay: 2.6, x: -90, y: 30 },
  { text: "n8n", delay: 2.8, x: 110, y: -50 },
  { text: "Zapier", delay: 3, x: -130, y: 110 },
]

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isImageHovered, setIsImageHovered] = useState(false)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const portraitSrc = resolvedTheme === "light" ? "/dip.png" : "/dip2.png";



  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-between py-8 sm:py-12 md:py-16 pt-20 sm:pt-24 md:pt-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full flex-1 flex items-center">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center w-full">
          {/* Content */}
          <motion.div style={{ y, opacity }} className="order-2 lg:order-1">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-4 sm:mb-6"
            >
              <span className="text-foreground block sm:inline">Dip</span>
              <span className="text-primary block sm:inline sm:ml-2 md:ml-3">Chakraborty</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6"
            >
              {[
                { icon: <Target className="w-3 h-3 sm:w-4 sm:h-4" />, text: "Collaborate" },
                { icon: <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />, text: "Create" },
                { icon: <Zap className="w-3 h-3 sm:w-4 sm:h-4" />, text: "Innovate" },
              ].map((keyword, index) => (
                <motion.div
                  key={keyword.text}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.25 + index * 0.08 }}
                  className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-medium"
                >
                  {keyword.icon}
                  <span className="whitespace-nowrap">{keyword.text}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-xl mb-4 sm:mb-6 leading-relaxed"
            >
              Technical Product Engineer crafting digital experiences at the intersection of{" "}
              <span className="text-primary font-medium">design</span>,{" "}
              <span className="text-primary font-medium">technology</span>, and{" "}
              <span className="text-primary font-medium">strategy</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mb-4 sm:mb-6 p-3 sm:p-4 rounded-xl bg-primary/5 border border-primary/10"
            >
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                <span className="text-foreground font-medium">Product Strategy</span> • System Design •{" "}
                <span className="text-foreground font-medium">Engineering Leadership</span> • AI & Automation
              </p>
            </motion.div>
            {/* 
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <SocialBar />
            </motion.div> */}

            <FloatingLinks />
          </motion.div>

          {/* Portrait with floating capability terms */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1.5, scale: 1 }}
            transition={{ duration: 1.8, delay: 0.5 }}
            style={{ opacity }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative aspect-[3/4] max-w-[280px] sm:max-w-xs md:max-w-sm lg:max-w-md mx-auto lg:ml-auto">
              {/* Hologram-style background effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/40 via-blue-400/30 to-primary/30 rounded-2xl sm:rounded-3xl blur-2xl sm:blur-3xl"
                animate={isImageHovered ? { opacity: [0.6, 1, 0.6], scale: [1, 1.08, 1] } : {}}
                transition={{ duration: 0.8, repeat: isImageHovered ? Number.POSITIVE_INFINITY : 0 }}
              />

              <div
                className="relative h-full rounded-2xl sm:rounded-3xl overflow-hidden glass p-1"
                onMouseEnter={() => setIsImageHovered(true)}
                onMouseLeave={() => setIsImageHovered(false)}
              >
                <div className="relative h-full rounded-xl sm:rounded-2xl overflow-hidden w-full">
                  {!mounted ? (
                    <div className="relative h-full w-full rounded-xl sm:rounded-2xl bg-muted/10" />
                  ) : (
                    <Image
                      src={portraitSrc}
                      alt="Dip Chakraborty"
                      fill
                      priority
                      sizes="(max-width: 640px) 280px, (max-width: 768px) 384px, (max-width: 1024px) 448px, 512px"
                      className="object-cover contrast-100 transition-all duration-500"
                    />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />

                  <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent"
                    initial={{ x: "-100%", opacity: 0 }}
                    animate={isImageHovered ? { x: "200%", opacity: [0, 1, 0] } : { x: "-100%", opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  />
                </div>
              </div>

              {/* === BADGES (responsive positioning) === */}

              {/* 1. Design-Driven */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                whileHover={{ scale: 1.05, x: 3 }}
                className="absolute -left-2 sm:-left-4 md:-left-8 lg:-left-12 xl:-left-15 top-[15%] sm:top-[18%]
                          rounded-md sm:rounded-lg px-2 sm:px-3 py-1 sm:py-1.5
                          bg-white/10 backdrop-blur-xl border border-white/20
                          shadow-md hover:shadow-lg
                          transition-all duration-300 w-max"
              >
                <p className="text-[8px] sm:text-[9px] md:text-[10px] text-muted-foreground leading-none">
                  Design-Driven
                </p>
                <p className="text-[9px] sm:text-[10px] md:text-[11px] font-semibold text-foreground">
                  Precision & Craft
                </p>
              </motion.div>

              {/* 2. Solution First */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                whileHover={{ scale: 1.05, x: 3 }}
                className="absolute -left-2 sm:-left-4 md:-left-8 lg:-left-12 xl:-left-15 top-[40%] sm:top-[42%]
                          rounded-md sm:rounded-lg px-2 sm:px-3 py-1 sm:py-1.5
                          bg-white/10 backdrop-blur-xl border border-white/20
                          shadow-md hover:shadow-lg
                          transition-all duration-300 w-max"
              >
                <p className="text-[8px] sm:text-[9px] md:text-[10px] text-muted-foreground leading-none">
                  Solution-First
                </p>
                <p className="text-[9px] sm:text-[10px] md:text-[11px] font-semibold text-foreground">
                  Learn • Build • Ship
                </p>
              </motion.div>

              {/* 3. Latency Enjoyer */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                whileHover={{ scale: 1.05, x: -3 }}
                className="absolute -right-2 sm:-right-4 md:-right-8 lg:-right-12 xl:-right-20 top-[28%] sm:top-[30%]
                          rounded-md sm:rounded-lg px-2 sm:px-3 py-1 sm:py-1.5
                          bg-white/10 backdrop-blur-xl border border-white/20
                          shadow-md hover:shadow-lg
                          transition-all duration-300 w-max"
              >
                <p className="text-[8px] sm:text-[9px] md:text-[10px] text-muted-foreground leading-none">
                  Latency Enjoyer
                </p>
                <p className="text-[9px] sm:text-[10px] md:text-[11px] font-semibold text-foreground">
                  Optimizing Everything
                </p>
              </motion.div>

              {/* 4. Experience */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="absolute left-1/2 -translate-x-1/2 -bottom-2 sm:-bottom-3 md:bottom-[-3%]
                          rounded-md sm:rounded-lg px-2 sm:px-3 py-1 sm:py-1.5
                          bg-white/10 backdrop-blur-xl border border-white/20
                          shadow-md hover:shadow-lg
                          transition-all duration-300 w-max"
              >
                <p className="text-[8px] sm:text-[9px] md:text-[10px] text-muted-foreground leading-none">
                  Experience
                </p>
                <p className="text-[9px] sm:text-[10px] md:text-[11px] font-semibold text-foreground">
                  3+ Years
                </p>
              </motion.div>


            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="flex justify-center mt-4 sm:mt-6 mb-4"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          className="w-5 h-8 sm:w-6 sm:h-10 rounded-full border border-muted-foreground/30 flex items-start justify-center p-1.5 sm:p-2"
        >
          <motion.div className="w-1 h-1.5 sm:h-2 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
