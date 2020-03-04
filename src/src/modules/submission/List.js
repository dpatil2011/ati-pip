import React, { Component } from 'react';
import navigate from './../../common/navigation/action';
import { withWebConsole } from 'ati-web-console-connector';
import { connect } from 'react-redux';
import * as action from './../../common/components/popup/store/popup-action';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { View, StyleSheet, Text, ImageBackground, Image, ScrollView,TouchableOpacity } from 'react-native';
import { AtiText, AtiCard, AtiCardItem, AtiTextInput, AtiList, AtiListItem, Left, Right, AtiIcon, AtiSpinner } from 'ati-ui-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';
class List extends Component {
  navi = (e) => {
    this.props.navigate(e);
}

  render() {
    return (
      <View style={styles.picture}>
        <TouchableOpacity style={styles.card} onPress={this.navi.bind(this,'NAI')}>
        <AtiCard style={{borderRadius:wp("2%"),marginTop:hp("2%")}}>
            <AtiCardItem  bordered style={{ borderRadius:wp("2%")}}>
                <Left>
                    <Image style={{ width:wp("15.5%"),height:hp('8.7')}} source={require('./../../../assets/img/icon/subLoan.png')} />
                    <AtiText style={styles.text}>Apply Loan</AtiText>
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
    // ...authentication,
});

export default connect(mapStateToProps, mapActionToProps())(withWebConsole(List));

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