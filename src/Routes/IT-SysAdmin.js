import React from 'react';
import Home from '../modules/it/sys-admin/Home';
import User from '../modules/it/sys-admin/User';
import Request from '../modules/it/sys-admin/Request';
import {BrowserRouter as Router,Route} from 'react-router-dom';

function Routes() {
  return (
    <Router>
    <Route path="/sys-admin" component={Home} exact/>
    <Route path="/sys-admin/asset" component={User} exact/>
    <Route path="/sys-admin/user" component={User} exact/>
    <Route path="/sys-admin/request" component={Request} exact/>
    </Router>
  );
}

export default Routes;