import React, { useEffect, useState } from 'react';
import './Payment.css';
import { useStateValue } from './StateProvider';
import ProductCart from './ProductCart';
import { Link, useHistory } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { getCartTotal } from './reducer';
import CurrencyFormat from 'react-currency-format';
import axios from './axios';
import { db } from './firebase';


function Payment() {
    const [{ basket, loggedinuser }, dispatch] = useStateValue();
    const history = useHistory();


    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState('');

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        /* special stripe,to charge the customer */
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${Math.round(getCartTotal(basket) * 100)}`
            })
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [basket])
    //console.log('secret is', clientSecret);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            //payment intent=payment confirm

            db.collection('users')
                .doc(loggedinuser?.uid)
                .collection('orders')
                .doc(paymentIntent.id)
                .set({
                    basket:basket,
                    amount:paymentIntent.amount,
                    created:paymentIntent.created
                })


            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type: 'EMPTY_BASKET'
            })

            history.replace('/orders')
        })
    }

    const handleChange = event => {
        /* listen for changes in ProductCart and display errors */
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "")
    }

    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout(<Link to="/checkout">{basket?.length} items</Link>)
                </h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Adress</h3>
                    </div>
                    <div className="payment__adress">
                        <p>{loggedinuser?.email}</p>
                        <p>adress</p>
                        <p>Bulgaria</p>
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__items">
                        {
                            basket.map(item => (
                                <ProductCart
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                        <div className="payment__details">
                            <form onSubmit={handleSubmit}>
                                <CardElement onChange={handleChange} />

                                <div className="payment__priceContainer">
                                    <CurrencyFormat
                                        renderText={(value) => (
                                            <h3>Order Total:{value}</h3>
                                        )}
                                        decimalScale={2}
                                        value={getCartTotal(basket)}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={"$"}
                                    />
                                    <button disabled={processing || disabled || succeeded}>
                                        <span>
                                            {processing ? <p>Processing</p> :
                                                "Buy Now"}
                                        </span>
                                    </button>
                                </div>
                                {/* errors */}
                                {error && <div>{error}</div>}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment;