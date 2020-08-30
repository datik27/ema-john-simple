import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product'
import Cart from '../Cart/Cart';
import { addToDatabaseCart } from '../../utilities/databaseManager';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    //console.log(fakeData)
    const [cart, setCart] = useState([]);

    const handleProduct = (product) => {
        console.log("hcjhzdbcgsjhv", product)
        const newCart = [...cart, product];
        setCart(newCart);
        const sameProduct = newCart.filter(pd => pd.key === product.key)
        const count = sameProduct.length
        addToDatabaseCart(product.key, count)
    }

    return (
        <div className="shop-container">
            <div className="product-container">
            
            {
              products.map(pd => <Product
                key ={pd.key}
                showButton ={true} 
                handleProduct = {handleProduct}
                product={pd}></Product>)
            }
            
            </div>
            <div className="cart-container">
                <Cart cart = {cart}></Cart>
    
            </div>
            
        </div>
    );
};

export default Shop;