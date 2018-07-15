import React from 'react';
import {Link} from 'react-router-dom';
import authRequests from '../FirebaseRequests/auth';
import './Navbar.css';

class Navbar extends React.Component {
  render () {
    const {authed, logOff} = this.props;
    const logOffClickEvent = () => {
      authRequests.logOut();
      logOff();
    };

    return (
      <div className="Navbar">
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link className="navbar-brand" to="/">Hoarder Land</Link>
            </div>
            {
              authed ? (
                <ul className="nav navbar-nav navbar-right">
                  <li><Link to="/myitems">My Items</Link></li>
                  <li><Link to="/allitems">All Items</Link></li>
                  <li className="navbar-form"><button onClick={logOffClickEvent} className="btn btn-info">Logout</button></li>
                </ul>
              ) : (
                <ul className="nav navbar-nav navbar-right">
                  <li><Link to="/login">Login</Link></li>
                </ul>
              )
            }
          </div>
        </nav>
      </div >
    );
  }
}

export default Navbar;
