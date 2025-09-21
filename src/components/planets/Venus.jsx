export function Venus ({nodes,materials,toStandard}){
    return(<mesh
          castShadow
          receiveShadow
          geometry={nodes.venus_0.geometry}
          material={toStandard(materials.Vertexcolor)}
          position={[-13.825, 22.128, -0.014]}
          rotation={[Math.PI / 2, 0, 0]}
        />)
}