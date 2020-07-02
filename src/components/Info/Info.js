import React, { useState } from "react";

import "./Info.scss";

import image1 from "../../assets/9.jpeg";
import image2 from "../../assets/cinque-terre-hd-wallpaper.jpg";

const Info = () => {
    const [changeImg, setChangeImg] = useState(true);

    return (
        <div className='info'>
            <div className='info-image'>
                <img src={changeImg ? image1 : image2} alt='' />
            </div>
            <div className='info-decs'>
                <div className='info-decs-heading'>Discover New Horizon</div>
                <div className='info-decs-text'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Eaque, ut debitis culpa architecto cupiditate expedita,
                    dolorem consequatur nostrum iusto officiis reprehenderit.
                    Natus est harum asperiores dicta distinctio impedit nulla a.
                </div>
                <div className='info-decs-button'>
                    <div
                        onMouseEnter={() => setChangeImg(!changeImg)}
                        className='info-decs-button-one'>
                        Contact us
                    </div>
                    <div
                        onMouseEnter={() => setChangeImg(!changeImg)}
                        className='info-decs-button-two'>
                        Learn more
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info;
