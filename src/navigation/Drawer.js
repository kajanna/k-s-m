import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap'
import Menu from './Menu'
import Backdrop from '../shered/Backdrop';

import './Drawer.css';

function Drawer(props) {
    const openDrawerTL = useRef();
    const drawerRef = useRef();
    const menuRef = useRef();
    const bdRef = useRef();
    
    useEffect(() => {
      openDrawerTL.current = gsap.timeline()
        .to(bdRef.current, {
            duration: 0.3,
            x: 0
        })
        .to(drawerRef.current, {
          duration: 0.4,
          x: 0,
          boxShadow: "var(--shadow)",
          ease: "slow",
        })
        .to(menuRef.current, {
            duration: 0.3,
            opacity: 1
        });

    }, []);

    const removeDrawer = () => {
        openDrawerTL.current = gsap.timeline()
        .to(bdRef.current, {
            duration: 0.3,
            x: -800,
        })
        .to(menuRef.current, {
            duration: 0.2,
            opacity: 0,
        })
        .to(drawerRef.current, {
            duration: 0.4,
            x: -400,
            boxShadow: 'none',
            ease: "slow",
            onComplete: props.onClose
          })
    };

    return (
        <>
        <div className="drawer" ref={drawerRef} onClick={removeDrawer}>
            <div className="drawer__menu" ref={menuRef}>
                <Menu />
            </div>
        </div>
        <Backdrop ref={bdRef} closeBackdrop={removeDrawer}/>
        </>
    );
}

export default Drawer;