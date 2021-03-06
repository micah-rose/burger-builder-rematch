import React from 'react';
import classes from '../NavItems/NavItems.css'
import NavItem from '../NavItems/NavItem';

const NavItems = (props) => (
    <ul className={classes.NavItems}>
        <NavItem link="/" exact>Burger Builder</NavItem>
        {props.isAuthenticated ? <NavItem link="/orders">Orders</NavItem> : null}
        {!props.isAuthenticated 
            ? <NavItem link="/auth">Login/Signup</NavItem> 
            : <NavItem link="/logout">Logout</NavItem>}      
    </ul>
);

export default NavItems;