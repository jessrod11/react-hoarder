import React from 'react';
import {Route, BrowserRouter, Redirect, Switch} from 'react-router-dom';

// import Login from '../Login/Login';
// import MyStuff from '../MyStuff/MyStuff';
import Navbar from '../Navbar/Navbar';
import Register from '../Register/Register';
import AllStuff from '../AllStuff/AllStuff';
// import SingleStuff from '../SingleStuff/SingleStuff';
import Home from '../Home/Home';

import './App.css';
import FbConnection from '../FirebaseRequests/connection';
FbConnection();

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

const PublicRoute = ({component: Component, authed, ...rest}) => {
  return (
    <Route {...rest}
      render ={props =>
        authed === false ? (
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
                <PublicRoute
                  path="/register"
                  authed={this.state.authed}
                  component={Register}
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
