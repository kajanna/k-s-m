import React from 'react';

import Button from '../shered/Button';

import './AfterMessageInfo.css'

function AfterMessageInfo(props) {
    return (
        <div className="afterMessageInfo">
           <p>Your message has been send/Twoja wiadomość została wysłana</p>
           <div className="afterMessageInfo__button">
             <Button onClick={props.clearMessageIsSend} text='send another message'/>
             </div> 
        </div>
    );
}

export default AfterMessageInfo;