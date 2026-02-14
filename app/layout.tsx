import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { Preloader } from "@/components/preloader"
import { ThemeProvider } from "@/components/theme-provider"
import CustomCursorLoader from "@/components/custom-cursor-loader"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://dipchakraborty.com"),
  title: {
    default: "Dip Chakraborty | Software Engineer & Systems Architect",
    template: "%s | Dip Chakraborty",
  },
  description:
    "Software Engineer with 4 years of experience specializing in API development, PWA, and system architecture. Discover my process and purpose.",
  keywords: [
    "Dip Chakraborty",
    "Software Engineer",
    "Systems Architect",
    "Full Stack Developer",
    "PWA Development",
    "Tech Enthusiast",
    "Bangladesh",
    "API Design",
    "Product Engineering",
  ],
  authors: [{ name: "Dip Chakraborty" }],
  creator: "Dip Chakraborty",
  openGraph: {
    title: "Dip Chakraborty | Software Engineer",
    description: "Designing and developing sustainable systems through engineering and innovation.",
    url: "https://dipchakraborty.com",
    siteName: "Dip Chakraborty",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dip Chakraborty - Software Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dip Chakraborty | Software Engineer",
    description: "Designing and developing sustainable systems through engineering and innovation.",
    images: ["/og-image.png"],
    creator: "@dipcb05",
  },
  icons: {
    icon: "/dc-icon.png",
    shortcut: "/dc-icon.png",
    apple: "/dc-icon.png",
  },
  manifest: "/manifest.json",
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
          <CustomCursorLoader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
