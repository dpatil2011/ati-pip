import React, { Component } from 'react';
import Active from './user/Active';
import Terminated from './user/Terminated';
import Activation from './user/Activation';
import {AtiTabsGroup} from 'ati-react-web';
import {Icon} from 'antd';
class Users extends Component{
    
    render(){
        return(
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
                         
<AtiTabsGroup dataSource={[{
    "title": "Active",
    "key": "tab1",
    "tabContent": <Active/>
  }
  , {
    "title": "Account Request",
    "key": "tab2",
    "tabContent": <Activation/>
  }, {
    "title": "Terminated",
    "key": "tab3",
    "tabContent": <Terminated/>
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
export default Users;