"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Code2, Sparkles, Lightbulb } from "lucide-react"
import { useState, useEffect } from "react"

const links = [
  {
    href: "https://dev.dipchakraborty.com",
    label: "SDE Portfolio",
    description: "Explore Dev Works",
    icon: <Code2 size={22} />,
    accentColor: "from-blue-500/10 to-cyan-500/10",
  },
  {
    href: "https://writings.dipchakraborty.com",
    label: "Read & Follow",
    description: "Writings and insights",
    icon: <Sparkles size={22} />,
    accentColor: "from-purple-500/10 to-pink-500/10",
  },
  {
    href: "https://thoughts.dipchakraborty.com",
    label: "Musings & Creations",
    description: "Explore raw thoughts",
    icon: <Lightbulb size={22} />,
    accentColor: "from-orange-500/10 to-red-500/10",
  },
]

export function FloatingLinks() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 1024);
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex flex-col gap-4 w-full max-w-sm">
      {links.map((link, index) => (
        <motion.a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={isDesktop ? { opacity: 0, x: -25 } : { opacity: 1 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.4 + index * 0.05, ease: "easeOut" }}
          className="group relative block rounded-2xl overflow-hidden glass p-4 md:p-5 transition-all duration-300 hover:bg-background/60 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
        >
          {/* Internal Glow */}
          <div className={`absolute inset-0 bg-gradient-to-r ${link.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

          {/* Border Animation */}
          <div className="absolute inset-0 border border-primary/10 dark:border-white/5 group-hover:border-primary/30 dark:group-hover:border-white/20 transition-colors duration-500 rounded-2xl" />

          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-500 shadow-sm">
                {link.icon}
              </div>
              <div className="flex flex-col gap-1 text-left">
                <h3 className="text-sm md:text-base font-bold text-foreground group-hover:text-primary dark:group-hover:text-white transition-colors leading-tight">
                  {link.label}
                </h3>
                <p className="text-[10px] md:text-xs text-muted-foreground group-hover:text-foreground/70 transition-colors font-medium opacity-70">
                  {link.description}
                </p>
              </div>
            </div>

            <div className="text-foreground/40 dark:text-white/40 group-hover:text-primary dark:group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500">
              <ArrowUpRight size={20} />
            </div>
          </div>
        </motion.a>
      ))}
    </div>
  )
}
