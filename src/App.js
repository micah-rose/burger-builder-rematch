import React, { Component } from 'react';
import classes from './App.css';
import Person from './components/Persons/Person/Person';
import Persons from './components/Persons/Persons';

class App extends Component {

state = {
  persons: [
    { id: "a1", name: "Max", age: 28},
    { id: "b2", name: "Manu", age: 29},
    { id: "c3", name: "Steph", age: 26}
  ],
  otherState: "some other value",
  showPersons: false
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
  let personCards = null;
  let btnClass = [classes.Button];

  if (this.state.showPersons) {
    personCards = (
      <div>
        <Persons 
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler}/>
      </div>
    );
    btnClass.push(classes.Red);
  }

  let assignedClasses = [];
  if (this.state.persons.length <= 2){
    assignedClasses.push(classes.red);
  }
  if(this.state.persons.length <= 1){
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.App}>  
    <p className={assignedClasses.join(' ')}>This is really working!</p>  
        <button className={btnClass.join(' ')} onClick={this.togglePersonsHandler}>
        Toggle Persons
        </button>
        {personCards}
    </div>
  );
}
}

export default App;
