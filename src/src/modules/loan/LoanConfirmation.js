import React, { Component } from 'react';
import { AtiText, AtiRow, AtiCol, AtiTextInput, AtiButton, AtiTextInputCellPhone } from 'ati-ui-elements';
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
import navigate from './../../common/navigation/action';
import * as action from './store/loan-action';
import * as HomeAction from './../../modules/pre-login/store/pre-login-action';

import { connect } from 'react-redux';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol,
} from 'react-native-responsive-screen';
import Dash from 'react-native-dash';
import confirmation from './../../../assets/img/icon/confirmation.png';

// import * as ElectricTokenAction from './Store/ElectricityToken-action';

import line from './../../../assets/img/icon/dash.png';


import { withWebConsole } from 'ati-web-console-connector';
// import * as act from './../pre-login/store/pre-login-action';


class LoanConfirmation extends Component {
    // componentDidMount() {
    //     alert(this.props.nominalTransfer);
    // }
    
    onPay = () => {
        this.props.navigate('TermsCondition');
    }
    render() {
        console.log("AccountInfo="+JSON.stringify(this.props.accountData));
        const currencyFormatter = require('currency-formatter');
        return (

            <View style={{
                backgroundColor: '#ffffff',
            }}
            >
                <AtiText style={{
                    alignSelf: 'center',
                    marginTop: hp('3.5%'),
                    fontFamily: 'AvenirNextLTPro',
                    fontSize: 16,
                    fontWeight: 'bold',
                    fontStyle: 'normal',
                    lineHeight: 22,
                    letterSpacing: 0,
                    textAlign: 'center',
                    color: '#000000',

                }}
                >Loan Submission Summary
                </AtiText>

                <View style={{
                    flexDirection: 'row',
                    marginTop: hp('5%'),
                }}
                >
                    <AtiText
                        style={{
                            marginLeft: wp('6.6%'),
                            fontFamily: 'AvenirNextLTPro',
                            fontSize: 14,
                            fontWeight: 'normal',
                            fontStyle: 'normal',
                            lineHeight: 20,
                            letterSpacing: 0,
                            textAlign: 'left',
                            color: '#000000',

                        }}
                    >Applicant
                    </AtiText>
                    <AtiText
                        style={{
                            alignContent: 'flex-end',
                            marginLeft: 'auto',
                            marginRight: wp('5.1%'),
                            fontFamily: 'AvenirNextLTPro-Demi',
                            fontSize: 14,
                            fontWeight: 'normal',
                            fontStyle: 'normal',
                            lineHeight: 24,
                            letterSpacing: 0,
                            textAlign: 'right',
                            color: '#000000',
                        }}
                    > {this.props.accountData.clientName}
                    </AtiText>
                </View>
                <Dash
                    dashColor="#e6e6e6"
                    dashLength={6}
                    dashGap={4}
                    style={{
                        height: 1,
                        marginTop: hp('1.2%'),
                        marginLeft: wp('5.5%'),
                        marginRight: wp('5.2%'),
                        opacity: 70,
                    }}
                />
                <View style={{
                    flexDirection: 'row',
                    marginTop: hp('3%'),
                }}
                >
                    <AtiText
                        style={{
                            marginLeft: wp('5.6%'),
                            fontFamily: 'AvenirNextLTPro',
                            fontSize: 14,
                            fontWeight: 'normal',
                            fontStyle: 'normal',
                            lineHeight: 20,
                            letterSpacing: 0,
                            textAlign: 'left',
                            color: '#000000',

                        }}
                    >Applicant Account Number
                    </AtiText>
                    <AtiText
                        style={{
                            marginLeft: 'auto',
                            marginRight: wp('5.1%'),
                            fontFamily: 'AvenirNextLTPro',
                            fontSize: 14,
                            fontWeight: 'normal',
                            fontStyle: 'normal',
                            lineHeight: 24,
                            letterSpacing: 0,
                            textAlign: 'right',
                            color: '#000000',
                        }}
                    > {this.props.accountData.accountNo}
                    </AtiText>
                </View>
                <Dash
                    dashColor="#e6e6e6"
                    dashLength={6}
                    dashGap={4}
                    style={{
                        height: 1,
                        marginTop: hp('1.2%'),
                        marginLeft: wp('5.5%'),
                        marginRight: wp('5.2%'),
                        opacity: 70,
                    }}
                />
                <View style={{
                    flexDirection: 'row',
                    marginTop: hp('3%'),
                }}
                >
                    <AtiText
                        style={{
                            marginLeft: wp('5.6%'),
                            fontFamily: 'AvenirNextLTPro',
                            fontSize: 14,
                            fontWeight: 'normal',
                            fontStyle: 'normal',
                            lineHeight: 20,
                            letterSpacing: 0,
                            textAlign: 'left',
                            color: '#000000',

                        }}
                    >Loan Amount
                    </AtiText>
                    <AtiText
                        style={{
                            marginLeft: 'auto',
                            marginRight: wp('5.1%'),
                            fontFamily: 'AvenirNextLTPro',
                            fontSize: 14,
                            fontWeight: 'normal',
                            fontStyle: 'normal',
                            lineHeight: 24,
                            letterSpacing: 0,
                            textAlign: 'right',
                            color: '#000000',
                        }}
                    > {`Rp ${currencyFormatter.format(this.props.loanAmount, {
                                code: 'IDR',
                                symbol: '',
                                decimal: '.',
                                thousand: ',',
                                precision: 0,
                            })}`}
                    </AtiText>
                </View>
                <Dash
                    dashColor="#e6e6e6"
                    dashLength={6}
                    dashGap={4}
                    style={{
                        height: 1,
                        marginTop: hp('1.2%'),
                        marginLeft: wp('5.5%'),
                        marginRight: wp('5.2%'),
                        opacity: 70,
                    }}
                />
                <View style={{
                    flexDirection: 'row',
                    marginTop: hp('3%'),
                }}
                >
                    <AtiText
                        style={{
                            marginLeft: wp('5.6%'),
                            fontFamily: 'AvenirNextLTPro',
                            fontSize: 14,
                            fontWeight: 'normal',
                            fontStyle: 'normal',
                            lineHeight: 20,
                            letterSpacing: 0,
                            textAlign: 'left',
                            color: '#000000',

                        }}
                    >Loan Products
                    </AtiText>
                    <AtiText
                        style={{
                            marginLeft: 'auto',
                            marginRight: wp('5.1%'),
                            fontFamily: 'AvenirNextLTPro',
                            fontSize: 14,
                            fontWeight: 'normal',
                            fontStyle: 'normal',
                            lineHeight: 24,
                            letterSpacing: 0,
                            textAlign: 'right',
                            color: '#000000',
                        }}
                    > {this.props.LoanDetails.name}
                    </AtiText>
                </View>
                <Dash
                    dashColor="#e6e6e6"
                    dashLength={6}
                    dashGap={4}
                    style={{
                        height: 1.2,
                        marginTop: hp('1.2%'),
                        marginLeft: wp('5.5%'),
                        marginRight: wp('5.2%'),
                        opacity: 70,
                    }}
                />
                <View style={{
                    flexDirection: 'row',
                    marginTop: hp('3%'),
                }}
                >
                    <AtiText
                        style={{
                            marginLeft: wp('5.6%'),
                            fontFamily: 'AvenirNextLTPro',
                            fontSize: 14,
                            fontWeight: 'normal',
                            fontStyle: 'normal',
                            lineHeight: 20,
                            letterSpacing: 0,
                            textAlign: 'left',
                            color: '#000000',

                        }}
                    >Interest
                    </AtiText>
                    <AtiText
                        style={{
                            marginLeft: 'auto',
                            marginRight: wp('5.1%'),
                            fontFamily: 'AvenirNextLTPro',
                            fontSize: 14,
                            fontWeight: 'normal',
                            fontStyle: 'normal',
                            lineHeight: 20,
                            letterSpacing: 0,
                            textAlign: 'left',
                            color: '#000000',
                        }}
                    > {this.props.LoanDetails.interestRatePerPeriod}% / Year
                    </AtiText>
                </View>
                <Dash
                    dashColor="#e6e6e6"
                    dashLength={6}
                    dashGap={4}
                    style={{
                        height: 1.2,
                        marginTop: hp('1.2%'),
                        marginLeft: wp('5.5%'),
                        marginRight: wp('5.2%'),
                        opacity: 70,
                    }}
                />
                <View style={{
                    flexDirection: 'row',
                    marginTop: hp('3%'),
                }}
                >
                    <AtiText
                        style={{
                            marginLeft: wp('5.6%'),
                            fontFamily: 'AvenirNextLTPro',
                            fontSize: 14,
                            fontWeight: 'normal',
                            fontStyle: 'normal',
                            lineHeight: 20,
                            letterSpacing: 0,
                            textAlign: 'left',
                            color: '#000000',

                        }}
                    >Tenure
                    </AtiText>
                    <AtiText
                        style={{
                            marginLeft: 'auto',
                            marginRight: wp('4.8%'),
                            fontFamily: 'AvenirNextLTPro',
                            fontSize: 14,
                            fontWeight: 'normal',
                            fontStyle: 'normal',
                            lineHeight: 20,
                            letterSpacing: 0,
                            textAlign: 'left',
                            color: '#000000',

                        }}
                    >{this.props.month} Month
                    </AtiText>
                </View>
                <View style={{
                    marginTop: hp('3.5%'),
                    flexDirection: 'row',
                    alignSelf: 'center',
                }}
                >
                    <Image source={line} style={{ width: wp('101.3%'), height: hp('2.6%') }} />
                </View>
                <View style={{
                    flexDirection: 'row',
                    marginTop: hp('3%'),
                }}
                >
                    <AtiText
                        style={{
                            marginLeft: wp('5.6%'),
                            fontFamily: 'AvenirNextLTPro',
                            fontSize: 14,
                            fontWeight: 'normal',
                            fontStyle: 'normal',
                            lineHeight: 20,
                            letterSpacing: 0,
                            textAlign: 'left',
                            color: '#000000',
                        }}
                    >Installment Estimates
                    </AtiText>
                    <AtiText
                        style={{
                            marginLeft: 'auto',
                            marginRight: wp('5.1%'),
                            fontFamily: 'AvenirNextLTPro',
                            fontSize: 18,
                            fontWeight: 'bold',
                            fontStyle: 'normal',
                            lineHeight: 24,
                            letterSpacing: 0,
                            textAlign: 'right',
                            color: '#a92930',

                        }}
                    >{`Rp ${currencyFormatter.format(this.props.EstimateInstallment, {
                                    code: 'IDR',
                                    symbol: '',
                                    decimal: '.',
                                    thousand: ',',
                                    precision: 2,
                                })}`}/Month
                    </AtiText>
                </View>
                <Image source={confirmation} style={{ width: wp('100%'), height: hp('2.6%'), marginTop: wp('2.8%') }} />
                <View style={{
                    alignContent: 'flex-end',
                    width: wp('100%'),
                    height: hp('67%'),
                    backgroundColor: '#a92930',
                }}
                >
                    <AtiButton
                        onPress={this.onPay}
                        buttonStyle={{
                            width: wp('80.3%'),
                            height: hp('7.8%'),
                            borderRadius: 62,
                            backgroundColor: '#ffffff',
                            marginTop: hp('3.6%'),
                            marginLeft: wp('12.5%'),
                        }}
                        textStyle={{

                            paddingLeft: wp('35%'),
                            fontFamily: 'AvenirNextLTPro',
                            fontSize: 15,
                            fontWeight: 'bold',
                            fontStyle: 'normal',
                            lineHeight: 21,
                            letterSpacing: 0,
                            textAlign: 'center',
                            color: '#a92930',
                        }}
                    >Confirm
    
                    </AtiButton>
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
    const { LoanReducer, login } = state;
    return {
        ...LoanReducer,
        ...login,
    };
};
const mapActionStateToProps = () => ({
    navigate,
    ...action,
    ...HomeAction,
});
export default connect(mapStateToProps, mapActionStateToProps())(LoanConfirmation);