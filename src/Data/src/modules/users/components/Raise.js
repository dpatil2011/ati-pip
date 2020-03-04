import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import {AtiForm,AtiSelectBox,AtiDatePicker} from 'ati-react-web';
import $ from 'jquery';
import axios from 'axios';
import { request } from 'https';
class Raise extends React.Component {
  constructor(props){
    super(props);
    
    this.state={
      valueSelect:null,
      category:[],
      name:'',
      emp_id:''
    };
  }
  componentDidMount() {
    // when component mounted, start a GET category
    // to specified URL
    fetch("http://localhost:5555/category")
      // when we get a response map the body to json
      .then(response => response.json())
      // and update the state data to said json
      .then(category => this.setState({ category }));
      this.setState({
        load:false,
        
    })
    var id = sessionStorage.getItem('id');
    fetch("http://localhost:5555/login/"+id)
      // when we get a response map the body to json
      .then(response => response.json())
      // and update the state data to said json
      .then(detail => this.setState({ 
        name:detail.fname,
        emp_id:detail.emp_id,}));
  }
  handleSubmit = (event) =>{
    var id = sessionStorage.getItem('id');
    
  var rand = Math.floor(Math.random() * 100000) + 1 ;
    event.preventDefault();
    var asset = $('#asset').val();
    var requested_by =  "User";
    var request_id=id;
    var request_type = $('#request_type').val();
    var purpose=$('#purpose').val();
    var qty=$('#qty').val();
    var priority=$('#priority').val();
    var duration=$('#duration').val();
    var spec=$('#spec').val();
    var token="UT-"+rand;
    var name = this.state.name;
    var emp_id=this.state.emp_id;
    var status=0;
    var from=0;
    var to=0;
    var allot=0;
    var dor=new Date().toLocaleString();
    $('#successAlert').show();
    $('#raiseForm')[0].reset();
      axios({
        method: 'post',
        url: 'http://localhost:5555/request/',
        data: {asset,requested_by,request_type,purpose,qty,priority,duration,spec,token,status,from,to,allot,dor,request_id,name,emp_id}, // you are sending body instead
        headers: {
          // 'Authorization': `bearer ${token}`,
        'Content-Type': 'application/json'
        }, 
      });
      
  }
  
 render(){
  const selectData = [
    { name: 'USD', desc: 'United States dollar' },
    { name: 'IDR', desc: 'Indonesian rupiah' },
    { name: 'SGD', desc: 'Singapore dollar' },
];
const onItemChanged = (items,e)=>{
  //do something with the selected items here
  console.log(items);
}
 return (
    <div>
        <div className="tile">
              <h3 className="tile-title">Request - Form</h3>
              <div className="tile-body col-md-8 offset-md-2">
              
                <form className="row" id ="raiseForm"onSubmit={this.handleSubmit}>
                  <div>
                  
                  </div>
                  <div className="form-group col-md-6">
                
                  <select className="form-control" id="request_type" name="request_type" onChange={this.handleInputChange}>
                        <option value = "">--- For ---</option>
                        <option value = "Self">Self</option>
                        <option value = "Department">Department</option>
                    </select>
                  
                  </div>
                  <div className="form-group col-md-6">
                  <select className="form-control" style={{display:'none'}} id = "project" name = "project" >
                  <option value = "">--- Choose Your Department ---</option>
                  <option value = "IT-Department">IT-Department</option>
                    <option value = "Developers-Dept.">Developers-Dept.</option>
                </select>
                   
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
                  <select className="form-control" name = "priority" id = "priority">
                        <option value = "">--- Priority ---</option>
                        <option value = "Low">Low</option>
                        <option value = "Medium">Medium</option>
                        <option value = "High">High</option>
                    </select>
                  
                  </div>
                  <div className="form-group col-md-6">
                  <select className="form-control" name="duration" id="duration">
                  <option  value = "">--- Duration ---</option>
                  <option value = "Long-Term">Short-Term(Max 2 Month)</option>
                  <option value = "Short-Term">Long-Term(Max 1 Year)</option>
                  <option value = "Valid through project">Valid through project</option>
                  </select>
                   
                  </div>

                    <div className="form-group col-md-6">
                      <select className="form-control" name="asset" id="asset">
                        <option value = "">--- Assets ---</option>
                        {this.state.category.map(function(category,index){
                         return <option value = {category.catName}>{category.catName}</option>
                         })}
                    </select>
                   
                  </div>
                  <div className="form-group col-md-6">
                  <input className="form-control" id = "qty" name = "qty" type="number" placeholder="Quantity"/>
                  </div>
                  <div className="form-group col-md-12">
                <input className="form-control" name = "purpose" id = "purpose" type="text" placeholder="Purpose"/>
                </div>
                  <div className="form-group col-md-12">
                   <textarea class="form-control" name="spec" id="spec" rows="3" placeholder="Required Specification (Optional)"></textarea>
                  </div>
                  <div className="form-group col-md-12 align-self-end">
                    <button className="btn btn-primary" type="submit"><i className="fa fa-shopping-bag"></i>&nbsp;&nbsp;&nbsp; Raise</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <b><span id = 'successAlert' style={{color:'green',display:'none'}} >Request raised successfully...</span></b>
          
                  </div>
                </form>
              </div>
            </div>
    </div>
    )
 }
}export default Raise

