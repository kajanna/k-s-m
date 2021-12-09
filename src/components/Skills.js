import React, { useState, useEffect } from 'react';

// Logo import
import { ReactComponent as HtmlLogo  } from '../assets/technologiesLogos/htmlLogo.svg';
import { ReactComponent as JslLogo  } from '../assets/technologiesLogos/javaScriptLogo.svg';
import { ReactComponent as CssLogo  } from '../assets/technologiesLogos/cssLogo.svg';
import { ReactComponent as ReactLogo } from '../assets/technologiesLogos/reactLogo.svg';
import { ReactComponent as NodeLogo  } from '../assets/technologiesLogos/nodeLogo.svg';
import { ReactComponent as MaterialUILogo  } from '../assets/technologiesLogos/materialUILogo.svg';

import "./Skills.css";

function Skills(props) {

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
    skillsObserver.observe(document.getElementById("skills__header"));
    if (showSkills) {
      skillsObserver.unobserve(document.getElementById("skills__header"));
    }
  }, [showSkills]);

  return (
    <section id="skills" className="skills">
      <div id="skills__header" className="skills__header">
        <div className="skills__header-text">Skills</div>
      </div>
      <div className="skills__logos">
        <div
          className={
            showSkills ? "skills__logo skills__logo-a" : "skills__logo"
          }
        >
          <HtmlLogo />
        </div>
        <div
          className={
            showSkills ? "skills__logo skills__logo-a deley-1" : "skills__logo"
          }
        >
          <CssLogo />
        </div>
        <div
          className={
            showSkills ? "skills__logo skills__logo-a deley-2" : "skills__logo"
          }
        >
          <JslLogo />
        </div>
        <div
          className={
            showSkills ? "skills__logo skills__logo-a deley-3" : "skills__logo"
          }
        >
          <ReactLogo />
        </div>
        <div
          className={
            showSkills ? "skills__logo skills__logo-a deley-4" : "skills__logo"
          }
        >
          <NodeLogo />
        </div>
        <div
          className={
            showSkills ? "skills__logo skills__logo-a deley-5" : "skills__logo"
          }
        >
          <MaterialUILogo />
        </div>
        <div
          className={
            showSkills ? "skills__logo skills__logo-a deley-6" : "skills__logo"
          }
        >
          <MaterialUILogo />
        </div>
      </div>
    </section>
  );
}

export default Skills;
