'use client'

import { useEffect, useRef, useState, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial, Stars } from '@react-three/drei'
import { useTheme } from 'next-themes'
import * as THREE from 'three'

// Rotating wireframe globe with glow effect
function GlowingGlobe() {
  const globeRef = useRef<any>(null)
  const { theme, systemTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme
  const isDark = currentTheme === 'dark'

  useFrame((state) => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.003
      globeRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
    }
  })

  return (
    <group ref={globeRef} position={[0, 0, -5]}>
      {/* Main globe */}
      <Sphere args={[2.5, 64, 64]}>
        <meshStandardMaterial
          color={isDark ? '#3b82f6' : '#60a5fa'}
          wireframe
          transparent
          opacity={0.15}
          emissive={isDark ? '#1e40af' : '#2563eb'}
          emissiveIntensity={0.5}
        />
      </Sphere>

      {/* Inner glow sphere */}
      <Sphere args={[2.3, 32, 32]}>
        <meshBasicMaterial
          color={isDark ? '#60a5fa' : '#3b82f6'}
          transparent
          opacity={0.1}
        />
      </Sphere>

      {/* Outer glow */}
      <Sphere args={[2.8, 32, 32]}>
        <meshBasicMaterial
          color={isDark ? '#3b82f6' : '#60a5fa'}
          transparent
          opacity={0.05}
          side={2}
        />
      </Sphere>
    </group>
  )
}

// Animated floating geometric shapes
function FloatingShape({ position, geometry, color, speed }: any) {
  const meshRef = useRef<any>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.8
      meshRef.current.position.x = position[0] + Math.cos(state.clock.elapsedTime * speed * 0.5) * 0.5
      meshRef.current.rotation.x += 0.005
      meshRef.current.rotation.y += 0.008
      meshRef.current.rotation.z += 0.003
    }
  })

  return (
    <mesh ref={meshRef} position={position} geometry={geometry}>
      <MeshDistortMaterial
        color={color}
        distort={0.3}
        speed={3}
        roughness={0.1}
        metalness={0.9}
        transparent
        opacity={0.4}
      />
    </mesh>
  )
}

// Color-shifting particles with glow
function GlowingParticles() {
  const particlesRef = useRef<any>(null)
  const { theme, systemTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme
  const isDark = currentTheme === 'dark'

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.08
      particlesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.15) * 0.2

      // Color transition effect
      const material = particlesRef.current.material
      if (material) {
        const hue = (state.clock.elapsedTime * 0.05) % 1
        material.color.setHSL(hue, 0.6, isDark ? 0.6 : 0.5)
      }
    }
  })

  const particleCount = 1500
  const positions = new Float32Array(particleCount * 3)
  const sizes = new Float32Array(particleCount)

  for (let i = 0; i < particleCount; i++) {
    const radius = 15
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(2 * Math.random() - 1)

    positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
    positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
    positions[i * 3 + 2] = radius * Math.cos(phi)

    sizes[i] = Math.random() * 0.1 + 0.05
  }

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={particleCount}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={2}
        depthWrite={false}
      />
    </points>
  )
}

// Pulsing light effect
function PulsingLights() {
  const light1Ref = useRef<any>(null)
  const light2Ref = useRef<any>(null)
  const { theme, systemTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme
  const isDark = currentTheme === 'dark'

  useFrame((state) => {
    if (light1Ref.current) {
      light1Ref.current.intensity = Math.sin(state.clock.elapsedTime * 0.5) * 0.5 + 1
    }
    if (light2Ref.current) {
      light2Ref.current.intensity = Math.cos(state.clock.elapsedTime * 0.7) * 0.5 + 1
    }
  })

  return (
    <>
      <pointLight
        ref={light1Ref}
        position={[5, 5, 5]}
        color={isDark ? '#3b82f6' : '#60a5fa'}
        intensity={1}
        distance={20}
      />
      <pointLight
        ref={light2Ref}
        position={[-5, -5, 5]}
        color={isDark ? '#8b5cf6' : '#a78bfa'}
        intensity={1}
        distance={20}
      />
    </>
  )
}

function Scene({ isMobile = false }: { isMobile?: boolean }) {
  const { theme, systemTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme
  const isDark = currentTheme === 'dark'

  // Create geometric shapes using useMemo to avoid recreating on every render
  // Reduce shapes on mobile for better performance
  const shapes = useMemo(() => {
    const baseShapes = [
      {
        position: [-6, 2, -8] as [number, number, number],
        geometry: new THREE.OctahedronGeometry(0.8),
        color: isDark ? '#3b82f6' : '#60a5fa',
        speed: 0.4
      },
      {
        position: [6, -2, -10] as [number, number, number],
        geometry: new THREE.IcosahedronGeometry(0.6),
        color: isDark ? '#8b5cf6' : '#a78bfa',
        speed: 0.6
      },
    ]

    // Only show additional shapes on desktop
    if (!isMobile) {
      baseShapes.push(
        {
          position: [-4, -3, -6] as [number, number, number],
          geometry: new THREE.TetrahedronGeometry(0.7),
          color: isDark ? '#06b6d4' : '#22d3ee',
          speed: 0.5
        },
        {
          position: [5, 3, -7] as [number, number, number],
          geometry: new THREE.DodecahedronGeometry(0.5),
          color: isDark ? '#ec4899' : '#f472b6',
          speed: 0.7
        }
      )
    }

    return baseShapes
  }, [isMobile, isDark])

  return (
    <>
      {/* Ambient lighting */}
      <ambientLight intensity={isDark ? 0.2 : 0.4} />

      {/* Main directional light */}
      <directionalLight
        position={[10, 10, 5]}
        intensity={isDark ? 0.4 : 0.8}
        color={isDark ? '#60a5fa' : '#ffffff'}
      />

      {/* Pulsing colored lights */}
      <PulsingLights />

      {/* Starfield background - reduce count on mobile */}
      <Stars
        radius={100}
        depth={50}
        count={isMobile ? 2000 : 5000}
        factor={4}
        saturation={0}
        fade
        speed={0.5}
      />

      {/* Main rotating globe */}
      <GlowingGlobe />

      {/* Floating geometric shapes */}
      {shapes.map((shape, index) => (
        <FloatingShape key={index} {...shape} />
      ))}

      {/* Color-shifting particles - only on desktop for performance */}
      {!isMobile && <GlowingParticles />}
    </>
  )
}

export function AnimatedBackground() {
  const { theme, systemTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme
  const isDark = currentTheme === 'dark'
  const [mounted, setMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Detect mobile devices for performance optimization
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  if (!mounted) {
    return (
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-gradient-to-b from-background to-background/80" />
    )
  }

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: -10 }}>
      <Canvas
        camera={{ position: [0, 0, 12], fov: 75 }}
        style={{
          width: '100%',
          height: '100%',
          background: isDark
            ? 'radial-gradient(ellipse at center, oklch(0.12 0.03 240) 0%, oklch(0.06 0.02 250) 100%)'
            : 'radial-gradient(ellipse at center, oklch(0.96 0.02 85) 0%, oklch(0.92 0.03 80) 100%)',
        }}
        dpr={isMobile ? [1, 1.5] : [1, 2]} // Lower DPR on mobile for better performance
        performance={{ min: 0.5 }} // Allow performance degradation if needed
        gl={{
          antialias: !isMobile,
          alpha: false,
          powerPreference: 'high-performance'
        }}
      >
        <Scene isMobile={isMobile} />
      </Canvas>
    </div>
  )
}
