import React, { useRef } from "react";

import { CSSTransition } from 'react-transition-group';

import './AnimatedUnmount.css'

function AnimatedUnmount({ show, children }) {
  const nodeRef = useRef();
  return (
    <CSSTransition
      in={show}
      nodeRef={nodeRef}
      timeout={300}
      appear={show}
      enter={show}
      classNames="animated-unmount"
      unmountOnExit
    >
      <div ref={nodeRef}>{children}</div>
    </CSSTransition>
  );
}

export default AnimatedUnmount;