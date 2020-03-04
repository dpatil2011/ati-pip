import React, { Component } from 'react';
import { AtiText, AtiRow, AtiCol, AtiTextInput, AtiButton, AtiTextInputCellPhone } from 'ati-ui-elements';
import { Content } from 'native-base';
import {
    ImageBackground,
    StyleSheet,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';
import Dash from 'react-native-dash'
import navigate from './../../common/navigation/action';
import { withWebConsole } from 'ati-web-console-connector';
import { connect } from 'react-redux';
import * as action from './../../common/components/popup/store/popup-action';
import confirmation from './../../../assets/img/icon/confirmation.png';
import axios from 'axios';
import * as paybillAction from './store/paybills-action';
import URLS from './../../common/urls/URLS';
import moment from 'moment'
class PlnConfirmation extends Component {
    constructor(props){
        super(props);
        this.state={
            ppobInquiry:[]
        }
    }
    componentDidMount(){
        var URL = URLS.ppobInquiry;
        var billNumber=Math.random().toString(10).replace('0.', '');
        //var productCode=this.props.confirmData.code
        var productCode=100001;
        var postData = {billNumber,productCode};
       axios({
        method: 'post',
        url: URL,
        data: postData,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Fineract-Platform-TenantId': this.props.tenantId,
        },
        auth: {
          username: this.props.username,
          password: this.props.pass,
        },
      }).then((response) => {
         this.setState({
             ppobInquiry:response.data.data
         })
      })
        .catch(function (response) {
            alert(response.response.data.defaultUserMessage);
        });
      }
      navi(e){
         
        var payData={
            "fromSavingsAccountNumber": "00112015908",
            "transactionAmount": this.state.ppobInquiry.transactionAmount,
            "billNumber": this.state.ppobInquiry.billNumber,
            "bit61": this.state.ppobInquiry.bit61,
            "transactionDescription": "PLN electricity bill",
            "feeAmount": 65,
            "isAgent":false,
            "productCode": this.state.ppobInquiry.productCode,
            "traxId": this.state.ppobInquiry.traxId,
            "pinCode":""
            
        }
        this.props.setPayData(payData)
        //alert(JSON.stringify(this.props.payData))
        this.props.navigate(e);
    }
    render() {
        var currencyFormatter = require('currency-formatter');
        return (
            <View style={{
                height: hp('100%'),
                width: wp('100%'),
                backgroundColor: "#ffffff",}}>
            <ScrollView style={{height:hp('60%')}}>
            
                <AtiText style={{
         
                    letterSpacing: 0,
                    alignSelf: 'center',
                    color: "#000000",
                    fontFamily: "AvenirNextLTPro",
                    fontSize: 16,
                    fontWeight: "bold",
                    fontStyle: "normal",
                    marginTop: hp('4.7%')

                }}>Electricity Bill Confirmation</AtiText>

                <View style={{
                    flexDirection: "row",
                    marginTop:hp('6%'),
                    justifyContent:'space-between'
                }}>
                    <AtiText
                        style={{
                            width: wp('22%'),
                            height: hp('3.2%'),
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            color: "#000000",
                            marginLeft: wp('6.8%'),
                           
                        }}
                    >Customer ID</AtiText>
                    <AtiText
                        style={{
                            
                            height: hp('3.2%'),
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "bold",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            textAlign: "right",
                            color: "#000000",
                            marginRight: wp('6.8%')                           
                        }}
    >{this.props.accountDetail.productName} - {this.props.accountDetail.accountNo}</AtiText>
                </View>
                <Dash dashColor="#e6e6e6"
                    dashLength={6}
                    dashGap={4}
                    style={{
                        height: 1,
                        marginTop: hp('2%'),
                        marginLeft: wp('6.7%'),
                        marginRight: wp('6.9%'),
                        opacity: 70
                    }} />
                <View style={{
                    flexDirection: "row",
                    marginTop:hp('2.5%')
                }}>
                    <AtiText
                        style={{
                            width: wp('27.2%'),
                            height: hp('3.2%'),
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            color: "#000000",
                            marginLeft: wp('6.8%'),
                            
                        }}
                    >PLN Number</AtiText>
                    <AtiText
                        style={{
                            width: wp('27.2%'),
                            height: hp('3.2%'),
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "bold",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            textAlign: "right",
                            color: "#000000",
                            marginLeft: wp('32%'),
                            
                            marginRight: wp('6.8%')
                        }}
    >{this.props.plnNumber}</AtiText>
                </View>
                <Dash dashColor="#e6e6e6"
                    dashLength={6}
                    dashGap={4}
                    style={{
                        height: 1,
                        marginTop: hp('2%'),
                        marginLeft: wp('6.7%'),
                        marginRight: wp('6.9%'),
                        opacity: 70
                    }} />
                <View style={{
                    flexDirection: "row",
                    marginTop:hp('2.5%')
                }}>
                    <AtiText
                        style={{
                            width: wp('27.2%'),
                            height: hp('3.2%'),
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            color: "#000000",
                            marginLeft: wp('6.8%'),
                           
                        }}
                    >Tarrif / Power</AtiText>
                    <AtiText
                        style={{
                            width: wp('27.2%'),
                            height: hp('3.2%'),
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "bold",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            textAlign: "right",
                            color: "#000000",
                            marginLeft: wp('32%'),
                            
                            marginRight: wp('6.8%')
                        }}
                    >R1M/900</AtiText>
                </View>
                <Dash dashColor="#e6e6e6"
                    dashLength={6}
                    dashGap={4}
                    style={{
                        height: 1,
                        marginTop: hp('2%'),
                        marginLeft: wp('6.7%'),
                        marginRight: wp('6.9%'),
                        
                    }} />
                <View style={{
                    flexDirection: "row",
                    marginTop:hp('2.5%')
                }}>
                    <AtiText
                        style={{
                            width: wp('27.2%'),
                            height: hp('3.2%'),
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            color: "#000000",
                            marginLeft: wp('6.8%'),
                           
                        }}
                    >Bill</AtiText>
                    <AtiText
                        style={{
                            width: wp('27.2%'),
                            height: hp('3.2%'),
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            textAlign: "right",
                            color: "#000000",
                            marginLeft: wp('32%'),
                            
                            marginRight: wp('6.8%')
                        }}
                    >Rp {currencyFormatter.format(this.state.ppobInquiry.billAmount, {
                        code: 'IDR',
                        symbol: '',
                        decimal: '.',
                        thousand: ',',
                        precision: 2,
                    })}</AtiText>
                </View>
                <Dash dashColor="#e6e6e6"
                    dashLength={6}
                    dashGap={4}
                    style={{
                        height: 1,
                        marginTop: hp('2%'),
                        marginLeft: wp('6.7%'),
                        marginRight: wp('6.9%'),
                        
                    }} />
                <View style={{
                    flexDirection: "row",
                    marginTop:hp('2.5%')
                }}>
                    <AtiText
                        style={{
                            width: wp('27.2%'),
                            height: hp('3.2%'),
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            color: "#000000",
                            marginLeft: wp('6.8%'),
                           
                        }}
                    >Fee</AtiText>
                    <AtiText
                        style={{
                            width: wp('27.2%'),
                            height: hp('3.2%'),
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            textAlign: "right",
                            color: "#000000",
                            marginLeft: wp('32%'),
                            
                            marginRight: wp('6.8%')
                        }}
                    >Rp {currencyFormatter.format(this.state.ppobInquiry.feeAmount, {
                        code: 'IDR',
                        symbol: '',
                        decimal: '.',
                        thousand: ',',
                        precision: 2,
                    })}</AtiText>
                </View>
                <Dash dashColor="#e6e6e6"
                    dashLength={6}
                    dashGap={4}
                    style={{
                        height: 1,
                        marginTop: hp('2%'),
                        marginLeft: wp('6.7%'),
                        marginRight: wp('6.9%'),
                        
                    }} />
                <View style={{
                    flexDirection: "row",
                    marginTop:hp('2.5%')
                }}>
                    <AtiText
                        style={{
                            width: wp('27.2%'),
                            height: hp('3.2%'),
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            color: "#000000",
                            marginLeft: wp('6.8%'),
                           
                        }}
                    >Bill Sheet</AtiText>
                    <AtiText
                        style={{
                            width: wp('27.2%'),
                            height: hp('3.2%'),
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            textAlign: "right",
                            color: "#000000",
                            marginLeft: wp('32%'),
                            
                            marginRight: wp('6.8%')
                        }}
                    >1 Month</AtiText>
                </View>
                <Dash dashColor="#e6e6e6"
                    dashLength={6}
                    dashGap={4}
                    style={{
                        height: 1,
                        marginTop: hp('2%'),
                        marginLeft: wp('6.7%'),
                        marginRight: wp('6.9%'),
                        
                    }} />
                <View style={{
                    marginTop: "2.5%",
                    flexDirection: "row", alignSelf: "center"
                }}>
                </View>
                
                <View style={{
                    flexDirection: "row",
                    marginTop:hp('2.5%')
                }}>
                    <AtiText
                        style={{
                            width: wp('27.2%'),
                            height: hp('3.2%'),
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            color: "#000000",
                            marginLeft: wp('6.8%'),
                           
                        }}
                    >Period</AtiText>
                    <AtiText
                        style={{
                            width: wp('27.2%'),
                            height: hp('3.2%'),
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            textAlign: "right",
                            color: "#000000",
                            marginLeft: wp('32%'),
                            
                            marginRight: wp('6.8%')
                        }}
                    >{moment().format('MMMM YYYY')}</AtiText>
                </View>
                <Dash
                        dashColor="#a92930"
                        dashLength={10}
                        dashThickness={3}
                        dashGap={8}
                        style={{
                             marginTop:hp('5%'),
                            width: '100%', height: 1
                        }} />
                    
                <View style={{
                    flexDirection: "row",
                    marginTop:hp('3.4%'),
                    marginBottom:hp('1.4%')
                }}>
                    <AtiText
                        style={{
                            width: wp('27.2%'),
                            height: hp('3.2%'),
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            color: "#000000",
                            marginLeft: wp('6.8%'),
                            marginTop: hp('1.9%'),
                        }}
                    >Total Bill</AtiText>
                    <AtiText
                        style={{
                            width: wp('27.2%'),
                            height: hp('3.2%'),
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 16,
                            fontWeight: "bold",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            textAlign: "right",
                            color: "#a92930",
                            marginLeft: wp('32%'),
                            marginTop: hp('1.9%'),
                            marginRight: wp('6.8%')
                        }}
                    >Rp {currencyFormatter.format(this.state.ppobInquiry.billAmount+this.state.ppobInquiry.feeAmount, {
                        code: 'IDR',
                        symbol: '',
                        decimal: '.',
                        thousand: ',',
                        precision: 2,
                    })}</AtiText>
                </View>
                </ScrollView>
                <View style={{height:hp('40%')}}>
                <Image source={confirmation} style={{ width: wp('100%'), height: hp('2.6%') }} />
                <View style={{
                    alignContent:"flex-end",
                    width: wp('100%'),
                    height: 667,
                    backgroundColor: "#a92930"
                }}>
                    <AtiButton buttonStyle={{
                        width: wp('80.3%'),
                        height: hp('7.8%'),
                        borderRadius: 62,
                        backgroundColor: "#ffffff",
                        marginTop:hp('10%'),
                        marginLeft:wp('12.5%')
                    }}
                    onPress={this.navi.bind(this,'PlnPin')}
                        textStyle={{
                            
                            color: "#a92930",
                            paddingLeft:wp('35%')
                        }}
                    >Pay</AtiButton>
                </View>
                </View>
            </View>
        )
    }
}
const mapStateToProps = (state) => {
    const { paybill  } = state;
    const { login  } = state;
    return {
        ...paybill,
        ...login
    }
}
const mapActionToProps = () => ({
    navigate,
    ...action,
    ...paybillAction
});
export default connect(mapStateToProps, mapActionToProps())(withWebConsole(PlnConfirmation));
