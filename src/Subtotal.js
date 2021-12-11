import React from 'react'
import { useStateValue } from './StateProvider';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
function Subtotal() {
    const  [{cart}, dispatch] = useStateValue();
    return (
        <div className="Subtotal">


        <CurrencyFormat
            renderText= {(value) => (
            <>

            <p>Subtotal ({cart.length} Item ): <strong></strong></p>
            <small className="Subtotal__gift">
                <input type="checkbox" /> This Order Contain a Gift
            </small>
       </>
    )}
    decimalScale = {2}
    value = {0}
    displayType = {"text"}
    prefix= {"₹"}
/>
            <button>Proced To Buy</button>
        </div>
    );
}

export default Subtotal
