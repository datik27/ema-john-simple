import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart = props.cart;
    //const total = cart.reduce((total, prd) =>  total + prd.price, 0)

    let total = 0;
    for( let i = 0; i < cart.length; i++){
         const product = cart[i];
         total = total + product.price;
    }

    let shipping = 0;
    if( total > 35){
        shipping = 0;
    }
    if( total > 15) {
        shipping = 4.99
    }

    else if ( total > 0)(
        shipping = 12.99
    )

    const tax = total / 10;

    const grandTotal = ( total + shipping + tax)

    const formatNumber = num => {
        const pricision = num.toFixed(2);
        return Number(pricision);
    }



    return (
        <div>
            <h2>Order Summery</h2>
            <h4>Items Order : {cart.length} </h4>
             <h5>Product Price : {formatNumber(total)}</h5>
            <h5>Shipping : {formatNumber(shipping)}</h5>
            <h5>VAT / Tax : { formatNumber(tax) }</h5> 
            <h5>Total Price : {formatNumber(grandTotal)}</h5>
            <br/>
            <Link to = {"/Order"}>
            <button className="main-button"> Review Order</button>
            </Link>
        </div>
    );
};

export default Cart;