import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import {AtiSideMenu} from 'ati-react-web';
import {Icon} from 'antd';
import '../../../../assets/css/common.css';

class Sidebar extends React.Component {
  constructor(props){
    super(props);
    
    this.state={
      
      sidebarAct:'active',
      activedMenu:'dashboard'   ,    
      data:[]
    };
  }
  
  componentDidMount() {
    
    var id = sessionStorage.getItem('id');
    if(id==null){
     // window.location = '/';
    }
    // when component mounted, start a GET request
    // to specified URL
    fetch("http://localhost:5555/login/"+id)
      // when we get a response map the body to json
      .then(response => response.json())
      // and update the state data to said json
      .then(data => this.setState({ data }));
  }
 render(){
 return (
    <div>
    <div className="app-sidebar__overlay" data-toggle="sidebar"></div>
    
    <div className="app-sidebar">
    <div className="app-sidebar__user"><img class="app-sidebar__user-avatar" height="48px" width="48px" src={require('../../../../common/pp/pp.png')} alt="User Image"/>
            <div>
            <p className="app-sidebar__user-name">{this.state.data.fname}</p>
            <p className="app-sidebar__user-designation">Sys-Admin
    </p>
            </div>
          </div>
      <AtiSideMenu style={{background:'#222d32'}} defaultOpenKeys={[]}
      
        forceSubMenuRender={true}
        defaultSelectedKeys={this.props.title}
        dataSource={[{
          "key": "dashboard",
          "type": "item",
          "childComponent": <a href="/sys-admin" style={{textDecoration: 'none'}}><span >    <b> <Icon type='dashboard' />     <span >       Dashboard    </span>  </b> </span> </a>
        }, {
          "key": "user",
          "type": "item",
          "childComponent": <a href="/sys-admin/user" style={{textDecoration: 'none'}}><span >    <b> <Icon type='user' />     <span  >       User     </span></b>   </span></a>
        }
        , {
          "key": "asset",
          "type": "item",
          "childComponent": <a href="/sys-admin/asset" style={{textDecoration: 'none'}}><span >    <b> <Icon type='laptop' />     <span  >       Assets     </span></b>   </span></a>
        },
        , {
          "key": "request",
          "type": "item",
          "childComponent": <a href="/sys-admin/request" style={{textDecoration: 'none'}}><span >    <b> <Icon type='table' />     <span  >       Request     </span></b>   </span></a>
        }
        , {
          "key": "faq",
          "type": "item",
          "childComponent": <a href="/sys-admin/faq" style={{textDecoration: 'none'}}><span >    <b> <Icon type='question' />     <span  >       FAQ     </span></b>   </span></a>
        }
        
        ]} />
    </div>
    </div>
    )
 }
}export default Sidebar

