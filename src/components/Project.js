import React from "react";

import Card from '../shered/Card'
import Line from '../shered/Line';
import ProjectLinks from "./ProjectLinks";

import './Project.css'

function Project(props) {
  return (
    <div className="project">
    <Card>
        <div className="project__img"></div>
        <div className="project__description">
          <div className="project__description--title">My Home App</div>
          <Line />
          <div className="project__description--description">
            Simple App a sfjaewfjnnsd vdsndsndsngndn d ff sfasfaf
          </div>
          <Line />
          <ProjectLinks />
        </div>
     
    </Card>
    </div>
  );
}

export default Project;
