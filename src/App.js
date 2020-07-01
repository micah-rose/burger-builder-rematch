import React from 'react';
import logo from './burger-lrg.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <p>
        WELCOME TO BURGER BUILDER
      </p>
        <img src={logo} className="App-logo" alt="logo" /><br/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click Here to Build Your Burger
        </a>
      </header>
    </div>
  );
}

export default App;
