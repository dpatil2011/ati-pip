import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import {AtiForm,AtiSelectBox,AtiDatePicker} from 'ati-react-web';
import $ from 'jquery';
import axios from 'axios';
import { request } from 'https';
import {Icon,Input,Button} from 'antd';
import Recaptcha from 'react-recaptcha'
class RequestAdmin extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit=this.handleSubmit.bind(this)
    this.Recaptchaloaded=this.Recaptchaloaded.bind(this)
    this.verifyCallback=this.verifyCallback.bind(this) 
    this.state={
      valueSelect:null,
      category:[],
      name:'',
      emp_id:'',
      isverified:false,
      fname:'',
      lname:''
    };
  }
  componentDidMount() {
    // when component mounted, start a GET category
    // to specified URL
    fetch("http://localhost:5555/categoryAdmin")
      // when we get a response map the body to json
      .then(response => response.json())
      // and update the state data to said json
      .then(category => this.setState({ category }));
      this.setState({
        load:false,
        
    })
    var id = sessionStorage.getItem('id');
    fetch("http://localhost:5555/users/"+id)
      // when we get a response map the body to json
      .then(response => response.json())
      // and update the state data to said json
      .then(detail => this.setState({ 
        name:detail.fname,
        emp_id:detail.emp_id,
        fname:detail.fname,
        lname:detail.lname
      }));
  }


  handleSubmit = (event) =>{
    if(this.state.isverified){
    var id = sessionStorage.getItem('id');
    var rand = Math.floor(Math.random() * 100000) + 1 ;
    event.preventDefault();
    var asset = $('#asset').val();
    var type = $('#type12').val();
    var qty=$('#qty').val();
    var request=$('#reason').val();
    var request_id="UT-"+rand;
    var project = $('#project').val();
    var user_id=id;
    var emp_id=this.state.emp_id;
    var status=0;
    var dor=new Date().toLocaleString();
    var cd="";
    var request_to="Facility";
    var reply="";
    var name=this.state.fname+this.state.lname;
    $('#successAlert').show();
    $('#raiseForm')[0].reset();
    if(request!=''&& project!=''&& asset!=''&& type!=''&& qty!=''){
      axios({
        method: 'post',
        url: 'http://localhost:5555/request/',
        data: {asset,type,qty,request,status,user_id,dor,request_id,project,emp_id,cd,request_to,reply,name}, // you are sending body instead
        headers: {
                  'Content-Type': 'application/json'
        }, 
      });  
    }
      else{
        event.preventDefault();
        alert("input field is required")
        $('#successAlert').hide();
      }  
  }else{
    event.preventDefault();
    alert('please verify recaptcha')
  }
}
  
Recaptchaloaded(){
  console.log('loaded')
}
verifyCallback(response){
   if(response){
       this.setState({
         isverified:true
       })
   }
}
 render(){
 return (
    <div>
        <div className="tile">
              <div className="tile-body col-md-8 offset-md-2">
              
                <form className="row" id ="raiseForm"onSubmit={this.handleSubmit}>
                  <div>
                  
                  </div>
                  <div className="form-group col-md-6">

                      
                  
                  </div>
                  <div className="form-group col-md-6">
                   
                  </div>
                  {/* <AtiSelectBox id="currency" name="currency"
                    label="Currency" placeholder="Choose Currency .."
                    labelKey="desc"
                    valueKey="name"
                    data={selectData}
                    events={
                        {
                            onItemChanged: onItemChanged
                        }
                    }
                    value={this.state.valueSelect}
                    searchable={true}
                    clearable={true}
                    showSpinner={false}
                    disabled={false}
                    multi={false}
                    noResultsText={"data not found"}
                ></AtiSelectBox> */}
                  
                  <div className="form-group col-md-6">
                  <select className="form-control" name="type" id="type12">
                  <option value = "">--- Request Type ---</option>
                  <option value = "Official">Official</option>
                    <option value = "Personal">Personal</option>
                  </select>
                  
                  </div>
                  <div className="form-group col-md-6">
                   
                  </div>

                    <div className="form-group col-md-6">
                      <select className="form-control" name="asset" id="asset">
                        <option value = "">--- Item ---</option>
                        {this.state.category.map(function(category,index){
                         return <option value = {category.catName}>{category.catName}</option>
                         })}
                    </select>
                   
                  </div>
                  <div className="form-group col-md-6">
                  <input className="form-control" id = "qty" name = "qty" type="number" placeholder="Quantity"/>
                  </div>
                  <div className="form-group col-md-12">
                <input className="form-control" name = "project" id = "project" type="text" placeholder="Department/Project"/>
                </div>
                  <div className="form-group col-md-12">
                   <textarea class="form-control" rows="5" cols="100" name="reason" id="reason" maxLength="100" placeholder="Reason for the request"></textarea>
                  </div>
                  <div className="form-group col-md-12 align-self-end">
                    <button className="btn btn-primary" type="submit"><i className="fa fa-shopping-bag"></i>&nbsp;&nbsp;&nbsp; Request</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <b><span id = 'successAlert' style={{color:'green',display:'none'}} >Request raised successfully...</span></b>
          
                  </div>

                  <Recaptcha
    sitekey="6LeZTLkUAAAAABaIGXfG9hLzKLZA_2fI-zjbNUCI"
    render="explicit"
    onloadCallback={this.Recaptchaloaded}
    verifyCallback={this.verifyCallback}
  />
                </form>
              </div>
            </div>
    </div>
    )
 }
}export default RequestAdmin

