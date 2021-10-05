import React from "react";

import Card from '../shered/Card'
import Line from '../shered/Line';
import ProjectLinks from './ProjectLinks';

import './Project.css'

function Project(props) {
  const { img, description, frontEnd, backEnd } = props
  return (
    <div className="project">
    <Card>
        <div className="project__img" style={{ backgroundImage:`url(${img})`}}></div>
        <div className="project__description">
          <Line />
          {/* <div className="project__description--title">{name}</div> */}
          <div className="project__description--description">
            {description}
          </div>
          <Line />
          <div className="project__description--description">
            <ul>
            {frontEnd.map(f => <li>{f}</li>)}
            {backEnd.map(b => <li>{b}</li>)}
            </ul>
          </div>
          <Line />
          <ProjectLinks />
        </div>
     
    </Card>
    </div>
  );
}

export default Project;
