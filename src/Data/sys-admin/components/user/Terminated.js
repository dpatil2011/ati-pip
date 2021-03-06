import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import {AtiTable,AtiButton,AtiSwitch} from 'ati-react-web';
import axios from 'axios';
class Active extends React.Component {
    constructor(props){
        super(props);
        
        this.state={
          
          switch:1,
          isChecked:true,
          fields:'',
          user:[],
          tableData:[]
        };
      }

    componentDidMount() {
        // when component mounted, start a GET request
        // to specified URL
        var id = sessionStorage.getItem('viewUser');
        if(id===''){
            window.location('/')
          }
        fetch("http://192.168.0.51:5555/users?status=1")
          // when we get a response map the body to json
          .then(response => response.json())
          // and update the state data to said json
          .then(user => this.setState({ user }));
    }
 render(){
  
 return (
    <div>
   <AtiTable
                    
                    columns={[{
                       "title": "#",
                       "dataIndex": "#",
                       
                     },{
                       "title": "Name",
                       "dataIndex": "name",
                       
                     }, {
                       "title": "Emp. I'D",
                       "dataIndex": "emp_id",
                       
                     }, {
                       "title": "Dept.",
                       "dataIndex": "dept",
                       
                     }
                     , {
                      "title": "D.O.J",
                      "dataIndex": "doj",
                      
                    }
                    , {
                       "title": "Official Email",
                       "dataIndex": "off_email",
                       
                     }, {
                       "title": "Contact no.",
                       "dataIndex": "p_no",
                       
                     }]}
                     dataSource={
                       this.state.user.map(function(user,index){
                          
                           return {
                           "key": index+1,
                           "#": index+1,
                           "name": user.fname+" "+user.lname,
                           "emp_id": user.emp_id,
                           "dept": user.dept,
                           "doj": user.doj,
                           "off_email": user.off_email,
                           "p_no": user.p_no,
                           }
                      
                            
                           })}
                    showHeader
                    bordered={false}
                    events={
                       {onHeaderRow: (column, index) => {}}
                    }/>
    </div>
    )
 }
}
export default Active





