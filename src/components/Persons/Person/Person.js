import React, {Component} from 'react';
import classes from "./Person.css";
import Aux from '../../../hoc/Auxi';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';

class Person extends Component {

    constructor(props) {
        super(props);
      this.inputElementRef = React.createRef();
    }

    componentDidMount(){
        //this.inputEl.focus();
        this.inputElementRef.current.focus();
    }

  render(){
    console.log("PersonJS rendering...");
    return (
             <Aux>
                 <p onClick={this.props.click}>
                   I'm {this.props.name} and I am {this.props.age} years old!</p>
                 <p>{this.props.children}</p>
                 <input 
                   key="i3"
                   //ref={ (inputEl) => {this.inputEl = inputEl}}
                   ref={this.inputElementRef}
                   type="text" 
                   onChange={this.props.changed} 
                   value={this.props.name} />
             </Aux>
            ) 
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);