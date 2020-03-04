import React, { Component } from 'react';
import { AtiTextInput, AtiText, AtiCol, AtiRow, AtiIcon } from 'ati-ui-elements';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
  } from 'react-native-responsive-screen';
  import navigate from '../../common/navigation/action';
  import { withWebConsole } from 'ati-web-console-connector';
  import * as action from '../../common/components/popup/store/popup-action';
  import { connect } from 'react-redux';
  import * as homeAction from '../home/store/HomeAction';
import { Loc } from 'ati-react-native-redux-i18n';

class Pay extends Component {
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
        this.props.setCashieramount(this.state.inputValue)
        this.props.navigate(e)
    }
    else{
        alert('enter a valid amount')
    }
}
    render() { 
        
        return ( 
            <View style={{backgroundColor:'#f0f0f0', height:hp('100%'), paddingHorizontal:wp('6.9%')}}>
                <Loc style={styles.totalTransactions} locKey="label.TotalTransactions" />

                 <View style={styles.input1}>
                <View style={{flexDirection:'row'}}>
                   
                    <View style={{flexDirection:'column',width:wp('10%')}}><AtiText style={{  color:"#a92930",
      fontWeight:'bold',
      fontSize:23,
       paddingTop:hp('1.1%')}}>Rp</AtiText></View>
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
                            <View style={{width:wp('4%'), marginLeft:wp('0.5%')}}><TouchableOpacity style={{backgroundColor:'rgba(0,0,0,0.4)', paddingLeft:wp('0.8%'), marginTop:hp('2.3%'), borderRadius:wp('3%')}} onPress={this.inputChange.bind()}><AtiText style={{padding:hp('0.2%')}} ><AtiIcon name='close' style={{fontSize:12, fontWeight:'bold', color:'white'}}/></AtiText></TouchableOpacity></View>
                            </View>
                      </View>
                      <Loc style={styles.note} locKey="label.Note" />
                      <AtiTextInput textStyle={styles.input2} placeholder='Optional'/>
                      <TouchableOpacity style={{width:wp('80%'), backgroundColor:"#a92930", height:hp("7.8%"), marginTop:hp('2.5%'), paddingTop:hp('2%'),  marginLeft:wp('3.8%'), borderRadius:wp('8%')}} onPress={this.nav.bind(this, 'CashierQr')}><AtiText style={{color:'white', alignSelf:'center'}}>Create Bill</AtiText></TouchableOpacity>

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
export default connect(mapStateToProps, mapActionToProps())(withWebConsole(Pay));

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
        borderRadius: 10,
        borderColor: '#d6d6d6',
        paddingLeft: wp('2%'),
        marginTop:hp('1%'),
        // marginLeft: wp('6.9%'),
        // marginRight: wp('6.9%'),
        height: hp('7%'),
        color:"#a92930",
        fontWeight:'bold',
        fontSize:14,
        backgroundColor:"#ffffff",
        width: wp('87.5%'),
        paddingTop:hp('1.5%')
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
        fontSize: 14,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        textAlign: "left",
        color: "#000000"
      }
})