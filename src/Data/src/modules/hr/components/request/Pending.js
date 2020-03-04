import React, { Component } from 'react';
import $ from 'jquery';
import {AtiTable,AtiList,AtiCheckbox,AtiSwitch,AtiForm,AtiButton} from 'ati-react-web';
import {Icon,Button} from 'antd';
import axios from 'axios';
import { request } from 'http';
class Pending extends Component{
    
    state = {
        switch:1,
        load:true,
        event:'',
        request:[],
        user:[],
        requestData:[],
        
      };
       onChange = (e) => {
        this.setState({checked : !this.state.checked});
    }
    componentDidMount() {
        // when component mounted, start a GET request
        // to specified URL
        fetch("http://localhost:5555/request?request_to=HR&status="+0)
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
             },          
             {
              "title": "Emp Id",
              "dataIndex": "emp_id",
              
            },  {
               "title": "Request",
               "dataIndex": "purpose",
               
             },
         
            
             {
                "title": "Requested Date",
                "dataIndex": "active",
                
              },
           
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
                   if(request.status===0 || request.status===2){
                       var check=false
                   }else{
                       var check=true;
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
                  
                   "purpose": request.reason,
                  // "priority": request.priority,
                  
                   "active": request.dor,
                   "view": <a href="#" onClick={changeView.bind(this,reqid)}><Icon type="eye" /></a>
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
export default Pending;