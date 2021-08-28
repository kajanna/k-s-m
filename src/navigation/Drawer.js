import React from 'react';

import Menu from './Menu'
import './Drawer.css';

function Drawer(props) {
    return (
        <div className="drawer" onClick={props.onClose}>
            <Menu />
        </div>
    );
}

export default Drawer;