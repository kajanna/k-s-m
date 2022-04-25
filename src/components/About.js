import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";

import Button from "../shared/Button";
import TextSeparator from "../shared/TextSeparator";

import "./About.css";

const About = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.9,
    };
    const onScreen = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setShowText(true);
        }
      });
    }
    let textObserver = new IntersectionObserver(onScreen, options);
    textObserver.observe(document.getElementById("about__header"));
    if (showText) {
      textObserver.unobserve(document.getElementById("about__header"));
    }
  }, [showText]);
  return (
    <section id="about" className="about">
      <div className="about__content">
        <div>
          <div
            id="about__header"
            className={
              showText ? "about__header about__appear" : "about__header"
            }
          >
            Hi!
          </div>
          <p
            className={
              showText
                ? "about__content-text about__appear"
                : "about__content-text"
            }
          >
            I'm ex-graphic designer and DTP operator. About 1 year ago I decided
            to change my career path. I learned basics from Udemy Courses and
            on-line tutorials. 16.11.2021 - 08.03.2022 I participated in Dare It
            Mentoring Program where I work with my mentor on my front-end
            skills. I'm a huge fan of React and Type Script as well as Material
            UI and Formik. Currently I'm learning three.js and GSAP.
          </p>
          <TextSeparator />
          <p
            className={
              showText
                ? "about__content-text about__appear"
                : "about__content-text"
            }
          >
            I'm looking for an entry level front-end job or internship.
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
};

export default About;
