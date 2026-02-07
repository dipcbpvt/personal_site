"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState, useMemo, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Code2, Palette, BookOpen, Sparkles } from "lucide-react"
import { useTheme } from "next-themes"

const chapters = [
  {
    icon: Code2,
    title: "Building Systems",
    subtitle: "Income & Impact",
    description: "Software development isn't just what I do—it's how I solve problems that matter. From automation platforms to AI systems, I build things that work, scale, and last.",
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    icon: Palette,
    title: "Arts & Culture",
    subtitle: "Emotional Grounding",
    description: "Music, film, and storytelling keep me human. They remind me that technology serves people, not the other way around. Creativity fuels empathy.",
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    icon: BookOpen,
    title: "Writing & Teaching",
    subtitle: "Learning Out Loud",
    description: "I write to learn. I teach to clarify. Sharing knowledge isn't just generous—it's how I sharpen my own thinking and build community.",
    color: "from-amber-500/20 to-orange-500/20"
  },
  {
    icon: Sparkles,
    title: "Creating Content",
    subtitle: "Curiosity & Play",
    description: "Experiments, side projects, explorations. Not everything needs a business case. Some things exist because they're interesting, and that's enough.",
    color: "from-green-500/20 to-emerald-500/20"
  }
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
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const portraitSrc = useMemo(
    () => (resolvedTheme === "light" ? "/dip.png" : "/dip2.webp"),
    [resolvedTheme],
  )

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-between py-8 sm:py-12 md:py-16 pt-20 sm:pt-24 md:pt-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full flex-1">
        {/* Hero Introduction */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center w-full mb-24 sm:mb-32 md:mb-40">
          {/* Content */}
          <motion.div
            style={mounted ? { y, opacity } : {}}
            className="order-2 lg:order-1"
            suppressHydrationWarning
          >
            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-4"
              suppressHydrationWarning
            >
              <span className="text-sm sm:text-base text-muted-foreground font-medium tracking-wide">
                Welcome to my corner of the internet
              </span>
            </motion.div>

            <motion.h1
              initial={false}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-4 sm:mb-6"
              suppressHydrationWarning
            >
              <span className="text-foreground block sm:inline">I'm Dip</span>
              <span className="text-primary block sm:inline sm:ml-2 md:ml-3">Chakraborty</span>
            </motion.h1>

            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="space-y-4 sm:space-y-6 mb-8 sm:mb-10"
              suppressHydrationWarning
            >
              <p className="text-base sm:text-lg md:text-xl text-foreground/90 leading-relaxed max-w-2xl">
                I love to build stuff that solves real problems. I write to learn and teach. Actually I create because curiosity demands it!
              </p>
            </motion.div>

            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              suppressHydrationWarning
            >
              {/* <Link
                href="/journey"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors cursor-interactive"
              >
                Read My Journey
                <span className="text-lg">→</span>
              </Link> */}
            </motion.div>
          </motion.div>

          {/* Portrait */}
          <motion.div
            style={mounted ? { opacity } : { opacity: 1 }}
            className="order-1 lg:order-2 relative"
            suppressHydrationWarning
          >
            <div className="relative aspect-[3/4] max-w-[280px] sm:max-w-xs md:max-w-sm lg:max-w-md mx-auto lg:ml-auto">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/40 via-blue-400/30 to-primary/30 rounded-2xl sm:rounded-3xl blur-2xl sm:blur-3xl"
                animate={isImageHovered ? { opacity: [0.6, 1, 0.6], scale: [1, 1.08, 1] } : {}}
                transition={{ duration: 0.8, repeat: isImageHovered ? Infinity : 0 }}
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
                      quality={85}
                      sizes="(max-width: 640px) 280px, (max-width: 768px) 384px, (max-width: 1024px) 448px, 512px"
                      className="object-cover contrast-100 transition-all duration-500"
                      loading="eager"
                      decoding="async"
                      fetchPriority="high"
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
            </div>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-24 sm:mb-32">
          {chapters.map((chapter, index) => (
            <motion.div
              key={chapter.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl p-6 sm:p-8 glass hover:bg-primary/5 transition-all duration-500">
                <div className={`absolute inset-0 bg-gradient-to-br ${chapter.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10 space-y-4">
                  <chapter.icon size={32} className="text-primary/60 group-hover:text-primary transition-colors duration-300" />

                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground/60 mb-1">
                      {chapter.subtitle}
                    </p>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground">
                      {chapter.title}
                    </h3>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {chapter.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="flex justify-center mt-12 mb-4"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 sm:w-6 sm:h-10 rounded-full border border-muted-foreground/20 flex items-start justify-center p-1.5 sm:p-2"
        >
          <motion.div className="w-1 h-1.5 sm:h-2 bg-primary/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
