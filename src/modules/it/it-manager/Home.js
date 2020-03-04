import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import {AtiSpinner,AtiBackTop} from 'ati-react-web';
import Dashboard from './components/Dashboard';

class Home extends React.Component {
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
    <Sidebar title ={'dashboard'}/>
    <main className="app-content" style={{"height": 1000}}>
    <AtiBackTop />
    <Dashboard/>
    </main>
    </AtiSpinner>
    </div>
    )
 }
}
export default Home