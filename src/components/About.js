import React from 'react';
import { HashLink } from 'react-router-hash-link';

import Button from '../shered/Button';

import './About.css'

function About(props) {
  return (
    <section id="about" className="about">
      <div className="about__content">
        <div>
          <div className="about__header">
            <div>Hi</div>
            <div className="about__header--animate">!</div>
          </div>
          <p className="about__content-text">
            I'm ex-graphic designer and DTP operator. About 1,5 year ago I
            decided to change my career path. I learned basics from Udemy
            Courses and on-line tutorials. I'm a huge fan of React js as well as
            Material UI and Formik. Currently I'm learning Typescript and Node.
          </p>
          <p className="about__content-text">
            I'm looking for an entry level job or internship. It would be
            fantastic if I could improve my skills and gain some experience
            working on some real life project.
          </p>
        </div>
      </div>
      <div className="about__button-section">
            <div className="about__button">
              <HashLink smooth to="/#projects">
                <Button text="projects" />
              </HashLink>
            </div>
            <div className="about__button">
              <HashLink smooth to="/#skills">
                <Button text="skills" />
              </HashLink>
            </div>
            <div className="about__button">
              <HashLink smooth to="/#contact">
                <Button text="contact" />
              </HashLink>
            </div>
          </div>
    </section>
  );
}

export default About;