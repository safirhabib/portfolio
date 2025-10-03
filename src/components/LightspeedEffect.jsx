import {useRef} from 'react';
import { useFrame, useThree } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import * as THREE from "three";
import {useState} from 'react';

export function LightspeedEffect({ visible, progress }) {
    const starsRef = useRef();
    
    useFrame(() => {
      if (starsRef.current && visible) {
        // Animate stars stretching effect for lightspeed
        const speed = progress * 50;
        starsRef.current.rotation.z = progress * Math.PI * 2;
      }
    });
  
    if (!visible) return null;
  
    return (
      <group ref={starsRef}>
        {/* Create stretched star effect */}
        <points>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={100}
              array={new Float32Array(Array.from({ length: 300 }, () => (Math.random() - 0.5) * 100))}
              itemSize={3}
            />
          </bufferGeometry>
          <pointsMaterial size={2} color="white" />
        </points>
      </group>
    );
  }