import React from "react";

import img from "../../assets/9.jpeg";

import { motion } from "framer-motion";

import "./NavBar.scss";

import { data } from "../../data/navData";

const NavBar = () => {
    return (
        <motion.div
            initial={{ y: "-100%", skewY: 6 }}
            animate={{ y: 0, skewY: 0 }}
            exit={{ y: "-100%", skewY: -6 }}
            transition={{ duration: 0.4, ease: "circInOut" }}
            className='nav-bar'>
            <div className='nav-bar-navs'>
                {data.map((el, key) => (
                    <div key={key} className='nav-bar-nav'>
                        {el}
                    </div>
                ))}
            </div>
            <div className='nav-bar-motion-paper'>
                <img src={img} alt='' />
            </div>
        </motion.div>
    );
};

export default NavBar;
