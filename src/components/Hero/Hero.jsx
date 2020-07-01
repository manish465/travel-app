import React from "react";

import "./Hero.scss";

const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero-heading'>EXPLORE THE WORLD</div>
            <div className='hero-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                quod sed, molestiae earum sapiente, debitis blanditiis adipisci
                explicabo totam fugit deserunt optio nulla repellat facere
                cumque dolor dignissimos esse ipsum.
            </div>
            <div className='hero-button'>
                <div className='hero-button-one'>GET STARTED</div>
                <div className='hero-button-two'>LEARN MORE</div>
            </div>
        </div>
    );
};

export default Hero;
