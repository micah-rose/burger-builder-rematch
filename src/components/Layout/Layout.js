import React from 'react';
import Aux from '../../hoc/Auxi';
import classes from '../Layout/Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'

const Layout = ( props ) => (
    <Aux>
        <Toolbar />
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default Layout;