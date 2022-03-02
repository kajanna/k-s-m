import React from 'react';

import Project from './Project'
import myHome from '../assets/my_home_logo.svg';
import meWant from '../assets/me_want_logo.svg';
import myLibrary from '../assets/my_library_logo.svg';



import './Projects.css'

function MyProjects(props) {
  return (
    
    <section className="my-projects" id="projects">
     <div className="my-projects__header">Projects</div>
      <div className="my-projects_projects">
        <Project
          img={myHome}
          key="#myHome"
          name="#myHome"
          description="House buying helper. 
           This app allows user to collect lot of information in one place."
          frontEnd={"React + MaterialUI + Redux + Redux-Form"}
          backEnd={"Firebase - Realtime Database"}
          feLink="https://github.com/kajanna/my-home"
          pageLink="https://my-home-4f65c.web.app/"
        />
        <Project
          img={myLibrary}
          key="#myLibrary"
          name="#myLibrary"
          description="Library manager. App that helps user keep track of borrowed and lent books."
          frontEnd={"React + TypeScript + SASS"}
          backEnd={"Firestorm -  Cloud Firestore"}
          feLink="https://github.com/kajanna/my-library"
        />
        <Project
          img={meWant}
          key="#meWant"
          name="#meWant"
          description="WishList creator. Polish language only."
          frontEnd={"React + MaterialUI + Formik + Yup"}
          backEnd={"Node.js + Cloudinary + Multer"}
          feLink="https://github.com/kajanna/me-want"
          beLink="https://github.com/kajanna/me-want-backend"
          pageLink="https://me-want.firebaseapp.com/"
        />
        

      </div>

    </section>
  );
}

export default MyProjects;