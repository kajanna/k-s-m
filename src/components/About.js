import React from 'react';
import { HashLink } from 'react-router-hash-link';

import Line from '../shered/Line';
import Card from '../shered/Card';
import Button from '../shered/Button';

import './About.css'

function About(props) {
  return (
    <section  id="about" className="about">
      <div className="about__content">
        <Card>
          <div>
            <div className="about__blob" >
              <div className="header">Hi!</div>
            </div>
            <p className="about__content-text" >
              For about 10 years I have worked as a graphic designer and DTP
              operator. I created publication layouts, designing notebooks,
              postcards and info materials. My workflow usually included contact
              with clients and preparing files for printing or web usage. My
              favorite tools were Adobe Photoshop, Adobe Illustrator and Adobe
              InDesign. Nowadays I usually use Affinity Designer, Affinity Photo
              and Figma.
            </p>
            <p className="about__content-text">
              About 1,5 year ago I decided to change my career path. Frontend
              was quite an obvious choice for me. I learned basics from Udemy
              Courses and on-line tutorials. I'm a huge fan of React js as well
              as Material UI and Formik. Currently I'm learning Typescript and
              Node.
            </p>
            <p className="about__content-text">
              It would be fantastic if I could improve my skills and gain some
              experience working on some real life project. I'm looking for an
              entry level job or internship. It would be nice if I get the chane
              to work with react but I can also learn other js Freamworks.
            </p>
            <Line />
            <div className="about__button-section" >
              <div>
                <p>My skills</p>
                <HashLink smooth to="/#skills">
                <Button text="skills" />
                </HashLink>
              </div>
              <div>
                <p>Checkout my projects.</p>
                <HashLink smooth to="/#projects">
                <Button text="projects" />
                </HashLink>
              </div>
              <div>
                <p>Contact me.</p>
                <HashLink smooth to="/#contact">
                <Button text="contact" />
                </HashLink>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

export default About;