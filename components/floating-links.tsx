"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight, Briefcase, Rss, Users } from "lucide-react"

const links = [
  {
    href: "https://dev.dipchakraborty.com",
    label: "Works",
    description: "View my portfolio & projects",
    icon: <Briefcase size={24} />,
  },
  {
    href: "https://blogs.dipchakraborty.com",
    label: "Blogs",
    description: "Read my thoughts & articles",
    icon: <Rss size={24} />,
  },
]

export function FloatingLinks() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {links.map((link, index) => (
        <motion.div
          key={link.label}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
        >
          <Link
            href={link.href}
            target={link.internal ? undefined : "_blank"}
            rel={link.internal ? undefined : "noopener noreferrer"}
            className="group block p-6 glass rounded-2xl hover:bg-primary/5 hover:border-primary/20 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-4">
              <span className="text-primary/60 group-hover:text-primary transition-colors">{link.icon}</span>
              <ArrowUpRight
                size={20}
                className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
              />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-1">{link.label}</h3>
            <p className="text-sm text-muted-foreground">{link.description}</p>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}
