import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, useScroll } from "@react-three/drei";
import * as THREE from "three";

export function OpeningText() {
  const scroll = useScroll();
  const groupRef = useRef();

  const crawlText = [
    "A long time ago in a portfolio far, far away...",
    "",
    "SAFIR HABIB",
    "Full-Stack Developer",
    "",
    "In an era of rapid technological advancement,",
    "a passionate developer emerged from the",
    "digital frontier, mastering the ancient arts",
    "of front-end and back-end development.",
    "",
    "Armed with React, Node.js, and the power",
    "of modern JavaScript, Safir has built",
    "applications that bridge the gap between",
    "user experience and robust architecture.",
    "",
    "From AI-powered productivity tools to",
    "blockchain marketplaces, from cloud",
    "infrastructure to lightning-fast APIs,",
    "each project represents a victory against",
    "complexity and a step toward innovation.",
    "",
    "Now, explore the digital galaxy where",
    "each planet holds the secrets of",
    "cutting-edge development and",
    "technological mastery..."
  ];

  useFrame(() => {
    if (!groupRef.current) return;

    const offset = scroll.offset;
    const page = offset * 12;

    // Map pages 3-6 to progress 0-1 with easing
    const rawProgress = (page - 3) / 3;
    const progress = THREE.MathUtils.clamp(rawProgress, 0, 1);
    
    // Smooth easing function (ease-in-out cubic)
    const easeInOutCubic = (t) => {
      return t < 0.5 
        ? 4 * t * t * t 
        : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };
    
    const easedProgress = easeInOutCubic(progress);

    // Smoother movement: crawl upward and backward with easing
    const startY = -2;
    const endY = 23;
    const startZ = -5;
    const endZ = -25;
    
    groupRef.current.position.y = THREE.MathUtils.lerp(startY, endY, easedProgress);
    groupRef.current.position.z = THREE.MathUtils.lerp(startZ, endZ, easedProgress);

    // Smoother rotation during crawl
    const startRotX = -0.3;
    const endRotX = -0.5;
    groupRef.current.rotation.x = THREE.MathUtils.lerp(startRotX, endRotX, easedProgress * 0.5);

    // Gradual fade out starting at 70% progress
    const fadeStart = 0.7;
    let opacity = 1;
    if (progress > fadeStart) {
      const fadeProgress = (progress - fadeStart) / (1 - fadeStart);
      // Smoother fade with easing
      opacity = Math.max(0, 1 - easeInOutCubic(fadeProgress));
    }

    // Apply opacity to all text materials
    groupRef.current.traverse((child) => {
      if (child.material) {
        child.material.transparent = true;
        child.material.opacity = opacity;
      }
    });
  });

  return (
    <group ref={groupRef} rotation={[-0.3, 0, 0]} position={[0, -2, -5]}>
      {crawlText.map((line, i) => (
        <Text
          key={i}
          position={[0, -i * 0.8, 0]}
          fontSize={line === "SAFIR HABIB" ? 1.2 : 0.6}
          anchorX="center"
          anchorY="middle"
          maxWidth={12}
          textAlign="center"
          color="#FFE81F"
        >
          {line}
          <meshBasicMaterial attach="material" transparent opacity={1} color="#FFE81F" />
        </Text>
      ))}
    </group>
  );
}