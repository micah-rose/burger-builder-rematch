//Copy of App.js for when I figure out how to hook/route to other components

import React from 'react';
import logo from './burger-lrg.png';
import './App.css';
import { useHistory } from 'react-router-dom';


function App() {

  const history = useHistory();
  const handleClick = () => {
      history.push("/AppMain.js");
  }

  return (
    <div className="App">
      <header className="App-header">
      <p>
        WELCOME TO BURGER BUILDER
      </p>
        <img src={logo} className="App-logo" alt="logo" /><br/>
        <a onClick={handleClick}>Click Here to Build Your Burger</a> 
      </header>
    </div>
  );
}

export default App;
