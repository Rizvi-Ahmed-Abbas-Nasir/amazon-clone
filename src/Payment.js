import {CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, {useState , useEffect} from 'react';
import CheckProduct from './CheckProduct';
import './Payment.css';
import { useStateValue } from './StateProvider';
import { getCartTotal } from './reducer';
import CurrencyFormat from 'react-currency-format';

function Payment()
{
    const  [{cart,user}, dispatch] = useStateValue();
    const stripe = useStripe
    const elements = useElements
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [succeeded, setSucceeded] = useState(false);
    const[processing, setProcessing] = useState("");

    useEffect(() =>{
        // Generate the special stripe secret which allows us to change a customer
        const getClientSecret = async () => {
            const response = await axios;
        }
        getClientSecret();

    },[cart])

    const handleSubmit =  async (event) =>{
        event.preventDefualt();
        setProcessing(true);

        // const payLoad = await stripe ();
        
    };

    const handlechange = (event) =>{
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
        
    };

    return(
        <div className='Payment'>
            <div className='Payment--container'>       
                <div className='payment--section'>
                    <div className='payment--title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment--address'>
                        <p>{user?.email}</p>
                        <p>falt 301 Hiranandani</p>
                        <p>Andheri, India</p>
                    </div>
                </div>
                <div className='payment--section'>
                    <div className='payment--title'>
                        <h3>Review your Item in cart:</h3>
                    </div>
                        <div className='payment--item'>
                        {cart.map(item => (
                        <CheckProduct
                        id = {item.id}
                        title = {item.title}
                        image={item.image}
                        price={item.price}
                        
                        />
                    ))}    
                        </div> 
                    
                </div>
                <div className='payment--section'>
                        <div className='payment--title'>
                            <h3>Payment Method:</h3>
                        </div>        
                            <div className='payment--details'>
                                {/* {stripe} */}
                                <form onSubmit={handleSubmit}>
                                    <CardElement onChange={handlechange} />
                                    <div className='payment--priceContainer'>
                                    <CurrencyFormat
                                    renderText= {(value) => (
                                    <>

                                    <p>Subtotal ({cart.length} item):<strong>{value}</strong>{""} </p>
                                        
                                    </>

                                    )}
                                decimalScale = {2}
                                value = {getCartTotal(cart)}
                                displayType = {"text"}
                                thousandSeparator = {true}
                                prefix = {"₹"}
                                />      
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>processing</p>: "buy Now" }</span> 
                                   
                                </button>
                                    </div>
                                        {error && <div>{error}</div>}
                                </form>
                            </div>
                </div>
            </div>
        </div>
    )

}

export default Payment