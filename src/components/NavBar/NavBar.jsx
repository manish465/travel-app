import React from "react";

import img from "../../assets/9.jpeg";

import { motion } from "framer-motion";

import "./NavBar.scss";

import { data } from "../../data/navData";

import { Link } from "react-router-dom";

const NavBar = ({ navBar, setNavBar }) => {
    return (
        <motion.div
            initial={{ y: "-100%", skewY: 6 }}
            animate={{ y: 0, skewY: 0 }}
            exit={{ y: "-100%", skewY: -6 }}
            transition={{ duration: 0.4, ease: "circInOut" }}
            className='nav-bar'>
            <div className='nav-bar-navs'>
                {data.map((el, key) => (
                    <Link
                        onClick={() => setNavBar(!navBar)}
                        key={key}
                        to={el.path}
                        className='nav-bar-nav'>
                        {el.name}
                    </Link>
                ))}
            </div>
            <div className='nav-bar-motion-paper'>
                <img src={img} alt='' />
            </div>
        </motion.div>
    );
};

export default NavBar;
