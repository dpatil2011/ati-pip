import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import axios from 'axios';
import {AtiButton,AtiTable} from 'ati-react-web';
import $ from 'jquery';
import { deepEqual } from 'assert';

class RaisedQueryComp extends React.Component {
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
        fetch("http://localhost:5555/faq?user_id="+id)
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
                       "title": "Query Number",
                       "dataIndex": "request_no",
                       
                     }, {
                       "title": "Query To",
                       "dataIndex": "query_to",
                       
                     }, {
                       "title": "Query",
                       "dataIndex": "query",
                       
                     } ,
                     {
                        "title": "Date of Request",
                        "dataIndex": "dor",
                        
                      },  {
                        "title": "Status",
                        "dataIndex": "status",
                        
                      }, 
                      {
                        "title": "Reply",
                        "dataIndex": "reply",
                        
                      }]}
                     dataSource={
                       this.state.faq.map(function(faq,index){
                           var id = faq.id;
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
                                    url: 'http://localhost:5555/faq/'+id,
                                    headers: { 'Content-Type': 'application/json' },
                                  });
                                  window.location.reload();
                                  }
                                  }
                                }
                            }
                    ></AtiButton>
                    </div>
                           if(faq.status==0){
                               var check=<span style={{color:'green'}}><b>On-Going</b></span>
                           }else
                           if(faq.status==1){
                               var check=<span style={{color:'blue'}}><b>Replied</b></span>;
                           }else{
                            var check=<span style={{color:'red'}}><b>Rejected</b></span>;
                           }
                           
                           return {
                           "key": index+1,
                           "#": index+1,
                           "query_to":faq.query_to,
                           "query":faq.query,
                           "status":  check,
                           "request_no":faq.id,
                           "dor":faq.dor,
                           "reply":faq.reply
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
}export default RaisedQueryComp

