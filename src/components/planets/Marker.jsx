export function Marker({nodes,materials,toStandard}){
    return(<mesh
          castShadow
          receiveShadow
          geometry={nodes.Marker_0.geometry}
          material={toStandard(materials.Vertexcolor)}
          position={[-12.095, 19.622, -0.003]}
          rotation={[Math.PI / 2, 0, 0]}
        />)
}