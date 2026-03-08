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

    // Mobile version - hide on mobile (moved to hamburger menu)
    if (isMobile) {
        return null
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
