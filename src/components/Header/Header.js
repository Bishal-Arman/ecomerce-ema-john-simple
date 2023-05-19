import React from 'react';
import'./Header.css';
import logo from '../../images/Logo.svg'
import { NavLink } from 'react-router-dom';

const Header = () => {
    const NavLinkStyle=({isActive})=>{
        return {
             color: isActive ? "yellow" : "",
             textDecoration:isActive?"underline":"none"
        }
    }
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <nav>
                <NavLink style={NavLinkStyle} to="/shop">Shop</NavLink>
                <NavLink style={NavLinkStyle} to="/orders">Orders</NavLink>
                <NavLink style={NavLinkStyle} to="/inventory">Inventory</NavLink>
            </nav>
        </div>
    );
};

export default Header;