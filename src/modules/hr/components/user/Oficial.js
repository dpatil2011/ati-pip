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
          add:false,
          off:false,
          udoj:'',
          stage:[],
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

 const panel1=()=>{
    return <div className="row">
        <div className="form-group col-md-6">
                    <AtiFormItem className="form-control" name = "mmng" id = "mmng"
                                    config={{"rules": [{"required": true, "message": "Please input your data here!"}]}}
                                    labelCol={{"xs": {"span": 24}, "sm": {"span": 8}}}
                                    wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                                    <Input 
                                    id = "mng"
                                    type='text'
                                    placeholder="Reporting manager"/>
                    </AtiFormItem>
                </div>

                <div className="form-group col-md-6">
                    <AtiFormItem className="form-control" name = "mdept" id = "mdept"
                                    config={{"rules": [{"required": true, "message": "Please input your data here!"}]}}
                                    labelCol={{"xs": {"span": 24}, "sm": {"span": 8}}}
                                    wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                                    <Input 
                                    id = "dept"
                                    type='text'
                                    placeholder="Department"/>
                    </AtiFormItem>
                </div>

                <div className="form-group col-md-6">
                    <AtiFormItem className="form-control" name = "mjobtype" id = "mjobtype"
                                    labelCol={{"xs": {"span": 24}, "sm": {"span": 8}}}
                                    wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                                    <Input 
                                    id = "jobtype"
                                    type='text'
                                    placeholder="Job title"/>
                    </AtiFormItem>
                </div>
                <div className="form-group col-md-6">
                <AtiDatePicker 
        
        events={
            {
                onDateChange:(e)=>{
                     this.setState({
                         udoj:e,
                     })
                }
            }
        }
        
        timeFormat={false}
        dateFormat="YYYY-DD-MM"
        input= {true}
        closeOnSelect={false}
        placeholder="Date of joining"
        readonly = {false}
      >
      </AtiDatePicker>
      </div>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      </div>;
  }

  const panel2=()=>{
    return <div className="row">
       <div className="form-group col-md-6">
                    <AtiFormItem className="form-control" name = "moffemail" id = "moffemail"
                                    wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                                    <Input 
                                    id = "offemail"
                                    disabled
                                    type='email'
                                    placeholder="Official email"/>
                    </AtiFormItem>
        </div>
        <div className="form-group col-md-6">
                    <AtiFormItem className="form-control" name = "mati" id = "mati"
                                    wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                                    <Input 
                                    disabled
                                    id = "ati"
                                    type='text'
                                    placeholder="ATIPL ID"/>
                    </AtiFormItem>
        </div>
        <div className="form-group col-md-6">
                    <AtiFormItem className="form-control" name = "mcorpId" id = "mcorpId"
                                    wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                                    <Input 
                                    disabled
                                    id = "corpId"
                                    type='text'
                                    placeholder="Corporate I'D"/>
                    </AtiFormItem>
        </div>

        <div className="form-group col-md-6">
                    <AtiFormItem className="form-control" name = "mempId" id = "mempId"
                                    wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                                    <Input 
                                    disabled
                                    id = "empId"
                                    type='text'
                                    placeholder="Employee I'D"/>
                    </AtiFormItem>
        </div>

        <div className="form-group col-md-4">
                    <AtiFormItem className="form-control" name = "mdlg1" id = "mdlg1"
                                    wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                                    <Input 
                                    disabled
                                    id = "dlg1"
                                    type='text'
                                    placeholder="DL-Group - 1"/>
                    </AtiFormItem>
        </div>
        <div className="form-group col-md-4">
                    <AtiFormItem className="form-control" name = "mdlg2" id = "mdlg2"
                                   wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                                    <Input 
                                    disabled
                                    id = "dlg2"
                                    type='text'
                                    placeholder="DL-Group - 2"/>
                    </AtiFormItem>
        </div>
        <div className="form-group col-md-4">
                    <AtiFormItem className="form-control" name = "mdlg3" id = "mdlg3"
                                    labelCol={{"xs": {"span": 24}, "sm": {"span": 8}}}
                                    wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                                    <Input 
                                    disabled
                                    id = "dlg3"
                                    type='text'
                                    placeholder="DL-Group - 3"/>
                    </AtiFormItem>
        </div>
      </div>;
  }

  
  const next=()=>{
    var udoj = this.state.udoj;
    var mng,dept,jobtype='';
    var data = this.state.stage;
    var status=0;
    var userId = this.state.stage.id;
    
    mng=$('#mng').val();
    dept=$('#dept').val();
    jobtype=$('#jobtype').val();
   

     var data2={mng,dept,jobtype,udoj,status};
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
    alert("User form Creation successfully");
  }

 const step=(e)=>{
    sessionStorage.setItem('step',e);
  }
 return (
    <div style={{padding:'20px'}}>
        <a href="#" onClick={step.bind(this,'2')}> {"<< "}</a>
    <AtiForm id = "addprofile" events={{onSubmit:next.bind()}} >
            <div className="row">
            <div className="form-group col-md-12">
            <AtiCollapse defaultActiveKey={['1']}
  events={{"onChange": "..."}}
  dataSource={[{
    "header": "Stage - 1 ",
    "key": "1",
    "style": {},
    "showArrow": true,
    "text": panel1()
  }, {
    "header": "Stage - 2",
    "key": "2",
    "style": {},
    "showArrow": true,
    "text": panel2()
  }]} />

          </div>
                <div className="form-group col-md-12">
                <div className="form-group col-md-12 align-self-end">
               
                <Button type='primary'
                id='addCatbtn'
                htmlType='submit'>Next</Button>
                  </div>
                  </div>
    </div>
          </AtiForm>
 
    </div>
    )
 }
}export default Form

