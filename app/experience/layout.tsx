import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Experience",
    description: "Explore Dip Chakraborty's professional journey - 4+ years of building reliable systems across automation, robotics, IoT, and AI. Professional experience, community leadership, and the types of systems that shaped my engineering perspective.",
    keywords: [
        "dip chakraborty experience",
        "software engineer career",
        "professional experience",
        "community leadership",
        "systems engineering",
        "robotics experience",
        "automation systems",
    ],
    openGraph: {
        title: "Experience - Dip Chakraborty",
        description: "Professional journey spanning automation, robotics, IoT, and AI systems. Community leadership and engineering excellence.",
        type: "profile",
        url: "https://dipchakraborty.com/experience",
    },
    twitter: {
        card: "summary_large_image",
        title: "Experience - Dip Chakraborty",
        description: "Professional journey spanning automation, robotics, IoT, and AI systems. Community leadership and engineering excellence.",
    },
    alternates: {
        canonical: "https://dipchakraborty.com/experience",
    },
}

export default function ExperienceLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
