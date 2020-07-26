import React from 'react';
import classes from '../BuildControls/BuildControls.css';
import Controls from '../BuildControls/Controls';

const controllers = [
    {label: 'Lettuce', type: 'lettuce'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
];

const BuildControls = ( props ) => (
    <div className={classes.BuildControls}>
        <p>Price: <strong>${props.price.toFixed(2)}</strong></p>
        {controllers.map(ctrl => (
            <Controls 
            key={ctrl.label} 
            label={ctrl.label} 
            added={() => props.ingredientAdded(ctrl.type)} 
            removed = {() => props.ingredientRemoved(ctrl.type)}
            disabled={props.disabled[ctrl.type]}/>
        ))}
        <button 
        className={classes.OrderButton}
        disabled={!props.purchasable}
        onClick={props.ordered}>{props.isAuth ? "ORDER NOW" : "SIGN UP TO ORDER"}</button>
    </div>
)

export default BuildControls;