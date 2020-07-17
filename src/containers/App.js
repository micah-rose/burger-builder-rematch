import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
constructor(props){
  super(props);
  console.log("AppJS constructor");
}

state = {
  persons: [
    { id: "a1", name: "Max", age: 28},
    { id: "b2", name: "Manu", age: 29},
    { id: "c3", name: "Steph", age: 26}
  ],
  otherState: "some other value",
  showPersons: false
}

static getDerivedStateFromProps(props, state){
  console.log("AppJS from props");
  return state;
}

// componentWillMount(){
//   console.log("AppJS component will mount");
// }

componentDidMount(){
  console.log("AppJS component did mount");
}

switchNameHandler = (newName) => {
  //console.log('Was clicked');
  //DON'T DO THIS -> this.state.persons[0].name = "Maximilian";
  this.setState({
    persons: [
      { name: newName, age: 28},
      { name: "Manu", age: 29},
      { name: "Steph", age: 27}
    ]
  })
}

nameChangedHandler = (event, id) => {
const personIndex = this.state.persons.findIndex(p => {
  return p.id === id;
});

const person = {
  ...this.state.persons[personIndex]
};

person.name = event.target.value;

const persons = [...this.state.persons];
persons[personIndex] = person;

  this.setState({
    persons: persons
  })
}

togglePersonsHandler = () => {
this.setState({showPersons: true})
}

deletePersonHandler = (personIndex) => {
  //const persons = this.state.persons.slice();
  const persons = [...this.state.persons]; //using spread operator vs slice
  persons.splice(personIndex, 1);
  this.setState({persons: persons});
}

 render(){
  console.log("AppJS render")

  let personCards = null;

  if (this.state.showPersons) {
    personCards = 
        <Persons 
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler}/>   
  }

  return (
    <div className={classes.App}>  
        <Cockpit 
        showPersons={this.state.showPersons}
        clicked = {this.togglePersonsHandler}
        persons={this.state.persons}/>
        {personCards}
    </div>
  );
}
}

export default App;
