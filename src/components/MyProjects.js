import React from 'react';
import Project from './Project'
import './MyProjects.css'

function MyProjects(props) {
  return (
    <div className="my-projects">
      <div className="header">My Projects</div>
      <div className="my-projects_projects">
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
}

export default MyProjects;