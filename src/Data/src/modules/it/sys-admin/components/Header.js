import React,{Component} from 'react';
import {AtiPopover} from 'ati-react-web';
class Header extends Component{
  constructor(props){
    super(props);
    this.state={
      data:[]
    }
  }
  logout=()=>{
    sessionStorage.clear();
    window.location.reload();
  }
  componentDidMount() {
    var id = sessionStorage.getItem('id');
    // when component mounted, start a GET request
    // to specified URL
    fetch("http://localhost:5555/login/"+id)
      // when we get a response map the body to json
      .then(response => response.json())
      // and update the state data to said json
      .then(data => this.setState({ data }));
  }

    render(){
      
        return(
        <header className="app-header"><a className="app-header__logo" href="/administrator">Anabatic India</a>
      {/* <!-- Navbar Right Menu--> */}
      <ul className="app-nav">
        <li className="app-search">
          <input className="app-search__input" type="search" placeholder="Search"/>
          <button className="app-search__button"><i className="fa fa-search"></i></button>
        </li>
        {/* <!-- User Menu--> */}
        <AtiPopover visibleOnLoad={false}
          title={<span>
            Hello - {this.state.data.fname}
            </span>}
          content='Logout'
          mouseLeaveDelay={0}
          mouseEnterDelay={0.1}
          placement='bottom'>
        <li className="dropdown"><a className="app-nav__item" href="#" onClick={this.logout.bind(this)} data-toggle="dropdown" aria-label="Open Profile Menu"><i className="fa fa-user fa-lg"></i></a>
       </li></AtiPopover>
      </ul>
    </header>
        )
    }
}
export default Header;