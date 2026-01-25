import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Contact",
    description: "Get in touch with Dip Chakraborty. Connect via email, LinkedIn, GitHub, or schedule a meeting. Located in Dhaka, Bangladesh.",
    keywords: [
        "contact dip chakraborty",
        "get in touch",
        "software engineer contact",
        "dhaka bangladesh",
        "schedule meeting",
    ],
    openGraph: {
        title: "Contact Dip Chakraborty",
        description: "Get in touch with Dip Chakraborty. Connect via email, LinkedIn, GitHub, or schedule a meeting.",
        type: "website",
        url: "https://dipchakraborty.com/contact",
    },
    twitter: {
        card: "summary",
        title: "Contact Dip Chakraborty",
        description: "Get in touch with Dip Chakraborty. Connect via email, LinkedIn, GitHub, or schedule a meeting.",
    },
    alternates: {
        canonical: "https://dipchakraborty.com/contact",
    },
}

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
