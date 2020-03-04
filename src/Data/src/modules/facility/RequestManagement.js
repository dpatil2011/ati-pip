import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import Sidebar from './components/Sidebar'
import {AtiSpinner,AtiBackTop} from 'ati-react-web';
import { Button } from 'antd/lib/radio';
import Header from './components/Header'
import Dashboard from './components/Dashboard';
import Request from '../../common/components/request/Request';
import View from '../../common/components/request/View';

class RequestManagement extends React.Component {
   constructor(props){
      super(props);
      this.state={
        loading:true
      }
    }
 render(){
  setTimeout(()=>{
    this.setState({
      loading:false
    })
 },1000)
 var id = sessionStorage.getItem('viewId')

const validate=()=>{
  if(id!=null){
  return <View/>
}else{
  return <Request/>
}
}
   setTimeout(()=>{
      this.setState({
        loading:false
      })
   },1000)
 return (
    <div>
      <AtiSpinner tip='Loading...'
    size='large'
  delay={50}
  spinning={this.state.loading}>
    <Header/>
    <Sidebar title = {'request'}/>
    <main className="app-content" style={{"height": 1000}}>
    <AtiBackTop />
    {validate()}
  </main>
    </AtiSpinner>
    </div>

    )
 }
}export default RequestManagement