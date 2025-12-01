"use client"

import { motion } from "framer-motion"
import {
  Globe,
  Code,
  Database,
  Cloud,
  Cpu,
  Smartphone,
  Shield,
  Wifi,
  Brain,
  Blocks,
  Binary,
  Server,
} from "lucide-react"

const techItems = [
  { icon: <Globe size={18} />, label: "Web Technology" },
  { icon: <Code size={18} />, label: "API Development" },
  { icon: <Database size={18} />, label: "Data Engineering" },
  { icon: <Cloud size={18} />, label: "Cloud Engineering" },
  { icon: <Cpu size={18} />, label: "IoT & Robotics" },
  { icon: <Smartphone size={18} />, label: "Mobile Apps" },
  { icon: <Shield size={18} />, label: "System Automation" },
  { icon: <Wifi size={18} />, label: "Wireless Comms" },
  { icon: <Brain size={18} />, label: "Deep Learning" },
  { icon: <Blocks size={18} />, label: "Web3 & Blockchain" },
  { icon: <Binary size={18} />, label: "Algorithms" },
  { icon: <Server size={18} />, label: "DevOps" },
]

export function TechScroller() {
  return (
    <div className="relative w-full overflow-hidden py-8">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 30,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="flex gap-6 whitespace-nowrap"
      >
        {[...techItems, ...techItems].map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-4 py-2 glass rounded-full text-sm text-muted-foreground hover:text-primary hover:border-primary/30 transition-all cursor-default"
          >
            <span className="text-primary/70">{item.icon}</span>
            <span>{item.label}</span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
