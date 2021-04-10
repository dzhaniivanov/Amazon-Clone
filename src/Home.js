import React, { useState, useEffect } from 'react';
import Product from './Product';
import './Home.css';
import { db } from './firebase';


function Home() {
    const [products, setProducts] = useState([]);

    const getProducts = () => {
        db.collection('products').onSnapshot((snapshot) => {
            let tempProducts = [];

            tempProducts = snapshot.docs.map((doc) => (
                {
                    id: doc.id,
                    product: doc.data(),

                }
            ));
            setProducts(tempProducts);
        })
    }

    useEffect(() => {
        getProducts();
    }, [])

    return (
        <div className="home">
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg" alt="home wallpaper" className="home__image" />
            <div className="home__row">
                {
                    products.map((data) => (
                        <Product
                            key={data.id}
                            title={data.product.title}
                            price={data.product.price}
                            rating={data.product.rating}
                            image={data.product.image}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Home;