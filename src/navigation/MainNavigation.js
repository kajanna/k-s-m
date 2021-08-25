import React from 'react';

import { ReactComponent as LinkedIn } from '../assets/my_linked_in.svg'
import { ReactComponent as GitHub } from '../assets/my_github.svg'
import Line from '../shered/Line'

import  './MainNavigation.css';

function MainNavigation(props) {
  return (
    <div className="main-navigation">
      <div className="main-navigation__nav-bar">
        <div className="main-navigation__hamburger-menu">
          <div className="main-navigation__hamburger-menu--elements"></div>
          <div className="main-navigation__hamburger-menu--elements"></div>
          <div className="main-navigation__hamburger-menu--elements"></div>
        </div>
        <div className="main-navigation__logos">
          <div className="main-navigation__logos--logo">
            <LinkedIn />
          </div>
          <div className="main-navigation__logos--logo">
            <GitHub />
          </div>
        </div>
      </div>
      <Line />
    </div>
  );
}

export default MainNavigation;