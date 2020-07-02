import React from "react";

import { data } from "../../data/services";

import "./Services.scss";

const Services = () => {
    return (
        <div className='services'>
            <div className='services-heading'>OUR SERVICE</div>
            <div className='services-features'>
                {data.map((el, key) => (
                    <div key={key} className='services-feature'>
                        <div className='service-feature-title'>
                            {el.heading}
                        </div>
                        <div className='service-feature-text'>{el.text}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
