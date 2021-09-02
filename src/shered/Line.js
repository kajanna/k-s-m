import React, { useEffect, useRef } from 'react';
import  { gsap } from 'gsap';

import './Line.css'

function Line(props) {

    const lineRef = useRef();
    useEffect(() => {
        const drawLine = () => gsap.to(lineRef.current,
            {
                x: '-100%',
                scrollTrigger: {
                    trigger: lineRef.current,
                    start: "top top",
                    end: "bottom center",
                    scrub: true
                }
            }
        )
            drawLine();
    }, [])

    return (
        <div className="line" ref={lineRef}></div>

    );
}

export default Line;