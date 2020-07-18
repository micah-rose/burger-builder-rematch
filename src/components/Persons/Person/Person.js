import React, {Component} from 'react';
import classes from "./Person.css";
import Aux from '../../../hoc/Auxi';

class Person extends Component {
  render(){
    console.log("PersonJS rendering...");
    return (
        //<div className={classes.Person}>
        <Aux className={classes.Person}>
            <p onClick={this.props.click}>
                I'm {this.props.name} and I am {this.props.age} years old!</p>
            <p>{this.props.children}</p>
            <input type="text" onChange={this.props.changed} value={this.props.name}></input>
        </Aux>
        //</div>
    )
}
}

export default Person;