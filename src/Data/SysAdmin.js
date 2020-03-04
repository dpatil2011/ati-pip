import React from 'react';
import Home from '../modules/users/Home';
import Views from '../modules/users/Views';
import Request from '../modules/users/Request';
import Query from '../modules/users/Query';
import RaisedQuery from '../modules/users/RaisedQuery';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import reset from '../modules/SysAdmin/Reset';

function Routes() {
  return (
    <Router>
    <Route path="/SysAdmin" component={Home} exact/>
    <Route path="/SysAdmin/view" component={Views} exact/>
    <Route path="/SysAdmin/request" component={Request} exact/>
    <Route path="/SysAdmin/query" component={Query} exact/>
    <Route path="/SysAdmin/Categories" component={RaisedQuery} exact/>
    <Route path="/reset" component={reset} exact/>
    </Router>
  );
}

export default Routes
