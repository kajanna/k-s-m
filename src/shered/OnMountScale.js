import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

function OnMountScale({children}) {
    const elRef = useRef();
    useEffect(() => {
        gsap.fromTo(elRef.current,
            {
                scale: 0,
                opacity: 0
            }, 
            {
            scrollTrigger: {
                trigger: elRef.current,
                start: 'bottom bottom'
            },
            duration: 1.5,
            opacity: 1,
            scale: 1,
            ease: 'back',
        })
    }, [])
    return (
        <div ref={elRef} className=''>
            {children}
        </div>
    );
}

export default OnMountScale;