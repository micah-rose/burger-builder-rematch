import React from 'react';
import classes from '../Burger/Burger.css';
import Ingredients from '../Burger/Ingredients';

const Burger = ( props ) => {

    const transIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])]
                .map((_, i) => {
                return <Ingredients key={igKey + i} type={igKey} />
                });
        });

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