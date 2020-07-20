//Copy of App.js for when I figure out how to hook/route to other components

import React from 'react';
import logo from '../assets/burger-lrg.png';
import classes from './App.css';


function App() {

  return (
    <div className={classes.App}>
      <header className={classes.Header}>
      <p>
        WELCOME TO BURGER BUILDER
      </p>
        <img src={logo} className={classes.Logo} alt="logo" /><br/> 
        <a className={classes.Link} href="www.Google.com">Click Here to Build Your Burger</a> 
      </header>
    </div>
  );
}

export default App;
