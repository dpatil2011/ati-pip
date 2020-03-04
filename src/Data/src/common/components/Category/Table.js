import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import axios from 'axios';
import {AtiButton,AtiTable} from 'ati-react-web';
import {Icon} from 'antd';
import $ from 'jquery';
 
class Table extends React.Component {
    constructor(props){
        super(props);
        
        this.state={
          load:true,
          catName:'',
      fields:'',
      category:[],
      editCategory:[],
      newCat:'',
      formFields:5,
        };
      }
      componentDidMount() {
        // when component mounted, start a GET category
        // to specified URL
        fetch("http://localhost:5555/category")
          // when we get a response map the body to json
          .then(response => response.json())
          // and update the state data to said json
          .then(category => this.setState({ category }));
          this.setState({
            load:false
        })
      }
      
      edit=(event)=>{
        $('#btnName').hide();
        $('#btnName1').show();
        $('#alert').hide();
        if(event!=null){
          var dataSplit = event.split(',');
    
          var name = dataSplit[0];
          var fields = dataSplit[1];
        }
        
        if(this.catName==null){
          
          
          this.setState({
            catName:name,
            fields:fields
          })
        }
       }
 render(){
  const showActivateForm=(e)=>{
    var splits = e.split(',');
  
     sessionStorage.setItem('activateCat',splits[0])
     sessionStorage.setItem('activateCatId',splits[1])
     if(splits.length=3){
      sessionStorage.setItem('modify',splits[2])
     }
     
    if($('#showCat').is(":hidden")){
      $('#activate').hide();
      $('#showCat').show();
    
    }else{
      $('#activate').show();
      $('#showCat').hide();
      //alert();
    }
   
  }
  const handleEdit=(e)=>{
    $('#btnName').hide();
      $('#btnName1').show();
      $('#alert').hide();
      fetch("http://localhost:5555/category"+e)
          // when we get a response map the body to json
          .then(response => response.json())
          // and update the state data to said json
          .then(editCategory => this.setState({ editCategory }));
}
 return (
    <div>
        <AtiTable
                    
                    columns={[{
                       "title": "#",
                       "dataIndex": "#",
                       
                     },{
                       "title": "Category name",
                       "dataIndex": "catName",
                       
                     }, {
                       "title": "Number of fields",
                       "dataIndex": "fields",
                       
                     }, {
                       "title": "Available assets",
                       "dataIndex": "assets",
                       
                     }, {
                       "title": "Status",
                       "dataIndex": "status",
                       
                     }, {
                       "title": "Action",
                       "dataIndex": "action",
                       
                     }]}
                     dataSource={
                       this.state.category.map(function(category,index){
                         var id = category.id;
                         var action = <div>
                           {/* <AtiButton type="button" 
                            id="www" text=" " 
                            icon="edit" 
                            className="btn btn-primary"
                            disabled={false}
                            outline={true}
                            block={false}

                          onClick={handleEdit.bind(this,id)}

                    ></AtiButton> */}
                           &nbsp;
                         <AtiButton type="button" 
                            id="primary" text=" " 
                            icon="delete" 
                            className="btn btn-primary"
                            disabled={false}
                            outline={true}
                            block={false}
                            events={
                                {onClick:()=>{
                                  if (window.confirm("Are you sure, about to delete an item?")) {
                                  axios({
                                    method: 'DELETE',
                                    url: 'http://localhost:5555/category/'+id,
                                    headers: { 'Content-Type': 'application/json' },
                                  });
                                  window.location.reload();
                                  }
                                  }
                                }
                            }
                    ></AtiButton>
                    </div>
                        var btn='';
                        if(category.status=='0'){
                          btn = <div><Icon type="cross" /><a href="#" onClick={ showActivateForm.bind(this,category.fields+","+id)} >Activate</a></div>
                        }else{
                          btn = <div><Icon type="" /><a href="#"  >Active</a></div>
                        }
                        
                           var id = category.id;
                          
                           
                           return {
                           "key": index+1,
                           "#": index+1,
                           "catName": category.catName,
                           "fields": category.fields,
                           "assets": category.assets,
                           "status": btn,
                           "action": action,
                           
                         }
                      
                            
                           })}
                   showHeader
                   loading={this.state.load}
                   bordered={false}
                   events={
                       {onHeaderRow: (column, index) => {}}
                   }/>
    </div>
    )
 }
}export default Table

