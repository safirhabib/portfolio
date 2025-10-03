import React, { useState, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { MeshStandardMaterial } from 'three';
import { planetLinks } from '../assets/planetLinks';

import { Saturn } from './planets/Saturn';
import { Here0 } from './planets/Here0';
import { Jupiter } from './planets/Jupiter';
import { Uranus } from './planets/Uranus';
import { Neptune } from './planets/Neptune';
import { Earth } from './planets/Earth';
import { Mars } from './planets/Mars';
import { Venus } from './planets/Venus';
import { Mercury } from './planets/Mercury';
import { Pluto } from './planets/Pluto';
import { Marker } from './planets/Marker';
import { Sun } from './planets/Sun';

export function Model(props) {
  const { nodes, materials } = useGLTF('/solar_system.glb');
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const planetRefs = useRef({});

  // Helper: Convert to lit material
  const toStandard = (mat) => {
    if (!mat) return undefined;
    return new MeshStandardMaterial({
      map: mat.map || null,
      color: mat.color || undefined,
      metalness: 0.1,
      roughness: 1,
    });
  };

  // ✅ Handles planet click
  const handlePlanetClick = (planetName) => {
    if (planetLinks[planetName]) {
      window.open(planetLinks[planetName], '_blank');
      setSelectedPlanet(planetName);
    }
  };

  // ✅ Handles overlapping hover → pick random
  const handlePointerOver = (e, planetName) => {
    e.stopPropagation();

    // If multiple intersections (overlap), pick a random one
    if (e.intersections.length > 1) {
      const randomHit = e.intersections[Math.floor(Math.random() * e.intersections.length)];
      const objName = randomHit.object.name;
      const matchedPlanet = Object.keys(planetRefs.current).find(p =>
        planetRefs.current[p].current && planetRefs.current[p].current.name === objName
      );
      if (matchedPlanet) {
        setSelectedPlanet(matchedPlanet);
      }
    } else {
      setSelectedPlanet(planetName);
    }
  };

  const planetGroups = [
    { name: 'Mercury', Component: Mercury },
    { name: 'Venus', Component: Venus },
    { name: 'Earth', Component: Earth },
    { name: 'Mars', Component: Mars },
    { name: 'Jupiter', Component: Jupiter },
    { name: 'Saturn', Component: Saturn },
    { name: 'Uranus', Component: Uranus },
    { name: 'Neptune', Component: Neptune },
    { name: 'Pluto', Component: Pluto },
  ];

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.021} visible={true}>
        
        {/* 🌞 Sun - not clickable */}
        <Sun nodes={nodes} materials={materials} toStandard={toStandard} />

        {/* 🪐 Planets */}
        {planetGroups.map(({ name, Component }) => {
          const ref = planetRefs.current[name] || React.createRef();
          planetRefs.current[name] = ref;

          return (
            <group
              key={name}
              ref={ref}
              onClick={() => handlePlanetClick(name)}
              onPointerOver={(e) => handlePointerOver(e, name)}
              onPointerMissed={() => setSelectedPlanet(null)}
            >
              <Component
                nodes={nodes}
                materials={materials}
                toStandard={toStandard}
              />
            </group>
          );
        })}

        {/* 🛰️ Marker + Here0 */}
        <Here0 nodes={nodes} materials={materials} toStandard={toStandard} />
        <Marker nodes={nodes} materials={materials} toStandard={toStandard} />
      </group>
    </group>
  );
}

useGLTF.preload('/solar_system.glb');
