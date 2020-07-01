import React from "react";

import "./AppBar.scss";

const AppBar = () => {
    return (
        <div className='app-bar'>
            <div className='app-bar-logo'>Logo</div>
            <ul className='app-bar-tabs'>
                <li className='app-bar-tab'>a</li>
                <li className='app-bar-tab'>a</li>
                <li className='app-bar-tab'>a</li>
            </ul>
        </div>
    );
};

export default AppBar;
