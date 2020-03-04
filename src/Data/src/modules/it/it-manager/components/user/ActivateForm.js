import React, { Component } from 'react';
import {Icon,Button,Input} from 'antd';
import Official from './Oficial';

class ActivateForm extends Component{
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
        var id = sessionStorage.getItem('activateUser');
        // when component mounted, start a GET request
        // to specified URL
        fetch("http://localhost:5555/users/"+id)
          // when we get a response map the body to json
          .then(response => response.json())
          // and update the state data to said json
          .then(user => this.setState({ user }));
    }

    goBack=()=>{
     
        sessionStorage.removeItem('activateUser')
    }
    render(){
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
<Official/>
                      
                        </div>
                    </div>
                    </div>
                </div>
            </div>
          )
             
        }
     
}
export default ActivateForm;

