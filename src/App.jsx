import { Canvas } from "@react-three/fiber";
import { Stats, ScrollControls } from '@react-three/drei'
import { Background } from "./components/Background";
import { Model } from "./components/Models";
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { CameraRig } from "./CameraRig";
import { SCENE_STATES } from "./assets/sceneStates";
import { useState } from 'react';
import { StarWarsLogo } from './components/StarWarsLogo'
import { OpeningText } from './components/OpeningText'
import SceneController from './components/SceneController'
import Navbar from './components/Navbar'

export default function App() {
  const [sceneState, setSceneState] = useState(SCENE_STATES.STAR_WARS_LOGO)
  const [showNavbar, setShowNavbar] = useState(false)
  
  return (
    <>
      {/* Navbar - shows after solar system appears */}
      {showNavbar && <Navbar />}
      
      {/* Scrollable container - THIS IS CRITICAL */}
      <div style={{ height: '1200vh' }}>
        <Canvas 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh'
          }}
          gl={{ preserveDrawingBuffer: true }}
        >
          <color attach="background" args={["black"]} />
          
          <ScrollControls pages={12} damping={0.25}>
            {/* Scene Controller - watches scroll and updates state */}
            <SceneController 
              setSceneState={setSceneState} 
              setShowNavbar={setShowNavbar}
            />
            
            <CameraRig />
            <Background count={8000} radius={300} />
            
            {/* Conditional Scene Rendering */}
            {sceneState === SCENE_STATES.STAR_WARS_LOGO && (
              <StarWarsLogo visible={true} progress={0} />
            )}

            {sceneState === SCENE_STATES.OPENING_TEXT && (
              <OpeningText />
            )}

            {sceneState === SCENE_STATES.SOLAR_SYSTEM && (
              <Model />
            )}
            
            <Stats />
            
            <EffectComposer>
              <Bloom
                intensity={0.25} 
                luminanceThreshold={0.2} 
                luminanceSmoothing={0.9} 
                kernelSize={5}
              />
            </EffectComposer>  
          </ScrollControls>
        </Canvas>
      </div>
    </>
  );
}