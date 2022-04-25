import React, { useState } from "react";

import Drawer from "./Drawer";
import Menu from "./Menu";
import NavIcons from "./NavIcons";
import AnimatedNavBar from "../navigation/AnimatedNavBar";

import "./MainNavigation.css";

const MainNavigation = (props) => {
  const [showDrawer, setShowDrawer] = useState(false);

  const openDrawer = () => setShowDrawer(true);
  const closeDrawer = () => setShowDrawer(false);

  return (
    <>
      <Drawer onClose={closeDrawer} showDrawer={showDrawer} />
      <AnimatedNavBar />
      <div className="main-navigation">
        <div className="main-navigation__nav-bar">
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
              <Menu showLines={showDrawer} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainNavigation;
