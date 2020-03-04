import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import Header from './components/Header';
import Admin from './components/Admins';
import Edit from './components/admin/Edit';
import Sidebar from './components/Sidebar';
import {AtiSpinner,AtiBackTop} from 'ati-react-web';
import $ from 'jquery';

class AdminView extends React.Component {
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
   var id = sessionStorage.getItem('addEdit')

  const validate=()=>{
    if(id!=null){
    return <Edit/>
  }else{
    return <Admin/>;
  }}
 return (
    <div>
   <AtiSpinner tip='Loading...'
    size='large'
  delay={50}
  spinning={this.state.loading}>
    <Header/>
    <Sidebar title ={'sys-admin'}/>
    <main className="app-content" style={{"height": 1000}}>
    <AtiBackTop />
    {validate()}
    </main>
    </AtiSpinner>
    </div>
    )
 }
}export default AdminView