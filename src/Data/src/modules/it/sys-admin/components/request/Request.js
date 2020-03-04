import React, { Component } from 'react';
import $ from 'jquery';

import {AtiTabsGroup} from 'ati-react-web';
import {Icon} from 'antd';
import Completed from './Completed';
import Pending from './Pending';
import View from './View'
class Request extends Component{
    
    render(){
        setTimeout(()=>{
            this.setState({
              loading:false
            })
         },1000)
        
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
    "title": "Pending",
    "key": "tab1",
    "tabContent": <Pending/>
  },{
    "title": "Completed",
    "key": "tab2",
    "tabContent": <Completed/>
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
export default Request;