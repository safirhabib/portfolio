import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { SCENE_STATES } from "../assets/sceneStates";

export default function SceneController({ setSceneState, setShowNavbar }) {
  const scroll = useScroll();

  useFrame(() => {
    const offset = scroll.offset; // 0 → 1 as we scroll through 12 pages

    // Show logo from page 0 to 3
    if (offset < 3 / 12) {
      setSceneState(SCENE_STATES.STAR_WARS_LOGO);
      setShowNavbar(false);
    }
    // Opening text from page 3 to 6
    else if (offset >= 3 / 12 && offset < 9 / 12) {
      setSceneState(SCENE_STATES.OPENING_TEXT);
      setShowNavbar(false);
    }
    // Solar system after page 6
    else if (offset >= 9 / 12) {
      setSceneState(SCENE_STATES.SOLAR_SYSTEM);
      setShowNavbar(true); // Show navbar when solar system appears
    }
  });

  return null;
}