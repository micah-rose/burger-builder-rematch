//This will eventually be the burger build application once I have figured out hooks/routing to other components.

import React from 'react';
import logo from './burger-lrg.png';
import './App.css';

function AppMain() {
  return (
    <div className="App">
      <header className="App-header">
      <p>
        Here is where you will build your burger. YUM!!
      </p>
        <img src={logo} className="App-logo" alt="logo" /><br/>

      </header>
    </div>
  );
}

export default AppMain;