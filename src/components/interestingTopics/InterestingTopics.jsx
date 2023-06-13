import React from "react";
import classes from "./InterestingTopics.module.css"
import SectionsTitle from "../title/sectionsTitle/SectionsTitle.jsx";
import group from "../../assets/images/group.png"

const InterestingTopics = () => {
    const images = [
        {
            title: "Mobile apps development",
        },
        {
            title: "Website development",
        },
        {
            title: "SaaS",
        }
    ]
    return(
        <div className={classes["interesting-topics"]}>
            <SectionsTitle className={classes["interesting-topics__title"]} title="You might be interested" color="dark"/>
            <div className={classes["interesting-topics__images"]}>
                {images.map((element, index) => (
                    <div key={index} className={classes["interesting-topics__images__bg"]}>
                        <img src={group} alt={element.title}/>
                        <h3>{element.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default InterestingTopics;