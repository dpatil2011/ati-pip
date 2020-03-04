import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeLocale } from './../../utils/languageprovider/actions';
import withPocketRemoteService from '../../services/wrapper/with-pocket-remote-service';
import { getMenus, selectMenu, logout, backToLogin, onMenuChange,
  toogleCollapse, toogleDrawerCollapse } from './../store/layout-action';
import { navigate } from './../../store/action/general-action';
import AtiLayout from '../component/layout';

class LayoutTemplate extends Component {
  componentDidMount() {
    const { pocketRemoteService, username, isAuthenticate } = this.props;
    // TODO uncomment when u continues dev
    if (isAuthenticate) {
      this.props.getMenus(pocketRemoteService, username);
    } else {
      this.props.backToLogin();
    }
  }

  render() {
    return (
      <React.Fragment>
        <AtiLayout
          {...this.props}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  ...state.layout, ...state.locale,
});

const mapActionToProps = () => ({
  navigate,
  getMenus,
  selectMenu,
  logout,
  backToLogin,
  changeLocale,
  onMenuChange,
  toogleCollapse,
  toogleDrawerCollapse,
});

export default withPocketRemoteService(connect(
  mapStateToProps,
  mapActionToProps(),
)(LayoutTemplate));
