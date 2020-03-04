import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
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
          isAlertOpen:false
        };
      }
      componentDidMount() {
        var id = sessionStorage.getItem('activateUser');
        // when component mounted, start a GET request
        // to specified URL
        fetch("http://localhost:5555/users/"+id)
          // when we get a response map the body to json
          .then(response => response.json())
          // and update the state data to said json
          .then(stage => this.setState({ stage }));
    }

 render(){
  const panel=()=>{
    return <div className="row">
       <div className="form-group col-md-6">
                    <AtiFormItem className="form-control" name = "moffemail" id = "moffemail"
                                    wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                                    <Input 
                                    id = "offemail"
                                    type='email'
                                    placeholder="Official email"/>
                    </AtiFormItem>
        </div>
        <div className="form-group col-md-6">
                    <AtiFormItem className="form-control" name = "mati" id = "mati"
                                    wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                                    <Input 
                                    id = "ati"
                                    type='text'
                                    placeholder="ATIPL ID"/>
                    </AtiFormItem>
        </div>
        <div className="form-group col-md-6">
                    <AtiFormItem className="form-control" name = "mcorpId" id = "mcorpId"
                                    wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                                    <Input 
                                    id = "corpId"
                                    type='text'
                                    placeholder="Corporate I'D"/>
                    </AtiFormItem>
        </div>

        <div className="form-group col-md-6">
                    <AtiFormItem className="form-control" name = "mempId" id = "mempId"
                                    wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                                    <Input 
                                    id = "empId"
                                    type='text'
                                    placeholder="Employee I'D"/>
                    </AtiFormItem>
        </div>

        <div className="form-group col-md-4">
                    <AtiFormItem className="form-control" name = "mdlg1" id = "mdlg1"
                                    wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                                    <Input 
                                    id = "dlg1"
                                    type='text'
                                    placeholder="DL-Group - 1"/>
                    </AtiFormItem>
        </div>
        <div className="form-group col-md-4">
                    <AtiFormItem className="form-control" name = "mdlg2" id = "mdlg2"
                                   wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                                    <Input 
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
                                    id = "dlg3"
                                    type='text'
                                    placeholder="DL-Group - 3"/>
                    </AtiFormItem>
        </div>
      </div>;
  }

  const next=()=>{
    var data = this.state.stage;
    var status=1;
    var userId = this.state.stage.id;
    alert(userId);
    var off_email,atipl_id,atipl_id,corpId,emp_id,dlg1,dlg2,dlg3='';
    off_email=$('#offemail').val();
    atipl_id=$('#ati').val();
    corpId=$('#corpId').val();
    emp_id=$('#empId').val();
    dlg1=$('#dlg1').val();
    dlg2=$('#dlg2').val();
    dlg3=$('#dlg3').val();

     var data2={off_email,atipl_id,atipl_id,corpId,emp_id,dlg1,dlg2,dlg3,status};
     var sum = $.extend(data, data2);
     alert(JSON.stringify(sum))
     axios({
      method: 'PUT',
      url: 'http://localhost:5555/users/'+userId,
      data: JSON.stringify(sum), // you are sending body instead
      headers: {
        // 'Authorization': `bearer ${token}`,
      'Content-Type': 'application/json'
      }, 
    });
    alert("User profile updated successfully");
  }
 return (
    <div style={{padding:'20px'}}>
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
    "text": panel()
  }]} />

          </div>
                <div className="form-group col-md-12">
                <div className="form-group col-md-12 align-self-end">
               
                <Button type='primary'
                id='addCatbtn'
                htmlType='submit'>Activate</Button>
                  </div>
                  </div>
    </div>
          </AtiForm>
 
    </div>
    )
 }
}export default Form

