import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import Header from './components/Header';
import Asset from './components/assest/AssetManage';
import Sidebar from './components/Sidebar';
import {AtiSpinner,AtiBackTop} from 'ati-react-web';
import Form from './components/assest/Form'
import $ from 'jquery';

class AssetManagement extends React.Component {
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

   var id= sessionStorage.getItem("showForm");
  const validate=()=>{
    if(id!=null){
      return <Form/>
    }
    else{
      return <Asset/>
    }
   }
   
 return (
    <div>
       <AtiSpinner tip='Loading...'
    size='large'
  delay={50}
  spinning={this.state.loading}>
    <Header/>
    <Sidebar title={'assets'}/>
    <main className="app-content" style={{"height": 1000}}>
    <AtiBackTop />
    {validate()}
    </main>
    </AtiSpinner>
    </div>
    )
 }
}export default AssetManagement