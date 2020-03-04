import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import {AtiForm,AtiFormItem,AtiDatePicker,AtiAlertBox} from 'ati-react-web';
import {Input,Button} from 'antd';
import $ from 'jquery';
import axios from 'axios';

class Form extends React.Component {
    constructor(props){
        super(props);
        
        this.state={
            fname:'',
            lname:'',
            username:'',
            con:'' ,
            password : '',
            emp_id : '',
            profile : '',
            loginas : '',
            status :'',
            dor :'',
        };
      }
      componentDidMount() {
        var id = sessionStorage.getItem('addEdit');
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
      
      goBack=()=>{
     
          sessionStorage.removeItem('addEdit')
      }
      updated=()=>{
      
        var id = sessionStorage.getItem('addEdit');
        
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
    <div className="app-title">
    <div>
<h1>{/*<Icon type='user' />*/}<i className="fa fa-users"></i>&nbsp;&nbsp;&nbsp;Admins</h1>
    
    </div>
    
   
</div>
<div className="tile">
            <a href="#" onClick={this.goBack.bind()}> {'<<'} <b></b> </a>
            <div className="tile-body col-md-10 offset-md-2">
              <br/><br/>
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
                      <label>Employee I'd</label>
                      <AtiFormItem className="form-control" id='emp' name='emp'
                          labelCol={{"xs": {"span": 24}, "sm": {"span": 8}}}
                          wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                          <Input 
                          
                          value={this.state.emp_id}
                          onChange={(e)=>{this.setState({emp_id:e.target.value})}}   
                          style={{'border-color':'white'}}
                          type='text'
                          placeholder="Employee I'd" />
                      </AtiFormItem>
                    </div>
                    <div class="col-md-8 mb-4">
                      <label>Email</label>
                      <AtiFormItem className="form-control" id='email' name='email'
                          labelCol={{"xs": {"span": 24}, "sm": {"span": 8}}}
                          wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                          <Input 
                          
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
    </div>
   
    )
 }
}export default Form

