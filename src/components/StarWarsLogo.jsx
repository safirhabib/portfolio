import { useFrame, useThree } from "@react-three/fiber";
import { useScroll, Text3D } from "@react-three/drei";
import { useState, useRef } from "react";
import * as THREE from "three";
export function StarWarsLogo({ visible, progress }) {
    const logoRef = useRef();
    
    useFrame(() => {
      if (logoRef.current && visible) {
        // Logo animation: starts large, shrinks and fades
        // Progress goes from 0 to 1 during this phase
        const scale = Math.max(0.1, 3 - progress * 2.8); // 3 → 0.2
        const opacity = Math.max(0, 1 - progress * 0.8); // 1 → 0.2 then fade out
        
        logoRef.current.scale.setScalar(scale);
        // Note: Text3D doesn't have opacity, we'd need to use material.opacity
        if (logoRef.current.material) {
          logoRef.current.material.opacity = opacity;
          logoRef.current.material.transparent = true;
        }
      }
    });
  
    return (
      <group visible={visible} ref={logoRef}>
        {/* Positioned at Z=-20 so solar system at origin isn't visible */}
        <Text3D
          position={[-5, 0, -20]}
          fontSize={4}
          color="#FFE81F"
          anchorX="center"
          anchorY="middle"
          font="/fonts/STARWARS.json" // Update with your font path
          letterSpacing={0.2}
        >
        Safir Habib
        </Text3D>
      </group>
    );
  }