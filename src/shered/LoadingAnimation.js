import React from 'react';
import  { createPortal } from 'react-dom';

import './LoadingAnimation.css';

function LoadingAnimation(props) {
    return createPortal(
        <div className="loadingAnimation">
            <div className="loadingAnimation__ring"></div>
            <div className="loadingAnimation__text">Sending...</div>
        </div>,
        document.getElementById('loading-animation')
    );
}

export default LoadingAnimation;