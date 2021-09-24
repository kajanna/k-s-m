import React from 'react';

import OnHoverScale from './OnHoverScale';
import './Button.css'

function Button(props) {
    return (
        <OnHoverScale>
        <button 
            type={props.type} 
            className={`button ${ props.white ? "button-white" : "button-brown"}`}
            onClick={props.onClick}>
            {props.text}
        </button>
        </OnHoverScale>
    );
}

export default Button;