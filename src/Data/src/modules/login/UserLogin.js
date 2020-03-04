import React, { Component } from 'react';
import $ from 'jquery';
import { AtiForm, AtiAlertBox, AtiCheckbox, AtiFormItem } from 'ati-react-web';
import { Icon, Input, Button } from 'antd';
import base64 from 'base-64';
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggled: false,
      isAlertOpen: false,
      data: [],
      email: "",
      checked: false,
      checkeda: false,
      checkedh: false,
      checkedu: false,
      password: "",
      loginas: "",
      some: "",
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }


  onToggleFunc = () => {
    this.setState({ isAlertOpen: false });
  }
  toggleMenu(event) {
    event.preventDefault();
    $('.login-content [data-toggle="flip"]').click(function () {
      $('#login-box').height(300);
      $('.login-box').toggleClass('flipped');
      return false;
    });
  }

  componentDidMount() {

    fetch("http://localhost:5555/users")
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }


  handleInputChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    })
  }
  handleSubmit = () => {
    sessionStorage.setItem('tadmins', this.state.data.length);
    var status = 1;
    var uadd = $('#uadd').val();
    var padd = $('#padd').val();
    alert(uadd+":"+padd);
    var check = false;
    if (uadd != '') {
      this.state.data.map(function (users) {
        var a = [];
        a[0] = { users }
        var a = users.emp_id;
        var bl = users.password;
        //decryption


        // const Cryptr = require('cryptr');
        // const cryptr = new Cryptr('myTotalySecretKey');
        // const encryptedString = cryptr.encrypt("qwerty");         
        // var b = cryptr.decrypt(bl);
        //var b = atob(bl)
        //btoa
        var b = atob(bl);
       
        var id = users.id;
        var status1 = users.status;
        if (uadd == a && padd === b) {
          if (status1 === 2) {
            sessionStorage.setItem('id', id);
            window.location = '/user';
          } else {
            check = false;
            alert("account not Activated")
          }
        }
        else {
          check = true;
        }
      });

      if (check==true) {
        this.setState({
          isAlertOpen: true
        })
      }
    }
  }

  render() {
    let buttonClass = (this.state.toggled) ? 'toggled' : '';

    const { email } = this.state;

    const onChange = (e) => {
      this.setState({ checked: !this.state.checked });
    }

    return (

      <div className="login">
        <center> <div className="form-group col-md-4">
          <AtiAlertBox id="alert-id"
            color="danger"
            isOpen={this.state.isAlertOpen}
            onToggle={this.onToggleFunc}
            closable
            message="Wrong Credentials">
          </AtiAlertBox>
        </div></center>
        <div class="material-half-bg">
          <div class="cover">

            <div class="login-content">
              <div class="logo">
                <h1 style={{ color: 'white' }}>Anabatic India</h1>
              </div>
            </div>
          </div>
        </div>
        <section class="login-content">
          <div class="logo">
            <h1 style={{ color: 'white' }}>Employee Portal</h1>
          </div>
          <div class="login-box" id="login-box" style={{ height: '430px' }}>
            <div className="login-form">
              <h3 class="login-head"><i class="fa fa-lg fa-fw fa-user"></i><b>SIGN IN</b></h3>
              <AtiForm events={{ onSubmit: this.handleSubmit }}>
                <div className="form-group">
                  <label class="control-label">Employee Id</label>
                  <AtiFormItem id='userName'
                    config={{ "rules": [{ "required": true, "message": "Please input your Employee Id!" }] }}
                    labelCol={{ "xs": { "span": 24 }, "sm": { "span": 8 } }}
                    wrapperCol={{ "xs": { "span": 24 }, "sm": { "span": 25 } }}>
                    <Input prefix={<Icon type='user'
                      style={{ "color": "rgba(0,0,0,.25)" }} />}
                      type='Text'
                      id="uadd"
                      placeholder="Employee Id" />
                  </AtiFormItem>

                </div>
                <div className="form-group">
                  <label class="control-label">Password</label>
                  <AtiFormItem className="form-control" id='password' name='password'
                    config={{ "rules": [{ "required": true, "message": "Please input your Password!" }] }}
                    labelCol={{ "xs": { "span": 24 }, "sm": { "span": 8 } }}
                    wrapperCol={{ "xs": { "span": 24 }, "sm": { "span": 25 } }}>
                    <Input prefix={<Icon type='lock'
                      style={{ "color": "rgba(0,0,0,.25)" }} />}
                      type='password'
                      id="padd"
                      placeholder='Password' />
                  </AtiFormItem>
                </div>
                <div className="form-group">
                  <div class="utility">
                    
                  </div>
                </div>

                <div class="form-group btn-container">
                  <AtiFormItem id='remember'
                    config={{ "valuePropName": "checked", "initialValue": true }}
                    wrapperCol={{ "xs": { "span": 24, "offset": 0 }, "sm": { "span": 25, "offset": 8 } }}>
                    <Button type='primary'
                      htmlType='submit'>
                      <i class="fa fa-sign-in fa-lg fa-fw"></i>&nbsp;&nbsp;<b>SIGN IN</b>&nbsp;&nbsp;
                </Button>
                  </AtiFormItem>
                </div>
              </AtiForm>
            </div>
            <div className="forget-form">
              <h3 className="login-head"><i className="fa fa-lg fa-fw fa-lock"></i><b>Forgot Password ?</b></h3>
              <AtiForm events={{ "onSubmit": "..." }}>
                <div className="form-group">
                  <label class="control-label">USERNAME</label>
                  <AtiFormItem id='userName'
                    config={{ "rules": [{ "required": true, "message": "Please input your username!" }] }}
                    labelCol={{ "xs": { "span": 24 }, "sm": { "span": 8 } }}
                    wrapperCol={{ "xs": { "span": 24 }, "sm": { "span": 25 } }}>
                    <Input prefix={<Icon type='user'
                      style={{ "color": "rgba(0,0,0,.25)" }} />}
                      type="email"
                      placeholder="Email I'D" />
                  </AtiFormItem>
                </div>
                <div class="form-group btn-container">
                  <AtiFormItem id='remember'
                    config={{ "valuePropName": "checked", "initialValue": true }}
                    wrapperCol={{ "xs": { "span": 24, "offset": 0 }, "sm": { "span": 25, "offset": 8 } }}>
                    <Button type='primary'
                      htmlType='submit'>
                      <i class="fa fa-unlock fa-lg fa-fw"></i>&nbsp;&nbsp;<b>RESET</b>
                    </Button>
                  </AtiFormItem>

                </div>
                <div class="form-group mt-3">
                  <p class="semibold-text mb-0"><a href="#" data-toggle="flip"><i class="fa fa-angle-left fa-fw"></i> Back to Login</a></p>
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