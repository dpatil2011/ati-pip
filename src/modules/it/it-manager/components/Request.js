import React, { Component } from 'react';
import $ from 'jquery';
import Active from './request/Active';
import Pending from './request/Pending';
import {AtiTabsGroup} from 'ati-react-web';
import {Icon} from 'antd';
class Request extends Component{
    
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
    "title": "Pending",
    "key": "tab1",
    "tabContent": <Pending/>
  }, {
    "title": "Approved/Reject",
    "key": "tab2",
    "tabContent": <Active/>
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