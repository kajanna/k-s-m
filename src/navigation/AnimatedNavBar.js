import { _colorStringFilter } from 'gsap/gsap-core';
import React, { useState } from 'react';

import './AnimatedNavBar.css'

function AnimatedNavBar(props) {
  
  const [ showNavBar, setShowNavBar ] = useState(false);
    
  const changeBackground = () => {
      if (window.scrollY >= 72) {
        console.log(window.scrollY)
        setShowNavBar(true);
      } else {
        setShowNavBar(false);
      }
      };

  window.addEventListener('scroll', changeBackground);
  
    return (
      <div className={showNavBar ? "animated-nav-bar" : "animated-nav-bar animated-nav-bar--hidden"} >
      </div>
    );
}

export default AnimatedNavBar;