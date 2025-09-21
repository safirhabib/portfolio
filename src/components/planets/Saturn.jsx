{/* Saturn */}
export function Saturn({nodes,materials,toStandard,...props}){
    return(<group position={[3.024, -3.603, -0.02]} rotation={[Math.PI / 2, 0, 0]}>
<mesh
  castShadow
  receiveShadow
  geometry={nodes.Saturn_0.geometry}
  material={toStandard(materials.Saturn)}
/>
<mesh
  castShadow
  receiveShadow
  geometry={nodes.Saturn_1.geometry}
  material={toStandard(materials['Rings.001'])}
/>
</group>)}