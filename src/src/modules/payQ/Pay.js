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
            this.props.setQamount(this.state.inputValue)
            this.props.navigate(e)            
        }
            else{
                alert('enter a valid amount')
            }
        
    }
    render() { 
        
        return ( 
            <View style={{backgroundColor:'#f7f7f7', height:hp('100%')}}>
                 <View style={styles.input1}>
                <View style={{flexDirection:'row'}}>
                   
                    <View style={{flexDirection:'column',width:"10%"}}><AtiText style={{  color:"#a92930",
      fontWeight:'bold',
      fontSize:23,
       paddingTop:hp('2.1%')}}>Rp</AtiText></View>
                    <View style={{ width:"80%"}}>
                  <AtiTextInput
                  textStyle={{  color:"#a92930",
                  fontWeight:'bold',    
                  fontSize:20,
                   paddingTop:hp('2.1%'), marginTop:hp('0.5%')}}
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
                            <View style={{width:wp('4%'), marginLeft:wp('0.5%')}}><TouchableOpacity style={{backgroundColor:'rgba(0,0,0,0.4)', paddingLeft:wp('0.8%'), marginTop:hp('3.3%'), borderRadius:wp('3%')}} onPress={this.inputChange.bind()}><AtiText style={{padding:hp('0.2%')}} ><AtiIcon name='close' style={{fontSize:12, fontWeight:'bold', color:'white'}}/></AtiText></TouchableOpacity></View>
                            </View>
                      </View>
                      <TouchableOpacity style={{width:wp('80%'), backgroundColor:"#a92930", height:hp("7.8%"), marginTop:hp('12.5%'), paddingTop:hp('2%'), paddingLeft:wp('36%'), marginLeft:wp('9.9%'), borderRadius:wp('8%')}} onPress={this.nav.bind(this, 'ConfirmationPayQ')}><AtiText style={{color:'white'}}>Pay</AtiText></TouchableOpacity>

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
        marginLeft: wp('6.9%'),
        marginRight: wp('6.9%'),
        height: hp('7.5%'),
        fontSize:32,
        width: wp('86.1%'),
    },
    input1: {
        borderRadius: 10,
        borderColor: '#d6d6d6',
        paddingLeft: wp('4.8%'),
        marginTop:hp('5.7%'),
        marginLeft: wp('6.9%'),
        marginRight: wp('6.9%'),
        height: hp('12%'),
        color:"#a92930",
        fontWeight:'bold',
        fontSize:32,
        backgroundColor:"#e9e9e9",
        width: wp('87.5%'),
        paddingTop:hp('1.5%')
    }
})