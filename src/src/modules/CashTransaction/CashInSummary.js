import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import navigate from '../../common/navigation/action';
import { withWebConsole } from 'ati-web-console-connector';
import * as action from '../../common/components/popup/store/popup-action';
import { connect } from 'react-redux';
import success from './../../../assets/img/icon/success.png'
import line from './../../../assets/img/icon/dashedLine.png'
import { widthPercentageToDP,heightPercentageToDP } from 'react-native-responsive-screen';
import { AtiText } from 'ati-ui-elements';
import Dash from 'react-native-dash';
import border from './../../../assets/img/icon/border.png';
import dash from './../../../assets/img/icon/dash.png'
// import border2 from './../../../assets/img/icon/border_2.png';
import * as homeAction from '../home/store/HomeAction';

class Receipt extends Component {
        constructor(props) {
            super(props);
            this.state = {
                total: this.props.CashinAmount + 0
              }
   
    }
     
    nav=(e)=>{
        this.props.navigate(e)
    }
    render() { 
        return (
            <View style={{backgroundColor:'#a92930', height:heightPercentageToDP('100%'), elevation:8}}>
                  <View style={{backgroundColor:'white', height:heightPercentageToDP("58.5%")}}>
                    <AtiText style={successfulPayment}>Cash In Summary</AtiText>
                    <View style={{flexDirection:"row", justifyContent:'space-between'}}>
                        <View style={{flexDirection:'column'}}><AtiText style={text}>Destination Account</AtiText></View>
                        <View style={{flexDirection:'column'}}><AtiText style={textRight}>0011 1022 900</AtiText></View> 
                    </View> 
                    <Dash style={{width:widthPercentageToDP('94%'), height:heightPercentageToDP('0.3%'), paddingHorizontal:heightPercentageToDP('3%')}} dashColor='#f0f0f0' dashThickness={heightPercentageToDP('5%')} dashLength={8}/>
                    <View style={{flexDirection:"row", justifyContent:'space-between'}}>
                        <View style={{flexDirection:'column'}}><AtiText style={text}>Name</AtiText></View>
                        <View style={{flexDirection:'column'}}><AtiText style={textRight}>Heliana</AtiText></View> 
                    </View> 
                    <Dash style={{width:widthPercentageToDP('94%'), height:heightPercentageToDP('0.3%'), paddingHorizontal:heightPercentageToDP('3%')}} dashColor='#f0f0f0' dashThickness={heightPercentageToDP('5%')} dashLength={8}/>
                    <View style={{flexDirection:"row", justifyContent:'space-between'}}>
                        <View style={{flexDirection:'column'}}><AtiText style={text}>Cash Amount</AtiText></View>
        <View style={{flexDirection:'column'}}><AtiText style={textRight}>{this.props.CashinAmount}</AtiText></View> 
                    </View> 
                    <Dash style={{width:widthPercentageToDP('94%'), height:heightPercentageToDP('0.3%'), paddingHorizontal:heightPercentageToDP('3%')}} dashColor='#f0f0f0' dashThickness={heightPercentageToDP('5%')} dashLength={8}/>
                    <View style={{flexDirection:"row", justifyContent:'space-between'}}>
                        <View style={{flexDirection:'column'}}><AtiText style={text}>Admission Fee</AtiText></View>
                        <View style={{flexDirection:'column'}}><AtiText style={textRight}>0</AtiText></View> 
                    </View> 
                    <Dash style={{width:widthPercentageToDP('94%'), height:heightPercentageToDP('0.3%'), paddingHorizontal:heightPercentageToDP('3%')}} dashColor='#f0f0f0' dashThickness={heightPercentageToDP('5%')} dashLength={8}/>
                    <View style={{flexDirection:"row", justifyContent:'space-between'}}>
                        <View style={{flexDirection:'column'}}><AtiText style={merch}>Description</AtiText></View>
                        <View style={{flexDirection:'column'}}><AtiText style={textRight}>-</AtiText></View> 
                    </View> 
                    <Image source={dash} style={{width:widthPercentageToDP('100%'), height:heightPercentageToDP('5%'), borderWidth:2}}/>  
                    <View style={{flexDirection:"row", justifyContent:'space-between'}}>
                        <View style={{flexDirection:'column'}}><AtiText style={total}>Total</AtiText></View>
        <View style={{flexDirection:'column'}}><AtiText style={totalRight}>Rp {this.props.CashinAmount}</AtiText></View> 
                    </View>   
            </View>

            <Image source={border} style={{width:widthPercentageToDP('100%'), height:heightPercentageToDP('5.6%')}}/>  
            {/* <Image source={dash} style={{width:widthPercentageToDP('100%'), height:heightPercentageToDP('2.5%')}}/> */}
            <TouchableOpacity style={{width:widthPercentageToDP('80%'), backgroundColor:"#ffffff", height:heightPercentageToDP("7.8%"), marginTop:heightPercentageToDP('8%'), paddingTop:heightPercentageToDP('2%'), paddingLeft:widthPercentageToDP('36%'), marginLeft:widthPercentageToDP('9.9%'), borderRadius:widthPercentageToDP('8%')}} onPress={this.nav.bind(this, 'CashInPin')}><AtiText style={{color:'#a92930'}}>Confirm</AtiText></TouchableOpacity>
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
  });
  export default connect(mapStateToProps, mapActionToProps())(withWebConsole(Receipt));

  const successfulPayment = {
    marginTop:heightPercentageToDP('5%'),
    marginBottom:heightPercentageToDP('1%'),
    fontFamily: "AvenirNextLTPro",
    fontSize: 16,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#000000"
  };
  const text = {
    fontFamily: "AvenirNextLTPro",
    fontSize: 14,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "left",
    color: "#000000",
    paddingVertical:heightPercentageToDP('2.5%'),
    paddingHorizontal:heightPercentageToDP('3%')
  };
  const textRight = {
    fontFamily: "AvenirNextLTPro",
    fontSize: 14,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "right",
    color: "#000000",
    paddingVertical:heightPercentageToDP('2.5%'),
    paddingHorizontal:heightPercentageToDP('3%')
  };
  const merch = {
    fontFamily: "AvenirNextLTPro",
    fontSize: 14,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "left",
    color: "#000000",
    paddingHorizontal:heightPercentageToDP('3.5%'),
    paddingTop:heightPercentageToDP('2.5%')
  };
  const total={
    fontFamily: "AvenirNextLTPro",
    fontSize: 14,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "left",
    color: "#000000",
    paddingHorizontal:heightPercentageToDP('3.5%'),
    paddingTop:heightPercentageToDP('1.5%')
  }
  const merchRight = {
    fontFamily: "AvenirNextLTPro",
    fontSize: 14,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "right",
    color: "#000000",
    paddingHorizontal:heightPercentageToDP('3.5%'),
    paddingTop:heightPercentageToDP('2.5%')
  };
  const totalRight = {
    fontFamily: "AvenirNextLTPro",
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "right",
    color: "#a92930",
    paddingHorizontal:heightPercentageToDP('3.5%'),
    paddingTop:heightPercentageToDP('1%')
  };
  