import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Experience | Dip Chakraborty",
    description: "Professional experience, leadership roles, research work, and achievements in software engineering, robotics, and automation.",
    keywords: [
        "software engineer",
        "robotics",
        "automation",
        "leadership",
        "research",
        "product engineering",
        "system architecture",
        "mars rover",
        "UIU",
        "Bangladesh",
    ],
    openGraph: {
        title: "Experience | Dip Chakraborty",
        description: "Building systems, leading teams, and solving real-world problems through technology.",
        type: "website",
    },
}

export default function ExperienceLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
