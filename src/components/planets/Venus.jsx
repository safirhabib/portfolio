import { useState } from "react"


export function Venus({nodes, materials, toStandard}) {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
      <group 
          position={[-13.825, 22.128, -0.014]}
          rotation={[Math.PI / 2, 0, 0]}
          onPointerEnter={() => setIsHovered(true)}
          onPointerLeave={() => setIsHovered(false)}
      >
          <mesh
              castShadow
              receiveShadow
              geometry={nodes.venus_0.geometry}
              material={toStandard(materials.Vertexcolor)}
              scale={isHovered ? 1.15 : 1}
          />
          {/* Glow outline when hovered */}
          {isHovered && (
              <mesh
                  geometry={nodes.venus_0.geometry}
                  scale={1.25}
              >
                  <meshBasicMaterial
                      color="#00ff88"
                      transparent={true}
                      opacity={0.4}
                      side={2}
                  />
              </mesh>
          )}
      </group>
  )
}