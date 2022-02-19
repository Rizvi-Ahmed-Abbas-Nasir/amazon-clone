//Payment.js
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CurrencyFormat from "react-currency-format";
import CheckProduct from "./CheckProduct";
import "./Payment.css";
import { getCartTotal } from "./reducer";
import { useStateValue } from "./StateProvider";
import { useHistory } from "react-router-dom";

function Payment() {
  const [{ cart, user }, dispatch] = useStateValue();
  const history = useHistory();

  const stripe = useStripe();
  const Elements = useElements();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState("");
  const [succeeded, setSucceeded] = useState(false);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    // generate the special stripe secret which allows us to charge a customer
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        //stripe expect total amount in base currencies like Rupees to paise
        url: `/payments/create?total=${getCartTotal(cart) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [cart]);

  console.log('Client Secrect:', clientSecret);
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: Elements.getElement(CardElement),
      }
    }).then( ({PaymentIntent}) => {
        setSucceeded(true);
        setError(null);
        setProcessing(false)
        dispatch(
          {
            type: 'EMPTY_CART',
          }
        )

        history.replace('/orders')
    })
  };

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment--container">
        {/* Delivery Address */}
        <div className="payment--section">
          <div className="payment--title">
            <h3>Delivery Address:</h3>
          </div>
          <div className="payment--address">
            <p>{user?.email}</p>
            <p>Falt No.301, Hiranandani</p>
            <p>Andheri, India</p>
          </div>
        </div>
        {/* Cart Review */}
        <div className="payment--section">
          <div className="payment--title">
            <h3>Review Item in Cart:</h3>
          </div>
          <div className="payment--items">
            {cart.map((item) => (
              <CheckProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
              />
            ))}
          </div>
        </div>
        {/* Payment Gateway */}
        <div className="payment--section">
          <div className="payment--title">
            <h3>Payment Method:</h3>
          </div>
          <div className="payment--details">
            {/* Stripe Secret Code */}
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment--priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <p>
                        Subtotal ({cart.length} items):<strong>{value}</strong>{" "}
                      </p>
                    </>
                  )}
                  decimalScale={2}
                  value={getCartTotal(cart)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"₹"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {/* Errors */}
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;