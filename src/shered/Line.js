import React from 'react';
import OnMountScale from './OnMountScale';
import './Line.css'

function Line(props) {
    return (
        <OnMountScale>
        <div className={`line ${props.white ? 'line--white': 'line--pink'} `}></div>
        </OnMountScale>

    );
}

export default Line;