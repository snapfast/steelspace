'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Sphere } from '@react-three/drei'
import * as THREE from 'three'

function Stars(props: any) {
  const ref = useRef<THREE.Points>(null!)
  const [sphere] = useMemo(() => {
    const sphere = new Float32Array(5000 * 3)
    for (let i = 0; i < 5000; i++) {
      const radius = Math.random() * 25 + 5
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)
      
      sphere[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      sphere[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      sphere[i * 3 + 2] = radius * Math.cos(phi)
    }
    return [sphere]
  }, [])

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10
      ref.current.rotation.y -= delta / 15
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

export default function StarField() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars />
      </Canvas>
    </div>
  )
}