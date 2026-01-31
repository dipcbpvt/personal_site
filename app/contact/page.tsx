"use client"

import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { PageTransition } from "@/components/page-transition"

// Lazy load spotlight background
const SpotlightBg = dynamic(() => import("@/components/spotlight-bg").then(mod => ({ default: mod.SpotlightBg })), {
  ssr: false,
  loading: () => null,
})
import { SectionHeader } from "@/components/section-header"
import { ContactInfoCard } from "@/components/contact-info-card"
import { ContactSchedulingCard } from "@/components/contact-scheduling-card"
import { Mail, MapPin, Linkedin, Github, Youtube, MessageCircle, Send } from "lucide-react"

const contactInfo = [
  {
    icon: <Mail size={20} />,
    label: "Email",
    value: "connect@dipchakraborty.com",
    href: "mailto:connect@dipchakraborty.com",
  },
  {
    icon: <MapPin size={20} />,
    label: "Location",
    value: "Dhaka, Bangladesh",
    href: "https://maps.google.com/?q=Dhaka+Bangladesh",
  },
]

const socialLinks = [
  {
    icon: <Linkedin size={20} />,
    label: "LinkedIn",
    value: "linkedin.com/in/dipcb05",
    href: "https://linkedin.com/in/dipcb05",
  },
  {
    icon: <Github size={20} />,
    label: "GitHub",
    value: "github.com/dipcb05",
    href: "https://github.com/dipcb05",
  },
  {
    icon: <Youtube size={20} />,
    label: "YouTube",
    value: "youtube.com/@dipcb05",
    href: "https://youtube.com/@dipcb05",
  },
  {
    icon: <MessageCircle size={20} />,
    label: "WhatsApp",
    value: "+880 171 426 178 7",
    href: "https://wa.me/+8801714261787",
  },
  {
    icon: <Send size={20} />,
    label: "Telegram",
    value: "@dipcb05",
    href: "https://t.me/dipcb05",
  },
]

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-background">
      <SpotlightBg />
      <Navigation />
      <PageTransition>
        <div className="pt-32 pb-20">
          <div className="max-w-6xl mx-auto px-6">
            <SectionHeader
              label="Contact"
              title="Let's Connect"
              description="Have a project in mind or just want to say hello? I'd love to hear from you."
            />

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Contact Information Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className="text-lg font-semibold text-foreground mb-6">Get in Touch</h3>

                {/* Main contact info */}
                <div className="space-y-4 mb-8">
                  {contactInfo.map((item, index) => (
                    <ContactInfoCard key={item.label} item={item} index={index} />
                  ))}
                </div>

                {/* Social links */}
                <div>
                  <h4 className="text-sm font-semibold text-foreground/70 mb-4">Connect on Social</h4>
                  <div className="flex flex-wrap gap-3">
                    {socialLinks.map((link, index) => (
                      <motion.a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 hover:scale-110 transition-all duration-300"
                        title={link.label}
                      >
                        {link.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Scheduling Card */}
              <ContactSchedulingCard />
            </div>
          </div>
        </div>
      </PageTransition>
    </main>
  )
}
