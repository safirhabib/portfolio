export function Jupiter ({nodes,materials,toStandard}){
    return(<mesh
          castShadow
          receiveShadow
          geometry={nodes.Jupiter_0.geometry}
          material={toStandard(materials.Vertexcolor)}
          position={[-3.767, 10.669, 0.013]}
          rotation={[Math.PI / 2, 0, 0]}
        />)
}