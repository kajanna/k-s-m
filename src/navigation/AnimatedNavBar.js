import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap'

import './AnimatedNavBar.css'

function AnimatedNavBar(props) {

  const navBarRef = useRef();
  
  useEffect(() => {
    const showNavBar = () => gsap.to( 
      navBarRef.current, 
      {
        duration: 0.5,
        y: 0,
        boxShadow: 'var(--shadow)',
        ease: "slow",
      }
      );
      const hideNavBar = () => gsap.to(navBarRef.current, {
        duration: 0.5,
        y: "-100%",
        boxShadow: 'none',
        ease: "slow",
      });
    const changeBackground = () => {
      if (window.scrollY >= 80) {
        showNavBar();
      } else {
        hideNavBar();
      }
      };

  window.addEventListener('scroll', changeBackground);
  return () => {
    showNavBar.kill();
    hideNavBar.kill();
    window.removeEventListener('scroll', changeBackground);
  }
  },[])
     
    
    return (
      <div className="animated-nav-bar" ref={navBarRef}>
        <div className="animated-nav-bar__blob" ></div>
      </div>
    );
}

export default AnimatedNavBar;