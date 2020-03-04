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
  
  
  handleInputChange=(event)=>{
    event.preventDefault();
    this.setState({
      [event.target.name]:event.target.value,
    })
  }
  handleSubmit = () =>{
    var status = 1;
    var uh= $('#uh').val();
    var ph= $('#ph').val();
    var check= false;

     if(uh!=''){
     
      var loginas = 'hod';
       this.state.data.map(function(login){
         
         var a=[];
         
         a[0]={login}
 
         var a=login.username;
       
         var b=login.password;
         var c=login.loginas;
         var id=login.id;
         var s = login.status;
          if(uh==a&&ph===b&&loginas===c && status===s){
            sessionStorage.setItem('id', id);
           window.location = '/hod';
         }else{
           check = true;
         }
        });
       
        if(check){
          this.setState({
            isAlertOpen:true
          })
       }
     }
  }
  render(){
  let buttonClass = (this.state.toggled) ? 'toggled' : '';

  const { email } = this.state;
 
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
      <div class="profile">
           
          </div>
      </div>
      </div>
      </div>
    </section>
    {/* HOD */}

    <section class="login-content">
      <div class="logo">
      <div class="info">
        <a href = "/login-hr"><img class="app-sidebar__user-avatar" height="200px" width="200px" src={require('../../assets/image/logo/hr.png')} alt="User Image"/></a>
        <a href = "/login-it"><img class="app-sidebar__user-avatar" height="200px" width="200px" src={require('../../assets/image/logo/it.jpg')} alt="User Image"/></a>
        <a href = "/login-facility"><img class="app-sidebar__user-avatar" height="200px" width="200px" src={require('../../assets/image/logo/facility.webp')} alt="User Image"/></a>
        <a href = "/login-user"><img class="app-sidebar__user-avatar" height="200px" width="200px" src={require('../../assets/image/logo/user.png')} alt="User Image"/></a>
      
            </div> 
      </div>
     
    </section>
    </div>
    )
 }
}
export default Login