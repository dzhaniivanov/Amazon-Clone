import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import './Subtotal.css';
import { useHistory } from 'react-router-dom';
import {getCartTotal} from './reducer';

function Subtotal() {

    


    const history = useHistory();

    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className="subtotal">
            {/* price */}
            <CurrencyFormat
                renderText={(value) => (
                    <p>
                        Subtotal({basket.length} items) : <strong>{`${value}`}</strong>
                    </p>

                )
                }
                decimalScale={2}
                value={getCartTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button className="checkout__button" onClick={e=>history.push('/payment')}>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal;