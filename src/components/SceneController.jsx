import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { SCENE_STATES } from "../assets/sceneStates";
import { useEffect } from "react";

export default function SceneController({ setSceneState, setShowNavbar, setScrollToPage }) {
  const scroll = useScroll();

  useEffect(() => {
    // Expose scrollToPage function upwards for Navbar to use
    if (setScrollToPage) {
      setScrollToPage(() => (pageNumber) => {
        const pageHeight = scroll.el.scrollHeight / 12;
        scroll.el.scrollTo({
          top: pageNumber * pageHeight,
          behavior: "smooth",
        });
      });
    }
  }, [scroll, setScrollToPage]);

  useFrame(() => {
    const offset = scroll.offset; // 0 → 1 through 12 pages

    if (offset < 3 / 12) {
      setSceneState(SCENE_STATES.STAR_WARS_LOGO);
    } else if (offset >= 3 / 12 && offset < 9 / 12) {
      setSceneState(SCENE_STATES.OPENING_TEXT);
    } else if (offset >= 9 / 12) {
      setSceneState(SCENE_STATES.SOLAR_SYSTEM);
    }

    setShowNavbar(true);
  });

  return null;
}
