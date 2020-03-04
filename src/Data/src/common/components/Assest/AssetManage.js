import React, { Component } from 'react';
import $ from 'jquery';
import {AtiSwitch,AtiTable} from 'ati-react-web';
import {Icon,Button} from 'antd';
class AssetManage extends Component{
    constructor(props){
        super(props);       
        this.state={         
          switch:1,
          isChecked:true,
          fields:'',
          assets:[],
          assets1:[],
          tableData:[],
          category:[],
          form:[],
          form1:[],
          categoryFields:[],
          header:[],
          check:"kashiii",
          formId:""
        };
      }
    
    componentDidMount() {
      var id = $('#request_type').val();
     
      fetch("http://localhost:5555/asset_form")
          // when we get a response map the body to json
          .then(response => response.json())
          // and update the state data to said json
          .then(form => this.setState({ form }));

        // when component mounted, start a GET request
        // to specified URL
        // fetch("http://localhost:5555/available_assets?asset_form_id="+id)
        //   // when we get a response map the body to json
        //   .then(response => response.json())
        //   // and update the state data to said json
        //   .then(assets => this.setState({ assets }));

          fetch("http://localhost:5555/category?type=facility")
          // when we get a response map the body to json
          .then(response => response.json())
          // and update the state data to said json
          .then(category => this.setState({ category }));


         
    }
    show = () =>{
     var id = $('#request_type').val();
      
     var size=this.state.categoryFields.fields;
    
      var header=[];
     var i = 0;
     
      this.state.form.map(function(f){
        var id = $('#request_type').val();
      //  alert(f.catId+" id:"+id)
      var asset='';
            if(f.catId==id){
             asset = f.id;
            

            var dataIndex = ""  ;
          if(f.f1!=''){
            i++;
            dataIndex = "f"+i;
            var temp = {
              "title": <div>{f.f1}</div>,
              "dataIndex": "f1",
              
            }
            header.push(temp);
          }
          if(f.f2!=''){
            i++;
            dataIndex = "f"+i;
            var temp = {
              "title": <div>{f.f2}</div>,
              "dataIndex": "f2",
              
            }
            header.push(temp);
          }
          if(f.f3!=''){
            i++;
            dataIndex = "f"+i;
            var temp = {
              "title": <div>{f.f3}</div>,
              "dataIndex": "f3",
              
            }
            header.push(temp);
          }
          if(f.f4!=''){
            i++;
            dataIndex = "f"+i;
            var temp = {
              "title": <div>{f.f4}</div>,
              "dataIndex": "f4",
              
            }
            header.push(temp);
          }
          if(f.f5!=''){
            i++;
            dataIndex = "f"+i;
            var temp = {
              "title": <div>{f.f5}</div>,
              "dataIndex": "f5",
              
            }
            header. push(temp);
          }
          if(f.f6!=''){
            i++;
            dataIndex = "f"+i;
            var temp = {
              "title": <div>{f.f6}</div>,
              "dataIndex": "f6",
              
            }
            header.push(temp);
          }
          if(f.f7!=''){
            i++;
            dataIndex = "f"+i;
            var temp = {
              "title": <div>{f.f7}</div>,
              "dataIndex": "f7",
              
            }
            header.push(temp);
          }
          if(f.f8!=''){
            i++;
            dataIndex = "f"+i;
            var temp = {
              "title": <div>{f.f8}</div>,
              "dataIndex": "f8",
              
            }
            header.push(temp);
          }
          if(f.f9!=''){
            i++;
            dataIndex = "f"+i;
            var temp = {
              "title": <div>{f.f9}</div>,
              "dataIndex": "f9",
              
            }
            header.push(temp);
          }
          if(f.f10!=''){
            i++;
            
            var temp = {
              "title": <div>{f.f10}</div>,
              "dataIndex": "f10",
              
            }
            header.push(temp);
          }
        }
        }
       
      )
      
      
      // for (let i = 0; i < size; i++) {
        
      //   var c = i+1;
      //   var temp = {
      //     "title": <div>{this.state.form.f1}</div>,
      //     "dataIndex": "#",
          
      //   }
      //   header.push(temp);
      // }
    
      this.setState({
        header:header
      })
    }
    filter=()=>{
      var id = $('#request_type').val();

      sessionStorage.setItem('formId',1);
     

          fetch("http://localhost:5555/category/"+id)
          // when we get a response map the body to json
          .then(response => response.json())
          // and update the state data to said json
          .then(categoryFields => this.setState({ categoryFields }));

          fetch("http://localhost:5555/available_assets?asset_form_id="+id)
          // when we get a response map the body to json
          .then(response => response.json())
          // and update the state data to said json
          .then(assets => this.setState({ assets }));

          this.show();

       

    }
    formRequest=(e)=>{
      
           sessionStorage.setItem("showForm" ,e );
    }
    render(){
     var arr=[];
     this.state.assets.map(function(f){ 
             arr.push(f);
     })
        return(
            <div>
            
                          <div className="app-title">
                          <div>
        <h1><i className="fa fa-users"></i>&nbsp;&nbsp;&nbsp;Assets</h1>
                    
                    </div>
                    
                    <a className="btn btn-primary icon-btn" 
                    onClick={this.formRequest.bind(this,'add')}
                    ><i className="fa fa-plus"></i>Add</a>
                        
                   
                   
                </div>
                    
               
                <div className="row">
                
                    <div className="col-md-12">
                        
                    <div className="tile">
                  
                        <div className="tile-body" id ="data">     

                        <div className="form-group col-md-4">
                
                  <select className="form-control" id="request_type" name="request_type" onChange={this.filter.bind()}>
                  <option value = "">--- Select Category ---</option>
                  {
                    this.state.category.map(function(cat){
                      var id=cat.id+cat.fields
                      return(                 
                        <option value = {cat.id}>{cat.catName}</option>                       
                      )
                    })
                  }
                    </select>
                  
                  </div>                  
                  <AtiTable           
        columns={this.state.header} 
        dataSource={
         this.state.assets.map((f, index)=>{ 
            
          return ({"f1": f.f1, "f2": f.f2,"f3": f.f3,"f4": f.f4,"f5": f.f5, "f6": f.f6,"f7": f.f7,"f8": f.f8,"f9": f.f9,"f10": f.f10}
         )})
                 }
        // dataSource={[
        //  this.state.assets.map(function(f){ 
             
        //   return {"f1": f.f1, "f2": f.f2,"f3": f.f2,"f4": f.f4,"f5": f.f5, "f6": f.f7,"f7": f.f7,"f8": f.f8,"f9": f.f9,"f10": f.f10}
        //  })
        //          ]}
       showHeader
       bordered={false}
       
       events={
           {onHeaderRow: (column, index) => {}}
       }/>   
                  </div>                      
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default AssetManage;