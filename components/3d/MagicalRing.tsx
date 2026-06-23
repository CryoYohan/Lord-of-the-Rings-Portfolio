'use client'

import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Sparkles, Float } from '@react-three/drei'
import * as THREE from 'three'

export default function MagicalRing() {
  const ringRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)

  // This hook animates the ring, making it rotate continuously
  useFrame((state, delta) => {
    if (ringRef.current) {
      ringRef.current.rotation.y += delta * 0.5
      ringRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
    }
  })

  return (
    <group>
      {/* The Float component makes the ring bob up and down naturally */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={2}>
        <mesh 
          ref={ringRef} 
          onPointerOver={() => setHovered(true)} 
          onPointerOut={() => setHovered(false)}
        >
          {/* The physical shape of the ring */}
          <torusGeometry args={[1.5, 0.2, 16, 100]} />
          {/* The glowing golden material */}
          <meshStandardMaterial 
            color={hovered ? "#FBBF24" : "#D97706"} 
            emissive="#FBBF24"
            emissiveIntensity={hovered ? 2 : 0.8}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
      </Float>
      
      {/* Fireflies / Particles surrounding the ring */}
      <Sparkles 
        count={hovered ? 200 : 80} 
        scale={10} 
        size={hovered ? 6 : 3} 
        speed={0.4} 
        color="#FBBF24" 
      />
    </group>
  )
}