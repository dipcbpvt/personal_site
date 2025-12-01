"use client"

import { motion } from "framer-motion"
import { Calendar, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function SchedulingBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass rounded-2xl p-8 mb-8"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-2">Want to discuss something?</h3>
          <p className="text-muted-foreground">Schedule time on my calendar to connect directly.</p>
        </div>
        <Button
          asChild
          className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 gap-2 w-full md:w-auto flex-shrink-0"
        >
          <Link href="https://calendly.com/dipcb05" target="_blank">
            <Calendar size={18} />
            Schedule a Call
            <ArrowUpRight size={16} />
          </Link>
        </Button>
      </div>
    </motion.div>
  )
}
