import React from 'react'
import { useGLTF } from '@react-three/drei'
import { MeshStandardMaterial } from 'three'
import { Saturn } from './planets/Saturn'
import { Here0 } from './planets/Here0'
import { Jupiter } from './planets/Jupiter'
import { Uranus } from './planets/Uranus'
import { Neptune } from './planets/Neptune'
import { Earth } from './planets/Earth'
import { Mars } from './planets/Mars'
import { Venus } from './planets/Venus'
import { Mercury } from './planets/Mercury'
import { Pluto } from './planets/Pluto'
import { Marker } from './planets/Marker'
import { Sun } from './planets/Sun'
function handleMouseEnter(events){
    console.log(events);
}

export function Model(props) {
  const { nodes, materials } = useGLTF('/solar_system.glb')

  // Helper: clone old material into a lit MeshStandardMaterial
  const toStandard = (mat) => {
    if (!mat) return undefined
    return new MeshStandardMaterial({
      map: mat.map || null,
      color: mat.color || undefined,
      metalness: 0.1,
      roughness: 1,
    })
  }

  return (

    
    <group {...props} dispose={null}>
        
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.021}>

       <Saturn 
       nodes={nodes}
       materials={materials}
       toStandard={toStandard}
       
       
       />
        {/* Sun */}
        <Sun 
        nodes={nodes}
        materials={materials}
        toStandard={toStandard}
        />
        {/* Planets */}
        <Here0 
        nodes={nodes}
        materials={materials}
        toStandard={toStandard}
        />
        <Jupiter 
        nodes={nodes}
        materials={materials}
        toStandard={toStandard}
        />
        <Uranus 
        nodes={nodes}
        materials={materials}
        toStandard={toStandard}

        />
        <Neptune 
        nodes={nodes}
        materials={materials}
        toStandard={toStandard}
        />
        <Earth 
        nodes={nodes}
        materials={materials}
        toStandard={toStandard}
        />
        <Mars 
        nodes={nodes}
        materials={materials}
        toStandard={toStandard}
        />
        <Venus 
        nodes={nodes}
        materials={materials}
        toStandard={toStandard}
        />
        <Mercury 
        nodes={nodes}
        materials={materials}
        toStandard={toStandard}
        />
        <Pluto 
        nodes={nodes}
        materials={materials}
        toStandard={toStandard}
        />
        <Marker 
        nodes={nodes}
        materials={materials}
        toStandard={toStandard}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/solar_system.glb')
