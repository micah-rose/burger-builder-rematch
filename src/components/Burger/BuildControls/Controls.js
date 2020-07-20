import React from 'react';
import classes from '../BuildControls/Controls.css';

const Controls = ( props ) => (
    <div className={classes.Controls}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.Less}>Less</button>
        <button className={classes.More}>More</button>
    </div>
);

export default Controls;