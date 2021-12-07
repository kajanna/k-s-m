import React, { useState, useEffect } from 'react';

import './Line.css';

function Line(props) {
    const [ showLine, setShowLine ] = useState(false);

    useEffect(() => {
        let options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.7
          }
          function onScreen (entries) {
              console.log(entries);
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                setShowLine(true);
              } else {
                setShowLine(false);
              }
            });
          }
          let observer = new IntersectionObserver( onScreen, options);
            observer.observe(document.getElementById("line"));

    },[showLine])
        
    return <div id="line" className={showLine ? "menu__line--show" : "menu__line--start"}></div>;
}

export default Line;