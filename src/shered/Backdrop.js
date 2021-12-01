import React from 'react';

import './Backdrop.css';

const Backdrop = props => {
    return <div className={props.showBackdrop ? "backdrop" : "backdrop backdrop--close"} onClick={props.closeBackdrop}></div>
}

export default Backdrop;