import React from 'react';
import Product from './Product';
import './Home.css';

function Home() {
    return (
        <div className="home">
            <img
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt=""
            />
            <div className="home__row">
                <Product
                    id="1"
                    title="Shrek 4-Movie Collection"
                    price={12.22}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/51hLiUECCjL._AC_SR400,600_.jpg"
                />
                <Product
                    id="1"
                    title="Kung Fu Panda: 3-Movie Collection [Blu-ray]"
                    price={15.33}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51ADAKd82rL._AC_SR400,600_.jpg"
                />
                <Product
                    id="1"
                    title="Philips Sonicare"
                    price={132.76}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/81U-eoBkhnL._SL1500_.jpg"
                />
            </div>
        </div>
    )
}

export default Home;