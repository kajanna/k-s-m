import React, { useEffect, useRef,  } from 'react';
import  { createPortal } from 'react-dom';
import { gsap } from 'gsap'
import Menu from './Menu'
import Backdrop from '../shered/Backdrop';

import './Drawer.css';

const Drawer = (props) => {

    const drawerRef = useRef();
    const menuRef = useRef();
    const bdRef = useRef();
    
    useEffect(() => {
     gsap.timeline()
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
       gsap.timeline()
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

    return createPortal(
        <>
        <div className="drawer" ref={drawerRef} onClick={removeDrawer}>
            <div className="drawer__menu" ref={menuRef}>
                <Menu />
            </div>
        </div>
        <Backdrop ref={bdRef} closeBackdrop={removeDrawer}/>
        </>, 
        document.getElementById('drawer')
        );
}

export default Drawer;
