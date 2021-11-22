import React from 'react';
import { HashLink } from 'react-router-hash-link';


import './Menu.css'

function Menu(props) {
    return (
      <div className="menu">   
        <ul>
        <li><HashLink className="menu_link" smooth to="/#home">home</HashLink></li>
          <div className="menu__line">

          </div>
          <li><HashLink className="menu_link" smooth to="/#about">about</HashLink></li>
          <div className="menu__line">
         
          </div>
          <li><HashLink className="menu_link" smooth to="/#projects">projects</HashLink></li>
          <div className="menu__line">
         
          </div>
          <li><HashLink className="menu_link" smooth to="/#skills">skills</HashLink></li>
          <div className="menu__line">
    
          </div>
          <li><HashLink className="menu_link" smooth to="/#contact">contact</HashLink></li>
        </ul>
      </div>
    );
}

export default Menu;