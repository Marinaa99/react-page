import React from "react";
import "../Title.css";

const SectionsTitle = ({title, className}) => {
    return(
        <>
            <h3 className={className}>{title}</h3>
        </>
    )
}


export default SectionsTitle;