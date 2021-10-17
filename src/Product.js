import React from 'react';
import './Product.css'

function Product({id,title, price, image}) {
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
            

                <p className="product__price">
                <bold>Price: ₹</bold>
                <strong> {price}</strong>
                </p>
                

                <img className="product__image"  src={image} alt=""/>
            </div>
                <button className="product__button">Add To Cart</button>
            
        </div>
    )
};

export default Product
