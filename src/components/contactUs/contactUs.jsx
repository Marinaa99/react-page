import React from "react";
import classes from "./ContactUs.module.scss";
import SectionsTitle from "../title/sectionsTitle/SectionsTitle.jsx";
import parrot from "../../assets/images/parrot.png"

const ContactUs = () => {
    return(
        <div className={classes["contact-us"]}>
    <SectionsTitle className={classes["__contact-us__title"]} title="Like what you see?" color="light"/>
            <span>Let's talk about it.</span>
            <button>contact us</button>
            <img src={parrot} alt="Parrot"/>
        </div>
    )
}


export default ContactUs;