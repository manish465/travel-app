import React, { useEffect } from "react";

import "./AppBar.scss";

import { motion } from "framer-motion";

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
            <motion.div
                whileHover={{ scale: 1.5 }}
                whileTap={{ color: "#fff" }}
                className='app-bar-logo'>
                <CardTravelIcon />
                <span className='app-bar-logo-text'>TRAVELz.</span>
            </motion.div>
            <div className='app-bar-tabs'>
                <motion.div
                    whileHover={{ scale: 1.5, rotateZ: 360 }}
                    onClick={() => setNightMode(!nightMode)}
                    className='app-bar-tab'>
                    {nightMode ? <WbSunnyIcon /> : <NightsStayIcon />}
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.5 }}
                    onClick={() => setNavBar(!navBar)}
                    className='app-bar-tab'>
                    {navBar ? <CloseIcon /> : <MenuIcon />}
                </motion.div>
                <motion.div whileHover={{ scale: 1.5 }} className='app-bar-tab'>
                    <PersonIcon />
                </motion.div>
            </div>
        </div>
    );
};

export default AppBar;
