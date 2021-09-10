import React from 'react';

import OnHoverScale from './OnHoverScale';
import './Button.css'

function Button(props) {
    return (
        <OnHoverScale>
        <button className={`button ${ props.white ? "button-white" : "button-brown"}`}>
            {props.text}
        </button>
        </OnHoverScale>
    );
}

export default Button;