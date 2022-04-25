import React from "react";

import { ReactComponent as LinkedIn } from "../assets/my_linked_in.svg";
import { ReactComponent as GitHub } from "../assets/my_github.svg";

import "./NavIcons.css";

const NavIcons = () => {
  return (
    <div className="nav-icons__logo-section">
      <div className="nav-icons__logo nav-icons__logo--squere">
        <a
          href="https://www.linkedin.com/in/kaja-szokalska-mas%C5%82yk-1a816b204"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedIn />
        </a>
      </div>
      <div className="nav-icons__logo nav-icons__logo--circle">
        <a href="https://github.com/kajanna" target="_blank" rel="noreferrer">
          <GitHub />
        </a>
      </div>
    </div>
  );
};

export default NavIcons;
