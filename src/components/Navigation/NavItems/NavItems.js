import React from 'react';
import classes from '../NavItems/NavItems.css'
import NavItem from '../NavItems/NavItem';

const NavItems = (props) => (
    <ul className={classes.NavItems}>
        <NavItem link="/" exact>Burger Builder</NavItem>
        <NavItem link="/orders">Orders</NavItem>
    </ul>
);

export default NavItems;