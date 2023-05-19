import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';

import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import'./Shop.css'

const Shop = () => {
  //  const [products,setProducts]=useState([]);
const [cart,setCart]=useState([])

  //  useEffect(()=>{
  //   fetch("products.json")
  //   .then(res=>res.json())
  //   .then(data=>setProducts(data))
  //  },[])
  const {products}=useLoaderData()

   useEffect(()=>{
    const storedCart=getShoppingCart();
    let savedCart=[]
    if(storedCart){
        for(const id in storedCart){
            const addedProduct=products.find(product=>product.id===id);
            if(addedProduct){
                const quantity=storedCart[id]
                addedProduct.quantity=quantity;
                savedCart.push(addedProduct)
            }
        }
    }
    setCart(savedCart)
   },[products])

   const handleAddToCart=(selectedProduct)=>{
    // console.log(product)
    let newCart=[]
  const exist=products.find(product=>product.id===selectedProduct.id)
  if(!exist){
    selectedProduct.quantity=1
    newCart=[...cart,selectedProduct]
  }
  else{
    const rest=products.filter(product=>product.id!==selectedProduct.id);
    exist.quantity=exist.quantity+1;
    newCart=[...rest,exist]
  }
        
   
    setCart(newCart)
    addToDb(selectedProduct.id)
   
    
   }

  

   const clearCart=()=>{
    setCart([])
    deleteShoppingCart()
   }
 
    return (
    <div className='shop-container'>
        <div className="product-container">
    {
          products.map(product=><Product
           key={product.id}
           product={product}
           handleAddToCart={handleAddToCart}
         ></Product>)
    }
         </div>

        <div className="cart-container">
             <Cart
             clearCart={clearCart}
             cart={cart}
             ><Link to="/orders"><button>Review Orders</button></Link></Cart>
       
         
            </div>
        </div>
    );
};

export default Shop;