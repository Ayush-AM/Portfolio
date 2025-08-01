'use client'

import { useRef, type JSX } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

export function FloatingElements(): JSX.Element {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      const time = state.clock.getElapsedTime()
      groupRef.current.rotation.y = time * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      {/* Floating Cards */}
      {Array.from({ length: 6 }).map((_, i) => {
        const angle = (i / 6) * Math.PI * 2
        const radius = 8
        const x = Math.cos(angle) * radius
        const z = Math.sin(angle) * radius
        const y = Math.sin(i + angle) * 2

        return (
          <Float
            key={`card-${i}`}
            speed={1 + i * 0.2}
            rotationIntensity={0.3}
            floatIntensity={0.5}
          >
            <mesh position={[x, y, z]} rotation={[0, angle + Math.PI / 2, 0]}>
              <planeGeometry args={[1.5, 2]} />
              <meshStandardMaterial
                color="#ffffff"
                metalness={0.1}
                roughness={0.1}
                transparent
                opacity={0.1}
                side={THREE.DoubleSide}
                emissive="#4ecdc4"
                emissiveIntensity={0.05}
              />
            </mesh>
          </Float>
        )
      })}

      {/* Floating Spheres */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i / 12) * Math.PI * 2
        const radius = 12 + Math.sin(i) * 2
        const x = Math.cos(angle) * radius
        const z = Math.sin(angle) * radius
        const y = Math.cos(i * 2) * 3

        return (
          <Float
            key={`sphere-${i}`}
            speed={0.5 + i * 0.1}
            rotationIntensity={0.2}
            floatIntensity={0.3}
          >
            <mesh position={[x, y, z]}>
              <sphereGeometry args={[0.2, 8, 8]} />
              <meshStandardMaterial
                color={i % 3 === 0 ? "#ff6b6b" : i % 3 === 1 ? "#4ecdc4" : "#ffd93d"}
                metalness={0.8}
                roughness={0.2}
                emissive={i % 3 === 0 ? "#ff6b6b" : i % 3 === 1 ? "#4ecdc4" : "#ffd93d"}
                emissiveIntensity={0.3}
              />
            </mesh>
          </Float>
        )
      })}

      {/* Floating Crystals */}
      {Array.from({ length: 4 }).map((_, i) => {
        const angle = (i / 4) * Math.PI * 2
        const radius = 15
        const x = Math.cos(angle) * radius
        const z = Math.sin(angle) * radius
        const y = Math.sin(i * Math.PI) * 4

        return (
          <Float
            key={`crystal-${i}`}
            speed={0.8}
            rotationIntensity={0.5}
            floatIntensity={0.4}
          >
            <mesh position={[x, y, z]} rotation={[Math.PI / 4, angle, 0]}>
              <octahedronGeometry args={[0.8, 0]} />
              <meshStandardMaterial
                color="#ffffff"
                metalness={1}
                roughness={0}
                transparent
                opacity={0.7}
                emissive="#ffffff"
                emissiveIntensity={0.2}
              />
            </mesh>
          </Float>
        )
      })}
    </group>
  )
}