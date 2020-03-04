import React, { Component } from 'react';
import { View,Text,StyleSheet,TouchableOpacity } from 'react-native';
import VirtualKeyboard from 'react-native-virtual-keyboard';
import { AtiText, AtiButton, AtiIcon } from 'ati-ui-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';
import { Left, Right } from 'native-base';
import navigate from './../../common/navigation/action';
import { withWebConsole } from 'ati-web-console-connector';
import { connect } from 'react-redux';
import URLS from './../../common/urls/URLS';
import * as topupAction from './store/mobile-topup-action'
import * as action from './../../common/components/popup/store/popup-action';
class Pin extends Component {
  constructor(props){
    super(props);
    this.state={
      pinNumber:'',
      pin:false,
      icon1:"",
      icon2:"",
      icon3:"",
      icon4:"",
      icon5:"",
      icon6:""
    }
    
  }
  
  changeText(newText) {
    this.setState({
      pinNumber:newText
    })
    if(newText.length==0){
      this.setState({
        icon1:"#a92930",icon2:"#a92930",icon3:"#a92930",icon4:"#a92930",icon5:"#a92930",icon6:"#a92930"
      })
    }
    if(newText.length==1){
      this.setState({
        icon1:"white",icon2:"#a92930",icon3:"#a92930",icon4:"#a92930",icon5:"#a92930",icon6:"#a92930"
      })
    }
    if(newText.length==2){
      this.setState({
        icon1:"white",icon2:"white",icon3:"#a92930",icon4:"#a92930",icon5:"#a92930",icon6:"#a92930"
      })
    }
    if(newText.length==3){
      this.setState({
        icon1:"white",icon2:"white",icon3:"white",icon4:"#a92930",icon5:"#a92930",icon6:"#a92930"
      })
    }
    if(newText.length==4){
      this.setState({
        icon1:"white",icon2:"white",icon3:"white",icon4:"white",icon5:"#a92930",icon6:"#a92930"
      })
    }
    if(newText.length==5){
      this.setState({
        icon1:"white",icon2:"white",icon3:"white",icon4:"white",icon5:"white",icon6:"#a92930"
      })
    }
    if(newText.length==6){
      this.setState({
        icon1:"white",icon2:"white",icon3:"white",icon4:"white",icon5:"white",icon6:"white"
      })
      var URL = URLS.ppobPay;
      this.props.payData.pinCode=newText
      var postData = this.props.payData;
      //alert(JSON.stringify(postData))
       axios({
        method: 'post',
        url: URL,
        data: postData,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Fineract-Platform-TenantId': 'default',
        },
        auth: {
          username: 'coin',
          password: 'coin',
        },
      }).then((response) => {
        this.setState({
            pin:false
          })
        this.props.setReceiptData(response.data);
        this.props.navigate('TopupReceipt');
      })
      .catch((response) => {
        if(response.response.data.errors[0].userMessageGlobalisationCode == "error.msg.pin.invalid"){
          this.setState({
            pin:true
          })
        }else{
          this.setState({
            pin:false
          })
          alert(response.response.data.defaultUserMessage);
        } 
      })
    }
    }
    
    navi(e){
        this.props.navigate(e)
    }

  render() {
     return (
      <View style={{flex:1,backgroundColor:'#a92930'}}>
        
        <View style={{flexDirection:'row'}}> 
        <Left><TouchableOpacity onPress={this.navi.bind(this,'TopupConfirmation')}><AtiText style={{ marginLeft:wp('6.4%'),marginTop:wp('7.1%'),}}> <Icon name="arrow-back" size={24} color="white" /></AtiText></TouchableOpacity></Left>
        <Right><TouchableOpacity onPress={this.navi.bind(this,'NAI')}><AtiText style={styles.forgotPin}> Forgot Pin?</AtiText></TouchableOpacity></Right>
        </View>
    <Text style={styles.head}>Transaction PIN</Text>
    <Text style={styles.title}>Enter your 6-Digit PIN Transaction</Text>
        <View style={{flex:1,flexDirection:'row',justifyContent:'center',marginTop:wp('25%'),backgroundColor:'#a92930'}}>
        <View backgroundColor={this.state.icon1} style={{width:wp('9.3%'),height:hp('5.2%'), marginLeft:wp('2.7%'),borderRadius:wp('50%'),borderColor:'white',borderWidth:wp('0.6%')}}></View>
        <View backgroundColor={this.state.icon2} style={{width:wp('9.3%'),height:hp('5.2%'), marginLeft:wp('2.7%'),borderRadius:wp('50%'),borderColor:'white',borderWidth:wp('0.6%')}}></View>
        <View backgroundColor={this.state.icon3} style={{width:wp('9.3%'),height:hp('5.2%'), marginLeft:wp('2.7%'),borderRadius:wp('50%'),borderColor:'white',borderWidth:wp('0.6%')}}></View>
        <View backgroundColor={this.state.icon4} style={{width:wp('9.3%'),height:hp('5.2%'), marginLeft:wp('2.7%'),borderRadius:wp('50%'),borderColor:'white',borderWidth:wp('0.6%')}}></View>
        <View backgroundColor={this.state.icon5} style={{width:wp('9.3%'),height:hp('5.2%'), marginLeft:wp('2.7%'),borderRadius:wp('50%'),borderColor:'white',borderWidth:wp('0.6%')}}></View>
        <View backgroundColor={this.state.icon6} style={{width:wp('9.3%'),height:hp('5.2%'), marginLeft:wp('2.7%'),borderRadius:wp('50%'),borderColor:'white',borderWidth:wp('0.6%')}}></View>
        </View>
				{this.state.pin && <Text style={styles.error}>Invalid pin</Text>}
        <View style={{marginBottom:wp('15%')}} >
				<VirtualKeyboard color='white' fontWeight='bold' pressMode='string' onPress={(val) => this.changeText(val)} />
        </View>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
    container:{ 
        flexDirection: 'row',
        backgroundColor:'#ffffff',
        width: '100%',
        height: '10%'
    },
    title:{
      fontFamily: "AvenirNextLTPro",
      fontSize: 14,
      fontWeight: "normal",
      marginTop:wp('2.7%'),
      fontStyle: "normal",
      letterSpacing: 0.28,
      textAlign: "center",
      color: "#ffffff"
    },
    error:{
      fontFamily: "AvenirNextLTPro",
      fontSize: 14,
      fontWeight: "normal",
      marginTop:wp('2.7%'),
      fontStyle: "normal",
      letterSpacing: 0.28,
      textAlign: "center",
      color: "yellow"
    },
    head:{
      fontFamily: "AvenirNextLTPro",
      fontSize: 16,
      fontWeight: "bold",
      marginTop:wp('21.9%'),
      fontStyle: "normal",
      letterSpacing: 0,
      textAlign: "center",
      color: "#ffffff"
    },
    forgotPin:{
      fontFamily: "AvenirNextLTPro-Demi",
      fontSize: 14,
      marginRight:wp('7.5%'),
      marginTop:wp('7.2%'),
      fontWeight: "bold",
      fontStyle: "normal",
      letterSpacing: 0.28,
      textAlign: "right",
      color: "#ffffff"
    }
});

const mapStateToProps = (state) => {
  const { topup } = state;
  return {
      ...topup
  };
};

const mapActionToProps=()=>{
    return{
        navigate,
        ...action,
        ...topupAction
    }
}

export default connect(mapStateToProps,mapActionToProps())(Pin)