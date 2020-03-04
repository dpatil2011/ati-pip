import React, { Component } from 'react';
import { AtiHeaderNavigation } from 'ati-navigation';
import { withWebConsole } from 'ati-web-console-connector';
import { connect } from 'react-redux';
import navigate from './../../navigation/action';
import colors from './../../../../assets/styles/colors';
import imgLogout from './../../../../assets/img/icon/logout.png';
import * as action from '../popup/store/popup-action';
import { AtiText, AtiBadge, AtiIcon } from 'ati-ui-elements';

class HeaderNavigation extends Component {
    /**
     * TODO :
     * This function will be running when someone clicked logout button.
     * You can put the logic of code below, inside the function logout.
     */
    logout = () => {
        /*  TODO :
            If you need logout process that invoke to backend, you can use this code below : 
            (this function used for invoke backend when logout)  
        */
        // const request = {
        //     username: this.props.auth.loginData.customer.username,
        //     channel: 'MOB',
        //     key: this.props.auth.loginData.key,
        // };

        // // this function will call action logout in file authentication-action
        // this.props.logout(this.props.webConsole, request, this.props.navigate, this.props.showAlert, this.props.showConfirmDialog, this.props.showProgressDialog, this.props.dismissProgressDialog);

        // This function will automatically navigate to loginscreen when you clicked logout without invoke to backend process. You can modified this function below, depend on your need.
        this.props.navigate('LoginScreen');
    }
    rendercomp = () => {
        return (
            <React.Fragment>
                {/* <AtiIcon name="home" />
                <AtiBadge
                    danger
                    badgeStyle={{
                        scaleX: 0.5,
                        scaleY: 0.5,
                        position: 'absolute',
                    }}>
                    <AtiText>
                        98
                    </AtiText>
                </AtiBadge> */}
            </React.Fragment>
        );
    }

    render() {
        return (
            <AtiHeaderNavigation
                headerStyle={{ backgroundColor:"white", justifyContent: 'center' }}
                centerSideStyle={{color:'black',textAlign:'center'}}
            
                rightDrawer={
                    [
                        {
                            id: 1,
                            type: 'image',
                            imageSource: imgLogout,
                            imageStyle: { resizeMode: 'contain', width: 30, height: 30 },
                            // TODO:
                            // events is callback function, that allow you to define function inside it.
                            // this events will call function logout above when you pressed / clicked the logout button.
                            events: { onPress: () => this.logout() },
                        },
                    ]
                }
                right={
                    [
                        {
                            id: 1,
                            type: 'component',
                            component: () => this.rendercomp(),
                            events: { onPress: () => this.logout() },
                        },
                    ]
                }
                left={[
                    {
                        id: 1, type: 'icon', iconName: 'arrow-back', iconType: 'MaterialIcons', iconStyle: { color: 'black', fontSize: 23 },
                    },
                ]}
                statusBarColor={colors.ACCENT}
            />
        );
    }
}

const mapStateToProps = state => ({ ...state });
const mapActionToProps = () => ({
    navigate,
    ...action,
    // ...authentication,
});

export default connect(mapStateToProps, mapActionToProps())(withWebConsole(HeaderNavigation));