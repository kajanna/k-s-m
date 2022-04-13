import React, { useState, useEffect } from 'react';


import HtmlLogo   from '../assets/technologiesLogos/html_logo.png';
import JslLogo   from '../assets/technologiesLogos/javascript_logo.png';
import CssLogo   from '../assets/technologiesLogos/css_logo.png';
import ReactLogo  from '../assets/technologiesLogos/react_logo.png';
import NodeLogo   from '../assets/technologiesLogos/node_logo.png';
import MaterialUILogo   from '../assets/technologiesLogos/material_logo.png';
import TypeScriptLogo   from '../assets/technologiesLogos/typescript_logo.png';
import SassLogo   from '../assets/technologiesLogos/sass_logo.png';
// import GsapLogo   from '../assets/technologiesLogos/GSAP_logo.png';

import "./Skills.css";

const Skills = () =>{
  const [ showSkills, setShowSkills ] = useState(false);

  useEffect(() => {
    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.9,
    };
    function onScreen(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setShowSkills(true);
        }
      });
    }
    let skillsObserver = new IntersectionObserver(onScreen, options);
    skillsObserver.observe(document.getElementById("skills"));
    if (showSkills) {
      skillsObserver.unobserve(document.getElementById("skills"));
    }
  }, [showSkills]);

  return (
    <section id="skills" className="skills">
      <div className="skills__header">
        <div className="skills__text">Skills</div>
      </div>
      <div className="skills__logos">
        <div className={`skills__logo ${showSkills && " skills__logo-a"}`}>
          <img src={HtmlLogo} alt="Html Logo" />
        </div>
        <div className={`skills__logo deley-1 ${showSkills && " skills__logo-a"}`}>
          <img src={JslLogo} alt="CSS Logo" />
        </div>
        <div className={`skills__logo deley-2 ${showSkills && " skills__logo-a"}`}>
          <img src={CssLogo} alt="Java Script Logo" />
        </div>
        <div className={`skills__logo deley-3 ${showSkills && " skills__logo-a"}`}>
          <img src={ReactLogo} alt="React Logo " />
        </div>
        <div className={`skills__logo deley-4 ${showSkills && " skills__logo-a"}`}>
          <img src={NodeLogo} alt="NodeLogo" />
        </div>
        <div className={`skills__logo deley-5 ${showSkills && " skills__logo-a"}`}>
          <img src={MaterialUILogo} alt="MaterialUILogo" />
        </div>
        <div className={`skills__logo deley-6 ${showSkills && " skills__logo-a"}`}>
          <img src={TypeScriptLogo} alt="Type Script Logo" />
        </div>
        <div className={`skills__logo deley-7 ${showSkills && " skills__logo-a"}`}>
          <img src={SassLogo} alt="Sass Logo" />
        </div>
        {/* <div className={`skills__logo deley-6 ${showSkills && " skills__logo-a"}`}>
          <img  src={GsapLogo} alt="Gsap Logo " />
        </div> */}
      </div>
    </section>
  );
}

export default Skills;
