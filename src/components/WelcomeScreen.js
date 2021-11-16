import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";

import { ReactComponent as MyIcon } from "../assets/welcomeBG.svg"

import './WelcomeScreen.css';

function WelcomeScreen(props) {


  
    return (
      <div id="home" className="welcome">
     <MyIcon/>
      </div>
    );
}

export default WelcomeScreen;