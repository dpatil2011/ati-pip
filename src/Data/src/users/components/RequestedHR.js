import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import axios from 'axios';
import {AtiButton,AtiTable} from 'ati-react-web';
import $ from 'jquery';
import { deepEqual } from 'assert';

class RequestedHr extends React.Component {
    constructor(props){
        super(props);
        
        this.state={
          load:true,
          switch:1,
          isChecked:true,
          fields:'',
          faq:[],
          tableData:[]
        };
      }
    componentDidMount() {
      
        var id = sessionStorage.getItem('id');
        fetch("http://192.168.0.51:5555/request?request_to=HR&user_id="+id)
          // when we get a response map the body to json
          .then(response => response.json())
          // and update the state data to said json
          .then(faq => {this.setState({ faq })
          this.setState({
            load:false
        })
    });
         
    }
 render(){
     
 return (
    <div>
    <div id="showCat">
   <div className="row">
       <div className="col-md-12">
       
       <div className="tile">
           <div id = "show" style={{display:'none'}}>
     
       </div>
           <div className="tile-body" id="data">
        <AtiTable
                    
                    columns={[
                        {
                            "title":"#",
                            "dataIndex":"#"
                        },
                        {
                       "title": "Request Number",
                       "dataIndex": "request_no",
                       
                     }
                     , {
                        "title": "Request Type",
                        "dataIndex": "type",
                        
                      }, {
                       "title": "Request To",
                       "dataIndex": "query_to",
                       
                     }, {
                       "title": "Request Item",
                       "dataIndex": "query",
                       
                     } ,
                     {
                      "title": "Request",
                      "dataIndex": "hr",
                      
                    } ,
                     {
                        "title": "Date of Request",
                        "dataIndex": "dor",                        
                      }, 
                      {
                        "title": "Date of Response",
                        "dataIndex": "res",                        
                      }, 
                       {
                        "title": "Status",
                        "dataIndex": "status",
                        
                      },
                      {
                        "title": "Reply",
                        "dataIndex": "reply",
                        
                      }]}
                     dataSource={
                       this.state.faq.map(function(request,index){
                           var id = request.id;
                           var action = <div>
                          <AtiButton type="button" 
                            id="primary" text=" " 
                            icon="delete" 
                            className="btn btn-primary"
                            disabled={false}
                            outline={true}
                            block={false}
                            events={
                                {onClick:()=>{
                                  if (window.confirm("Are you sure, about to delete an item?")) {
                                  axios({
                                    method: 'DELETE',
                                    url: 'http://192.168.0.51:5555/request/'+id,
                                    headers: { 'Content-Type': 'application/json' },
                                  });
                                  window.location.reload();
                                  }
                                  }
                                }
                            }
                    ></AtiButton>
                    </div>
                           if(request.status==0){
                               var check=<span style={{color:'green'}}><b>On-Going</b></span>
                           }else
                           if(request.status==1){
                               var check=<span style={{color:'blue'}}><b>approved</b></span>;
                           }else{
                            var check=<span style={{color:'red'}}><b>Rejected</b></span>;
                           }
                           
                           return {
                           "key": index+1,
                           "#": index+1,
                           "query_to":request.request_to,
                            "type":request.type,
                           "query":request.asset,
                           "hr":request.request,
                           "status":  check,
                           "request_no":request.id,
                           "dor":request.dor,
                           "res":request.cd,
                           "reply":request.reply
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
}export default RequestedHr

