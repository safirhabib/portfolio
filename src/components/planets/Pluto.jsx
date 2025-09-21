export function Pluto({nodes,materials,toStandard}){
    return(<mesh
          castShadow
          receiveShadow
          geometry={nodes.Pluto_0.geometry}
          material={toStandard(materials.Vertexcolor)}
          position={[12.62, -18.399, 0.081]}
          rotation={[Math.PI / 2, 0, 0]}
        />)
}