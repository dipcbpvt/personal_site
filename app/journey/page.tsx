"use client"

import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Music, Rocket, Lightbulb, Wrench, TrendingUp, MapPin, Compass } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { PageTransition } from "@/components/page-transition"

const SpotlightBg = dynamic(() => import("@/components/spotlight-bg").then(mod => ({ default: mod.SpotlightBg })), {
    ssr: false,
    loading: () => null,
})

const journeyChapters = [
    {
        year: "Early Years",
        title: "A Home Filled with Song",
        icon: Music,
        content: `Growing up in a home filled with song, where my family practiced music together and I happily joined in, I was always a bit of a dreamer. As a kid, I was obsessed with sports, chasing every game and match I could find. But movies? They hit differently. They made me pause, reflect, and see life from fresh angles.

Science fascinated me through school, though not in a "become a doctor" way. I chose the science group because I was genuinely curious about how things worked, not because of where it might lead.`
    },
    {
        year: "The Spark",
        title: "Then Came Iron Man",
        icon: Rocket,
        content: `Watching Tony Stark on screen changed everything. His wit, his relentless problem solving, that sleek suit powered by ingenuity… but most of all, JARVIS. The idea of building something that understood you, anticipated your needs, and turned your ideas into reality—that hooked me.

I wanted to make something like that. Not just a tool, but an extension of who I was. That dream sparked my journey into code. I started coding around 12th grade. My first Python script printed a welcome message. It felt like magic. I tried automating a water meter with robotics, tinkered with whatever seemed interesting, and chased that feeling of creating something from nothing.`
    },
    {
        year: "Discovery",
        title: "Code as Art",
        icon: Lightbulb,
        content: `Over time, I started seeing software differently—not as cold code, but as art. Like painting or music, programming became a way to connect with people. The more creative you are in solving real needs, the more valuable it becomes.

Every problem I encountered became a question: What does this actually solve? Why would someone choose this? I began seeing systems as living, interconnected things—always evolving, always human at their core.`
    },
    {
        year: "Building",
        title: "From Robotics to Real Systems",
        icon: Wrench,
        content: `Robotics competitions. Startup environments. Production systems people actually use. I've built automation platforms, navigation systems, access control, AI workflows—things that matter in the real world.

I learned that constraints matter—technical, human, operational. I became biased toward automation. I got obsessed with edge cases. I committed to building things that stay calm under pressure.

Most of the work happens before requirements are clean. I'm good at turning ambiguity into structure: modeling real-world constraints, designing architectures that are feasible and durable, and planning execution so systems actually ship.`
    },
    {
        year: "Growth",
        title: "Struggles & Lessons",
        icon: TrendingUp,
        content: `I've shipped features nobody used. I've over-engineered simple problems. I've learned that perfect kills shipped.

Each failure taught me something: listen more, assume less, validate early. Care about the problem more than the technology. Remember there's a human trying to get something done.

Leadership isn't about having all the answers—it's about asking better questions, creating clarity, and empowering others to do their best work.`
    },
    {
        year: "Present",
        title: "Where I Am Now",
        icon: MapPin,
        content: `I'm still that kid who got hooked on a movie. Now I'm channeling that into building things that matter.

I'm a product-minded engineer. I shape direction early, build core systems hands-on, and use clear documentation and visual thinking to align people.

I don't obsess over tools—AI handles plenty of that. I do obsess over whether it works in the real world, solves a real problem, and keeps working beyond version one.

I stay hungry for history, art, sports, stories. I turn learning into lessons—teaching, writing, sharing ideas that spark something in others.`
    },
    {
        year: "Future",
        title: "What's Next",
        icon: Compass,
        content: `One day, I want to make films. Stories that move people, that make them pause and think—just like Iron Man did for me.

For now, I'm focused on building systems that matter, learning in public, and connecting with people who share the same curiosity and drive.

If you're working on something interesting, let's talk.`
    }
]

const coreValues = [
    {
        title: "Solution-First Mindset",
        description: "I care about solving real problems and getting products into the real world. Technology is a means, not the end.",
        icon: "🎯"
    },
    {
        title: "Bias Toward Automation",
        description: "If it's repetitive, it should be automated. I build systems that free humans to do more interesting work.",
        icon: "💻"
    },
    {
        title: "Learning Out Loud",
        description: "I write to learn. I teach to clarify. Sharing knowledge sharpens thinking and builds community.",
        icon: "📖"
    },
    {
        title: "Human-Centered Design",
        description: "Every line of code should serve a purpose. I build solutions that truly solve problems for real people.",
        icon: "❤️"
    }
]

const passions = [
    {
        icon: "🎬",
        title: "Filmmaking",
        description: "Stories that move people and make them think"
    },
    {
        icon: "🎵",
        title: "Music",
        description: "From family practice sessions to personal exploration"
    },
    {
        icon: "🏏",
        title: "Cricket",
        description: "The sport that taught me strategy and patience"
    },
    {
        icon: "📚",
        title: "Reading",
        description: "History, philosophy, and stories that expand perspective"
    },
    {
        icon: "✍️",
        title: "Writing",
        description: "Turning thoughts into lessons, ideas into clarity"
    },
    {
        icon: "🎮",
        title: "Gaming",
        description: "Interactive experiences and system design"
    }
]

export default function JourneyPage() {
    const containerRef = useRef<HTMLDivElement>(null)

    return (
        <main className="relative min-h-screen bg-background">
            <SpotlightBg />
            <Navigation />
            <PageTransition>
                <div ref={containerRef} className="pt-32 pb-20">
                    <div className="max-w-5xl mx-auto px-6">

                        {/* Header */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
                                JOURNEY
                            </h1>
                            <p className="text-xl sm:text-2xl text-muted-foreground mb-4">
                                The Story So Far
                            </p>
                            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
                                From a curious kid inspired by Iron Man to building systems that matter.
                                This is my journey.
                            </p>
                        </motion.div>

                        {/* Hero Image */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative mb-20"
                        >
                            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 z-10" />
                                <Image
                                    src="/dip_working.png"
                                    alt="At work"
                                    fill
                                    quality={80}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                                    className="object-cover"
                                    loading="lazy"
                                />
                            </div>
                        </motion.div>

                        {/* Timeline */}
                        <section id="timeline">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="mb-12"
                            >
                                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
                                    A <span className="text-primary">Chronological</span> Journey
                                </h2>
                                <p className="text-center text-muted-foreground max-w-2xl mx-auto">
                                    Growth, struggles, discoveries, and dreams—told as chapters in a story.
                                </p>
                            </motion.div>

                            <div className="space-y-12">
                                {journeyChapters.map((chapter, index) => (
                                    <motion.div
                                        key={chapter.title}
                                        initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2, duration: 0.6 }}
                                        className="relative"
                                    >
                                        <div className="glass rounded-2xl p-8 hover:bg-primary/5 transition-all duration-300">
                                            <div className="flex items-start gap-6">
                                                <div className="flex-shrink-0">
                                                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                                                        <chapter.icon size={32} className="text-primary" />
                                                    </div>
                                                </div>

                                                <div className="flex-1">
                                                    <div className="mb-4">
                                                        <p className="text-xs uppercase tracking-wider text-primary font-semibold mb-2">
                                                            {chapter.year}
                                                        </p>
                                                        <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                                                            {chapter.title}
                                                        </h3>
                                                    </div>

                                                    <div className="prose prose-lg dark:prose-invert max-w-none">
                                                        {chapter.content.split('\n\n').map((paragraph, pIndex) => (
                                                            <p key={pIndex} className="text-muted-foreground leading-relaxed mb-4 last:mb-0">
                                                                {paragraph}
                                                            </p>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </section>

                        {/* Core Values */}
                        <section id="values" className="mt-24">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="mb-12"
                            >
                                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
                                    Core <span className="text-primary">Values</span>
                                </h2>
                                <p className="text-center text-muted-foreground max-w-2xl mx-auto">
                                    The principles that guide how I work and what I build.
                                </p>
                            </motion.div>

                            <div className="grid sm:grid-cols-2 gap-6">
                                {coreValues.map((value, index) => (
                                    <motion.div
                                        key={value.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="glass rounded-2xl p-6 hover:bg-primary/5 transition-all duration-300"
                                    >
                                        <div className="text-4xl mb-4">{value.icon}</div>
                                        <h3 className="text-xl font-bold text-foreground mb-3">
                                            {value.title}
                                        </h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {value.description}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </section>

                        {/* Passions */}
                        <section id="passions" className="mt-24">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="mb-12"
                            >
                                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
                                    Beyond <span className="text-primary">Code</span>
                                </h2>
                                <p className="text-center text-muted-foreground max-w-2xl mx-auto">
                                    The passions and interests that keep me grounded, curious, and human.
                                </p>
                            </motion.div>

                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                                {passions.map((passion, index) => (
                                    <motion.div
                                        key={passion.title}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                        className="glass rounded-2xl p-6 text-center hover:bg-primary/5 transition-all duration-300"
                                    >
                                        <div className="text-4xl mb-3">{passion.icon}</div>
                                        <h3 className="text-lg font-bold text-foreground mb-2">
                                            {passion.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            {passion.description}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </section>

                        {/* Closing */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mt-24 text-center"
                        >
                            <div className="glass rounded-2xl p-12">
                                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                                    Let's Build Something <span className="text-primary">Together</span>
                                </h2>
                                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                                    If you've made it this far, thank you for taking the time to read my story.
                                    Whether you're looking to collaborate, discuss ideas, or just connect—I'd love to hear from you.
                                </p>
                                <div className="flex flex-wrap gap-4 justify-center">
                                    <a
                                        href="mailto:connect@dipchakraborty.com"
                                        className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                                    >
                                        Get in Touch
                                    </a>
                                    <a
                                        href="https://linkedin.com/in/dipcb05"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-6 py-3 glass rounded-lg font-medium hover:bg-primary/5 transition-colors"
                                    >
                                        Connect on LinkedIn
                                    </a>
                                </div>
                            </div>
                        </motion.section>

                    </div>
                </div>
            </PageTransition>
        </main>
    )
}
