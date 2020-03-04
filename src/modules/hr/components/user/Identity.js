import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import Nationality from './Form/Nationality';
import BloodGroup from './Form/BloodGroup';
import {AtiForm,AtiFormItem,AtiCheckbox,AtiDatePicker,AtiAlertBox,AtiCollapse,AtiRadioButton, AtiRadioItem,AtiRadioButtonItem} from 'ati-react-web';
import {Input,Button,} from 'antd';
import $ from 'jquery';
import axios from 'axios';

class Form extends React.Component {
    constructor(props){
        super(props);
        
        this.state={
          dob:null,
          gender : 'male',
          maried:2,
          stage:[],
          add:false,
          off:false,
          isAlertOpen:false
        };
      }

      componentDidMount() {
        
        fetch("http://localhost:5555/users")
          .then(response => response.json())
          .then(stageId => {
            var index = stageId.length-1;
            this.setState({
                stage:stageId[index]
            })
           
          });
      }
 render(){
   
  const next=()=>{
    sessionStorage.setItem('step',3);
    var user_adhar,user_pan,user_passport,user_dl='';
    var data = this.state.stage;
    var userId = this.state.stage.id;
    user_adhar=$('#adh').val();
    user_pan=$('#pan').val();
    user_passport=$('#pass').val();
    user_dl=$('#dl').val();

     var data2={user_adhar,user_pan,user_passport,user_dl};
     var sum = $.extend(data, data2);
     axios({
      method: 'PUT',
      url: 'http://localhost:5555/users/'+userId,
      data: JSON.stringify(sum), // you are sending body instead
      headers: {
        // 'Authorization': `bearer ${token}`,
      'Content-Type': 'application/json'
      }, 
    });
  }


 const step=(e)=>{
    sessionStorage.setItem('step',e);
  }
 return (
    <div style={{padding:'20px'}}>
        <a href="#" onClick={step.bind(this,'1')}> {"<< "}</a> <a href="#" onClick={step.bind(this,'3')}> {" >>"}</a>
    <AtiForm id = "addprofile" events={{onSubmit:next.bind()}} >
            <div className="row">
            <div className="form-group col-md-6">
                    <AtiFormItem className="form-control" name = "madh" id = "madh"
                                    config={{"rules": [{"required": true, "message": "Please input your data here!"}]}}
                                    labelCol={{"xs": {"span": 24}, "sm": {"span": 8}}}
                                    wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                                    <Input 
                                    id = "adh"
                                    type='number'
                                    placeholder="Adhar number"/>
                    </AtiFormItem>
                </div>

                <div className="form-group col-md-6">
                    <AtiFormItem className="form-control" name = "mpan" id = "mpan"
                                    config={{"rules": [{"required": true, "message": "Please input your data here!"}]}}
                                    labelCol={{"xs": {"span": 24}, "sm": {"span": 8}}}
                                    wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                                    <Input 
                                    id = "pan"
                                    type='number'
                                    placeholder="PAN card number"/>
                    </AtiFormItem>
                </div>

                <div className="form-group col-md-6">
                    <AtiFormItem className="form-control" name = "mpass" id = "mpass"
                                    labelCol={{"xs": {"span": 24}, "sm": {"span": 8}}}
                                    wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                                    <Input 
                                    id = "pass"
                                    type='number'
                                    placeholder="Passport number"/>
                    </AtiFormItem>
                </div>

                <div className="form-group col-md-6">
                    <AtiFormItem className="form-control" name = "mdl" id = "mdl"
                                    labelCol={{"xs": {"span": 24}, "sm": {"span": 8}}}
                                    wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                                    <Input 
                                    id = "dl"
                                    type='number'
                                    placeholder="Driving Liecence"/>
                    </AtiFormItem>
                </div>

          </div>
                <div className="form-group col-md-12">
                <div className="form-group col-md-12 align-self-end">
               
                <Button type='primary'
                id='addCatbtn'
                htmlType='submit'>Next</Button>
                  </div>
                  </div>
          </AtiForm>
 
    </div>
    )
 }
}export default Form

