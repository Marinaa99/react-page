import React from "react";
import "./SocialMediaIcons.css";
import facebook from "../../../assets/images/facebook.png";
import instagram from "../../../assets/images/instagram.png";
import linkedin from "../../../assets/images/linkedin.png";
import twitter from "../../../assets/images/twitter.png";
import be from "../../../assets/images/be.png";


const SocialMediaIcons = () => {
    const socialMediaIcons = [
        { src: facebook, alt: 'Facebook Icon' },
        { src: instagram, alt: 'Instagram Icon' },
        { src: linkedin, alt: 'Linkedin Icon' },
        { src: twitter, alt: 'Twitter Icon' },
        { src: be, alt: 'Be Icon' }
    ]
    return(
        <>
            <p className="paragraph">Follow us on social media</p>
            <div className="__social-media">
                {socialMediaIcons.map((icon, index) => (
                    <a key={index}>
                        <img className="flip-effect" src={icon.src} alt={icon.alt} />
                    </a>
                ))}
            </div>
        </>
    )
}

export default SocialMediaIcons;