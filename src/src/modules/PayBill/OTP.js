import React, { Component } from 'react';
import { Content } from 'native-base';
import {
    AtiButton,
    AtiDatePicker,
    AtiRow,
    AtiCol,
    AtiH3,
    AtiText,
    AtiTextInput,
    AtiPicker,
    AtiRadioButton,
    AtiFieldStatusEnum,
    AtiSpinner,
} from 'ati-ui-elements';
import { View, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol,
} from 'react-native-responsive-screen';
import { AtiForm, AtiField } from 'ati-redux-form';
//import navigate from './../../../common/navigation/action';

import axios from 'axios';
import I18n, { Loc } from 'ati-react-native-redux-i18n';
import bgSrc from '../../../assets/img/background/bg.png';






class OTP extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    paybill = () => {
        //window.location.reload();
        this.props.navigate('PayBill');
    }
    render() {
return (
    <ImageBackground style={styles.picture}source={bgSrc}>
    <AtiText style={styles.text}>OTP </AtiText>
</ImageBackground>
);
}
}
const styles = StyleSheet.create({
    logo: {
        width: 70,
        height: 70,
        // marginLeft: wp('4.2%'),
        // marginRight: wp('3.5%'),
       // marginLeft: '44%',
        // width: wp('18.7%'),
        // height: hp('22.6%'),
        // marginLeft: wp('5.9%'),
       // marginRight: wp('75.5%'),
    },
    picture: {
      flex: 1,

      width: null,
      height: null,
      resizeMode: 'cover',
    },
    text: {
        color: '#ffffff',
        fontWeight: 'bold',
        marginLeft: '25%',
        marginTop: '80%',
      },
  });
  const mapStateToProps = state => ({ ...state });
  const mapActionToProps = () => ({
    navigate,
    ...action,
 
});
export default OTP;
