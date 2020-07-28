import React, { useState, useEffect } from 'react';
import Aux from '../../hoc/Auxi';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withError from '../../hoc/withError/withError';
import { connect} from 'react-redux';
import * as burgerBuilderActions from '../../store/actions/index';


const BurgerBuilder = props => {

    const [purchasing, setPurchasing]= useState(false);

    useEffect(() => {
        props.onInitIngredients();
    }, [props])
    

    const updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey]
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);

        return sum > 0;
    }  

    const purchaseHandler = () => {
        if (props.isAuthenticated){
            setPurchasing(true);
        } else {
            props.onSetRedirectPath('/checkout');
            props.history.push('./auth');
        }
    }

    const purchaseCancelHandler = () => {
        setPurchasing(false);
    }

    const purchaseContinueHandler = () => {
        props.onInitPurchase();
        props.history.push('/checkout');
    }

        const disabledInfo = {
            ...props.ings
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        let orderSummary = null;
        let burger = props.error ? <p>Ingredients can't be loaded!</p>:<Spinner />
        
        if(props.ings){
        burger = (
            <Aux>
                <Burger ingredients={props.ings}/>
                <BuildControls 
                    ingredientAdded={props.onIngredientAdded}
                    ingredientRemoved={props.onIngredientRemoved}
                    disabled = {disabledInfo}
                    purchasable = {updatePurchaseState(props.ings)}
                    price={props.price}
                    ordered={purchaseHandler}
                    isAuth={props.isAuthenticated} />
            </Aux>
        )
        orderSummary = <OrderSummary 
        ingredients={props.ings}
         purchaseCancelled={purchaseCancelHandler}
         purchaseContinued={purchaseContinueHandler}
         price={props.price}/>
        }

        return (
            <Aux>
                <Modal show={purchasing} modalClosed={purchaseCancelHandler}> 
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
        );
}


const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        error: state.burgerBuilder.error,
        isAuthenticated: state.auth.token !== null
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch(burgerBuilderActions.addIngredient(ingName)),
        onIngredientRemoved: (ingName) => dispatch(burgerBuilderActions.removeIngredient(ingName)),
        onInitIngredients: () => dispatch(burgerBuilderActions.initIngredients()),
        onInitPurchase: () => dispatch(burgerBuilderActions.purchaseInit()),
        onSetRedirectPath: (path) => dispatch(burgerBuilderActions.setAuthRedirectPath(path))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (withError(BurgerBuilder, axios));