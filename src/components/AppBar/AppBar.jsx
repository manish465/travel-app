import React, { useEffect } from "react";

import "./AppBar.scss";

import CardTravelIcon from "@material-ui/icons/CardTravel";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import PersonIcon from "@material-ui/icons/Person";
import MenuIcon from "@material-ui/icons/Menu";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import CloseIcon from "@material-ui/icons/Close";

const AppBar = ({ nightMode, setNightMode, navBar, setNavBar }) => {
    useEffect(() => {
        if (nightMode) {
            document.documentElement.style.setProperty(
                "--text-color-primary",
                "#e2f3f5",
            );
            document.documentElement.style.setProperty(
                "--primary-color",
                "#0e153a",
            );
            document.documentElement.style.setProperty(
                "--secondary-color",
                "#3d5af1",
            );
            document.documentElement.style.setProperty(
                "--accent-color",
                "#22d1ee",
            );
        } else {
            document.documentElement.style.setProperty(
                "--text-color-primary",
                "#40514e",
            );
            document.documentElement.style.setProperty(
                "--primary-color",
                "#f5f5f5",
            );
            document.documentElement.style.setProperty(
                "--secondary-color",
                "#30e3ca",
            );
            document.documentElement.style.setProperty(
                "--accent-color",
                "#2f89fc",
            );
        }
    }, [nightMode]);

    return (
        <div className='app-bar'>
            <div className='app-bar-logo'>
                <CardTravelIcon />
                <span className='app-bar-logo-text'>TRAVELz.</span>
            </div>
            <div className='app-bar-tabs'>
                <div
                    onClick={() => setNightMode(!nightMode)}
                    className='app-bar-tab'>
                    {nightMode ? <WbSunnyIcon /> : <NightsStayIcon />}
                </div>
                <div onClick={() => setNavBar(!navBar)} className='app-bar-tab'>
                    {navBar ? <CloseIcon /> : <MenuIcon />}
                </div>
                <div className='app-bar-tab'>
                    <PersonIcon />
                </div>
            </div>
        </div>
    );
};

export default AppBar;
