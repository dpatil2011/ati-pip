import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native'
import { AtiQRCodeGenerator } from 'ati-qr-code';
import navigate from './../../../common/navigation/action';
import { withWebConsole } from 'ati-web-console-connector';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { AtiText, AtiCard, AtiCardItem, AtiRow } from 'ati-ui-elements';
import { connect } from 'react-redux';
import * as action from './../../../common/components/popup/store/popup-action';
import * as act from './../../pre-login/store/pre-login-action'

class QR1 extends Component {
  state = {
    text: "http://facebook.github.io/react-native/",
    accountNo: this.props.userData.data.accountNo,
    name: this.props.userData.data.displayName,
    // {this.props.userData.data.displayName} - {this.state.data.accountNo}
    //   acc: this.props.userData.data.accountNo

  };



  render() {
    const c = this.state.name + " " + this.state.accountNo
    return (
      <View style={{ backgroundColor: '#fafafa', height: heightPercentageToDP('100%') }}>
        <View >
          <AtiText style={styles.t}>Ask other users to scan your QR to </AtiText>
          <AtiText style={styles.t1}>Recieve payment.</AtiText>
        </View>
        <View style={{ alignItems: "center", marginTop: 60 }}>
          <AtiQRCodeGenerator
            // style={{marginTop:20}}
            value={c}
            size={250}
            bgColor='black'
            fgColor='white' />
        </View>
        <AtiText style={styles.name}>{this.props.userData.data.displayName}</AtiText>
      </View>

    )
  }
}


const mapStateToProps = (state) => {
  const { login } = state;
  return {
    ...login,
  };
};
const mapActionToProps = () => ({
  navigate,
  ...action,
  ...act
  // ...authentication,
});
export default connect(mapStateToProps, mapActionToProps)(withWebConsole(QR1));

const styles = StyleSheet.create({
  t: {
    width: '70%',
    marginTop: '10%',
    marginLeft: '18%'
  },
  t1: {
    width: '70%',
    // marginTop:'2%',
    marginLeft: '33%'
  },
  qr: {
    marginTop: 30,
    marginLeft: 50,
    marginRight: 30,
    padding: 10,
    height: 300
  },
  name: {
    marginTop: 30,
    marginLeft: 180,
    marginRight: 10,

  },
  name1: {
    marginTop: 100,
    marginLeft: 80,


  }
});