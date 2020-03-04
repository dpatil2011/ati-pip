import React, { Component } from 'react';
import { AtiTable, AtiButton} from 'ati-react-web';
import { Icon, Alert } from 'antd';


class UpdateReq extends Component {
    constructor(props) {
        super(props);
        this.state = {
                data: [],
                datas:[]
          }
    }
    componentDidMount(){
        fetch("http://192.168.0.51:5555/update?status=LIVE").then(response => response.json().then(data=>{
            this.setState({
                data: data
               
            })
           
        }));
        
        // var emp=this.state.data.emp_id;
        // fetch("http://localhost:5555/users?emp_id="+emp)
        // .then(response => response.json())
        // .then(data => this.setState({ 
        //  datas:data

        //  }));
    }
    render() { 
        return ( 
            <div class="tile user-settings">
            <AtiTable
            columns={[{
               "title": "S.No",
               "dataIndex": "sn",
               "fixed": false,
               "sorter": false,
               "defaultSortOrder": null,
               "align": "left",
            },{
               "title": "Employee Id",
               "dataIndex": "empId",
               "fixed": false,
               "sorter": false,
               "defaultSortOrder": null,
               "align": "left",
            },
              {
               "title": "Current Address",
               "dataIndex": "caddress",
               "fixed": false,
               "sorter": false,
               "defaultSortOrder": null,
               "align": "left"
             },{
               "title": "Pin code",
               "dataIndex": "cpcode",
               "fixed": false,
               "sorter": false,
               "defaultSortOrder": null,
               "align": "left"
             },{
              "title": "Email",
              "dataIndex": "pemail",
              "fixed": false,
              "sorter": false,
              "defaultSortOrder": null,
              "align": "left"
            },{
              "title": "Passport number",
              "dataIndex": "passno",
              "fixed": false,
              "sorter": false,
              "defaultSortOrder": null,
              "align": "left"
            },{
              "title": "Phone no.",
              "dataIndex": "pno",
              "fixed": false,
              "sorter": false,
              "defaultSortOrder": null,
              "align": "left"
            }, {
               "title": "Action",
               "dataIndex": "action",
               "fixed": false,
               "sorter": false,
               "defaultSortOrder": null,
               "align": "left"
             }]}
             
            dataSource={
                
               this.state.data.map((update,index)=>{
                if(update.c_address=""){
                    update.c_address="-"
                  }
              //     if(update.c_pcode=""){
              //         update.c_pcode="-"
                    
              //   }
              //   if(update.p_email=""){
              //       update.p_email="-"
              //     }
              //     if(update.pass_no=""){
              //         update.pass_no="-"
                    
              //   }
              //   if(this.state.data.p_no=""){
              //       update.p_no="-"
                  
              // }
              // alert(update.c_address)
               
                   // var link = "viewDetail/"+requestHr.emp_id;
                       return({ "sn":index+1, "empId": update.emp_id, "caddress": update.c_address, "cpcode": update.c_pcode, "pemail": update.p_email, 
                                "passno":update.pass_no, "pno":update.p_no, "action": <a href="#"><Icon type="eye" /></a>
                             
                            
                           }
            ); 
                   })}
           showHeader
           bordered={false}
           events={
               {onHeaderRow: (column, index) => {}}
           }></AtiTable>
           </div>
         );
    }
}
 
export default UpdateReq;