import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import {AtiSideMenu} from 'ati-react-web';
import {Icon} from 'antd';
import './../../../assets/css/common.css'

class Sidebar extends React.Component {
  constructor(props){
    super(props);
    
    this.state={
      
      sidebarAct:'active',
      data:[],
      activedMenu:'dashboard'       
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
    <div className="app-sidebar__user"><img class="app-sidebar__user-avatar" height="48px" width="48px" src={require('../../../common/pp/pp.png')} alt="User Image"/>
            <div>
            <p className="app-sidebar__user-name">{this.state.data.fname}</p>
            <p className="app-sidebar__user-designation">Facility
    </p>
            </div>
          </div>
      <AtiSideMenu style={{background:'#222d32'}} defaultOpenKeys={[]}
      
        forceSubMenuRender={true}
        defaultSelectedKeys={this.props.title}
        dataSource={[{
          "key": "dashboard",
          "type": "item",
          "childComponent": <a href="/facility" style={{textDecoration: 'none'}}><span >    <b> <Icon type='dashboard' />     <span >       Dashboard    </span>  </b> </span> </a>
        }, {
          "key": "request",
          "type": "item",
          "childComponent": <a href="/facility/request" style={{textDecoration: 'none'}}><span >    <b> <Icon type='eye' />     <span  >       Request     </span></b>   </span></a>
        },
        , {
          "key": "category",
          "type": "item",
          "childComponent": <a href="/facility/category" style={{textDecoration: 'none'}}><span >    <b> <Icon type='laptop' />     <span  >        Category     </span></b>   </span></a>
        }
        , {
          "key": "assest-management",
          "type": "item",
          "childComponent": <a href="/facility/assest-management" style={{textDecoration: 'none'}}><span >    <b> <Icon type='laptop' />     <span  >       Facility     </span></b>   </span></a>
        },
        {
          "key": "assest-management",
          "type": "item",
          "childComponent": <a href="/facility/faq" style={{textDecoration: 'none'}}><span >    <b> <Icon type='question' />     <span  >       FAQ     </span></b>   </span></a>
        },
        {
          "key": "assest-management",
          "type": "item",
          "childComponent": <a href="/facility/password" style={{textDecoration: 'none'}}><span >    <b> <Icon type='setting' />     <span  >      Reset Password     </span></b>   </span></a>
        }
        ]} />
    </div>
    </div>
    )
 }
}export default Sidebar

