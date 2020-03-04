import React from 'react';
import Home from '../modules/facility/Home';
import Request from '../modules/facility/RequestManagement';
import AssestManagement from '../modules/facility/AssetManagement';
import Cat from '../modules/facility/CategoryManagement';
import FAQ from '../modules/facility/FAQManagement';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Password from '../modules/facility/ResetPassword';
import Category from '../modules/facility/Category'


function Routes() {
  return (
    <Router>
   
    <Route path="/facility" component={Home} exact/>
    <Route path="/facility/request" component={Request} exact/>
    <Route path="/facility/assest-management" component={AssestManagement} exact/>
    <Route path="/facility/category" component={Category} exact/>
    <Route path="/facility/faq" component={FAQ} exact/>
    <Route path="/facility/password" component={Password} exact/>


    </Router>
  );
}

export default Routes;
