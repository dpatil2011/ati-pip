import React, { Component } from 'react';
import { AtiText, AtiRow, AtiCol, AtiTextInput, AtiButton, AtiTextInputCellPhone, AtiCheckBox, AtiFieldStatusEnum } from 'ati-ui-elements';
import { Content } from 'native-base';
import {
    ImageBackground,
    StyleSheet,
    View,
    Image,
    AsyncStorage,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol,
} from 'react-native-responsive-screen';
import Dash from 'react-native-dash';
import confirmation from './../../../assets/img/icon/confirmation.png';
import navigate from './../../common/navigation/action';
import * as action from './../../common/components/popup/store/popup-action';
// import * as ElectricTokenAction from './Store/ElectricityToken-action';
import * as ElectricTokenAction from './../ElectricityToken/Store/ElectricityToken-action';
import * as act from './../../modules/pre-login/store/pre-login-action';
import line from './../../../assets/img/icon/dash.png';

import { withWebConsole } from 'ati-web-console-connector';
// import * as act from './../pre-login/store/pre-login-action';


class TermsCondition extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkBoxValue1: false,
            backgroundColor: '#e6e6e6',
            borderColor: '#cdcdcd',
            ButtonbackgroundColor: '#bebebe',
        };
    }
    // componentDidMount() {
    //     alert(this.props.nominalTransfer);
    // }
    onPay = () => {
        this.props.navigate('LoanReceipt');
    }
    check = () => {
        if (this.state.checkBoxValue1) {
            this.setState({
                backgroundColor: '#a92930',
                borderColor: '#a92930',
            });
        } else {
            this.setState({
                backgroundColor: '#e6e6e6',
                borderColor: '#cdcdcd',
            });
        }
    }
    check = () => {
        if (this.state.checkBoxValue1) {
            this.setState({
                backgroundColor: '#a92930',
                borderColor: '#a92930',
            });
        } else {
            this.setState({
                backgroundColor: '#e6e6e6',
                borderColor: '#cdcdcd',
            });
        }
    }
    render() {
        const currencyFormatter = require('currency-formatter');
        return (
            <View style={{ backgroundColor: '#ffffff', height: hp('100%') }}>
            <ScrollView style={{
                marginBottom: hp('35%'), marginTop: hp('2.6%'),
            }}
            >
                <View>
                    <AtiText
                        style={{
                            marginTop: wp('2.6%'),
                            marginLeft: wp('5.3%'),
                            marginRight: wp('5.3%'),
                            fontFamily: 'AvenirNextLTPro',
                            fontSize: 14,
                            fontWeight: 'normal',
                            fontStyle: 'normal',
                            lineHeight: 24,
                            letterSpacing: 0,
                            textAlign: 'left',
                            color: '#000000',
                        }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </AtiText>
                    <AtiText style={{
                        marginTop: hp('3.5%'),
                        marginLeft: wp('5.3%'),
                        marginRight: wp('5.3%'),
                        fontFamily: 'AvenirNextLTPro',
                        fontSize: 14,
                        fontWeight: 'normal',
                        fontStyle: 'normal',
                        lineHeight: 24,
                        letterSpacing: 0,
                        textAlign: 'left',
                        color: '#000000',
                    }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </AtiText>
                    <AtiText style={{
                        marginTop: hp('3.5%'),
                        marginLeft: wp('5.3%'),
                        marginRight: wp('5.3%'),
                        fontFamily: 'AvenirNextLTPro',
                        fontSize: 14,
                        fontWeight: 'normal',
                        fontStyle: 'normal',
                        lineHeight: 24,
                        letterSpacing: 0,
                        textAlign: 'left',
                        color: '#000000',
                    }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </AtiText>
                </View>
            </ScrollView>
                    <View style={{
                        marginTop: hp('67.8%'),
                        position: 'absolute',
                        backgroundColor: '#ffffff',

                    }}
                    >
                    <View>
                        <AtiCheckBox
                            checked={this.state.checkBoxValue1}
                            label="I agree to the terms & conditions"
                            status={AtiFieldStatusEnum.PRISTINE}
                            events={
                                {
                                    onPress: (e) => {
                                        this.setState({ checkBoxValue1: !this.state.checkBoxValue1 });
                                        if (this.state.backgroundColor === '#e6e6e6') {
                                            this.setState({
                                                backgroundColor: '#a92930',
                                                borderColor: '#a92930',
                                                ButtonbackgroundColor: '#a92930',

                                            });
                                        } else {
                                            this.setState({
                                                backgroundColor: '#e6e6e6',
                                                borderColor: '#cdcdcd',
                                                ButtonbackgroundColor: '#bebebe',
                                            });
                                        }
                                    },
                                }
                            }

                            checkBoxStyle={{
                                paddingLeft: wp('1.7%'),
                                paddingTop: hp('0.5%'),
                                height: wp('7.1%'),
                                backgroundColor: this.state.backgroundColor,
                                borderColor: this.state.borderColor,
                                width: wp('7.1%'),
                                borderRadius: 9,
                                borderStyle: 'solid',
                                borderWidth: 1,
                                marginLeft: wp('5.6%'),
                            }}
                            viewStyle={{

                            }}
                            labelStyle={{
                                fontFamily: 'AvenirNextLTPro',
                                fontSize: 14,
                                fontWeight: 'bold',
                                fontStyle: 'normal',
                                lineHeight: 20,
                                letterSpacing: 0,
                                textAlign: 'center',
                                color: '#000000',
                                marginLeft: 'auto',
                                marginRight: ('20.3%'),
                            }}
                        />
                        <Dash
                            dashColor="#e4e4e4"
                            dashLength={6}
                            dashGap={0}
                            style={{
                                height: 1,
                                marginTop: hp('1.9%'),
                                marginBottom: hp('4.5%'),
                                opacity: 70,
                            }}
                        />
                    </View>
                    <View style={{
                        flexDirection: 'row',
                      //  marginBottom: hp('1.7%'),
                        backgroundColor: '#ffffff',
                    }}
                    >
                        <AtiButton
                            // onPress={this.onPay}
                            buttonStyle={{
                                borderRadius: 80,
                                backgroundColor: '#ffffff',
                                borderStyle: 'solid',
                                borderWidth: 1,
                                borderColor: '#a92930',
                                marginLeft: wp('5.6%'),
                                width: wp('42.1%'),
                                height: hp('7%'),

                            }}
                            textStyle={{

                                paddingLeft: wp('13%'),
                                fontFamily: 'AvenirNextLTPro',
                                fontSize: 15,
                                fontWeight: '500',
                                fontStyle: 'normal',
                                lineHeight: 21,
                                letterSpacing: 0,
                                textAlign: 'center',
                                color: '#a92930',
                            }}
                        >Disagree

                        </AtiButton>
                        <AtiButton
                             onPress={this.onPay}
                            disabled={!this.state.checkBoxValue1}
                            buttonStyle={{
                                borderRadius: 80,
                                backgroundColor: this.state.ButtonbackgroundColor,
                                borderStyle: 'solid',
                                borderWidth: 1,
                                borderColor: this.state.ButtonbackgroundColor,
                                marginRight: wp('5.1%'),
                                marginLeft: 'auto',
                                width: wp('42.1%'),
                                height: hp('7%'),

                            }}
                            textStyle={{

                                paddingLeft: wp('16%'),
                                fontFamily: 'AvenirNextLTPro',
                                fontSize: 15,
                                fontWeight: '500',
                                fontStyle: 'normal',
                                lineHeight: 21,
                                letterSpacing: 0,
                                textAlign: 'center',
                                color: '#ffffff',
                            }}
                        >Agree
                        </AtiButton>
                    </View>

                    </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    dash: {

    },

});

const mapStateToProps = (state) => {
    const { ElectricityTokenReducer } = state;
    return {
        ...ElectricityTokenReducer,
    };
};
const mapActionToProps = () => ({
    navigate,
    ...action,
    ...act,
    ...ElectricTokenAction,

});

export default connect(mapStateToProps, mapActionToProps())(withWebConsole(TermsCondition));