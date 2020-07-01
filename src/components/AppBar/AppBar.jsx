import React from "react";

import "./AppBar.scss";

import CardTravelIcon from "@material-ui/icons/CardTravel";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import PersonIcon from "@material-ui/icons/Person";
import MenuIcon from "@material-ui/icons/Menu";

const AppBar = () => {
    return (
        <div className='app-bar'>
            <div className='app-bar-logo'>
                <CardTravelIcon />
                <span className='app-bar-logo-text'>TRAVELz.</span>
            </div>
            <div className='app-bar-tabs'>
                <div className='app-bar-tab'>
                    <NightsStayIcon />
                </div>
                <div className='app-bar-tab'>
                    <MenuIcon />
                </div>
                <div className='app-bar-tab'>
                    <PersonIcon />
                </div>
            </div>
        </div>
    );
};

export default AppBar;
