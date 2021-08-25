import React from 'react';
import Project from './Project'
import './MyReactProjects.css'

function MyReactProjects(props) {
  return (
    <div className="my-react-projects">
        < h3>My ReactProjects</h3>
      <div className="my-react-projects__projects">
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
}

export default MyReactProjects;