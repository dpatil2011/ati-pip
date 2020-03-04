import React, { Component } from 'react';
import $ from 'jquery';
import axios from 'axios';
import Waiting from './Waiting'
import Pending from './Pending'
import {AtiSwitch,AtiTable,AtiButton,AtiTabsGroup} from 'ati-react-web';
import {Icon} from 'antd';
class Recent extends Component{
    constructor(props){
        super(props);
        
        this.state={
          menu:"",
          switch:1,
          isChecked:true,
          fields:'',
          admin:[],
          tableData:[]
        };
      }

    render(){
          return(
          <AtiTabsGroup dataSource={[{
            "title": "Recent User",
            "key": "tab1",
            "tabContent":  <Pending/>
          }, {
            "title": "Active/Inactive",
            "key": "tab2",
            "tabContent":<Waiting/>
          }]}
          type='card'
          tabBarGutter={0}
          activeKey='tab1'
          events={{"onChange": "...", "onEdit": "..."}} />
        )
    }
}
export default Recent;