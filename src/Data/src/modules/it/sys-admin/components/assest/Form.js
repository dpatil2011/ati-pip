import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import {AtiForm,AtiFormItem,AtiTable,AtiAlertBox} from 'ati-react-web';
import {Input,Button} from 'antd';
import $ from 'jquery';
import axios from 'axios';

class Form extends React.Component {
    
    constructor(props){
        super(props);
        
        this.state={
          isAlertOpen:false,
          regDate:new Date(),
          f1:'',
          f2:'',
          f3:'',
          f4:'',
          f5:'',
          f6:'',
          f7:'',
          f8:"",
          f9:"",
          f10:"",
          emp_id:'',
          con:'',
          formData:[],
          category:[],
          fieldSize:"",
          asset_form_id:"",
          data:[]
                
        };
      }
      componentDidMount() {
        // when component mounted, start a GET request
        // to specified URL

        fetch("http://localhost:5555/category?type=it&status=1")
        // when we get a response map the body to json
        .then(response => response.json())
        // and update the state data to said json
        .then(category => this.setState({ category }));

      
        //   fetch("http://localhost:5555/asset_form/1")
        //   // when we get a response map the body to json
        //   .then(response => response.json())
        //   // and update the state data to said json
        //   .then(formData => this.setState({ formData }));
      }

      
    handleSubmit = () =>{
       
        var fname = $('#fname').val();
        var lname = $('#lname').val();
        var username = $('#email').val();
        var password = '123456789';
        var emp_id=$('#empId').val();
        var con=$('#number').val();
        var profile = "Admin";
        var loginas = "admin";
        var status = "0";
        var dor =this.state.regDate;
        var check = true;
        
        this.state.data.map(function(login){
          var c=login.username;
          var l = login.loginas;
          if(c==username && l==loginas){
            check = false
          }
         });
         if(check){
          axios({
            method: 'post',
            url: 'http://localhost:5555/login/',
            data: {fname,lname,username,password,emp_id,con,profile,loginas,status,dor}, // you are sending body instead
            headers: {
              // 'Authorization': `bearer ${token}`,
            'Content-Type': 'application/json'
            }, 
          });
          
          $('#successAlert').show();
          this.setState({
            fname:'',
            lname:'',
            username:'',
            emp_id:'',
             number:''
          })
         }else{
         this.setState({
            isAlertOpen:true
         })
         }
          
        
      }
      regDate = b => {
       
        this.setState({
         
        regDate: b.format('YYYY/DD/MM')
    })}
    goBack=()=>{
     
        sessionStorage.removeItem('showForm')
    }
    showForm=()=>{
      var id = $('#request_type').val();
      var header=[];
      if(id!==''){
      $('#1').show()
       var size;

        return <div className="form-group col-md-8"  style={{marginLeft:"150px"}}>
        <AtiForm id = "addprofile" events={{onSubmit:this.insert}}>
               
                <div >
                {
                 // var i = 0;
                 
                  this.state.formData.map(function(f){
                 
                 
                    var i = 0;
                    if(f.f1!=""){ 
                    
                      i++;
                    var temp=    <AtiFormItem id='aa'
                      config={{"rules": [{"required": true, "message": "Required Fields!"}]}}
                      labelCol={{"xs": {"span": 24}, "sm": {"span": 8}}}
                      wrapperCol={{"xs": {"span": 45}, "sm": {"span": 25}}}>
                      
                      <Input
                              type='text'
                        placeholder={f.f1}
                        id='a' />
                      
                                            
                       
                    </AtiFormItem>
                header.push(temp);
                    }
                    if(f.f2!=""){
                      i++;
                     var temp =   <AtiFormItem id='bb'
                      config={{"rules": [{"required": true, "message": "Required Fields!"}]}}
                      labelCol={{"xs": {"span": 24}, "sm": {"span": 8}}}
                      wrapperCol={{"xs": {"span": 45}, "sm": {"span": 25}}}>
                      <Input
                              type='text'
                        placeholder={f.f2}
                        id='b' />
                    </AtiFormItem>
                header.push(temp)
                    }
                    if(f.f3!=""){
                      i++;
                     var temp =  <AtiFormItem id='cc'
                      config={{"rules": [{"required": true, "message": "Required Fields!"}]}}
                      labelCol={{"xs": {"span": 24}, "sm": {"span": 8}}}
                      wrapperCol={{"xs": {"span": 45}, "sm": {"span": 25}}}>
                      <Input
                              type='text'
                        placeholder={f.f3}
                        id='c' />
                    </AtiFormItem>
                header.push(temp)
                    }
                    if(f.f4!=""){
                      i++;
                     var temp =   <AtiFormItem id='dd'
                      config={{"rules": [{"required": true, "message": "Required Fields!"}]}}
                      labelCol={{"xs": {"span": 24}, "sm": {"span": 8}}}
                      wrapperCol={{"xs": {"span": 45}, "sm": {"span": 25}}}>
                      <Input
                              type='text'
                        placeholder={f.f4}
                        id='d' />
                    </AtiFormItem>
                header.push(temp)
                    }
                    if(f.f5!=""){
                      i++;
                     var temp =   <AtiFormItem id='ee'
                      config={{"rules": [{"required": true, "message": "Required Fields!"}]}}
                      labelCol={{"xs": {"span": 24}, "sm": {"span": 8}}}
                      wrapperCol={{"xs": {"span": 45}, "sm": {"span": 25}}}>
                      <Input
                              type='text'
                        placeholder={f.f5}
                        id='e' />
                    </AtiFormItem>
                header.push(temp)
                    }
                    if(f.f6!=""){
                      i++;
                     var temp =   <AtiFormItem id='ff'
                      config={{"rules": [{"required": true, "message": "Required Fields!"}]}}
                      labelCol={{"xs": {"span": 24}, "sm": {"span": 8}}}
                      wrapperCol={{"xs": {"span": 45}, "sm": {"span": 25}}}>
                      <Input
                              type='text'
                        placeholder={f.f6}
                        id='f' />
                    </AtiFormItem>
                header.push(temp)
                    }
                    if(f.f7!=""){
                      i++;
                     var temp =   <AtiFormItem id='gg'
                      config={{"rules": [{"required": true, "message": "Required Fields!"}]}}
                      labelCol={{"xs": {"span": 24}, "sm": {"span": 8}}}
                      wrapperCol={{"xs": {"span": 45}, "sm": {"span": 25}}}>
                      <Input
                              type='text'
                        placeholder={f.f7}
                        id='g' />
                    </AtiFormItem>
                header.push(temp)
                    }
                    if(f.f8!=""){
                      i++;
                     var temp =  <AtiFormItem id='hh'
                      config={{"rules": [{"required": true, "message": "Required Fields!"}]}}
                      labelCol={{"xs": {"span": 24}, "sm": {"span": 8}}}
                      wrapperCol={{"xs": {"span": 45}, "sm": {"span": 25}}}>
                      <Input
                              type='text'
                        placeholder={f.f8}
                        id='h' />
                    </AtiFormItem>
                header.push(temp)
                    }
                    if(f.f9!=""){
                      i++;
                     var temp =   <AtiFormItem id='ii'
                      config={{"rules": [{"required": true, "message": "Required Fields!"}]}}
                      labelCol={{"xs": {"span": 24}, "sm": {"span": 8}}}
                      wrapperCol={{"xs": {"span": 45}, "sm": {"span": 25}}}>
                      <Input
                              type='text'
                        placeholder={f.f9}
                        id='i' />
                    </AtiFormItem>
                header.push(temp)
                    }
                    if(f.f10!=""){
                     i++;
                     var temp =  <AtiFormItem id='jj'
                      config={{"rules": [{"required": true, "message": "Required Fields!"}]}}
                      labelCol={{"xs": {"span": 24}, "sm": {"span": 8}}}
                      wrapperCol={{"xs": {"span": 45}, "sm": {"span": 25}}}>
                      <Input
                              type='text'
                        placeholder={f.f10}
                        id='j' />
                    </AtiFormItem>
                header.push(temp)
                    }
                    return header
                  })
                }
               
                </div>
                <div className="form-group col-md-12">
                <div className="form-group col-md-12 align-self-end">
               
                <Button type='primary'
                id='addCatbtn'
                htmlType='submit'
               
                ><i className="fa fa-plus"></i>Add</Button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <b><span id = 'successAlert' style={{color:'green',display:'none'}} >Action performed successfully.</span></b>
                </div>
                  </div>
               
                </AtiForm>
                </div>
      }
     else{
       return id
     }
      
    }
  filter=()=>{
    var id = $('#request_type').val();
     var id=id.split(",");
     var catid=id[0];
     var size=id[1];
    
    fetch("http://localhost:5555/asset_form?catId="+catid)
    // when we get a response map the body to json
    .then(response => response.json())
    // and update the state data to said json
    .then(formData => this.setState({ formData }));
       this.showForm()
  }

    insert=()=>{
      var id = $('#request_type').val();
      var id=id.split(",");
      var catid=id[0];
      var size=id[1];
     var f1=$('#a').val();
     var f2=$('#b').val();
     var f3=$('#c').val();
     var f4=$('#d').val();
     var f5=$('#e').val();
     var f6=$('#f').val();
     var f7=$('#g').val();
     var f8=$('#h').val();
     var f9=$('#i').val();
     var f10=$('#j').val();
     var fields=size;
     var asset_form_id=catid;

     if(size<=5){
      f6 ="";
      f7 = "";
      f8 = "";
      f9 = "";
      f10 = "";
      
      }else if(size==6){
        f7 = "";
      f8 = "";
      f9 = "";
      f10 = "";
      }else if(size==7){
        f8 = "";
      f9 = "";
      f10 = "";
      }
      else if(size==8){
        f9 = "";
      f10 = "";
      }
      else if(size==9){
      f10 = "";
      }
          

      const data={f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,fields,asset_form_id}
         

      window.setTimeout(()=>{
        var url = "http://localhost:5555/available_assets";
        fetch(url, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, cors, *same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
              'Content-Type': 'application/json',
              // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: 'follow', // manual, *follow, error
          referrer: 'no-referrer', // no-referrer, *client
          body: JSON.stringify(data), // body data type must match "Content-Type" header
      })
      .then(response => response.json().then(data=>{
        console.log(data)
        alert("Saved Successfully")
      })); // parses JSON response into native JavaScript objects 
      },300)


    }
 render(){
    const regDate=this.state;
   this.state.formData.map(function(f){
    
   })
 return (
    <div>
            
                          <div className="app-title">
                          <div>
        <h1><i className="fa fa-users"></i>&nbsp;&nbsp;&nbsp;Assets</h1>
                    
                    </div>
                </div>
                    
               
                <div className="row">
                
                    <div className="col-md-12">
                        
                    <div className="tile">
                  
                        <div className="tile-body" id ="data">     
                        <a  href="#"onClick={this.goBack.bind()}> {"<<"}</a><br/><br/>
                        <div className="form-group col-md-4">  
    <select className="form-control" id="request_type" name="request_type" onChange={this.filter.bind()}>
                  <option value = "">--- Select Category ---</option>
                  {
                    this.state.category.map(function(cat){
                    var insertdata=cat.id+","+cat.fields;
                      return(                 
                        <option value = {insertdata}>{cat.catName}</option>                       
                      )
                    })
                  }
                    </select>
                    </div> 
                 
              <div> 
        <AtiAlertBox  id="alert-id"
    color="danger" 
    isOpen={this.state.isAlertOpen} 
    onToggle={this.onToggleFunc} 
    closable 
    message="This email has been already in use">
</AtiAlertBox>

 </div>
 <div style={{display:'none'}} id="1">
   {this.showForm()}
 </div>

                  </div>                  
                 
                 
                     </div>                      
                    </div>
                    </div>
                </div>
          
            )
 }
}export default Form

