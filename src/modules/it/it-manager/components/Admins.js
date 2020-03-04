import React, { Component } from 'react';
import Form from './admin/Form';
import Table from './admin/Table';
class Admins extends Component{
  constructor(props){
    super(props);
    
    this.state={
      
      switch:1,
      isChecked:true,
      fields:'',
      admin:[],
      tableData:[]
    };
  }
    renderMenu(request) {
        
        switch(request) {
          case 'add':
            return <div className="tile">
            <a href="#" onClick={this.menuRequest.bind(this,'')}> {'<<'} <b></b> </a>
            <div className="tile-body col-md-8 offset-md-2">
            <Form/>
              
            </div>
          </div>
         default:
            return <Table/>;
        }
      }
      menuRequest(menuChange) {
        this.setState({menu:menuChange})
        
      };

    render(){
        const {menu,request} = this.state;
       
        return(
            <div>
                    <div className="app-title">
                    <div>
        <h1>{/*<Icon type='user' />*/}<i className="fa fa-users"></i>&nbsp;&nbsp;&nbsp;Admins</h1>
                    
                    </div>
                    
                    <a className="btn btn-primary icon-btn" href="#"onClick={this.menuRequest.bind(this,'add')}><i className="fa fa-plus"></i>Add</a>
                   
                </div>
                <div className="row">
                    <div className="col-md-12">
                    <div className="tile">
                        <div className="tile-body">
                        
                        {this.renderMenu(menu)}
                        
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Admins;