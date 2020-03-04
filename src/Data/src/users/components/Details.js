import React, { Component } from 'react';
import $ from 'jquery';
import {AtiForm,AtiButton,AtiSpinner,AtiFormItem, AtiTextbox} from 'ati-react-web';
import {Button, Icon} from 'antd';

export default class Detail extends Component {
  constructor(props){
    super(props);
    this.state={
      updated:[{
      c_address:'',
      emp_id:'',
      t_pcode:'',
      p_email:'',
      pass_no:'',
      p_no:'',
      user_id: sessionStorage.getItem('id'),
      status:''
      }],
      datas:[], 
      user:[]
    }
  }
  menter=()=>{
    if ($('#i1').is(":hidden")){ 
     $('#ee1').hide();
     $('#e1').show();
   }
 else{
   $('#ee1').show();
 }}
   mleave=()=>{
     if ($('#ee1').is(":visible")){
     $('#ee1').hide();
   }
   else{
     $('#e1').hide();
   }}
   editable=(e)=>{
     if(e=='l1'){
       $('#l1').hide();
       $('#e1').hide();
       $('#ee1').show();
       $('#i1').show();
     }
   }
   edited=(e)=>{
    this.state.updated.p_no=document.getElementById("pno").value;
    this.state.updated.emp_id=this.state.datas.emp_id
    alert(this.state.updated.p_no);
     if(e=='l1'){
       $('#l1').show();
       $('#e1').show();
       $('#ee1').hide();
       $('#i1').hide();
     }
   }
   menter1=()=>{
    if ($('#inp1').is(":hidden")){ 
     $('#icc1').hide();
     $('#ic1').show();
   }
 else{
   $('#icc1').show();
 }}
   mleave1=()=>{
     if ($('#icc1').is(":visible")){
     $('#icc1').hide();
   }
   else{
     $('#ic1').hide();
   }}
   editable1=(e)=>{
     if(e=='lab1'){
       $('#lab1').hide();
       $('#ic1').hide();
       $('#icc1').show();
       $('#inp1').show();
     }
   }
   edited1=(e)=>{
    this.state.updated.p_email=document.getElementById("pemail").value;
    this.state.updated.emp_id=this.state.datas.emp_id
    alert(this.state.updated.p_email);
     if(e=='lab1'){
       $('#lab1').show();
       $('#ic1').show();
       $('#icc1').hide();
       $('#inp1').hide();
     }
   }
   menter2=()=>{
    if ($('#inp2').is(":hidden")){ 
     $('#icc2').hide();
     $('#ic2').show();
   }
 else{
   $('#icc2').show();
 }}
   mleave2=()=>{
     if ($('#icc2').is(":visible")){
     $('#icc2').hide();
   }
   else{
     $('#ic2').hide();
   }}
   editable2=(e)=>{
     if(e=='lab2'){
       $('#lab2').hide();
       $('#ic2').hide();
       $('#icc2').show();
       $('#inp2').show();
     }
   }
   edited2=(e)=>{
    this.state.updated.c_address=document.getElementById("caddress").value;
    this.state.updated.emp_id=this.state.datas.emp_id
    alert(this.state.updated.c_address);
     if(e=='lab2'){
       $('#lab2').show();
       $('#ic2').show();
       $('#icc2').hide();
       $('#inp2').hide();
     }
   }
   menter3=()=>{
    if ($('#inp3').is(":hidden")){ 
     $('#icc3').hide();
     $('#ic3').show();
   }
 else{
   $('#icc3').show();
 }}
   mleave3=()=>{
     if ($('#icc3').is(":visible")){
     $('#icc3').hide();
   }
   else{
     $('#ic3').hide();
   }}
   editable3=(e)=>{
     if(e=='lab3'){
       $('#lab3').hide();
       $('#ic3').hide();
       $('#icc3').show();
       $('#inp3').show();
     }
   }
   edited3=(e)=>{
     if(e=='lab3'){
       $('#lab3').show();
       $('#ic3').show();
       $('#icc3').hide();
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
    this.state.updated.t_pcode=document.getElementById("pcode").value;
    this.state.updated.emp_id=this.state.datas.emp_id
    alert(this.state.updated.t_pcode);
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
     $('#ic5').show();
   }
 else{
   $('#icc5').show();
 }}
   mleave5=()=>{
     if ($('#icc5').is(":visible")){
     $('#icc5').hide();
   }
   else{
     $('#ic5').hide();
   }}
   editable5=(e)=>{
     if(e=='lab5'){
       $('#lab5').hide();
       $('#ic5').hide();
       $('#icc5').show();
       $('#inp5').show();
     }
   }
   edited5=(e)=>{
     this.state.updated.pass_no=document.getElementById("passport").value;
     this.state.updated.emp_id=this.state.datas.emp_id
     alert(this.state.updated.pass_no);
     if(e=='lab5'){
       $('#lab5').show();
       $('#ic5').show();
       $('#icc5').hide();
       $('#inp5').hide();
     }
   }
   
      componentDidMount() {
        var id = sessionStorage.getItem('id');
        fetch("http://192.168.0.51:5555/user/"+id)
          .then(response => response.json())
          .then(data => this.setState({ 
            emp_id:data.emp_id,
            name: data.name,
            gender:data.gender,
            dob:data.dob,
            c_address:data.c_address,
            city:data.city,
            t_pcode:data.t_pcode,
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
          var uid= sessionStorage.getItem('id');
          fetch("http://192.168.0.51:5555/update?status=LIVE&user_id="+uid)
          
          .then(response => response.json())
         .then(data => this.setState({ 
          updated:{
            c_address:data.c_address,
            emp_id:data.emp_id,
            t_pcode:data.t_pcode,
            p_email:data.p_email,
            pass_no:data.pass_no,
            p_no:data.p_no,
            user_id: sessionStorage.getItem('id'),
            status:'',
            id:data.id 
          }

          }));
      }
    update=()=>{
      alert("hey")
      if(typeof(this.state.updated.length)=="undefined"){
          this.insert();}
  //     }else{
  //       var id = this.state.updated.id;
      
  //     console.log(this.state)
  //     fetch("http://localhost:5555/update/"+id, {
  //      method: 'PUT', // or 'PUT'
  //      mode: 'cors', // no-cors, cors, *same-origin
  //     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  //     credentials: 'same-origin', // include, *same-origin, omit
  //     headers: {
  //         'Content-Type': 'application/json',
  //         // 'Content-Type': 'application/x-www-form-urlencoded',
  //     },
  //     redirect: 'follow', // manual, *follow, error
  //     referrer: 'no-referrer', // no-referrer, *client
  //      body: JSON.stringify(this.state.updated), // data can be `string` or {object}!
  //      headers:{
  //        'Content-Type': 'application/json'
  //      }
  //    }).then(res => res.json())
  //    .then(response => console.log('Success:', JSON.stringify(response))).then(()=>{
  //        alert("Your update request hes been sent for approval. You will be able to view the updated data once approved")
  //    })
  //    .catch(error => console.error('Error:', error));
  // }}
    }

  ins=()=>{
    alert("alert");
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
    })); // parses JSON response into native JavaScript objects 

}
   
    render() { 
    const  hii=()=>{
     // alert(this.state.updated.length)
       if(typeof(this.state.updated.length)==="undefined"){
        
         if(this.state.updated.c_address!=''){
        //  alert("hi")
          document.getElementById("caddress").style.borderColor="yellow";
         }
         if(this.state.updated.t_pcode!=''){
          document.getElementById("pcode").style.borderColor='';
         }
         if(this.state.updated.p_email!=''){
         //  alert(this.state.updated.p_email)
          document.getElementById("pemail").style.borderColor="yellow";
         }
         if(this.state.updated.pass_no!=''){
          document.getElementById("passport").style.borderColor="yellow";
         }
         if(this.state.updated.p_no!=''){
          document.getElementById("pno").style.borderColor="yellow";
         }
       } 
      
    }
      return(
    <div class="tile user-settings">
    <h4 class="line-head">Info</h4>
    {hii()}
    <AtiForm events={{onSubmit:this.ins.bind()}}>
   
    <AtiFormItem className="form-control" id='eid' name='eid'>
          <div class="row">
          <div class="col-md-4">
          <label>Employee Id</label></div>
          <div class="col-md-4">
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
          <div class="col-md-4">
              <label>
              {this.state.name}
              </label> 
              </div>
         
       </div>
       </AtiFormItem>
       
       <AtiFormItem className="form-control" id='gender' name='gender'>
          <div class="row">
          <div class="col-md-4">
          <label>Gender</label></div>
          <div class="col-md-4">
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
          <div class="col-md-4">
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
          <div class="col-md-4">
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
          <div class="col-md-4">
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
          <div class="col-md-4">
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
          <div class="col-md-4">
              <label>
              {this.state.doj}
              </label> 
              </div>
       </div>
       </AtiFormItem>
       <AtiFormItem className="form-control" id='cadd' name='cadd'
        config={{"rules": [{"required": true, "message": "Please input your Current address!"}]}}>
          <div class="row" onMouseEnter={this.menter2.bind()} onMouseLeave={this.mleave2.bind()}>
        <div class="col-md-4">
          <label>Current Address:</label>
          </div>
          <div class="col-md-4" id="lab2">
              <label>
              {this.state.c_address}
              </label> 
         
       </div>
       <div class="col-md-4" id="inp2" style={{display:'none'}}>
          
       <input 
             style={{borderRadius:'5px', height:'35px'}}
              type='text'
              id="caddress"
              defaultValue={this.state.c_address}
              contentEditable={true}
              placeholder='Last name...'
              required />
          </div>
          <a id ="ic2" onClick={this.editable2.bind(this,'lab2')} style={{display:'none'}}><i class="fa fa-fw fa-lg fa-edit"></i></a>
          <a id ="icc2" onClick={this.edited2.bind(this,'lab2')} style={{display:'none'}}><i class="fa fa-fw fa-lg fa-check"></i></a>
       </div>
       </AtiFormItem>
       <AtiFormItem className="form-control" id='city' name='city'>
          <div class="row">
        <div class="col-md-4">
          <label>City:</label>
          </div>
          <div class="col-md-4">
              <label>
              {this.state.city}
              </label> 
       </div>
       </div>
       </AtiFormItem>
       <AtiFormItem className="form-control" id='pcode' name='pcode'
        config={{"rules": [{"required": true, "message": "Please input your pincode!"}]}}>
          <div class="row" onMouseEnter={this.menter3.bind()} onMouseLeave={this.mleave3.bind()}>
        <div class="col-md-4">
          <label>Pincode:</label>
          </div>
          <div class="col-md-4" id="lab3">
              <label>
              {this.state.t_pcode}
              </label> 
       </div>
       <div class="col-md-4" id="inp3" style={{display:'none'}}>
       <input 
             style={{borderRadius:'5px', height:'35px'}}
              type='text'
              id="pcode"
              defaultValue={this.state.t_pcode}
              contentEditable={true}
              placeholder='Last name...' 
              required/>
          </div>
         
          <a id ="ic3" onClick={this.editable3.bind(this,'lab3')} style={{display:'none'}}><i class="fa fa-fw fa-lg fa-edit"></i></a>
          <a id ="icc3" onClick={this.edited3.bind(this,'lab3')} style={{display:'none'}}><i class="fa fa-fw fa-lg fa-check"></i></a>
          </div>
       
       </AtiFormItem>
       <AtiFormItem className="form-control" id='con' name='con' 
        config={{"rules": [{"required": true, "message": "Please input your Contact number!"}]}}>
          <div class="row" onMouseEnter={this.menter.bind()} onMouseLeave={this.mleave.bind()}>
        <div class="col-md-4">
          <label>Contact no.:</label>
          </div>
          <div className="col-md-4" id="l1">
              <label>
              {this.state.p_no}
              </label> 
         
       </div>

       <div class="col-md-4" id="i1" style={{display:'none'}}>
          
       <input 
             style={{borderRadius:'5px', height:'35px'}}
              type='number'
              id="pno"
              defaultValue= {this.state.p_no}
              contentEditable={true}
              placeholder='Contact number..' 
              minLength='10'
              />
          </div>
          <a id ="e1" onClick={this.editable.bind(this,'l1')} style={{display:'none'}}><i class="fa fa-fw fa-lg fa-edit"></i></a>
          <a id ="ee1" onClick={this.edited.bind(this,'l1')} style={{display:'none'}}><i class="fa fa-fw fa-lg fa-check"></i></a>
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
       config={{"rules": [{"required": true, "message": "Please input your personal email!"}]}}>
          <div class="row" onMouseEnter={this.menter1.bind()} onMouseLeave={this.mleave1.bind()}>
        <div class="col-md-4">
          <label>Personal Email:</label>
          </div>
          <div className="col-md-4" id="lab1">
              <label>
              {this.state.p_email}
              </label> 
         
       </div>

       <div class="col-md-4" id="inp1" style={{display:'none'}}>
         
       <input 
             style={{borderRadius:'5px', height:'35px'}}
              onChange={(e)=>{this.setState({lname:e.target.value})}}   
              type='email'
              id="pemail"
              defaultValue={this.state.p_email}
              contentEditable={true}
              placeholder='Enter your personal email...' />
          </div>
          <a id ="ic1" onClick={this.editable1.bind(this,'lab1')} style={{display:'none'}}><i class="fa fa-fw fa-lg fa-edit"></i></a>
          <a id ="icc1" onClick={this.edited1.bind(this,'lab1')} style={{display:'none'}}><i class="fa fa-fw fa-lg fa-check"></i></a>
       </div>
       
       </AtiFormItem>
       <AtiFormItem className="form-control" id='pport' name='pport'
       config={{"rules": [{"required": true, "message": "Please input your passport no.!"}]}}>
          <div class="row" onMouseEnter={this.menter5.bind()} onMouseLeave={this.mleave5.bind()}>
        <div class="col-md-4">
          <label>Passport no.:</label>
          </div>
          <div class="col-md-4" id="lab5">
              <label>
              {this.state.pass_no}
              </label> 
       </div>
       <div class="col-md-4" id="inp5" style={{display:'none'}}>
       <input 
             style={{borderRadius:'5px', height:'35px'}}
              type='text'
              id="passport"
              defaultValue={this.state.pass_no}
              contentEditable={true}
              placeholder='Last name...' />
          </div>
          <a id ="ic5" onClick={this.editable5.bind(this,'lab5')} style={{display:'none'}}><i class="fa fa-fw fa-lg fa-edit"></i></a>
          <a id ="icc5" onClick={this.edited5.bind(this,'lab5')} style={{display:'none'}}><i class="fa fa-fw fa-lg fa-check"></i></a>
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
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b><span id = 'successAlert' style={{color:'green',display:'none'}} onClick={this.update} ></span></b>
        </div>
      </div>

</AtiForm>

   
  </div>
);
}
}
