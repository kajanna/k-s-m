import React from "react";

import Line from '../shered/Line';

import "./About.css";

function MySkills(props) {
  return (
    <div className="about">
      <div className="about__header"> 
      <div className="about__header-text">I work with:</div>
      </div>
      <Line white />
      <div className="about__logos about__logo">
        <div className="about__js about__logo"></div>
        <div className="about__html about__logo"></div>
        <div className="about__css about__logo"></div>

        <div className="about__react about__logo"></div>
        <div className="about__node about__logo"></div>
        <div className="about__materialui about__logo"></div>
        
      </div>
      <Line white />
      {/* <Card>
          <div>
        IT skills
        <ul>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>React.js</li>
          <li>Node.js</li>
          <li>Material UI</li>
        </ul>
        </div>
      </Card>
      <Card>
          <div></div>
        graphic design
        <ul>
          <li>Photoshop</li>
          <li>Ilustrator</li>
          <li>InDesign</li>
          <li>Affinity Designer</li>
          <li>Figma</li>
        </ul>
      </Card>
      <Card>
      <div></div>
      languages
        <ul>
          <li>English</li>
        </ul>
         
      </Card> */}
    </div>
  );
}

export default MySkills;
