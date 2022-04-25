import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";

import "./Menu.css";

const Menu = () => {
  const [showLine, setShowLine] = useState(false);
  useEffect(() => {
    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.7,
    };
    const onScreen = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setShowLine(true);
        } else {
          setShowLine(false);
        }
      });
    };
    let lineObserver = new IntersectionObserver(onScreen, options);
    lineObserver.observe(document.getElementById("menu"));
  }, [showLine]);
  return (
    <div id="menu" className="menu">
      <ul>
        <li className={showLine ? "menu__line" : null}>
          <HashLink className="menu_link" smooth to="/#home">
            home
          </HashLink>
        </li>

        <li className={showLine ? "menu__line" : null}>
          <HashLink className="menu_link" smooth to="/#about">
            about
          </HashLink>
        </li>

        <li className={showLine ? "menu__line" : null}>
          <HashLink className="menu_link" smooth to="/#projects">
            projects
          </HashLink>
        </li>

        <li className={showLine ? "menu__line" : null}>
          <HashLink className="menu_link" smooth to="/#skills">
            skills
          </HashLink>
        </li>

        <li>
          <HashLink className="menu_link" smooth to="/#contact">
            contact
          </HashLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
