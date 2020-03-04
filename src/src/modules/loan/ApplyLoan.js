import React, { Component } from 'react';
import { AtiText, AtiTextInput, AtiButton, AtiRow, AtiCol, AtiSpinner } from 'ati-ui-elements';
// import bgSrc from './../../../assets/img/background/bg.png';
import img from './../../../assets/img/background/ApplyLoan.png';
// import navigate from './../../../common/navigation/action';
import navigate from './../../common/navigation/action';
import * as action from './store/loan-action';
import { connect } from 'react-redux';


import {
    ImageBackground,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { View } from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol,
} from 'react-native-responsive-screen';

class ApplyLoan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loanAmount: this.props.LoanDetails.minPrincipal,
            month: this.props.LoanDetails.minNumberOfRepayments,
            maxMonth: this.props.LoanDetails.numberOfRepayments,
            InstallmentEstimate: 0,
        };
    }
    componentDidMount() {
        this.props.setMonth(this.props.LoanDetails.minNumberOfRepayments);
        this.props.setLoanAmount(this.props.LoanDetails.minPrincipal);

        const a = this.state.loanAmount;
        // const b = (a[1]);
        let c = this.props.LoanDetails.loanAmount;
        c = a;
        const amountnew = a;
        this.props.setLoanAmount(amountnew);

        const principalMonth = (amountnew / (this.state.month));
        const interestx = [(amountnew / 100)];
        const interestx1 = (parseFloat(interestx) * parseFloat(this.props.LoanDetails.interestRatePerPeriod));
        const total = principalMonth + interestx1;
        this.props.setEstimateInstallment(total);
        this.props.setMonth(this.state.month - 1);

        this.setState({
           // month: this.state.month,
            InstallmentEstimate: total,
        });
    }

    dec = () => {
        if (this.state.month > 1) {
            const a = this.state.loanAmount;
            // const b = (a[1]);
            let c = this.props.LoanDetails.loanAmount;
            c = a;
            let amountnew = '';
            if (isNaN(c)) {
                amountnew = c.replace(/,/g, '');
               } else {
                amountnew = c;
               }

            this.props.setLoanAmount(amountnew);

           // const principalMonth = (amountnew / (this.state.month - 1));
            const principalMonth = (amountnew / (this.state.month - 1));
            const monthInterest = (this.props.LoanDetails.interestRatePerPeriod / 12);
            const monthlyInterestAmount = [(amountnew / 100) * monthInterest];
            const ToataInterestAmount = (parseFloat(principalMonth) + parseFloat(monthlyInterestAmount));
            const interestx = [(amountnew / 100)];
            const interestx1 = (parseFloat(interestx) * parseFloat(this.props.LoanDetails.interestRatePerPeriod));
            const total = principalMonth + interestx1;
            this.props.setEstimateInstallment(ToataInterestAmount);
            this.props.setMonth(this.state.month - 1);

            this.setState({
                month: this.state.month - 1,
                InstallmentEstimate: ToataInterestAmount,
            });
        }
    };

    increases = () => {
        if (this.state.maxMonth > this.state.month) {
            const a = this.state.loanAmount;
            // const b = (a[1]);
            let c = this.props.LoanDetails.loanAmount;
            c = a;
            let amountnew = '';
           if (isNaN(c)) {
            amountnew = c.replace(/,/g, '');
           } else {
            amountnew = c;
           }


            this.props.setLoanAmount(amountnew);
            const principalMonth = (amountnew / (this.state.month + 1));
            const monthInterest = (this.props.LoanDetails.interestRatePerPeriod / 12);
            const monthlyInterestAmount = [(amountnew / 100) * monthInterest];
            const ToataInterestAmount = (parseFloat(principalMonth) + parseFloat(monthlyInterestAmount));
         //   const principalMonth = (amountnew / (this.state.month + 1));
            const interestx = [(amountnew / 100)];
            const interestx1 = (parseFloat(interestx) * parseFloat(this.props.LoanDetails.interestRatePerPeriod));
            const total = principalMonth + interestx1;
            this.props.setEstimateInstallment(ToataInterestAmount);
            this.props.setMonth(this.state.month + 1);
            this.setState({
                month: this.state.month + 1,
                InstallmentEstimate: ToataInterestAmount,
            });
        }
    };

    onApply = () => {
        // if ( parseFloat(this.state.loanAmount) < parseFloat(this.props.LoanDetails.minPrincipal)){
        //     alert("Amont Must Greater Then:"+this.props.LoanDetails.minPrincipal )
        // } else {
        //     this.props.navigate('LoanConfirmation');
        // }
        let a = this.props.loanAmount.replace(/,/g , '');
        if ( a >= this.props.LoanDetails.minPrincipal) {
            this.props.navigate('LoanConfirmation');
        } else {
            alert("Loan Amount Should Be Greater or equal to Min Principal"+"("+this.props.LoanDetails.minPrincipal+")");
        }
    }
    
    render() {
        const currencyFormatter = require('currency-formatter');

        if (this.props.LoanDetails == null) {
            return (<View>
                <AtiSpinner />
                    </View>);
        }
        // eslint-disable-next-line no-undef
        // console.log("Interest:"+this.props.LoanDetails.interestRatePerPeriod);
        //  console.log("DATA:"+JSON.stringify(this.props.userData));
        return (
            // <ImageBackground style={styles.picture}source={bgSrc}>
            //                 <AtiText style={styles.text}>Submission</AtiText>
            // </ImageBackground>
            <View>
                <ImageBackground
                    style={styles.picture}
                    source={img}
                >
                    <AtiText
                        style={{
                            // marginLeft: wp('21.9%'),
                            // marginRight: wp('26.9%'),
                            alignSelf: 'center',
                            marginTop: hp('5.8%'),
                            marginLeft: wp('5%'),
                            fontFamily: 'AvenirNextLTPro',
                            fontSize: 14,
                            fontWeight: 'bold',
                            fontStyle: 'normal',
                            lineHeight: 20,
                            letterSpacing: 0,
                            textAlign: 'left',
                            color: '#ffffff',
                        }}
                    >{this.props.LoanDetails.name}
                    </AtiText>
                    <View
                        style={{
                            width: wp('93.1%'), height: hp('53.5%'), backgroundColor: '#ffffff', marginTop: hp('5.8%'), marginRight: wp('3.5%'), marginLeft: wp('3.5%'), borderRadius: 12,
                        }}
                    >
                        <AtiText style={{
                            fontFamily: 'AvenirNextLTPro',
                            fontSize: 14,
                            fontWeight: 'normal',
                            fontStyle: 'normal',
                            lineHeight: 20,
                            letterSpacing: 0.28,
                            textAlign: 'left',
                            color: '#000000',
                            marginTop: hp('3.1%'),
                            alignSelf: 'center',
                        }}
                        >Loan Amount
                        </AtiText>
                        <View style={{
                            flexDirection: 'row',
                            marginTop: hp('3.1%'),
                            marginLeft: wp('5.7%'),
                            marginRight: wp('5.4%'),
                            height: hp('9%'),
                            borderRadius: 8,
                            backgroundColor: 'rgba(0, 0, 0, 0.02)',
                            borderStyle: 'solid',
                            borderWidth: 1,
                            borderColor: '#dededf',
                            // fontFamily: 'AvenirNextLTPro',
                            // fontSize: 32,
                            // fontWeight: 'bold',
                            // fontStyle: 'normal',
                            // lineHeight: 44,
                            // letterSpacing: 0,
                            // textAlign: 'center',
                            // color: '#a92930',

                        }}
                        >
                            <AtiText style={{
                                fontFamily: 'AvenirNextLTPro',
                                fontSize: 32,
                                fontWeight: 'bold',
                                fontStyle: 'normal',
                                lineHeight: 44,
                                letterSpacing: 0,
                                textAlign: 'left',
                                marginLeft: wp('18.9%'),
                                marginTop: hp('1%'),
                                color: '#a92930',
                            }}
                            >Rp
                            </AtiText>
                            <AtiTextInput
                            textStyle={styles.input}
                            containerStyle={styles.input1}
                            placeholder=""
                            type="text"
                            id="Identity"
                            keyboardType="numeric"
                            defaultValue={currencyFormatter.format(this.state.loanAmount, {
                                code: 'IDR',
                                symbol: '',
                                decimal: '.',
                                thousand: ',',
                                precision: 0,
                            })}
                            events={{
                                onChangeText: (e) => {
                                   // const a = e.split(' ');
                                   // const b = (a[1]);
                                    let c = this.props.LoanDetails.loanAmount;
                                    c = e;
                                    const amountnew = c.replace(/,/g, '');
                                    this.props.setLoanAmount(amountnew);

                                    const principalMonth = (amountnew / this.state.month);
                                    const monthInterest = (this.props.LoanDetails.interestRatePerPeriod / 12);
                                    const monthlyInterestAmount = [(amountnew / 100) * monthInterest];
                                    const ToataInterestAmount = (parseFloat(principalMonth) + parseFloat(monthlyInterestAmount));
                                    // alert("T"+ToataInterestAmount);
                                    const interestx = [(amountnew / 100)];
                                    const interestx1 = (parseFloat(interestx) * parseFloat(this.props.LoanDetails.interestRatePerPeriod));
                                    const total = principalMonth + interestx1;
                                    this.props.setEstimateInstallment(ToataInterestAmount);
                                    this.setState({
                                        loanAmount: e,
                                        InstallmentEstimate: ToataInterestAmount,
                                    });
                                },
                                onBlur: () => {
                                    // this.validateInputs();
                                },
                            }}
                            />

                        </View>
                        {/* <AtiTextInput
                            textStyle={styles.input}
                            placeholder=""
                            type="text"
                            id="Identity"
                            keyboardType="numeric"
                            defaultValue={`Rp ${currencyFormatter.format(this.state.loanAmount, {
                                code: 'IDR',
                                symbol: '',
                                decimal: '.',
                                thousand: ',',
                                precision: 0,
                            })}`}
                            events={{
                                onChangeText: (e) => {
                                    const a = e.split(' ');
                                    const b = (a[1]);
                                    let c = this.props.LoanDetails.loanAmount;
                                    c = b;
                                    const amountnew = c.replace(/,/g, '');
                                    this.props.setLoanAmount(amountnew);

                                    const principalMonth = (amountnew / this.state.month);
                                    const interestx = [(amountnew / 100)];
                                    const interestx1 = (parseFloat(interestx) * parseFloat(this.props.LoanDetails.interestRatePerPeriod));
                                    const total = principalMonth + interestx1;
                                    this.props.setEstimateInstallment(total);
                                    this.setState({
                                        loanAmount: e,
                                        InstallmentEstimate: total,
                                    });
                                },
                                onBlur: () => {
                                    // this.validateInputs();
                                },
                            }}
                        /> */}
                        <AtiText style={{
                            fontFamily: 'AvenirNextLTPro',
                            fontSize: 14,
                            fontWeight: 'normal',
                            fontStyle: 'normal',
                            lineHeight: 20,
                            letterSpacing: 0.28,
                            textAlign: 'left',
                            color: '#000000',
                            marginLeft: wp('5.7%'),
                            marginTop: hp('3.6%'),
                        }}
                        >Tenure (Month)
                        </AtiText>
                        <View style={{
                            marginLeft: wp('5.7%'),
                            marginRight: wp('5.4%'),
                            marginTop: hp('3.6%'),
                            height: hp('7.5%'),
                            borderRadius: 10,
                            backgroundColor: '#ffffff',
                            borderStyle: 'solid',
                            borderWidth: 1,
                            borderColor: '#d6d6d6',
                            flexDirection: 'row',
                        }}
                        >
                            <TouchableOpacity
                                style={{
                                    width: wp('12.5%'),
                                    //  height: hp('16.1%'),
                                    //  width: 50,
                                    //  height: 50,
                                    // marginBottom: wp('5.5%'),
                                    alignContent: 'flex-start',
                                    borderRadius: 10,
                                    backgroundColor: '#ffffff',
                                    borderStyle: 'solid',
                                    borderWidth: 1,
                                    borderColor: '#a92930',
                                }}
                                onPress={this.dec.bind()}
                            >
                                <Icon
                                    name="minus"
                                    style={{
                                        height: hp('5%'),
                                        width: wp('60%'),
                                        resizeMode: 'stretch',
                                        //   alignItems: 'right',
                                        alignContent: 'center',
                                        //  alignSelf: 'center',

                                        marginTop: hp('2.5%'),
                                        color: '#a92930',
                                        marginLeft: wp('4.5%'),

                                        // marginRight: wp('2%'),
                                    }}
                                />
                            </TouchableOpacity>
                            <AtiText style={{
                                fontFamily: 'AvenirNextLTPro',
                                fontSize: 16,
                                fontWeight: 'bold',
                                fontStyle: 'normal',
                                // lineHeight: 14,
                                letterSpacing: 0.32,
                                // textAlign: 'center',
                                // alignSelf: 'center',
                                color: '#000000',
                                marginTop: hp('2.7%'),
                                marginLeft: wp('23.2%'),
                            }}
                            >{this.state.month} Month
                            </AtiText>
                            <TouchableOpacity
                                style={{
                                    width: wp('12.5%'),
                                    //  height: hp('16.1%'),
                                    //  width: 50,
                                    // height: 50,
                                    // marginBottom: wp('5.5%'),
                                    alignContent: 'flex-end',
                                    borderRadius: 10,
                                    backgroundColor: '#ffffff',
                                    borderStyle: 'solid',
                                    borderWidth: 1,
                                    borderColor: '#a92930',
                                    marginLeft: 'auto',
                                }}
                                onPress={this.increases.bind()}
                            >
                                <Icon
                                    name="plus"
                                    style={{
                                        height: hp('5%'),
                                        width: wp('60%'),
                                        resizeMode: 'stretch',
                                        //   alignItems: 'right',
                                        alignContent: 'center',
                                        //  alignSelf: 'center',

                                        marginTop: hp('2.5%'),
                                        color: '#a92930',
                                        marginLeft: wp('4.5%'),

                                        // marginRight: wp('2%'),
                                    }}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            marginTop: ('3%'),
                        }}
                        >
                            <AtiText style={{
                                marginLeft: wp('5.7%'),
                                fontFamily: 'AvenirNextLTPro',
                                fontSize: 14,
                                fontWeight: 'normal',
                                fontStyle: 'normal',
                                lineHeight: 20,
                                letterSpacing: 0.28,
                                textAlign: 'left',
                                color: '#000000',
                            }}
                            >
                                Installment Estimates
                            </AtiText>
                            <AtiText style={{
                                marginLeft: 'auto',

                                textAlign: 'right',
                                marginRight: wp('5.4%'),
                                fontFamily: 'AvenirNextLTPro',
                                fontSize: 14,
                                fontWeight: 'bold',
                                fontStyle: 'normal',
                                lineHeight: 20,
                                letterSpacing: 0.28,

                                color: '#a92930',
                            }}
                            >
                                {`Rp ${currencyFormatter.format(this.state.InstallmentEstimate, {
                                    code: 'IDR',
                                    symbol: '',
                                    decimal: '.',
                                    thousand: ',',
                                    precision: 2,
                                })}`}/Month
                            </AtiText>
                        </View>
                        <AtiButton
                            buttonStyle={{
                                borderRadius: 80,
                                backgroundColor: '#a92930',
                                height: hp('7.3%'),
                                marginLeft: wp('7.7%'),
                                marginRight: wp('6.3%'),
                                marginTop: hp('3.5%'),

                            }}
                            onPress={this.onApply.bind()}
                        >
                            <AtiText style={{
                                fontFamily: 'AvenirNextLTPro',
                                fontSize: 15,
                                fontWeight: '500',
                                fontStyle: 'normal',
                                lineHeight: 21,
                                letterSpacing: 0,
                                textAlign: 'center',
                                color: '#ffffff',
                                marginLeft: wp('30%'),
                            }}
                            >Apply
                            </AtiText>
                        </AtiButton>
                    </View>
                </ImageBackground>
                {/* <AtiText>jghfghf</AtiText> */}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    input: {
      //  marginTop: hp('0.1%'),
       // marginLeft: wp('5.7%'),
       // marginRight: wp('5.4%'),
      //  width: wp('50%'),
      //  height: hp('8%'),
      //  borderRadius: 8,
      //  backgroundColor: 'rgba(0, 0, 0, 0.02)',
      //  borderStyle: 'solid',
      //  borderWidth: 1,
      //  borderColor: '#dededf',
     // marginTop: hp('1.2%'),

        fontFamily: 'AvenirNextLTPro',
        fontSize: 32,
        fontWeight: 'bold',
        fontStyle: 'normal',
        lineHeight: 25,
        letterSpacing: 0,
        textAlign: 'left',
        color: '#a92930',
        // width: wp('86.1%'),
        // borderWidth: 1,
        // borderRadius: 10,
        // borderStyle: 'solid',
        // borderColor: '#d6d6d6',
        // backgroundColor: '#ffffff',
    },
    input1: {
        // marginTop: hp('3.1%'),
        // marginLeft: wp('5.7%'),
        // marginRight: wp('5.4%'),
         width: wp('100%'),
         height: hp('9%'),
         marginTop: hp('1.8%'),
        //  borderRadius: 8,
        //  backgroundColor: 'rgba(0, 0, 0, 0.02)',
        //  borderStyle: 'solid',
        //  borderWidth: 1,
        //  borderColor: '#dededf',
        //  fontFamily: 'AvenirNextLTPro',
        //  fontSize: 32,
        //  fontWeight: 'bold',
        //  fontStyle: 'normal',
        //  lineHeight: 44,
        //  letterSpacing: 0,
        //  textAlign: 'center',
        //  color: '#a92930',
         // width: wp('86.1%'),
         // borderWidth: 1,
         // borderRadius: 10,
         // borderStyle: 'solid',
         // borderColor: '#d6d6d6',
         // backgroundColor: '#ffffff',
     },
    picture: {
        //  flex: 1,

        width: wp('100%'),
        height: hp('30.9%'),
        //  resizeMode: 'cover',
    },
    text: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 20,
        alignSelf: 'center',
        marginTop: '20%',
        alignContent: 'center',
    },
});

const mapStateToProps = (state) => {
    const { LoanReducer } = state;
    return {
        ...LoanReducer,
    };
};
const mapActionStateToProps = () => ({
    navigate,
    ...action,
});
export default connect(mapStateToProps, mapActionStateToProps())(ApplyLoan);
