import { useState } from "react"

export function Uranus({nodes, materials, toStandard}) {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
      <group 
          position={[7.856, -10.742, 0.002]}
          rotation={[Math.PI / 2, -0.001, 0]}
          onPointerEnter={() => setIsHovered(true)}
          onPointerLeave={() => setIsHovered(false)}
      >
          <mesh
              castShadow
              receiveShadow
              geometry={nodes.Uranus_0.geometry}
              material={toStandard(materials.Vertexcolor)}
              scale={isHovered ? 1.1 : 1}
          />
          {/* Glow outline when hovered */}
          {isHovered && (
              <mesh
                  geometry={nodes.Uranus_0.geometry}
                  scale={1.2}
              >
                  <meshBasicMaterial
                      color="#00ff88"
                      transparent={true}
                      opacity={0.3}
                      side={2}
                  />
              </mesh>
          )}
      </group>
  )
}
