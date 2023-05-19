import React from 'react';
import"./Product.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const{handleAddToCart}=props;
    
    const{img,price,seller,ratings,name}=props.product;
    return (
        <div className='product'>
         <img src={img} alt="" />
         <div className='product-info'>
            <h3>{name}</h3>
            <p>Price: ${price}</p>
            <p><small>Manufacturer: {seller}</small></p>
            <p><small>Rating: {ratings} star</small></p>
          
         </div>
         <button className='btn-cart' onClick={()=>handleAddToCart(props.product)}>
            <p>Add To Cart</p>
          <FontAwesomeIcon icon={faShoppingCart} />
         </button>
        </div>
    );
};

export default Product;