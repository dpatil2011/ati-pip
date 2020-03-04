import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import axios from 'axios';
import {Icon,Button} from 'antd';
import {AtiButton,AtiTable} from 'ati-react-web';
import $ from 'jquery';

class Pending extends React.Component {
    constructor(props){
        super(props);
        
        this.state={
          load:true,
          switch:1,
          isChecked:true,
          fields:'',
          request:[],
          tableData:[]
        };
      }
      componentDidMount() {
        // when component mounted, start a GET request
        // to specified URL
        fetch("http://localhost:5555/request?request_to=HR&status="+1+"&"+""+"status="+2)
          // when we get a response map the body to json
          .then(response => response.json())
          // and update the state data to said json
          .then(request => this.setState({ request }));
          this.setState({
            load:false
        });
    }
    render(){ 
      const changeView=(e)=>{
      
        sessionStorage.setItem('viewId', e);
      }      
      return(
          <div>
               <div id="showCat">
              <div className="row">
                  <div className="col-md-12">                  
                  <div className="tile">
                      <div id = "show" style={{display:'none'}}>               
                  </div>
                      <div className="tile-body" id="data">                      
                      <AtiTable
          columns={[{
             "title": "#",
             "dataIndex": "#",              
           }
           , {
            "title": "Emp Id",
            "dataIndex": "emp_id",
            
          }, {
              "title": "Request Type",
              "dataIndex": "request_type",
              
            }, {
             "title": "Purpose",
             "dataIndex": "purpose",
             
           },
       
          {
             "title": "Asset",
             "dataIndex": "asset",
             
           }, {
             "title": "Qty.",
             "dataIndex": "qty",
             
           },
           {
              "title": "Requested Date",
              "dataIndex": "active",
              
            },
         
             {
              "title": "Status",
              "dataIndex": "status",
              
            }
            ,
         
             {
              "title": "View",
              "dataIndex": "view",
              
            }
            
          ]}
           dataSource={
             this.state.request.map(function(request,index){
              var requestId=request.id;
              var userId=request.user_id;
              var reqid=requestId+","+userId;
             
            
              var name;          
                 var id = request.id;
                 var status='';
                 if(request.status===1){
                  status = <span style={{color:'green'}}>Approved</span>
                  
                 }else{
                  status = <span style={{color:'red'}}>Rejected</span>
                 }
                 if(request.status===0 || request.status===1){
                  var check2=false
              }else{
                  var check2=true;
              }
                 return {
                 "key": index+1,
                 "#": index+1,
                 "req": request.requested_by,
                 "emp_id":request.emp_id,
                 "request_type": request.type,
                 "purpose": request.reason,
                // "priority": request.priority,
                 "asset": request.asset,
                 "qty": request.qty,
                 "active": request.dor,
                 "status": status,
                 "view":<a href="#" onClick={changeView.bind(this,reqid)}><Icon type="eye" /></a>,
                 //<div><a href="#" onClick={sessionStorage.setItem('viewId', request.id)} ><Icon type="eye"/></a></div>,                 
               }                    
                 })}
         showHeader
         loading={this.state.load}
         bordered={false}
         events={
             {onHeaderRow: (column, index) => {}}
         }/>

                      </div>
                  </div>
                  </div>
              </div>
          </div>
          
          </div>
      )
  }
}
    export default Pending

