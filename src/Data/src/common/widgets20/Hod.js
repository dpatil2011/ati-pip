import React, { Component } from 'react';

class Hod extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          datas:[]
         }
    }
    componentDidMount() {
      fetch("http://localhost:5555/login?loginas=hr&status=1")
        .then(response => response.json())
       .then(data => this.setState({ 
        datas:data

        }));
    }
    render() { 
        return ( 
     <div className="col-md-6 col-lg-3">
        <div className="widget-small info coloured-icon"><i className="icon fa fa-user fa-3x"></i>
          <div className="info">
            <h4>HR</h4>
            <p><b>{this.state.datas.length}</b></p>
          </div>
        </div>
      </div> );
    }
}
 
export default Hod;