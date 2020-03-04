import React, { Component } from 'react';
import navigate from './../../common/navigation/action';
import { withWebConsole } from 'ati-web-console-connector';
import { connect } from 'react-redux';
import * as action from './../../common/components/popup/store/popup-action';
import * as act from './Store/Submission-action';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { View, StyleSheet, Text, ImageBackground, Image, ScrollView,TouchableOpacity } from 'react-native';
import { AtiText, AtiCard, AtiCardItem, AtiTextInput, AtiList, AtiListItem, Left, Right, AtiIcon, AtiSpinner } from 'ati-ui-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';
class Status extends Component {
  navi = (e) => {
    this.props.setStatus(true);
    this.props.navigate(e);
}

  render() {
    if (this.props.value==='1'){
      this.props.setStatus(true);
    } else {
      this.props.setStatus(false);
    }
    return (
      <View style={styles.picture}>
        <TouchableOpacity style={styles.card} onPress={this.navi.bind(this,'Submission2')}>
        <Image style={{ marginTop:hp('8.5%'),marginLeft:wp('24%'),width:wp("42.8%"),height:hp('17.5')}} source={require('./../../../assets/img/icon/substatus.png')} />
        <View style={{ marginTop:hp('3.2%'),marginLeft:wp('10%'),marginRight:wp('10%')}}><AtiText style={styles.text}>You haven’t made any submissions yet.{"\n"}
Please do the submission on the submission list menu</AtiText></View>
        </TouchableOpacity> 
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  const { submission } = state;
  return {
      ...submission,
  };
};
const mapActionToProps = () => ({
    navigate,
    ...action,
    ...act,
    // ...authentication,
});

export default connect(mapStateToProps, mapActionToProps())(withWebConsole(Status));

const styles = StyleSheet.create({
  picture: {
    flex: 1,
    width: null,
    height: null,
    paddingTop:hp('2%'),
    resizeMode: 'cover',
    backgroundColor:"#f0f0f0"
  },
  text: {
  fontFamily: "AvenirNextLTPro",
  fontSize: 14,
  fontWeight: "normal",
  fontStyle: "normal",
  textAlign: "center",
  color: "#9b9b9b"
    
  },
  card:{
    paddingLeft:wp('5.1%'),
    paddingRight:wp('5.1%'),
    marginTop:hp("1%")
  }
});