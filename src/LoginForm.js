// import React from 'react';
// import logo from './logo.svg';
// import './assets/css/main.css';

// function App() {
//   return (
//     <div>
//       Testing
//       </div>
//   );
// }

// export default App;
import React, { Component } from 'react';
import {AtiForm,AtiButton,AtiFormItem} from 'ati-react-web';
import {Icon,Input,Button} from 'antd';
import 'antd/dist/antd.css';
import 'ati-react-web/dist/index.css';
import { store } from './common/store';
import './App.css';

class LoginForm extends Component{
  render(){
    return(
      <AtiForm events={{"onSubmit": "..."}}>
  <AtiFormItem id='userName'
    label='username'
    config={{"rules": [{"required": true, "message": "Please input your username!"}]}}
    labelCol={{"xs": {"span": 24}, "sm": {"span": 8}}}
    wrapperCol={{"xs": {"span": 24}, "sm": {"span": 16}}}>
    <Input prefix={<Icon type='user'
            style={{"color": "rgba(0,0,0,.25)"}} />}
      placeholder='Username' />
  </AtiFormItem>
  <AtiFormItem id='password'
    label='password'
    config={{"rules": [{"required": true, "message": "Please input your Password!"}]}}
    labelCol={{"xs": {"span": 24}, "sm": {"span": 8}}}
    wrapperCol={{"xs": {"span": 24}, "sm": {"span": 16}}}>
    <Input prefix={<Icon type='lock'
            style={{"color": "rgba(0,0,0,.25)"}} />}
      type='password'
      placeholder='Password' />
  </AtiFormItem>
  <AtiFormItem id='email'
    label='email'
    config={{
      "rules": [
        {"type": "email", "message": "The input is not valid E-mail!"},
        {"required": true, "message": "Please input your email!"}
      ]
    }}
    labelCol={{"xs": {"span": 24}, "sm": {"span": 8}}}
    wrapperCol={{"xs": {"span": 24}, "sm": {"span": 16}}}>
    <Input prefix={<Icon type='email'
            style={{"color": "rgba(0,0,0,.25)"}} />}
      type='email'
      placeholder='email' />
  </AtiFormItem>
  
  <AtiFormItem id='remember'
    config={{"valuePropName": "checked", "initialValue": true}}
    wrapperCol={{"xs": {"span": 24, "offset": 0}, "sm": {"span": 16, "offset": 8}}}>
    <Button type='primary'
      htmlType='submit'>
      Submit
    </Button>
  </AtiFormItem>
</AtiForm>
    )
  }
}
export default LoginForm