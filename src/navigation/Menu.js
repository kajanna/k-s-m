import React from 'react';

import Line from '../shered/Line';

import './Menu.css'

function Menu(props) {
    return (
      <div className="menu">   
        <ul>
          <li><a href="#about">about</a></li>
          <div className="menu__line">
            <Line />
          </div>
          <li><a href="#skills">skills</a></li>
          <div className="menu__line">
            <Line />
          </div>
          <li><a href="#projects">projects</a></li>
          <div className="menu__line">
            <Line />
          </div>
          <li><a href="#contact">contact</a></li>
        </ul>
      </div>
    );
}

export default Menu;