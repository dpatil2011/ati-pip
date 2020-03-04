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
          isAlertOpen:false,
          stage:[],
        };
      }
      componentDidMount() {
        
        fetch("http://localhost:5555/users")
          // when we get a response map the body to json
          .then(response => response.json())
          // and update the state data to said json
          .then(stageId => {
            var index = stageId.length-1;
            this.setState({
                stage:stageId[index]
            })
           
          });
      }

 render(){
    
    const panel0=()=>{
      return <div className="row">
        <div className="form-group col-md-12">
                  <AtiFormItem className="form-control" id = "msi" name = "msi"
                                  config={{"rules": [{"required": true, "message": "Please input your data here!"}]}}
                                  labelCol={{"xs": {"span": 24}, "sm": {"span": 8}}}
                                  wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                                  <Input 
                                  id = "si"
                                  type='text'
                                  placeholder='Institute' />
                  </AtiFormItem>
          </div>
              <div className="form-group col-md-6">
                  
              <AtiFormItem className="form-control" id = "mss" name = "mss"
                                config={{"rules": [{"required": true, "message": "Please input your first name!"}]}}
                                labelCol={{"xs": {"span": 24}, "sm": {"span": 8}}}
                                wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                                <Input 
                                id = "ss"
                                type='text'
                                placeholder='Standard' />
              </AtiFormItem>
              </div>
              <div className="form-group col-md-6">
                  <AtiFormItem className="form-control" id = "mugm" name = "mugm"
                                  config={{"rules": [{"required": true, "message": "Please input your data here!"}]}}
                                  labelCol={{"xs": {"span": 24}, "sm": {"span": 8}}}
                                  wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                                  <Input 
                                  id = "ssub"
                                  type='text'
                                  placeholder='Subject' />
                  </AtiFormItem>
              </div>
              
                  <div className="form-group col-md-6">
                  <AtiFormItem className="form-control" name = "msgs" id = "msgs"
                                  config={{"rules": [{"required": true, "message": "Please input your data here!"}]}}
                                  labelCol={{"xs": {"span": 24}, "sm": {"span": 8}}}
                                  wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                                  <Input 
                                  id = "sgs"
                                  type='number'
                                  placeholder="Start year"/>
                  </AtiFormItem>
                  </div>
  
                  <div className="form-group col-md-6">
                  <AtiFormItem className="form-control" name = "msge" id = "msge"
                                  config={{"rules": [{"required": true, "message": "Please input your data here!"}]}}
                                  labelCol={{"xs": {"span": 24}, "sm": {"span": 8}}}
                                  wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                                  <Input 
                                  id = "sge"
                                  type='number'
                                  placeholder="End year"/>
                  </AtiFormItem>
                  </div>
        </div>;
    }

 const panel1=()=>{
    return <div className="row">
      <div className="form-group col-md-12">
                <AtiFormItem className="form-control" id = "mugi1" name = "mugi1"
                                config={{"rules": [{"required": true, "message": "Please input your data here!"}]}}
                                labelCol={{"xs": {"span": 24}, "sm": {"span": 8}}}
                                wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                                <Input 
                                id = "ugi"
                                type='text'
                                placeholder='Institute' />
                </AtiFormItem>
        </div>
            <div className="form-group col-md-6">
                
            <AtiFormItem className="form-control" id = "mugd" name = "mugd"
                              config={{"rules": [{"required": true, "message": "Please input your first name!"}]}}
                              labelCol={{"xs": {"span": 24}, "sm": {"span": 8}}}
                              wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                              <Input 
                              id = "ugd"
                              type='text'
                              placeholder='Degree' />
            </AtiFormItem>
            </div>
            <div className="form-group col-md-6">
                <AtiFormItem className="form-control" id = "mugm" name = "mugm"
                                config={{"rules": [{"required": true, "message": "Please input your data here!"}]}}
                                labelCol={{"xs": {"span": 24}, "sm": {"span": 8}}}
                                wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                                <Input 
                                id = "ugm"
                                type='text'
                                placeholder='Major' />
                </AtiFormItem>
            </div>
            
                <div className="form-group col-md-6">
                <AtiFormItem className="form-control" name = "mugs" id = "mugs"
                                config={{"rules": [{"required": true, "message": "Please input your data here!"}]}}
                                labelCol={{"xs": {"span": 24}, "sm": {"span": 8}}}
                                wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                                <Input 
                                id = "ugs"
                                type='number'
                                placeholder="Start year"/>
                </AtiFormItem>
                </div>

                <div className="form-group col-md-6">
                <AtiFormItem className="form-control" name = "muge" id = "muge"
                                config={{"rules": [{"required": true, "message": "Please input your data here!"}]}}
                                labelCol={{"xs": {"span": 24}, "sm": {"span": 8}}}
                                wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                                <Input 
                                id = "uge"
                                type='number'
                                placeholder="End year"/>
                </AtiFormItem>
                </div>
      </div>;
  }

  const panel2=()=>{
    return <div className="row">
    <div className="form-group col-md-12">
              <AtiFormItem className="form-control" id = "mpgi1" name = "mpgi1"
                              config={{"rules": [{"required": true, "message": "Please input your data here!"}]}}
                              labelCol={{"xs": {"span": 24}, "sm": {"span": 8}}}
                              wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                              <Input 
                              id = "pgi"
                              type='text'
                              placeholder='Institute' />
              </AtiFormItem>
      </div>
          <div className="form-group col-md-6">
              
          <AtiFormItem className="form-control" id = "mpgd" name = "mpgd"
                            config={{"rules": [{"required": true, "message": "Please input your first name!"}]}}
                            labelCol={{"xs": {"span": 24}, "sm": {"span": 8}}}
                            wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                            <Input 
                            id = "pgd"
                            type='text'
                            placeholder='Degree' />
          </AtiFormItem>
          </div>
          <div className="form-group col-md-6">
              <AtiFormItem className="form-control" id = "mpgm" name = "mpgm"
                              config={{"rules": [{"required": true, "message": "Please input your data here!"}]}}
                              labelCol={{"xs": {"span": 24}, "sm": {"span": 8}}}
                              wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                              <Input 
                              id = "pgm"
                              type='text'
                              placeholder='Major' />
              </AtiFormItem>
          </div>
          
              <div className="form-group col-md-6">
              <AtiFormItem className="form-control" name = "mpgs" id = "mpgs"
                              config={{"rules": [{"required": true, "message": "Please input your data here!"}]}}
                              labelCol={{"xs": {"span": 24}, "sm": {"span": 8}}}
                              wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                              <Input 
                              id = "pgs"
                              type='number'
                              placeholder="Start year"/>
              </AtiFormItem>
              </div>

              <div className="form-group col-md-6">
              <AtiFormItem className="form-control" name = "mpge" id = "mpge"
                              config={{"rules": [{"required": true, "message": "Please input your data here!"}]}}
                              labelCol={{"xs": {"span": 24}, "sm": {"span": 8}}}
                              wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                              <Input 
                              id = "pge"
                              type='number'
                              placeholder="End year"/>
              </AtiFormItem>
              </div>
    </div>;
  }

 const panel4=()=>{
  return <div className="row">
  <div className="form-group col-md-4">
            <AtiFormItem className="form-control" id = "mskc1" name = "mskc1"
                            wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                            <Input 
                            id = "skc1"
                            type='text'
                            placeholder='Category' />
            </AtiFormItem>
    </div>
       
    <div className="form-group col-md-4">
            <AtiFormItem className="form-control" id = "msks1" name = "msks1"
                            wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                            <Input 
                            id = "sks1"
                            type='text'
                            placeholder='Skills' />
            </AtiFormItem>
    </div>
    <div className="form-group col-md-4">
            <AtiFormItem className="form-control" id = "mskd1" name = "mskd1"
                            wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                            <Input 
                            id = "skd1"
                            type='text'
                            placeholder='Description' />
            </AtiFormItem>
    </div>

    <div className="form-group col-md-4">
            <AtiFormItem className="form-control" id = "mskc2" name = "mskc2"
                            wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                            <Input 
                            id = "skc2"
                            type='text'
                            placeholder='Category' />
            </AtiFormItem>
    </div>
       
    <div className="form-group col-md-4">
            <AtiFormItem className="form-control" id = "msks2" name = "msks2"
                            wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                            <Input 
                            id = "sks2"
                            type='text'
                            placeholder='Skills' />
            </AtiFormItem>
    </div>
    <div className="form-group col-md-4">
            <AtiFormItem className="form-control" id = "mskd2" name = "mskd2"
                            wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                            <Input 
                            id = "skd2"
                            type='text'
                            placeholder='Description' />
            </AtiFormItem>
    </div>

    <div className="form-group col-md-4">
            <AtiFormItem className="form-control" id = "mskc3" name = "mskc3"
                            wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                            <Input 
                            id = "skc3"
                            type='text'
                            placeholder='Category' />
            </AtiFormItem>
    </div>
       
    <div className="form-group col-md-4">
            <AtiFormItem className="form-control" id = "msks3" name = "msks3"
                            wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                            <Input 
                            id = "sks3"
                            type='text'
                            placeholder='Skills' />
            </AtiFormItem>
    </div>
    <div className="form-group col-md-4">
            <AtiFormItem className="form-control" id = "mskd3" name = "mskd3"
                            wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                            <Input 
                            id = "skd3"
                            type='text'
                            placeholder='Description' />
            </AtiFormItem>
    </div>
  </div>;
    
  }
  
  const next=()=>{
    sessionStorage.setItem('step',2);
    var s_inst,s_stand,s_sub,s_stry,uu_inst,uu_degree,s_endy,uu_major,uu_stry,uu_endy,up_inst,up_degree,up_major,up_stry,up_endy,skc1,sks1,skd1,skc2,sks2,skd2,skc3,sks3,skd3='';
    var data = this.state.stage;
    var userId = this.state.stage.id;
    s_inst=$('#si').val();
     s_stand=$('#ss').val();
     s_sub=$('#ssub').val();
     s_stry=$('#sgs').val();
     s_endy=$('#sge').val();

     uu_inst=$('#ugi').val();
     uu_degree=$('#ugd').val();
     uu_major=$('#ugm').val();
     uu_stry=$('#ugs').val();
     uu_endy=$('#uge').val();

     up_inst=$('#pgi').val();
     up_degree=$('#pgd').val();
     up_major=$('#pgm').val();
     up_stry=$('#pgs').val();
     up_endy=$('#pge').val();
     
     
      skc1=$('#skc1').val();
      sks1=$('#sks1').val();
      skd1=$('#skd1').val();
     
     skc2=$('#skc2').val();
      sks2=$('#sks2').val();
      skd2=$('#skd2').val();
      
      skc3=$('#skc3').val();
      sks3=$('#sks3').val();
      skd3=$('#skd3').val();
     var data2={s_inst,s_stand,s_sub,s_stry,uu_inst,uu_degree,uu_major,uu_stry,uu_endy,up_inst,up_degree,up_major,up_stry,up_endy,skc1,sks1,skd1,skc2,sks2,skd2,skc3,sks3,skd3};
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
        <a href="#" onClick={step.bind(this,'0')}> {"<< "}</a> <a href="#" onClick={step.bind(this,'2')}> {" >>"}</a>
    <AtiForm id = "addprofile" events={{onSubmit:next.bind()}} >
            <div className="row">
            <div className="form-group col-md-12">
            <AtiCollapse defaultActiveKey={['1','2','3','0']}
  events={{"onChange": "..."}}
  dataSource={[{
    "header": "Higher Schooling",
    "key": "0",
    "style": {},
    "showArrow": true,
    "text": panel0()
  },
  {
    "header": "Under Graduate",
    "key": "1",
    "style": {},
    "showArrow": true,
    "text": panel1()
  }, {
    "header": "Post Graduate",
    "key": "2",
    "style": {},
    "showArrow": true,
    "text": panel2()
  }, {
    "header": "Skills & Certification",
    "key": "3",
    "style": {},
    "showArrow": true,
    "text": panel4()
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

