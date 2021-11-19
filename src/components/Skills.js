import React from "react";

import { ReactComponent as HtmlLogo  } from '../assets/technologiesLogos/htmlLogo.svg';
import { ReactComponent as JslLogo  } from '../assets/technologiesLogos/javaScriptLogo.svg';
import { ReactComponent as CssLogo  } from '../assets/technologiesLogos/cssLogo.svg';
import { ReactComponent as ReactLogo } from '../assets/technologiesLogos/reactLogo.svg';
import { ReactComponent as NodeLogo  } from '../assets/technologiesLogos/nodeLogo.svg';
import { ReactComponent as MaterialUILogo  } from '../assets/technologiesLogos/materialUILogo.svg';

import "./Skills.css";

function Skills(props) {
  return (
    <section id="skills" className="skills">
      <div className="skills__header">
        <div className="skills__header-text">Skills</div>
      </div>
      <div className="skills__logos">
        <div className="skills__logo">
        <HtmlLogo />
        </div>
        <div className="skills__logo">
        <CssLogo />
        </div>
        <div className="skills__logo">
        <JslLogo />
        </div>
        <div className="skills__logo">
        <ReactLogo />
        </div>
        <div className="skills__logo">
        <NodeLogo />
        </div>
        <div className="skills__logo">
        <MaterialUILogo />
        </div>
    
        
      
        
        
        
      </div>
    </section>
  );
}

export default Skills;
