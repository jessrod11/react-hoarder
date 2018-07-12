import React, { Component } from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';

import './App.css';
// import Login from '../Login/Login';
// import MyStuff from '../MyStuff/MyStuff';
import Navbar from '../Navbar/Navbar';
// import Register from '../Register/Register';
// import AllStuff from '../AllStuff/AllStuff';
// import SingleStuff from '../SingleStuff/SingleStuff';
import Home from '../Home/Home';

class App extends Component {
  render () {
    return (
      <div className="App container">
        <BrowserRouter>
          <div>
            <Navbar />
            <div className="container">
              <Switch>
                <Route path="/" exact component={Home}/>
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
