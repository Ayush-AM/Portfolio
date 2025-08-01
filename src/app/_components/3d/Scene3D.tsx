'use client'

import { useRef, useMemo, type JSX } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei'
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib'
import * as THREE from 'three'

interface Scene3DProps {
  scrollProgress: number
  currentSection: number
}

export function Scene3D({ scrollProgress, currentSection }: Scene3DProps): JSX.Element {
  const { camera } = useThree()
  const controlsRef = useRef<OrbitControlsImpl>(null)
  const groupRef = useRef<THREE.Group>(null)

  const lightIntensity = useMemo(() => {
    return 0.5 + scrollProgress * 0.5
  }, [scrollProgress])

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.1
    }

    const targetPosition = new THREE.Vector3()
    const targetLookAt = new THREE.Vector3()

    switch (currentSection) {
      case 0:
        targetPosition.set(0, 0, 10)
        targetLookAt.set(0, 0, 0)
        break
      case 1:
        targetPosition.set(5, 2, 8)
        targetLookAt.set(0, 0, 0)
        break
      case 2:
        targetPosition.set(-3, 1, 12)
        targetLookAt.set(0, 0, 0)
        break
      case 3:
        targetPosition.set(2, -1, 9)
        targetLookAt.set(0, 0, 0)
        break
      case 4:
        targetPosition.set(0, 3, 15)
        targetLookAt.set(0, 0, 0)
        break
      default:
        targetPosition.set(0, 0, 10)
        targetLookAt.set(0, 0, 0)
    }

    camera.position.lerp(targetPosition, delta * 0.5)

    if (controlsRef.current) {
      controlsRef.current.target.lerp(targetLookAt, delta * 0.5)
      controlsRef.current.update()
    }
  })

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={75} />

      <OrbitControls
        ref={controlsRef}
        enablePan={false}
        enableZoom={true}
        enableRotate={true}
        minDistance={5}
        maxDistance={20}
        autoRotate={false}
        autoRotateSpeed={0.5}
      />

      <ambientLight intensity={lightIntensity * 0.4} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={lightIntensity}
        castShadow
        shadow-mapSize={[2048, 2048]}
      />
      <pointLight position={[-10, -10, -5]} intensity={lightIntensity * 0.3} color="#ff6b6b" />
      <pointLight position={[10, -10, -5]} intensity={lightIntensity * 0.3} color="#4ecdc4" />

      <Environment preset="night" />

      <group ref={groupRef}>
        <mesh position={[0, 0, 0]} rotation={[0, 0, 0]}>
          <icosahedronGeometry args={[2, 1]} />
          <meshStandardMaterial
            color="#4ecdc4"
            metalness={0.8}
            roughness={0.2}
            emissive="#4ecdc4"
            emissiveIntensity={0.1}
          />
        </mesh>

        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i / 8) * Math.PI * 2
          const radius = 4 + Math.sin(scrollProgress * Math.PI * 2) * 0.5
          const x = Math.cos(angle) * radius
          const z = Math.sin(angle) * radius
          const y = Math.sin(angle * 2 + scrollProgress * Math.PI * 4) * 1

          return (
            <mesh key={i} position={[x, y, z]}>
              <boxGeometry args={[0.3, 0.3, 0.3]} />
              <meshStandardMaterial
                color={i % 2 === 0 ? "#ff6b6b" : "#4ecdc4"}
                metalness={0.6}
                roughness={0.4}
                emissive={i % 2 === 0 ? "#ff6b6b" : "#4ecdc4"}
                emissiveIntensity={0.2}
              />
            </mesh>
          )
        })}

        {Array.from({ length: 3 }).map((_, i) => (
          <mesh
            key={`ring-${i}`}
            position={[0, 0, 0]}
            rotation={[Math.PI / 4, i * Math.PI / 3, 0]}
          >
            <torusGeometry args={[3 + i * 0.5, 0.1, 8, 32]} />
            <meshStandardMaterial
              color="#ffffff"
              metalness={1}
              roughness={0}
              transparent
              opacity={0.3}
              emissive="#ffffff"
              emissiveIntensity={0.1}
            />
          </mesh>
        ))}
      </group>
    </>
  )
}