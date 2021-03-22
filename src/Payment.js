import React from 'react';
import './Payment.css';
import { useStateValue } from './StateProvider';
import ProductCart from './ProductCart';

function Payment() {
    const [{ basket, loggedinuser }, dispatch] = useStateValue();
    return (
        <div className="payment">
            <div className="payment__container">
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

                </div>
            </div>
        </div>
    )
}

export default Payment;