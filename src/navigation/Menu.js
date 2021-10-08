import React from 'react';
import { HashLink } from 'react-router-hash-link';

import Line from '../shered/Line';

import './Menu.css'

function Menu(props) {
    return (
      <div className="menu">   
        <ul>
        <li><HashLink smooth to="/#home">home</HashLink></li>
          <div className="menu__line">
            <Line />
          </div>
          <li><HashLink smooth to="/#about">about</HashLink></li>
          <div className="menu__line">
            <Line />
          </div>
          <li><HashLink smooth to="/#skills">skills</HashLink></li>
          <div className="menu__line">
            <Line />
          </div>
          <li><HashLink smooth to="/#projects">projects</HashLink></li>
          <div className="menu__line">
            <Line />
          </div>
          <li><HashLink smooth to="/#contact">contact</HashLink></li>
        </ul>
      </div>
    );
}

export default Menu;