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
  const [isMobile, setIsMobile] = useState(false)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  // Reduced parallax on mobile
  const y = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 100] : [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsMobile(window.innerWidth < 768)
  }, []);

  const portraitSrc = resolvedTheme === "light" ? "/dip.png" : "/dip2.webp";



  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-between py-12 md:py-16 pt-16 md:pt-20"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 w-full flex-1 flex items-center">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center w-full">
          {/* Content */}
          <motion.div style={{ y, opacity }} className="order-2 lg:order-1">
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="flex flex-wrap gap-2 mb-6"
            >
              {[
                "Product Strategy",
                "System Design",
                "Engineering Leadership",
                "Automation",
              ].map((skill) => (
                <div
                  key={skill}
                  className="px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-xs font-medium text-muted-foreground"
                >
                  {skill}
                </div>
              ))}
            </motion.div> */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex flex-wrap gap-3 mb-4"
            >
              {[
                { icon: <Target className="w-4 h-4" />, text: "Think" },
                { icon: <Sparkles className="w-4 h-4" />, text: "Create" },
                { icon: <Zap className="w-4 h-4" />, text: "Innovate" },
              ].map((keyword, index) => (
                <motion.div
                  key={keyword.text}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.25 + index * 0.08 }}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium"
                >
                  {keyword.icon}
                  {keyword.text}
                </motion.div>
              ))}
            </motion.div>


            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight mb-4 whitespace-nowrap"
            >
              <span className="text-foreground">Dip</span>
              <span className="text-primary ml-2">Chakraborty</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mb-6 leading-relaxed"
            > Engineer . Researcher . Writer<br />
              {/* <span className="text-primary font-medium">Building thoughtful digital systems</span> */}
            </motion.p>





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
            <div className="relative aspect-[9/14] sm:aspect-[3/4] max-w-xs sm:max-w-sm md:max-w-md mx-auto lg:ml-auto">
              {/* Hologram-style background effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/40 via-blue-400/30 to-primary/30 rounded-3xl blur-3xl"
                animate={isImageHovered ? { opacity: [0.6, 1, 0.6], scale: [1, 1.08, 1] } : {}}
                transition={{ duration: 0.8, repeat: isImageHovered ? Number.POSITIVE_INFINITY : 0 }}
              />

              <div
                className="relative h-full rounded-3xl overflow-hidden glass p-1"
                onMouseEnter={() => setIsImageHovered(true)}
                onMouseLeave={() => setIsImageHovered(false)}
              >
                <div className="relative h-full rounded-2xl overflow-hidden w-full">
                  {!mounted ? (
                    <div className="relative h-full w-full rounded-2xl bg-muted/10" />
                  ) : (
                    <Image
                      src={portraitSrc}
                      alt="Dip Chakraborty"
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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

              {/* === BADGES (balanced outside positioning) === */}

              {/* 1. Design-Driven */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                whileHover={{ scale: 1.05, x: 3 }}
                className="absolute -left-12 sm:-left-15 top-[12%] sm:top-[18%]
                          rounded-lg px-2.5 sm:px-3 py-1 sm:py-1.5
                          bg-white/10 backdrop-blur-xl border border-white/20
                          shadow-md hover:shadow-lg
                          transition-all duration-300 w-max"
              >
                <p className="text-[9px] sm:text-[10px] text-muted-foreground leading-none">
                  Design-Driven
                </p>
                <p className="text-[9px] sm:text-[11px] font-semibold text-foreground">
                  Fast Learner
                </p>
              </motion.div>

              {/* 2. Solution First */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                whileHover={{ scale: 1.05, x: 3 }}
                className="absolute -left-12 sm:-left-15 top-[36%] sm:top-[42%]
                          rounded-lg px-2.5 sm:px-3 py-1 sm:py-1.5
                          bg-white/10 backdrop-blur-xl border border-white/20
                          shadow-md hover:shadow-lg
                          transition-all duration-300 w-max"
              >
                <p className="text-[9px] sm:text-[10px] text-muted-foreground leading-none">
                  Solution-First
                </p>
                <p className="text-[9px] sm:text-[11px] font-semibold text-foreground">
                  Design • Build • Ship
                </p>
              </motion.div>

              {/* 3. Latency Enjoyer */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                whileHover={{ scale: 1.05, x: -3 }}
                className="absolute -right-12 sm:-right-20 top-[24%] sm:top-[30%]
                          rounded-lg px-2.5 sm:px-3 py-1 sm:py-1.5
                          bg-white/10 backdrop-blur-xl border border-white/20
                          shadow-md hover:shadow-lg
                          transition-all duration-300 w-max"
              >
                <p className="text-[9px] sm:text-[10px] text-muted-foreground leading-none">
                  Latency Enjoyer
                </p>
                <p className="text-[9px] sm:text-[11px] font-semibold text-foreground">
                  Passion in Optimizing
                </p>
              </motion.div>

              {/* 4. Experience */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="absolute left-1/2 -translate-x-1/2 bottom-[-1%] sm:bottom-[-3%]
                          rounded-lg px-2.5 sm:px-3 py-1 sm:py-1.5
                          bg-white/10 backdrop-blur-xl border border-white/20
                          shadow-md hover:shadow-lg
                          transition-all duration-300 w-max"
              >
                <p className="text-[9px] sm:text-[10px] text-muted-foreground leading-none">
                  Experience
                </p>
                <p className="text-[9px] sm:text-[11px] font-semibold text-foreground">
                  4+ Years
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
        className="flex justify-center mt-6"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          className="w-6 h-10 rounded-full border border-muted-foreground/30 flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
