import React, { useState, useEffect, useMemo } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import Product from './Product';
import { db } from './firebase';


function Search() {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');



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

    const productsFilter = useMemo(() => {
        if (!search) {
            return products;
        }
        console.log(products);
        return products.filter(x => {
            return x.title.toLowerCase().includes(search.toLowerCase())
        })
    }, [search, products])




    return (
        <div className="header__search">
            <input type="text"
                className="header__searchInput"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)} />
            {productsFilter.map(x => {
                <Product
                    key={x.id}
                    title={x.product.title}
                    price={x.product.price}
                    rating={x.product.rating}
                    image={x.product.image}
                />
            })}
            <SearchIcon className="header__searchIcon" />
        </div>
    )
}

export default Search;
