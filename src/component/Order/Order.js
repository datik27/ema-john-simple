import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData'
import ViewCart from '../ViewCart/ViewCart';


const Order = () => {
const [cart, setCart] = useState([]);
    useEffect(() => {
        const saveCard = getDatabaseCart();
        const productKeys = Object.keys(saveCard)
        const cardProducts = productKeys.map(key => {
            const products = fakeData.find(pd => pd.key === key)
            products.quantity = saveCard[key]
            return products;
        });
       setCart(cardProducts);
    }, [])
    return (
        <div>
            <h1>this is order review {cart.length}</h1>
           {
               cart.map(pd =>  <ViewCart product = {pd}></ViewCart>)
           }
        </div>
    );
};

export default Order;