import React, {useEffect} from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withError from '../../hoc/withError/withError';
import * as actions from '../../store/actions'
import {connect} from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner';

const Orders = props => {

    useEffect(() => {
        return props.onFetchOrders(props.token, props.userId);

    }, [props])

        let orders = <Spinner />
        if (!props.loading){
            orders = (
                <div>
                {props.orders.map(order => (
                    <Order 
                        key={order.id} 
                        ingredients={order.ingredients}
                        price={order.price}
                    />
                ))}
            </div>
            )
        }
        return orders 
}

const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        loading: state.order.loading,
        token: state.auth.token,
        userId: state.auth.userId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: (token, userId) => dispatch(actions.fetchOrders(token, userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withError(Orders, axios));