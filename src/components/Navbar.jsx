import React, { useEffect, useRef } from "react";
import "./Navbar.css";
import { SCENE_STATES } from "../assets/sceneStates";

export default function Navbar({ sceneState, showNavbar, scrollToPage }) {
  const navRef = useRef(null);
  const spotlightRef = useRef(null);

  const icons = [
    { id: SCENE_STATES.STAR_WARS_LOGO, emoji: "🌌", label: "Intro", page: 0 },
    { id: SCENE_STATES.OPENING_TEXT, emoji: "📜", label: "Text", page: 3 },
    { id: SCENE_STATES.SOLAR_SYSTEM, emoji: "🪐", label: "Solar", page: 12 },
  ];

  useEffect(() => {
    const nav = navRef.current;
    const spotlight = spotlightRef.current;
    if (!nav || !spotlight) return;

    const activeIndex = icons.findIndex(icon => icon.id === sceneState);
    const items = nav.querySelectorAll('.dock-item');
    const activeItem = items[activeIndex];

    if (activeItem) {
      const { offsetLeft, offsetWidth } = activeItem;
      spotlight.style.left = `${offsetLeft + offsetWidth / 2}px`;
      spotlight.style.opacity = 1;
    }
  }, [sceneState]);

  const handleIconClick = (icon) => {
    if (scrollToPage) {
      scrollToPage(icon.page);
    }
  };

  if (!showNavbar) return null;

  return (
    <div className="navbar-container top">
      <div className="dock" ref={navRef}>
        <div className="spotlight" ref={spotlightRef}></div>
        {icons.map(icon => (
          <div
            key={icon.id}
            className={`dock-item ${sceneState === icon.id ? "active" : ""}`}
            onClick={() => handleIconClick(icon)}
          >
            <span className="icon">{icon.emoji}</span>
            <span className="tooltip">{icon.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
