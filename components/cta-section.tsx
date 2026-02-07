"use client"

import { motion } from "framer-motion"
import { Mail, MessageCircle, Linkedin, Github, Youtube, Send } from "lucide-react"

const socialLinks = [
  {
    icon: <Linkedin size={18} />,
    label: "LinkedIn",
    href: "https://linkedin.com/in/dipcb05",
  },
  {
    icon: <Github size={18} />,
    label: "GitHub",
    href: "https://github.com/dipcb05",
  },
  {
    icon: <Youtube size={18} />,
    label: "YouTube",
    href: "https://youtube.com/@dipcb05",
  },
  {
    icon: <Send size={18} />,
    label: "Telegram",
    href: "https://t.me/dipcb05",
  },
]

export function CTASection() {
  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
          className="space-y-12"
        >
          {/* Contact Info - Enhanced */}
          <div className="grid sm:grid-cols-2 gap-6 max-w-xl mx-auto">
            {[
              {
                icon: Mail,
                label: "Email",
                value: "connect@dipchakraborty.com",
                href: "mailto:connect@dipchakraborty.com"
              },
              {
                icon: MessageCircle,
                label: "WhatsApp",
                value: "+8801714261787",
                href: "https://wa.me/+8801714261787",
                external: true
              }
            ].map((contact, index) => (
              <motion.a
                key={contact.label}
                href={contact.href}
                {...(contact.external && { target: "_blank", rel: "noopener noreferrer" })}
                className="group p-6 glass rounded-xl transition-all duration-300 relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.34, 1.56, 0.64, 1]
                }}
                whileHover={{
                  y: -4,
                  boxShadow: "0 12px 24px rgba(0, 0, 0, 0.08)"
                }}
              >
                {/* Hover gradient background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "200%" }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-2">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                      <contact.icon size={20} className="text-primary/60 group-hover:text-primary transition-colors" />
                    </motion.div>
                    <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                      {contact.label}
                    </span>
                  </div>
                  <motion.p
                    className="text-sm text-foreground group-hover:text-primary transition-colors"
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {contact.value}
                  </motion.p>
                </div>

                {/* Border glow */}
                <motion.div
                  className="absolute inset-0 rounded-xl border border-primary/0 group-hover:border-primary/20"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Social Links - Enhanced */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 py-2 glass rounded-lg transition-all duration-300 relative overflow-hidden"
                title={link.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: 0.4 + index * 0.05,
                  ease: [0.34, 1.56, 0.64, 1]
                }}
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.08)"
                }}
              >
                {/* Hover background */}
                <motion.div
                  className="absolute inset-0 bg-primary/5"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />

                {/* Shimmer */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "200%" }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />

                <div className="relative z-10 flex items-center gap-2">
                  <motion.span
                    className="text-muted-foreground/60 group-hover:text-primary transition-colors"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {link.icon}
                  </motion.span>
                  <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">
                    {link.label}
                  </span>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
