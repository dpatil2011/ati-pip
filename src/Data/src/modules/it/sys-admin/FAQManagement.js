import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import Sidebar from './components/Sidebar'
import {AtiSpinner,AtiBackTop} from 'ati-react-web';
import { Button } from 'antd/lib/radio';
import Header from './components/Header'

import Request from "./components/FAQ/Request";
import View from './components/FAQ/View';

class FAQManagement extends React.Component {
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
 var id = sessionStorage.getItem('faqId')

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
    <Sidebar title = {'faq'}/>
    <main className="app-content" style={{"height": 1000}}>
    <AtiBackTop />
    {validate()}
  </main>
    </AtiSpinner>
    </div>

    )
 }
}export default FAQManagement