import React from 'react';
import logo from './burger-lrg.png';
import './App.css';
import Person from './Person/Person';

function App() {

  return (
    <div className="App">
      <header className="App-header">
      <p>
        WELCOME TO BURGER BUILDER
      </p>
        <img src={logo} className="App-logo" alt="logo" /><br/>
        <Person />
      </header>
    </div>
  );
}

export default App;
