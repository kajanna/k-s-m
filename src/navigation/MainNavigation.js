import React, { useEffect, useState, useRef } from 'react';
import { gsap }from 'gsap';

import Drawer from './Drawer'
import Menu from './Menu';
import NavIcons from './NavIcons'
import AnimatedNavBar from '../navigation/AnimatedNavBar' 

import  './MainNavigation.css';

function MainNavigation(props) {

  const [ showDrawer, setShowDrawer ] = useState(false);
  const navBarMenuRef = useRef();

  const openDrawer = () => setShowDrawer(true);
  const closeDrawer = () => setShowDrawer(false);

  return (
    <>
      {showDrawer && <Drawer onClose={closeDrawer} />}
      <div className="main-navigation">
        <AnimatedNavBar />
        <div className="main-navigation__nav-bar" ref={navBarMenuRef}>
          <div className="main-navigation__hamburger-menu" onClick={openDrawer}>
              <div className="main-navigation__hamburger-menu--elements"></div>
              <div className="main-navigation__hamburger-menu--elements"></div>
              <div className="main-navigation__hamburger-menu--elements"></div>
          </div>
          <div className="main-navigation__items">
            <div className="main-navigation__nav-icons">
              <NavIcons />
            </div>
            <div className="main-navigation__menu-item">
              <Menu />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainNavigation;