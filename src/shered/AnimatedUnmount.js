import React from "react";

import { CSSTransition } from 'react-transition-group';

import './AnimatedUnmount.css'

function AnimatedUnmount({ show, children }) {
      return <CSSTransition 
      in={show} 
      timeout={300}
      appear={show}
      enter={show} 
      classNames="animated-unmount"
      unmountOnExit
      >
        <div>
        { children }
        </div>
    </CSSTransition>
};

export default AnimatedUnmount;