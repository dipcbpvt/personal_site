import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "The Purpose | Dip Chakraborty",
    description: "From Iron Man dreams to building real systems-a journey blending technology, creativity, and human connection. Explore the story of a software engineer passionate about robotics, automation, and meaningful innovation.",
    keywords: [
        "dip chakraborty story",
        "software engineer journey",
        "robotics passion",
        "automation engineer",
        "mars rover team",
        "product engineering",
        "bangladesh tech",
        "AI and robotics",
        "systems thinking",
    ],
    openGraph: {
        title: "The Purpose | Dip Chakraborty",
        description: "A narrative journey from curiosity to creation-blending software engineering, robotics, and real-world problem solving.",
        type: "profile",
        url: "https://dipchakraborty.com/purpose",
    },
    twitter: {
        card: "summary_large_image",
        title: "The Purpose | Dip Chakraborty",
        description: "From Iron Man dreams to building real systems-a journey of technology and creativity.",
    },
    alternates: {
        canonical: "https://dipchakraborty.com/purpose",
    },
}

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
