import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import Header from './components/Header';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import {AtiSpinner,AtiBackTop} from 'ati-react-web';
import $ from 'jquery';

class HomeView extends React.Component {
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
    <Sidebar title = {'dashboard'}/>
    <main className="app-content" style={{"height": 1000}}>
    <AtiBackTop />
    <Home/>
    </main>
    </AtiSpinner>
    </div>

    )
 }
}export default HomeView