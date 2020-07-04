import React, { useState } from "react";

import { data } from "../../data/services";

import { motion } from "framer-motion";

import "./Services.scss";

const Services = () => {
    const [heading, setHeading] = useState("OUR SERVICE");

    return (
        <div className='services'>
            <div className='services-heading'>{heading}</div>
            <div className='services-features'>
                {data.map((el, key) => (
                    <motion.div
                        drag
                        dragConstraints={{
                            top: -100,
                            left: -100,
                            right: 100,
                            bottom: 100,
                        }}
                        onMouseEnter={() => setHeading("TRY TO DRAG US")}
                        onMouseLeave={() => setHeading("OUR SERVICE")}
                        key={key}
                        className='services-feature'>
                        <div className='service-feature-title'>
                            {el.heading}
                        </div>
                        <div className='service-feature-text'>{el.text}</div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Services;
