import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from  '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: ''
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: ''
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Zip Code'
                },
                value: ''
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: ''
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Email'
                },
                value: ''
            },
            deliveryMethod: {
                elementType: 'input',
                elementConfig: {
                    options: [
                        {value: 'fastest', displayValue: 'Fastest'},
                        {value: 'cheapest', displayValue: 'Cheapest'}
                ]
            },
                value: ''
            }
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        console.log(this.props.ingredients);

        //alert("You continue!");
        this.setState({loading: true})

        const order = {
            ingredients: this.state.ingredients,
            price: this.props.price,
        }

        axios.post('/orders.json', order)
            .then(response => {
                this.setState({loading: false})
                this.props.history.push();
            })
            .catch(error => {
                this.setState({loading: false})
            })
    }

render(){
    let form = (            
        <form>
            <Input elementType="..." elementConfig="..." value="..." />
            <Input elementType="..." elementConfig="..." value="..."/>
            <Input elementType="..." elementConfig="..." value="..." />
            <Input elementType="..." elementConfig="..." value="..." />
            <Button 
            onClick={this.orderHandler}
            btnType="Success" >ORDER</Button>
        </form>);
    if (this.state.loading){
        form = <Spinner />
    }

    return (
        <div className={classes.ContactData}>
            <h4>Enter your Contact Data</h4>
            {form}
        </div>
    )
}
}

export default ContactData;