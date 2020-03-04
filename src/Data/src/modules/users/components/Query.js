import React, { Component } from 'react';
import {AtiForm,AtiButton,AtiSpinner,AtiFormItem,AtiTextAreaField,AtiDropdown, AtiSelectBox } from 'ati-react-web';
import {Icon,Input,Button} from 'antd';
import $ from 'jquery';
import Axios from 'axios';
class QueryComp extends Component {
  constructor(props){
    super(props);
    this.state={
        fname:'',
        lname:'',
        username:'',
        con:'' ,
        fname:'',
        lname:'',
        username : '',
        password : '',
        emp_id : '',
        profile : '',
        loginas : '',
        status :'',
        dor :'',
        type:'--',
        query:'',
        query_to:'',
        reply:'',
        cd:''
    }
  }
  componentDidMount() {
    var id = sessionStorage.getItem('id');
    // when component mounted, start a GET request
    // to specified URL
    fetch("http://localhost:5555/users/"+id)
      // when we get a response map the body to json
      .then(response => response.json())
      // and update the state data to said json
      .then(data => this.setState({ 
        fname:data.fname,
        lname:data.lname,
        username:data.username,
        fname:data.fname,
        lname:data.lname,
        con:data.con,
        username : data.username,
        password : data.password,
        emp_id : data.emp_id,
        profile : data.profile,
        loginas : data.loginas,
        status : data.status,
        dor : data.dor,
      }));

  }
  
  
  insertData = () =>{
    var id = sessionStorage.getItem('id');
    var rand = Math.floor(Math.random() * 100000) + 1 ;
    const insertData={
        
       emp_id:this.state.emp_id,
       query_to:this.state.query_to,
       query:$('#query').val(),
       status:0,
        dor:new Date().toLocaleString(),
        user_id:id,
        request_id:rand,
        reply:this.state.reply,
        cd:this.state.cd,
        name:this.state.fname+this.state.lname
      };
     var to=this.state.query_to;
     var qu=$('#query').val();
     if(to!==""&&qu!==""){
     this.insert(insertData).then((result=>{
        if(result=='OK'){
           alert("ok")
        }
     }));
     alert("Query has been Submitted!! ");
     window.location.reload();
    }
    else{
      alert("Please select a Department");
    }
  }
 
 
 
 
 
   async insert(params) {
      
     try{    
       let response =Axios.post('http://localhost:5555/faq',params);
           
     }
    
     catch(error){
       alert("Error While geting Data from API")
       console.error(error)
 
     }
   
 }
 
 render(){
 return (
    <div>
       
        <div class="row user">
        <div class="col-md-12">
           
        </div>
        
        
      </div>
      <div className="row"><br/></div>
      <div className="row">
      </div>
      
      <div class="tile user-settings">
                <h4 class="line-head">Raise Query</h4>
                <AtiForm events={{onSubmit:this.insertData}}>
                
                    <div class="col-md-4">
                      <label>Employee Id</label>
                      <AtiFormItem className="form-control" id='fname' name='fname'
                          labelCol={{"xs": {"span": 24}, "sm": {"span": 8}}}
                          wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                          <Input 
                          value={this.state.emp_id}
                          onChange={(e)=>{this.setState({emp_id:e.target.value})}}   
                          type='text'
                          name="e"
                          readonly={true}
                          disabled={true}
                          style={{'border-color':'white'}}
                          placeholder='First name...' />
                      </AtiFormItem>
                   </div>
                   
                    <div class="col-md-4">
                        <label>Query To</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <br/>
                      <select className="form-control" name = "query_to" id = "query_to" 
                      onChange={(e)=>{this.setState({query_to:e.target.value})}}>
                        <option value = "">--- Dept ---</option>
                        <option value = "HR">HR</option>
                        <option value = "IT">IT</option>
                        <option value = "Admin">Admin</option>
                    </select>
                      <br/><br/>
                    </div>
                  
                  <div class="row">
                    <div class="col-md-8 mb-4">
                    
                    <div class="clearfix">
                    <div class="col-md-8 mb-4">
                      <label>Query</label>
                      <textarea class="form-control" rows="5" cols="100" 
                      name="query" id="query" 
                      maxLength="100" 
                      placeholder="Please write your request here">
                      </textarea>
                    </div>
                    </div></div>
                  </div>
                  <div class="row mb-10">
                    <div class="col-md-12">
                    <Button type='primary'
                  htmlType='submit'>
                 <i class="fa fa-fw fa-lg fa-check-circle"></i> &nbsp;&nbsp;<b>Submit</b>&nbsp;&nbsp;
                </Button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b><span id = 'successAlert' style={{color:'green',display:'none'}} ></span></b>
                    </div>
                  </div>
          
          </AtiForm>

               
              </div>
            
    </div>
    
    )
 }
}
export default QueryComp