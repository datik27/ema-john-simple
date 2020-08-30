import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './Product.css';
import { Link } from 'react-router-dom';

const product = (props) => {
    const {img, name, seller, price, stock, key} = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>

            </div>
            <div>
              <h3 className="product-name"> <Link to={"/product/"+key}>{name}</Link> </h3>
              <br/>
            <p><small>by:{seller}</small></p>
             <br/>
            <p>${price}</p>
            <br/>
            <p><small> Only {stock} Left In Stock Order Soon</small></p>
            <br/>

            {props.showButton && <button className="main-button"
            onClick ={() => props.handleProduct(props.product)}
            
              > <FontAwesomeIcon icon={faShoppingCart} />
              Add To Cart</button>}

            </div>
              
        </div>
    );
};

export default product;