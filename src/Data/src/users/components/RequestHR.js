import React, { Component } from 'react';
import {AtiForm,AtiButton,AtiSpinner,AtiFormItem,AtiTextAreaField,AtiDropdown, AtiSelectBox } from 'ati-react-web';
import {Icon,Input,Button} from 'antd';
import $ from 'jquery';
import Axios from 'axios';
import Recaptcha  from 'react-recaptcha';

 class RequestHr extends Component {
  constructor(props){
    super(props);
    this.insertData=this.insertData.bind(this)
    this.Recaptchaloaded=this.Recaptchaloaded.bind(this)
    this.verifyCallback=this.verifyCallback.bind(this)
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
        type:'--',
        query:'',
        query_to:'',
        isverified:false
    }
  }
  componentDidMount() {
    var id = sessionStorage.getItem('id');
    // when component mounted, start a GET request
    // to specified URL
    fetch("http://192.168.0.51:5555/users/"+id)
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
 
  
  insertData = () =>{
    if(this.state.isverified){
    var id = sessionStorage.getItem('id');
    var rand = Math.floor(Math.random() * 100000) + 1 ;
    const insertData={
        
       emp_id:this.state.emp_id,
       request_to:"HR",
       request:$('#reason').val(),
       status:0,
        dor:new Date().toLocaleString(),
        user_id:id,
        request_id:rand,
        reply:"",
        name:this.state.fname+this.state.lname
      };
      var com=$('#reason').val();
     if(com!=''){
     this.insert(insertData).then((result=>{
        if(result=='OK'){
           alert("ok")
        }
     }));
    
     alert("Requested")
     window.location.reload();
    }
    else{
      alert("input field required")
    }
    }else{
      alert('please verify Recaptcha!!!')
    }
  }
  
 
 
 
   async insert(params) {
      
     try{    
       let response =Axios.post('http://192.168.0.51:5555/request',params);
           
     }
    
     catch(error){
       alert("Error While geting Data from API")
       console.error(error)
 
     }
   
 }
 Recaptchaloaded(){
   console.log('loaded')
 }
 verifyCallback(response){
    if(response){
        this.setState({
          isverified:true
        })
    }
 }
 
 render(){
 return (
    <div>
       
        <div class="col-md-12">
                 
      </div>
      <div class="tile user-settings">
                <AtiForm id="row" events={{onSubmit:this.insertData}} style={{marginLeft:200}}>
                
                    <div class="col-md-4">
                      <label>Employee Id</label>
                      <AtiFormItem className="form-control" id='fname' name='fname'
                          labelCol={{"xs": {"span": 24}, "sm": {"span": 8}}}
                          wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                          <Input 
                          value={this.state.emp_id}
                          onChange={(e)=>{this.setState({emp_id:e.target.value})}}   
                          type='text'
                          name="e"
                          readonly={true}
                          disabled={true}
                          style={{'border-color':'white'}}
                          placeholder='First name...' />
                      </AtiFormItem>
                   </div>
                  
                  <div class="row">
                    <div class="col-md-8 mb-4">
                    
                    <div class="clearfix">
                    <div class="col-md-8 mb-4">
                      <label>Request</label>
                      <textarea class="form-control" rows="5" cols="100" 
                      name="reason" id="reason" 
                      maxLength="100" 
                      placeholder="Please write your request here">
                      </textarea>
                    </div>
                    </div></div>
                  </div>
                  <div class="row mb-10">
                    <div class="col-md-12">
                    <Button type='primary'
                  htmlType='submit'>
                 <i class="fa fa-fw fa-lg fa-check-circle"></i> &nbsp;&nbsp;<b>Request</b>&nbsp;&nbsp;
                </Button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b><span id = 'successAlert' style={{color:'green',display:'none'}} ></span></b>
                    </div>
                  </div>
                        <br/>
                  <Recaptcha
    sitekey="6LeZTLkUAAAAABaIGXfG9hLzKLZA_2fI-zjbNUCI"
    render="explicit"
    onloadCallback={this.Recaptchaloaded}
    verifyCallback={this.verifyCallback}
  />
          
          </AtiForm>
         
               
              </div>
             
    </div>
    
    )
 }
}
export default RequestHr