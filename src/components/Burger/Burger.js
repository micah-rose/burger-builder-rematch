import React from 'react';
import classes from '../Burger/Burger.css';
import Ingredients from '../Burger/Ingredients';

const Burger = ( props ) => {
    return (
        <div className={classes.Burger}>
            <Ingredients type="bread-top" />
            <Ingredients type="cheese" />
            <Ingredients type="meat" />
            <Ingredients type="bread-bottom" />
        </div>
    );
}

export default Burger;