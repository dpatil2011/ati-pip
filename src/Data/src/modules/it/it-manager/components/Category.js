import React, { Component } from 'react';
import $ from 'jquery';
import axios from 'axios';
import {AtiForm,AtiTable,AtiBackTop,AtiConfirmBox,AtiButton,AtiFormItem} from 'ati-react-web';
import {Icon,Input,Button} from 'antd';
import Table from './category/Table'
class Category extends Component{
  constructor(props){
    super(props);
    
    this.state={
      
      catName:'',
      fields:'',
      category:[],
      newCat:'',
      confirm:false,
      dId:null,
      formFields:10,
      assetForm:[],
      f1:'',
      f2:'',
      f3:'',
      f4:'',
      f5:'',
      f6:'',
      f7:'',
      f8:'',
      f9:'',
      f10:'',

            
    };
  }
  componentDidMount() {
    
    fetch("http://localhost:5555/category")
      // when we get a response map the body to json
      .then(response => response.json())
      // and update the state data to said json
      .then(category => this.setState({ category }));
  }
  
  handleSubmit = () =>{
    var catName = $('#catName').val();
    var fields = $('#fields').val();
    var assets='0';
    var status = '0'
    var type ="it"
    if(catName, fields !='' ){
      var i =0;
      var validate = 0;
      if($('#btnName1').is(":hidden")){
        this.state.category.map(function(category){
          var a=[];
          a[0]={category}
          i++;
          var a=category.catName;
          if(a!=catName)
          {
            validate++;
          }
         
          
        });
       if(validate==i)
        {
          axios({
            method: 'post',
            url: 'http://localhost:5555/category/',
            data: {catName,fields,assets,type,status}, // you are sending body instead
            headers: {
             // 'Authorization': `bearer ${token}`,
            'Content-Type': 'application/json'
            }, 
          },this.componentDidMount())
          $('#alert').show().html("<span style='color:green'><b>Category added Successfully</b></span>");
          alert("Category added successfully");
          window.location.reload();
        }else{
          $('#alert').show().html("<span style='color:red'><b>Category alredy exist with this name.</b></span>");
        }
        this.setState({
          catName:'',
          fields:'',
          })
      }else{
        $('#alert').show().html("<span style='color:green'><b>Category Updated Successfully</b></span>");
        $('#btnName1').hide();
        $('#btnName').show();
        this.setState({
          catName:'',
          fields:''
        })
      }
      
    }
  }
  getComp = () => {
    return(
      <div className="row">
          
        </div>
    )
  }

  renderData = (length) => {
    var comps = [];
    var catId = sessionStorage.getItem('activateCatId');
    var modify = sessionStorage.getItem('modify');
    
    if(modify==='modify'){
      for (let i = 0; i < length; i++) {
        
        var c = i+1;
        var fetch = 'f'+c;
        var temp = <div className="form-group col-md-12">
      <AtiFormItem className="form-control" id={'f'+c} name={'f'+c}
                        config={{"rules": [{"required": true, "message": "Field cannot be blank!"}]}}
                        labelCol={{"xs": {"span": 24}, "sm": {"span": 8}}}
                        wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                        <Input 
                       
                        id={'field'+c}
                        type='text'
                        placeholder={'Enter field name - '+c}/>
          </AtiFormItem>
    </div>
        comps.push(temp);
      }
    }else{
    for (let i = 0; i < length; i++) {
      var c = i+1;
      var temp = <div className="form-group col-md-12">
    <AtiFormItem className="form-control" id={'f'+c} name={'f'+c}
                      config={{"rules": [{"required": true, "message": "Field cannot be blank!"}]}}
                      labelCol={{"xs": {"span": 24}, "sm": {"span": 8}}}
                      wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                      <Input 
                      id={'field'+c}
                      type='text'
                      placeholder={'Enter field name - '+c}/>
        </AtiFormItem>
  </div>
      comps.push(temp);
    }
  }
    return comps;
  }

  handleSubmit2 = () =>{
   
    if(true){
      $('#updatealert').show().html("<span style='color:green'><b>Action performed successfully</b></span>")
    }
  }
    addCat=(event)=>{
    //alert();
   this.setState({
     [event.target.name]:event.target.value
   })
   var catName =$('#catName').val();
   var fields = $('#fields').val();
  
   var newCat = <tr>
                <td>#</td>
                <td>{catName}</td>
                <td>{fields}</td>
                <td>0</td>
                <td><i className="fa fa-fw fa-lg fa-times"></i><a href="#" onClick={this.showActivateForm.bind(this)} >Activate</a></td>
                <td><a className="btn btn-primary" href="#" onClick={(event)=>{this.edit(catName+','+fields)}}><i className="fa fa-lg fa-edit"></i></a>&nbsp;
                <a className="btn btn-primary" href="#" onClick={(event)=>{this.deleteCat(0)}}><i className="fa fa-lg fa-trash"></i></a></td>
              </tr>
    if(catName==='' && fields ===''){
      newCat = '';
    }

this.setState({
  newCat:newCat
})
  }
  
  actvateCategory=()=>{
   var len =  sessionStorage.getItem('activateCat');
   var data=null;
   var catId = sessionStorage.getItem('activateCatId');
   alert(catId)
    var f1 = $('#field1').val();
    var f2 = $('#field2').val();
    var f3 = $('#field3').val();
    var f4 = $('#field4').val();
    var f5 = $('#field5').val();
    var f6 = $('#field6').val();
    var f7 = $('#field7').val();
    var f8 = $('#field8').val();
    var f9 = $('#field9').val();
    var f10 = $('#field10').val();
    if(len<=5){
    f6 ="";
    f7 = "";
    f8 = "";
    f9 = "";
    f10 = "";
    
    }else if(len==6){
      f7 = "";
    f8 = "";
    f9 = "";
    f10 = "";
    }else if(len==7){
      f8 = "";
    f9 = "";
    f10 = "";
    }
    else if(len==8){
      f9 = "";
    f10 = "";
    }
    else if(len==9){
    f10 = "";
    }
    fetch("http://localhost:5555/category/"+catId)
      // when we get a response map the body to json
      .then(response => response.json())
      // and update the state data to said json
      .then(upCat => {
        upCat.status = 1;
        axios({
          method: 'PUT',
          url: 'http://localhost:5555/category/'+catId,
          data: JSON.stringify(upCat), // you are sending body instead
          headers: {
            // 'Authorization': `bearer ${token}`,
          'Content-Type': 'application/json'
          }, 
        });
      });
    data = {catId,f1,f2,f3,f4,f5,f6,f7,f8,f9,f10}
    
    axios({
      method: 'post',
      url: 'http://localhost:5555/asset_form/',
      data: data, // you are sending body instead
      headers: {
       // 'Authorization': `bearer ${token}`,
      'Content-Type': 'application/json'
      }, 
    })
    $('#successAlert').show();
  }

    render(){
   
      const showActivateForm=(e)=>{
       
        if($('#showCat').is(":hidden")){
          $('#activate').hide();
          $('#showCat').show();
        
        }else{
          $('#activate').show();
          $('#showCat').hide();
          //alert();
        }
       
      }
     return(
          
            <div>
              <AtiConfirmBox
                isOpen={this.state.confirm}
              
                events={
                  {
                    onConfirm: () => {
                      axios({
                        method: 'DELETE',
                        url: 'http://localhost:5555/category/'+this.state.dId,
                        headers: { 'Content-Type': 'application/json' },
                      },this.componentDidMount.bind(this));
                     
                    }
                  }
                }
                text="Anda yakin ingin memproses data ?"
                />
            <div className="app-title">
                <div>
                <h1><i className="fa fa-th-list"></i>&nbsp;&nbsp;&nbsp;Request</h1>
                
                </div>
                
            </div>

           
          <div className="tile">
            <h3 className="tile-title">Add Category</h3>
            <div className="tile-body">
            <AtiForm className="row" events={{onSubmit:this.handleSubmit}}>
            <div className="form-group col-md-3">
                <AtiFormItem className="form-control" id='c' name='c'
                              config={{"rules": [{"required": true, "message": "Category cannot be blank!"}]}}
                              labelCol={{"xs": {"span": 24}, "sm": {"span": 8}}}
                              wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                              <Input 
                              id='catName'
                              events={{onChange: this.addCat}} 
                              type='text'
                              placeholder='Enter Category name' />
                </AtiFormItem>
            </div>
                <div className="form-group col-md-3">
                <AtiFormItem className="form-control" id='f' name='f'
                              config={{"rules": [{"required": true, "message": "Field cannot be blank!"}]}}
                              labelCol={{"xs": {"span": 24}, "sm": {"span": 8}}}
                              wrapperCol={{"xs": {"span": 24}, "sm": {"span": 25}}}>
                              <Input 
                              id='fields'
                              events={{onChange: this.addCat}} 
                              type='number'
                              min="5" max="10" placeholder="Number of fields" />
                </AtiFormItem>
                  </div>
                <div className="form-group col-md-6">
                <Button type='primary'
                id='addCatbtn'
                  htmlType='submit'>
                 <span id='btnName1' style={{display:'none'}}><i className='fa fa-lg fa-edit' ></i>Update</span><span id='btnName'><i className="fa fa-plus"></i>Add</span>
                </Button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <label id = 'alert' style={{display:'none'}} ></label>
                </div>
          </AtiForm>
            </div>
          </div>
      <div className="tile-body">

      <div className="tile" id = "activate" style={{display:'none'}}>
            <a href="#" onClick={showActivateForm}> {'<<'} <b>Go Back</b> </a>
            <div className="tile-body col-md-8 offset-md-2">
            <h3 className="tile-title">Category form generation / update</h3>
            <AtiForm  events={{onSubmit:this.actvateCategory}}>
              
              {this.renderData(sessionStorage.getItem('activateCat'))}
                <div className="form-group col-md-12 align-self-end">
               
                <Button type='primary'
                id='addCatbtn'
                htmlType='submit' icon="edit">Update</Button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            
                    <b><span id = 'updatealert' style={{color:'red',display:'none'}} ></span></b>
                    <b><span id = 'successAlert' style={{color:'green',display:'none'}} >Form generated successfully...</span></b>
            
                </div>
              </AtiForm>
            </div>
          </div>

      <div className="tile" id="showCat">
            <h3 className="tile-title">Available Category</h3>
            <div className="table-responsive">
            <Table/>  
            </div>
          </div>
        </div>
    </div>
              
        )
    }
}
export default Category;