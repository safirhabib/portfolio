export function Sun({nodes,materials,toStandard}){
    return(<mesh
          castShadow
          receiveShadow
          geometry={nodes.Sun_0.geometry}
          position={[31.54, 74.062, 0.123]}
          rotation={[Math.PI / 2, -0.113, 0]}
        >
          <meshStandardMaterial
            emissive={"#ff944d"}
            emissiveIntensity={2}
            color={"#ffffff"}
          />
          <pointLight
            color={"#ff944d"}
            intensity={4}
            distance={500}
            decay={2}
            castShadow
          />
        </mesh>)
}