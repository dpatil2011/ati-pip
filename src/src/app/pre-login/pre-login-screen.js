/**
 * @author dennis.justine
 * @since January 08,2019
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withWebConsole } from 'ati-web-console-connector';
import axios from 'axios';
import navigate from '../../common/navigation/action';
import PreLogin from '../../modules/pre-login/component/pre-login-layout';
import * as popupAction from '../../common/components/popup/store/popup-action';

class PreLoginScreen extends Component {
    render() {
        return (
            <PreLogin
                showToast={() => axios.post('http://10.50.51.57:8065/token', {
                    clientId: 'omni-channel',
                    clientSecret: '123',
                    username: 'newusername21',
                    password: '60r5mj9nAt',
                }).then(res => console.log('success', res)).catch(err => console.log('error', err))}
                showAlert={() => this.props.showAlert('errorMessage.invalidAddress')}
                showConfirmDialog={() => this.props.showConfirmDialog('errorMessage.invalidPassword')}
            />
        );
    }
}


const mapStateToProps = state => ({ ...state });

const mapActionToProps = () => ({
    navigate,
    ...popupAction,
});

export default connect(mapStateToProps, mapActionToProps())(withWebConsole(PreLoginScreen));