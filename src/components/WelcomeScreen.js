import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import './WelcomeScreen.css';

function WelcomeScreen(props) {
  const openingTl = useRef();
  useEffect(() => {
    openingTl.current = gsap.timeline({})
/*       .from('.welcome__background', {
        duration: 1,
        marginLeft: '100%',
        width: "0%",
        ease: "slow"
      }) */
      .from('.welcome__text', {
        duration: 1,
        marginLeft: '140%',
        ease: "slow"
      })
      .from('.welcome__blob', {
        duration: 1,
        scaleX: 0,
        scaleY: 0
      })
    
    }, [])

    return (
      <div className="welcome">
        <div className="welcome__shapes"></div>
        <div className="welcome__background"></div>
        <div className="welcome__main">
          <div className="welcome__blob"></div>
        </div>
        <div className="welcome_blob2"></div>
        <div className="welcome__text">
          <p>
            junior<br></br>react<br></br>developer
          </p>
        </div>
      </div>
    );
}

export default WelcomeScreen;