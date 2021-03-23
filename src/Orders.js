import React, { useEffect, useState } from 'react';
import './Orders.css';
import { db } from './firebase';
import { useStateValue } from './StateProvider';
import Order from './Order.js'

function Orders() {
    const [{ basket, loggedinuser }, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if (loggedinuser) {
            db.collection('users')
                .doc(loggedinuser?.uid)
                .collection('orders')
                .orderBy('created', 'desc')
                .onSnapshot(snapshot => (
                    setOrders(snapshot.docs.map(doc => ({
                        id: doc.id,
                        data: doc.data()
                    })))
                ))
        } else {
            setOrders([])
        }

    }, [loggedinuser])


    return (
        <div className="orders">
            <h1>Your Orders</h1>
            <div className="orders__order">
                {orders?.map(order => (
                    <Order order={order} />
                ))}
            </div>
        </div>
    )
}
export default Orders;