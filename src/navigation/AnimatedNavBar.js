import React, { useState } from 'react';

import './AnimatedNavBar.css'

function AnimatedNavBar(props) {
  const [ showNavBar, setShowNavBar ] = useState(false);
    const changeBackground = () => {
      if (window.scrollY >= 80) {
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