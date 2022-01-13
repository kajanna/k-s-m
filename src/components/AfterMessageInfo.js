import React from 'react';

import Button from '../shered/Button';

import './AfterMessageInfo.css'

function AfterMessageInfo({ onClear, error }) {
    return (
        <div className="afterMessageInfo">
           <p>{error ? error : "Your message has been send"}</p>
           <div className="afterMessageInfo__button">
             <Button 
                onClick={onClear} 
                text={error ? "Please try again" :"send another message"}/>
             </div> 
        </div>
    );
}

export default AfterMessageInfo;