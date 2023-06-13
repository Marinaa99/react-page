import React from "react";
import classes from "./Products.module.css";
import computer from "../../assets/images/computer.png"
import shift from "../../assets/images/shift.png"
import ProductsTitle from "../title/productsTitle/ProductsTitle.jsx";

const Products = () => {
    const products = [
        {
            title: "Via",
            description: "Business travel automatization software.",
            src: computer
        },
        {
            title: "Shift",
            description: "Central base of transfered mobile and fixed numbers.",
            src: shift
        }
    ]
    return(
        <>
        <ProductsTitle/>
        <div className={classes["products"]}>
            {products.map((element, index) => (
                <div key={index} className={classes["products__bg"]}>
                    <h3>{element.title}</h3>
                    <p>{element.description}</p>
                    <img src={element.src} alt={element.title} />
                </div>
            ))}
        </div>
        </>
    )

}

export default Products;