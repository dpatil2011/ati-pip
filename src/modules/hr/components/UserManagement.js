import React, { Component } from 'react';
import $ from 'jquery';
import Form from './user/Form'
import axios from 'axios';
import Active from '../components/user/Active'
import Recent from '../components/user/Recent'
import {AtiSwitch,AtiTable,AtiButton,AtiTabsGroup} from 'ati-react-web';
import {Icon} from 'antd';
class UserManagement extends Component{
    constructor(props){
        super(props);
        
        this.state={
          menu:"",
          switch:1,
          isChecked:true,
          fields:'',
          admin:[],
          tableData:[]
        };
      }

    componentDidMount() {
      sessionStorage.removeItem('step');
        // when component mounted, start a GET request
        // to specified URL
        fetch("http://localhost:5555/login?loginas=user")
          // when we get a response map the body to json
          .then(response => response.json())
          // and update the state data to said json
          .then(admin => this.setState({ admin }));
    }
    renderMenu(request) {
        if(typeof(request) === 'undefined' || request == null){
            request='home';
        }
        switch(request) {
          case 'add':
            return <div className="tile">
            <a href="#" onClick={this.menuRequest.bind(this,'')}> {'<<'} <b></b> </a>
            <Form/>
           
          </div>
         default:
          return <AtiTabsGroup dataSource={[{
            "title": "Recent",
            "key": "tab1",
            "tabContent":  <Recent/>
          }, {
            "title": "Active",
            "key": "tab2",
            "tabContent":<Active/>
          }]}
          type='card'
          tabBarGutter={0}
          activeKey='tab1'
          events={{"onChange": "...", "onEdit": "..."}} />;
        }
      }
      menuRequest(menuChange) {
        this.setState({menu:menuChange})
      };

    render(){
          return(
            <div>
                <div className="app-title">
                <div>
        <h1>{/*<Icon type='user' />*/}<i className="fa fa-users"></i>&nbsp;&nbsp;&nbsp;Users</h1>
                    </div>
                    <a className="btn btn-primary icon-btn" href="#" onClick={this.menuRequest.bind(this,'add')}><i className="fa fa-plus"></i>Add</a>
                </div>
                <div className="row">
                    <div className="col-md-12">
                    <div className="tile">
                        <div className="tile-body">
                        <div>          

                        {this.renderMenu(this.state.menu)}      
                      
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default UserManagement;