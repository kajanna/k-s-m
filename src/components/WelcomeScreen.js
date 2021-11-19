import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";

import { ReactComponent as WelcomeBG } from "../assets/welcomeBG.svg"

import './WelcomeScreen.css';

function WelcomeScreen(props) {


  
    return (
      <div id="home" className="welcome">
     <WelcomeBG />
      </div>
    );
}

export default WelcomeScreen;