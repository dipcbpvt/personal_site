import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import dynamic from "next/dynamic"
import "./globals.css"
import CustomCursorLoader from "@/components/custom-cursor-loader"
import { ThemeProvider } from "@/components/theme-provider"

// Lazy load preloader - shown on initial load then hidden
const Preloader = dynamic(() => import("@/components/preloader").then(mod => ({ default: mod.Preloader })), {
  ssr: true,
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap", // Prevent FOUT with font-display: swap
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL('https://dipchakraborty.com'),
  title: {
    default: "Dip Chakraborty | Software Engineer & Tech Enthusiast",
    template: "%s | Dip Chakraborty"
  },
  description:
    "Dip Chakraborty is a Software Engineer, Content Creator, and Researcher from Bangladesh. Passionate about web technology, AI, and building innovative solutions. Explore my portfolio, projects, and technical insights.",
  keywords: [
    "dip chakraborty",
    "software engineer",
    "web developer",
    "tech enthusiast",
    "bangladesh",
    "full stack developer",
    "react developer",
    "next.js developer",
    "AI enthusiast",
    "content creator",
    "tech researcher",
    "portfolio",
    "web development",
    "software development"
  ],
  authors: [{ name: "Dip Chakraborty", url: "https://dipchakraborty.com" }],
  creator: "Dip Chakraborty",
  publisher: "Dip Chakraborty",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dipchakraborty.com",
    siteName: "Dip Chakraborty",
    title: "Dip Chakraborty | Software Engineer & Tech Enthusiast",
    description: "Software Engineer | Content Creator | Researcher. Building innovative solutions with web technology and AI.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dip Chakraborty - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dip Chakraborty | Software Engineer & Tech Enthusiast",
    description: "Software Engineer | Content Creator | Researcher",
    images: ["/og-image.png"],
    creator: "@dipchakraborty",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: "/dc-icon.png", sizes: "any" },
      { url: "/dc-icon.png", sizes: "16x16", type: "image/png" },
      { url: "/dc-icon.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/dc-icon.png",
    apple: "/dc-icon.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://dipchakraborty.com",
  },
}

export const viewport: Viewport = {
  themeColor: "#3b82f6",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: "light dark",
  viewportFit: "cover",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Dip Chakraborty",
    url: "https://dipchakraborty.com",
    image: "https://dipchakraborty.com/og-image.png",
    jobTitle: "Software Engineer",
    description: "Software Engineer, Content Creator, and Researcher passionate about web technology, AI, and building innovative solutions.",
    sameAs: [
      "https://github.com/dipchakraborty",
      "https://linkedin.com/in/dipchakraborty",
      "https://twitter.com/dipchakraborty",
    ],
    knowsAbout: [
      "Software Engineering",
      "Web Development",
      "Artificial Intelligence",
      "React",
      "Next.js",
      "TypeScript",
      "Full Stack Development"
    ],
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          suppressHydrationWarning
        />
        {/* Preload critical hero images for LCP optimization */}
        <link rel="preload" as="image" href="/dip.png" type="image/png" />
        <link rel="preload" as="image" href="/dip2.png" type="image/png" />
        {/* Prefetch next page to improve navigation performance */}
        <link rel="prefetch" href="/experience" />
        <link rel="prefetch" href="/about" />
        <link rel="prefetch" href="/contact" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {/* Skip to main content link for accessibility */}
        <a href="#main-content" className="sr-skip-link">Skip to main content</a>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <CustomCursorLoader />
          <div className="grain" />
          <Preloader />
          <main id="main-content">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
