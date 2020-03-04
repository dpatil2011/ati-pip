import React, { Component } from 'react';
import { AtiText } from 'ati-ui-elements';
import submissioncard from './../../../assets/img/icon/submissioncard.png';
import navigate from './../../common/navigation/action';
import * as action from './../../common/components/popup/store/popup-action';
import { connect } from 'react-redux';
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';
import { View } from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';

class Submission extends Component {

  navi = (e) => {
    this.props.navigate('SubmissionReceipt');
}
  render() {
    return (
      <ImageBackground style={styles.card} source={submissioncard}>
        <AtiText style={styles.businessLoans}>Business Loans</AtiText>
        <AtiText style={styles.amount}>Rp 10,000,000</AtiText>
        <View style={styles.view}>
          <AtiText style={styles.loanId}>Loan ID 166265</AtiText>
          <AtiText style={styles.tenor}>10 Month(s)</AtiText>
        </View>
        <AtiText style={styles.status}>Status</AtiText>
        <View style={styles.view}>
          <AtiText style={styles.review}>In the Review Process</AtiText>
          <TouchableOpacity style={styles.detail} onPress={this.navi}>
          <AtiText >Details</AtiText>
          </TouchableOpacity>
          <Icon name="right" style={styles.icon} />
        </View>

      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  card: {
    marginTop: hp('3.8%'),
    width: wp('90.7%'),
    height: hp('31%'),
    resizeMode: 'cover',
    alignSelf: "center"
  },
  text: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: "center",
    marginTop: '20%',
    alignContent: "center"
  },
  view: {
    flexDirection: "row"
  },
  businessLoans: {
    fontFamily: "AvenirNextLTPro",
    fontSize: 14,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 16,
    letterSpacing: 0,
    textAlign: "left",
    color: "#ffffff",
    marginLeft: wp('6%'),
    marginTop: hp('3.7%')
  },
  amount: {
    fontFamily: "AvenirNextLTPro",
    fontSize: 26,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 31,
    letterSpacing: 0,
    textAlign: "left",
    color: "#ffffff",
    marginLeft: wp('6%'),
    marginTop: hp('3.7%')
  },
  loanId: {
    fontFamily: "AvenirNextLTPro",
    fontSize: 14,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 16,
    letterSpacing: 0,
    textAlign: "left",
    color: "#ffffff",
    marginLeft: wp('6%'),
    marginTop: hp('3%')
  },
  tenor: {
    fontFamily: "AvenirNextLTPro",
    fontSize: 14,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 16,
    letterSpacing: 0,
    textAlign: "left",
    color: "#ffffff",
    marginLeft: 'auto',
    marginRight: wp('6%'),
    marginTop: hp('3%')
  },
  status: {
    fontFamily: "AvenirNextLTPro",
    fontSize: 12,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 18,
    letterSpacing: 0,
    textAlign: "left",
    color: "#000000",
    marginLeft: wp('6%'),
    marginTop: hp('3%')
  },
  review: {
    fontFamily: "AvenirNextLTPro-It",
    fontSize: 12,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 18,
    letterSpacing: 0,
    textAlign: "left",
    color: "#a92930",
    marginLeft: wp('6%'),
    marginTop: hp('1%')
  },
  detail: {
    fontFamily: "AvenirNextLTPro",
    fontSize: 14,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 18,
    letterSpacing: 0,
    textAlign: "left",
    color: "#a92930",
    marginLeft: 'auto',
    marginRight: wp('2%'),
  },
  icon: {
    fontSize: 10,
    marginRight: wp('4%'),
    color: "#a92930",
    marginTop: hp('.7%')
  }
});
const mapStateToProps = state => ({ ...state });
const mapActionToProps = () => ({
    navigate,
    ...action,
});
export default connect(mapStateToProps,mapActionToProps())(Submission);