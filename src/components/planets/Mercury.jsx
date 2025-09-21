import { useState } from "react"


export function Mercury({nodes, materials, toStandard}) {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
      <group 
          position={[-15.42, 24.797, -0.001]}
          rotation={[Math.PI / 2, 0, 0]}
          onPointerEnter={() => setIsHovered(true)}
          onPointerLeave={() => setIsHovered(false)}
      >
          <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mercury_0.geometry}
              material={toStandard(materials.Vertexcolor)}
              scale={isHovered ? 1.2 : 1}
          />
          {/* Glow outline when hovered */}
          {isHovered && (
              <mesh
                  geometry={nodes.Mercury_0.geometry}
                  scale={1.3}
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