import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {

//render(){

const [ personsState, setPersonsState ] = useState({
   
  persons: [
    { name: "Max", age: 28},
    { name: "Manu", age: 29},
    { name: "Steph", age: 26}
  ],
  otherState: "some other value"

});

//Example that you can call useState multiple times (for functional components only)
const [otherState] = useState({otherState: "some other value"});
console.log(personsState, otherState);

const switchNameHandler = () => {
    //console.log('Was clicked');
    //DON'T DO THIS -> this.state.persons[0].name = "Maximilian";
    setPersonsState({
      persons: [
        { name: "Maximilian", age: 28},
        { name: "Manu", age: 29},
        { name: "Steph", age: 27}
      ]
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Racing</Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
      </header>
    </div>
  );
}
//}


// state = {
//   persons: [
//     { name: "Max", age: 28},
//     { name: "Manu", age: 29},
//     { name: "Steph", age: 26}
//   ],
//   otherState: "some other value"
// }

// switchNameHandler = () => {
//   //console.log('Was clicked');
//   //DON'T DO THIS -> this.state.persons[0].name = "Maximilian";
//   this.setState({
//     persons: [
//       { name: "Maximilian", age: 28},
//       { name: "Manu", age: 29},
//       { name: "Steph", age: 27}
//     ]
//   })
// }

export default App;
