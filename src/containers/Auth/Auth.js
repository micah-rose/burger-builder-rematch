import React, {useState, useEffect} from 'react';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import classes from '../../containers/Auth/Auth.css';
import * as actions from '../../store/actions/index';
import {connect} from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner';
import {Redirect} from 'react-router-dom';
import {updateObject, checkValidity} from '../../shared/utility';

const Auth = props => {

    const [authForm, setAuthForm] = useState({
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Username'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            }
        })

        const [isSignup, setIsSignup] = useState(true);
    

    useEffect(() => {
        if (props.buildingBurger && props.authRedirectPath !== '/'){
            props.onSetRedirectPath();
        }
    }, [props])

    const inputChangedHandler = (event, controlName) => {
        const updatedControls = updateObject( authForm, {
            [controlName]: updateObject( authForm[controlName], {
                value: event.target.value,
                valid: checkValidity( event.target.value, authForm[controlName].validation ),
                touched: true
            } )
        } );
        setAuthForm(updatedControls);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        props.onAuth(authForm.email.value, authForm.password.value, isSignup);
    }

    const switchAuthModeHandler = () => {
        setIsSignup(!isSignup);
    }

        const formElements = [];

        for(let key in authForm){
            formElements.push({
            id: key,
            config: authForm[key]
        })
        }

        let form = formElements.map(formEl => (
            <Input 
                key={formEl.id}
                elementType={formEl.config.elementType}
                elementConfig={formEl.config.elementConfig}
                value={formEl.config.value}
                invalid={!formEl.config.valid}
                shouldValidate={formEl.config.validation}
                touched={formEl.config.touched}
                changed={(event) => 
                    inputChangedHandler(event, formEl.id)} />
        ));

        if (props.loading){
            form = <Spinner />
        }

        let errorMessage = null;
        if (props.error){
            errorMessage = (
                <p>{props.error.message}</p>
            );
        }

        let authRedirect = null;
        if(props.isAuthenticated) {
            authRedirect = <Redirect to={props.authRedirectPath}/>
        }
        
        return (
            <div className={classes.Auth}>
                {authRedirect}
                {errorMessage}
                <form onSubmit={submitHandler}>
                    {form}
                <Button btnType="Success">SUBMIT</Button>
                </form>
                <Button 
                clicked={switchAuthModeHandler}
                btnType="Danger">SWITCH TO {isSignup ? 'SIGN IN' : 'SIGN UP'}</Button>
            </div>
        )
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null,
        buildingBurger: state.burgerBuilder.building,
        authRedirectPath: state.auth.authRedirect
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignup) => dispatch(actions.auth(email, password, isSignup)),
        onSetRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);