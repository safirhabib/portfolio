import { useFrame } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import * as THREE from "three";

export function CameraRig() {
  const scroll = useScroll();

  // Start and end positions
  const startPos = new THREE.Vector3(0, 0, 2);
  const endPos = new THREE.Vector3(-0.3, -0.033, 0.7);

  useFrame((state) => {
    const offset = scroll.offset; // 0 → 1 across 3 pages
    const startPage = 2 / 4;
    const endPage = 1.0;

    let t = 0;
    if (offset <= startPage) {
      t = 0; // stay at start
    } else if (offset >= endPage) {
      t = 1; // fully at end
    } else {
      t = (offset - startPage) / (endPage - startPage);
    }

    // Interpolate position
    state.camera.position.lerpVectors(startPos, endPos, t);

    // Always look at the origin
    state.camera.lookAt(0, 0, 0);
    state.camera.updateProjectionMatrix();
  });

  return null;
}
