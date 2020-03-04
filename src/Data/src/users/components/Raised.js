import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import axios from 'axios';
import {AtiButton,AtiTable} from 'ati-react-web';
import $ from 'jquery';

class Raise extends React.Component {
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
      
        var id = sessionStorage.getItem('id');
        fetch("http://192.168.0.51:5555/request?requested_by=User&requested_id="+id)
          // when we get a response map the body to json
          .then(response => response.json())
          // and update the state data to said json
          .then(request => {this.setState({ request })
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
                    
                    columns={[{
                       "title": "#",
                       "dataIndex": "#",
                       
                     },{
                       "title": "Asset",
                       "dataIndex": "asset",
                       
                     }, {
                       "title": "Request Type",
                       "dataIndex": "request_type",
                       
                     }, {
                       "title": "Purpose",
                       "dataIndex": "purpose",
                       
                     }, {
                       "title": "Qty.",
                       "dataIndex": "qty",
                       
                     }, {
                       "title": "Priority",
                       "dataIndex": "priority",
                       
                     }, {
                       "title": "Duration",
                       "dataIndex": "duration",
                       
                     }, {
                        "title": "Specification",
                        "dataIndex": "spec",
                        
                      }, {
                        "title": "Token no.",
                        "dataIndex": "token",
                        
                      }, {
                        "title": "Status",
                        "dataIndex": "status",
                        
                      }, {
                        "title": "Action",
                        "dataIndex": "action",
                        
                      }]}
                     dataSource={
                       this.state.request.map(function(request,index){
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
                           }else{
                               var check=<span style={{color:'red'}}><b>Rejected</b></span>;
                           }
                           
                           return {
                           "key": index+1,
                           "#": index+1,
                           "asset": request.asset,
                           "request_type": request.request_type,
                           "purpose": request.purpose,
                           "qty": request.qty,
                           "priority": request.priority,
                           "duration":  request.duration,
                           "spec":  request.spec,
                           "token":  request.token,
                           "status":  check,
                           "action":action
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
}export default Raise

