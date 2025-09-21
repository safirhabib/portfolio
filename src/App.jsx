import { Canvas } from "@react-three/fiber";
import { Stats, OrbitControls } from '@react-three/drei'
import { Background } from "./components/Background";
import { Model } from "./components/Models";
import { EffectComposer, Bloom } from '@react-three/postprocessing'





export default function App() {
return (
    <Canvas 
    camera={{position:[0,0,5],fov:75}}
    style={{display:"flex",width:'100vh',height:'100vh'}}
    gl={{ preserveDrawingBuffer: true }}
    >

      <color attach="background" args={["black"]} />
      

      
    <EffectComposer>
    <Bloom
      intensity={0.25} 
      luminanceThreshold={0.2} 
      luminanceSmoothing={0.9} 
      kernelSize={5}
    />
     </EffectComposer>   


      <Background count={8000} radius={300} />
      <Model />
      <OrbitControls />
      <Stats />
    </Canvas>
);
}