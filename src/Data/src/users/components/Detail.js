import React, { Component } from 'react';
import $ from 'jquery';
import {AtiForm,AtiButton,AtiSpinner,AtiFormItem, AtiTextbox} from 'ati-react-web';
import {Button, Icon} from 'antd';


export default class Detail extends Component {
  constructor(props){
    super(props);
    this.state={
      updated:{
      c_address:'',
      emp_id:'',
      c_pcode:'',
      p_email:'',
      pass_no:'',
      p_no:'',
      status:'LIVE'
      },
      datas:[], 
      user:[],
      emp_id:'',
      fname: '',
      lname:'',
      gender:'',
      dob:'',
      c_address:'',
      city:'',
      c_pcode:'',
      p_no:'',
      pass_no:'',
      pan_no:'',
      ad_no:'',
      p_email:'',
      off_email:'',
      r_manager:'',
      dept:'',
      title:'',
      doj:'',
    }
  }
  menter=()=>{
    if ($('#i1').is(":hidden")){ 
     $('#ee1').hide();
     $('#eee1').hide();
     $('#e1').show();
   }
 else{
   $('#ee1').show();
   $('#eee1').show();

 }}
   mleave=()=>{
     if ($('#ee1').is(":visible")){
     $('#ee1').hide();
     $('#eee1').hide();

   }
   else{
     $('#e1').hide();
   }}
   editable=(e)=>{
     if(e=='l1'){
       $('#l1').hide();
       $('#e1').hide();
       $('#ee1').show();
       $('#eee1').show();
       $('#i1').show();
     }
   }
   edited=(e)=>{
     if(document.getElementById("pno").value==""||document.getElementById("pno").value==null){
      $('#inpp').show();
      document.getElementById("inpp").innerHTML="Please enter valid phone number";
      
     }
     else{
      $('#inpp').hide();
    this.state.updated.p_no=document.getElementById("pno").value;
    this.state.updated.emp_id=this.state.emp_id
     if(e=='l1'){
       $('#l1').show();
       $('#e1').show();
       $('#ee1').hide();
       $('#eee1').hide();
       $('#i1').hide();
     }}
   }
   editedd=(e)=>{
    $('#inpp').hide();
     if(e=='l1'){
       $('#l1').show();
       $('#e1').show();
       $('#ee1').hide();
       $('#eee1').hide();
       $('#i1').hide();
     }
   }
   menter1=()=>{
    if ($('#inp1').is(":hidden")){ 
     $('#icc1').hide();
     $('#iccc1').hide();
     $('#ic1').show();
   }
 else{
   $('#icc1').show();
   $('#iccc1').show();
 }}
   mleave1=()=>{
     if ($('#icc1').is(":visible")){
     $('#icc1').hide();
     $('#iccc1').hide();
   }
   else{
     $('#ic1').hide();
   }}
   editable1=(e)=>{
     if(e=='lab1'){
       $('#lab1').hide();
       $('#ic1').hide();
       $('#icc1').show();
       $('#iccc1').show();
       $('#inp1').show();
     }
   }
   edited1=(e)=>{
    var mailformat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    if(document.getElementById("pemail").value==""||document.getElementById("pemail").value==null||!(document.getElementById("pemail").value.match(mailformat))){
      $('#inpp1').show();
      document.getElementById("inpp1").innerHTML="Please enter valid email";
      
     }
     else{
      $('#inpp1').hide();
    this.state.updated.p_email=document.getElementById("pemail").value;
    this.state.updated.emp_id=this.state.emp_id
     if(e=='lab1'){
       $('#lab1').show();
       $('#ic1').show();
       $('#icc1').hide();
       $('#iccc1').hide();
       $('#inp1').hide();
     }
   }}
   editedd1=(e)=>{
    $('#inpp1').hide();
     if(e=='lab1'){
       $('#lab1').show();
       $('#ic1').show();
       $('#icc1').hide();
       $('#iccc1').hide();
       $('#inp1').hide();
     }
   }
   menter2=()=>{
    if ($('#inp2').is(":hidden")){ 
     $('#icc2').hide();
     $('#iccc2').hide();
     $('#ic2').show();
   }
 else{
   $('#icc2').show();
   $('#iccc2').show();
 }}
   mleave2=()=>{
     if ($('#icc2').is(":visible")){
     $('#icc2').hide();
     $('#iccc2').hide();
   }
   else{
     $('#ic2').hide();
   }}
   editable2=(e)=>{
     if(e=='lab2'){
       $('#lab2').hide();
       $('#ic2').hide();
       $('#icc2').show();
       $('#iccc2').show();
       $('#inp2').show();
     }
   }
   edited2=(e)=>{ if(document.getElementById("caddress").value==""||document.getElementById("caddress").value==null){
    $('#inpp2').show();
    document.getElementById("inpp2").innerHTML="Please enter valid address";
    
   }
   else{
    $('#inpp2').hide();
    this.state.updated.c_address=document.getElementById("caddress").value;
    this.state.updated.emp_id=this.state.emp_id
     if(e=='lab2'){
       $('#lab2').show();
       $('#ic2').show();
       $('#icc2').hide();
       $('#iccc2').hide();
       $('#inp2').hide();
     }
   }}
   editedd2=(e)=>{
     $('#inpp2').hide();
     if(e=='lab2'){
       $('#lab2').show();
       $('#ic2').show();
       $('#icc2').hide();
       $('#iccc2').hide();
       $('#inp2').hide();
     }
   }
   menter3=()=>{
    if ($('#inp3').is(":hidden")){ 
     $('#icc3').hide();
     $('#iccc3').hide();
     $('#ic3').show();
   }
 else{
   $('#icc3').show();
   $('#iccc3').show();
 }}
   mleave3=()=>{
     if ($('#icc3').is(":visible")){
     $('#icc3').hide();
     $('#iccc3').hide();
   }
   else{
     $('#ic3').hide();
   }}
   editable3=(e)=>{
     if(e=='lab3'){
       $('#lab3').hide();
       $('#ic3').hide();
       $('#icc3').show();
       $('#iccc3').show();
       $('#inp3').show();
     }
   }
   edited3=(e)=>{
    if(document.getElementById("pcode").value==""||document.getElementById("pcode").value==null){
      $('#inpp3').show();
      document.getElementById("inpp3").innerHTML="Please enter valid pin code";
      
     }
     else{
      $('#inpp3').hide();
    this.state.updated.c_pcode=document.getElementById("pcode").value;
    this.state.updated.emp_id=this.state.emp_id
     if(e=='lab3'){
       $('#lab3').show();
       $('#ic3').show();
       $('#icc3').hide();
       $('#iccc3').hide();
       $('#inp3').hide();
     }}
   }
   editedd3=(e)=>{
     $('#inpp3').hide();
     if(e=='lab3'){
       $('#lab3').show();
       $('#ic3').show();
       $('#icc3').hide();
       $('#iccc3').hide();
       $('#inp3').hide();
     }
   }
   menter4=()=>{
    if ($('#inp4').is(":hidden")){ 
     $('#icc4').hide();
     $('#ic4').show();
   }
 else{
   $('#icc4').show();
 }}
   mleave4=()=>{
     if ($('#icc4').is(":visible")){
     $('#icc4').hide();
   }
   else{
     $('#ic4').hide();
   }}
   editable4=(e)=>{
     if(e=='lab4'){
       $('#lab4').hide();
       $('#ic4').hide();
       $('#icc4').show();
       $('#inp4').show();
     }
   }
   edited4=(e)=>{
   
     if(e=='lab4'){
       $('#lab4').show();
       $('#ic4').show();
       $('#icc4').hide();
       $('#inp4').hide();
     }
   }
   menter5=()=>{
    if ($('#inp5').is(":hidden")){ 
     $('#icc5').hide();
     $('#iccc5').hide();
     $('#ic5').show();
   }
 else{
   $('#icc5').show();
   $('#iccc5').show();
 }}
   mleave5=()=>{
     if ($('#icc5').is(":visible")){
     $('#icc5').hide();
     $('#iccc5').hide();
    }
   else{
     $('#ic5').hide();
   }}
   editable5=(e)=>{
     if(e=='lab5'){
       $('#lab5').hide();
       $('#ic5').hide();
       $('#icc5').show();
       $('#iccc5').show();
       $('#inp5').show();
     }
   }
   edited5=(e)=>{
    if(document.getElementById("passport").value==""||document.getElementById("passport").value==null){
      $('#inpp5').show();
      document.getElementById("inpp5").innerHTML="Please enter valid passport number";
      
     }
     else{
      $('#inpp5').hide();
     this.state.updated.pass_no=document.getElementById("passport").value;
     
     this.state.updated.emp_id=this.state.emp_id
     if(e=='lab5'){
       $('#lab5').show();
       $('#ic5').show();
       $('#icc5').hide();
       $('#iccc5').hide();
       $('#inp5').hide();
     }}
   }
   editedd5=(e)=>{
     $('#inpp5').hide();
    if(e=='lab5'){
      $('#lab5').show();
      $('#ic5').show();
      $('#icc5').hide();
      $('#iccc5').hide();
      $('#inp5').hide();
    }
  }
   
      componentDidMount() {
        var id = sessionStorage.getItem('id');
        //alert(id)
        fetch("http://192.168.0.51:5555/users/"+id)
        
          .then(response => response.json())
          .then(data => this.setState({ 
            emp_id:data.emp_id,
            fname: data.fname,
            lname:data.lname,
            gender:data.gender,
            dob:data.dob,
            c_address:data.c_address,
            city:data.city,
            c_pcode:data.c_pcode,
            p_no:data.p_no,
            pass_no:data.pass_no,
            pan_no:data.pan_no,
            ad_no:data.ad_no,
            p_email:data.p_email,
            off_email:data.off_email,
            r_manager:data.r_manager,
            dept:data.dept,
            title:data.title,
            doj:data.doj,
            photo:data.photo
          }));
         
      }
    update=()=>{
     // alert(this.state.datas.length)
      var uid= this.state.emp_id;
      //alert(uid);
      fetch("http://192.168.0.51:5555/update?status=LIVE&emp_id="+uid)
      
      .then(response => response.json())
     .then(datas => {
      
      if(datas.length<=0){
        
       this.ins()

      }else{
        alert("We have already received your update request. please wait until you request is approved.")
   }
     });
      
}
    

  ins=()=>{
    alert("Your update request hes been sent for approval. You will be able to view the updated data once approved")
      var url = "http://192.168.0.51:5555/update";
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
        body: JSON.stringify(this.state.updated), // body data type must match "Content-Type" header
    })
    .then(response => response.json().then(data=>{
      console.log(data)
      
    //  this.props.history.push("/home")
    })); // parses JSON re(sponse into native JavaScript objects 
    window.location.reload().delay(5000);
  }
  render() { 
   
      return(
        <div>
      
    <div class="tile user-settings">
    <h4 class="line-head">Personal Info</h4>
    <AtiForm events={{onSubmit:this.update.bind()}}>
   
    <AtiFormItem className="form-control" id='eid' name='eid'>
          <div class="row">
          <div class="col-md-4">
          <label>Employee Id</label></div>
          <div class="col-md-3">
              <label>
              {this.state.emp_id}
              </label> 
              </div>
              
       </div>
       </AtiFormItem>
          <AtiFormItem className="form-control" id='fname' name='fname'>
          <div class="row">
          <div class="col-md-4">
          <label>Full Name</label></div>
          <div class="col-md-3">
              <label>
              {this.state.fname} {this.state.lname}
              </label> 
              </div>
         
       </div>
       </AtiFormItem>
       
       <AtiFormItem className="form-control" id='gender' name='gender'>
          <div class="row">
          <div class="col-md-4">
          <label>Gender</label></div>
          <div class="col-md-3">
              <label>
              {this.state.gender}
              </label> 
              </div>
              
       </div>
       </AtiFormItem>
       <AtiFormItem className="form-control" id='dob' name='dob'>
          <div class="row">
        <div class="col-md-4">
          <label>Date of Birth:</label>
          </div>
          <div class="col-md-3">
              <label>
              {this.state.dob}
              </label> 
       </div>
       </div>
       </AtiFormItem>
       <AtiFormItem className="form-control" id='jobt' name='jobt'>
          <div class="row">
          <div class="col-md-4">
          <label>Job Title</label></div>
          <div class="col-md-3">
              <label>
              {this.state.title}
              </label> 
              </div>
         
       </div>
       </AtiFormItem>
       <AtiFormItem className="form-control" id='dept' name='dept'>
          <div class="row">
          <div class="col-md-4">
          <label>Department</label></div>
          <div class="col-md-3">
              <label>
              {this.state.dept}
              </label> 
              </div>
         
       </div>
       </AtiFormItem>
       <AtiFormItem className="form-control" id='repmgr' name='repmgr'>
          <div class="row">
          <div class="col-md-4">
          <label>Reporting Manager</label></div>
          <div class="col-md-3">
              <label>
              {this.state.r_manager}
              </label> 
              </div>
         
       </div>
       </AtiFormItem>
       <AtiFormItem className="form-control" id='doj' name='doj'>
          <div class="row">
          <div class="col-md-4">
          <label>Date of join</label></div>
          <div class="col-md-3">
              <label>
              {this.state.doj}
              </label> 
              </div>
       </div>
       </AtiFormItem>
       <AtiFormItem className="form-control" id='cadd' name='cadd'
        //config={{"rules": [{"required": true, "message": "Please input your Current address!"}]}}
        >
          <div class="row" onMouseEnter={this.menter2.bind()} onMouseLeave={this.mleave2.bind()}>
        <div class="col-md-4">
          <label>Current Address:</label>
          </div>
          <div class="col-md-3" id="lab2">
              <label>
              {this.state.c_address}
              </label> 
         
       </div>
       <div class="col-md-3" id="inp2" style={{display:'none'}}>
          
       <input 
             style={{borderRadius:'5px', height:'35px'}}
              type='text'
              id="caddress"
              defaultValue={this.state.c_address}
              contentEditable={true}
              placeholder='Last name...'
               />
          </div>
          <div class="col-md-1">
          <a id ="ic2" onClick={this.editable2.bind(this,'lab2')} style={{display:'none'}}><i class="fa fa-fw fa-lg fa-edit"></i></a>
          <a id ="icc2" onClick={this.edited2.bind(this,'lab2')} style={{display:'none'}}><i class="fa fa-fw fa-lg fa-check"></i></a>
          <a id ="iccc2" onClick={this.editedd2.bind(this,'lab2')} style={{display:'none'}}><i class="fa fa-fw fa-lg fa-times"></i></a>
          </div>
          <small class="col-md-4" id="inpp2" style={{color:'red', display:'none'}}></small>
       </div>
       </AtiFormItem>
       <AtiFormItem className="form-control" id='city' name='city'>
          <div class="row">
        <div class="col-md-4">
          <label>City:</label>
          </div>
          <div class="col-md-3">
              <label>
              {this.state.city}
              </label> 
       </div>
       </div>
       </AtiFormItem>
       <AtiFormItem className="form-control" id='picode' name='pcode'
        //config={{"rules": [{"required": true, "message": "Please input your pincode!"}]}}
        >
          <div class="row" onMouseEnter={this.menter3.bind()} onMouseLeave={this.mleave3.bind()}>
        <div class="col-md-4">
          <label>Pincode:</label>
          </div>
          <div class="col-md-3" id="lab3">
              <label>
              {this.state.c_pcode}
              </label> 
       </div>
       <div class="col-md-3" id="inp3" style={{display:'none'}}>
       <input 
             style={{borderRadius:'5px', height:'35px'}}
              type='text'
              id="pcode"
              defaultValue={this.state.c_pcode}
              contentEditable={true}
              placeholder='Last name...' 
              />
          </div>
          <div class="col-md-1">
          <a id ="ic3" onClick={this.editable3.bind(this,'lab3')} style={{display:'none'}}><i class="fa fa-fw fa-lg fa-edit"></i></a>
          <a id ="icc3" onClick={this.edited3.bind(this,'lab3')} style={{display:'none'}}><i class="fa fa-fw fa-lg fa-check"></i></a>
          <a id ="iccc3" onClick={this.editedd3.bind(this,'lab3')} style={{display:'none'}}><i class="fa fa-fw fa-lg fa-times"></i></a>
          </div>
          <small class="col-md-4" id="inpp3" style={{color:'red', display:'none'}}></small>
          </div>
       
       </AtiFormItem>
       <AtiFormItem className="form-control" id='con' name='con' 
        //config={{"rules": [{"required": true, "message": "Please input your Contact number!"}]}}
        >
          <div class="row" onMouseEnter={this.menter.bind()} onMouseLeave={this.mleave.bind()}>
        <div class="col-md-4">
          <label>Contact no.:</label>
          </div>
          <div className="col-md-3" id="l1">
              <label>
              {this.state.p_no}
              </label> 
         
       </div>

       <div class="col-md-3" id="i1" style={{display:'none'}}>
          
       <input 
             style={{borderRadius:'5px', height:'35px'}}
              type='number'
              id="pno"
              defaultValue= {this.state.p_no}
              contentEditable={true}
              placeholder='Contact number..' 
              />
          </div>
          <div class="col-md-1">
          <a id ="e1" onClick={this.editable.bind(this,'l1')} style={{display:'none'}}><i class="fa fa-fw fa-lg fa-edit"></i></a>
          <a id ="ee1" onClick={this.edited.bind(this,'l1')} style={{display:'none'}}><i class="fa fa-fw fa-lg fa-check"></i></a>
          <a id ="eee1" onClick={this.editedd.bind(this,'l1')} style={{display:'none'}}><i class="fa fa-fw fa-lg fa-times"></i></a>
          </div>
          <small class="col-md-4" id="inpp" style={{color:'red', display:'none'}}></small>

       </div>

       </AtiFormItem>
       <AtiFormItem className="form-control" id='email' name='email'>
          <div class="row">
        <div class="col-md-4">
          <label>Official Email:</label>
          </div>
          <div class="col-md-4">
              <label>
              {this.state.off_email}
              </label> 
         
       </div>
       </div>
       </AtiFormItem>
       <AtiFormItem className="form-control" id='perem' name='perem'
       //config={{"rules": [{"required": true, "message": "Please input your personal email!"}]}}
       >
          <div class="row" onMouseEnter={this.menter1.bind()} onMouseLeave={this.mleave1.bind()}>
        <div class="col-md-4">
          <label>Personal Email:</label>
          </div>
          <div className="col-md-3" id="lab1">
              <label>
              {this.state.p_email}
              </label> 
         
       </div>

       <div class="col-md-3" id="inp1" style={{display:'none'}}>
         
       <input 
             style={{borderRadius:'5px', height:'35px'}}
              onChange={(e)=>{this.setState({lname:e.target.value})}}   
              type='text'
              id="pemail"
              defaultValue={this.state.p_email}
              contentEditable={true}
              placeholder='Enter your personal email...' />
          </div>
          <div class="col-md-1">
          <a id ="ic1" onClick={this.editable1.bind(this,'lab1')} style={{display:'none'}}><i class="fa fa-fw fa-lg fa-edit"></i></a>
          <a id ="icc1" onClick={this.edited1.bind(this,'lab1')} style={{display:'none'}}><i class="fa fa-fw fa-lg fa-check"></i></a>
          <a id ="iccc1" onClick={this.editedd1.bind(this,'lab1')} style={{display:'none'}}><i class="fa fa-fw fa-lg fa-times"></i></a>
       </div>
       <small class="col-md-4" id="inpp1" style={{color:'red', display:'none'}}></small>
       </div>
       
       </AtiFormItem>
       <AtiFormItem className="form-control" id='pport' name='pport'
       //config={{"rules": [{"required": true, "message": "Please input your passport no.!"}]}}
       >
          <div class="row" onMouseEnter={this.menter5.bind()} onMouseLeave={this.mleave5.bind()}>
        <div class="col-md-4">
          <label>Passport no.:</label>
          </div>
          <div class="col-md-3" id="lab5">
              <label>
              {this.state.pass_no} 
              </label> 
       </div>
       <div class="col-md-3" id="inp5" style={{display:'none'}}>
       <input 
             style={{borderRadius:'5px', height:'35px'}}
              type='text'
              id="passport"
              defaultValue={this.state.pass_no}
              contentEditable={true}
              placeholder='Last name...' />
          </div>
          <div class="col-md-1">
          <a id ="ic5" onClick={this.editable5.bind(this,'lab5')} style={{display:'none'}}><i class="fa fa-fw fa-lg fa-edit"></i></a>
          <a id ="icc5" onClick={this.edited5.bind(this,'lab5')} style={{display:'none'}}><i class="fa fa-fw fa-lg fa-check"></i></a>
          <a id ="iccc5" onClick={this.editedd5.bind(this,'lab5')} style={{display:'none'}}><i class="fa fa-fw fa-lg fa-times"></i></a>
</div>
      <small class="col-md-4" id="inpp5" style={{color:'red', display:'none'}}></small>
       </div>
       </AtiFormItem>
       <AtiFormItem className="form-control" id='city' name='city'>
          <div class="row">
        <div class="col-md-4">
          <label>Pan no.:</label>
          </div>
          <div class="col-md-4">
              <label>
              {this.state.pan_no}
              </label> 
       </div>
       </div>
       </AtiFormItem>
       <AtiFormItem className="form-control" id='city' name='city'>
          <div class="row">
        <div class="col-md-4">
          <label>Aadhar no.:</label>
          </div>
          <div class="col-md-4">
              <label>
              {this.state.ad_no}
              </label> 
       </div>
       </div>
       
       </AtiFormItem>
       {/* <AtiFormItem className="form-control" id='city' name='city'>
          <div class="row" onMouseEnter={this.menter4.bind()} onMouseLeave={this.mleave4.bind()}>
        <div class="col-md-4">
          <label>Driving license:</label>
          </div>
          <div class="col-md-4"   id="lab4">
              <label>
              Driving license here
              </label> 
       </div>
       <div class="col-md-4" id="inp4" style={{display:'none'}}>
         
         <input 
               style={{borderRadius:'5px', height:'35px'}}
                onChange={(e)=>{this.setState({lname:e.target.value})}}   
                type='text'
                id="t1"
                value={this.state.lname}
                contentEditable={true}
                placeholder='Last name...' />
            </div>
            <a id ="ic4" onClick={this.editable4.bind(this,'lab4')} style={{display:'none'}}><i class="fa fa-fw fa-lg fa-edit"></i></a>
            <a id ="icc4" onClick={this.edited4.bind(this,'lab4')} style={{display:'none'}}><i class="fa fa-fw fa-lg fa-check"></i></a>
       </div>
       </AtiFormItem> */}
     
        <div class="row mb-10">
        <div class="col-md-12">
        <Button type='primary'
      htmlType='submit'>
     <i class="fa fa-fw fa-lg fa-check-circle"></i> &nbsp;&nbsp;<b>Update</b>&nbsp;&nbsp;
    </Button>
       
        </div>
      </div>

</AtiForm>
</div>
   
  </div>
);
}
}