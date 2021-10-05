import React from 'react';

import Project from './Project'
import myHome from '../assets/my_home_logo.svg'
import meWant from '../assets/me_want_logo.svg'
import inYourFridge from '../assets/in_your_fridge_logo.svg'

import './MyProjects.css'

function MyProjects(props) {
  return (
    <section className="my-projects" id="projects">
      <div className="header">My Projects</div>
      <div className="my-projects_projects">
        <Project
          img={myHome}
          description="House buying helper. 
          This app was designed as a kind of personal notebook. 
          It allows user to collect lot of information in one place."
          frontEnd={[ "React", "MaterialUI", "Redux", "Redux-Form"]}
          backEnd={[ "FireBase"]}
          />
        <Project 
          img={meWant} 
          description="WishList creator. Polish language only. Made for my husband - board game fan and collector"
          frontEnd={[ "React", "MaterialUI", "Redux", "Redux-Form"]}
          backEnd={[ "Node.js", "Cloudinary", "Multer"]}
          />
        <Project 
          img={inYourFridge}
          description="Less Waste Cookbook App and fridge manager. Work in progress"
          frontEnd={[ "React", "TypeScript", "Redux", "Formik"]}
          backEnd={[ "Node.js"]}/>
      </div>
    </section>
  );
}

export default MyProjects;