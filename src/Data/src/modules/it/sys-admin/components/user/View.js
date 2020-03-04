import React, { Component } from 'react';
import $ from 'jquery';
import {AtiTable,AtiList,AtiCheckbox,AtiSwitch,AtiForm,AtiFormItem,AtiTextAreaField, AtiSpinner,AtiRadioButton,AtiRadioButtonItem} from 'ati-react-web';
import {Icon,Button,Input} from 'antd';
import axios from 'axios';
import { request } from 'http';


class View extends Component{
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
        var id = sessionStorage.getItem('viewUser');
        // when component mounted, start a GET request
        // to specified URL
        fetch("http://localhost:5555/users/"+id)
          // when we get a response map the body to json
          .then(response => response.json())
          // and update the state data to said json
          .then(user => this.setState({ user }));
    }

    goBack=()=>{
     
        sessionStorage.removeItem('viewUser')
    }
    render(){
    const dataList = [
                    {
                        title:"Name",
                        description:this.state.user.fname+" "+this.state.user.lname
                    },
                    {
                        title:"Emp Id",
                        description:this.state.user.emp_id
                    }
                    ,
                    {
                        title:"Department",
                        description:this.state.user.dept
                    }
                    ,
                    {
                        title:"Date of Joining",
                        description:this.state.user.doj
                    }
                    ,
                    {
                        title:"Official Email",
                        description:this.state.user.off_email
                    }
                    ,
                    {
                        title:"ATIPL ID",
                        description:this.state.user.atipl_id
                    }
                    ,
                    {
                        title:"Corporate ID",
                        description:this.state.user.corp_id
                    }
                    ,
                    {
                        title:"DL-Group - 1",
                        description:this.state.user.dlg1
                    }
                    ,
                    {
                        title:"DL-Group - 2",
                        description:this.state.user.dlg2
                    }
                    ,
                    {
                        title:"DL-Group - 3",
                        description:this.state.user.dlg3
                    }
            ];
            
          return (
            <div>
                <div className="app-title">
                    <div>
                    <h1><Icon type="user"/>&nbsp;&nbsp;&nbsp;User</h1>
                    </div>
                    
                </div>
                <div className="row">
                    <div className="col-md-12">
                    <div className="tile">
                        <div className="tile-body">
                        <br/>
<a  href="#"onClick={this.goBack.bind()}> {"<<"}</a><br/>
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
                    </div>
                    </div>
                </div>
            </div>
          )
             
        }
     
}
export default View;

