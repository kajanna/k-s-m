import React from 'react';

import { HashLink } from 'react-router-hash-link';

import './Footer.css'
function Footer(props) {
    return (
        <div className="footer">
            <div className="footer__nav-element">
            <HashLink smooth to="/#top">
            <div className="footer__nav-element--bg">
                &#94;
                </div>
           
            </HashLink>
            </div>
            <p>copyright by Kaja Szokalska 2022</p>
        </div>
    );
}

export default Footer;