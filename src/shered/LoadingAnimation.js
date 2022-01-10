import React from 'react';

import './LoadingAnimation.css';

function LoadingAnimation(props) {
    return (
        <div className="loadingAnimation">
            <div className="loadingAnimation__ring"></div>
            <div className="loadingAnimation__text">Sending...</div>
        </div>
    );
}

export default LoadingAnimation;