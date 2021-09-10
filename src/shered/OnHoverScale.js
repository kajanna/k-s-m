import React from 'react';
import { gsap } from 'gsap';

function OnHoverScale(props) {
    const onEnter = ({ currentTarget }) => {
        gsap.to(currentTarget, { 
            duration: 0.7,
            scale: 1.2,
            ease: 'back',
         });
    };
    const onLeave = ({ currentTarget }) => {
        gsap.to(currentTarget, { 
            duration: 0.7,
            scale: 1,
            ease: 'back'
         });
    };
    
    return (
        <div onMouseEnter={onEnter} onMouseLeave={onLeave}>
            {props.children}
        </div>
    );
}

export default OnHoverScale;