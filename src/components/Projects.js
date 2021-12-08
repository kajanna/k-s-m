import React from 'react';

import Project from './Project'
import myHome from '../assets/my_home_logo.svg'
import meWant from '../assets/me_want_logo.svg'
import inYourFridge from '../assets/in_your_fridge_logo.svg'

import './Projects.css'

function MyProjects(props) {
  return (
    
    <section className="my-projects" id="projects">
     <div className="my-projects__header">Projects</div>
      <div className="my-projects_projects">
        <Project
          img={myHome}
          key="myHome"
          description="House buying helper. 
          This app was designed as a kind of personal notebook. 
          It allows user to collect lot of information in one place."
          frontEnd={"React, MaterialUI, Redux, Redux-Form"}
          backEnd={"FireBase"}
          feLink="https://github.com/kajanna/my-home"
          pageLink="https://my-home-4f65c.web.app/"
        />
        <Project
          img={meWant}
          key="meWant"
          description="WishList creator. Polish language only. Made for my husband - board game fan and collector"
          frontEnd={"React, MaterialUI, Redux, Redux-Form"}
          backEnd={"Node.js, Cloudinary, Multer"}
          feLink="https://github.com/kajanna/me-want"
          beLink="https://github.com/kajanna/me-want-backend"
          pageLink="https://me-want.firebaseapp.com/"
        />
        <Project
          img={inYourFridge}
          key="inYourFridge"
          description="Simple and intuitive fridge manager. Helps you track what you put in your fridge.   
          Work in progress"
          frontEnd={"React, TypeScript, Redux, Formik"}
          backEnd={"Node.js"}
          feLink=""
        />
        <Project
          img={inYourFridge}
          key="inYourFridge"
          description="Simple and intuitive fridge manager. Helps you track what you put in your fridge.   
          Work in progress"
          frontEnd={"React, TypeScript, Redux, Formik"}
          backEnd={"Node.js"}
          feLink=""
        />
        <Project
          img={inYourFridge}
          key="inYourFridge"
          description="Simple and intuitive fridge manager. Helps you track what you put in your fridge.   
          Work in progress"
          frontEnd={"React, TypeScript, Redux, Formik"}
          backEnd={"Node.js"}
          feLink=""
        />
      </div>

    </section>
  );
}

export default MyProjects;