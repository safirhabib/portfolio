export function Earth({nodes,materials,toStandard}){
    return(<mesh
          castShadow
          receiveShadow
          geometry={nodes.Earth_0.geometry}
          material={toStandard(materials.Vertexcolor)}
          position={[-12.06, 19.632, -0.008]}
          rotation={[Math.PI / 2, 0, 0]}
        />)
}