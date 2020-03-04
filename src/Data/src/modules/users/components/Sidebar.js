import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import {AtiSideMenu} from 'ati-react-web';
import {Icon} from 'antd';

class Sidebar extends React.Component {
  constructor(props){
    super(props);
    
    this.state={
      
      sidebarAct:'active',
      activedMenu:'dashboard'     ,
      data:[]  
    };
  }
  componentDidMount() {
    var id = sessionStorage.getItem('id');
    if(id==null){
      window.location = '/';
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
    <div >
            <div>
            <p className="app-sidebar__user-name">{this.state.data.fname}</p>
            
            </div>
          </div>
      <AtiSideMenu style={{background:'#222d32'}} defaultOpenKeys={[]}
      
        forceSubMenuRender={true}
        defaultSelectedKeys={this.props.title}
        dataSource={[{
          "key": "dashboard",
          "type": "item",
          "childComponent": <a href="/user" style={{textDecoration: 'none'}}><span >    
            <b> <Icon type='dashboard' />     
            <span >       Dashboard    </span>  
            </b> </span> </a>
        }, {
          "key": "request",
          "type": "subitem",
          "childComponent": <a  style={{textDecoration: 'none'}}><span >    
            <b> <Icon type='form' /><span  >Request     </span></b>   </span></a>,
             "childItems": [
              {
                "key": "sub-1-item-1",
                "type": "item",
                "childComponent": <a href="/user/request" style={{textDecoration: 'none'}}><span >    <b> <Icon type='form' />     <span  > 
                New Request   </span></b>   </span></a>
              },
              {
                "key": "sub-1-item-2",
                "type": "item",
                "childComponent":<a href="/user/raisedrequest" style={{textDecoration: 'none'}}><span >    <b> <Icon type='read' />     <span  > 
                View Requests   </span></b>   </span></a>
              }]
        },
        ,  {
          "key": "view",
          "type": "subitem",
          "childComponent": <a style={{textDecoration: 'none'}}><span >    
            <b> <Icon type='wechat' />     <span  > 
                  FAQ    </span></b>   </span></a>,
          "childItems": [
            {
              "key": "sub-1-item-1",
              "type": "item",
              "childComponent": <a href="/user/view" style={{textDecoration: 'none'}}><span >    <b> <Icon type='message' />     <span  > 
              View FAQ    </span></b>   </span></a>
            },
            {
              "key": "sub-1-item-2",
              "type": "item",
              "childComponent":<a href="/user/query" style={{textDecoration: 'none'}}><span >    <b> <Icon type='form' />     <span  > 
              Raise Query   </span></b>   </span></a>
            },
            {
              "key": "sub-1-item-3",
              "type": "item",
              "childComponent":<a href="/user/raisedquery" style={{textDecoration: 'none'}}><span >    <b> <Icon type='table' />     <span  > 
              Raised Query   </span></b>   </span></a>
            }
          ]
        },
        {
          "key": "Reset_Password",
          "type": "item",
          "childComponent": <a href="/reset" style={{textDecoration: 'none'}}><span >    
            <b> <Icon type='setting' />     
            <span >       Reset Password    </span>  
            </b> </span> </a>
        }
        ]} />
    </div>
    </div>
    )
 }
}export default Sidebar

