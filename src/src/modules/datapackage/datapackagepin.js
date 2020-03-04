import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import VirtualKeyboard from 'react-native-virtual-keyboard';
import { AtiText, AtiButton, AtiIcon } from 'ati-ui-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';
import axios from 'axios';
import { Left, Right } from 'native-base';
import navigate from './../../common/navigation/action';
import * as action from './../../common/components/popup/store/popup-action';
import { connect } from 'react-redux';
class Datapackagepin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      pin: false,
      icon1: "",
      icon2: "",
      icon3: "",
      icon4: "",
      icon5: "",
      icon6: "",
      inquiry: "",
    }

  }
  changeText(newText) {

    this.setState({
      text: newText
    });
    if (newText.length == 0) {
      this.setState({
        icon1: "#a92930", icon2: "#a92930", icon3: "#a92930", icon4: "#a92930", icon5: "#a92930", icon6: "#a92930"
      })
    }
    if (newText.length == 1) {
      this.setState({
        icon1: "white", icon2: "#a92930", icon3: "#a92930", icon4: "#a92930", icon5: "#a92930", icon6: "#a92930"
      })
    }
    if (newText.length == 2) {
      this.setState({
        icon1: "white", icon2: "white", icon3: "#a92930", icon4: "#a92930", icon5: "#a92930", icon6: "#a92930"
      })
    }
    if (newText.length == 3) {
      this.setState({
        icon1: "white", icon2: "white", icon3: "white", icon4: "#a92930", icon5: "#a92930", icon6: "#a92930"
      })
    }
    if (newText.length == 4) {
      this.setState({
        icon1: "white", icon2: "white", icon3: "white", icon4: "white", icon5: "#a92930", icon6: "#a92930"
      })
    }
    if (newText.length == 5) {
      this.setState({
        icon1: "white", icon2: "white", icon3: "white", icon4: "white", icon5: "white", icon6: "#a92930"
      })
    }
    if (newText.length == 6) {
      var error;
      if (newText == '123456') {
        error = false
      }
      else {
        error = true;
      }
      this.setState({
        icon1: "white", icon2: "white", icon3: "white", icon4: "white", icon5: "white", icon6: "white", pin: error
      })
      if (!error) {
        var billnumber = Math.floor((Math.random() * 10) + 1);
        var product = "100001"
        axios.post('https://prdc-support.anabatic.com:7443/fineract-provider/api/v1/transactions/ppob/inquiry',
          {
            billNumber: billnumber,
            productCode: product
          },
          {
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
              'Fineract-Platform-TenantId': 'default',
            },
            auth: {
              username: 'coin',
              password: 'coin',
            },
          }).then((response) => {

            console.log(JSON.stringify(response.data.data));
            //this.props.setAccountDetail(response.data.savingsAccounts[0]);
            this.setState({
              inquiry: response.data.data,


            }).catch((error) => {

              console.log(error);
              alert(error)
            });

            console.log(this.state.inquiry);
          });

        axios.post('https://prdc-support.anabatic.com:7443/fineract-provider/api/v1/transactions/ppob/payment ',
          {
            fromSavingsAccountNumber: this.props.accountDetail.accountNo,
            transactionAmount: this.props.product.vendorPrice,
            billNumber: this.state.inquiry.billNumber,
            bit61: "41350044160207000702000000000000000096439629011059459643962901105945MEK* *** 000000000 201803 0000000000000000000000000000000000000000000000000000000000000000 00000000000000000000201804 0000000000000000000000000000000000000000000000000000000000000000 00000000000000000000 0000000000000000000000000000000000000000000000000000000000000000 00000000000000000000 0000000000000000000000000000000000000000000000000000000000000000 00000000000000000000000000005000",
            transactionDescription: "Pembayaran ",
            feeAmount: 550,
            isAgent: false,
            pinCode: newText,
            productCode: this.state.inquiry.productCode,
            traxId: this.state.inquiry.traxId
          },
          {
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
              'Fineract-Platform-TenantId': 'default',
            },
            auth: {
              username: 'coin',
              password: 'coin',
            },
          }).then((response) => {

            console.log(JSON.stringify(response.data));
            //this.props.setAccountDetail(response.data.savingsAccounts[0]);
            this.setState({
              inquiry: response.data,


            })
            this.props.setpayment(response)
            this.props.navigate('Receipt')
              .catch((error) => {

                console.log(error);
                alert(error)
              });

            console.log(this.state.inquiry);
          });





      }
    }
  }
  render() {
   // alert(this.props.accountDetail.accountNo)

    return (
      <View style={{ flex: 1, backgroundColor: '#a92930' }}>

        <View style={{ flexDirection: 'row' }}>
          <Left><AtiText style={{ marginLeft: wp('6.4%'), marginTop: wp('7.1%'), }}> <Icon name="arrow-back" size={24} color="white" /></AtiText></Left>
          <Right><AtiText style={styles.forgotPin}> Forgot Pin?</AtiText></Right>
        </View>
        <Text style={styles.head}>Transaction PIN</Text>
        <Text style={styles.title}>Enter your 6-Digit PIN Transaction</Text>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', marginTop: wp('25%'), backgroundColor: '#a92930' }}>
          <View backgroundColor={this.state.icon1} style={{ width: wp('9.3%'), height: hp('5.2%'), marginLeft: wp('2.7%'), borderRadius: wp('50%'), borderColor: 'white', borderWidth: wp('0.6%') }}></View>
          <View backgroundColor={this.state.icon2} style={{ width: wp('9.3%'), height: hp('5.2%'), marginLeft: wp('2.7%'), borderRadius: wp('50%'), borderColor: 'white', borderWidth: wp('0.6%') }}></View>
          <View backgroundColor={this.state.icon3} style={{ width: wp('9.3%'), height: hp('5.2%'), marginLeft: wp('2.7%'), borderRadius: wp('50%'), borderColor: 'white', borderWidth: wp('0.6%') }}></View>
          <View backgroundColor={this.state.icon4} style={{ width: wp('9.3%'), height: hp('5.2%'), marginLeft: wp('2.7%'), borderRadius: wp('50%'), borderColor: 'white', borderWidth: wp('0.6%') }}></View>
          <View backgroundColor={this.state.icon5} style={{ width: wp('9.3%'), height: hp('5.2%'), marginLeft: wp('2.7%'), borderRadius: wp('50%'), borderColor: 'white', borderWidth: wp('0.6%') }}></View>
          <View backgroundColor={this.state.icon6} style={{ width: wp('9.3%'), height: hp('5.2%'), marginLeft: wp('2.7%'), borderRadius: wp('50%'), borderColor: 'white', borderWidth: wp('0.6%') }}></View>
        </View>
        {this.state.pin && <Text style={styles.error}>Invalid pin</Text>}
        <View style={{ marginBottom: wp('15%') }} >
          <VirtualKeyboard color='white' fontWeight='bold' pressMode='string' onPress={(val) => this.changeText(val)} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    width: '100%',
    height: '10%'
  },
  title: {
    fontFamily: "AvenirNextLTPro",
    fontSize: 14,
    fontWeight: "normal",
    marginTop: wp('2.7%'),
    fontStyle: "normal",
    letterSpacing: 0.28,
    textAlign: "center",
    color: "#ffffff"
  },
  error: {
    fontFamily: "AvenirNextLTPro",
    fontSize: 14,
    fontWeight: "normal",
    marginTop: wp('2.7%'),
    fontStyle: "normal",
    letterSpacing: 0.28,
    textAlign: "center",
    color: "yellow"
  },
  head: {
    fontFamily: "AvenirNextLTPro",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: wp('21.9%'),
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#ffffff"
  },
  forgotPin: {
    fontFamily: "AvenirNextLTPro-Demi",
    fontSize: 14,
    marginRight: wp('7.5%'),
    marginTop: wp('7.2%'),
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0.28,
    textAlign: "right",
    color: "#ffffff"
  }
});

const mapActionToProps = () => {
  return {
    navigate,
    ...action
  }
}
const mapStateToProps = (state) => {
  const { dataReducer } = state;
  return {
    ...dataReducer
  }

}

export default connect(mapStateToProps, mapActionToProps())(Datapackagepin);