import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium from 'radium';

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

  const style = {
    backgroundColor: "green",
    color: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer",
    ":hover":{
      backgroundColor: "lightgreen",
      color: "black"
    }
  };

  let personCards = null;
  if (this.state.showPersons) {
    personCards = (
      <div>
        {this.state.persons.map((person, index) => {
          return <Person 
          click={() => this.deletePersonHandler(index)}
          name={person.name} 
          age={person.age}
          key={person.id}
          changed={(event) => this.nameChangedHandler(event, person.id)}/>
        })}
      </div>
    );

    style.backgroundColor = "red";
    style[":hover"] = {
      backgroundColor: "salmon",
      color: "black"
    }
  }

  let classes = [];
  if (this.state.persons.length <= 2){
    classes.push('red');
  }
  if(this.state.persons.length <= 1){
    classes.push('bold');
  }

  return (
    <div className="App">  
    <p className={classes.join(' ')}>This is really working!</p>  
        <button 
        onClick={this.togglePersonsHandler}
        style={style}>Toggle Persons</button>
        {personCards}
    </div>
  );
}
}

export default Radium(App);
