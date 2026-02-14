"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { SpotlightBg } from "@/components/spotlight-bg"
import { PageTransition } from "@/components/page-transition"
import { SectionHeader } from "@/components/section-header"
import { Capabilities } from "@/components/capabilities"
import { SystemDesignProcess } from "@/components/system-design-process"
import { CareerTimeline } from "@/components/career-timeline"
import { ExternalLink, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ThreeBackground } from "@/components/three-background"

export default function ProcessPage() {
  return (
    <main className="relative min-h-screen bg-background">
      <SpotlightBg />
      <ThreeBackground />
      <Navigation />
      <PageTransition>
        <div className="pt-32 pb-20">
          <div className="max-w-6xl mx-auto px-6">
            <SectionHeader
              label="Process"
              title="Trajectory"
              description="Building sustainable systems through engineering, experimentation, and discipline"
            />

            {/* Summary Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass rounded-2xl p-8 mb-24"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Dip Chakraborty</h3>
                  <p className="text-muted-foreground leading-relaxed max-w-2xl text-justify" style={{ textJustify: "inter-word" }}>
                    Innovative and deadline-driven Software Engineer with 3+ years of experience designing and
                    developing user-centered software solutions. Specializing in API and Progressive Web App
                    Development, adept in software design patterns with a focus on system-level architecture.
                  </p>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" asChild className="gap-2 bg-transparent">
                    <Link href="https://dev.dipchakraborty.com" target="_blank">
                      <ExternalLink size={16} />
                      Portfolio
                    </Link>
                  </Button>
                  <Button className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                    <a href="/Dip_Chakraborty_Software_Engineer_4_Years_Experience.pdf" target="_blank" rel="noopener noreferrer">
                      <Download size={16} />
                      Resume
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Hero Image - from About page */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative mb-24"
            >
              <div className="relative aspect-[21/9] rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 z-10" />
                <Image
                  src="dip_working.png"
                  alt="Dip Chakraborty at work"
                  fill
                  className="object-cover brightness-110"
                />
              </div>
              {/* Offset decorative element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 glass rounded-xl -z-10" />
            </motion.div>

            {/* Capabilities Section */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-24"
            >
              <Capabilities />
            </motion.div>
          </div>

          {/* System Design Process - Flowchart Algorithm */}
          <div className="mb-24">
            <SystemDesignProcess />
          </div>

          {/* Career Timeline - after System Design Process */}
          <CareerTimeline />

          {/* Narrative Trajectory */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto px-6 mt-8 pb-32"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">From Robotics to Software.</h3>
              <div className="space-y-6 text-muted-foreground leading-relaxed text-justify" style={{ textJustify: "inter-word" }}>
                <p>
                  My early technical journey was deeply rooted in robotics and hardware-intensive systems. However, in my country, the practical scope of large-scale robotics development remains limited due to high hardware costs, expensive semiconductor components, and relatively low mass adoption of automation technologies. These constraints make sustained innovation and commercialization in robotics challenging.
                </p>
                <p>
                  In contrast, software engineering and artificial intelligence present immediate and scalable opportunities, as computers and mobile devices are widely accessible to the general population. AI represents the current technological revolution, enabling intelligent systems to be deployed at scale with minimal hardware dependency. Looking ahead, augmented and virtual reality are expected to become mainstream as devices become more affordable, allowing users to experience immersive digital environments.
                </p>
                <p>
                  This evolution will eventually accelerate the next major phase of robotics, driven by increasing demand for large-scale manual labor automation and continuous advances in computing, sensing, and control technologies. My transition to professional software development reflects a strategic alignment with this technological trajectory and long-term innovation potential.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </PageTransition>
    </main>
  )
}
