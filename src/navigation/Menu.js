import React from 'react';
import { HashLink } from 'react-router-hash-link';

import Line from '../shered/Line'


import './Menu.css'

function Menu(props) {
  return (
    <div className="menu">
      <ul>
        <li>
          <HashLink className="menu_link" smooth to="/#home">
            home
          </HashLink>
        </li>
        <Line />
        <li>
          <HashLink className="menu_link" smooth to="/#about">
            about
          </HashLink>
        </li>
        <Line />
        <li>
          <HashLink className="menu_link" smooth to="/#projects">
            projects
          </HashLink>
        </li>
        <Line />
        <li>
          <HashLink className="menu_link" smooth to="/#skills">
            skills
          </HashLink>
        </li>
        <Line />
        <li>
          <HashLink className="menu_link" smooth to="/#contact">
            contact
          </HashLink>
        </li>
      </ul>
    </div>
  );
}

export default Menu;