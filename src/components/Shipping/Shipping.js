import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';

const Shipping = () => {
    const{user}=useContext(AuthContext)
    return (
        <div>
            <h1>Shipping all the items</h1>
            {user?.email && <div><span>Hey!!{user?.email && <span className='text-primary text-bold'>{user.displayName}</span>} delivary comming soon...</span></div>}
        </div>
    );
};

export default Shipping;