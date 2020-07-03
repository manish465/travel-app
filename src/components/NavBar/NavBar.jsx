import React from "react";

import img from "../../assets/9.jpeg";

import "./NavBar.scss";

import { data } from "../../data/navData";

const NavBar = () => {
    return (
        <div className='nav-bar'>
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
        </div>
    );
};

export default NavBar;
