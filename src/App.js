import React from 'react';
import logo from './burger-lrg.png';
import './App.css';
import Person from './Person/Person';

function App() {
state = {
  persons: []
}

  return (
    <div className="App">
      <header className="App-header">
      <p>
        WELCOME TO BURGER BUILDER
      </p>
        <img src={logo} className="App-logo" alt="logo" /><br/>
        <button>Switch Name</button>
        <Person name="Max" age="28"/>
        <Person name="Manu" age="29">My Hobbies: Racing</Person>
        <Person name="Steph" age="26"/>
      </header>
    </div>
  );
}

export default App;
