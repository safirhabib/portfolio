import * as THREE from "three"
import { useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import React from "react"

export function Background({ count = 5000, radius = 1000 }) {
  // Generate random star positions only once (useMemo)
  const stars = useMemo(() => {
    const positions = []
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * 2 * Math.PI
      const phi = Math.acos(2 * Math.random() - 1)

      const x = radius * Math.sin(phi) * Math.cos(theta)
      const y = radius * Math.sin(phi) * Math.sin(theta)
      const z = radius * Math.cos(phi)

      positions.push(x, y, z)
    }
    return new Float32Array(positions)
  }, [count, radius])

  // Optional rotation for subtle star movement
  const sphereRef = React.useRef()
  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += 0.0005
    }
  })

  return (
    <points ref={sphereRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={stars}
          count={stars.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="white"
        size={0.5}
        sizeAttenuation={true}
        transparent={true}
        opacity={0.9}
      />
    </points>
  )
}
