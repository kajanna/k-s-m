import React, { useState, useEffect } from "react";

import "./Card.css";

const Card = ({ children, name }) => {
  const [changeBG, setChangeBG] = useState(false);
  useEffect(() => {
    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.9,
    };
    const onScreen = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setChangeBG(true);
        } else {
          setChangeBG(false);
        }
      });
    };
    let cardObserver = new IntersectionObserver(onScreen, options);
    let card = document.getElementById(name);
    cardObserver.observe(card);
  }, [changeBG, name]);

  return (
    <div className={changeBG ? "card card--white" : "card"} id={name}>
      {children}
    </div>
  );
};

export default Card;
