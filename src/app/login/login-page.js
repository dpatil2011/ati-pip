import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as v from 'voca';
import { CLIENT_ID, CLIENT_SECRET } from '../../common/initOptions.properties';
import LoginComponent from '../../modules/login/component/login-component';
import withPocketRemoteService from '../../common/services/wrapper/with-pocket-remote-service';
import { authenticate, ssoAuthenticate, actionButtonSubmit, resetAllLoading } from './../../modules/login/store/login-action';
import { navigate } from './../../common/store/action/general-action';
import CONSTANTS from './../../common/utils/Constants';
import LanguageProvider from './../../common/utils/languageprovider/index';
import { DEFAULT_LOCALE } from './../../common/utils/languageprovider/constants';

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
    checked: false,
    locale: DEFAULT_LOCALE,
  }

  componentWillMount() {
    const data = JSON.parse(localStorage.getItem('persist:atic-react-pocketbank'));
    if (v.isEmpty(data)) {
      this.setState({ locale: DEFAULT_LOCALE });
    } else {
      const languages = data.locale;
      this.setState({ locale: JSON.parse(languages).language });
    }

    const { isAuthenticate } = this.props;
    if (isAuthenticate) {
      this.props.navigate(CONSTANTS.DASHBOARD_MENU_KEY);
    } else {
      localStorage.removeItem('token');
    }

    if (localStorage.getItem('login-info')) {
      if (JSON.parse(localStorage.getItem('login-info')).checked === true) {
        this.setState({ username: JSON.parse(localStorage.getItem('login-info')).username })
        this.setState({ checked: JSON.parse(localStorage.getItem('login-info')).checked })
      } else {
        this.setState({ username: '' })
      }
    }
  }

  componentWillReceiveProps(props) {
    if (props.checked_indonesian) {
      this.setState({ locale: 'id' });
    }

    if (props.checked_english) {
      this.setState({ locale: 'en' });
    }
  }

  onSubmitForm = () => {
    const { pocketRemoteService, cookies } = this.props;
    const { locale } = this.state;
    return (params) => {
      const { username, password } = params;
      const request = {
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        username,
        password,
      };

      const loginInfo = {
        checked: this.state.checked,
        username: this.state.checked === false ? '' : this.state.username,
      };

      localStorage.setItem('login-info', JSON.stringify(loginInfo));

      this.props.ssoAuthenticate(pocketRemoteService, request, cookies, locale);
    };
  }

  onValueChange = (e) => {
    if (e.target.id === 'username') {
      this.setState({ username: e.target.value });
    }
    else {
      this.setState({ password: e.target.value });
    }
  }

  onChangeCheckbox = () => {
    this.setState({ checked: !this.state.checked });
  }

  validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = 'Field Required';
    }
    if (!values.password) {
      errors.password = 'Field Required';
    }
    return errors;
  }

  render() {
    const { isLoading } = this.props;
    return (
      <Fragment>
        <LanguageProvider locale={this.state.locale}>
          <LoginComponent
            {...this.props}
            initialData={this.state}
            validation={this.validate}
            onValueChange={this.onValueChange}
            onSubmit={this.onSubmitForm}
            checkedStatus={this.onChangeCheckbox}
            checkboxValue={this.state.checked}
            loading={isLoading}
          />
        </LanguageProvider>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  ...state.login,
  ...state.layout,
});

const mapActionToProps = () => ({
  authenticate,
  actionButtonSubmit,
  navigate,
  ssoAuthenticate,
  resetAllLoading,
});

const page = connect(mapStateToProps, mapActionToProps())(LoginPage);
export default withPocketRemoteService(page);
