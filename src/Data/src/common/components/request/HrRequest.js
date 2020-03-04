import React, { Component } from 'react';
import { AtiTable, AtiButton} from 'ati-react-web';
import { Icon } from 'antd';


class HrRequest extends Component {
    constructor(props) {
        super(props);
        this.state = {
                data: [],
          }
    }
    componentDidMount(){
        fetch("http://localhost:5555/requestHr?status=0").then(response => response.json().then(data=>{
            this.setState({
                data: data
               
            })
  
        }));
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
               "title": "Requested Date",
               "dataIndex": "dor",
               "fixed": false,
               "sorter": false,
               "defaultSortOrder": null,
               "align": "left"
             },{
               "title": "Detail",
               "dataIndex": "detail",
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
                
               this.state.data.map((requestHr,index)=>{
               
               
               
                    var link = "viewDetail/"+requestHr.emp_id;
                       return({ "sn":index+1, "empId": requestHr.emp_id,
                                "dor":requestHr.request_date, "detail":requestHr.request_for, "action": <a href={link}><Icon type="eye" /></a>
                             
                            
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
 
export default HrRequest;