import React from 'react';

const ViewCart = (props) => {
    const {name, quantity} = props.product;
    return (
        <div>
            <h3>{name}</h3>
             <h5 className="product-name">{ quantity}</h5>
             <br/>
             <button className="main-button">Remove</button>

        </div>
    );
};

export default ViewCart;