import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";

import './WelcomeScreen.css';

function WelcomeScreen(props) {
  const openingTl = useRef();
  const welcomeText = useRef();
  const welcomeBlob = useRef();
  const welcomeBg = useRef();

  useEffect(() => {
    openingTl.current = gsap.timeline()
      .from( welcomeBg.current, {
        duration: 1.5,
        y: '-100%'
      })
      .from('.welcome__text', {
        duration: 0.8,
        marginLeft: '140%',
        ease: "slow"
      })
      .from('.welcome__blob', {
        duration: 0.5,
        scaleX: 0,
        scaleY: 0
      })
    
    }, [])

    return (
      <div id="home" className="welcome">
        <div className="welcome__shapes"></div>
        <div className="welcome__background" ref={welcomeBg}></div>
        <div className="welcome__main">
          <div className="welcome__blob"ref={welcomeBlob}></div>
        </div>
        <div className="welcome__text" ref={welcomeText}>
          <p>
            junior<br></br>react<br></br>developer
          </p>
        </div>
      </div>
    );
}

export default WelcomeScreen;