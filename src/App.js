import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

state = {
  persons: [
    { name: "Max", age: 28},
    { name: "Manu", age: 29},
    { name: "Steph", age: 26}
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

nameChangedHandler = (event) => {
  this.setState({
    persons: [
      { name: "Max", age: 28},
      { name: event.target.value, age: 29},
      { name: "Steph", age: 27}
    ]
  })
}

togglePersonsHandler = () => {
this.setState({showPersons: true})
}

deletePersonHandler = (personIndex) => {
  const persons = this.state.persons;
  persons.splice(personIndex, 1);
  this.setState({persons: persons});
}

 render(){

  const style = {
    backgroundColor: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer"
  }

  let personCards = null;
  if (this.state.showPersons) {
    personCards = (
      <div>
        {this.state.persons.map((person, index) => {
          return <Person 
          click={() => this.deletePersonHandler(index)}
          name={person.name} 
          age={person.age}/>
        })}
      </div>
    );
  }

  return (
    <div className="App">    
        <button 
        onClick={this.togglePersonsHandler}
        style={style}>Toggle Persons</button>
        {personCards}
    </div>
  );
}
}

export default App;
