'use client'
  
import { useRef, useMemo, type JSX } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface ParticleFieldProps {
  count: number
}

export function ParticleField({ count }: ParticleFieldProps): JSX.Element {
  const meshRef = useRef<THREE.Points>(null)
  
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const sizes = new Float32Array(count)

    for (let i = 0; i < count; i++) {
      // Position
      positions[i * 3] = (Math.random() - 0.5) * 50
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50

      // Color (gradient from cyan to purple)
      const colorMix = Math.random()
      colors[i * 3] = colorMix * 0.3 + 0.2 // R
      colors[i * 3 + 1] = colorMix * 0.8 + 0.2 // G
      colors[i * 3 + 2] = colorMix * 0.9 + 0.6 // B

      // Size
      sizes[i] = Math.random() * 2 + 0.5
    }

    return { positions, colors, sizes }
  }, [count])

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime()
      
      // Animate particles
      if (meshRef.current?.geometry?.attributes.position) {
        const positions = meshRef.current.geometry.attributes.position.array as Float32Array
        
        for (let i = 0; i < count; i++) {
          const i3 = i * 3
          
          // Floating motion
          const posY = positions[i3 + 1]!
          positions[i3 + 1] = posY + Math.sin(time * 0.5 + i * 0.1) * 0.01
          
          // Wrap around
          const currentPosY = positions[i3 + 1]!
          if (currentPosY > 25) positions[i3 + 1] = -25
          if (currentPosY < -25) positions[i3 + 1] = 25
      }
      
      meshRef.current.geometry.attributes.position.needsUpdate = true
      }
      
      // Rotate the entire particle field
      if (meshRef.current) {
        meshRef.current.rotation.y = time * 0.05
      }
    }
  })

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particles.positions, 3]}
          count={count}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[particles.colors, 3]}
          count={count}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          args={[particles.sizes, 1]}
          count={count}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        sizeAttenuation={true}
        vertexColors={true}
        transparent={true}
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}