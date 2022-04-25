import React, { useState } from "react";

import "./AnimatedNavBar.css";

const AnimatedNavBar = () => {
  const [showNavBar, setShowNavBar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 72) {
      setShowNavBar(true);
    } else {
      setShowNavBar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <div
      className={
        showNavBar
          ? "animated-nav-bar"
          : "animated-nav-bar animated-nav-bar--hidden"
      }
    ></div>
  );
};

export default AnimatedNavBar;
