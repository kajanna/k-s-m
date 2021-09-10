import React from 'react';

import Line from '../shered/Line';
import Card from '../shered/Card';
import Button from '../shered/Button';
import OnMountScale from '../shered/OnMountScale';

import './Hi.css'

function AboutMe(props) {

   return (
    <div className="hi">
      <div className="hi__content">
        <Card>
          <div>
            <div className="hi__blob">
              <div className="header">Hi!</div>
            </div>
            <p className="hi__content-text">
              For about 10 years I have worked as a graphic designer and DTP
              operator. I created publication layouts, designing notebooks,
              postcards and info materials. My workflow usually included contact
              with clients and preparing files for printing or web usage. My
              favorite tools were Adobe Photoshop, Adobe Illustrator and Adobe
              InDesign. Nowadays I usually use Affinity Designer, Affinity Photo
              and Figma.
            </p>
            <p className="hi__content-text">
              About 1,5 year ago I decided to change my career path. Frontend
              was quite an obvious choice for me. I learned basics from Udemy
              Courses and on-line tutorials. I'm a huge fan of React js as well
              as Material UI and Formik. Currently I'm learning Typescript and
              Node.
            </p>
            <p className="hi__content-text">
              It would be fantastic if I could improve my skills and gain some
              experience working on some real life project. I'm looking for an
              entry level job or internship. It would be nice if I get the chane
              to work with react but I can also learn other js Freamworks.
            </p>
            <Line />
            <div className="hi__button-section">
              <div>
                <p>My skills</p>
                <Button text="about" />
              </div>

              <div>
                <p>Checkout my projects.</p>
                <Button text="projects" />
              </div>

                <div>
                  <p>Contact me.</p>
                  <Button text="contact" />
                </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default AboutMe;