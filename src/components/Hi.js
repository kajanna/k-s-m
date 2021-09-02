import React, { useRef } from 'react';

import Line from '../shered/Line';
import Card from '../shered/Card';

import './Hi.css'

function AboutMe(props) {
  const hiTextRef = useRef();

  return (
    <div className="about-me">
      <Line />
      
      <div className="about-me__content">
      <Card>
        <h2>Hi!</h2>
        <p ref={hiTextRef}>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
        </Card>
      </div>
      
      <Line />
    </div>
  );
}

export default AboutMe;