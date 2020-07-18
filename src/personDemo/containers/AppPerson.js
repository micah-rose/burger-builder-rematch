import React, { Component } from 'react';
import classes from './AppPerson.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxi';
import AuthContext from '../context/auth-context';

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
  showPersons: false,
  showCockpit: true,
  changeCounter: 0,
  authenticated: false
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

shouldComponentUpdate(){
  console.log("AppJS should component update");
  return true;
}

componentDidUpdate(){
  console.log("AppJS component did update");
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

  this.setState( (prevState, props) => {
    return {
      persons: persons, 
      changeCounter: prevState.changeCounter + 1
    }
  })
}

togglePersonsHandler = () => {
this.setState({showPersons: true})
}

loginHandler = () => {
  this.setState({authenticated: true});
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
        changed={this.nameChangedHandler}
        isAuthenticated={this.state.authenticated}
        />   
  }

  return (
    <Aux>  
      <button 
        onClick={() => {this.setState({showCockpit: false})}}>
        Remove Cockpit
      </button>
      <AuthContext.Provider value={{
        authenticated: this.state.authenticated, 
        login: this.loginHandler}}>
        {this.state.showCockpit ? (
          <Cockpit 
          showPersons={this.state.showPersons}
          clicked = {this.togglePersonsHandler}
          persons={this.state.persons}/>
        ) : null}
        {personCards}
      </AuthContext.Provider>
    </Aux>
  );
}
}

export default withClass(App, classes.App);
