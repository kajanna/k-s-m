import React, { useEffect, useState } from "react";

import './AnimatedUnmount.css'

function AnimatedUnmount({ show, children }) {
    const [ renderComponent , setRenderComponent ] = useState(show);
    
    useEffect(() => {
        if (show) setRenderComponent(true);
      }, [show]);
    
    const onAnimationEnd = () => {
        if (!show) setRenderComponent(false);
    };

      return (
        renderComponent && (
          <div
          className={ show ? "animated-unmount__get-in" : "animated-unmount__get-out"}
            onAnimationEnd={onAnimationEnd}
          >
            {children}
          </div>
        )
      );
    };

export default AnimatedUnmount;