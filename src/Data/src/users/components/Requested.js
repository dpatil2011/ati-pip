import React, { Component } from 'react';
import $ from 'jquery';
import Raise from './Raise';
import Raised from './Raised';
import {AtiTabsGroup, AtiTextbox} from 'ati-react-web';
import {Icon} from 'antd';
import RaisedRequestComp from './RaisedRequest';
import RequestedHr from './RequestedHR';
class Requested extends Component{

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
                <div>
                <h1><i className="fa fa-th-list"></i>&nbsp;&nbsp;&nbsp;Request</h1>
                </div>
                
            </div>
            <div className="row">
                <div className="col-md-12">
                <div className="tile">
                    <div className="tile-body">
                    <AtiTabsGroup dataSource={[{
    "title": "HR Request",
    "key": "tab1",
    "tabContent": <RequestedHr/>
  }, {
    "title": "IT&Admin Request",
    "key": "tab2",
    "tabContent": <RaisedRequestComp/>
  }]}
  type='card'
  tabBarGutter={0}
  activeKey='tab1'
  events={{"onChange": "...", "onEdit": "..."}} />
                        </div>
                    </div>
                    </div>
       </div>
       </div>
            
        )
    }
}
export default Requested;