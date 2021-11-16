import React from "react";

import "./Skills.css";

function Skills(props) {
  return (
    <section id="skills" className="skills">
      <div className="skills__header">
        <div className="skills__header-text">I work with:</div>
      </div>
      <div className="skills__logos skills__logo">
        <div className="skills__js skills__logo"></div>
        <div className="skills__html skills__logo"></div>
        <div className="skills__css skills__logo"></div>

        <div className="skills__react skills__logo"></div>
        <div className="skills__node skills__logo"></div>
        <div className="skills__materialui skills__logo"></div>
      </div>
    </section>
  );
}

export default Skills;
