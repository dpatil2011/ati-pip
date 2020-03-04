import React, { Component } from 'react';
import {
 AtiText, AtiPicker, AtiRow,
    AtiCol, AtiTextInput, AtiButton, AtiSpinner,
} from 'ati-ui-elements';
import { Content } from 'native-base';
import { AtiForm, AtiField } from 'ati-redux-form';
import axios from 'axios';
import * as action from '../ElectricityToken/Store/ElectricityToken-action';

import { withWebConsole } from 'ati-web-console-connector';
import I18n, { Loc } from 'ati-react-native-redux-i18n';
import Icon from 'react-native-vector-icons/AntDesign';


// import bgSrc from './../../../assets/img/background/bg.png';
 import { connect } from 'react-redux';
// import * as action from './../../common/components/popup/store/popup-action';
// import homeAction from './store/HomeAction';
// import { withWebConsole } from 'ati-web-console-connector';

import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
//  import Paybill from './Component/PayBill'

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol,
} from 'react-native-responsive-screen';

// import navigate from '../../common/navigation/action';
import navigate from '../../common/navigation/action';

// import im1 from './../../../assets/img/icon/group_1371.png';
// import im2 from './../../../assets/img/icon/group_1372.png';
// import im3 from './../../../assets/img/icon/group_1373.png';
// import PayBill from './../home/Components/payBill';
// import Agent from './Components/Agent';


class ElectricityToken extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textColor: '#ffffff',
            boxColor: '#a92930',
            textColor2: '#000000',
            boxColor2: '#ffffff',
            textColor3: '#000000',
            boxColor3: '#ffffff',
            textColor4: '#000000',
            boxColor4: '#ffffff',
            textColor5: '#000000',
            boxColor5: '#ffffff',
            textColor6: '#000000',
            boxColor6: '#ffffff',
            textColor7: '#000000',
            boxColor7: '#ffffff',
            textColor8: '#000000',
            boxColor8: '#ffffff',
            textColor9: '#000000',
            boxColor9: '#ffffff',
            borderWidth: 0,
            borderWidth2: 1.2,
            borderWidth3: 1.2,
            borderWidth4: 1.2,
            borderWidth5: 1.2,
            borderWidth6: 1.2,
            borderWidth7: 1.2,
            borderWidth8: 1.2,
            borderWidth9: 1.2,
            savingsAccounts: [],
            customerId: '',
            amount: '',
        };
   //    this.setValues = this.setValues.bind(this);
    }

    componentDidMount() {
        if (this.props.accountDetail == null) {
          { this.props.setNominalTransfer('20000'); }
        const URL = 'https://prdc-support.anabatic.com:7443/fineract-provider/api/v1/clients/131/accounts';
        // axios.get('https://prdc-support.anabatic.com:7443/fineract-provider/api/v1/savingsaccounts/1179?associations=all', {
      //  console.log(this.props.userData.data);
        axios.get(URL, {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Fineract-Platform-TenantId': '000000',
          },
          auth: {
            username: 'user84',
            password: 'coin',
          },
        }).then((response) => {
          console.log(`hi${JSON.stringify(response.data.savingsAccounts[0].id)}`);
          this.props.setAccountDetail(response.data.savingsAccounts[0]);
          this.setState({
            savingsAccounts: response.data.savingsAccounts[0],
          });

          console.log(this.state.savingsAccounts);
         });
        } else {
           { this.props.setNominalTransfer('20000'); }
           this.setState({
            savingsAccounts: this.props.accountDetail,
        });
        }
      }

    myAccount = () => {
        this.props.navigate('AccountList');
    }
    renderSubmit = () => {

    }


    selectAmount = (e) => {
        const a = e.split(' ');
        const b = a[0];
        const c = a[1];
        if (a[0] === '20000') {
          { this.props.setNominalTransfer('20000'); }
            this.setState({
                boxColor: a[1],
                textColor: '#ffffff',
                textColor2: '#000000',
                boxColor2: '#ffffff',
                textColor3: '#000000',
                boxColor3: '#ffffff',
                textColor4: '#000000',
                boxColor4: '#ffffff',
                textColor5: '#000000',
                boxColor5: '#ffffff',
                textColor6: '#000000',
                boxColor6: '#ffffff',
                textColor7: '#000000',
                boxColor7: '#ffffff',
                textColor8: '#000000',
                boxColor8: '#ffffff',
                textColor9: '#000000',
                boxColor9: '#ffffff',
                borderWidth: 0,
                borderWidth2: 1.2,
                borderWidth3: 1.2,
                borderWidth4: 1.2,
                borderWidth5: 1.2,
                borderWidth6: 1.2,
                borderWidth7: 1.2,
                borderWidth8: 1.2,
                borderWidth9: 1.2,
            });
        } else if (a[0] === '50000') {
          { this.props.setNominalTransfer('50000'); }
            this.setState({
                boxColor2: a[1],
                textColor2: '#ffffff',
                textColor: '#000000',
                boxColor: '#ffffff',
                textColor3: '#000000',
                boxColor3: '#ffffff',
                textColor4: '#000000',
                boxColor4: '#ffffff',
                textColor5: '#000000',
                boxColor5: '#ffffff',
                textColor6: '#000000',
                boxColor6: '#ffffff',
                textColor7: '#000000',
                boxColor7: '#ffffff',
                textColor8: '#000000',
                boxColor8: '#ffffff',
                textColor9: '#000000',
                boxColor9: '#ffffff',
                borderWidth: 1.2,
                borderWidth2: 0,
                borderWidth3: 1.2,
                borderWidth4: 1.2,
                borderWidth5: 1.2,
                borderWidth6: 1.2,
                borderWidth7: 1.2,
                borderWidth8: 1.2,
                borderWidth9: 1.2,
            });
        } else if (a[0] === '100000') {
          { this.props.setNominalTransfer('100000'); }
            this.setState({
               boxColor3: a[1],
               textColor3: '#ffffff',
               textColor2: '#000000',
               boxColor2: '#ffffff',
               textColor: '#000000',
               boxColor: '#ffffff',
               textColor5: '#000000',
               boxColor5: '#ffffff',
               textColor6: '#000000',
               boxColor6: '#ffffff',
               textColor4: '#000000',
               boxColor4: '#ffffff',
               textColor7: '#000000',
               boxColor7: '#ffffff',
               textColor8: '#000000',
               boxColor8: '#ffffff',
               textColor9: '#000000',
               boxColor9: '#ffffff',
               borderWidth: 1.2,
               borderWidth2: 1.2,
               borderWidth3: 0,
               borderWidth4: 1.2,
               borderWidth5: 1.2,
               borderWidth6: 1.2,
               borderWidth7: 1.2,
               borderWidth8: 1.2,
               borderWidth9: 1.2,
            });
        } else if (a[0] === '200000') {
          { this.props.setNominalTransfer('200000'); }

            this.setState({
                boxColor4: a[1],
                textColor4: '#ffffff',
                textColor: '#000000',
                boxColor: '#ffffff',
                textColor2: '#000000',
                boxColor2: '#ffffff',
                textColor3: '#000000',
                boxColor3: '#ffffff',
                textColor5: '#000000',
                boxColor5: '#ffffff',
                textColor6: '#000000',
                boxColor6: '#ffffff',
                textColor7: '#000000',
                boxColor7: '#ffffff',
                textColor8: '#000000',
                boxColor8: '#ffffff',
                textColor9: '#000000',
                boxColor9: '#ffffff',
                borderWidth: 1.2,
                borderWidth2: 1.2,
                borderWidth3: 1.2,
                borderWidth4: 0,
                borderWidth5: 1.2,
                borderWidth6: 1.2,
                borderWidth7: 1.2,
                borderWidth8: 1.2,
                borderWidth9: 1.2,
            });
        } else if (a[0] === '500000') {
          { this.props.setNominalTransfer('500000'); }

            this.setState({
                boxColor5: a[1],
                textColor5: '#ffffff',
                textColor: '#000000',
                boxColor: '#ffffff',
                textColor2: '#000000',
                boxColor2: '#ffffff',
                textColor3: '#000000',
                boxColor3: '#ffffff',
                textColor4: '#000000',
                boxColor4: '#ffffff',
                textColor6: '#000000',
                boxColor6: '#ffffff',
                textColor7: '#000000',
                boxColor7: '#ffffff',
                textColor8: '#000000',
                boxColor8: '#ffffff',
                textColor9: '#000000',
                boxColor9: '#ffffff',
                borderWidth: 1.2,
                borderWidth2: 1.2,
                borderWidth3: 1.2,
                borderWidth4: 1.2,
                borderWidth5: 0,
                borderWidth6: 1.2,
                borderWidth7: 1.2,
                borderWidth8: 1.2,
                borderWidth9: 1.2,
            });
        } else if (a[0] === '1000000') {
          { this.props.setNominalTransfer('1000000'); }

            this.setState({
                boxColor6: a[1],
                textColor6: '#ffffff',
                textColor: '#000000',
                boxColor: '#ffffff',
                textColor2: '#000000',
                boxColor2: '#ffffff',
                textColor3: '#000000',
                boxColor3: '#ffffff',
                textColor5: '#000000',
                boxColor5: '#ffffff',
                textColor4: '#000000',
                boxColor4: '#ffffff',
                textColor7: '#000000',
                boxColor7: '#ffffff',
                textColor8: '#000000',
                boxColor8: '#ffffff',
                textColor9: '#000000',
                boxColor9: '#ffffff',
                borderWidth: 1.2,
                borderWidth2: 1.2,
                borderWidth3: 1.2,
                borderWidth4: 1.2,
                borderWidth5: 1.2,
                borderWidth6: 0,
                borderWidth7: 1.2,
                borderWidth8: 1.2,
                borderWidth9: 1.2,
            });
        } else if (a[0] === '5000000') {
          { this.props.setNominalTransfer('5000000'); }

            this.setState({
                boxColor7: a[1],
                textColor7: '#ffffff',
                textColor: '#000000',
                boxColor: '#ffffff',
                textColor2: '#000000',
                boxColor2: '#ffffff',
                textColor3: '#000000',
                boxColor3: '#ffffff',
                textColor5: '#000000',
                boxColor5: '#ffffff',
                textColor4: '#000000',
                boxColor4: '#ffffff',
                textColor6: '#000000',
                boxColor6: '#ffffff',
                textColor8: '#000000',
                boxColor8: '#ffffff',
                textColor9: '#000000',
                boxColor9: '#ffffff',
                borderWidth: 1.2,
                borderWidth2: 1.2,
                borderWidth3: 1.2,
                borderWidth4: 1.2,
                borderWidth5: 1.2,
                borderWidth6: 1.2,
                borderWidth7: 0,
                borderWidth8: 1.2,
                borderWidth9: 1.2,
            });
        } else if (a[0] === '10000000') {
          { this.props.setNominalTransfer('10000000'); }

            this.setState({
                boxColor8: a[1],
                textColor8: '#ffffff',
                textColor: '#000000',
                boxColor: '#ffffff',
                textColor2: '#000000',
                boxColor2: '#ffffff',
                textColor3: '#000000',
                boxColor3: '#ffffff',
                textColor5: '#000000',
                boxColor5: '#ffffff',
                textColor4: '#000000',
                boxColor4: '#ffffff',
                textColor7: '#000000',
                boxColor7: '#ffffff',
                textColor6: '#000000',
                boxColor6: '#ffffff',
                textColor9: '#000000',
                boxColor9: '#ffffff',
                borderWidth: 1.2,
                borderWidth2: 1.2,
                borderWidth3: 1.2,
                borderWidth4: 1.2,
                borderWidth5: 1.2,
                borderWidth6: 1.2,
                borderWidth7: 1.2,
                borderWidth8: 0,
                borderWidth9: 1.2,
            });
        } else if (a[0] === '50000000') {
          { this.props.setNominalTransfer('50000000'); }

            this.setState({
                boxColor9: a[1],
                textColor9: '#ffffff',
                textColor: '#000000',
                boxColor: '#ffffff',
                textColor2: '#000000',
                boxColor2: '#ffffff',
                textColor3: '#000000',
                boxColor3: '#ffffff',
                textColor5: '#000000',
                boxColor5: '#ffffff',
                textColor4: '#000000',
                boxColor4: '#ffffff',
                textColor7: '#000000',
                boxColor7: '#ffffff',
                textColor8: '#000000',
                boxColor8: '#ffffff',
                textColor6: '#000000',
                boxColor6: '#ffffff',
                borderWidth: 1.2,
                borderWidth2: 1.2,
                borderWidth3: 1.2,
                borderWidth4: 1.2,
                borderWidth5: 1.2,
                borderWidth6: 1.2,
                borderWidth7: 1.2,
                borderWidth8: 1.2,
                borderWidth9: 0,
            });
        } else {
          { this.props.setNominalTransfer('20000'); }
        }
    }
  onSubmit = () => {
    if (this.props.nominalTransfer === '') {
          { this.props.setNominalTransfer('20000'); }
          this.props.navigate('ElectricityDatapackege');
    } else {
    this.props.navigate('ElectricityDatapackege');
    }
  }

  render() {
      if (this.state.savingsAccounts.accountNo == null) {
        return (<View style={{ alignSelf: 'center', marginVertical: hp('30%') }}>
        <AtiSpinner />
                </View>);
      }
    const currencyFormatter = require('currency-formatter');
    const {
        formID,
        onNext,
    } = this.props;

    return (
       <Content style={{ backgroundColor: '#f8f6f0' }}>
            <AtiForm
                    formId={formID}
                    destroyOnUnmount={false}
                    forceUnregisterOnUnmount
                    keepDirtyOnReinitialize
                    onSubmit={values => onNext(values)}
                    submitComponent={returnOnSubmit => this.renderSubmit(returnOnSubmit)}
            >
               <View>
                 <AtiRow>
                     <AtiCol>
                     <View style={{ flexDirection: 'row' }}>
                     <Loc
                                        style={styles.text}
                                        locKey="label.PayFromAccount"
                     /><AtiText />
                     </View>
                     <View style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingLeft: wp('4.8%'),
                                marginLeft: wp('6.9%'),
                                marginRight: wp('6.9%'),
                                marginTop: hp('1.9%'),
                                height: hp('7.5%'),
                                width: wp('86.1%'),
                                borderRadius: 10,
                                backgroundColor: '#ffffff',
                                borderStyle: 'solid',
                                borderWidth: 1,
                                borderColor: '#d6d6d6',

                            }}
                     >
                                <TouchableOpacity onPress={this.myAccount.bind()}>
                                   <View style={{ flexDirection: 'row' }}>

                                    <AtiText
                                    style={{
                                      marginRight: wp('35%'),
                                      marginTop: hp('1%'),
                                      fontFamily: 'AvenirNextLTPro',
                                      fontSize: 14,
                                      fontWeight: 'bold',
                                      fontStyle: 'normal',
                                      lineHeight: 20,
                                      letterSpacing: 0.28,
                                      textAlign: 'left',
                                      color: '#000000',
                                       // paddingBottom: '10%',
                                    }}
                                    > {this.props.accountDetail.shortProductName} {this.props.accountDetail.accountNo}
                                    </AtiText>
                                    <Icon
                                        name="right"
                                        style={{
                                            height: 24,
                                            width: 24,
                                            resizeMode: 'stretch',
                                            alignItems: 'center',
                                            marginTop: 12,
                                            color: '#78849e',
                                        }}
                                    />
                                   </View>
                                </TouchableOpacity>

                     </View>
                     </AtiCol>
                 </AtiRow>
                 <AtiText
                 style={{
                    marginTop: hp('2.2%'),
                    marginRight: wp('40.5%'),
                    marginLeft: wp('7.5%'),
                    fontFamily: 'AvenirNextLTPro',
            fontSize: 12,
            fontWeight: 'normal',
            fontStyle: 'normal',
            lineHeight: 16,
            letterSpacing: 0.24,
            textAlign: 'left',
            color: '#008211',
                 }}
                 >
              Available balance Rp {currencyFormatter.format(this.props.accountDetail.accountBalance, {
                code: 'IDR',
                symbol: '',
                decimal: '.',
                thousand: ',',
                precision: 2,
              })}
                 </AtiText>
                 <AtiRow>
                     <AtiCol>
                     <View style={{ flexDirection: 'row' }}>
                     <Loc
                                        style={styles.text1}
                                        locKey="label.CustomerIdNumber"
                     /><AtiText />
                     </View>


               <AtiTextInput
                                    textStyle={styles.input}
                                    type="text"
                                    id="payFromAccount"
                                    keyboardType="numeric"
                                    placeholder="1099xxxxxxx"
                                    events={{

                                        onChangeText: (e) => {
                                          //  x2 = e;

                                              { this.props.setCustomerId(e); }
                                            this.setState({
                                              customerId: e,
                                            });
                                        },
                                        // onBlur: () => {
                                        //     this.validateInputs();
                                        // },
                                    }}
               />
                     </AtiCol>
                 </AtiRow>
                 <AtiRow>
                     <AtiCol>
                     <View style={{ flexDirection: 'row' }}>
                     <Loc
                                        style={styles.text1}
                                        locKey="label.ChooseNominalTopUp"
                     /><AtiText />
                     </View>
                     </AtiCol>
                 </AtiRow>
                 <View style={{ flexDirection: 'row' }}>
                 <TouchableOpacity onPress={this.selectAmount.bind(this, '20000 #a92930')}>
                     <View style={{
                         borderRadius: 8,
                         backgroundColor: this.state.boxColor,
                         height: hp('7.3%'),
                         width: wp('24.6%'),
                         marginTop: hp('2%'),
                         marginLeft: wp('7.8%'),
                         marginRight: wp('5.2%'),
                         borderStyle: 'solid',
                        borderWidth: this.state.borderWidth,
                         borderColor: '#929292',
                          }}
                     >
                     <AtiText style={{
fontFamily: 'AvenirNextLTPro',
  fontSize: 14,
  fontWeight: 'bold',
  fontStyle: 'normal',
  lineHeight: 20,
  letterSpacing: 0,
  alignSelf: 'center',
  marginTop: hp('2%'),
  color: this.state.textColor,
}}
                     > 20,000
                     </AtiText>
                     </View>
                 </TouchableOpacity>
                 <TouchableOpacity onPress={this.selectAmount.bind(this, '50000 #a92930')}>
                     <View style={{
                         borderRadius: 8,
                         backgroundColor: this.state.boxColor2,
                         height: hp('7.3%'),
                         width: wp('24.6%'),
                         marginTop: hp('2%'),
                         borderStyle: 'solid',
                        borderWidth: this.state.borderWidth2,
                         borderColor: '#929292',
                          }}
                     >
                     <AtiText style={{
fontFamily: 'AvenirNextLTPro',
  fontSize: 14,
  fontWeight: 'bold',
  fontStyle: 'normal',
  lineHeight: 20,
  letterSpacing: 0,
  alignSelf: 'center',
  marginTop: hp('2%'),
  color: this.state.textColor2,
}}
                     > 50,000
                     </AtiText>
                     </View>
                 </TouchableOpacity>
                 <TouchableOpacity onPress={this.selectAmount.bind(this, '100000 #a92930')}>
                     <View style={{
                         borderRadius: 8,
                         backgroundColor: this.state.boxColor3,
                         height: hp('7.3%'),
                         width: wp('24.6%'),
                         marginTop: hp('2%'),
                         marginLeft: wp('5.2%'),
                         borderStyle: 'solid',
                        borderWidth: this.state.borderWidth3,
                         borderColor: '#929292',
                          }}
                     >
                     <AtiText style={{
fontFamily: 'AvenirNextLTPro',
  fontSize: 14,
  fontWeight: 'bold',
  fontStyle: 'normal',
  lineHeight: 20,
  letterSpacing: 0,
  alignSelf: 'center',
  marginTop: hp('2%'),
  color: this.state.textColor3,
}}
                     > 100,000
                     </AtiText>
                     </View>
                 </TouchableOpacity>
                 </View>
                 <View style={{ flexDirection: 'row' }}>
                 <TouchableOpacity onPress={this.selectAmount.bind(this, '200000 #a92930')}>
                     <View style={{
                         borderRadius: 8,
                         backgroundColor: this.state.boxColor4,
                         height: hp('7.3%'),
                         width: wp('24.6%'),
                         marginTop: hp('2%'),
                         marginLeft: wp('7.8%'),
                         marginRight: wp('5.2%'),
                         borderStyle: 'solid',
                        borderWidth: this.state.borderWidth4,
                         borderColor: '#929292',
                          }}
                     >
                     <AtiText style={{
fontFamily: 'AvenirNextLTPro',
  fontSize: 14,
  fontWeight: 'bold',
  fontStyle: 'normal',
  lineHeight: 20,
  letterSpacing: 0,
  alignSelf: 'center',
  marginTop: hp('2%'),
  color: this.state.textColor4,
}}
                     > 200,000
                     </AtiText>
                     </View>
                 </TouchableOpacity>
                 <TouchableOpacity onPress={this.selectAmount.bind(this, '500000 #a92930')}>
                     <View style={{
                         borderRadius: 8,
                         backgroundColor: this.state.boxColor5,
                         height: hp('7.3%'),
                         width: wp('24.6%'),
                         marginTop: hp('2%'),
                         borderStyle: 'solid',
                        borderWidth: this.state.borderWidth5,
                         borderColor: '#929292',
                          }}
                     >
                     <AtiText style={{
fontFamily: 'AvenirNextLTPro',
  fontSize: 14,
  fontWeight: 'bold',
  fontStyle: 'normal',
  lineHeight: 20,
  letterSpacing: 0,
  alignSelf: 'center',
  marginTop: hp('2%'),
  color: this.state.textColor5,
}}
                     > 500,000
                     </AtiText>
                     </View>
                 </TouchableOpacity>
                 <TouchableOpacity onPress={this.selectAmount.bind(this, '1000000 #a92930')}>
                     <View style={{
                         borderRadius: 8,
                         backgroundColor: this.state.boxColor6,
                         height: hp('7.3%'),
                         width: wp('24.6%'),
                         marginTop: hp('2%'),
                         marginLeft: wp('5.2%'),
                         borderStyle: 'solid',
                        borderWidth: this.state.borderWidth6,
                         borderColor: '#929292',
                          }}
                     >
                     <AtiText style={{
fontFamily: 'AvenirNextLTPro',
  fontSize: 14,
  fontWeight: 'bold',
  fontStyle: 'normal',
  lineHeight: 20,
  letterSpacing: 0,
  alignSelf: 'center',
  marginTop: hp('2%'),
  color: this.state.textColor6,
}}
                     > 1,000,000
                     </AtiText>
                     </View>
                 </TouchableOpacity>
                 </View>
                 <View style={{ flexDirection: 'row' }}>
                 <TouchableOpacity onPress={this.selectAmount.bind(this, '5000000 #a92930')}>
                     <View style={{
                         borderRadius: 8,
                         backgroundColor: this.state.boxColor7,
                         height: hp('7.3%'),
                         width: wp('24.6%'),
                         marginTop: hp('2%'),
                         marginLeft: wp('7.8%'),
                         marginRight: wp('5.2%'),
                         borderStyle: 'solid',
                        borderWidth: this.state.borderWidth7,
                         borderColor: '#929292',
                          }}
                     >
                     <AtiText style={{
fontFamily: 'AvenirNextLTPro',
  fontSize: 14,
  fontWeight: 'bold',
  fontStyle: 'normal',
  lineHeight: 20,
  letterSpacing: 0,
  alignSelf: 'center',
  marginTop: hp('2%'),
  color: this.state.textColor7,
}}
                     > 5,000,000
                     </AtiText>
                     </View>
                 </TouchableOpacity>
                 <TouchableOpacity onPress={this.selectAmount.bind(this, '10000000 #a92930')}>
                     <View style={{
                         borderRadius: 8,
                         backgroundColor: this.state.boxColor8,
                         height: hp('7.3%'),
                         width: wp('24.6%'),
                         marginTop: hp('2%'),
                         borderStyle: 'solid',
                        borderWidth: this.state.borderWidth8,
                         borderColor: '#929292',
                          }}
                     >
                     <AtiText style={{
fontFamily: 'AvenirNextLTPro',
  fontSize: 14,
  fontWeight: 'bold',
  fontStyle: 'normal',
  lineHeight: 20,
  letterSpacing: 0,
  alignSelf: 'center',
  marginTop: hp('2%'),
  color: this.state.textColor8,
}}
                     > 10,000,000
                     </AtiText>
                     </View>
                 </TouchableOpacity>
                 <TouchableOpacity onPress={this.selectAmount.bind(this, '50000000 #a92930')}>
                     <View style={{
                         borderRadius: 8,
                         backgroundColor: this.state.boxColor9,
                         height: hp('7.3%'),
                         width: wp('24.6%'),
                         marginTop: hp('2%'),
                         marginLeft: wp('5.2%'),
                         borderStyle: 'solid',
                        borderWidth: this.state.borderWidth9,
                         borderColor: '#929292',
                          }}
                     >
                     <AtiText style={{
fontFamily: 'AvenirNextLTPro',
  fontSize: 14,
  fontWeight: 'bold',
  fontStyle: 'normal',
  lineHeight: 20,
  letterSpacing: 0,
  alignSelf: 'center',
  marginTop: hp('2%'),
  color: this.state.textColor9,
}}
                     > 50,000,000
                     </AtiText>
                     </View>
                 </TouchableOpacity>
                 </View>
                <View>
                    <AtiButton
buttonStyle={{
                                        backgroundColor: '#a92930',
                                        borderRadius: 80,
                                        height: hp('7.5%'),
                                        width: wp('80.2%'),
                                        marginTop: hp('5.1%'),
                                        marginLeft: wp('10.2%'),
                                        marginRight: wp('9.6%'),
                                        marginBottom: hp('3.1%'),
                                        textAlign: 'center',
                                        paddingLeft: wp('32%'),

                    }}
                    onPress={this.onSubmit}
                    textStyle={{ alignSelf: 'center' }}
                    >Next
                    </AtiButton>
                </View>
               </View>
            </AtiForm>
       </Content>
    );
  }
}
const mapStateToProps = (state) => {
    const { ElectricityTokenReducer } = state;
    return {
        ...ElectricityTokenReducer,
    };
};

const mapActionToProps = () => ({
    navigate,
    ...action,
});
export default connect(mapStateToProps, mapActionToProps())(withWebConsole(ElectricityToken));

const styles = StyleSheet.create({

  text: {
    fontWeight: 'normal',
    marginLeft: wp('7.6%'),
    marginTop: hp('4.5%'),
   fontFamily: 'AvenirNextLTPro',
   fontSize: 14,
   fontStyle: 'normal',
   lineHeight: 20,
   letterSpacing: 0.28,
   textAlign: 'left',
   color: '#000000',
  },
  text1: {
    marginTop: hp('3.1%'),
    marginLeft: wp('8%'),
    fontFamily: 'AvenirNextLTPro',
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 20,
    letterSpacing: 0.28,
    textAlign: 'left',
    color: '#000000',
   },
   text2: {
    marginTop: hp('4%'),
    marginLeft: wp('8%'),
    fontFamily: 'AvenirNextLTPro',
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 20,
    letterSpacing: 0.28,
    textAlign: 'left',
    color: '#000000',
   },
  img: {
    height: hp('3.4%'),
    width: wp('6.5%'),
    marginBottom: hp('0.5%'),
  },
  picker: {
    marginLeft: wp('7.2%'),
    marginTop: hp('1.9%'),
    marginRight: wp('6.7%'),
    borderRadius: 10,
    backgroundColor: '#ffffff',
  },
  input: {
    paddingLeft: wp('4.8%'),
    marginLeft: wp('6.9%'),
    marginRight: wp('6.9%'),
    marginTop: hp('1.9%'),
    height: hp('7.5%'),
    width: wp('86.1%'),
    borderRadius: 10,
    backgroundColor: '#ffffff',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#d6d6d6',
  },
});