import React, { Component } from 'react';
import { connect } from 'react-redux';
import withPocketRemoteService from '../../common/services/wrapper/with-pocket-remote-service';
import ChangeLanguage from './../../modules/change-language/component/change-language-component';
import { navigate } from './../../common/store/action/general-action';
import Notification from './../../common/general-component/notification/notification';
import { changeLocale, notificationLocale, valueChangeLanguange } from './../../common/utils/languageprovider/actions';

class ChangeLanguagePage extends Component {
    componentWillReceiveProps(props) {
        if (props.checked_indonesian && props.isChangeLocale) {
            Notification({ title: 'Bahasa telah diubah' });
            this.props.notificationLocale(false);
            this.props.valueChangeLanguange('id');
        } else if (props.checked_english && props.isChangeLocale) {
            Notification({ title: 'Language Successfully Changed' });
            this.props.notificationLocale(false);
            this.props.valueChangeLanguange('en');
        }
    }

    render() {
        return (
            <React.Fragment>
                    <ChangeLanguage
                        {...this.props}
                    />
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    ...state.layout,
    ...state.locale,
});

const mapActionToProps = () => ({
    navigate,
    changeLocale,
    notificationLocale,
    valueChangeLanguange,
});

const page = connect(mapStateToProps, mapActionToProps())(ChangeLanguagePage);
export default withPocketRemoteService(page);