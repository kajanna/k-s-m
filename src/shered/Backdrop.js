import React, { forwardRef } from 'react';

import './Backdrop.css';

const Backdrop = forwardRef((props, ref) => {
    return (
        <div className="backdrop" ref={ref} onClick={props.closeBackdrop}></div>
    );
})

export default Backdrop;