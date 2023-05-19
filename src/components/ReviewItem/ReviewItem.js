import React from 'react';
import"./ReviewItem.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({product,handleRemoveItem}) => {
    const {name,price,img,quantity,shipping,id}=product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
         <div className='review-details-container'>
           <div className="review-details">
           <p>{name}</p>
            <p><small>Price:<span>${price}</span></small></p>
            <p><small>Quantity:<span>${quantity}</span></small></p>
            <p><small>Shipping:<span>${shipping}</span></small></p>
           </div>
          </div>
          <div className='delete-container'>
         <button onClick={()=>handleRemoveItem(id)} className='btn-delete'>
         <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
         </button>
          </div>
        </div>
    );
};

export default ReviewItem;