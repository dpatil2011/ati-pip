import React from 'react';
import Home from '../modules/users/Home';
import Views from '../modules/users/Views';
import Request from '../modules/users/Request';
import Query from '../modules/users/Query';
import RaisedQuery from '../modules/users/RaisedQuery';
import RaisedRequest from '../modules/users/RaisedRequest';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import reset from '../modules/users/Reset';

function Routes() {
  return (
    <Router>
    <Route path="/user" component={Home} exact/>
    <Route path="/user/view" component={Views} exact/>
    <Route path="/user/request" component={Request} exact/>
    <Route path="/user/query" component={Query} exact/>
    <Route path="/user/raisedquery" component={RaisedQuery} exact/>
    <Route path="/user/raisedrequest" component={RaisedRequest} exact/>
    <Route path="/reset" component={reset} exact/>
    </Router>
  );
}

export default Routes
