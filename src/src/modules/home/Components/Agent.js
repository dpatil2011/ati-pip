import React, { Component } from 'react';
import { Content } from 'native-base';
import {
    AtiButton,
    AtiDatePicker,
    AtiRow,
    AtiCol,
    AtiH3,
    AtiText,
    AtiTextInput,
    AtiPicker,
    AtiRadioButton,
    AtiFieldStatusEnum,
    AtiSpinner,
} from 'ati-ui-elements';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol,
} from 'react-native-responsive-screen';
import { AtiForm, AtiField } from 'ati-redux-form';
//import navigate from './../../../common/navigation/action';
import navigate from './../../../common/navigation/action';
import { connect } from 'react-redux';
import * as action from './../../../common/components/popup/store/popup-action';

import axios from 'axios';
import I18n, { Loc } from 'ati-react-native-redux-i18n';

import { withWebConsole } from 'ati-web-console-connector';

import URL from '../../../common/urls/URLS';
import PayBillImg from '../../../../assets/img/icon/PayBill.png';
import ExchangeRate from '../../../../assets/img/icon/ExchangeRate.png';
import Loan from '../../../../assets/img/icon/Loan.png';
import OTP from '../../../../assets/img/icon/OTP.png';
import Registration from '../../../../assets/img/icon/registration.png';
import CashierQu from '../../../../assets/img/icon/CashierQu.png';
import CashTransaction from '../../../../assets/img/icon/CashTransaction.png';



class PayBill extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    paybill = (e) => {
        //window.location.reload();
        this.props.navigate(e);
    }
    render() {
        return (
            <View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: hp('3%'), paddingRight: hp('3%'), marginBottom: hp('2.6%') }}>
                    <TouchableOpacity onPress={this.paybill.bind(this, 'PayBill')}>
                        <View style={{ alignItems: 'center' }}>
                            <Image style={styles.logo} source={PayBillImg} />
                            <AtiText style={{
                                marginTop: hp('1%'),
                                fontFamily: 'AvenirNextLTPro',
                                fontSize: 13,
                                fontWeight: '400',
                                fontStyle: 'normal',
                                // lineHeight: 16,
                                letterSpacing: -0.24,
                                textAlign: 'center',
                                color: '#000000',
                            }}
                            >Pay Bills
    </AtiText>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.paybill.bind(this, 'AgentLoan')}>
                        <View style={{ alignItems: 'center' }}>
                            <Image style={styles.logo} source={Loan} />
                            <AtiText style={{
                                marginTop: hp('1%'),
                                fontFamily: 'AvenirNextLTPro',
                                fontSize: 13,
                                fontWeight: '400',
                                fontStyle: 'normal',
                                // lineHeight: 16,
                                letterSpacing: -0.24,
                                textAlign: 'center',
                                color: '#000000',
                            }}
                            > Loan
    </AtiText>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.paybill.bind(this, 'CashierQu')}>
                        <View style={{ alignItems: 'center' }}>
                            <Image style={styles.logo} source={CashierQu} />

                            <AtiText style={{
                                marginTop: hp('1%'),
                                fontFamily: 'AvenirNextLTPro',
                                fontSize: 13,
                                fontWeight: '400',
                                fontStyle: 'normal',
                                // lineHeight: 16,
                                letterSpacing: -0.24,
                                textAlign: 'center',
                                color: '#000000',
                            }}
                            >CashierQu
    </AtiText>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.paybill.bind(this, 'Reg')}>
                        <View style={{ alignItems: 'center' }}>
                            <Image style={styles.logo} source={Registration} />
                            <AtiText style={{
                                marginTop: hp('1%'),
                                fontFamily: 'AvenirNextLTPro',
                                fontSize: 13,
                                fontWeight: '400',
                                fontStyle: 'normal',
                                // lineHeight: 16,
                                letterSpacing: -0.24,
                                textAlign: 'center',
                                color: '#000000',
                            }}
                            >Registration
    </AtiText>
                        </View>
                    </TouchableOpacity>
                </View>
                {/* <View style={{ flexDirection: 'row', justifyContent:'space-between' }} >
    </View> */}

                <View style={{ flexDirection: 'row', paddingLeft: hp('3%'), paddingRight: hp('3%'), marginBottom: hp('2.6%') }}>
                    <TouchableOpacity onPress={this.paybill.bind(this, 'CashTransaction')}>
                        <View style={{ alignItems: 'center' }}>
                            <Image style={styles.logo1} source={CashTransaction} />
                            <AtiText style={{
                                marginTop: hp('1%'),
                                fontFamily: 'AvenirNextLTPro',
                                fontSize: 13,
                                fontWeight: '400',
                                fontStyle: 'normal',
                                // lineHeight: 16,
                                letterSpacing: -0.24,
                                textAlign: 'center',
                                color: '#000000',
                            }}
                            > Cash {"\n"} Transactions
    </AtiText>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.paybill.bind(this, 'ExchangeRate')}>
                        <View style={{ alignItems: 'center' }}>
                            <Image style={styles.logo2} source={ExchangeRate} />
                            <AtiText style={{
                                marginTop: hp('1%'),
                                fontFamily: 'AvenirNextLTPro',
                                fontSize: 13,
                                fontWeight: '400',
                                fontStyle: 'normal',
                                // lineHeight: 16,
                                letterSpacing: -0.24,
                                textAlign: 'center',
                                color: '#000000',
                            }}
                            > Exchange Rate
    </AtiText>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.paybill.bind(this, 'GenerateOtp')}>
                        <View style={{ alignItems: 'center' }}>
                            <Image style={styles.logo3} source={OTP} />
                            <AtiText style={{
                                marginTop: hp('1%'),
                                fontFamily: 'AvenirNextLTPro',
                                fontSize: 13,
                                fontWeight: '400',
                                fontStyle: 'normal',
                                // lineHeight: 16,
                                letterSpacing: -0.24,
                                textAlign: 'center',
                                color: '#000000',
                            }}
                            >OTP
    </AtiText>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    logo1: {
        width: 70,
        height: 70,
        marginLeft: wp('1%'),
        marginRight: wp('3.5%'),
    },
    logo2: {
        width: 70,
        height: 70,
        marginLeft: wp('3%'),
        marginRight: wp('3.5%'),
        // marginLeft: '44%',
        //     width: wp('18.7%'),
        //     height: hp('22.6%'),
        //     marginLeft: wp('5.9%'),
        //    marginRight: wp('75.5%'),
    },
    logo3: {
        width: 70,
        height: 70,
        marginLeft: wp('3%'),
        marginRight: wp('3.5%')
    },
    logo: {
        width: 70,
        height: 70,
        // marginLeft: wp('4.2%'),
        // marginRight: wp('3.5%'),
        // marginLeft: '44%',
        // width: wp('18.7%'),
        // height: hp('22.6%'),
        // marginLeft: wp('5.9%'),
        // marginRight: wp('75.5%'),
    },
    picture: {
        flex: 1,

        width: null,
        height: null,
        resizeMode: 'cover',
    },
    text: {
        color: '#ffffff',
        fontWeight: 'bold',
        marginLeft: wp('30%'),
        marginTop: '80%',
    },

});
const mapStateToProps = state => ({ ...state });
const mapActionToProps = () => ({
    navigate,
    ...action,

});
export default connect(mapStateToProps, mapActionToProps())(withWebConsole(PayBill));
