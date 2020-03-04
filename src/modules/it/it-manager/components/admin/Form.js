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
          isAlertOpen:false,
          regDate:new Date(),
          lname:'',
          fname:'',
          username:'',
          emp_id:'',
          con:'',
                
        };
      }
      componentDidMount() {
        // when component mounted, start a GET request
        // to specified URL
        fetch("http://localhost:5555/login")
          // when we get a response map the body to json
          .then(response => response.json())
          // and update the state data to said json
          .then(data => this.setState({ data }));
      }
    handleSubmit = () =>{
       
        var fname = $('#fname').val();
        var lname = $('#lname').val();
        var username = $('#email').val();
        var password = '123456789';
        var emp_id=$('#empId').val();
        var con=$('#number').val();
        var profile = "Admin";
        var loginas = "admin";
        var status = "0";
        var dor =this.state.regDate;
        var check = true;
        
        this.state.data.map(function(login){
          var c=login.username;
          var l = login.loginas;
          if(c==username && l==loginas){
            check = false
          }
         });
         if(check){
          axios({
            method: 'post',
            url: 'http://localhost:5555/login/',
            data: {fname,lname,username,password,emp_id,con,profile,loginas,status,dor}, // you are sending body instead
            headers: {
              // 'Authorization': `bearer ${token}`,
            'Content-Type': 'application/json'
            }, 
          });
          
          $('#successAlert').show();
          this.setState({
            fname:'',
            lname:'',
            username:'',
            emp_id:'',
             number:''
          })
         }else{
         this.setState({
            isAlertOpen:true
         })
         }
          
        
      }
      regDate = b => {
       
        this.setState({
         
        regDate: b.format('YYYY/DD/MM')
    })}
 render(){
    const regDate=this.state;
 return (
    <div>
        <AtiAlertBox  id="alert-id"
    color="danger" 
    isOpen={this.state.isAlertOpen} 
    onToggle={this.onToggleFunc} 
    closable 
    message="This email has been already in use">
</AtiAlertBox>
    <AtiForm id = "addprofile" events={{onSubmit:this.handleSubmit}}>
           <div className="row">
            <div className="form-group col-md-6">
            <AtiFormItem className="form-control" id = "mfname" name = "mfname"
                              config={{"rules": [{"required": true, "message": "Please input your first name!"}]}}
                              labelCol={{"xs": {"span": 24}, "sm": {"span": 8}}}
                              wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                              <Input 
                              value={this.state.fname}
                              onChange={(e)=>{this.setState({fname:e.target.value})}}   
                              id = "fname"
                             
                              type='text'
                              placeholder='First Name' />
            </AtiFormItem>
            </div>
            <div className="form-group col-md-6">
                <AtiFormItem className="form-control" id = "mlname" name = "mlname"
                                config={{"rules": [{"required": true, "message": "Please input your last name!"}]}}
                                labelCol={{"xs": {"span": 24}, "sm": {"span": 8}}}
                                wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                                <Input 
                                id = "lname"
                                value={this.state.lname}
                                onChange={(e)=>{this.setState({lname:e.target.value})}}   
                               
                                type='text'
                                placeholder='Last Name' />
                </AtiFormItem>
            </div>
            <div className="form-group col-md-6">
                <AtiFormItem className="form-control" name = "mempId" id = "mempId"
                                config={{"rules": [{"required": true, "message": "Please input your employee I'D!"}]}}
                                labelCol={{"xs": {"span": 24}, "sm": {"span": 8}}}
                                wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                                <Input 
                                id = "empId"
                                value={this.state.emp_id}
                                 onChange={(e)=>{this.setState({emp_id:e.target.value})}}   
                                
                                type='text'
                                placeholder="Employee Id" />
                </AtiFormItem>
                </div>
                <div className="form-group col-md-6">
                <AtiDatePicker  timeFormat={false} value={this.state.regDate} events={{ onDateChange: this.regDate }}
                                placeholder="Date of registration..." id="reg" dateFormat='YYYY/DD/MM' />
                
                </div>
                
                <div className="form-group col-md-12">
                <AtiFormItem className="form-control" name = "memail" id = "memail"
                                config={{"rules": [{"required": true, "message": "Please input your email!"}]}}
                                labelCol={{"xs": {"span": 24}, "sm": {"span": 8}}}
                                wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                                <Input 
                                id = "email"
                                value={this.state.username}
                                onChange={(e)=>{this.setState({username:e.target.value})}}   
                                type='email'
                                placeholder="Email Id"/>
                </AtiFormItem>
                </div>
                <div className="form-group col-md-12">
                    <AtiFormItem className="form-control" name = "mnumber" id = "mnumber"
                                    config={{"rules": [{"required": true, "message": "Please input your contact number!"}]}}
                                    labelCol={{"xs": {"span": 24}, "sm": {"span": 8}}}
                                    wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                                    <Input 
                                    id = "number"
                                    value={this.state.number}
                                    onChange={(e)=>{this.setState({number:e.target.value})}}   
                                    type='number'
                                    placeholder="Contact Number"/>
                    </AtiFormItem>
                </div>
            
                <div className="form-group col-md-12">
                <div className="form-group col-md-12 align-self-end">
               
                <Button type='primary'
                id='addCatbtn'
                htmlType='submit'><i className="fa fa-plus"></i>Add</Button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <b><span id = 'successAlert' style={{color:'green',display:'none'}} >Action performed successfully.</span></b>
                </div>
                  </div>
    </div>
          </AtiForm>
 
    </div>
    )
 }
}export default Form

