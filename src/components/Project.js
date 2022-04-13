import React from "react";

import Card from '../shared/Card'
import ProjectLinks from './ProjectLinks';
import TextSeparator from '../shared/TextSeparator';

import './Project.css'

function Project(props) {
  const { img, description, frontEnd, backEnd, feLink, beLink, pageLink, name } = props
  return (
      <Card name={name}>
          <div className="project__bg"
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        <div className="project__info">
          <div className="project__description">{description}</div>
          <TextSeparator/>
          <div className="project__description">
            <p>front-end: <br></br>{frontEnd}</p>
            <p>back-end: <br></br>{backEnd}</p>
            <TextSeparator/>
          <ProjectLinks 
          feLink={feLink}
          beLink={beLink}
          pageLink={pageLink}
          />
          </div>
          
        </div>
        
      </Card>
 
  );
}

export default Project;
