import React from "react";
import "./SectionsTitle.scss";

const SectionsTitle = ({   title = "",
                           color = "",
                           className = ""}) => {

    return(
        <>
            <h3 className={`__section-title ${className} ${color}`}>{title}</h3>
        </>
    )
}


export default SectionsTitle;