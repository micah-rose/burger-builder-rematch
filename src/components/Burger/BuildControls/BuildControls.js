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
        {controllers.map(ctrl => (
            <Controls key={ctrl.label} label={ctrl.label} />
        ))}
    </div>
)

export default BuildControls;