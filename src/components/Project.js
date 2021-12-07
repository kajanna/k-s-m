import React from "react";

import Card from '../shered/Card'
import ProjectLinks from './ProjectLinks';

import './Project.css'

function Project(props) {
  const { img, description, frontEnd, backEnd, feLink, beLink, pageLink } = props
  return (
    <div className="project">
      <Card>
        <ProjectLinks 
          feLink={feLink}
          beLink={beLink}
          pageLink={pageLink}
          />
          <div className="project__img"
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        <div className="project__description">
          <div className="project__description--description">{description}</div>
          <div className="project__description--description">
            <p>{frontEnd}</p>
            <p>{backEnd}</p>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Project;
