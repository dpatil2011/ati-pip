import React, { Component } from 'react';
import $ from 'jquery';
import {AtiTable,AtiList,AtiCheckbox,AtiSwitch,AtiForm,AtiFormItem,AtiTextAreaField, AtiSpinner,AtiRadioButton,AtiRadioButtonItem} from 'ati-react-web';
import {Icon,Button,Input} from 'antd';
import axios from 'axios';
import { request } from 'http';


class ViewPending extends Component{
    
    state = {
        switch:1,
        load:true,
        event:'',
        request:[],
        user:[],
        requestData:[],
        load:true,
        value : 1,
        color:'green'
        
      };
       onChange = (e) => {
        this.setState({checked : !this.state.checked});
    }
  
        
    componentDidMount() {        
        var requestId = sessionStorage.getItem('viewId')
        var Ids=requestId.split(",");
        var reqId=Ids[0];
        var userId=Ids[1];

        if(requestId===''){
            window.location('/')
          }

        fetch("http://192.168.0.151:5555/user/"+userId)
        // when we get a response map the body to json
        .then(response => response.json())
        // and update the state data to said json
        .then(user => this.setState({ user }));
         this.setState({
          load:false
      });
        // when component mounted, start a GET request
        // to specified URL
        fetch("http://192.168.0.151:5555/request/"+reqId)
          // when we get a response map the body to json
          .then(response => response.json())
          // and update the state data to said json
          .then(request => this.setState({ request }));
          this.setState({
            load:false
        });
          
    
       
    }

    goBack=()=>{
     
        sessionStorage.removeItem('viewId')
    }
    onSubmit=()=>{

   
  var request=this.state.request;
  //console.log(data)

  var id = this.state.request.id;
  
  if(this.state.value===1){
    
    request.status=1;
    request.comment=$('#comment').val();

    
  }
  else{
    request.status=2;
    request.comment=$('#comment').val();
  }
  
  
 // console.log(data);
   
   console.log(this.state.request[id-1])

  
      fetch("http://192.168.0.151:5555/request/"+id, {
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, cors, *same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrer: 'no-referrer', // no-referrer, *client
      body: JSON.stringify(this.state.request), // body data type must match "Content-Type" header
  })
  .then(response => response.json().then(request=>{
      fetch("http://192.168.0.51:5555/request/"+id).then(response => response.json().then(request=>{
          this.setState({
            request: request,
          
          })
      }))
  }));
  alert("Done")

    }
    render(){

      const stateView=()=>{
          if(this.state.request.status==0){
            return <AtiForm events={{onSubmit:this.onSubmit}}>
            <AtiFormItem id='userName'
      label='Comments'
       config={{"rules": [{"required": true, "message": "Please input Comments!"}]}}
      // labelCol={{"xs": {"span": 24}, "sm": {"span": 8}}}
      // wrapperCol={{"xs": {"span": 24}, "sm": {"span": 16}}}
      >
      <AtiTextAreaField prefix={<Icon type='eye'
              style={{"color": "rgba(0,0,0,.25)"}} />}
        placeholder='Enter Comment' 
        type="text"
        id='comment'
        />
        
    </AtiFormItem>
    <AtiFormItem id='remember'
      config={{"valuePropName": "checked", "initialValue": true}}
      //wrapperCol={{"xs": {"span": 24, "offset": 0}, "sm": {"span": 16, "offset": 8}}}
      >
    
    
    <div className='row'>
    <div className="col-md-8">
    <AtiRadioButton 
     name = "radio-group"
            
              buttonStyle = "solid"
           
      value = {this.state.value} 
      events={
          {onChange:onChange}
      }
    >
      <AtiRadioButtonItem value = {1}>Approve</AtiRadioButtonItem>
      <AtiRadioButtonItem value = {2}>Reject</AtiRadioButtonItem>
    
    </AtiRadioButton>
    </div>
    <div className="col-md-4">
      <Button type='primary'
          style={{backgroundColor:this.state.color,borderColor:this.state.color}}
    
        htmlType='submit'>
        Submit
      </Button>
      </div>
      </div>
    
      {/* <Button type='primary'
      style={{backgroundColor:'red',borderColor:'red'}}
        htmlType='submit'>
        Reject
      </Button> */}
      
    </AtiFormItem>
    
    </AtiForm>
          }
          else
          {
            var  comment = [
                {
                    title:"Reason",
                    description:this.state.request.comment
                }]
              return <AtiList 
              dataSource={comment}
              showHeader
           loading={this.state.load}
           bordered={false}
           events={
               {onHeaderRow: (column, index) => {}}
           }
                     
          />
          }
        }
        var requestId = sessionStorage.getItem('viewId')
        var Ids=requestId.split(",");
        var reqId=Ids[0];
        var userId=Ids[1];
        const onChange = (e) => {
            console.log('radio checked', e.target.value);
            this.setState({
                value: e.target.value,
            });
            if(e.target.value===2){
                this.setState({
                    color: 'red'
                });
            }else{
                this.setState({
                    color: 'green'
                });
            }
        }
        const dataSource = [
            {id: "id1",label:"Reguler",value:"R",disabled:true},
            {id: "id2",label:"Premium",value:"P"},
           
        ];
        {
            const dataList = [
                    {
                        title:"Name",
                        description:this.state.user.fname+this.state.user.lname
                    },
                    {
                        title:"Emp Id",
                        description:this.state.request.emp_id
                    },
                    {
                        title:"Request Type",
                        description:this.state.request.type
                    },
                    {
                        title:"Purpose",
                        description:this.state.request.reason
                    },
                    {
                        title:"Asset",
                        description:this.state.request.asset
                    },
                    {
                        title:"Quantity",
                        description:this.state.request.qty
                    },
                    {
                        title:"Requested On",
                        description:this.state.request.dor
                    },
                    {
                        title:"Email Address",
                        description:this.state.user.off_email
                    },
                    {
                        title:"Department",
                        description:this.state.user.dept
                    },
                    {
                        title:"Title",
                        description:this.state.user.title
                    },
                    {
                        title:"Date Of Joining",
                        description:this.state.user.doj
                    }
            ];
            
          return  <div>
                <div className="app-title">
                    <div>
                    <h1><i className="fa fa-th-list"></i>&nbsp;&nbsp;&nbsp;Request</h1>
                    </div>
                    
                </div>
                <div className="row">
                    <div className="col-md-12">
                    <div className="tile">
                       <br/>
           <a  href="#"onClick={this.goBack.bind()}> {"<<"}</a><br/>
          <div>
         <br/>
          <AtiList 
              dataSource={dataList}
              showHeader
           loading={this.state.load}
           bordered={false}
           events={
               {onHeaderRow: (column, index) => {}}
           }
                     
          />
          </div>
          <div>
         
           {stateView()}
          </div>
          
          </div>
          
          </div>
                    </div>
                    </div>
             
        }
     
}
}
export default ViewPending;