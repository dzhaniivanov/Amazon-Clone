import { useState, useEffect } from 'react';
import { db } from './firebase';
import Product from './Product';
import './TodayDeals.css'



function TodayDeals() {
    const [products, setProducts] = useState([]);

    const getProducts = () => {
        db.collection('promoProducts').onSnapshot((snapshot) => {
            let temp = [];

            temp = snapshot.docs.map((doc) => (
                {
                    id: doc.id,
                    product: doc.data(),
                }
            ));
            setProducts(temp);
        })
    }
    useEffect(() => {
        getProducts()
        console.log(products);
    }, [])

    return (
        <div className="deals__container">
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg" alt="deals image" className="deals__image" />
            <div className="deals__row">
                {
                    products.map((data) => (
                        <Product
                            key={data.id}
                            title={data.product.title}
                            price={data.product.price}
                            image={data.product.image}
                            rating={data.product.rating}
                        />
                    ))
                }
            </div>


        </div>
    )
}

export default TodayDeals;
