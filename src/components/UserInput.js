import React from 'react';

import './UserInput.css'

function UserInput(props) {
    return (
        <div className="user-input">
            
            <input />
            <label>{props.name}</label>
            <p className="user-input--error-text">Error!</p>
        </div>
    );
}

export default UserInput;