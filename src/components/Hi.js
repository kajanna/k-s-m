import React from 'react';

import Line from '../shered/Line'

import './Hi.css'

function AboutMe(props) {
  return (
    <div className="about-me">
      <Line />
      <div className="about-me__content">
        <h2>Hi!</h2>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </div>
      <Line />
    </div>
  );
}

export default AboutMe;