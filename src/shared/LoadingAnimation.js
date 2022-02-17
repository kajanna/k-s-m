import React from 'react';

import './LoadingAnimation.css';

function LoadingAnimation(props) {
  return (
    <div className="loadingAnimation">
      <div className="loadingAnimation__main">
        <div className="loadingAnimation__ring"></div>
        <div className="loadingAnimation__text">SENDING...</div>
      </div>
    </div>
  );
}

export default LoadingAnimation;