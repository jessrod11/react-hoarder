import React from 'react';
import {Route, BrowserRouter, Redirect, Switch} from 'react-router-dom';

import './App.css';
// import Login from '../Login/Login';
// import MyStuff from '../MyStuff/MyStuff';
import Navbar from '../Navbar/Navbar';
// import Register from '../Register/Register';
import AllStuff from '../AllStuff/AllStuff';
// import SingleStuff from '../SingleStuff/SingleStuff';
import Home from '../Home/Home';

const PrivateRoute = ({component: Component, authed, ...rest}) => {
  return (
    <Route {...rest}
      render ={props =>
        authed === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{pathname: '/login', state: {from: props.location}}}
          />
        )
      }
    />
  );
};

class App extends React.Component {
  state = {
    authed: false,
  }

  render () {
    return (
      <div className="App container">
        <BrowserRouter>
          <div>
            <Navbar />
            <div className="container">
              <Switch>
                <Route path="/" exact component={Home}/>
                <PrivateRoute
                  path="/allstuff"
                  authed={this.state.authed}
                  component={AllStuff}
                />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
