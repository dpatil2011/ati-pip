import React, { Component } from 'react';
import { AtiText,AtiRow,AtiCol,AtiTextInput, AtiButton,AtiDatePicker, AtiCardItem,AtiCard ,AtiListItem,Left,Right
} from 'ati-ui-elements';
import { Content } from 'native-base';
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  AsyncStorage,
  
  TouchableOpacity,
} from 'react-native';
import Dialog, { SlideAnimation, DialogContent } from 'react-native-popup-dialog';
import { AtiForm} from 'ati-redux-form';
import navigate from './../../common/navigation/action';
import { withWebConsole } from 'ati-web-console-connector';
import { connect } from 'react-redux';
import * as action from './../../common/components/popup/store/popup-action';
import axios from 'axios';
import I18n, { Loc } from 'ati-react-native-redux-i18n';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/AntDesign';
import * as ac from './../transfer/store/Transfer-action';
 

class InsuranceBill extends Component {
  constructor(props) {
    super(props);
    this.state = {
        accountDetail: [],
        modalVisible: false,
        dateOfBirth: '',
        savingsAccounts:[],
       nov:'Choose months',
      

        
    };
}
  renderSubmit = () => {
 
}
myAccount=()=>{
  this.props.navigate('InsuranceAccount')
}
confirmation=()=>{
    this.props.navigate('InsuranceConfirmation')
}


ValidateDate(x) {
    const datey = new Date().getFullYear();
    const datem = new Date().getMonth() + 1;
    const dateD = new Date().getDate();
    const dateyProps = new Date(x).getFullYear();
    const dateDProps = new Date(x).getDate();
    const dateprops = new Date(x).getMonth();
    var month_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const date = `${datey}-${datem}-${dateD}`;
    const newDate1 = `${dateDProps} ${month_names[dateprops]} ${dateyProps}`;
}
componentDidMount() {
    if (this.props.accountDetail == "") {
      //alert("jk")
    const URL = 'https://prdc-support.anabatic.com:7443/fineract-provider/api/v1/clients/131/accounts';
    // axios.get('https://prdc-support.anabatic.com:7443/fineract-provider/api/v1/savingsaccounts/1179?associations=all', {
  //  console.log(this.props.userData.data);
    axios.get(URL, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Fineract-Platform-TenantId': '000000',
      },
      auth: {
        username: 'user84',
        password: 'coin',
      },
    }).then((response) => {
  
      console.log(`hi${JSON.stringify(response.data.savingsAccounts[0].id)}`);
     
      this.setState({
        savingsAccounts: response.data.savingsAccounts[0],
      });
  
      console.log(this.state.savingsAccounts);
     });
    } else {
      
       this.setState({
        savingsAccounts: this.props.accountDetail,
    });
    }
  }
  
  render() {
 
    const {
      nameValidation,
      dateOfBirthValidation,
      salutationValidation,
      formID,
      onNext,
  } = this.props;
  const currencyFormatter = require('currency-formatter');
 
  let x;
    return (
      <Content style={styles.rowStyle1}>
               
<View style={styles.container}>

  <Dialog
    visible={this.state.modalVisible}
    dialogAnimation={new SlideAnimation({
      slideFrom: 'bottom',
     
    })}
    dialogStyle={{
      borderRadius: 0,
      backgroundColor: "#ffffff",
    marginTop:hp("60%"),
      width: wp('100%'),
      flex:1,
     
  }}
  >
    
    <DialogContent
    style={{
                            backgroundColor: "#ffffff",
                            width: wp('100%'),
                            // marginBottom: hp('40%'),
                            //   borderRadius: 15,
                            flex: 1,
                            
                        }}>
                          <View style={{width:wp("100%")}}>
                          <AtiCard
                   style={{ marginLeft:wp("-4.5%"),width: wp('100%'), height: hp('7%')}}
                  >
                  <AtiCardItem  bordered
                    style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8, borderBottomLeftRadius: 8, borderBottomRightRadius: 8 }}
                    >
                         <View style={{flexDirection:"row",marginTop:hp("-1.8%")}}>
            
                           <Left style={{flexDirection:'row'}}>
                           <TouchableOpacity>
                      <Icon style={{marginTop:hp("2%"),marginLeft:wp("3%")}} name="down" size={15} color="#000000"></Icon>
                      </TouchableOpacity>
                      <TouchableOpacity>
                           <Icon style={{marginTop:hp("2%"),marginLeft:wp("3%")}} name="up" size={15} color="#000000" />
                           </TouchableOpacity>
                          </Left>
                        
                               
                          <AtiText onPress={()=>{
                                 this.setState({
                                  modalVisible:false,
                                  nov:"Choose months"
                                
                                })
                               }

                               } style={{marginRight:wp("5%"),textAlign:'right',marginTop:hp("2%"),fontWeight:"bold"}}>Clear</AtiText>
                          <AtiText style={{marginRight:wp("10%"),textAlign:'right',marginTop:hp("2%"),fontWeight:"bold"}}>Done</AtiText>
                        
                          </View>
                          </AtiCardItem>
                          </AtiCard>
                          <TouchableOpacity  onPress={()=>{
                                 this.setState({
                                  modalVisible:false,
                                  nov:"November 2019"
                                })
                               }
                               }>
                          <AtiText  style={{marginLeft:wp("25%"),marginTop:hp("4%")}}>November           2019</AtiText>
                          </TouchableOpacity >
                          <TouchableOpacity  onPress={()=>{
                                 this.setState({
                                  modalVisible:false,
                                  nov:"December 2020"
                                })
                               }
                               }>
                          <AtiText  style={{marginLeft:wp("25%"),marginTop:hp("2%")}}>December           2020</AtiText>
                         </TouchableOpacity>
                          <TouchableOpacity  onPress={()=>{
                                 this.setState({
                                   modalVisible:false,
                                   nov:"January 2021"
                                 })
                                }
                                }>
                          <AtiText  style={{marginLeft:wp("25%"),marginTop:hp("2%")}}>January               2021</AtiText>
                         </TouchableOpacity>
                          <TouchableOpacity  onPress={()=>{
                                 this.setState({
                                   modalVisible:false,
                                   nov:"Feburary 2022"
                                 })
                                }
                                }>
                          <AtiText style={{marginLeft:wp("25%"),marginTop:hp("2%")}}>Feburary              2022</AtiText>
                          </TouchableOpacity>
                          </View>
   </DialogContent>
 </Dialog>
 </View>
        
                 
    <View style={{height:hp("100%"),width:wp("100%"),backgroundColor: "#f0f0f0" }}>
                            <Loc style={styles.label} locKey="label.Pay From Account" />
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingLeft: wp('4.8%'),
                                marginLeft: wp('6.9%'),
                                marginRight: wp('6.9%'),
                                marginTop: hp('1.9%'),
                                height: hp('7.5%'),
                                width: wp('86.1%'),
                                borderRadius: 10,
                                backgroundColor: '#ffffff',
                                borderStyle: 'solid',
                                borderWidth: 1,
                                borderColor: '#d6d6d6',

                            }}
                            >
                                <TouchableOpacity onPress={this.myAccount.bind()}>
                                    <View style={{ flexDirection: 'row' }}>

                                        <AtiText
                                            style={{
                                                marginRight: wp('35%'),
                                                marginTop: hp('1%'),
                                                fontFamily: 'AvenirNextLTPro',
                                                fontSize: 14,
                                                fontWeight: 'bold',
                                                fontStyle: 'normal',
                                                lineHeight: 20,
                                                letterSpacing: 0.28,
                                                textAlign: 'left',
                                                color: '#000000',
                                                // paddingBottom: '10%',
                                            }}
                                        > {this.state.savingsAccounts.shortProductName} - {this.state.savingsAccounts.accountNo}
                                        </AtiText>
                                        <Icon
                                            name="right"
                                            style={{
                                                height: 24,
                                                width: 24,
                                                resizeMode: 'stretch',
                                                alignItems: 'center',
                                                marginTop: 12,
                                                color: '#78849e',
                                            }}
                                        />
                                    </View>
                                </TouchableOpacity>

                            </View>
                            <AtiText style={{
                                color: '#008211',
                                marginLeft: wp("8%"),
                                marginTop: hp("2.2%"),
                                fontFamily: "AvenirNextLTPro",
                                fontSize: 12,
                                marginBottom: hp('4.4%')
                            }}> Available balance Rp {currencyFormatter.format(this.state.savingsAccounts.accountBalance, {
                                code: 'IDR',
                                symbol: '',
                                decimal: '.',
                                thousand: ',',
                                precision: 2,
                            })}</AtiText>
 <Loc style={styles.label} locKey="label.BPJSKS Number"/>
    

                     <AtiTextInput
                         textStyle={styles.input}

                         placeholder="101192xxxx"
                         keyboardType="numeric"
                         ></AtiTextInput>
                        

                            <Loc style={styles.label} locKey="label.Pay Until" />
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingLeft: wp('4.8%'),
                                marginLeft: wp('6.9%'),
                                marginRight: wp('6.9%'),
                                marginTop: hp('1.9%'),
                                height: hp('7.5%'),
                                width: wp('86.1%'),
                                borderRadius: 10,
                                backgroundColor: '#ffffff',
                                borderStyle: 'solid',
                                borderWidth: 1,
                                borderColor: '#d6d6d6',

                            }}
                            >
                                <TouchableOpacity onPress={()=>{
                                 this.setState({
                                   modalVisible:true,
                                   
                                 })
                                }
                                }>
                                    <View style={{ flexDirection: 'row' }}>

                                       
                              <AtiText style={{  marginRight: wp('45%'),
                                                marginTop: hp('1%'),
                                                fontFamily: 'AvenirNextLTPro',
                                                fontSize: 14,
                                                fontWeight: 'bold',
                                                fontStyle: 'normal',
                                                lineHeight: 20,
                                                letterSpacing: 0.28,
                                                textAlign: 'left',
                                                color: '#000000',}}>{this.state.nov}</AtiText>                        
                                       
                                        <Icon
                                            name="right"
                                            style={{
                                                height: 24,
                                                width: 24,
                                                resizeMode: 'stretch',
                                                alignItems: 'center',
                                                marginTop: 12,
                                                color: '#78849e',
                                            }}
                                        />
                                    </View>
                                </TouchableOpacity>

                           </View>
           
      
             <AtiButton

style={{backgroundColor:'#a92930',height:hp("8%"),width:wp("80%"),borderRadius:(20),marginLeft:wp("10.1%"),marginTop:hp("6%")}}
textStyle={{ alignSelf: 'center', marginTop: wp('0.5%'),marginLeft:wp("30%") }} onPress={this.confirmation.bind()}
>
Next    </AtiButton>
         
</View>
      </Content>
    );
  }
}
const styles = StyleSheet.create({
  picture: {
    flex: 1,

    width: null,
    height: null,
    resizeMode: 'cover',
  },
  text: {
    color: '#ffffff',
    fontWeight: 'bold',
    marginLeft: '25%',
    marginTop: '80%',
  },
    heading: {
        fontWeight: 'bold',
        marginTop: hp('4.1%'),
        marginBottom: hp('0.1%'),
        marginLeft: wp('26.9%'),
        //  lineHeight: hp('2.1%'),
    },
    label: {
        marginTop: hp('1.6%'),
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
        backgroundColor: '#ffffff',
       
    },
    input1: {
      borderRadius: 10,
      borderColor: '#d6d6d6',
      paddingLeft: wp('4.8%'),
      marginTop: hp('1.6%'),
      marginLeft: wp('6.9%'),
      marginRight: wp('6.9%'),
      height: hp('10%'),
      color:"#a92930",
      fontWeight:'bold',
      fontSize:23,
      backgroundColor:"#f8f6f0",
      width: wp('87.5%'),
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
});
const mapStateToProps = (state) => {
  const { transferreducer } = state;
  return {
      ...transferreducer,
  };
};

const mapActionToProps = () => ({
  navigate,
  ...action,
  ...ac,
  

  // ...authentication,
});
export default connect(mapStateToProps, mapActionToProps())(withWebConsole(InsuranceBill));