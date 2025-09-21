export function Neptune({nodes,materials,toStandard}){
    return(<mesh
          castShadow
          receiveShadow
          geometry={nodes.Neptune_0.geometry}
          material={toStandard(materials.Vertexcolor)}
          position={[10.616, -15.384, -0.023]}
          rotation={[Math.PI / 2, -0.133, 0]}
        />)
}