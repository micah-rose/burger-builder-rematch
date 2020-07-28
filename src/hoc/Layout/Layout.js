import React, { useState } from 'react';
import Aux from '../Auxi';
import classes from '../Layout/Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import {connect} from 'react-redux';

const Layout = props => {

    const [sideDrawer, setSideDrawer] = useState(false);

const sideDrawerClosedHandler = () => {
    setSideDrawer(false);
}

const sideDrawerToggleHandler = () => {
   setSideDrawer(!sideDrawer);
}

        return (
        <Aux>
            <Toolbar 
            isAuth={props.isAuthenticated}
            drawerToggleClicked={sideDrawerToggleHandler}/>
            <SideDrawer 
            isAuth={props.isAuthenticated}
            open={sideDrawer} 
            closed={sideDrawerClosedHandler}/>
            <main className={classes.Content}>
                {props.children}
            </main>
        </Aux>
        )
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
}

export default connect(mapStateToProps)(Layout);