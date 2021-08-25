import React from 'react';
import './WelcomeScreen.css';

function WelcomeScreen(props) {
    return (
      <div className="welcome">
        <div className="welcome__img--background"></div>
        <div className="welcome__img--background"></div>
        <div className="welcome__main">
          <div className="welcome__blob"></div>
        </div>
        <div className="welcome__text">
            <p>
              junior<br></br>react<br></br>developer
            </p>
          </div>
      </div>
    );
}

export default WelcomeScreen;