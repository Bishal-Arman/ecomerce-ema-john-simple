import React from 'react';
import { useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const {initialCart}=useLoaderData()
    const [cart,setCart]=useState(initialCart)
   const navigate=useNavigate()
    const handleRemoveItem=(id)=>{
      const remainingItem=cart.filter(product=>product.id!==id);
      setCart(remainingItem)
      removeFromDb(id)
    }

    const clearCart=()=>{
        setCart([])
        deleteShoppingCart()
       }
    const  handleProccedShipping=()=>{
         navigate("/shipping")
       }
   
    return (
        <div>
            <div className="shop-container">
                <div className="orders-container">
                {
                    cart.map(product=><ReviewItem
                    key={product.id}
                    product={product}
                    handleRemoveItem={handleRemoveItem}
                    ></ReviewItem>)
                }
                {
                    cart.length===0 && <h2>No item you buy.Please <Link to="/shop">shop</Link></h2>
                }
                </div>
                <div className="cart-container">
               <Cart cart={cart} clearCart={clearCart}>
                <button onClick={handleProccedShipping} className='mt-2'>Procced Shipping</button>
               </Cart>
                </div>
            </div>
            
        </div>
    );
};

export default Orders;