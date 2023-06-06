import React from "react";
import "./InterestingTopics.css"
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
        <div className="__interesting-topics">
            <SectionsTitle className="__interesting-topics__title" title="You might be interested"/>
            <div className="__interesting-topics__images">
                {images.map((element, index) => (
                    <div key={index} className="__interesting-topics__images__bg">
                        <img src={group} alt={element.title}/>
                        <h3>{element.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default InterestingTopics;