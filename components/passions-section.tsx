"use client"

import { motion, useMotionTemplate, useMotionValue } from "framer-motion"
import { Film, Music, BookOpen, Brain } from "lucide-react"
import { useRef } from "react"

const passions = [
  {
    title: "Filmmaking",
    description: "Aspiring director passionate about storytelling and visual narratives. One day, stepping into filmmaking as a director is my dream.",
    icon: <Film className="w-8 h-8" />,
    color: "from-red-500/20 to-orange-500/20",
    borderColor: "border-red-500/30",
    textColor: "text-red-400"
  },
  {
    title: "Writing",
    description: "Crafting stories through words. Blogging about technology, culture, and personal insights.",
    icon: <BookOpen className="w-8 h-8" />,
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30",
    textColor: "text-blue-400"
  },
  {
    title: "Music",
    description: "Deep appreciation for Indian classical and world music traditions. The rhythm of classical music fascinates me.",
    icon: <Music className="w-8 h-8" />,
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500/30",
    textColor: "text-purple-400"
  },
]

function PassionCard({ passion, index }: { passion: typeof passions[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    x.set((e.clientX - centerX) * 0.1)
    y.set((e.clientY - centerY) * 0.1)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const rotateX = useMotionTemplate`perspective(1000px) rotateX(${y}) rotateY(${x})`

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: rotateX,
      }}
      className="h-full"
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        className={`h-full rounded-2xl p-8 backdrop-blur-2xl border border-white/20 ${passion.borderColor} bg-gradient-to-br ${passion.color} relative overflow-hidden group shadow-lg hover:shadow-2xl transition-shadow duration-300`}
      >
        {/* Animated gradient background on hover */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(600px at var(--mouse-x, 0px) var(--mouse-y, 0px), ${passion.textColor}20, transparent 80%)`,
          }}
        />

        {/* Content */}
        <div className="relative z-10 space-y-4">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 + 0.2, type: "spring", stiffness: 200 }}
            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${passion.color} border border-white/20 flex items-center justify-center ${passion.textColor}`}
          >
            {passion.icon}
          </motion.div>

          <div>
            <h3 className="text-2xl font-bold text-foreground mb-3">{passion.title}</h3>
            <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
              {passion.description}
            </p>
          </div>
        </div>

        {/* Animated accent line */}
        <motion.div
          className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${passion.borderColor.replace('border-', 'from-')}`}
          initial={{ width: 0 }}
          whileHover={{ width: "100%" }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>
    </motion.div>
  )
}

export function PassionsSection() {
  return (
    <div className="py-16 md:py-24" id="hobbies">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {passions.map((passion, index) => (
            <PassionCard key={passion.title} passion={passion} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}
