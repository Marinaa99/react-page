import React from "react";
import classes from "./Footer.module.scss";
import arrow from "../../assets/images/arrow.svg"
import ContactInformation from "./contactInformation/ContactInformation.jsx";
import SocialMediaIcons from "./socialMediaIcons/SocialMediaIcons.jsx";

const Footer = () => {
    return (
        <footer>
            <div className={classes["footer-bg"]}>
                <h3>Interested in our services?</h3>
                <div className={classes["footer-bg__arrow"]}>
                    <img src={arrow} alt="Arrow"/>
                    <span>contact us</span>
                </div>

                <ContactInformation/>

                <SocialMediaIcons/>

                <div className={classes["footer-bg__paragraph"]}>
                    <p>© All rights reserved 2019 Amplitudo Ltd.</p>
                </div>
            </div>
        </footer>
    )
}


export default Footer;