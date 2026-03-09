"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image, { ImageProps } from "next/image"

interface ParallaxImageProps extends Omit<ImageProps, "fill"> {
    containerClassName?: string
}

export function ParallaxImage({ containerClassName, alt, ...props }: ParallaxImageProps) {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    })

    // Subtle translateY: from -5% to 5% (small enough to prevent motion sickness)
    const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"])

    return (
        <div ref={ref} className={`relative overflow-hidden ${containerClassName || ""}`}>
            <motion.div style={{ y, width: "100%", height: "110%", position: "absolute", top: "-5%", left: 0 }}>
                <Image fill alt={alt} {...props} className={`object-cover ${props.className || ""}`} />
            </motion.div>
        </div>
    )
}
