import React from 'react';

import { HashLink } from 'react-router-hash-link';

import './Footer.css'
function Footer(props) {
    return (
        <div className="footer">
            <HashLink smooth to="/#top">
            <div className="footer__nav-element">
                &#94;
            </div>
            </HashLink>
            <p>copyright by Kaja Szokalska 2021</p>
        </div>
    );
}

export default Footer;