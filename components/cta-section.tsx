"use client"

import { motion } from "framer-motion"
import { Mail, MessageCircle, Linkedin, Github, Youtube, Send } from "lucide-react"

const socialLinks = [
  {
    icon: <Linkedin size={20} />,
    label: "LinkedIn",
    href: "https://linkedin.com/in/dipcb05",
  },
  {
    icon: <Github size={20} />,
    label: "GitHub",
    href: "https://github.com/dipcb05",
  },
  {
    icon: <Youtube size={20} />,
    label: "YouTube",
    href: "https://youtube.com/@dipcb05",
  },
  {
    icon: <Send size={20} />,
    label: "Telegram",
    href: "https://t.me/dipcb05",
  },
]

export function CTASection() {
  return (
    <section className="relative py-12 sm:py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass p-8 sm:p-12 rounded-3xl border border-primary/10"
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12"
          >
            Let's <span className="text-primary">Connect</span>
          </motion.h2>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-12 max-w-2xl mx-auto">
            <motion.div
              whileHover={{ y: -5 }}
              className="flex flex-col items-center p-6 rounded-2xl bg-primary/5 border border-primary/10"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                <Mail size={24} />
              </div>
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Email</h3>
              <a href="mailto:connect@dipchakraborty.com" className="text-lg font-medium hover:text-primary transition-colors">
                connect@dipchakraborty.com
              </a>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="flex flex-col items-center p-6 rounded-2xl bg-primary/5 border border-primary/10"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                <MessageCircle size={24} />
              </div>
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">WhatsApp</h3>
              <a href="https://wa.me/+8801714261787" target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:text-primary transition-colors">
                +8801714261787
              </a>
            </motion.div>
          </div>

          <div>
            <h4 className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-6">Connect on Social</h4>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-xl bg-background border border-primary/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
                  title={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
