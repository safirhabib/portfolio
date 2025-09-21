export function Mars({nodes,materials,toStandard}){
    return(<mesh
          castShadow
          receiveShadow
          geometry={nodes.Mars_0.geometry}
          material={toStandard(materials.Vertexcolor)}
          position={[-10.37, 16.916, 0]}
          rotation={[Math.PI / 2, 0, 0]}
        />)
}