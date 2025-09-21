import { useState } from "react"
export function Saturn({nodes, materials, toStandard, ...props}) {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
      <group 
          position={[3.024, -3.603, -0.02]} 
          rotation={[Math.PI / 2, 0, 0]}
          onPointerEnter={() => setIsHovered(true)}
          onPointerLeave={() => setIsHovered(false)}
      >
          <mesh
              castShadow
              receiveShadow
              geometry={nodes.Saturn_0.geometry}
              material={toStandard(materials.Saturn)}
              scale={isHovered ? 1.1 : 1}
          />
          <mesh
              castShadow
              receiveShadow
              geometry={nodes.Saturn_1.geometry}
              material={toStandard(materials['Rings.001'])}
              scale={isHovered ? 1.1 : 1}
          />
          {/* Glow outline when hovered */}
          {isHovered && (
              <>
                  <mesh
                      geometry={nodes.Saturn_0.geometry}
                      scale={1.15}
                  >
                      <meshBasicMaterial
                          color="#00ff88"
                          transparent={true}
                          opacity={0.3}
                          side={2}
                      />
                  </mesh>
                  <mesh
                      geometry={nodes.Saturn_1.geometry}
                      scale={1.15}
                  >
                      <meshBasicMaterial
                          color="#00ff88"
                          transparent={true}
                          opacity={0.3}
                          side={2}
                      />
                  </mesh>
              </>
          )}
      </group>
  )
}