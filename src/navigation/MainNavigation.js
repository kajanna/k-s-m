import React, { useState} from 'react';

import { ReactComponent as LinkedIn } from '../assets/my_linked_in.svg'
import { ReactComponent as GitHub } from '../assets/my_github.svg'
import Drawer from './Drawer'
import Menu from './Menu';

import  './MainNavigation.css';

function MainNavigation(props) {

  const [showDrawer, setShowDrawer ] = useState(false);
  const [ miniNavBar, setMiniNavBar] = useState(false);
  const openDrawer = () => setShowDrawer(true);
  const closeDrawer = () => setShowDrawer(false);
  
  const changeBackground = () => {
    if(window.scrollY >= 80) {
      setMiniNavBar(true)
    }
    else {
      setMiniNavBar(false)
    }
  }

  window.addEventListener('scroll', changeBackground);
  return (
    <>
    {showDrawer && <Drawer onClose={closeDrawer}/>} 
    <div className={miniNavBar ? "main-navigation active" : "main-navigation"}>
      <div className="main-navigation__nav-bar">
        <div className="main-navigation__hamburger-menu" onClick={openDrawer}>
          <div className="main-navigation__hamburger-menu--elements"></div>
          <div className="main-navigation__hamburger-menu--elements"></div>
          <div className="main-navigation__hamburger-menu--elements"></div>
        </div>
        <div className="main-navigation__items">
          <div className="main-navigation__menu-item">
        <Menu />
        </div>
          <div className="main-navigation--logo">
            <LinkedIn />
          </div>
          <div className="main-navigation--logo">
            <GitHub />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default MainNavigation;