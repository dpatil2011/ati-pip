import React, { Component } from 'react';
import $ from 'jquery';
import {AtiForm,AtiAlertBox,AtiCheckbox,AtiFormItem} from 'ati-react-web';
import {Icon,Input,Button} from 'antd';
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggled: false,
      isAlertOpen:false,
      data: [],
      email:"",
      checked:false,
      password:"",
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }
 

onToggleFunc = ()=>{
    this.setState({isAlertOpen:false});
}
  toggleMenu(event) {
    event.preventDefault();
    $('.login-content [data-toggle="flip"]').click(function() {
      $('#login-box').height(300);
      $('.login-box').toggleClass('flipped');
      return false;
    });
  }
  
  componentDidMount() {
    fetch("http://localhost:5555/login")
      // when we get a response map the body to json
      .then(response => response.json())
      // and update the state data to said json
      .then(data => this.setState({data}));
  }
  
  handleSubmit = () =>{
    var status = 1;
    var username= $('#username').val();
    var password= $('#password').val();
    var validate= false;
    var loginas = 'hod';
    
    this.state.data.map(function(login){
         var usernameAvail = login.username;
       
         var passwordAvail=login.password;
         var loginasAvail=login.loginas;
         var hrId=login.id;
         var statusAvail = login.status;
          if(username==usernameAvail&&password===passwordAvail&&loginas===loginasAvail && status===statusAvail){
            sessionStorage.setItem('hrId', hrId);
           window.location = '/hod';
         }else{
           validate = true;
         }
        });
       
        if(validate){
          this.setState({
            isAlertOpen:true
          })
       }
  }
  render(){

const onChange = (e) => {
    this.setState({checked : !this.state.checked});
}

 return (
 
    <div className="login">
     <center> <div className="form-group col-md-4">
      <AtiAlertBox  id="alert-id"
    color="danger" 
    isOpen={this.state.isAlertOpen} 
    onToggle={this.onToggleFunc} 
    closable 
    message="Wrong Credentials">
</AtiAlertBox>
</div></center>
    <section class="material-half-bg">
      <div class="cover">
     
      <div class="login-content">
      <div class="logo">
        <h1 style={{color:'white'}}>Anabatic India</h1>
      </div>
      </div>
      </div>
    </section>
    {/* HR */}

    <section class="login-content">
      
      <div class="logo">
        <h1 style={{color:'white'}}>Anabatic India</h1>
      </div>
      <div class="login-box" id="login-box">
        
          <div  className="login-form">
              <h3 class="login-head"><i class="fa fa-lg fa-fw fa-user"></i><b>USER SIGN IN</b></h3>
               {/* Login Switching */}
        
               <div className="form-group">
              <div class="utility">
                  <span class="label-text">
                  <a href="/" ><b>{'<<'}</b></a>
                  </span>
              </div>
            </div>
            
            <AtiForm events={{onSubmit:this.handleSubmit}}>
            <div className="form-group">
              <label class="control-label">Username</label>
                <AtiFormItem id='userName'
                  config={{"rules": [{"required": true, "message": "Please input your username!"}]}}
                  labelCol={{"xs": {"span": 24}, "sm": {"span": 8}}}
                  wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                  <Input prefix={<Icon type='user'
                          style={{"color": "rgba(0,0,0,.25)"}} />}
                          type='email'
                          id="uh"
                    placeholder="Email I'D" />
                </AtiFormItem>
                <Input hidden
                          value='hod'
                    />
            </div>
            <div className="form-group">
              <label class="control-label">Password</label>
                <AtiFormItem className="form-control" id='password' name='password'
                  config={{"rules": [{"required": true, "message": "Please input your Password!"}]}}
                  labelCol={{"xs": {"span": 24}, "sm": {"span": 8}}}
                  wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                  <Input  prefix={<Icon type='lock'
                          style={{"color": "rgba(0,0,0,.25)"}} />}
                    type='password'
                    id="ph"
                    placeholder='Password' />
                </AtiFormItem>
            </div>
            <div className="form-group">
              <div class="utility">
                {/* <AtiCheckbox 
                      events={{onChange: onChange}} 
                      checked = {this.state.checked}
                      // autoFocus = {true}
                  >
                  <span class="label-text">Stay Signed in</span>
                </AtiCheckbox> */}
                  <span class="label-text"><a href="#" onClick={this.toggleMenu} data-toggle="flip"><b>Forgot Password ?</b></a></span>
              </div>
            </div>
           
            
          <div class="form-group btn-container">
              <AtiFormItem id='remember'
                config={{"valuePropName": "checked", "initialValue": true}}
                wrapperCol={{"xs": {"span": 24, "offset": 0}, "sm": {"span": 25, "offset": 8}}}>
                <Button type='primary'
                  htmlType='submit'>
                  <i class="fa fa-sign-in fa-lg fa-fw"></i>&nbsp;&nbsp;<b>SIGN IN</b>&nbsp;&nbsp;
                </Button>
              </AtiFormItem>
            </div>
           
          </AtiForm>
      </div>
      <div  className="forget-form">
      <h3 className="login-head"><i className="fa fa-lg fa-fw fa-lock"></i><b>Forgot Password ?</b></h3>
              
            <AtiForm events={{"onSubmit": "..."}}>
            <div className="form-group">
              <label class="control-label">USERNAME</label>
                <AtiFormItem id='userName'
                  config={{"rules": [{"required": true, "message": "Please input your username!"}]}}
                  labelCol={{"xs": {"span": 24}, "sm": {"span": 8}}}
                  wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                  <Input prefix={<Icon type='user'
                          style={{"color": "rgba(0,0,0,.25)"}} />}
                          type="email"
                          placeholder="Email I'D" />
                </AtiFormItem>
            </div>
            <div class="form-group btn-container">
              <AtiFormItem id='remember'
                config={{"valuePropName": "checked", "initialValue": true}}
                wrapperCol={{"xs": {"span": 24, "offset": 0}, "sm": {"span": 25, "offset": 8}}}>
                <Button type='primary'
                    htmlType='submit'>
                    <i class="fa fa-unlock fa-lg fa-fw"></i>&nbsp;&nbsp;<b>RESET</b>
                </Button>
              </AtiFormItem>
             
          </div>
          <div class="form-group mt-3">
            <p class="semibold-text mb-0"><a href="#"  data-toggle="flip"><i class="fa fa-angle-left fa-fw"></i> Back to Login</a></p>
            </div>
            
            </AtiForm>
       </div>
        
      </div>
    </section>
    </div>
    )
 }
}
export default Login