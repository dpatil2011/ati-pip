import React, { Component } from 'react';
import { View, Image, TouchableOpacity, ScrollView } from 'react-native';
import navigate from '../../common/navigation/action';
import { withWebConsole } from 'ati-web-console-connector';
import * as action from '../../common/components/popup/store/popup-action';
import { connect } from 'react-redux';
import success from './../../../assets/img/icon/success.png'
import line from './../../../assets/img/icon/dashedLine.png'
import { widthPercentageToDP,heightPercentageToDP } from 'react-native-responsive-screen';
import { AtiText } from 'ati-ui-elements';
import Dash from 'react-native-dash';
import border from './../../../assets/img/icon/border_next.png';
import dash from './../../../assets/img/icon/dashedLine.png'
import border2 from './../../../assets/img/icon/border_2.png';
import * as homeAction from '../home/store/HomeAction';

class Receipt extends Component {
    nav=(e)=>{
        this.props.navigate(e)
    }
    render() { 
        return (
            <View style={{backgroundColor:'#f0f0f0', height:heightPercentageToDP('100%')}}>
                  <View style={{backgroundColor:'white', height:heightPercentageToDP("62%")}}>
                     <ScrollView>
                         <Image source={success} style={{width:widthPercentageToDP('15%'), height: heightPercentageToDP('10.5%'), alignSelf:"center"}}/>
                    <AtiText style={successfulPayment}>Transaction Successful</AtiText>
                    <View style={{flexDirection:"row", justifyContent:'space-between'}}>
                        <View style={{flexDirection:'column'}}><AtiText style={text}>Transaction Type</AtiText></View>
                        <View style={{flexDirection:'column'}}><AtiText style={textRight}>Cash Out</AtiText></View> 
                    </View> 
                    <Dash style={{width:widthPercentageToDP('94%'), height:heightPercentageToDP('0.3%'), paddingHorizontal:heightPercentageToDP('3%')}} dashColor='#f0f0f0' dashThickness={heightPercentageToDP('5%')} dashLength={8}/>
                    <View style={{flexDirection:"row", justifyContent:'space-between'}}>
                        <View style={{flexDirection:'column'}}><AtiText style={text}>Date</AtiText></View>
                        <View style={{flexDirection:'column'}}><AtiText style={textRight}>15 Agu 2018 - 18:50 WIB</AtiText></View> 
                    </View> 
                    <Dash style={{width:widthPercentageToDP('94%'), height:heightPercentageToDP('0.3%'), paddingHorizontal:heightPercentageToDP('3%')}} dashColor='#f0f0f0' dashThickness={heightPercentageToDP('5%')} dashLength={8}/>
                    <View style={{flexDirection:"row", justifyContent:'space-between'}}>
                        <View style={{flexDirection:'column'}}><AtiText style={text}>Reference Code</AtiText></View>
                        <View style={{flexDirection:'column'}}><AtiText style={textRight}>282182183</AtiText></View> 
                    </View> 
                    <Dash style={{width:widthPercentageToDP('94%'), height:heightPercentageToDP('0.3%'), paddingHorizontal:heightPercentageToDP('3%')}} dashColor='#f0f0f0' dashThickness={heightPercentageToDP('5%')} dashLength={8}/>
                    <View style={{flexDirection:"row", justifyContent:'space-between'}}>
                        <View style={{flexDirection:'column'}}><AtiText style={text}>Account From</AtiText></View>
                        <View style={{flexDirection:'column'}}><AtiText style={textRight}>282182183</AtiText></View> 
                    </View> 
                    <Dash style={{width:widthPercentageToDP('94%'), height:heightPercentageToDP('0.3%'), paddingHorizontal:heightPercentageToDP('3%')}} dashColor='#f0f0f0' dashThickness={heightPercentageToDP('5%')} dashLength={8}/>
                    <View style={{flexDirection:"row", justifyContent:'space-between'}}>
                        <View style={{flexDirection:'column'}}><AtiText style={text}>Name</AtiText></View>
                        <View style={{flexDirection:'column'}}><AtiText style={textRight}></AtiText></View> 
                    </View> 
                    <Dash style={{width:widthPercentageToDP('94%'), height:heightPercentageToDP('0.3%'), paddingHorizontal:heightPercentageToDP('3%')}} dashColor='#f0f0f0' dashThickness={heightPercentageToDP('5%')} dashLength={8}/>
                    <View style={{flexDirection:"row", justifyContent:'space-between'}}>
                        <View style={{flexDirection:'column'}}><AtiText style={text}>Cash Amount</AtiText></View>
                        <View style={{flexDirection:'column'}}><AtiText style={textRight}>{this.props.CashinAmount}</AtiText></View> 
                    </View> 
                    <Dash style={{width:widthPercentageToDP('94%'), height:heightPercentageToDP('0.3%'), paddingHorizontal:heightPercentageToDP('3%')}} dashColor='#f0f0f0' dashThickness={heightPercentageToDP('5%')} dashLength={8}/>
                    <View style={{flexDirection:"row", justifyContent:'space-between'}}>
                        <View style={{flexDirection:'column'}}><AtiText style={text}>Fee</AtiText></View>
                        <View style={{flexDirection:'column'}}><AtiText style={textRight}>Rp 0</AtiText></View> 
                    </View> 
                    <Dash style={{width:widthPercentageToDP('94%'), height:heightPercentageToDP('0.3%'), paddingHorizontal:heightPercentageToDP('3%')}} dashColor='#f0f0f0' dashThickness={heightPercentageToDP('5%')} dashLength={8}/>
                    <View style={{flexDirection:"row", justifyContent:'space-between'}}>
                        <View style={{flexDirection:'column'}}><AtiText style={text}>Description</AtiText></View>
                        <View style={{flexDirection:'column'}}><AtiText style={merchRight}>-</AtiText></View> 
                    </View> 
                    <Image source={border2} style={{width:widthPercentageToDP('100%'), height:heightPercentageToDP('5%'), borderWidth:2}}/>  
                    <View style={{flexDirection:"row", justifyContent:'space-between'}}>
                        <View style={{flexDirection:'column'}}><AtiText style={merch}>Total</AtiText></View>
        <View style={{flexDirection:'column'}}><AtiText style={totalRight}>Rp </AtiText></View> 
                    </View> 
                    </ScrollView>  
            </View>

            <Image source={border} style={{width:widthPercentageToDP('100%'), height:heightPercentageToDP('5%'), borderWidth:2}}/>  
            {/* <Image source={dash} style={{width:widthPercentageToDP('100%'), height:heightPercentageToDP('2.5%')}}/> */}
            <TouchableOpacity style={{width:widthPercentageToDP('80%'), backgroundColor:"#a92930", height:heightPercentageToDP("7.8%"), marginTop:heightPercentageToDP('4%'), paddingTop:heightPercentageToDP('2%'), paddingLeft:widthPercentageToDP('36%'), marginLeft:widthPercentageToDP('9.9%'), borderRadius:widthPercentageToDP('8%')}} onPress={this.nav.bind(this, 'HomeScreen')}><AtiText style={{color:'white'}}>Done</AtiText></TouchableOpacity>
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
    marginTop:heightPercentageToDP('2%'),
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
    paddingTop:heightPercentageToDP('2.5%')
  };
  