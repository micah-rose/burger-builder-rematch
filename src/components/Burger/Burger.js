import React from 'react';
import classes from '../Burger/Burger.css';
import Ingredients from '../Burger/Ingredients';

const Burger = ( props ) => {

    let transIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])]
                .map((_, i) => {
                return <Ingredients key={igKey + i} type={igKey} />
                });
        })
        .reduce((arr, el) => {
            return arr.concat(el);
        }, []);
        
        if(transIngredients.length === 0) {
            transIngredients = <p>Please start adding ingredients!</p>
        }

    return (
        <div className={classes.Burger}>
            <Ingredients type="bread-top" />
            {transIngredients}
            <Ingredients type="bread-bottom" />
        </div>
    );
}

export default Burger;