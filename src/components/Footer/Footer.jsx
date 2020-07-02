import React from "react";

import "./Footer.scss";

import FacebookIcon from "@material-ui/icons/Facebook";
import MessageIcon from "@material-ui/icons/Message";
import TelegramIcon from "@material-ui/icons/Telegram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import TwitterIcon from "@material-ui/icons/Twitter";

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-title'>CONTACT US</div>
            <div className='footer-content'>
                <div className='footer-content-contact'>
                    <div className='footer-content-contact-phone'>
                        abc@gmail.com
                    </div>
                    <div className='footer-content-contact-email'>
                        +91 6767439283
                    </div>
                </div>
                <ul className='footer-content-social'>
                    <li className='footer-content-social-icon'>
                        <FacebookIcon />
                    </li>
                    <li className='footer-content-social-icon'>
                        <MessageIcon />
                    </li>
                    <li className='footer-content-social-icon'>
                        <TelegramIcon />
                    </li>
                    <li className='footer-content-social-icon'>
                        <WhatsAppIcon />
                    </li>
                    <li className='footer-content-social-icon'>
                        <TwitterIcon />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;
