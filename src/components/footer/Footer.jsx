import React from "react";
import "./Footer.css";
import arrow from "../../assets/images/arrow.svg"
import ContactInformation from "./contactInformation/ContactInformation.jsx";
import SocialMediaIcons from "./socialMediaIcons/SocialMediaIcons.jsx";

const Footer = () => {
    return (

            <div className="__footer-bg">
                <h3>Interested in our services?</h3>
                <div className="__footer-bg__arrow">
                    <img src={arrow} alt="Arrow"/>
                    <span>contact us</span>
                </div>

                <ContactInformation/>

                <SocialMediaIcons/>

                <div className="__footer-bg__paragraph">
                    <p>© All rights reserved 2019 Amplitudo Ltd.</p>
                </div>
            </div>

    )
}


export default Footer;