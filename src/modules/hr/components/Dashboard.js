import React, { Component } from 'react';
import {AtiForm,AtiButton,AtiSpinner,AtiFormItem} from 'ati-react-web';
import {Icon,Input,Button} from 'antd';
import $ from 'jquery';
import axios from 'axios';
class Dashboard extends Component {
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
    fetch("http://localhost:5555/login/"+id)
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
        username : data.username,
        password : data.password,
        emp_id : data.emp_id,
        profile : data.profile,
        loginas : data.loginas,
        status : data.status,
        dor : data.dor,
      }));

  }
  
  updated=()=>{
      
      var id = sessionStorage.getItem('id');
      
      axios({
        method: 'PUT',
        url: 'http://localhost:5555/login/'+id,
        data: JSON.stringify(this.state), // you are sending body instead
        headers: {
          // 'Authorization': `bearer ${token}`,
        'Content-Type': 'application/json'
        }, 
      });
    $('#successAlert').show().html("Profile Updated Successfully");
  }
 
 render(){
 return (
    <div>
       
        <div class="row user">
        <div class="col-md-12">
          <div class="profile">
            <div class="info"><img class="user-img" height="110px" src={require('../../../common/pp/pp.png')} />
              <h4>{this.state.fname}</h4>
              <p>IT Manager</p>
            </div>
            <div class="cover-image"></div>
          </div>
        </div>
        
        
      </div>
      <div className="row"><br/></div>
      <div className="row">
        <div className="col-md-6 col-lg-3">
          <div className="widget-small primary coloured-icon"><i className="icon fa fa-users fa-3x"></i>
            <div className="info">
              <h4>Admins</h4>
              <p><b>{sessionStorage.getItem('tadmins')}</b></p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="widget-small info coloured-icon"><i className="icon fa fa-user fa-3x"></i>
            <div className="info">
              <h4>HOD/HR</h4>
              <p><b>{sessionStorage.getItem('thod')}</b></p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="widget-small danger coloured-icon"><i className="icon fa fa-star fa-3x"></i>
            <div className="info">
              <h4>Users</h4>
              <p><b>{sessionStorage.getItem('tusers')}</b></p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="widget-small warning coloured-icon"><i className="icon fa fa-laptop fa-3x"></i>
            <div className="info">
              <h4>Category</h4>
              <p><b>{sessionStorage.getItem('tcat')}</b></p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="tile user-settings">
                <h4 class="line-head">Info</h4>
                <AtiForm events={{onSubmit:this.updated}}>
                <div class="row mb-4">
                    <div class="col-md-4">
                      <label>First Name</label>
                      <AtiFormItem className="form-control" id='fname' name='fname'
                          labelCol={{"xs": {"span": 24}, "sm": {"span": 8}}}
                          wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                          <Input 
                          value={this.state.fname}
                          onChange={(e)=>{this.setState({fname:e.target.value})}}   
                          type='text'
                          name="e"
                          style={{'border-color':'white'}}
                          placeholder='First name...' />
                      </AtiFormItem>
                   </div>
                    <div class="col-md-4">
                      <label>Last Name</label>
                      <AtiFormItem className="form-control" id='fname' name='fname'
                          labelCol={{"xs": {"span": 24}, "sm": {"span": 8}}}
                          wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                          <Input 
                          onChange={(e)=>{this.setState({lname:e.target.value})}}   
                          style={{'border-color':'white'}}
                          type='text'
                          value={this.state.lname}
                          contentEditable={true}
                          placeholder='Last name...' />
                      </AtiFormItem>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-8 mb-4">
                      <label>Email</label>
                      <AtiFormItem className="form-control" id='email' name='email'
                          labelCol={{"xs": {"span": 24}, "sm": {"span": 8}}}
                          wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                          <Input 
                          disabled
                          value={this.state.username}
                          onChange={(e)=>{this.setState({username:e.target.value})}}   
                          style={{'border-color':'white'}}
                          type='email'
                         
                          placeholder='Email...' />
                      </AtiFormItem>
                    </div>
                    <div class="clearfix"></div>
                    <div class="col-md-8 mb-4">
                      <label>Mobile No</label>
                      <AtiFormItem className="form-control" id='con' name='con'
                          labelCol={{"xs": {"span": 24}, "sm": {"span": 8}}}
                          wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                          <Input 
                          value={this.state.con}
                          onChange={(e)=>{this.setState({con:e.target.value})}}
                          type='number'
                          style={{'border-color':'white'}} 
                          placeholder='Contact number...' />
                      </AtiFormItem>
                    </div>
                    
                  </div>
                  <div class="row mb-10">
                    <div class="col-md-12">
                    <Button type='primary'
                  htmlType='submit'>
                 <i class="fa fa-fw fa-lg fa-check-circle"></i> &nbsp;&nbsp;<b>Update</b>&nbsp;&nbsp;
                </Button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b><span id = 'successAlert' style={{color:'green',display:'none'}} ></span></b>
                    </div>
                  </div>
          
          </AtiForm>

               
              </div>
            
    </div>
    
    )
 }
}
export default Dashboard