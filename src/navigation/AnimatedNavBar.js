import React from 'react';
import { gsap} from 'gsap'
import './AnimatedNavBar.css'

function AnimatedNavBar(props) {
     const changeBackground = () => {
        if (window.scrollY >= 80) {
            console.log(window.scrollY)
            gsap.to(".animated-nav-bar", {
              duration: 0.5,
              y: 0,
              boxShadow: 'var(--shadow)',
              ease: "slow",
            });
        } else {
            console.log('No beige')
            gsap.to(".animated-nav-bar", {
              duration: 0.5,
              y: "-100%",
              boxShadow: 'none',
              ease: "slow",
            });
          }
        };
    window.addEventListener('scroll', changeBackground);
    
    return (
      <div className="animated-nav-bar">
        <div className="animated-nav-bar__blob"></div>
      </div>
    );
}

export default AnimatedNavBar;