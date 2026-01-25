import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "About",
    description: "Learn more about Dip Chakraborty - Software Engineer with 3+ years of experience in designing and developing user-centered software solutions. Explore professional experience, technical capabilities, and community leadership.",
    keywords: [
        "about dip chakraborty",
        "software engineer profile",
        "professional experience",
        "technical capabilities",
        "community leadership",
        "bangladesh software engineer",
    ],
    openGraph: {
        title: "About Dip Chakraborty",
        description: "Software Engineer with 3+ years of experience in designing and developing user-centered software solutions.",
        type: "profile",
        url: "https://dipchakraborty.com/about",
    },
    twitter: {
        card: "summary_large_image",
        title: "About Dip Chakraborty",
        description: "Software Engineer with 3+ years of experience in designing and developing user-centered software solutions.",
    },
    alternates: {
        canonical: "https://dipchakraborty.com/about",
    },
}

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
