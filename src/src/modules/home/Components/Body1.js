import React, { Component } from 'react';
import { AtiText, AtiRow, AtiCol, AtiIcon, } from 'ati-ui-elements';
import bgSrc from './../../../../assets/img/background/group_993.png';
import {
  ImageBackground,
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';
import axios from 'axios';
import navigate from './../../../common/navigation/action';
import { withWebConsole } from 'ati-web-console-connector';
import { connect } from 'react-redux';
import * as action from './../../../common/components/popup/store/popup-action';
import * as act from './../../pre-login/store/pre-login-action';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: null,
      savingsId: null,
      data: [],
    }
  }



  componentDidMount() {
    const URL = "https://prdc-support.anabatic.com:7443/fineract-provider/api/v1/clients/" + this.props.userData.data.clientId + "/accounts";
    // axios.get('https://prdc-support.anabatic.com:7443/fineract-provider/api/v1/savingsaccounts/1179?associations=all', {
    console.log(this.props.userData.data)
    axios.get(URL, {
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
      console.log("hi" + JSON.stringify(response.data.savingsAccounts[0].id))
      this.setState({
        savingsId: response.data.savingsAccounts[0].id,
      });
      console.log(this.state.savingsId)
      this.props.setSavings(this.state.savingsId)
      this.call();
    });
  }
  call = () => {
    console.log(this.state.transaction)
    const URL1 = "https://prdc-support.anabatic.com:7443/fineract-provider/api/v1/savingsaccounts/" + this.state.savingsId + "?associations=all";
    axios.get(URL1, {
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
      console.log(response.data);
      console.log("hiiiiii" + response.data.availableBalance)

      this.setState({
        data: response.data,
        account: response.data.accountNo,
        balance: response.data.availableBalance,
        productName: response.data.savingsProductName,
      });
      this.props.setAccountData(this.state.data);
    });
  }
  nav = (e) => {
    
   
    this.props.navigate(e)
  }
  render() {
  this.props.navigate('PlnNumber');
    var currencyFormatter = require('currency-formatter');
    return (
      <View >

        <ImageBackground style={styles.picture} source={bgSrc}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <AtiText style={{ marginLeft: wp('4.3%'), marginTop: hp('1.5%'), fontSize: 14, color: '#ffffff', fontFamily: 'AvenirNextLTPro-Regular' }}>{this.state.account}  <AtiIcon name="play" style={{ color: 'white', fontSize: 10, }} /></AtiText>
            <AtiText style={{ marginTop: hp('1.5%'), marginRight: wp('5.5%'), fontSize: 14, color: '#ffffff', fontFamily: 'AvenirNextLTPro-Regular' }}>{this.state.productName} </AtiText>
          </View >
          <AtiText style={{ marginLeft: wp('4.3%'), marginTop: hp('2.2%'), fontSize: 14, color: '#ffffff', fontFamily: 'AvenirNextLTPro-Regular' }}>Account Balance</AtiText>
          <View style={{ flexDirection: 'row' }}>
            <AtiText style={{ marginLeft: wp('4.3%'), marginTop: hp('2.4%'), fontSize: 14, color: '#ffffff', fontFamily: 'AvenirNextLTPro-Regular' }}>Rp </AtiText><AtiText style={{ fontSize: 20, color: '#ffffff', marginTop: hp('1.5%'), fontFamily: 'AvenirNextLTPro-Regular', letterSpacing: 0.5, fontWeight: 'bold' }}>
              {currencyFormatter.format(this.state.balance, {
                code: 'IDR',
                symbol: '',
                decimal: '.',
                thousand: ',',
                precision: 2,
              })}
            </AtiText>
            <TouchableOpacity style={{ backgroundColor: "white", marginLeft: wp('77%'), marginTop: hp('1.5%'), paddingHorizontal: hp('2%'), paddingVertical: hp('0.5%'), borderRadius: hp('0.5%'), position: 'absolute' }} onPress={this.nav.bind(this, 'AccountDetail')}><AtiText style={{ fontSize: 14, fontFamily: 'AvenirNextLTPro-Medium', fontWeight: 'bold' }}>Details</AtiText></TouchableOpacity>
          </View >
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  picture: {
    width: null,
    height: hp('22%'),
    resizeMode: 'cover',
  },
  inText: {
    fontSize: 14,
    color: '#ffffff',
    fontFamily: 'AvenirNextLTPro-Demi',
  }
});
const mapStateToProps = (state) => {
  const { login } = state;
  return {
    ...login,
  };
};
const mapActionToProps = () => ({
  navigate,
  ...action,
  ...act,
  // ...authentication,
});
export default connect(mapStateToProps, mapActionToProps())(withWebConsole(HomeScreen));