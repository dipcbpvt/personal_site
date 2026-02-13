"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ArrowUpRight, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const floatingKeywords = [
  { text: "Engineering", delay: 0 },
  { text: "Product", delay: 0.3 },
  { text: "Design", delay: 0.6 },
  { text: "Innovation", delay: 0.9 },
  { text: "Strategy", delay: 1.2 },
  { text: "AI & Automation", delay: 1.5 },
  { text: "System Design", delay: 1.8 },
  { text: "Leadership", delay: 2.1 },
]

export function CTASection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: false, margin: "-100px" })
  const [isHovering, setIsHovering] = useState(false)

  return (
    <section ref={containerRef} className="relative py-12 px-6 md:py-16">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-6">
            <span className="text-muted-foreground">Work</span>{" "}
            <span className="text-primary font-medium">together</span>
            <span className="text-muted-foreground">?</span>
          </h2>
          <p className="text-lg md:text-xl text-primary font-medium mb-8">Let's connect and create impact together.</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 w-full sm:w-auto"
            >
              <Link href="/contact">
                <Mail className="mr-2 h-4 w-4" />
                Get in Touch
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-8 border-primary/30 hover:bg-primary/10 hover:border-primary bg-transparent w-full sm:w-auto"
            >
              <Link href="https://dev.dipchakraborty.com" target="_blank">
                View Portfolio
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className="mt-12 flex flex-wrap items-center justify-center gap-3 min-h-24"
        >
          {floatingKeywords.map((keyword, i) => (
            <motion.div
              key={keyword.text}
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={
                isInView || isHovering
                  ? {
                      opacity: 1,
                      scale: 1,
                      y: 0,
                    }
                  : { opacity: 0, scale: 0.8, y: 10 }
              }
              transition={{
                delay: keyword.delay,
                duration: 0.4,
                ease: "easeOut",
              }}
              className="px-3 py-1.5 rounded-full bg-gradient-to-r from-primary/20 to-blue-500/20 border border-primary/30 text-xs font-medium text-foreground/70 backdrop-blur-sm whitespace-nowrap"
            >
              {keyword.text}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
