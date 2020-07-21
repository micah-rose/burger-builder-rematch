import React from 'react';
import classes from '../BuildControls/Controls.css';

const Controls = ( props ) => (
    <div className={classes.Controls}>
        <div className={classes.Label}>{props.label}</div>
        <button 
            className={classes.Less} 
            onClick={props.removed} 
            disabled={props.disabled}>-</button>
        <button className={classes.More} onClick={props.added}>+</button>
    </div>
);

export default Controls;