import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import {AtiForm,AtiFormItem,AtiDatePicker,AtiAlertBox,AtiMultiStep} from 'ati-react-web';
import {Input,Button,Icon} from 'antd';
import Official from './Oficial';
import Identity from './Identity';
import Personal from './Personal';
import Educational from './Educational';
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
          currentStep:0
                
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


      step=()=>{
        var s = sessionStorage.getItem('step');
        var c = 0
        if(s!=null){
          c=s;
        }
        return c
      } 
 render(){
    const multiStepSource = [
      {title: 'Personal', icon: <Icon type="user" />, stepContent: <Personal/>},
      {title: 'Educational', icon: <Icon type="user" />, stepContent: <Educational/>},
      {title: 'Identity', icon: <Icon type="user" />, stepContent: <Identity/>},
      {title: 'Official', icon: <Icon type="user" />, stepContent: <Official/>},
      
  ];
 
  
  
 return (
    <div>
 <AtiMultiStep 
      dataSource={multiStepSource}
      currentStep={this.step()}
  ></AtiMultiStep>
    </div>
    )
 }
}export default Form

