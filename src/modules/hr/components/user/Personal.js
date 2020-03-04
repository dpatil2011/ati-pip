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
          married:2,
          add:false,
          off:false,
          isAlertOpen:false
        };
      }

 render(){
    const onChange1 = (e) => {
        console.log('radio checked', e.target.value);
        this.setState({
            gender: e.target.value,
        });
    }

 const panel1=()=>{
    return <div className="row">
       <div className="form-group col-md-12">
 <label>Gender :</label>&nbsp;&nbsp;&nbsp;&nbsp;
                <AtiRadioButton 
            name = "radio-group"
            value = {this.state.gender} 
            events={
                {onChange:onChange1}
            }
        >
            <AtiRadioItem value = "male">Male</AtiRadioItem>
            <AtiRadioItem value = "female">Female</AtiRadioItem>
            
        </AtiRadioButton> 
                </div>
                <div className="form-group col-md-6">
                <AtiDatePicker 
        
        events={
            {
                onDateChange:(e)=>{
                     this.setState({
                         udob:e,
                     })
                }
            }
        }
        
        timeFormat={false}
        dateFormat="YYYY-DD-MM"
        input= {true}
        closeOnSelect={false}
        placeholder="Date of birth"
        readonly = {false}
      >
      </AtiDatePicker>
      </div>
      <div className="form-group col-md-6">
                <AtiFormItem className="form-control" id = "mbirthplace" name = "mbirthplace"
                                config={{"rules": [{"required": true, "message": "Please input your data here!"}]}}
                                labelCol={{"xs": {"span": 24}, "sm": {"span": 8}}}
                                wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                                <Input 
                                id = "birthplace"
                                type='text'
                                placeholder='Birth place' />
                </AtiFormItem>
        </div>
            <div className="form-group col-md-6">
                
            <AtiFormItem className="form-control" id = "mfname" name = "mfname"
                              config={{"rules": [{"required": true, "message": "Please input your first name!"}]}}
                              labelCol={{"xs": {"span": 24}, "sm": {"span": 8}}}
                              wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                              <Input 
                              id = "fname"
                              type='text'
                              placeholder='First Name' />
            </AtiFormItem>
            </div>
            <div className="form-group col-md-6">
                <AtiFormItem className="form-control" id = "mlname" name = "mlname"
                                config={{"rules": [{"required": true, "message": "Please input your data here!"}]}}
                                labelCol={{"xs": {"span": 24}, "sm": {"span": 8}}}
                                wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                                <Input 
                                id = "lname"
                                type='text'
                                placeholder='Last Name' />
                </AtiFormItem>
            </div>
            
                <div className="form-group col-md-6">
                <AtiFormItem className="form-control" name = "memail" id = "memail"
                                config={{"rules": [{"required": true, "message": "Please input your data here!"}]}}
                                labelCol={{"xs": {"span": 24}, "sm": {"span": 8}}}
                                wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                                <Input 
                                id = "p_email"
                                type='email'
                                placeholder="Email Id"/>
                </AtiFormItem>
                </div>

                <div className="form-group col-md-6">
                    <AtiFormItem className="form-control" name = "mnumber" id = "mnumber"
                                    config={{"rules": [{"required": true, "message": "Please input your data here!"}]}}
                                    labelCol={{"xs": {"span": 24}, "sm": {"span": 8}}}
                                    wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                                    <Input 
                                    id = "number"
                                    type='number'
                                    placeholder="Contact number"/>
                    </AtiFormItem>
                </div>

                <Nationality/>
                <div className="form-group col-md-6">
        <select class="form-control" id="religion" name="religion">
    <option value="">-- Select Religion --</option>
        <option value="Hindu">Hindu</option>
        <option value="Islam">Islam</option>
        <option value="Christian">Christian</option>
        <option value="Sikh">Sikh</option>
        <option value="Budhism">Budhism</option>
        <option value="Kong Ho Chu">Kong Ho Chu</option>
        <option value="Katolik">Katolik</option>
        </select>
        </div>
                <BloodGroup/>
                
      </div>;
  }

  const panel2=()=>{
    return <div className="row">
       <div className="form-group col-md-4">
                <AtiFormItem className="form-control" id = "mfaname" name = "mfaname"
                                config={{"rules": [{"required": true, "message": "Please input your data here!"}]}}
                                labelCol={{"xs": {"span": 24}, "sm": {"span": 8}}}
                                wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                                <Input 
                                id = "faname"
                                type='text'
                                placeholder="Father's name" />
                </AtiFormItem>
        </div>
                <div className="form-group col-md-4">
                <AtiDatePicker 
        
        events={
            {
                onDateChange:(e)=>{
                     this.setState({
                         fdob:e,
                         off:true
                     })
                }
            }
        }
        
        timeFormat={false}
        dateFormat="YYYY-DD-MM"
        input= {true}
        closeOnSelect={false}
        placeholder="Date of birth"
        readonly = {false}
      >
      </AtiDatePicker>
      </div>
      <div className="form-group col-md-4">
                    <AtiFormItem className="form-control" name = "mf_adhar" id = "mf_adhar"
                                    config={{"rules": [{"required": true, "message": "Please input your data here!"}]}}
                                    labelCol={{"xs": {"span": 24}, "sm": {"span": 8}}}
                                    wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                                    <Input 
                                    id = "f_adhar"
                                    type='number'
                                    placeholder="Adhar Number"/>
                    </AtiFormItem>
     </div>
      <div className="form-group col-md-4">
      <AtiFormItem className="form-control" id = "mmaname" name = "mmaname"
                                config={{"rules": [{"required": true, "message": "Please input your data here!"}]}}
                                labelCol={{"xs": {"span": 24}, "sm": {"span": 8}}}
                                wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                                <Input 
                                id = "maname"
                                type='text'
                                placeholder="Mother's name" />
                </AtiFormItem>  
        </div>
                <div className="form-group col-md-4">
                <AtiDatePicker 
        
        events={
            {
                onDateChange:(e)=>{
                     this.setState({
                         mdob:e,
                         off:true
                     })
                }
            }
        }
        
        timeFormat={false}
        dateFormat="YYYY-DD-MM"
        input= {true}
        closeOnSelect={false}
        placeholder="Date of birth"
        readonly = {false}
      >
      </AtiDatePicker>
      </div>
      <div className="form-group col-md-4">
      <AtiFormItem className="form-control" id = "mm_adhar" name = "mm_adhar"
                                config={{"rules": [{"required": true, "message": "Please input your data here!"}]}}
                                labelCol={{"xs": {"span": 24}, "sm": {"span": 8}}}
                                wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                                <Input 
                                id = "m_adhar"
                                type='number'
                                placeholder="Adhar number" />
                </AtiFormItem>
                </div>
                <div className="form-group col-md-4">
                <AtiFormItem className="form-control" id = "mbs1" name = "mbs1"
                               labelCol={{"xs": {"span": 24}, "sm": {"span": 8}}}
                                wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                                <Input 
                                id = "bs1"
                                type='text'
                                placeholder='Brother/Sister - 1' />
                </AtiFormItem>
        </div>
                <div className="form-group col-md-4">
                <AtiDatePicker 
        
        events={
            {
                onDateChange:(e)=>{
                     this.setState({
                         bs1dob:e,
                         off:true
                     })
                }
            }
        }
        
        timeFormat={false}
        dateFormat="YYYY-DD-MM"
        input= {true}
        closeOnSelect={false}
        placeholder="Date of birth"
        readonly = {false}
      >
      </AtiDatePicker>
      </div>
      <div className="form-group col-md-4">
                    <AtiFormItem className="form-control" name = "mbs1adhar" id = "mbs1adhar"
                                   labelCol={{"xs": {"span": 24}, "sm": {"span": 8}}}
                                    wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                                    <Input 
                                    id = "bs1adhar"
                                    type='number'
                                    placeholder="Adhar Number"/>
                    </AtiFormItem>
                </div>
                <div className="form-group col-md-4">
                <AtiFormItem className="form-control" id = "mbs2" name = "mbs2"
                                wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                                <Input 
                                id = "bs2"
                                type='text'
                                placeholder='Brother/Sister - 2' />
                </AtiFormItem>
        </div>
                <div className="form-group col-md-4">
                <AtiDatePicker 
        
        events={
            {
                onDateChange:(e)=>{
                     this.setState({
                         bs2dob:e,
                         off:true
                     })
                }
            }
        }
        
        timeFormat={false}
        dateFormat="YYYY-DD-MM"
        input= {true}
        closeOnSelect={false}
        placeholder="Date of birth"
        readonly = {false}
      >
      </AtiDatePicker>
      </div>
      <div className="form-group col-md-4">
                    <AtiFormItem className="form-control" name = "mbs2adhar" id = "mbs2adhar"
                                    wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                                    <Input 
                                    id = "mbs2adhar"
                                    type='number'
                                    placeholder="Adhar Number"/>
                    </AtiFormItem>
                </div>
                <div className="form-group col-md-4">
                <AtiFormItem className="form-control" id = "mbs3" name = "mbs3"
                               wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                                <Input 
                                id = "bs3"
                                type='text'
                                placeholder='Brother/Sister - 3' />
                </AtiFormItem>
        </div>
                <div className="form-group col-md-4">
                <AtiDatePicker 
        
        events={
            {
                onDateChange:(e)=>{
                     this.setState({
                         bs3dob:e,
                         off:true
                     })
                }
            }
        }
        
        timeFormat={false}
        dateFormat="YYYY-DD-MM"
        input= {true}
        closeOnSelect={false}
        placeholder="Date of birth"
        readonly = {false}
      >
      </AtiDatePicker>
      </div>
      <div className="form-group col-md-4">
                    <AtiFormItem className="form-control" name = "mbs3adhar" id = "mbs3adhar"
                                    wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                                    <Input 
                                    id = "bs3adhar"
                                    type='number'
                                    placeholder="Adhar Number"/>
                    </AtiFormItem>
                </div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      </div>;
  }

  const married = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
        married: e.target.value,
    });
}

const marriedFields=()=>{
    if(this.state.married==1){
        return <div className="row">
             <div className="form-group col-md-12">
         <AtiRadioButton 
            name = "radio-group"
            value = {this.state.married} 
            buttonStyle = "solid"
            
            events={
                {onChange:married}
            }
        >
            <AtiRadioButtonItem value = {2}>Un-married</AtiRadioButtonItem>
            <AtiRadioButtonItem value = {1}>Married</AtiRadioButtonItem>
        </AtiRadioButton>
        </div>
            <div className="form-group col-md-4">
                <AtiDatePicker 
        
        events={
            {
                onDateChange:(e)=>{
                     this.setState({
                         dom:e,
                         off:true
                     })
                }
            }
        }
        
        timeFormat={false}
        dateFormat="YYYY-DD-MM"
        input= {true}
        closeOnSelect={false}
        placeholder="Date of marriage"
        readonly = {false}
      >
      </AtiDatePicker>
      </div>
      <div className="form-group col-md-4">
                    <AtiFormItem className="form-control" name = "mspname" id = "mspname"
                                    labelCol={{"xs": {"span": 24}, "sm": {"span": 8}}}
                                    wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                                    <Input 
                                    id = "spname"
                                    type='text'
                                    placeholder="Spouce name..."/>
                    </AtiFormItem>
                </div>
      <div className="form-group col-md-4">
                    <AtiFormItem className="form-control" name = "mspadhar" id = "mspadhar"
                                   labelCol={{"xs": {"span": 24}, "sm": {"span": 8}}}
                                    wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                                    <Input 
                                    id = "spadhar"
                                    type='number'
                                    placeholder="Adhar Number"/>
                    </AtiFormItem>
                </div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
    }else{
        return  <div className="form-group col-md-6">
        <AtiRadioButton 
           name = "radio-group"
           value = {this.state.married} 
           buttonStyle = "solid"
           events={
               {onChange:married}
           }
       >
           <AtiRadioButtonItem value = {2}>Un-married</AtiRadioButtonItem>
           <AtiRadioButtonItem value = {1}>married</AtiRadioButtonItem>
       </AtiRadioButton>
       </div>
    }
}
const addCheck = (e) => {
    this.setState({add : !this.state.add});
}
 const panel4=()=>{
        return <div className="row">
            
        <legend>Paremanent address</legend>
        
        <div className="form-group col-md-12">
            <AtiFormItem className="form-control" id = "mpadd" name = "mpadd"
                            config={{"rules": [{"required": true, "message": "Please input your data here!"}]}}
                            labelCol={{"xs": {"span": 24}, "sm": {"span": 8}}}
                            wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                            <Input 
                            id = "padd"
                            type='text'
                            placeholder="Address" />
            </AtiFormItem>
    </div>
    <div className="form-group col-md-6">
            <AtiFormItem className="form-control" id = "mpcity" name = "mpcity"
                            config={{"rules": [{"required": true, "message": "Please input your data here!"}]}}
                            labelCol={{"xs": {"span": 24}, "sm": {"span": 8}}}
                            wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                            <Input 
                            id = "pcity"
                            type='text'
                            placeholder="City" />
            </AtiFormItem>
    </div>
    <div className="form-group col-md-6">
            <AtiFormItem className="form-control" id = "mpcode" name = "mpcode"
                            config={{"rules": [{"required": true, "message": "Please input your data here!"}]}}
                            labelCol={{"xs": {"span": 24}, "sm": {"span": 8}}}
                            wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                            <Input 
                            id = "pcode"
                            type='number'
                            placeholder="Pin-Code" />
            </AtiFormItem>
    </div>

        <AtiCheckbox 
    events={{onChange: addCheck}} 
    checked = {this.state.add}
    // autoFocus = {true}
>
    Same as above
</AtiCheckbox>
    
{!this.state.add && <legend>Current address</legend>}
{!this.state.add && 
            <div className="form-group col-md-12">
                <AtiFormItem className="form-control" id = "cadd" name = "cadd"
                                labelCol={{"xs": {"span": 24}, "sm": {"span": 8}}}
                                wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                                <Input 
                                id = "cadd"
                                type='text'
                                placeholder="Address" />
                </AtiFormItem>
        </div>
        }
        {!this.state.add && 
        <div className="form-group col-md-6">
                <AtiFormItem className="form-control" id = "mccity" name = "mccity"
                               labelCol={{"xs": {"span": 24}, "sm": {"span": 8}}}
                                wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                                <Input 
                                id = "ccity"
                                type='text'
                                placeholder="City" />
                </AtiFormItem>
        </div>
    }
    {!this.state.add && 
        <div className="form-group col-md-6">
                <AtiFormItem className="form-control" id = "mcpin" name = "mcpin"
                                wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                                <Input 
                                id = "cpin"
                                value={this.state.lname}
                                onChange={(e)=>{this.setState({lname:e.target.value})}}   
                               
                                type='number'
                                placeholder="Pin-Code" />
                </AtiFormItem>
        </div>
    }
        </div>
    
  }
  
  const next=()=>{
    var gender,fname,lname,dob,b_place,p_email,p_no,nationality,religion,bloodgroup,f_name,f_dob,f_adhar,m_name,m_dob,m_adhar,bs1_name,bs1_dob,bs1_adhar,bs2_name,bs2_dob,bs2_adhar,bs3_name,bs3_dob,bs3_adhar,marital_status,dom,spouce_name,spouce_adhar,c_address,c_pcode,c_city,p_address,p_pcode,p_city='';
    sessionStorage.setItem('step',1);
    
     gender=this.state.gender;
     fname=$('#fname').val();
     lname=$('#fname').val();
     dob=this.state.udob;
     b_place=$('#birthplace').val();
     p_email=$('#p_email').val();
   
     p_no=$('#number').val();
     nationality=sessionStorage.getItem('nat');
     religion=$('#religion').val();
     bloodgroup=sessionStorage.getItem('bldGrp');
     
     f_name=$('#faname').val();
      f_dob=this.state.fdob;
      f_adhar=$('#f_adhar').val();

      m_name=$('#maname').val();
      m_dob=this.state.mdob;
      m_adhar=$('#m_adhar').val();

      bs1_name=$('#bs1').val();
      bs1_dob=this.state.bs1dob;
      bs1_adhar=$('#bs1adhar').val();
     
   
      bs2_name=$('#bs2').val();
      bs2_dob=this.state.bs2dob;
      bs2_adhar=$('#bs2adhar').val();

      bs3_name=$('#bs3').val();
      bs3_dob=this.state.bs3dob;
      bs3_adhar=$('#bs3adhar').val();
    
      marital_status = this.state.married;
      dom=this.state.dom;
      spouce_name=$('#spname').val();
      spouce_adhar=$('#spadhar').val();

      c_address=$('#cadd').val();
      c_pcode=$('#cpin').val();
      c_city=$('#ccity').val();

      p_address=$('#padd').val();
      p_pcode=$('#ppin').val();
      p_city=$('#pcity').val();
//'1','2','3','4'
    var data={gender,fname,lname,dob,b_place,p_email,p_no,nationality,religion,bloodgroup,f_name,f_dob,f_adhar,m_name,m_dob,m_adhar,bs1_name,bs1_dob,bs1_adhar,bs2_name,bs2_dob,bs2_adhar,bs3_name,bs3_dob,bs3_adhar,marital_status,dom,spouce_name,spouce_adhar,c_address,c_pcode,c_city,p_address,p_pcode,p_city};
    axios({
        method: 'post',
        url: 'http://localhost:5555/users/',
        data: JSON.stringify(data), // you are sending body instead
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
        <a href="#" onClick={step.bind(this,'0')}> {"<< "}</a> <a href="#" onClick={step.bind(this,'1')}> {" >>"}</a>
    <AtiForm id = "addprofile" events={{onSubmit:next.bind()}} >
            <div className="row">
            <div className="form-group col-md-12">
            <AtiCollapse defaultActiveKey={['1','2','3','4']}
  events={{"onChange": "..."}}
  dataSource={[{
    "header": "Personal Detail",
    "key": "1",
    "style": {},
    "showArrow": true,
    "text": panel1()
  }, {
    "header": "Family",
    "key": "2",
    "style": {},
    "showArrow": true,
    "text": panel2()
  }, {
    "header": "Marital Status",
    "key": "3",
    "style": {},
    "showArrow": true,
    "text": marriedFields()
  }, {
    "header": "Address",
    "key": "4",
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

