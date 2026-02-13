"use client"

import { motion } from "framer-motion"
import { Calendar, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ContactSchedulingCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="glass rounded-2xl p-8 h-full flex flex-col justify-between"
    >
      <div>
        <h3 className="text-2xl font-semibold text-foreground mb-3">Want to discuss something?</h3>
        <p className="text-muted-foreground leading-relaxed mb-8">
          Let's connect and explore opportunities to collaborate. Schedule time on my calendar to chat directly.
        </p>
      </div>
      <Button
        asChild
        className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 gap-2 w-full flex justify-center"
      >
        <Link href="https://calendly.com/dipcb05" target="_blank">
          <Calendar size={18} />
          Schedule a Call
          <ArrowUpRight size={16} />
        </Link>
      </Button>
    </motion.div>
  )
}
