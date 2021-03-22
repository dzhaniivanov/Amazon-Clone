import React from 'react';
import './Checkout.css'
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import ProductCart from './ProductCart';

function Checkout() {
    const [{ basket, loggedinuser }, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_D2_45M_en_US_1x._CB418309979_.jpg" alt="amazon adv" className="checkout__ad" />

                {
                    basket.length === 0 ? (
                        <div>
                            <h3>Hey, {loggedinuser?.email}</h3>
                            <h2 className="checkout_title">Your shopping basket is empty.</h2>
                            <p>You have no items in your basket. Buy one.</p>
                        </div>
                    ) : (
                        <div>
                            <h3>Hey, {loggedinuser?.email}</h3>
                            <h2 className="shoppingbaskettitle">Items in the Shopping Basket</h2>
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
                    )
                }

            </div>
            {
                basket.length > 0 && (
                    <div className="checkout_right">
                        <Subtotal />
                    </div>
                )
            }


        </div>
    )
}

export default Checkout;