import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import CheckProduct from './CheckProduct';
import { useStateValue } from "./StateProvider";

function Checkout() {

    const  [{cart}, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Jupiter21P1/pay_stripe_desk.png" alt="" />
                <div>
                    <h3 className="checkout__title">Your Shopping Detials</h3>
                    {cart.map(item => (
                        <CheckProduct
                        id = {item.id}
                        title = {item.title}
                        image={item.image}
                        price={item.price}
                        
                        />
                    ))}
                    
                    {/* Cart Item Here */}

                </div>
            </div>
            <div className="checkout__right">
            <Subtotal  />
            
            </div>
        </div>
    )
}

export default Checkout
