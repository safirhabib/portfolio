import { useState } from "react"


export function Neptune({nodes, materials, toStandard}) {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
      <group 
          position={[10.616, -15.384, -0.023]}
          rotation={[Math.PI / 2, -0.133, 0]}
          onPointerEnter={() => setIsHovered(true)}
          onPointerLeave={() => setIsHovered(false)}
      >
          <mesh
              castShadow
              receiveShadow
              geometry={nodes.Neptune_0.geometry}
              material={toStandard(materials.Vertexcolor)}
              scale={isHovered ? 1.1 : 1}
          />
          {/* Glow outline when hovered */}
          {isHovered && (
              <mesh
                  geometry={nodes.Neptune_0.geometry}
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