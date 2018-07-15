import React from 'react';
import {Route, BrowserRouter, Redirect, Switch} from 'react-router-dom';
import firebase from 'firebase';

import Login from '../Login/Login';
import MyStuff from '../MyStuff/MyStuff';
import Navbar from '../Navbar/Navbar';
import Register from '../Register/Register';
import AllStuff from '../AllStuff/AllStuff';
import SingleStuff from '../SingleSpa/SingleSpa';
import Home from '../Home/Home';

import './App.css';

import FbConnection from '../FirebaseRequests/connection';
FbConnection();

const PrivateRoute = ({component: Component, authed, ...rest}) => {
  return (
    <Route {...rest}
      render = {props =>
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
            to={{pathname: '/myitems', state: {from: props.location}}}
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

  componentDidMount () {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({authed: true});
      } else {
        this.setState({authed: false});
      }
    });
  }

  componentWillUnmount () {
    this.removeListener();
  }

  logOff = () => {
    this.setState({authed: false});
  }

  render () {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Navbar
              authed={this.state.authed}
              logOff = {this.logOff}
            />
            <div className="container">
              <Switch>
                <Route path="/" exact component={Home}/>
                <PrivateRoute
                  path="/allitems"
                  authed={this.state.authed}
                  component={AllStuff}
                />
                <PublicRoute
                  path="/register"
                  authed={this.state.authed}
                  component={Register}
                />
                <PublicRoute
                  path="/login"
                  authed={this.state.authed}
                  component={Login}
                />
                <PrivateRoute
                  path="/myitems"
                  authed={this.state.authed}
                  component={MyStuff}
                />
                <PrivateRoute
                  path="/singleitems"
                  authed={this.state.authed}
                  component={SingleStuff}
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
