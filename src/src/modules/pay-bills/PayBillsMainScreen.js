import React, { Component } from 'react';
import navigate from './../../common/navigation/action';
import { withWebConsole } from 'ati-web-console-connector';
import { connect } from 'react-redux';
import * as action from './../../common/components/popup/store/popup-action';
import { View, StyleSheet, Text, ImageBackground, Image, ScrollView,TouchableOpacity } from 'react-native';
import { AtiText, AtiCard, AtiCardItem, AtiTextInput, AtiList, AtiListItem, Left, Right, AtiIcon, AtiSpinner } from 'ati-ui-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import * as paybillsAction from './store/paybills-action'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';
class PayBillsMainScreen extends Component {

navi = (e,n) => {
    this.props.navigate(e);
    this.props.setHeaderName(n);
}
  render() {
    return (
      <View style={styles.picture}>
        <TouchableOpacity style={styles.card} onPress={this.navi.bind(this,'Utility','Utility Bill')}>
        <AtiCard style={{borderRadius:wp("2%"),marginTop:hp("2%")}}>
            <AtiCardItem  bordered style={{ borderRadius:wp("2%")}}>
                <Left>
                    <Image style={{ width:wp("15.5%"),height:hp('8.7')}} source={require('./../../../assets/img/icon/utility.png')} />
                    <AtiText style={styles.text}>Utility Bill</AtiText>
                </Left>
                <Right>
                    <Icon
                        name="right"
                        style={{
                            height: 24,
                            width: 24,
                            resizeMode: 'stretch',
                            alignItems: 'center',
                            fontWeight:'bold',
                            marginTop: 12,
                            color: 'black',
                        }}
                    />             
                </Right>
            </AtiCardItem>
        </AtiCard>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={this.navi.bind(this,'PostpaidBill')}>
        <AtiCard style={{borderRadius:wp("2%"),marginTop:hp("2%")}}>
            <AtiCardItem  bordered style={{ borderRadius:wp("2%")}}>
                <Left>
                    <Image style={{ width:wp("15.5%"),height:hp('8.7')}} source={require('./../../../assets/img/icon/postpaid.png')} />
                    <AtiText style={styles.text}>Postpaid Bill</AtiText>
                </Left>
                <Right>
                    <Icon
                        name="right"
                        style={{
                            height: 24,
                            width: 24,
                            resizeMode: 'stretch',
                            alignItems: 'center',
                            fontWeight:'bold',
                            marginTop: 12,
                            color: 'black',
                        }}
                    />             
                </Right>
            </AtiCardItem>
        </AtiCard>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={this.navi.bind(this,'Insurance')}>
        <AtiCard style={{borderRadius:wp("2%"),marginTop:hp("2%")}}>
            <AtiCardItem  bordered style={{ borderRadius:wp("2%")}}>
                <Left>
                    <Image style={{ width:wp("15.5%"),height:hp('8.7')}} source={require('./../../../assets/img/icon/insurance.png')} />
                    <AtiText style={styles.text}>Insurance Bill</AtiText>
                </Left>
                <Right>
                    <Icon
                        name="right"
                        style={{
                            height: 24,
                            width: 24,
                            resizeMode: 'stretch',
                            alignItems: 'center',
                            fontWeight:'bold',
                            marginTop: 12,
                            color: 'black',
                        }}
                    />             
                </Right>
            </AtiCardItem>
        </AtiCard>
        </TouchableOpacity>
       
      </View>
    );
  }
}
const mapStateToProps = state => ({ ...state });
const mapActionToProps = () => ({
    navigate,
    ...action,
    ...paybillsAction
    // ...authentication,
});

export default connect(mapStateToProps, mapActionToProps())(withWebConsole(PayBillsMainScreen));

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
    color: 'black',
    fontWeight: 'bold',
    marginLeft:wp('4.5%')
    
  },
  card:{
    paddingLeft:wp('5.1%'),
    paddingRight:wp('5.1%'),
    marginTop:hp("1%")
  }
});