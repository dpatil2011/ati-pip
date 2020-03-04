import React, { Component } from 'react';
import { AtiText,AtiRow,AtiSpinner,AtiTextInput, AtiButton } from 'ati-ui-elements';
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
import ac from './store/Transfer-action';
import axios from 'axios';
import I18n, { Loc } from 'ati-react-native-redux-i18n';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/AntDesign';
class Transfer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        savingsAccounts: [],
    };
}
  renderSubmit = () => {
 
}
myAccount=()=>{
  this.props.navigate('MyAccountTransfer')
}
transaction=()=>{
  this.props.navigate('SelectAccountTransfer')
}
transfersum=()=>{
  this.props.navigate('TransferSum')
}

componentDidMount() {
  if (this.props.accountDetail == null) {
  //  { this.props.setNominalTransfer('20000'); }
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
    console.log(`hi${JSON.stringify(response.data.savingsAccounts[0])}`);
    this.props.setAccountDetail(response.data.savingsAccounts[0]);
    
    this.setState({
      savingsAccounts: response.data.savingsAccounts[0],

    });

   });
  } else {
  //   { this.props.setNominalTransfer('20000'); }
     this.setState({
      savingsAccounts: this.props.accountDetail,
  });
  
  }
}
  
  render() {
    if(this.props.accountDetail == null ){
     
      return(
          <View>
              <AtiSpinner/>
          </View>
      )
  }
  var amtColor ="green"
  if(typeof this.props.accountDetail != 'undefined'){
      if(this.props.accountDetail.accountBalance<=0){
           amtColor = "red";
      }else{
           amtColor = "green";
      }
  }

 
   
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
            <View style={{height:hp("37%"),width:wp("100%"),backgroundColor: "white" }}>
           
                            <Loc style={{marginLeft:wp("34%"),color:'black',marginTop:hp("1%")}} locKey="label.Nominal Transfer" />

                            <View style={{flexDirection:'row',   borderRadius: 10,
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
      width: wp('87.5%')}}>
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
                          
                            ></AtiTextInput>
                            </View>
                            </View>
                        <View style={{ height: hp("100%"), width: wp("100%"), backgroundColor: "white" }}>
                            <Loc style={styles.label} locKey="label.Account From" />
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
                                        > {this.props.accountDetail.shortProductName} - {this.props.accountDetail.accountNo}
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
                                color: amtColor,
                                marginLeft: wp("8%"),
                                marginTop: hp("2.2%"),
                                fontFamily: "AvenirNextLTPro",
                                fontSize: 12,
                                marginBottom: hp('4.4%')
                            }}> Available balance Rp {currencyFormatter.format(this.props.accountDetail.accountBalance, {
                                code: 'IDR',
                                symbol: '',
                                decimal: '.',
                                thousand: ',',
                                precision: 2,
                            })}</AtiText>
</View>
</View>
<View style={{ marginTop: hp('1%'),height:hp("48%"),width:wp("100%"), backgroundColor: "white" }}>
           
                
           <Loc style={styles.label} locKey="label.Transfer To" />
           <View style={{
   flexDirection: 'row',
   borderWidth: 1,
   borderColor: '#d6d6d6',
   borderRadius: 10,
   marginTop: hp('1%'),
   marginLeft: wp('6.9%'),
   marginRight: wp('6.9%'),
   height: hp('7.5%'),
   width: wp('86.1%'),
}}>
<View style={{width:wp('77.5%')}}>
 <AtiTextInput
         textStyle={{ 
           paddingLeft: wp('4.8%'),
           paddingVertical: hp('1%'),
           width:wp("77%")
         }}
           placeholder="Destination Account"
             /></View>
                             <TouchableOpacity onPress={this.transaction.bind()} style={{width:wp('5%'), flexDirection:'column'}}>

           <Icon
       name="right"
       style={{
           height: hp("7%"),
           width: wp("6%"),
           borderRadius: 20,
           color: "#78849e",
           marginTop:hp("2.5%"),
           
       }}
   >
   </Icon>
   </TouchableOpacity>
       
             </View>
             
          <Loc style={styles.label} locKey="label.Message" />
                <AtiTextInput
           textStyle={styles.input}
           placeholder="Optional"
             />
           
      
             <AtiButton

style={{backgroundColor:'#a92930',height:hp("8%"),width:wp("80%"),borderRadius:(20),marginLeft:wp("10.1%"),marginTop:hp("6%")}}
textStyle={{ alignSelf: 'center', marginTop: wp('0.5%'),marginLeft:wp("30%") }} onPress={this.transfersum.bind()}
>
Send
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
export default connect(mapStateToProps, mapActionToProps())(withWebConsole(Transfer));