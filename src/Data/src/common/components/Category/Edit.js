
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
          catName:'',
          fields:'',
          
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
       
        var catName = $('#fname').val();
        var fields = $('#lname').val();
       
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
    
    <div className="tile">
            <h3 className="tile-title">Add Category</h3>
            <div className="tile-body">
            <AtiForm className="row" events={{onSubmit:this.handleSubmit}}>
            <div className="form-group col-md-3">
                <AtiFormItem className="form-control" id='c' name='c'
                              config={{"rules": [{"required": true, "message": "Category cannot be blank!"}]}}
                              labelCol={{"xs": {"span": 24}, "sm": {"span": 8}}}
                              wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                              <Input 
                              id='catName'
                              events={{onChange: this.addCat}} 
                              type='text'
                              placeholder='Enter Category name' />
                </AtiFormItem>
            </div>
                <div className="form-group col-md-3">
                <AtiFormItem className="form-control" id='f' name='f'
                              config={{"rules": [{"required": true, "message": "Field cannot be blank!"}]}}
                              labelCol={{"xs": {"span": 24}, "sm": {"span": 8}}}
                              wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                              <Input 
                              id='fields'
                              events={{onChange: this.addCat}} 
                              type='number'
                              min="1" max="15" placeholder="Number of fields" />
                </AtiFormItem>
                  </div>
                <div className="form-group col-md-6">
                <Button type='primary'
                id='addCatbtn'
                  htmlType='submit'>
                 <span id='btnName1' style={{display:'none'}}><i className='fa fa-lg fa-edit' ></i>Update</span><span id='btnName'><i className="fa fa-plus"></i>Add</span>
                </Button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <label id = 'alert' style={{display:'none'}} ></label>
                </div>
          </AtiForm>
            </div>
          </div>

    )
 }
}export default Form
