import React, { Component } from 'react';

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          datas:[]
         }
    }

    componentDidMount() {
      var id = sessionStorage.getItem('id');
        fetch("http://localhost:5555/login?loginas=sysadmin&status=1")
        .then(response => response.json())
       .then(data => this.setState({ 
        datas:data

        }));
    }

    render() { 
        return ( 
            <div className="col-md-6 col-lg-3">
          <div className="widget-small primary coloured-icon"><i className="icon fa fa-users fa-3x"></i>
            <div className="info">
              <h4>Admins</h4>
              <p><b>{this.state.datas.length}</b></p>
            </div>
          </div>
        </div>
         );
    }
}
 
export default Admin;