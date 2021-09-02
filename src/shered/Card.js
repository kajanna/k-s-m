import { gsap }from 'gsap';
import React, { useEffect, useRef } from 'react';

import './Card.css'

function Card({ children }) {
    const cardRef = useRef();

    useEffect(()=> {
        gsap.to(cardRef.current,
            {
                duration: 3,
                scaleX: 1,
                scaleY: 1,
                ease: 'back'
            }
        );
    
    }, [])
    return (
        <div className="card" ref={cardRef}>
        {children}
        </div>
    );
}

export default Card;