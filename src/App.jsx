import { Canvas } from "@react-three/fiber";
import { Stats, OrbitControls, ScrollControls } from '@react-three/drei'
import { Background } from "./components/Background";
import { Model } from "./components/Models";
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { CameraRig } from "./CameraRig";






export default function App() {
return (
    <Canvas 
    
    style={{display:"flex",width:'100vh',height:'100vh'}}
    gl={{ preserveDrawingBuffer: true }}
    >

      <color attach="background" args={["black"]} />
      <ScrollControls pages={3} damping={0.25}>
      <CameraRig />
      

      
    <EffectComposer>
    <Bloom
      intensity={0.25} 
      luminanceThreshold={0.2} 
      luminanceSmoothing={0.9} 
      kernelSize={5}
    />
      


      <Background count={8000} radius={300} />
      <Model />
      
      <Stats />
      </EffectComposer>  
      </ScrollControls>
    </Canvas>
);
}