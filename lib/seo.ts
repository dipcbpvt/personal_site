// SEO Helper Functions and Constants

export const SITE_URL = "https://dipchakraborty.com"
export const SITE_NAME = "Dip Chakraborty"

export interface SeoMetadata {
  title: string
  description: string
  image?: string
  url: string
  keywords?: string[]
  author?: string
  publishedDate?: string
  modifiedDate?: string
}

export function generateMetadataObject(metadata: SeoMetadata) {
  return {
    title: metadata.title,
    description: metadata.description,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url: metadata.url,
      siteName: SITE_NAME,
      images: metadata.image
        ? [
            {
              url: metadata.image,
              width: 1200,
              height: 630,
              alt: metadata.title,
            },
          ]
        : [],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.description,
      images: metadata.image ? [metadata.image] : [],
      creator: "@dipchakraborty_",
    },
    keywords: metadata.keywords?.join(", "),
  }
}

// Core Web Vitals monitoring helper
export function reportWebVitals() {
  if (typeof window !== "undefined" && "web-vital" in window) {
    // Web Vitals will be reported automatically
    console.log("[SEO] Core Web Vitals monitoring enabled")
  }
}

// Sitemap generation helper
export function generateSitemapEntry(
  url: string,
  lastModified?: Date,
  changeFrequency?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never",
  priority?: number
) {
  return {
    url,
    lastModified: lastModified || new Date(),
    changeFrequency: changeFrequency || "weekly",
    priority: priority || 0.8,
  }
}

// Structured data builder
export function buildPersonSchema(name: string, email: string, url: string, image: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    email,
    url,
    image,
    sameAs: [
      "https://github.com/dipbhai",
      "https://twitter.com/dipchakraborty_",
      "https://linkedin.com/in/dip-chakraborty/",
    ],
    knowsAbout: [
      "Full-Stack Development",
      "System Design",
      "API Development",
      "PWA Development",
      "DevOps",
      "AI & Automation",
      "IoT",
      "Robotics",
    ],
  }
}

export function buildBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

// Image optimization helper
export function getOptimizedImageUrl(
  src: string,
  width: number,
  quality: "low" | "medium" | "high" = "medium"
) {
  // This is a placeholder - implement with your image CDN
  const qualityMap = { low: 60, medium: 75, high: 90 }
  return `${src}?w=${width}&q=${qualityMap[quality]}`
}
