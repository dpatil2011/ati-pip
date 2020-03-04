import React, { Component } from 'react';
import { View } from 'native-base';
import { AtiText,AtiTextInput } from 'ati-ui-elements';
import{StyleSheet,TouchableOpacity} from 'react-native'
import { Loc } from 'ati-react-native-redux-i18n';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol,
    heightPercentageToDP,
    widthPercentageToDP,
  } from 'react-native-responsive-screen';
  import Icon from 'react-native-vector-icons/AntDesign'
  import navigate from './../../common/navigation/action';
import { withWebConsole } from 'ati-web-console-connector';
//import * as action from './../../../common/components/popup/store/popup-action';
import * as action from './../../common/components/popup/store/popup-action';

import { connect } from 'react-redux';
class Transvision extends Component {
    state = {  }

    nav=(e)=>{
        //this.props.setQamount(this.state.inputValue)
        this.props.navigate(e)
    }
    render() {
        return (
            <View style={{flex:1,backgroundColor:'#f8f6f0'}}>
            <View style={{ marginTop:hp('2%'), padding:wp('5%'), height:hp('50%')}}>
                <Loc style={styles.label} locKey="label.PayFromAccount" />
                <View style={styles.input2}>
                      <TouchableOpacity style={{flexDirection:'row'}}><AtiText style={styles.text}>TARAMAS - 0011 1022 900</AtiText><AtiText style={{ paddingTop:hp('1%')}} ><Icon name='right' color="#78849e"/></AtiText></TouchableOpacity>
                </View>
                <AtiText style={{
                                color: '#008211',
                                marginLeft: wp("3%"),
                                marginTop: hp("2.2%"),
                                fontFamily: "AvenirNextLTPro",
                                fontSize: 12,
                                marginBottom: hp('4.4%')}}>Available balance Rp 9,760,000</AtiText>
                <Loc style={styles.label} locKey="label.Phone Number" />
                <AtiTextInput textStyle={styles.input2} placeholder='08xxxxxxxxxxxx'
                type='numeric'
                keyboardType='phone-pad'/>
                
                <TouchableOpacity style={{width:wp('80%'), backgroundColor:"#a92930", height:hp("7.8%"), marginTop:hp('8%'), paddingTop:hp('2%'),  marginLeft:wp('3.8%'), borderRadius:wp('8%')}} 
                onPress={this.nav.bind(this, 'telkomConfirmation')} >
                    <AtiText style={{color:'white', alignSelf:'center'}}>Next</AtiText></TouchableOpacity>
                </View>
                </View>
        );
    }
}

const mapActionToProps = () => ({
    navigate,
    ...action,
    // ...authentication,
});

export default connect(null, mapActionToProps())(withWebConsole(Transvision));
// export default telkomPayment;
const styles= StyleSheet.create({
    text:{
        width:wp('78%'),
        fontFamily: "AvenirNextLTPro",
        fontSize: 14,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0.28,
        textAlign: "left",
        color: "#000000"
      },
    input2: {
        flexDirection:'row',
        borderRadius: 10,
        borderColor: '#d6d6d6',
        borderWidth:1,
        paddingLeft: wp('3.5%'),
        marginTop:hp('1%'),
       // marginBottom:hp('2%'),
        // marginLeft: wp('6.9%'),
        // marginRight: wp('6.9%'),
        height: hp('7%'),
        color:"#a92930",
        fontWeight:'bold',
        fontSize:12,
        backgroundColor:"#ffffff",
        width: wp('90%'),
        paddingTop:hp('1.5%'),
    },
    label:{
        fontFamily: "AvenirNextLTPro", 
        fontSize: 14,  
        marginLeft:2,
        marginBottom:hp('0.8%'),
        color:'#000000'}
    });