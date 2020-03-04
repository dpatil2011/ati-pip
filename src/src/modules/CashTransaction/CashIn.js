import React, { Component } from 'react';
import { AtiTextInput, AtiText, AtiCol, AtiRow, AtiIcon } from 'ati-ui-elements';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol,
  } from 'react-native-responsive-screen';
  import navigate from '../../common/navigation/action';
  import { withWebConsole } from 'ati-web-console-connector';
  import * as action from '../../common/components/popup/store/popup-action';
  import { connect } from 'react-redux';
  import * as homeAction from '../home/store/HomeAction';
import { Loc } from 'ati-react-native-redux-i18n';
import Icon from 'react-native-vector-icons/AntDesign'
import Dash from 'react-native-dash';
import CashInSummary from './CashInSummary';

class CashIn extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            inputValue:''
         }
    }
    inputChange=()=>{
        this.setState({
            inputValue:""
        })
    
    }
    nav=(e)=>{
      if(this.state.inputValue>0){
        this.props.setCashinAmount(this.state.inputValue)
        this.props.navigate(e)
    }
    else{
      alert("enter a valid Amount")
    }
  }
    render() { 
        
        return ( 
            <View style={{backgroundColor:'#ffffff', height:hp('100%'), paddingHorizontal:wp('6.9%')}}>
                <AtiText style={{alignSelf:'center', marginTop:hp('4%'), marginBottom:hp('2%'), fontFamily: "AvenirNextLTPro", fontSize: 14, fontWeight: "normal", fontStyle: "normal", letterSpacing: 0.28,  color: "#000000"}}>Nominal Deposit</AtiText>
                 <View style={styles.input1}>
                <View style={{flexDirection:'row'}}>
                   
                    <View style={{flexDirection:'column',width:wp('10%')}}><AtiText style={{  color:"#a92930", fontWeight:'bold', fontSize:23, paddingTop:hp('1.1%')}}>Rp</AtiText></View>
                    <View style={{ width:wp('65%')}}>
                  <AtiTextInput
                  textStyle={{  color:"#a92930",
                  fontWeight:'bold',    
                  fontSize:20,
                   paddingTop:hp('1.1%')}}
                            // textStyle={styles.input1} 
                            keyboardType="numeric"
                            autofocus
                            events={{
                            onChangeText:(e)=>{
                                this.setState({
                                    inputValue:e
                                })
                            }
                            }}
                            value={ this.state.inputValue}
                            ></AtiTextInput>
                            </View>
                            </View>
                      </View>
                      <Loc style={styles.note} locKey="label.DestinationAccount" />
                      <View style={styles.input2}>
                      <TouchableOpacity style={{flexDirection:'row'}}><AtiText style={styles.text}>To New Account</AtiText><AtiText style={{ paddingTop:hp('1%')}} ><Icon name='right' color="#78849e"/></AtiText></TouchableOpacity>
                      </View>
                      <View style={{flexDirection:'row', marginVertical:hp('2%')}}>
                          <View>
                          <Dash style={{width:wp('35.5%'), height:hp('0.3%'), marginTop:wp('3%')}} dashColor='#f0f0f0' dashThickness={hp('5%')} dashLength={10}/>
                          </View><AtiText style={styles.or}>      Or      </AtiText>
                          <View>
                          <Dash style={{width:wp('35.5%'), height:hp('0.3%'), marginTop:wp('3%'), paddingRight:hp('2%')}} dashColor='#f0f0f0' dashThickness={hp('5%')} dashLength={10}/>
                          </View>
                      </View>
                      <View style={styles.input2}>
                      <TouchableOpacity style={{flexDirection:'row'}}><AtiText style={styles.text}>From Account Register</AtiText><AtiText style={{ paddingTop:hp('1%')}} ><Icon name='right' color="#78849e"/></AtiText></TouchableOpacity>
                      </View>
                      <TouchableOpacity style={{width:wp('80%'), backgroundColor:"#a92930", height:hp("7.8%"), marginTop:hp('8%'), paddingTop:hp('2%'), paddingLeft:wp('36%'), marginLeft:wp('3.8%'), borderRadius:wp('8%')}} onPress={this.nav.bind(this, 'CashInSummary')}><AtiText style={{fontFamily: "AvenirNextLTPro", fontSize: 15, fontWeight: "500", fontStyle: "normal", lineHeight: 21, letterSpacing: 0, color: "#ffffff"}}>Submit</AtiText></TouchableOpacity>

            </View>
         );
    }
}
const mapStateToProps = (state) => {
    const { home } = state;
    return {
      ...home,
    };
  };
const mapActionToProps = () => ({
  navigate,
  ...action,
  ...homeAction
  // ...authentication,
});
export default connect(mapStateToProps, mapActionToProps())(withWebConsole(CashIn));

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#d6d6d6',
        borderRadius: 10,
        paddingLeft: wp('4.8%'),
        marginTop: hp('1.6%'),
        // marginLeft: wp('6.9%'),
        // marginRight: wp('6.9%'),
        height: hp('7.5%'),
        fontSize:32,
        width: wp('86.1%'),
    },
    input1: {
        borderRadius: 10,
        borderColor: '#d6d6d6',
        paddingLeft: wp('4.8%'),
        marginTop:hp('1%'),
        // marginLeft: wp('6.9%'),
        // marginRight: wp('6.9%'),
        height: hp('10%'),
        color:"#a92930",
        fontWeight:'bold',
        fontSize:32,
        backgroundColor:"#e9e9e9",
        width: wp('87.5%'),
        paddingTop:hp('1.5%')
    },
    input2: {
        flexDirection:'row',
        borderRadius: 10,
        borderColor: '#d6d6d6',
        borderWidth:1,
        paddingLeft: wp('3.5%'),
        marginTop:hp('1%'),
        // marginLeft: wp('6.9%'),
        // marginRight: wp('6.9%'),
        height: hp('7%'),
        color:"#a92930",
        fontWeight:'bold',
        fontSize:14,
        backgroundColor:"#ffffff",
        width: wp('87.5%'),
        paddingTop:hp('1.5%'),
    },
    totalTransactions : {
        marginTop:hp('4%'),
        fontFamily: "AvenirNextLTPro-Demi",
        fontSize: 16,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 22,
        textAlign: "left",
        color: "#000000"
      },
    note : {
        marginTop:hp('3%'),
        fontFamily: "AvenirNextLTPro",
        fontFamily: "AvenirNextLTPro",
        fontSize: 14,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 20,
        letterSpacing: 0.28,
        textAlign: "left",
        color: "#000000"
      },
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
      or:{
        fontFamily: "AvenirNextLTPro",
        fontSize: 14,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        textAlign: "left",
        color: "#2e2e2e"
      }
})