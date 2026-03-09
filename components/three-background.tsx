"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import * as THREE from "three"
import { useTheme } from "next-themes"

function ParticleField({ count = 2500 }) {
    const pointsRef = useRef<THREE.Points>(null!)
    const { resolvedTheme } = useTheme()

    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3)
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 10
            pos[i * 3 + 1] = (Math.random() - 0.5) * 10
            pos[i * 3 + 2] = (Math.random() - 0.5) * 10
        }
        return pos
    }, [count])

    useFrame((state, delta) => {
        pointsRef.current.rotation.x += delta * 0.05
        pointsRef.current.rotation.y += delta * 0.075
    })

    const color = resolvedTheme === "dark" ? "#60a5fa" : "#3b82f6"

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color={color}
                    size={0.015}
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                />
            </Points>
        </group>
    )
}

export function ThreeBackground() {
    return (
        <div className="fixed inset-0 -z-20 pointer-events-none transition-opacity duration-1000">
            <Canvas
                camera={{ position: [0, 0, 1] }}
                dpr={[1, 2]} // Support high-res displays
                gl={{ antialias: false, powerPreference: "high-performance", alpha: true }}
            >
                <ParticleField />
            </Canvas>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />
        </div>
    )
}
