import React, { useEffect, useState, useRef } from 'react';
import { gsap }from 'gsap';

import Drawer from './Drawer'
import Menu from './Menu';
import OnHoverScale from '../shered/OnHoverScale';
import AnimatedNavBar from '../navigation/AnimatedNavBar' 

import  './MainNavigation.css';

function MainNavigation(props) {

  const [ showDrawer, setShowDrawer ] = useState(false);
  const navBarMenuRef = useRef();

  const openDrawer = () => setShowDrawer(true);
  const closeDrawer = () => setShowDrawer(false);
  
  useEffect(()=>{
    const openingNavBarAnimation = () => gsap.from(navBarMenuRef.current,
      {
        delay: 2,
        y: '-190%',
      });
      openingNavBarAnimation();
      return () => {
        openingNavBarAnimation.kill()
      }
  }, [])

  return (
    <>
      {showDrawer && <Drawer onClose={closeDrawer} />}
      <div className="main-navigation">
        <AnimatedNavBar />
        <div className="main-navigation__nav-bar" ref={navBarMenuRef}>
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
          </div>
        </div>
      </div>
    </>
  );
}

export default MainNavigation;