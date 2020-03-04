import React, { Component } from 'react';
import axios from 'axios';
import {AtiSwitch,AtiTable,AtiButton} from 'ati-react-web';


class Table extends React.Component {
    constructor(props){
        super(props);
        this.state={
          switch:1,
          isChecked:true,
          fields:'',
          admin:[],
          tableData:[]
        };
      }

    componentDidMount() {
        // when component mounted, start a GET request
        // to specified URL
        fetch("http://localhost:5555/login?loginas=facility")
          // when we get a response map the body to json
          .then(response => response.json())
          // and update the state data to said json
          .then(admin => this.setState({ admin }));
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
           "title": "Username",
           "dataIndex": "email",
           
         }, {
           "title": "Date of reg.",
           "dataIndex": "dor",
           
         }, {
           "title": "Contact no.",
           "dataIndex": "con",
           
         }, {
           "title": "Status",
           "dataIndex": "status",
           
         }, {
          "title": "Action",
          "dataIndex": "action",
          
        }]}
         dataSource={
           this.state.admin.map(function(admin,index){
             
               var id = admin.id;
               var action = <div>
                       <AtiButton type="button" 
                        id="www" text=" " 
                        icon="edit" 
                        className="btn btn-primary"
                        disabled={false}
                        outline={true}
                        block={false}
                        events={
                          {onClick:()=>{
                            sessionStorage.setItem('addEdit', id);
                          }}}

                ></AtiButton>
                       &nbsp;
                     <AtiButton type="button" 
                        id="primary" text=" " 
                        icon="delete" 
                        className="btn btn-primary"
                        disabled={false}
                        outline={true}
                        block={false}
                        events={
                            {onClick:hiii.bind(this,id)
                            }
                        }
                ></AtiButton>
                </div>
               if(admin.status==0){
                   var check=false
               }else{
                   var check=true;
               }
               return {
               "key": index+1,
               "#": index+1,
               "name": admin.fname+" "+admin.lname,
               "emp": admin.emp_id,
               "email": admin.username,
               "dor": admin.dor,
               "con": admin.con,
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
                               admin.status=1
                           }else{
                                admin.status=0;
                           }
                           axios({
                            method: 'PUT',
                            url: 'http://localhost:5555/login/'+id,
                            data: JSON.stringify(admin), // you are sending body instead
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
           "action":action,
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
            fetch("http://localhost:5555/login?loginas=admin")
                  // when we get a response map the body to json
                  .then(response => response.json())
                  // and update the state data to said json
                  .then(admin => this.setState({ admin }));
        }
     }
 return (

    display()
   
    )
 }
}export default Table

