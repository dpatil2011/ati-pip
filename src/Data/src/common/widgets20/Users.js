import React, { Component } from 'react';

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
          datas:[]
          }
    }
    componentDidMount() {
      fetch("http://localhost:5555/users?status=2")
        .then(response => response.json())
       .then(data => this.setState({ 
        datas:data

        }));
    }
    render() { 
        return ( 
            <div className="col-md-6 col-lg-3">
            <div className="widget-small danger coloured-icon"><i className="icon fa fa-star fa-3x"></i>
              <div className="info">
                <h4>Users</h4>
                <p><b>{this.state.datas.length}</b></p>
              </div>
            </div>
          </div>
         );
    }
}
 
export default Users;