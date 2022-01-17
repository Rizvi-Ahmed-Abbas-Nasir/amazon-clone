import React from 'react'
import './CheckProduct.css';
import { useStateValue } from "./StateProvider";


function CheckProduct({id,title, price, image}) {

    const  [{cart}, dispatch] = useStateValue();

    const removeFromCart = () => {

        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id,
        })

    }

    return (
        <div className='CheckOutProduct'>
            <img className='CheckOutImage' src={image} alt=''/>

            <div className='Checkout--Info'>
                <p className='Checkout--title'>{title}</p>
                <p className='Checkout--price'>
                    <bold></bold>
                    <strong>{price}</strong>
                </p>
                <button onClick={removeFromCart}>Remove From Cart</button>
            </div>
            
        </div>
    )
}

export default CheckProduct
