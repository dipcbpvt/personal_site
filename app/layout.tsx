import type { Metadata, Viewport } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import CustomCursorLoader from "@/components/custom-cursor-loader"
import { CursorGlow } from "@/components/cursor-glow"

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
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className="font-sans antialiased text-foreground selection:bg-primary/20">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="grain" />
          <CursorGlow />
          <CustomCursorLoader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
