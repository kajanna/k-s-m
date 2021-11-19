import React from 'react';


import { ReactComponent as WelcomeBG } from "../assets/welcomeBG.svg"
import NavIcons from '../navigation/NavIcons'

import './WelcomeScreen.css';

function WelcomeScreen(props) {
  return (
    <div id="home" className="welcome">
      <div className="welcome__nav-icons">
        <NavIcons />
      </div>
      <WelcomeBG />
    </div>
  );
}

export default WelcomeScreen;