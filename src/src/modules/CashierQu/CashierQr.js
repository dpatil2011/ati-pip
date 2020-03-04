import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { AtiQRCodeGenerator } from 'ati-qr-code';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { AtiText, AtiCard, AtiCardItem, AtiRow } from 'ati-ui-elements';
import { connect } from 'react-redux';
import * as action from '../../common/components/popup/store/popup-action';
import * as act from '../pre-login/store/pre-login-action'
import navigate from '../../common/navigation/action';
import { withWebConsole } from 'ati-web-console-connector';
import * as homeAction from '../home/store/HomeAction';

class CashierQr extends Component {
  state = {
    text: "http://facebook.github.io/react-native/",
    accountNo: this.props.userData.data.accountNo,
    name: this.props.userData.data.displayName,
    // {this.props.userData.data.displayName} - {this.state.data.accountNo}
    //   acc: this.props.userData.data.accountNo

  };


  nav=(e)=>{
    //this.props.setQamount(this.state.inputValue)
    this.props.navigate(e)
}
  render() {
    const c = {name:this.state.name,account:this.state.accountNo}
    var data = JSON.stringify(c)
    return (
      <View style={{ backgroundColor: '#fafafa', height: heightPercentageToDP('100%'), alignItems:'center' }}>
        <AtiText style={styles.t}>Ask the customer to scan the QR code.</AtiText>
        <View style={{alignItems:'center', marginTop:heightPercentageToDP('2%')}}>       
          <AtiQRCodeGenerator
            value={data}
            size={250}
            bgColor='black'
            fgColor='#fafafa' />
            </View>
        <AtiText style={styles.name}>Bill ID: 12A9122Q111</AtiText>
        <View style={{padding:widthPercentageToDP('5%'), backgroundColor:'#ffffff', height:heightPercentageToDP('40%'), elevation:10}}>
            <AtiText style={{marginTop:heightPercentageToDP('-1.5%'), marginBottom:heightPercentageToDP('1.5%'), alignSelf:'center', fontFamily: "AvenirNextLTPro", fontSize: 14, color: "#1e1e1e"}}>Zone's Cafe</AtiText>
    <AtiText style={{width:widthPercentageToDP('90%'), backgroundColor:'#fafafa', textAlign:'center', paddingVertical:heightPercentageToDP('2%'), marginBottom:heightPercentageToDP('1.5%'), borderRadius:widthPercentageToDP('1.5%'), fontFamily: "AvenirNextLTPro", fontSize: 24, fontWeight: "bold", color: "#000000"}}>Rp {this.props.Cashieramount}</AtiText>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <AtiText style={styles.ref}>Bill 3921</AtiText>
            <AtiText style={styles.ref}>20 Agu 2018</AtiText>
            </View>
            <TouchableOpacity style={{width:widthPercentageToDP('80%'), backgroundColor:"#a92930", height:heightPercentageToDP("7.8%"), marginTop:heightPercentageToDP('3%'), paddingTop:heightPercentageToDP('2%'), borderRadius:widthPercentageToDP('8%'), alignSelf:'center'}} onPress={this.nav.bind(this, 'HomeScreen')}><AtiText style={{color:'white', alignSelf:'center', fontFamily: "AvenirNextLTPro", fontSize: 15, fontWeight: "500",}}>Check Payment Status</AtiText></TouchableOpacity>
        </View>
      </View>

    )
  }
}


const mapStateToProps = (state) => {
  const { home, login } = state;
  return {
    ...home,
    ...login
  };
};
const mapActionToProps = () => ({
navigate,
...action,
...homeAction,
...act
// ...authentication,
});
export default connect(mapStateToProps, mapActionToProps)(withWebConsole(CashierQr));

const styles = StyleSheet.create({
  t: {
    width: widthPercentageToDP('45%'),
    marginTop: heightPercentageToDP('3%'),
    textAlign:'center',
    alignSelf:'center',
    fontFamily: "AvenirNextLTPro",
    fontSize: 16,
    fontWeight: "normal",
    fontStyle: "normal",
  },
  
  name: {
    marginTop: heightPercentageToDP('1%'),
    marginBottom:heightPercentageToDP('3%'),
    fontFamily: "AvenirNextLTPro",
    fontSize: 16,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 22,
    letterSpacing: 0,
    textAlign: "center",
    color: "#4a4a4a"

  },
    ref : {
    fontFamily: "AvenirNextLTPro",
    fontSize: 12,
    color: "#434343"
  }

});