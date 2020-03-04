import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import Header from './components/Header';
import Request from './components/Request';
import Sidebar from './components/Sidebar';
import {AtiSpinner,AtiBackTop} from 'ati-react-web';
import $ from 'jquery';

class RequestView extends React.Component {
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
 return (
    <div>
   <AtiSpinner tip='Loading...'
    size='large'
  delay={50}
  spinning={this.state.loading}>
    <Header/>
    <Sidebar title={'request'}/>
    <main className="app-content" style={{"height": 1000}}>
    <AtiBackTop />
    <Request/>
    </main>
    </AtiSpinner>
    </div>
    )
 }
}export default RequestView