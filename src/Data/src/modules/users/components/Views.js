import React, { Component } from 'react';
import $ from 'jquery';
import {  AtiList, AtiTextbox } from 'ati-react-web';
import { Icon} from 'antd';

class Views extends Component {

  state = {
    switch: 1,
    load: true,
    event: '',
    request: [],
    asd: []
  };
 
  componentDidMount() {
    // when component mounted, start a GET request
    // to specified URL

    fetch("http://localhost:5555/Faq_predefined")
      // when we get a response map the body to json
      .then(response => response.json())
      // and update the state data to said json
      .then(request => this.setState({ request }));

  }

  sserch = () => {

    var m = document.getElementById("sserch").value;
    // alert(m);
    const nw = this.state.request;

    if (m !== '') {
      const newData = nw.filter(function (item) {
        //applying filter for the inserted text in search bar
        const itemData = item.description ? item.title.toUpperCase() : ''.toUpperCase();
        const textData = m.toUpperCase();
        if (itemData.indexOf(textData) == -1) {
          const itemData = item.title ? item.description.toUpperCase() : ''.toUpperCase();
          const textData = m.toUpperCase();
          return itemData.indexOf(textData) > -1;
        } else {

          return itemData.indexOf(textData) > -1;

        }
      });
      this.setState({

        asd: newData,
        event: m
        // doctor:newData.username
      });
    }
    else {
      this.componentDidMount();
    }

  }
 
display=()=>{
  var check = $('#sserch').val();
 
  if(this.state.asd.length!=0){
      return <AtiList dataSource={this.state.asd} 
      pagination={{"pageSize": 5}}/>
  }else{
    if(check===''){
      return  <AtiList dataSource={this.state.request} pagination={{"pageSize": 5}} />
    }else{
      return <AtiList dataSource={this.state.asd} pagination={{"pageSize": 5}} />
    }
    
  }
}
  render() {
   // const { filter, event } = this.state;

    return (
      <div>
        <div className="app-title">
          <div>
            <h1><Icon type="eye" />&nbsp;&nbsp;&nbsp;FAQ</h1>
          </div>
          <AtiTextbox type="text" placeholder="Search" id="sserch" name="email"
            size="m" events={
              {
                onChange: () => {
                  //this.setState({event:document.getElementById("sserch").value});
                  this.sserch();
                }
              }
            } />
        </div>
        
        {this.display()}

      </div>
    )
  }
}
export default Views;