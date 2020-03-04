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
} from 'react-native';
import axios from 'axios';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';
import Dash from 'react-native-dash'
import URLS from './../../common/urls/URLS';
import navigate from './../../common/navigation/action';
import { withWebConsole } from 'ati-web-console-connector';
import { connect } from 'react-redux';
import * as action from './../../common/components/popup/store/popup-action';
import confirmation from './../../../assets/img/icon/confirmation.png';
import * as topupAction from './store/mobile-topup-action'
class TopupConfirmation extends Component {
    constructor(props){
        super(props);
        this.state={
            ppobInquiry:[]
        }
    }
    navi(e){
        //var billNumber=this.state.ppobInquiry.billNumber;
        var payData={
            "fromSavingsAccountNumber": "00112015908",
            "transactionAmount": this.state.ppobInquiry.transactionAmount,
            "billNumber": this.state.ppobInquiry.billNumber,
            "bit61": this.state.ppobInquiry.bit61,
            "transactionDescription": "Mobile Topup",
            "feeAmount": this.state.ppobInquiry.feeAmount,
            "isAgent":false,
            "productCode": this.state.ppobInquiry.productCode,
            "traxId": this.state.ppobInquiry.traxId,
            "pinCode":""
            
        }
        this.props.setPayData(payData)
        //alert(JSON.stringify(this.props.payData))
        this.props.navigate(e);
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
    render() {
        var currencyFormatter = require('currency-formatter');
        return (
            <View style={{
                height: hp('100%'),
                width: wp('100%'),
                backgroundColor: "#ffffff",
            }}>
                <AtiText style={{ 
                    letterSpacing: 0,
                    alignSelf: 'center',
                    color: "#000000",
                    fontFamily: "AvenirNextLTPro",
                    fontSize: 16,
                    fontWeight: "bold",
                    fontStyle: "normal",
                    marginTop: hp('5.7%')
    }}>Purchase Summary</AtiText>

                <View style={{
                    flexDirection: "row",
                    marginTop:hp('6%')
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
                    >Mobile Number</AtiText>
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
    >{this.props.mobileNo}</AtiText>
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
                    >Nominal</AtiText>
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
                    >{currencyFormatter.format(this.props.confirmData.nominal, {
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
                    >Price</AtiText>
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
                    >{currencyFormatter.format(this.props.confirmData.vendorPrice, {
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
                    >Rp {currencyFormatter.format(this.props.confirmData.vendorFee, {
                        code: 'IDR',
                        symbol: '',
                        decimal: '.',
                        thousand: ',',
                        precision: 2,
                    })}</AtiText>
                </View>
                <View style={{
                    marginTop: "26%",
                    flexDirection: "row", alignSelf: "center"
                }}>
                    <Dash
                        dashColor="#a92930"
                        dashLength={10}
                        dashThickness={3}
                        dashGap={8}
                        style={{
                            // marginTop:hp('0.1%'),
                            width: '100%', height: 1
                        }} />
                   
                </View>
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
                    >Rp {currencyFormatter.format(this.props.confirmData.vendorPrice+this.props.confirmData.vendorFee, {
                        code: 'IDR',
                        symbol: '',
                        decimal: '.',
                        thousand: ',',
                        precision: 2,
                    })}</AtiText>
                </View>
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
                        marginTop:hp('8%'),
                        marginLeft:wp('12.5%')
                    }}
                    onPress={this.navi.bind(this,'TopupPin')}
                        textStyle={{
                            
                            color: "#a92930",
                            paddingLeft:wp('35%')
                        }}
                    >Pay</AtiButton>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    dash:{

    }

})
const mapStateToProps = (state) => {
    const { topup } = state;
    const { login } = state;
    return {
        ...topup,
        ...login
    };
};
const mapActionToProps = () => ({
    navigate,
    ...action,
    ...topupAction
    // ...authentication,
});
export default connect(mapStateToProps, mapActionToProps())(withWebConsole(TopupConfirmation));
