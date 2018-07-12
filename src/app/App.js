import React, { Component } from 'react';
import Login from '../Login/Login';
import MyStuff from '../MyStuff/MyStuff';
import Navbar from '../Navbar/Navbar';
import Register from '../Register/Register';
import AllStuff from '../AllStuff/AllStuff';
import SingleStuff from '../SingleStuff/SingleStuff';
import Home from '../Home/Home';
import './App.css';

class App extends Component {
  render () {
    return (
      <div className="App container">
        <Login />
        <MyStuff />
        <Navbar />
        <Register />
        <AllStuff />
        <SingleStuff />
        <Home />
      </div>
    );
  }
}

export default App;
