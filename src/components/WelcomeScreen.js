import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";

import { ReactComponent as WelcomeBG } from "../assets/welcomeBG.svg"
import { ReactComponent as LinkedIn } from '../assets/my_linked_in.svg'
import { ReactComponent as GitHub } from '../assets/my_github.svg'

import './WelcomeScreen.css';

function WelcomeScreen(props) {
  return (
    <div id="home" className="welcome">
      <div className="main-navigation__logo-section">
        <div className="main-navigation__logo">
          <a
            href="https://www.linkedin.com/in/kaja-szokalska-mas%C5%82yk-1a816b204"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedIn />
          </a>
        </div>
        <div className="main-navigation__logo">
          <a href="https://github.com/kajanna" target="_blank" rel="noreferrer">
            <GitHub />
          </a>
        </div>
      </div>
      <WelcomeBG />
    </div>
  );
}

export default WelcomeScreen;