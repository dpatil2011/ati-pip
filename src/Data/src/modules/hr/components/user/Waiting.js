import React, { Component } from 'react';
import axios from 'axios';
import {AtiSwitch,AtiTable,AtiButton} from 'ati-react-web';
import $ from 'jquery';



class Table extends React.Component {
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
        fetch("http://localhost:5555/users?status=1&status=2")
          // when we get a response map the body to json
          .then(response => response.json())
          // and update the state data to said json
          .then(user => this.setState({ user }));
    }
     
 render(){
     const display=()=>{
        return  <AtiTable
                    
        columns={[{
           "title": "#",
           "dataIndex": "#",
           
         },{
           "title": "Name",
           "dataIndex": "name",
           
         }, {
           "title": "Emp. I'D",
           "dataIndex": "emp",
           
         }, {
           "title": "Email",
           "dataIndex": "email",
           
         }, {
           "title": "Date of Joining",
           "dataIndex": "doj",
           
         }, {
           "title": "Contact no.",
           "dataIndex": "con",
           
         }, {
           "title": "Status",
           "dataIndex": "status",
           
         }]}
         dataSource={
           this.state.user.map(function(user,index){
             
               var id = user.id;
              
               if(user.status==1){
                   var check=false
               }else{
                   var check=true;
               }
               return {
               "key": index+1,
               "#": index+1,
               "name": user.fname+" "+user.lname,
               "emp": user.emp_id,
               "email": user.p_email,
               "doj": user.doj,
               "con": user.p_no,
               "status": <AtiSwitch
               unCheckedIconName={'cross'}
               checkedIconName={'check'}
               size={'default'}
               checked={check}
               events={
                   {
                       onChange: (e) => {
                        check=e;
                           if(e){
                             var password=Math.floor(Math.random()*100000)+1;
                                  password = btoa(password)
                                 var hr_Password = password;
                              var datapass={password,hr_Password }
                             
                               user.status=2
                              
                              var  data=$.extend(user, datapass);

                           }else{
                             
                                user.status=1;
                                var data=user;
                           }
                           axios({
                            method: 'PUT',
                            url: 'http://localhost:5555/users/'+id,
                            data: JSON.stringify(data), // you are sending body instead
                            headers: {
                              // 'Authorization': `bearer ${token}`,
                            'Content-Type': 'application/json'
                            }, 
                          });
                          
                       },
                   }
               }
           >
           </AtiSwitch>,
             }
          
                
               })}
       showHeader
       bordered={false}
       events={
           {onHeaderRow: (column, index) => {}}
       }/>
     }
     const hiii=(e)=>{
        if (window.confirm("Are you sure, about to delete an item?")) {
            axios({
              method: 'DELETE',
              url: 'http://localhost:5555/login/'+e,
              headers: { 'Content-Type': 'application/json' },
            });
            fetch("http://localhost:5555/login?loginas=user")
                  // when we get a response map the body to json
                  .then(response => response.json())
                  // and update the state data to said json
                  .then(user => this.setState({ user }));
        }
     }
 return (

    display()
   
    )
 }
}export default Table

