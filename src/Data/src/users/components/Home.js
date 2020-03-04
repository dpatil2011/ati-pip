import React, { Component } from 'react';
import {AtiForm,AtiButton,AtiSpinner,AtiFormItem} from 'ati-react-web';
import {Icon,Input,Button} from 'antd';
import $ from 'jquery';
import axios from 'axios';
import Detail from './Detail';
import pp from './../../../common/pp/pp.png';

class Home extends Component {
  constructor(props){
    super(props);
    this.state={
        fname:'',
        lname:'',
        username:'',
        con:'' ,
        fname:'',
        lname:'',
        username : '',
        password : '',
        emp_id : '',
        profile : '',
        loginas : '',
        status :'',
        dor :'',
    }
  }
  componentDidMount() {
    var id = sessionStorage.getItem('id');
    // when component mounted, start a GET request
    // to specified URL
    fetch("http://192.168.0.51:5555/users/"+id)
      // when we get a response map the body to json
      .then(response => response.json())
      // and update the state data to said json
      .then(data => this.setState({ 
        fname:data.fname,
        lname:data.lname,
        username:data.username,
        fname:data.fname,
        lname:data.lname,
        con:data.con,
        title:data.title,
        username : data.username,
        password : data.password,
        emp_id : data.emp_id,
        profile : data.profile,
        loginas : data.loginas,
        status : data.status,
        dor : data.dor,
      }));

  }
  
 
 render(){
 return (
    <div>
       
       <div class="row user">
        <div class="col-md-12">
       
          <div class="profile">
          <div class="cover-image4"></div>
            <div class="info"><img class="user-img" height="110px" src={pp} />
              <h4>{this.state.fname} {this.state.lname}</h4>
              <p>{this.state.title}</p>
            </div>
            
          </div>
        </div>
        
        
      </div>
      <div className="row"><br/></div>
      <div className="row">
      </div>
      
     <Detail/>
            
    </div>
    
    )
 }
}
export default Home