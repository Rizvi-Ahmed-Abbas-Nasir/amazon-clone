import React from 'react';
import './Product.css'
import { useStateValue } from './StateProvider';

function Product({id,title, price, image}) {
//API
    const  [{cart}, dispatch] = useStateValue();

    console.log("In side Cart",cart);

    const AddToCart= () =>{
       dispatch({
        type: "ADD_TO_CART",
        item: {
        id: id,
        title: title,
        price: price,
        image: image,
           }
        }

       );

    }
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
            

                <p className="product__price">
                <bold>price: ₹</bold>
                <strong> {price}</strong>
                </p>
                

                <img className="product__image"  src={image} alt=""/>
            </div>
                <button className="product__button" onClick = {AddToCart}> Add To Cart</button>
            
        </div>
    )
};

export default Product

