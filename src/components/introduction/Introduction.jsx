import React from "react";
import classes from "./Introduction.module.css"
import group from "../../assets/images/group.png"
import PageTitle from "../title/pageTitle/PageTitle.jsx";

const Introduction = () => {
    return(
        <>
        <PageTitle/>

    <div className={classes["introduction"]}>
            <div className={classes["introduction__text"]}>
            <img src={group} alt="Group"/>
            <p>We are one of the few companies which create their own products, and we are proud to mention SHIFT and eTenderi.</p>
            <p>We make software according to your wishes and needs. Our team of dedicated programmers and IT professionals will create an easy-to-use solution for you, with unique user experience and attractive design.</p>
            <p>So far we have met the requirements of the following clients: Agency for electronical communications and postal services, Societe Generale bank, Ministry of Economy, Ministry of Justice, Volcano and others.</p>
            </div>
        </div>

        </>
    )

}

export default Introduction;