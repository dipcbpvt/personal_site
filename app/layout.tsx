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
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Structured data (JSON-LD) for SEO
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Dip Chakraborty",
    url: "https://dipchakraborty.com",
    jobTitle: "Software Engineer & Systems Architect",
    email: "hello@dipchakraborty.com",
    image: "https://dipchakraborty.com/og-image.png",
    sameAs: [
      "https://github.com/dipbhai",
      "https://twitter.com/dipchakraborty_",
      "https://linkedin.com/in/dip-chakraborty/",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Independent",
    },
    knowsAbout: [
      "Full-Stack Development",
      "System Design",
      "API Development",
      "PWA Development",
      "DevOps",
      "AI & Automation",
    ],
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        
        {/* Performance Optimizations */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Google Analytics - Optional, add your tracking ID */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5313950468897502"
          crossOrigin="anonymous"
        />
      </head>
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
