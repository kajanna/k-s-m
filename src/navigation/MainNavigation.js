import React, { useState } from 'react';

import { ReactComponent as LinkedIn } from '../assets/my_linked_in.svg'
import { ReactComponent as GitHub } from '../assets/my_github.svg'
import Drawer from './Drawer'
import Menu from './Menu';
import OnHoverScale from '../shered/OnHoverScale';
import AnimatedNavBar from '../navigation/AnimatedNavBar' 

import  './MainNavigation.css';

function MainNavigation(props) {

  const [ showDrawer, setShowDrawer ] = useState(false);
  const openDrawer = () => setShowDrawer(true);
  const closeDrawer = () => setShowDrawer(false);
   
  return (
    <>
      {showDrawer && <Drawer onClose={closeDrawer} />}
      <div className="main-navigation">
        <AnimatedNavBar />
        <div className="main-navigation__nav-bar">
          <div className="main-navigation__hamburger-menu" onClick={openDrawer}>
            <OnHoverScale>
              <div className="main-navigation__hamburger-menu--elements"></div>
              <div className="main-navigation__hamburger-menu--elements"></div>
              <div className="main-navigation__hamburger-menu--elements"></div>
            </OnHoverScale>
          </div>
          <div className="main-navigation__items">
            <div className="main-navigation__menu-item">
              <Menu />
            </div>
            <div className="main-navigation--logo">
              <OnHoverScale>
                <LinkedIn />
              </OnHoverScale>
            </div>
            <div className="main-navigation--logo">
              <OnHoverScale>
                <GitHub />
              </OnHoverScale>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainNavigation;