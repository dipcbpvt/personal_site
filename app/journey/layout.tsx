import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Journey | Dip Chakraborty",
    description: "From a kid who watched too many movies to someone who builds systems for a living.",
    keywords: ["Dip Chakraborty", "journey", "story", "career", "software engineer", "robotics", "AI", "product engineer"],
    openGraph: {
        title: "Journey | Dip Chakraborty",
        description: "From a kid who watched too many movies to someone who builds systems for a living.",
        type: "website",
    },
}

export default function JourneyLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
