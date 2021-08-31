import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap'
import Menu from './Menu'
import './Drawer.css';

function Drawer(props) {
    const openDrawerTL = useRef();
    
    useEffect(() => {
      openDrawerTL.current = gsap.timeline()
        .to('.drawer', {
          duration: 0.7,
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
        <div className="drawer" onClick={removeDrawer}>
            <div className="drawer__menu">
                <Menu />
            </div>
        </div>
    );
}

export default Drawer;