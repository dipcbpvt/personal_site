"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight, Code2, Sparkles, Lightbulb } from "lucide-react"

const links = [
  {
    href: "https://dev.dipchakraborty.com",
    label: "Explore my Dev Works",
    description: "Dive into my engineering portfolio → dev.dipchakraborty.com",
    icon: <Code2 size={24} />,
    accentColor: "from-blue-500 to-cyan-500",
  },
  {
    href: "https://writings.dipchakraborty.com",
    label: "Read and follow the trend",
    description: "Writings and insights → writings.dipchakraborty.com",
    icon: <Sparkles size={24} />,
    accentColor: "from-purple-500 to-pink-500",
  },
  {
    href: "https://thoughts.dipchakraborty.com",
    label: "Unfiltered thoughts & creations",
    description: "Raw ideas and creations → thoughts.dipchakraborty.com",
    icon: <Lightbulb size={24} />,
    accentColor: "from-orange-500 to-red-500",
  },
]

export function FloatingLinks() {
  return (
    <div className="flex flex-col gap-4 mt-8 md:mt-10 max-w-2xl">
      {links.map((link, index) => (
        <motion.div
          key={link.label}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 + index * 0.12, duration: 0.5 }}
          className="group"
        >
          <Link
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative block overflow-hidden p-4 md:p-5 rounded-xl transition-all duration-300 group"
          >
            {/* Animated gradient background */}
            <motion.div
              className={`absolute inset-0 bg-gradient-to-r ${link.accentColor} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
            />

            {/* Border glow effect */}
            <div className="absolute inset-0 rounded-xl border border-white/10 group-hover:border-white/20 transition-colors" />

            {/* Content */}
            <div className="relative z-10 flex items-start justify-between">
              <div className="flex items-start gap-4 flex-1">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`mt-0.5 text-white/60 group-hover:text-white transition-colors`}
                >
                  {link.icon}
                </motion.div>

                <div className="flex-1">
                  <h3 className="text-base md:text-lg font-semibold text-foreground mb-1.5 group-hover:text-white transition-colors">
                    {link.label}
                  </h3>
                  <p className="text-xs md:text-sm text-foreground/60 group-hover:text-foreground/80 transition-colors leading-relaxed">
                    {link.description}
                  </p>
                </div>
              </div>

              <motion.div
                whileHover={{ x: 4, y: -4 }}
                className="ml-4 flex-shrink-0 text-white/40 group-hover:text-white transition-colors"
              >
                <ArrowUpRight size={18} />
              </motion.div>
            </div>

            {/* Bottom accent line */}
            <motion.div
              className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${link.accentColor}`}
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </Link>
        </motion.div>
      ))}
    </div>
  )
}
