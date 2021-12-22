import React from 'react'
import './CheckProduct.css';

function CheckProduct({id,title, price, image}) {
    return (
        <div className='CheckOutProduct'>
            <img className='CheckOutImage' src={image} alt=''/>

            <div className='Checkout--Info'>
                <p className='Checkout--title'>{title}</p>
                <p className='Checkout--price'>
                    <bold></bold>
                    <strong>{price}</strong>
                </p>
                <button>Remove From Cart</button>
            </div>
            
        </div>
    )
}

export default CheckProduct
