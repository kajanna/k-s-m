import React from 'react';


import { ReactComponent as WelcomeBG } from "../assets/welcomeBGgreen.svg";
import NavIcons from '../navigation/NavIcons'

import './WelcomeScreen.css';

function WelcomeScreen(props) {
  return (
    <div id="home" className="welcome">
      <div className="welcome__nav-icons">
        <NavIcons />
      </div>
      <div className="welcome__text">
          <h2>I'm Kaja.</h2>
          <p>
            Junior React Developer
          </p>
        </div>
      <div className="welcome__illustrations">
        <WelcomeBG />
      </div>
    </div>
  );
}

export default WelcomeScreen;