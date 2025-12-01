import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { Preloader } from "@/components/preloader"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Dip Chakraborty | Software Engineer & Tech Enthusiast",
  description:
    "Dip Chakraborty is a Software Engineer, Content Creator, and Researcher from Bangladesh. Passionate about web technology, AI, and building innovative solutions.",
  keywords: "dip chakraborty, software engineer, web developer, tech enthusiast, bangladesh",
  authors: [{ name: "Dip Chakraborty" }],
  openGraph: {
    title: "Dip Chakraborty",
    description: "Software Engineer | Content Creator | Researcher",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dip Chakraborty",
    description: "Software Engineer | Content Creator | Researcher",
  },
  icons: {
    icon: "/dip-logo.svg",
  },
  generator: "v0.app",
}

export const viewport: Viewport = {
  themeColor: "#3b82f6",
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="grain" />
          <Preloader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
