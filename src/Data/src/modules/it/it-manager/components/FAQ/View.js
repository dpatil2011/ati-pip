import React, { Component } from 'react';
import $ from 'jquery';
import { AtiTable, AtiList, AtiCheckbox, AtiSwitch, AtiForm, AtiFormItem, AtiTextAreaField, AtiSpinner, AtiRadioButton, AtiRadioButtonItem } from 'ati-react-web';
import { Icon, Button, Input } from 'antd';
import axios from 'axios';
import { request } from 'http';


class ViewPending extends Component {

    state = {
        switch: 1,
        load: true,
        event: '',
        request: [],
        user: [],
        requestData: [],
        load: true,
        value: 1,
        color: 'green',
        pre:[]

    };
    onChange = (e) => {
        this.setState({ checked: !this.state.checked });
    }


    componentDidMount() {
        var requestId = sessionStorage.getItem('faqId')
        var Ids = requestId.split(",");
       
        var reqId = Ids[0];
        var userId = Ids[1];
        
        fetch("http://localhost:5555/users/" + userId)
            // when we get a response map the body to json
            .then(response => response.json())
            // and update the state data to said json
            .then(user => this.setState({ user }));
        this.setState({
            load: false
        });
        // when component mounted, start a GET request
        // to specified URL
        fetch("http://localhost:5555/faq/" + reqId)
            // when we get a response map the body to json
            .then(response => response.json())
            // and update the state data to said json
            .then(request => this.setState({ request }));
        this.setState({
            load: false
        });



    }

    goBack = () => {

        sessionStorage.removeItem('faqId')
    }
    onSubmit = () => {


        var request = this.state.request;
        //console.log(data)
        var cd=new Date().toLocaleString();
        var id = this.state.request.id;
        var reply = $('#comment').val();
        this.state.request.reply = reply;
        this.state.request.status="1";
        this.state.request.cd=cd;
        var title = this.state.request.query;
        var description = $('#comment').val();
        var pre1=[];
        pre1.push(title);
        pre1.push(description);
        const d={
            tile:title,
            description:description
        }
       
        if (this.state.value === 1) {
          
            fetch("http://localhost:5555/faq/" + id, {
                method: 'PUT', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, cors, *same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                    'Content-Type': 'application/json',
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: 'follow', // manual, *follow, error
                referrer: 'no-referrer', // no-referrer, *client
                body: JSON.stringify(this.state.request), // body data type must match "Content-Type" header
            })

            var url = "http://localhost:5555/Faq_predefined";
           fetch(url, {
             method: 'POST', // *GET, POST, PUT, DELETE, etc.
             mode: 'cors', // no-cors, cors, *same-origin
             cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
             credentials: 'same-origin', // include, *same-origin, omit
             headers: {
                 'Content-Type': 'application/json',
                 // 'Content-Type': 'application/x-www-form-urlencoded',
             },
             redirect: 'follow', // manual, *follow, error
             referrer: 'no-referrer', // no-referrer, *client
             body: JSON.stringify(d), // body data type must match "Content-Type" header
         })
            sessionStorage.removeItem('faqId');

        }
        else {
            
            fetch("http://localhost:5555/faq/" + id, {
                method: 'PUT', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, cors, *same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                    'Content-Type': 'application/json',
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: 'follow', // manual, *follow, error
                referrer: 'no-referrer', // no-referrer, *client
                body: JSON.stringify(this.state.request), // body data type must match "Content-Type" header
            })
            sessionStorage.removeItem('faqId');
        }

        alert("Done")

    }
    render() {

        const stateView=()=>{
            if(this.state.request.status==0){
             return                 <AtiForm events={{ onSubmit: this.onSubmit }}>
                    <AtiFormItem id='userName'
                        label='Reply'
                        config={{ "rules": [{ "required": true, "message": "Please input Comments!" }] }}
                    // labelCol={{"xs": {"span": 24}, "sm": {"span": 8}}}
                    // wrapperCol={{"xs": {"span": 24}, "sm": {"span": 16}}}
                    >
                        <AtiTextAreaField prefix={<Icon type='eye'
                            style={{ "color": "rgba(0,0,0,.25)" }} />}
                            placeholder='Enter Reply'
                            type="text"
                            id='comment'
                        />

                    </AtiFormItem>
                    <AtiFormItem id='remember'
                        config={{ "valuePropName": "checked", "initialValue": true }}
                    //wrapperCol={{"xs": {"span": 24, "offset": 0}, "sm": {"span": 16, "offset": 8}}}
                    >


                        <div className='row'>
                            <div className="col-md-8">
                                <AtiRadioButton
                                    name="radio-group"

                                    buttonStyle="solid"

                                    value={this.state.value}
                                    events={
                                        { onChange: onChange }
                                    }
                                >
                                    <AtiRadioButtonItem value={1}>Add & Reply</AtiRadioButtonItem>
                                    <AtiRadioButtonItem value={2}>Just Reply</AtiRadioButtonItem>

                                </AtiRadioButton>
                            </div>
                            <div className="col-md-4">
                                <Button type='primary'
                                    style={{ backgroundColor: this.state.color, borderColor: this.state.color }}

                                    htmlType='submit'>
                                    Submit
</Button>
                            </div>
                        </div>

                        {/* <Button type='primary'
style={{backgroundColor:'red',borderColor:'red'}}
  htmlType='submit'>
  Reject
</Button> */}

                    </AtiFormItem>

                </AtiForm>

          

            }
            else {
                var  comment = [
                    {
                        title:"Reason",
                        description:this.state.request.reply
                    }]
                  return <AtiList 
                  dataSource={comment}
                  showHeader
               loading={this.state.load}
               bordered={false}
               events={
                   {onHeaderRow: (column, index) => {}}
               }
                         
              />
              }
        }


        var requestId = sessionStorage.getItem('faqId')
        var Ids = requestId.split(",");
        var reqId = Ids[0];
        var userId = Ids[1];
        const onChange = (e) => {
            console.log('radio checked', e.target.value);
            this.setState({
                value: e.target.value,
            });
          
        }
        const dataSource = [
            { id: "id1", label: "Reguler", value: "R", disabled: true },
            { id: "id2", label: "Premium", value: "P" },

        ];
        {
            const dataList = [
                {
                    title: "Name",
                    description: this.state.user.fname+" "+this.state.user.lname
                },
                {
                    title: "Emp Id",
                    description: this.state.request.emp_id
                },


                {
                    title: "Requested On",
                    description: this.state.request.dor
                },
                {
                    title: "Email Address",
                    description: this.state.user.off_email
                },
                {
                    title: "Department",
                    description: this.state.user.dept
                },
                {
                    title: "Title",
                    description: this.state.user.title
                },
                {
                    title: "Date Of Joining",
                    description: this.state.user.doj
                },
                {
                    title: "Query",
                    description: this.state.request.query
                }
            ];

            return <div className="tile"><br />
                <a href="#" onClick={this.goBack.bind()}> {"<<"}</a><br />
                <div>
                    <br />
                    <AtiList
                        dataSource={dataList}
                        showHeader
                        loading={this.state.load}
                        bordered={false}
                        events={
                            { onHeaderRow: (column, index) => { } }
                        }

                    />
                </div>
               {stateView()}
            </div>


        }

    }
}
export default ViewPending;