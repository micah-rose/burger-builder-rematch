import React, {Component} from 'react';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import classes from '../../containers/Auth/Auth.css';

class Auth extends Component {

    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Enter your e-mail'
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
        }
    }

    render() {
        const formElements = [];

        for(let key in this.state.controls){
            formElements.push({
            id: key,
            config: this.state.controls[key]
        })
        }

        const form = formElements.map(formEl => (
            <Input 
                key={formEl.id}
                elementType={formEl.config.elementType}
                elementConfig={formEl.config.elementConfig}
                value={formEl.config.value}
                invalid={!formEl.config.valid}
                shouldValidate={formEl.config.validation}
                touched={formEl.config.touched}
                changed={(event) => 
                    this.inputChangedHandler(event, formEl.id)} />
        ))
        
        return (
            <div className={classes.Auth}>
                <form>
                    {form}
                <Button btnType="Success">SUBMIT</Button>
                </form>
            </div>
        )
    }
}

export default Auth;