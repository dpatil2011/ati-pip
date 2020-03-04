import React from 'react';
import Home from '..//modules/it/it-manager/Home';
import Admins from '../modules/it/it-manager/Admins';
import User from '../modules/it/it-manager/User';
import Asset from '../modules/it/it-manager/Asset';
import Request from '../modules/it/it-manager/Request';
import Category from '../modules/it/it-manager/Category';
import {BrowserRouter as Router,Route} from 'react-router-dom';

function Routes() {
  return (
    <Router>
    <Route path="/it-manager" component={Home} exact/>
    <Route path="/it-manager/sys-admin" component={Admins} exact/>
    <Route path="/it-manager/user" component={User} exact/>
    <Route path="/it-manager/category" component={Category} exact/>
    <Route path="/it-manager/asset" component={Asset} exact/>
    <Route path="/it-manager/request" component={Request} exact/>
    </Router>
  );
}

export default Routes;
