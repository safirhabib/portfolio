export function Uranus({nodes,materials,toStandard}){
    return(<mesh
          castShadow
          receiveShadow
          geometry={nodes.Uranus_0.geometry}
          material={toStandard(materials.Vertexcolor)}
          position={[7.856, -10.742, 0.002]}
          rotation={[Math.PI / 2, -0.001, 0]}
        />)
}