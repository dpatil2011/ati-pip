import React, { Component } from 'react';
import { Content } from 'native-base';
import { AtiText, AtiThumbnail, AtiCard, AtiCardItem, AtiTextInput, AtiIcon, AtiListItem, Left, Right, AtiCol, AtiRow } from 'ati-ui-elements';
import { View, StyleSheet, Text, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Badge } from 'native-base';
import navigate from './../../common/navigation/action';
import axios from 'axios';
import URLS from './../../common/urls/URLS';
import { withWebConsole } from 'ati-web-console-connector';
import { connect } from 'react-redux';
import * as action from './../../common/components/popup/store/popup-action';
import * as topupAction from './store/mobile-topup-action';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';
import I18n, { Loc } from 'ati-react-native-redux-i18n';
import Icon from 'react-native-vector-icons/AntDesign';
import {List,ListItem,Body} from 'native-base';
class MobileTopup extends Component {
   constructor(props){
       super(props);
       this.state={
           inputValue:'',
           ppobProduct:[],
           billNo:null,
           eData:false
       }
   }
   componentDidMount() {
    var billNo = Math.random().toString(10).replace('0.', '') 
    const URL = URLS.ppobProduct+"PULSA";
    axios.get(URL, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Fineract-Platform-TenantId': this.props.tenantId,
      },
      auth: {
        username: this.props.username,
        password: this.props.pass,
      },
    }).then((response) => {
    //  alert(JSON.stringify(response))
      if(response.data.status=='500'){
        this.setState({
          eData:true
        });
      }else{
        this.setState({
          ppobProduct:response.data.data,
          billNo:billNo,
          eData:false
        });
      } 
    }).catch(function(response){
      alert("Something went wrong...")
    });
  }
   inputChange=()=>{
    this.props.setMobileNo(null)
   }
   navi(e,data){
       this.props.setConfirmData(data);
       this.props.navigate(e);
   }
    render() {
      var currencyFormatter = require('currency-formatter');
        return (
                 <View style={{height:hp('100%'),backgroundColor:'#f7f7f7'}}>
                    <View style={{ flexDirection: 'row',marginTop:hp('2%'),marginBottom:hp('1.5%'), }}>
                                    <Loc style={styles.label} locKey="label.mobileTopup" />
                                </View>
                    <View style={styles.input1}>
                    
                <View style={{flexDirection:'row'}}>
                   
                    <View style={{ width:wp("73%")}}>
                  <AtiTextInput
                  textStyle={{ 
                  fontWeight:'bold',    
                   paddingTop:hp('1.8%')}}
                            keyboardType="numeric"
                            autofocus
                            events={{
                            onChangeText:(e)=>{
                                this.props.setMobileNo(e)
                            }
                            }}
                            value={ this.props.mobileNo}
                            ></AtiTextInput>
                            </View>
                            <View style={{width:wp('6%'), marginLeft:wp('0.5%')}}><TouchableOpacity style={{backgroundColor:'rgba(0,0,0,0.4)', paddingLeft:wp('1.25%'), marginTop:hp('1.9%'), borderRadius:wp('3%'), height:hp('3.6%')}} onPress={this.inputChange.bind()}><AtiText style={{padding:hp('0.2%')}} ><AtiIcon name='close' style={{fontSize:20, fontWeight:'bold', color:'white'}}/></AtiText></TouchableOpacity></View>
                            </View>
                            </View>
                            <View style={{ flexDirection: 'row',marginTop:hp('2%'), }}>
                          {this.state.eData && <AtiText style={styles.eData}>Record not available...</AtiText> 
                          || <Loc style={styles.label} locKey="label.topupPlan" />}
                                </View>
            <ScrollView  style={{paddingLeft:wp('3%'),paddingRight:wp('8%')}}>          
            <List style={{paddingBottom:wp('18%')}}>
            {/* <ListItem note>
              <TouchableOpacity onPress={this.navi.bind(this,'TopupConfirmation')} style={{flexDirection:'row'}}>
                
              <Left style={{paddingRight:wp('1%')}}>
              
                <Image style={{ width:wp("15.5%"),height:hp('8.7')}} source={require('./../../../assets/img/icon/topupList.png')} />
                <Body>
                <AtiText style={styles.h1}>XL Pulse 5.000</AtiText>
                <AtiText style={styles.h2}>Rp {currencyFormatter.format(5200, {
                                code: 'IDR',
                                symbol: '',
                                decimal: '.',
                                thousand: ',',
                                precision: 2,
                            })}</AtiText>
                <AtiText style={styles.h3}>Active period 7 Day(s)</AtiText>
              </Body>
           
              </Left>
              
              <Right>
                <Text style={{fontWeight:'bold'}}><Icon
                        name="right"
                        style={{
                            height: 24,
                            width: 24,
                        }}
                    >
                    </Icon></Text>
              </Right>
             
               </TouchableOpacity>
             
             </ListItem> */}
            {this.state.ppobProduct.map((data)=>(
               <ListItem note>
               <TouchableOpacity onPress={this.navi.bind(this,'TopupConfirmation',data)} style={{flexDirection:'row'}}>
                 
               <Left style={{paddingRight:wp('1%')}}>
               
                 <Image style={{ width:wp("16.5%"),height:hp('9.5'),borderRadius:wp('4%')}} source={{uri:data.imageAsBase64Text}} />
                 <Body>
            <AtiText style={styles.h1}>{data.name}</AtiText>
                 <AtiText style={styles.h2}>Rp {currencyFormatter.format(data.nominal, {
                                 code: 'IDR',
                                 symbol: '',
                                 decimal: '.',
                                 thousand: ',',
                                 precision: 2,
                             })}</AtiText>
                 <AtiText style={styles.h3}>Active period 7 Day(s)</AtiText>
               </Body>
            
               </Left>
               
               <Right>
                 <Text style={{fontWeight:'bold'}}><Icon
                         name="right"
                         style={{
                             height: 24,
                             width: 24,
                         }}>
                     </Icon></Text>
               </Right>
              
                </TouchableOpacity>
              
              </ListItem>
            ))}
          </List>
          </ScrollView>  
                                                </View>
               
        );
    }
}
const mapStateToProps = (state) => {
    const { login } = state;
    const { topup } = state;
    return {
        ...login,
        ...topup
    };
};
const mapActionToProps = () => ({
    navigate,
    ...action,
    ...topupAction
    // ...authentication,
});

export default connect(mapStateToProps, mapActionToProps())(withWebConsole(MobileTopup));
const styles = StyleSheet.create({
    heading: {
        fontWeight: 'bold',
        marginTop: hp('4.1%'),
        marginBottom: hp('0.1%'),
        marginLeft: wp('26.9%'),
        //  lineHeight: hp('2.1%'),
    },
    rowStyle:{
        color:'red'
    },
    label: {
        marginTop: hp('4.6%'),
        // lineHeight: hp('2.1%'),
        marginLeft: wp('7.2%'),
        color: "black"
    },
    input: {
        borderWidth: 1,
        borderColor: '#d6d6d6',
        borderRadius: 10,
        paddingLeft: wp('4.8%'),
        marginTop: hp('1.6%'),
        marginLeft: wp('6.9%'),
        marginRight: wp('6.9%'),
        height: hp('7.5%'),
        width: wp('86.1%'),
    },
    error: {
        borderWidth: 3,
        borderColor: 'red',
    },
    err: {
        marginTop: hp('0.8%'),
        color: 'red',
        fontSize: 14,
        marginLeft: wp('8.0%'),
    },
    numView: {
        borderRadius: 10,
        paddingLeft: wp('4.8%'),
        marginTop:hp('5.7%'),
        marginLeft: wp('6.9%'),
        marginRight: wp('6.9%'),
        height: hp('12%'),
        width: wp('87.5%'),
        paddingTop:hp('1.5%')
    },
    input1: {
        borderRadius: 10,
        borderColor: '#d6d6d6',
        borderWidth:1,
        paddingLeft: wp('4.8%'),
        marginLeft: wp('6.9%'),
        marginRight: wp('6.9%'),
        height: hp('7.5%'),
        color:"#a92930",
        fontWeight:'bold',
        fontSize:32,
        backgroundColor:"#ffffff",
        width: wp('86.1%'),
        paddingTop:hp('0%')
    },
    h1: {
      fontSize: 13,
      paddingBottom:hp('.7%'),
      color:'#000000',
      letterSpacing:0.28,
      fontWeight:'normal',
      fontFamily: 'AvenirNextLTPro-Regular',  
  },
  h2: {
    fontSize: 14,
    color: '#000000',
    letterSpacing:0.28,
    paddingBottom:hp('1%'),
    fontFamily: 'AvenirNextLTPro-Bold',  
  },h3: {
    fontSize: 10,
    paddingBottom:hp('1%'),
    color: '#ff4400',
    letterSpacing:0.2,
    fontFamily: 'AvenirNextLTPro-Regular',  
  },eData: {
    fontSize: 16,
    marginLeft: wp('6.9%'),
    color: 'red',
    letterSpacing:0.2,
    fontWeight:'bold',
    fontFamily: 'AvenirNextLTPro-Regular',  
  }
});