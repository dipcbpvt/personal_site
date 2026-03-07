"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import * as THREE from "three"
import { useTheme } from "next-themes"

function ParticleField({ count = 5000 }) {
    const pointsRef = useRef<THREE.Points>(null!)
    const { resolvedTheme } = useTheme()

    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3)
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 15
            pos[i * 3 + 1] = (Math.random() - 0.5) * 15
            pos[i * 3 + 2] = (Math.random() - 0.5) * 10
        }
        return pos
    }, [count])

    useFrame((state, delta) => {
        if (pointsRef.current) {
            pointsRef.current.rotation.x += delta * 0.05
            pointsRef.current.rotation.y += delta * 0.08
        }
    })

    const color = resolvedTheme === "dark" ? "#60a5fa" : "#3b82f6"

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color={color}
                    size={0.035}
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                    opacity={0.8}
                />
            </Points>
        </group>
    )
}

function FloatingOrbs() {
    const groupRef = useRef<THREE.Group>(null!)
    const { resolvedTheme } = useTheme()

    useFrame((state, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.x -= delta * 0.05
            groupRef.current.rotation.y -= delta * 0.05
            // Float up and down
            groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5
        }
    })

    const bgLayer = resolvedTheme === "dark" ? 0.05 : 0.2

    return (
        <group ref={groupRef}>
            {[...Array(15)].map((_, i) => (
                <mesh
                    key={i}
                    position={[
                        (Math.random() - 0.5) * 15,
                        (Math.random() - 0.5) * 15,
                        (Math.random() - 0.5) * 5 - 2  // push them slightly back
                    ]}
                >
                    <sphereGeometry args={[Math.random() * 0.2 + 0.1, 16, 16]} />
                    <meshBasicMaterial
                        color={resolvedTheme === "dark" ? "#3b82f6" : "#2563eb"}
                        transparent
                        opacity={bgLayer}
                        blending={THREE.AdditiveBlending}
                    />
                </mesh>
            ))}
        </group>
    )
}

export function ThreeBackground() {
    return (
        <div className="fixed inset-0 -z-20 pointer-events-none transition-opacity duration-1000">
            <Canvas
                camera={{ position: [0, 0, 2], fov: 75 }}
                dpr={[1, 2]} // Support high-res displays
                gl={{ antialias: false, powerPreference: "high-performance" }}
            >
                <color attach="background" args={["transparent" as any]} />
                <ParticleField />
                <FloatingOrbs />
            </Canvas>
            <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background/90 pointer-events-none" />
        </div>
    )
}
