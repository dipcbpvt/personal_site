"use client"

import { motion } from "framer-motion"
import { MagneticIcon } from "./magnetic-icon"
import { Linkedin, Github, Youtube, Mail, MessageCircle, Send } from "lucide-react"

const socials = [
  { href: "https://linkedin.com/in/dipcb05", icon: <Linkedin size={20} />, label: "LinkedIn" },
  { href: "https://github.com/dipcb05", icon: <Github size={20} />, label: "GitHub" },
  { href: "https://youtube.com/@dipcb05", icon: <Youtube size={20} />, label: "YouTube" },
  { href: "mailto:dipcb05@gmail.com", icon: <Mail size={20} />, label: "Email" },
  { href: "https://wa.me/+8801714261787", icon: <MessageCircle size={20} />, label: "WhatsApp" },
  { href: "https://t.me/dipcb05", icon: <Send size={20} />, label: "Telegram" },
]

export function SocialBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="flex items-center gap-3"
    >
      {socials.map((social, index) => (
        <motion.div
          key={social.label}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 + index * 0.05 }}
        >
          <MagneticIcon {...social} />
        </motion.div>
      ))}
    </motion.div>
  )
}
