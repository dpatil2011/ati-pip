import React, { Component } from 'react';
import { AtiForm, AtiFormItem } from 'ati-react-web';
import { Input, Button } from 'antd';
import $ from 'jquery';
import axios from 'axios';
import base64 from 'base-64';


class Reset extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data1: {},
            pas: '',
            conform: '',
            reset: '',

        }
    }
    componentDidMount() {
        var id = sessionStorage.getItem('id');
        // when component mounted, start a GET request
        // to specified URL
        fetch("http://localhost:5555/users/1")
            // when we get a response map the body to json
            .then(response => response.json())
            // and update the state data to said json
            .then(data => this.setState({

                data1: data

            }));

    }

    updateData = () => {
        var id = sessionStorage.getItem('id');
        var old = this.state.data1.password;
        alert(old)
        var a = atob(old)
      // var a = base64.encode(old);
        //alert(a);
        var ne = this.state.pas;

        var con = this.state.conform;
        var resa = this.state.reset;
        if (old != '' && ne != '' && con != '' && resa != '') {

            if ((a == ne) && (con == resa)&&(con.length>4)) {
                var emp = this.state.data1
                var encr = btoa(resa);
                //var encr = base64.decode(resa);
                emp.password = encr
                axios.put("http://localhost:5555/users/1" , emp)
                    .then(res => {
                        alert("Resetted successfully")
                        window.location.reload();
                    })
            }
            else {
                alert("password not matching and must be greater than 4 charecter")
            }
        }
        else {
            alert("Every field required")
        }
    }


    render() {
        return (
            <div >

                <div class="tile user-settings" >
                    <AtiForm id="row" events={{ onSubmit: this.updateData }} style={{ marginLeft: 200 }}>
                            <h3><center>Reset Password</center></h3>
                            <div style={{marginLeft:'50px'}}>
                        <div class="col-md-4" style={{marginLeft:"300px"}}>
                            <label>Current Password</label>
                            <AtiFormItem className="form-control" id='opass' name='fname'
                            config={{"rules": [{"required": true, "message": "Please input your current password!"}]}}
                                labelCol={{ "xs": { "span": 24 }, "sm": { "span": 8 } }}
                                wrapperCol={{ "xs": { "span": 24 }, "sm": { "span": 25 } }}>
                                <Input
                                    value={this.state.pas}
                                    onChange={(e) => { this.setState({ pas: e.target.value }) }}
                                    type='password'
                                    name="e"
                                    readonly={false}
                                    disabled={false}
                                   // style={{ 'border-color': 'black' }}
                                    placeholder='Current Password' />
                            </AtiFormItem>
                        </div>


                        <div class="col-md-4" style={{marginLeft:"300px"}}>
                            <label>New Password</label>
                            <AtiFormItem className="form-control" id='pass' name='fname'
                            config={{"rules": [{"required": true, "message": "Please input your New Password!"}]}}
                                labelCol={{ "xs": { "span": 24 }, "sm": { "span": 8 } }}
                                wrapperCol={{ "xs": { "span": 24 }, "sm": { "span": 25 } }}>
                                <Input
                                    value={this.state.conform}
                                    onChange={(e) => { this.setState({ conform: e.target.value }) }}
                                    type='password'
                                    name="e"
                                    readonly={false}
                                    disabled={false}
                                  //  style={{ 'border-color': 'black' }}
                                    placeholder='New Password' />
                            </AtiFormItem>
                        </div>

                        <div class="col-md-4" style={{marginLeft:"300px"}}>
                            <label>Confirm Password</label>
                            <AtiFormItem className="form-control" id='cpass' name='fname'
                            config={{"rules": [{"required": true, "message": "Please input your new password again!"}]}}
                                labelCol={{ "xs": { "span": 24 }, "sm": { "span": 8 } }}
                                wrapperCol={{ "xs": { "span": 24 }, "sm": { "span": 25 } }}>
                                <Input
                                    value={this.state.reset}
                                    onChange={(e) => { this.setState({ reset: e.target.value }) }}
                                    type='password'
                                    name="e"
                                    readonly={false}
                                    disabled={false}
                                   // style={{ 'border-color': 'black' }}
                                    placeholder='Reset...' />
                            </AtiFormItem>
                        </div>
                        <Button type='primary'
                            htmlType='submit' style={{marginLeft:"425px"}}>
                            <i class="fa fa-fw fa-lg fa-check-circle"></i> &nbsp;&nbsp;<b>Reset</b>&nbsp;&nbsp;
                </Button>
                </div>
                    </AtiForm>
                </div>
            </div>

        )
    }
}
export default Reset