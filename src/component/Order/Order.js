import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';

const Order = () => {
const {cart, setCart} = useState([]);
    useEffect(() => {
        const saveCard = getDatabaseCart();
        const productKeys = Object.keys(saveCard)
        const counts = productKeys.map(key => saveCard[key]);
    })
    return (
        <div>
            <h1>this is order review</h1>
        </div>
    );
};

export default Order;