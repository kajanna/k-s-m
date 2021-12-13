import React, { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';

import './Menu.css'

function Menu(props) {
  const [ showLine, setShowLine ] = useState(false);
    useEffect(() => {
        let options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.7
          }
          function onScreen (entries) {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                setShowLine(true);
              } else {
                setShowLine(false);
              }
            });
          }
          let lineObserver = new IntersectionObserver( onScreen, options);
          lineObserver.observe(document.getElementById("menu"));
    },[showLine]);
  return (
    <div id="menu" className="menu">
      <ul>
        <li className={showLine && "menu__line"}>
          <HashLink className="menu_link" smooth to="/#home">
            home
          </HashLink>
        </li>
       
        <li className={showLine && "menu__line"}>
          <HashLink className="menu_link" smooth to="/#about">
            about
          </HashLink>
        </li>
       
        <li className={showLine && "menu__line"}>
          <HashLink className="menu_link" smooth to="/#projects">
            projects
          </HashLink>
        </li>
       
        <li className={showLine && "menu__line"}>
          <HashLink className="menu_link" smooth to="/#skills">
            skills
          </HashLink>
        </li>
      
        <li className={showLine && "menu__line"}>
          <HashLink className="menu_link" smooth to="/#contact">
            contact
          </HashLink>
        </li>
      </ul>
    </div>
  );
}

export default Menu;