import React, { Component } from 'react';
import { View, StyleSheet, Text, ImageBackground, Image, ScrollView } from 'react-native';
import { Badge } from 'native-base';
import { AtiText, AtiCardShowcase, AtiCard, AtiCardItem, AtiTextInput, AtiList, AtiListItem, Left, Right, AtiIcon, AtiSpinner } from 'ati-ui-elements';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol,
} from 'react-native-responsive-screen';
import { withWebConsole } from 'ati-web-console-connector';
import { connect } from 'react-redux';

// import bgSrc from './../../../../assets/img/background/accountbg.png';
import bgSrc from './../../../../assets/img/background/accountbg.png';
import * as act from './../../pre-login/store/pre-login-action'

import up from './../../../../assets/img/background/up.png';
import down from './../../../../assets/img/background/down.png';
// import URL from '../../../common/urls/URLS';
import axios from 'axios';
import moment from 'moment';
import { parse } from 'stacktrace-parser';
import Colors from '../../../../assets/styles/colors';
// import AccountDetailU from './AccountDetailU';

class AccountDetail extends Component {
    state = {
        data: [],
        transactions: [],
        summary: [],
        x: true,
        y: true,
        date: {},
        newDate: '',
        var2: 1
        // value: 200.777, // countryOptions: [],
        // provinceOptions: [],
    }

    componentDidMount() {
        //  const URL = 'https://prdc-support.anabatic.com:7443/fineract-provider/api/v1/clients/template/mobile';
        // var savingId= 1170
        var fetchId = "";
        if(this.props.account!=null){
            fetchId=this.props.account;
            // alert(fetchId)
        }else{
            fetchId=this.props.savings;
        }
        // this.props.account=null;
        
        axios.get('https://prdc-support.anabatic.com:7443/fineract-provider/api/v1/savingsaccounts/' + fetchId + '?associations=all', {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Fineract-Platform-TenantId': '000000',
            },
            auth: {
                username: this.props.userData.data.username,
                password: this.props.pass,

            },
        }).then((response) => {
            console.log(response);
            this.setState({
                data: response.data,
                summary: response.data.summary,
                transactions: response.data.transactions,
                date: response.data.transactions.date,
            });
            console.log(this.state.date);
            console.log(this.state.transactions);
        });
    }

    render() {
        if (this.state.transactions.length === 0) {
            return (<View style={{ alignSelf: 'center', marginVertical: hp('30%') }}>
                <AtiSpinner />
            </View>);
        }

        var currencyFormatter = require('currency-formatter');
        return (
            <ScrollView>
                <View style={{ backgroundColor: '#ffffff' }}>
                    <View 
                    // style={{ height: '25%', marginBottom: 7 }}
                    >
                       
                        <ImageBackground style={styles.picture} source={bgSrc}>
                            <AtiText style={styles.bal}>Balance</AtiText>
                            <AtiText style={styles.NA}>Rp {currencyFormatter.format(this.state.data.availableBalance, {
                                code: 'IDR',
                                symbol: '',
                                decimal: '.',
                                thousand: ',',
                                precision: 2,
                            })}</AtiText>
                            <AtiText style={styles.bal1} > {this.props.userData.data.displayName} - {this.state.data.accountNo}</AtiText>
                            <AtiText style={styles.bal2}> {this.state.data.savingsProductName}</AtiText>
                            {/* <AtiText  style={styles.bal1} > {this.state.data.displayName}-</AtiText> */}

                            {this.state.transactions.map((request, index) => {
                                console.log(`currency:${request.currency.decimalPlaces}`);
                            })}

                        </ImageBackground>
                        {/* </View> */}
                        
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 7, marginBottom: 3 }}>
                            <View style={{ flexDirection: 'row', marginRight: 10 }}>
                                <Image style={styles.logoUp} source={up} />
                                <View>
                                    <AtiText style={styles.text}>Income</AtiText>
                                    <AtiText style={styles.text1}>Rp {currencyFormatter.format(this.state.summary.totalDeposits, {
                                        code: 'IDR',
                                        symbol: '',
                                        decimal: '.',
                                        thousand: ',',
                                        precision: 2,
                                    })}</AtiText>
                                </View>

                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Image style={styles.logoUp} source={down} />
                                <View>
                                    <AtiText style={styles.text}>Expense</AtiText>
                                    <AtiText style={styles.text2}>Rp {currencyFormatter.format(this.state.summary.totalWithdrawals, {
                                        code: 'IDR',
                                        symbol: '',
                                        decimal: '.',
                                        thousand: ',',
                                        precision: 2,
                                    })}</AtiText>
                                </View>

                            </View>
                        </View>
                    <View style={{ backgroundColor: '#e6e6e6' }}>
                        <View style={{ borderBottomWidth: 1, borderBottomColor: '#cccccc' }}>

                            <AtiText style={{
                                marginTop: 23, marginBottom: 15.5, marginLeft: 25.5, fontSize: 20, fontWeight: 'bold',
                            }}
                            >Transaction Histrory
                      </AtiText>
                        </View>

                        {

                            this.state.transactions.map(function (x) {
                                // var setDate = new Date((x.date).toString());
                                // alert("set"+x.date)
                                // var setDate = moment(x.date).format('DD-MMM-YYYY');
                                //alert(x.date);
                                // var month = x.date[1];
                                //alert("month"+month);
                                var month = new Array();
                                month[0] = "Jan";
                                month[1] = "Feb";
                                month[2] = "Mar";
                                month[3] = "Apr";
                                month[4] = "May";
                                month[5] = "Jun";
                                month[6] = "Jul";
                                month[7] = "Aug";
                                month[8] = "Sept";
                                month[9] = "Oct";
                                month[10] = "Nov";
                                month[11] = "Dec";


                                if (month < 10) {
                                    month = "0" + month;
                                }
                                let m = moment("'" + month + "'").format("MMM");
                                // let y = moment(setDate).format("YYYY");
                                //let d = moment(setDate).format("DD");

                                // let name = x.coreTransactionCode.description;
                                // alert("newDAte"+m);
                                let name = x.transactionType.value;
                                var sign = "";
                                let a = name.split(' ');
                                let b1, b2, b3, c1, c2, c3;
                                let iconNameNew;

                                if (a.length === 1) {
                                    b1 = a[0];
                                    c1 = b1[0];
                                    iconNameNew = c1;
                                } else if (a.length === 2) {
                                    b1 = a[0];
                                    b2 = a[1];
                                    c1 = b1[0];
                                    c2 = b2[0];
                                    iconNameNew = c1 + c2;
                                } else if (a.length === 3) {
                                    b1 = a[0];
                                    b2 = a[1];
                                    b3 = a[1];
                                    c1 = b1[0];
                                    c2 = b2[0];
                                    c3 = b3[0];
                                    iconNameNew = c1 + c2 + c3;
                                }
                                // let b = a[0];
                                // let c = a[1];
                                // let e = b[0];
                                // let f = c[0];
                                // let iconName = e + f;
                                var colors = {
                                    A: '#79ff4d', B: "#ff00bf", C: "#8a00e6", D: "#1a6600", E: "#80bfff", F: "#e6005c", G: "#cc6699", H: "#ff9933"
                                    , I: "#b30000", J: "#4d3300", K: "#ff99ff", L: "#99ccff", M: "#ffb31a", N: "#99994d", O: "#999966", P: "#cccc00", Q: "#ffff00", R: "#ff9933"
                                    , S: "#ff6666", T: "#006600", U: "#ff99ff", V: "#99ccff", W: "#4747d1", X: "#cc6699", Y: "#999966", Z: "#e6005c"
                                };
                                let iconName = iconNameNew;
                                let iconColor = colors[c1];

                                let withdrawal = x.transactionType.withdrawal;

                                let feeDeduction = x.transactionType.feeDeduction;
                                let overdraftInterest = x.transactionType.overdraftInterest;
                                let withholdTax = x.transactionType.withholdTax;
                                let amountColor = '';
                                if (withdrawal === true || feeDeduction === true || overdraftInterest === true || withholdTax === true) {
                                    amountColor = 'red';
                                    sign = "-";
                                } else {
                                    amountColor = '#006600';
                                    sign = "+";

                                }



                                return (<ScrollView>
                                    <AtiList
                                        style={{ backgroundColor: '#e6e6e6' }}
                                        // dateArray={
                                        //     name=x.id,
                                        //     date=x.data
                                        // }
                                        dataArray={[
                                            {
                                                // name:x.coreTransactionCode.description,
                                                name: x.transactionType.value,
                                                date: x.date,
                                                amount: x.amount,
                                            },

                                        ]}
                                        renderRow={
                                            item =>
                                                (<AtiListItem style={{ backgroundColor: '#e6e6e6', borderBottomWidth: 1, borderBottomColor: '#cccccc' }} >
                                                    <Left>
                                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                            <View style={{ marginRight: 8 }} >
                                                                <Badge style={{ height: 34, width: 32.7, backgroundColor: iconColor, marginTop: 4.3 }}>
                                                                    <Text style={{
                                                                        marginTop: 5, fontWeight: 'bold', fontSize: 13, color: '#ffffff', textAlign: 'center'
                                                                    }}
                                                                    >{iconName.toUpperCase()}
                                                                    </Text>
                                                                </Badge>
                                                            </View>

                                                            <View>


                                                                <AtiText style={{
                                                                    color: '#000000', fontSize: 14, fontWeight: 'bold',forntFamily:'AvenirNextLTPro-Demi'
                                                                }}
                                                                > {item.name}{"\n"}
                                                                <AtiText style={{
                                                                    color: '#000000', fontSize: 14, marginLeft: 5,  marginTop: 2,fontWeight: 'normal',forntFamily:'AvenirNextLTPro-Demi'
                                                                }}>{x.date[2]} {month[x.date[1] - 1]} {x.date[0]}</AtiText>
                                                                </AtiText>
                                                                {/* <AtiText>Hiiiii</AtiText> */}


                                                            </View>



                                                        </View>
                                                    </Left>
                                                    <View>
                                                        <AtiText style={{
                                                            color: amountColor, fontSize: 15, fontWeight: 'bold'
                                                        }}
                                                        > {sign}{currencyFormatter.format(item.amount, {
                                                            code: 'IDR',
                                                            symbol: '',
                                                            decimal: '.',
                                                            thousand: ',',
                                                            precision: 2,
                                                        })}
                                                        </AtiText>
                                                    </View>

                                                </AtiListItem>)
                                        }
                                    />
                                </ScrollView>)

                            })
                        }

                    </View>

                </View>
            </ScrollView>
        );
    }
}
const mapStateToProps = (state) => {
    const { login } = state;
    const { home } = state;
    return {
        ...login,
        ...home
    };
};
const mapActionToProps = () => ({
    ...act
    // ...authentication,
});
export default connect(mapStateToProps, mapActionToProps)(withWebConsole(AccountDetail));
//export default AccountDetail;
const styles = StyleSheet.create({


    picture: {
        // flex:1 , 
        // width: undefined,
        //  height: undefined,
        width: 358,
        height: 160,
        marginLeft: 20,
        marginRight: 17,
        marginTop: 25,
       
    // borderRadius: 20,
    // overflow: "hidden",
    // borderWidth: 2,
    // borderColor: "red"
    },
    text: {

        height: 17,
        marginLeft: 10,
        marginTop: 7,
        // marginBottom:6
    },
    text1: {

        height: 19,
        marginLeft: 10,
        marginTop: 4,
        marginBottom: 20,
        fontWeight: 'bold',
    },
    text2: {

        height: 19,
        marginLeft: 10,
        marginTop: 4,
        marginBottom: 20,
        fontWeight: 'bold',
    },
    bal: {
        // width: wp('91.7%'),
        color: '#ffffff',
        fontSize: hp('2.3%'),
        // height: 20,
        marginLeft: hp('4%'),
        marginBottom: hp('1.2%'),
        marginTop: 22,

    },
    bal1: {
        // width: wp('91.7%'),
        color: '#ffffff',
        fontSize: hp('2%'),
        // height: 20,
        marginLeft: hp('4%'),
        marginBottom: hp('2%'),
        // marginTop: 22,

    },
    bal2: {
        // width: wp('91.7%'),
        color: '#ffffff',
        fontSize: hp('2.3%'),
        // height: 20,
        marginLeft: hp('27%'),
        // marginBottom: hp('1.2%'),
        // marginTop: 22,
        fontWeight: 'bold',

    },


    Rp: {

        color: '#ffffff',
        height: hp('13.8%'),
        width: wp('43.2%'),
        marginLeft: hp('5.6%'),
        marginTop: hp('5.4%'),

    },
    NA: {
        color: '#ffffff',
        fontSize: 20,
        // height: hp('10%'),
        // width:wp('57.4%'),
        marginLeft: hp('3.5%'),
        marginBottom: hp('2%'),
        fontWeight: 'bold'
        // marginTop: hp('5.1%'),
    },
    logoUp: {
        height: 37,
        width: 37,
        marginLeft: 20,
        marginBottom: 7.3,
        marginTop: 10.3,
        marginRight: 10,
        // margin: 10.3,
    },
    logoDown: {
        height: 37,
        width: 37,
    },
});