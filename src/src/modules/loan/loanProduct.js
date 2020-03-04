import React, { Component } from 'react';
import { AtiText, AtiRow, AtiCol, AtiTextInput, AtiButton, AtiTextInputCellPhone, AtiCard, AtiCardItem, Left } from 'ati-ui-elements';
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
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';
import axios from 'axios';
import * as action from './store/loan-action';
import { withWebConsole } from 'ati-web-console-connector';


import loanproduct1 from './../../../assets/img/icon/loanproduct1.png';
import loanproduct2 from './../../../assets/img/icon/loanproduct2.png';


class LoanProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loan: [],
        };
    }




    componentDidMount() {
        const URL = 'https://prdc-support.anabatic.com:7443/fineract-provider/api/v1/loanproducts/mobile ';
        axios.get(URL, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Fineract-Platform-TenantId': 'default',
            },
            auth: {
                username: 'coin',
                password: 'coin',
            },
        }).then((response) => {
            console.log(response.data);
            this.setState({
                loan: response.data
            })
        });
    }

    render() {
        const next = (e) => {
            this.props.setLoanDetails(e);
            this.props.navigate('ApplyLoan');
        }
        const currencyFormatter = require('currency-formatter');
        return (
            <ScrollView>
                <View style={styles.container}>
                    {
                        this.state.loan.map(function (x) {
                            return (
                                <View>
                                    <ImageBackground style={styles.image} source={loanproduct1}>
                                        <AtiText style={styles.textloan}>Loan Value</AtiText>
                                        <View style={{ flexDirection: "row", justifyContent: 'flex-start', alignItems: 'baseline' }}>
                                            <AtiText style={styles.textbold}> Rp{" "}
                                                {currencyFormatter.format(x.minPrincipal, {
                                                    code: 'IDR',
                                                    symbol: '',
                                                    thousand: ',',
                                                })}</AtiText>
                                            <AtiText style={{
                                                textAlign: 'left',
                                                color: '#ffffff',
                                                fontFamily: "AvenirNextLTPro",
                                                fontWeight: "normal",
                                                fontStyle: "normal",
                                                letterSpacing: 0,
                                                fontSize: 14,
                                                // marginLeft:wp('4.5%'),
                                                marginTop: hp('1%')
                                            }}> until </AtiText>
                                            <AtiText style={{
                                                textAlign: 'left',
                                                color: '#ffffff',
                                                fontFamily: "AvenirNextLTPro",
                                                fontWeight: "bold",
                                                fontStyle: "normal",
                                                letterSpacing: 0,
                                                fontSize: 14,
                                                // marginLeft:wp('4.5%'),
                                                marginTop: hp('1%')
                                            }}> Rp{" "}
                                                {currencyFormatter.format(x.maxPrincipal, {
                                                    code: 'IDR',
                                                    symbol: '',
                                                    thousand: ',',
                                                })}</AtiText>
                                        </View>
                                        <View style={{ flexDirection: "row", justifyContent: 'flex-start', alignItems: 'baseline', marginTop: hp('2%') }}>
                                            <AtiText style={{
                                                textAlign: 'left',
                                                color: '#ffffff',
                                                fontFamily: "AvenirNextLTPro",
                                                fontWeight: "normal",
                                                fontStyle: "normal",
                                                fontSize: 12,
                                                marginLeft: wp('4.5%'),
                                            }}>Tenor:1-{x.numberOfRepayments} Month(s)</AtiText>
                                            <AtiText style={{
                                                textAlign: 'left',
                                                color: '#ffffff',
                                                fontFamily: "AvenirNextLTPro",
                                                fontWeight: "500",
                                                fontStyle: "normal",
                                                fontSize: 12,
                                                marginLeft: 'auto',
                                                marginRight: wp('4.5%')
                                            }}>Interest(Year):{x.interestRatePerPeriod}%</AtiText>
                                        </View>
                                        <View style={{ backgroundColor: "#ffffff", height: hp('10%'), marginTop: hp('1%'), borderBottomEndRadius: 15, borderBottomStartRadius: 15, overflow: "hidden", width: wp('90.7%') }}>
                                            <View style={{ flexDirection: "row" }}>
                                                <AtiText style={{
                                                    width: wp('36.5%'),
                                                    fontFamily: "AvenirNextLTPro",
                                                    fontSize: 14,
                                                    fontWeight: "bold",
                                                    fontStyle: "normal",
                                                    letterSpacing: 0,
                                                    textAlign: "left",
                                                    color: "#000000",
                                                    marginLeft: wp('4.5%'),
                                                    marginTop: hp('1.5%')
                                                }}>{x.name}</AtiText>
                                                <AtiButton style={{
                                                    marginLeft: 'auto',
                                                    marginRight: wp('4.5%'),
                                                    borderRadius: 25,
                                                    backgroundColor: "#a92930",
                                                    width: wp('24.5%'),
                                                    height: hp('5%'),
                                                    marginTop: hp('1.5%')
                                                }}
                                                onPress={
                                                    next.bind(this, x)
                                                    }
                                                ><AtiText style={{ marginLeft: wp('4%') }}>Apply</AtiText></AtiButton>
                                            </View>
                                        </View>
                                    </ImageBackground>
                                </View>
                            )
                        })



                    }
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        alignItems: 'center',
        marginBottom: hp("5%"),
        backgroundColor: '#f0f0f0'
    },
    button: {
        width: wp('80%'),
        height: hp('7.8%'),
        borderRadius: 80,
        backgroundColor: "#a92930",
        flexDirection: "row",
        marginTop: hp('3%')
    },
    icon: {
        width: wp('8%'),
        height: hp('5%'),
        marginTop: hp('1.2%'),
        marginLeft: wp('20%')
    },
    buttontext: {
        fontFamily: "AvenirNextLTPro",
        fontSize: 15,
        fontWeight: "500",
        fontStyle: "normal",
        color: "#ffffff",
        letterSpacing: 0,
        textAlign: "center",
        marginTop: hp('2%'),
        marginLeft: wp('7.5%')
    },
    image: {
        width: wp('90.7%'),
        height: hp('21.1%'),
        marginTop: hp('4%'),
        borderColor: 20,
        overflow: "hidden",
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: wp('5%'),

    },
    textloan: {
        textAlign: 'left',
        color: '#ffffff',
        fontFamily: "AvenirNextLTPro",
        fontWeight: "normal",
        fontStyle: "normal",
        fontSize: 12,
        marginLeft: wp('4.5%'),
        marginTop: hp('1%'),
        letterSpacing: 0,
    },
    textbold: {
        textAlign: 'left',
        color: '#ffffff',
        fontFamily: "AvenirNextLTPro",
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0,
        fontSize: 14,
        marginLeft: wp('4.5%'),
        marginTop: hp('1%')
    }
})

const mapStateToProps = (state) => {
    const { LoanReducer } = state;
    return {
        ...LoanReducer,
    };
};

const mapActionToProps = () => ({
    navigate,
    ...action,
});
export default connect(mapStateToProps, mapActionToProps())(withWebConsole(LoanProduct));
// const mapActionStateToProps = () => {
//     return {
//         navigate,
//         ...action
//     }
// }
// export default connect(null, mapActionStateToProps())(LoanProduct);
