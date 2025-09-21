import { useState } from "react"


export function Mars({nodes, materials, toStandard}) {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
      <group 
          position={[-10.37, 16.916, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          onPointerEnter={() => setIsHovered(true)}
          onPointerLeave={() => setIsHovered(false)}
      >
          <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mars_0.geometry}
              material={toStandard(materials.Vertexcolor)}
              scale={isHovered ? 1.15 : 1}
          />
          {/* Glow outline when hovered */}
          {isHovered && (
              <mesh
                  geometry={nodes.Mars_0.geometry}
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
