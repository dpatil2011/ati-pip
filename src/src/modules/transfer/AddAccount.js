import React, { Component } from 'react';
import { AtiText,AtiRow,AtiCol,AtiTextInput, AtiButton } from 'ati-ui-elements';
import { Content } from 'native-base';
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  AsyncStorage,
  TouchableOpacity,
} from 'react-native';
import { AtiForm} from 'ati-redux-form';
import navigate from './../../common/navigation/action';
import { withWebConsole } from 'ati-web-console-connector';
import { connect } from 'react-redux';
import * as action from './../../common/components/popup/store/popup-action';
import I18n, { Loc } from 'ati-react-native-redux-i18n';
import * as ac from './store/Transfer-action';
import axios from 'axios';
import Icon from 'react-native-vector-icons/AntDesign';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';
class AddAccount extends Component {
  state = { 
    bank:[],
    accountNumber:'',
    newBank:[],
    bankData:[],
    
  
   }
  renderSubmit = () => {
 
}
addAccount=()=>{
this.props.navigate('Bank')
}
select=()=>{
this.postBank();
  if(this.props.newBankDetail==null){
    let a = [];
    a.push(this.props.bank.name);
    a.push(this.props.accountNumber);
    this.setState({
      newBank: a,
    })
    this.props.SetnewBankDetail(a)
  } else {
     let a = [];
     a.push(this.props.newBankDetail);
  a.push(this.props.bank.name);
  a.push(this.props.accountNumber);
  this.setState({
    newBank: a,
  })
  this.props.SetnewBankDetail(a)
  }
  // let a = [];
  // a.push(this.props.bank.name);
  // a.push(this.props.accountNumber);
  // this.setState({
  //   newBank: a,
  // })
 
  this.props.navigate('SelectAccountTransfer')

}
postBank() {
  
  var externalAccountNumber= "1400015248876";
  var externalAccountHolder= "Tom Morvollo Riddle";
  var productCode= this.props.bank.name
  var productName= this.props.bank.name
  var clientAccountNumber="0205170084";
  var postData = { clientAccountNumber,externalAccountNumber, externalAccountHolder, productCode, productName }

  const URL = 'https://prdc-support.anabatic.com:7443/fineract-provider/api/v1/mobile/clientaccount';
  // axios.get('https://prdc-support.anabatic.com:7443/fineract-provider/api/v1/savingsaccounts/1179?associations=all', {
//  console.log(this.props.userData.data);
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
  alert(JSON.stringify(response))
})
  .catch(function (response) {
      //handle error
      //alert(response);
      alert(response.response.data.defaultUserMessage);
  });
//   axios.post(URL, {
    
//     data: postData,
//     headers: {
//       'Content-Type': 'application/json',
//       Accept: 'application/json',
//       'Fineract-Platform-TenantId': 'default',
//     },
//     auth: {
//       username: 'coin',
//       password: 'coin',
//     },
//   }).then((response) => {
//     alert("1")
//     console.log("hi"+ JSON.stringify(response.data));
//     this.setState({
//       bankData: response.data.bankData,
//       //savingsId: response.data.savingsAccounts[0].id,

//     });

//     //console.log(this.state.savingsAccounts);
//    }).catch(function (response) {
//     //handle error
//     //alert(response);
//     alert(JSON.stringify(response));
// });
}
  render() {
//alert(this.props.bank.name)
    const {
      nameValidation,
      dateOfBirthValidation,
      salutationValidation,
      formID,
      onNext,
  } = this.props;
    return (
      <Content>
        <AtiForm
            formId={formID}
            destroyOnUnmount={false}
            forceUnregisterOnUnmount
            keepDirtyOnReinitialize
            // onSubmit is a Function that will be called when submit form.
            onSubmit={values => onNext(values)}
            // Rendered component that as trigered to do submit.
            submitComponent={returnOnSubmit => this.renderSubmit(returnOnSubmit)}
        >
            <View>
            <View style={{height:hp("54%"),width:wp("100%"),backgroundColor: "white",marginTop:hp("2%") }}>
           
                            <Loc style={styles.label} locKey="label.Bank Name" />

                            <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderColor: '#d6d6d6',
                    borderRadius: 10,
                    paddingLeft: wp('4.8%'),
                    marginTop: hp('1.6%'),
                    marginLeft: wp('6.9%'),
                    marginRight: wp('6.9%'),
                    height: hp('7.5%'),
                    width: wp('86.1%'),
                }}>
                   
                  <TouchableOpacity 
                  onPress={this.addAccount.bind()}
                  style={{flexDirection: 'row'}}
                  >
                  <AtiText 
                  style={{
                    alingText: 'left',
                    marginRight: 'auto'
                  }}                           
                           >{this.props.bank.name}</AtiText>
                            <Icon
                          name="right"
                          style={{
                            height: 20,
                            width: 20,
                           // resizeMode: 'stretch',
                        //    alignItems: '',
                            marginLeft: wp('80%'),
                           marginTop:hp("2%"),
                            color: "#78849e",
                          
                            
                        }}
                    >
                    </Icon>
                
                    </TouchableOpacity>
                       
                              </View>
                   
                      
                            <Loc style={styles.label} locKey="label.Account Number"/>
                     

                        <AtiTextInput style={{ marginBottom: hp('16%')}}
                            textStyle={styles.input}
                            events={{


                              onChangeText: (e) => {
                                    this.props.setAccountNumber(e)
                                
                              },
                            }}
                            ></AtiTextInput>
                               
                          
                              
                             
                           
                       
                              <AtiButton
             
              style={{backgroundColor:'#a92930',height:hp("8%"),width:wp("80%"),borderRadius:(20),marginLeft:wp("10.1%"),marginTop:hp("4%"),marginBottom:hp("4%")}}
              textStyle={{ alignSelf: 'center', marginTop: wp('0.5%'),marginLeft:wp("30%") }} onPress={this.select.bind()}
            >
              Next
                     </AtiButton>
                              
                          
          </View>  
                              </View>
                            </AtiForm>
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
  ...ac


  // ...authentication,
});
export default connect(mapStateToProps, mapActionToProps())(withWebConsole(AddAccount));