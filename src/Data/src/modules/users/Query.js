import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import Header from './components/Header';
import Views from './components/Views';
import Sidebar from './components/Sidebar';
import {AtiSpinner,AtiBackTop} from 'ati-react-web';
import $ from 'jquery';
import QueryComp from './components/Query';

class Query extends React.Component {
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
    <Sidebar title={'view'}/>
    <main className="app-content" style={{"height": 1000}}>
    <AtiBackTop />
    <QueryComp/>
    </main>
    </AtiSpinner>
    </div>
    )
 }
}export default Query