import React from 'react';
import'./Header.css';
import logo from '../../images/Logo.svg'
import { NavLink, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';

const Header = () => {
    const navigate=useNavigate()

    const{user,logout}=useContext(AuthContext)
    console.log(user)
    const NavLinkStyle=({isActive})=>{
        return {
             color: isActive ? "yellow" : "",
             textDecoration:isActive?"underline":"none"
        }
    }
    const handleLogout=()=>{
        logout()
        .then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }

    const handleLogin=()=>{
      navigate("/login")
    }
    return (
        <div className='header'>
         <div>
         <img src={logo} alt="" />
        
         </div>
            <nav>
                <NavLink style={NavLinkStyle} to="/shop">Shop</NavLink>
                <NavLink style={NavLinkStyle} to="/orders">Orders</NavLink>
                <NavLink style={NavLinkStyle} to="/inventory">Inventory</NavLink>
                <NavLink style={NavLinkStyle} to="/shipping">Shipping</NavLink>
                {user?.email && <p className='dName'>{user.displayName}</p>}
               {user?.email ?<Button onClick={handleLogout} variant="secondary">Logout</Button>:<Button className="ms-2" onClick={ handleLogin} variant="secondary">Login</Button>}
               
              
             
               
            </nav>
        </div>
    );
};

export default Header;