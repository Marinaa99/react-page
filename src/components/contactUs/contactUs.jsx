import React from "react";
import "./ContactUs.css"
import SectionsTitle from "../title/sectionsTitle/SectionsTitle.jsx";
import parrot from "../../assets/images/parrot.png"

const ContactUs = () => {
    return(
        <div className="__contact-us">
    <SectionsTitle className="__contact-us__title" title="Like what you see?"/>
            <span>Let's talk about it.</span>
            <button>contact us</button>
            <img src={parrot} alt="Parrot"/>
        </div>
    )
}


export default ContactUs;