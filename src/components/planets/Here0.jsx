export function Here0({nodes,materials,toStandard}){
    return(<mesh
          castShadow
          receiveShadow
          geometry={nodes.Here_0.geometry}
          material={toStandard(materials.Material)}
          position={[-12.84, 19.658, -1.208]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.625}
        />)
}