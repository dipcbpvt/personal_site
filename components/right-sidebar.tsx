"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"
import { useIsMobile } from "@/hooks/use-mobile"

const links = [
    {
        title: "Dev Works",
        href: "https://dev.dipchakraborty.com",
        icon: ExternalLink,
    },
    {
        title: "Writings",
        href: "https://writings.dipchakraborty.com",
        icon: ExternalLink,
    },
]

const socialLinks = [
    {
        name: "GitHub",
        href: "https://github.com/dipbhai",
        icon: Github,
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/dip-chakraborty/",
        icon: Linkedin,
    },
    {
        name: "Twitter",
        href: "https://twitter.com/dipchakraborty_",
        icon: Twitter,
    },
    {
        name: "Email",
        href: "mailto:hello@dipchakraborty.com",
        icon: Mail,
    },
]

export function RightSidebar() {
    const isMobile = useIsMobile()

    // Mobile version - horizontal links above bottom navigation
    if (isMobile) {
        return (
            <aside className="lg:hidden fixed top-20 right-2 z-40 flex gap-2 text-sm text-muted-foreground">
                {/* Social Icons Grid */}
                <div className="flex gap-2 glass rounded-xl p-2 backdrop-blur-xl border border-border/50">
                    {socialLinks.map((social) => (
                        <motion.div
                            key={social.name}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center p-2 rounded-lg hover:bg-muted/50 transition-colors"
                                aria-label={social.name}
                            >
                                <social.icon className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </aside>
        )
    }

    // Desktop version
    return (
        <aside className="hidden lg:flex flex-col w-[160px] sticky top-32 h-fit pt-4 gap-8 text-sm text-muted-foreground mr-6">

            {/* Primary Links */}
            <div className="flex flex-col gap-4">
                {links.map((link) => (
                    <Link
                        key={link.title}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-foreground transition-colors group"
                    >
                        <span className="group-hover:translate-x-1 transition-transform">{link.title}</span>
                        <link.icon className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                    </Link>
                ))}
            </div>

            {/* Social Links vertically */}
            <div className="flex flex-col gap-2 border-t border-border/50 pt-8 mb-8">
                {socialLinks.map((social) => (
                    <Link
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-2 rounded-xl hover:bg-muted/50 transition-colors tooltip group relative"
                        aria-label={social.name}
                    >
                        <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                        <span className="opacity-0 group-hover:opacity-100 absolute left-10 transition-opacity text-xs bg-muted px-2 py-1 rounded">{social.name}</span>
                    </Link>
                ))}
            </div>
        </aside>
    )
}
