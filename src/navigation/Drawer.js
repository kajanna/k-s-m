import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap'
import Menu from './Menu'
import Backdrop from '../shered/Backdrop';

import './Drawer.css';

function Drawer(props) {
    const openDrawerTL = useRef();
    const bdRef = useRef();
    
    useEffect(() => {
      openDrawerTL.current = gsap.timeline()
        .to(bdRef.current, {
            duration: .5,
            backgroundColor: 'rgba(0, 0, 0, .5)'
        })
        .to('.drawer', {
          duration: 0.6,
          x: 0,
          boxShadow: "var(--shadow)",
          ease: "slow",
        })
        .to('.drawer__menu', {
            duration: 0.3,
            opacity: 1
        });

    }, []);

    const removeDrawer = () => {
        openDrawerTL.current = gsap.timeline()
        .to(bdRef.current, {
            duration: 0.4,
            backgroundColor: 'rgba(0, 0, 0, 0)'
        })
        .to('.drawer__menu', {
            duration: 0.4,
            opacity: 0,
        })
        .to('.drawer', {
            duration: 0.5,
            x: -400,
            boxShadow: 'none',
            ease: "slow",
            onComplete: props.onClose
          })
    };

    return (
        <>
        <div className="drawer" onClick={removeDrawer}>
            <div className="drawer__menu">
                <Menu />
            </div>
        </div>
        <Backdrop ref={bdRef} closeBackdrop={removeDrawer}/>
        </>
    );
}

export default Drawer;