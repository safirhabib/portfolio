import { useState } from 'react';
import Navbar from './components/Navbar';
import SceneController from './components/SceneController';
import { SCENE_STATES } from './assets/sceneStates';
import { Canvas } from "@react-three/fiber";
import { ScrollControls } from '@react-three/drei';
import { Background } from "./components/Background";
import { Model } from "./components/Models";
import { StarWarsLogo } from './components/StarWarsLogo'
import { OpeningText } from './components/OpeningText'
import { CameraRig } from "./CameraRig";
import { EffectComposer, Bloom } from '@react-three/postprocessing'

export default function App() {
  const [sceneState, setSceneState] = useState(SCENE_STATES.STAR_WARS_LOGO);
  const [showNavbar, setShowNavbar] = useState(true);
  const [scrollToPage, setScrollToPage] = useState(null);

  return (
    <>
      <Navbar
        sceneState={sceneState}
        showNavbar={showNavbar}
        scrollToPage={scrollToPage}
      />

      <div style={{ height: '1200vh' }}>
        <Canvas
          style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh' }}
          gl={{ preserveDrawingBuffer: true }}
        >
          <color attach="background" args={["black"]} />
          <ScrollControls pages={12} damping={0.25}>
            <SceneController 
              setSceneState={setSceneState}
              setShowNavbar={setShowNavbar}
              setScrollToPage={setScrollToPage}
            />

            <CameraRig />
            <Background count={8000} radius={300} />

            {sceneState === SCENE_STATES.STAR_WARS_LOGO && <StarWarsLogo />}
            {sceneState === SCENE_STATES.OPENING_TEXT && <OpeningText />}
            {sceneState === SCENE_STATES.SOLAR_SYSTEM && <Model />}

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
