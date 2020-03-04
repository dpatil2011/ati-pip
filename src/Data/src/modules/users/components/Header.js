import React,{Component} from 'react';
import {AtiPopover} from 'ati-react-web';
import '../../../assets/css/admin.css';
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
        <header className="app-header"><a className="app-header__logo" href="/administrator">Anabatic Technology</a>
      {/* <!-- Navbar Right Menu--> */}
      <ul className="app-nav">
        {/* <li className="app-search">
          <input className="app-search__input" type="search" placeholder="Search"/>
          <button className="app-search__button"><i className="fa fa-search"></i></button>
        </li> */}
        {/* <!--Notification Menu--> */}
        <li className="dropdown"><a className="app-nav__item" href="#" data-toggle="dropdown" aria-label="Show notifications"><i className="fa fa-bell-o fa-lg"></i></a>
          <ul className="app-notification dropdown-menu dropdown-menu-right">
            <li className="app-notification__title">You have 4 new notifications.</li>
            <div className="app-notification__content">
              <li><a className="app-notification__item" href="javascript:;"><span className="app-notification__icon"><span className="fa-stack fa-lg"><i className="fa fa-circle fa-stack-2x text-primary"></i><i className="fa fa-envelope fa-stack-1x fa-inverse"></i></span></span>
                  <div>
                    <p className="app-notification__message">Lisa sent you a mail</p>
                    <p className="app-notification__meta">2 min ago</p>
                  </div></a></li>
              <li><a className="app-notification__item" href="javascript:;"><span className="app-notification__icon"><span className="fa-stack fa-lg"><i className="fa fa-circle fa-stack-2x text-danger"></i><i className="fa fa-hdd-o fa-stack-1x fa-inverse"></i></span></span>
                  <div>
                    <p className="app-notification__message">Mail server not working</p>
                    <p className="app-notification__meta">5 min ago</p>
                  </div></a></li>
              <li><a className="app-notification__item" href="javascript:;"><span className="app-notification__icon"><span className="fa-stack fa-lg"><i className="fa fa-circle fa-stack-2x text-success"></i><i className="fa fa-money fa-stack-1x fa-inverse"></i></span></span>
                  <div>
                    <p className="app-notification__message">Transaction complete</p>
                    <p className="app-notification__meta">2 days ago</p>
                  </div></a></li>
              <div className="app-notification__content">
                <li><a className="app-notification__item" href="javascript:;"><span className="app-notification__icon"><span className="fa-stack fa-lg"><i className="fa fa-circle fa-stack-2x text-primary"></i><i className="fa fa-envelope fa-stack-1x fa-inverse"></i></span></span>
                    <div>
                      <p className="app-notification__message">Lisa sent you a mail</p>
                      <p className="app-notification__meta">2 min ago</p>
                    </div></a></li>
                <li><a className="app-notification__item" href="javascript:;"><span className="app-notification__icon"><span className="fa-stack fa-lg"><i className="fa fa-circle fa-stack-2x text-danger"></i><i className="fa fa-hdd-o fa-stack-1x fa-inverse"></i></span></span>
                    <div>
                      <p className="app-notification__message">Mail server not working</p>
                      <p className="app-notification__meta">5 min ago</p>
                    </div></a></li>
                <li><a className="app-notification__item" href="javascript:;"><span className="app-notification__icon"><span className="fa-stack fa-lg"><i className="fa fa-circle fa-stack-2x text-success"></i><i className="fa fa-money fa-stack-1x fa-inverse"></i></span></span>
                    <div>
                      <p className="app-notification__message">Transaction complete</p>
                      <p className="app-notification__meta">2 days ago</p>
                    </div></a></li>
              </div>
            </div>
            <li className="app-notification__footer"><a href="#">See all notifications.</a></li>
          </ul>
        </li>
        {/* <!-- User Menu--> */}
        <AtiPopover visibleOnLoad={false}
          // title={<span>
          //   Hallo - {this.state.data.fname}
          //   </span>}
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