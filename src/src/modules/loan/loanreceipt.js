import React, { Component } from 'react';
import { AtiText, AtiRow, AtiCol, AtiTextInput, AtiButton, AtiTextInputCellPhone, AtiIcon } from 'ati-ui-elements';
import {
    ImageBackground,
    StyleSheet,
    View,
    Image,
    ScrollView,
    AsyncStorage,
    TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import navigate from './../../common/navigation/action';
import * as action from './store/loan-action';
import * as HomeAction from './../../modules/pre-login/store/pre-login-action';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';
import Dash from 'react-native-dash'
import receipt1 from './../../../assets/img/icon/receipt1.png';
import receipt from './../../../assets/img/icon/receipt.png';
import border_2 from './../../../assets/img/icon/border_2.png';




class LoanReceipt extends Component {

    Done=()=>{
        this.props.navigate('StatusSubmision')
    }
    render() {
        const currencyFormatter = require('currency-formatter');

        return (
            <ScrollView>
            <View style={{
                height: hp('120%'),
                width: wp('100%'),
                backgroundColor: "#ffffff",
            }}>
                <Image source={receipt} style={{ width: wp('17%'), height: ('10%'), alignSelf: "center", marginTop: hp('2.5%') }} />
                <AtiText style={{
                    
                    letterSpacing: 0,
                    alignSelf: 'center',
                    textAlign:'center',
                    color: "#000000",
                    fontFamily: "AvenirNextLTPro",
                    fontSize: 16,
                    fontWeight: "bold",
                    fontStyle: "normal",
                    marginTop: hp('1.5%'),
                   

                }}>Loan Submission Sent</AtiText>

                <AtiText style={{
                    fontFamily: "AvenirNextLTPro",
                    fontSize: 14,
                    fontWeight: "normal",
                    fontStyle: "normal",
                    lineHeight: 20,
                    letterSpacing: 0,
                    textAlign: "center",
                    color: "#000000",
                    marginRight: wp('5.3%'), 
                    marginLeft: wp('5.3%'), 
                }}>Loan application is in the process of approval.
                     After approval, we will proceed with the disbursement process. 
                     Please contact our Customer Service at the Head Office branch for more information.</AtiText>
                     <View style={{
                    flexDirection: "row",
                    marginTop: hp('5%')
                }}>
                    <AtiText
                        style={{
                           
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "bold",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            color: "#000000",
                            marginLeft: wp('5.6%'),

                        }}
                    >Loan Detail</AtiText>
                    
                    <AtiIcon name="ios-arrow-down"
                    style={{
                        fontSize: 20,
                        alignItems:'flex-end',
                        color: "#000000",
                        alignContent:"flex-end",
                        marginLeft:'auto',
                        marginRight: wp('5.1%')
                    }}/>
                    
                </View>
                <Dash dashColor="#f0f0f0"
                    dashLength={6}
                    dashGap={4}
                    style={styles.dash} />

                <View style={{
                    flexDirection: "row",
                    marginTop: hp('2.4%')
                }}>
                    <AtiText
                        style={{
                            
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            color: "#000000",
                            marginLeft: wp('5.6%'),

                        }}
                    >Applicant</AtiText>
                    
                    <AtiText
                        style={{
                           
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            color: "#000000",
                            marginLeft:'auto',
                            marginRight: wp('5.1%')
                        }}
                    >  {this.props.accountData.clientName} </AtiText>
                    
                </View>
                <Dash dashColor="#f0f0f0"
                    dashLength={6}
                    dashGap={4}
                    style={styles.dash} />
                <View style={{
                    flexDirection: "row",
                    marginTop: hp('2.4%')
                }}>
                    <AtiText
                        style={{
                           
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            color: "#000000",
                            marginLeft: wp('5.6%'),

                        }}
                    >Applicant Account Number</AtiText>
                    <AtiText
                        style={{
                           
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            textAlign: "right",
                            color: "#000000",
                            marginLeft: "auto",

                            marginRight: wp('5.1%')
                        }}
                    >{this.props.accountData.accountNo}</AtiText>
                </View>
                <Dash dashColor="#e6e6e6"
                    dashLength={6}
                    dashGap={4}
                    style={styles.dash} />
                <View style={{
                    flexDirection: "row",
                    marginTop: hp('2.4%')
                }}>
                    <AtiText
                        style={{
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            color: "#000000",
                            marginLeft: wp('5.6%'),

                        }}
                    >Loan Amount</AtiText>
                    <AtiText
                        style={{
                          
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            textAlign: "right",
                            color: "#000000",
                            marginLeft: 'auto',
                            marginRight: wp('5.1%')
                        }}
                    >{`Rp ${currencyFormatter.format(this.props.loanAmount, {
                                code: 'IDR',
                                symbol: '',
                                decimal: '.',
                                thousand: ',',
                                precision: 0,
                            })}`}
                    </AtiText>
                </View>
                <Dash dashColor="#e6e6e6"
                    dashLength={6}
                    dashGap={4}
                    style={styles.dash} />
                <View style={{
                    flexDirection: "row",
                    marginTop: hp('2.4%')
                }}>
                    <AtiText
                        style={{
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            color: "#000000",
                            marginRight:'auto',
                            marginLeft: wp('5.1%'),

                        }}
                    >Loan products</AtiText>
                    <AtiText
                        style={{
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            textAlign: "right",
                            color: "#000000",
                            marginLeft: 'auto',
                            marginRight: wp('5.1%')
                        }}
                    >{this.props.LoanDetails.name}</AtiText>
                </View>
                <Dash dashColor="#e6e6e6"
                    dashLength={6}
                    dashGap={4}
                    style={styles.dash} />
                <View style={{
                    flexDirection: "row",
                    marginTop: hp('2.4%')
                }}>
                    <AtiText
                        style={{
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            color: "#000000",
                            marginLeft: wp('5.1%'),

                        }}
                    >Interest</AtiText>
                    <AtiText
                        style={{
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            textAlign: "right",
                            color: "#000000",
                            marginLeft: 'auto',
                            marginRight: wp('5.1%')
                        }}
                    >{this.props.LoanDetails.interestRatePerPeriod}% / Year</AtiText>
                </View>
                <Dash dashColor="#e6e6e6"
                    dashLength={6}
                    dashGap={4}
                    style={styles.dash} />
                <View style={{
                    flexDirection: "row",
                    marginTop: hp('2.4%')
                }}>
                    <AtiText
                        style={{
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            color: "#000000",
                            marginLeft: wp('5.1%'),

                        }}
                    >Tenure</AtiText>
                    <AtiText
                        style={{
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            textAlign: "right",
                            color: "#000000",
                            marginLeft: 'auto',

                            marginRight: wp('5.1%')
                        }}
                    >{this.props.month} Months</AtiText>
                </View>
                <Image source={border_2} style={{width:wp('100%'),height:hp('4%'),marginTop:hp('2%')}}/>
                <View style={{
                    flexDirection: "row",
                    marginTop: hp('2.4%')
                }}>
                    <AtiText
                        style={{
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            color: "#000000",
                            marginLeft: wp('5.1%'),

                        }}
                    >Installment Estimates</AtiText>
                    <AtiText
                        style={{
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            alignContent: "flex-end",
                            color: "#a92930",
                            marginLeft: 'auto',
                            marginRight: wp('5.1%'),
                            
                        }}
                    >{`Rp ${currencyFormatter.format(this.props.EstimateInstallment, {
                                    code: 'IDR',
                                    symbol: '',
                                    decimal: '.',
                                    thousand: ',',
                                    precision: 2,
                                })}`}/Month</AtiText>
                </View>     
                <Image source={receipt1} style={{ width: wp('100%'), height: hp('2.6%'),marginTop:hp('1.3%') }} />
                <View style={{
                    alignContent: "flex-end",
                    width: wp('100%'),
                    height:hp('25%'),
                    backgroundColor: "#f0f0f0"
                }}>
                    <AtiButton buttonStyle={{
                        width: wp('80%'),
                        height: hp('6.7%'),
                        borderRadius: 62,
                        backgroundColor: "#a92930",
                        marginTop: hp('4%'),
                        marginLeft: wp('12.4%'),
                       
                    }}
                    
                        textStyle={{

                            color: "#ffffff",
                            paddingLeft: wp('35%')
                        }}
                        onPress={this.Done}
                    >Done</AtiButton>
                </View>
            </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    dash: {
        height: 1,
        marginTop: hp('2%'),
        marginLeft: wp('5.5%'),
        marginRight: wp('5.2%'),
        opacity: 70
    }

})
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
export default connect(mapStateToProps, mapActionStateToProps())(LoanReceipt);