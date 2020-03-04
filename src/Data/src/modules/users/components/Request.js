import React, { Component } from 'react';
import $ from 'jquery';
import Raise from './Raise';
import Raised from './Raised';
import {AtiTabsGroup, AtiTextbox} from 'ati-react-web';
import {Icon} from 'antd';
import RequestHr from './RequestHR'; 
import RequestIt from './RequestIT';
import RequestAdmin from './RequestAdmin';
class Request extends Component{

    constructor(props){
        super(props);
        this.select=this.select.bind(this)
        this.state={
            select:"",
            hr:false,
            it:false,
            admin:false
        };
      }

    state={
        
    }
    select(){
        var type=$('#type').val();
        if(type=="hr"){
            this.setState({
                hr:true,
                it:false,
                admin:false
            })
        }else 
        if(type=="it"){
            this.setState({
                it:true,
                admin:false,
                hr:false
            })
        }else
        if(type=="admin"){
            this.setState({
                admin:true,
                it:false,
                hr:false
            })
        }
    }
    
    render(){
        return(
            <div>
                <div className="app-title">
                <div className="tile-body col-md-8 offset-md-2">
                    <h1 style={{marginLeft:"-28%"}}><i className="fa fa-th-list"></i>&nbsp;&nbsp;&nbsp;Request</h1>
                    </div>
                    
                </div>
               
                <div className="row">
                    <div className="col-md-12">
                        <div className="row" style={{marginLeft:300}}>
                        <p>Request To</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <select className="form-control" name="type" id="type"
                        onChange={this.select} style={{width:200}}
                        >
                  <option value = "">--- Request To ---</option>
                  <option value = "hr">HR</option>
                    <option value = "it">IT</option>
                    <option value = "admin">Facility</option>
                  </select>
                  </div> <br/>
                            {this.state.hr &&(
                                <RequestHr/>
                            )
                            }
                            {this.state.it &&(
                                <RequestIt/>
                            )
                            }
                            {this.state.admin &&(
                                <RequestAdmin/>
                            )
                            }
                        </div>
                    </div>
                    </div>
       
            
        )
    }
}
export default Request;