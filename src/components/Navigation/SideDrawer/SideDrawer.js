import React from 'react';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import classes from '../SideDrawer/SideDrawer.css';

const SideDrawer = (props) => {
    //...
    return (
        <div className={classes.SideDrawer}>
            <Logo />
            <nav>
                <NavItems />
            </nav>
        </div>
    );
};

export default SideDrawer;