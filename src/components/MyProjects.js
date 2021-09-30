import React from 'react';
import Project from './Project'

import './MyProjects.css'

const projectInfo = [];

function MyProjects(props) {
  return (
    <section className="my-projects" id="projects">
      <div className="header">My Projects</div>
      <div className="my-projects_projects">
        <Project />
        <Project />
        <Project />
      </div>
    </section>
  );
}

export default MyProjects;