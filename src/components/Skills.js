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
    skillsObserver.observe(document.getElementById("skills"));
    if (showSkills) {
      skillsObserver.unobserve(document.getElementById("skills"));
    }
  }, [showSkills]);

  return (
    <section id="skills" className="skills">
      <div className="skills__header">
        <div className="skills__header-text">Skills</div>
      </div>
      <div className="skills__logos">
        <div className={`skills__logo ${showSkills && " skills__logo-a"}`}>
          <HtmlLogo />
        </div>
        <div className={`skills__logo deley-1 ${showSkills && " skills__logo-a"}`}>
          <CssLogo />
        </div>
        <div className={`skills__logo deley-2 ${showSkills && " skills__logo-a"}`}>
          <JslLogo />
        </div>
        <div className={`skills__logo deley-3 ${showSkills && " skills__logo-a"}`}>
          <ReactLogo />
        </div>
        <div className={`skills__logo deley-4 ${showSkills && " skills__logo-a"}`}>
          <NodeLogo />
        </div>
        <div className={`skills__logo deley-5 ${showSkills && " skills__logo-a"}`}>
          <MaterialUILogo />
        </div>
        <div className={`skills__logo deley-6 ${showSkills && " skills__logo-a"}`}>
          <MaterialUILogo />
        </div>
      </div>
    </section>
  );
}

export default Skills;
