import React from "react";
import "./ContactInformation.css";
import logo from "../../../assets/images/logo.png";
import angel from "../../../assets/images/angel.png";
import pointer from "../../../assets/images/pointer.png";
import amplitudo from "../../../assets/images/amplitudo.png";
const ContactInformation = () => {
    return(
        <div className="__footer-map">
            <div className="__footer-map__box">
            <img className="logo" src={logo} alt="Amplitudo Logo"/>
            <p>Hello from the center of the world!</p>
            <img className="smile" src={angel} alt="Smile Icon"/>
            <div className="dot"></div>
            <img className="pointer" src={pointer} alt="Pointer"/>
            </div>

            <div className="__footer-map__info">
                <img src={amplitudo} alt="Amplitudo Logo"/>
                <p>Boulevard of St. Petar Cetinjski 56</p>
                <p>Podgorica, Montenegro</p>
                <hr/>
                <div>
                <a href="mailto:info@amplitudo.me">info@amplitudo.me</a>
                <a href="tel:+38220223244">+382 20 223 244</a>
                </div>
            </div>
        </div>
    )
}

export default ContactInformation;