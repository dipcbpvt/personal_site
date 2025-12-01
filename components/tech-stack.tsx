"use client"

import { motion } from "framer-motion"
import { Globe, Smartphone, Zap, Database, Cloud, Server } from "lucide-react"

const techCategories = [
  {
    title: "Web",
    icon: <Globe className="w-4 h-4" />,
    color: "from-blue-500/20 to-blue-600/20 border-blue-500/30",
    iconColor: "text-blue-400",
    items: ["Laravel", "Next.js", "React", "Node.js", "Django", "Flask"],
  },
  {
    title: "Mobile",
    icon: <Smartphone className="w-4 h-4" />,
    color: "from-purple-500/20 to-purple-600/20 border-purple-500/30",
    iconColor: "text-purple-400",
    items: ["Flutter", "React Native", "Android"],
  },
  {
    title: "Automation",
    icon: <Zap className="w-4 h-4" />,
    color: "from-amber-500/20 to-amber-600/20 border-amber-500/30",
    iconColor: "text-amber-400",
    items: ["n8n", "Zapier", "Python Scripts", "Bash"],
  },
  {
    title: "Database",
    icon: <Database className="w-4 h-4" />,
    color: "from-emerald-500/20 to-emerald-600/20 border-emerald-500/30",
    iconColor: "text-emerald-400",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    title: "Cloud",
    icon: <Cloud className="w-4 h-4" />,
    color: "from-cyan-500/20 to-cyan-600/20 border-cyan-500/30",
    iconColor: "text-cyan-400",
    items: ["AWS", "GCP", "Docker", "Kubernetes"],
  },
  {
    title: "DevOps",
    icon: <Server className="w-4 h-4" />,
    color: "from-rose-500/20 to-rose-600/20 border-rose-500/30",
    iconColor: "text-rose-400",
    items: ["CI/CD", "GitHub Actions", "Linux", "Nginx"],
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export function TechStack() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold mb-12 text-center"
        >
          <span className="text-muted-foreground">Tech</span> <span className="text-primary">Stack</span>
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {techCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={item}
              className={`relative p-5 rounded-2xl bg-gradient-to-br ${category.color} border backdrop-blur-sm hover:scale-[1.02] transition-transform duration-300`}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className={`${category.iconColor}`}>{category.icon}</div>
                <h3 className="font-semibold text-foreground">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.items.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1.5 rounded-full bg-background/50 dark:bg-white/5 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
