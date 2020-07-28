import React, { useEffect } from 'react';
import Layout from '../hoc/Layout/Layout';
import BurgerBuilder from '../containers/BurgerBuilder/BurgerBuilder';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import Logout from '../containers/Auth/Logout/Logout';
import {connect} from 'react-redux';
import * as actions from '../store/actions/index';
import asyncComp from '../hoc/asyncComp/asyncComp';

const asyncCheckout = asyncComp(() => {
  return import('../containers/Checkout/Checkout')
});

const asyncOrders = asyncComp(() => {
  return import('../containers/Orders/Orders')
});

const asyncAuth = asyncComp(() => {
  return import('../containers/Auth/Auth')
});

const App = props => {
  useEffect(() => {
    props.onTryAutoSignup();
  }, [props])

    let routes = (
      <Switch>
        <Route path="/auth" component={asyncAuth} />
        <Route path="/" exact component={BurgerBuilder} />
        <Redirect to="/" />
      </Switch>
    );

    if (props.isAuthenticated){
      routes = (
        <Switch>
        <Route path="/checkout" component={asyncCheckout} />
        <Route path="/orders" component={asyncOrders} />
        <Route path="/logout" component={Logout} />
        <Route path="/auth" component={asyncAuth} />
        <Route path="/" exact component={BurgerBuilder} />
        <Redirect to="/" />
    </Switch>
      )
    }

    return (
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
