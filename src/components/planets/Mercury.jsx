export function Mercury ({nodes,materials,toStandard}){
    return(<mesh
          castShadow
          receiveShadow
          geometry={nodes.Mercury_0.geometry}
          material={toStandard(materials.Vertexcolor)}
          position={[-15.42, 24.797, -0.001]}
          rotation={[Math.PI / 2, 0, 0]}
        />)
}