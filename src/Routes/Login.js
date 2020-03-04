import React from 'react';
import HR from '../modules/login/HR';
import Facility from '../modules/login/Facility';
import IT from '../modules/login/IT';
import Login from '../modules/login/Login';
import User from '../modules/login/User';
import {BrowserRouter as Router,Route} from 'react-router-dom';

function Routes() {
  return (
    <Router>
    
    <Route path="/" component={Login} exact/>
    <Route path="/login-hr" component={HR} exact/>
    <Route path="/login-facility" component={Facility} exact/>
    <Route path="/login-it" component={IT} exact/>
    <Route path="/login-user" component={User} exact/>
    </Router>
  );
}

export default Routes;
