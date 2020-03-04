import React from 'react';
import Home from '../modules/hr/Home';
import User from '../modules/hr/User';
import Request from '../modules/hr/Request';
import Facility from '../modules/hr/Admins';
import FAQ from '../modules/hr/FAQManagement';
import {BrowserRouter as Router,Route} from 'react-router-dom';

function Routes() {
  return (
    <Router>
    <Route path="/hr" component={Home} exact/>
    <Route path="/hr/user" component={User} exact/>
    <Route path="/hr/request" component={Request} exact/>
    <Route path="/hr/facility" component={Facility} exact/>
    <Route path="/hr/faq" component={FAQ} exact/>
    </Router>
  );
}

export default Routes;
