import React, { Component } from 'react';
import { AtiText, AtiRow, AtiCol, AtiTextInput, AtiSpinner, AtiTextInputCellPhone } from 'ati-ui-elements';
import { Content ,Picker} from 'native-base';
import axios from 'axios';
import {
    ImageBackground,
    StyleSheet,
    View,
    Image,
    AsyncStorage,
    TouchableOpacity,
} from 'react-native';
import { AtiForm } from 'ati-redux-form';
import navigate from '../../common/navigation/action';
import { withWebConsole } from 'ati-web-console-connector';
import { connect } from 'react-redux';
import * as action from '../../common/components/popup/store/popup-action';
import I18n, { Loc } from 'ati-react-native-redux-i18n';
import * as paybillAction from './store/paybills-action';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol,
    heightPercentageToDP
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/AntDesign';
class PlnNumber extends Component {
    constructor(props) {
        super(props);
        this.state = {
            plnNumber: '123456789677',
            accountDetail: [],
            productName: '',
            accountNo: '',
            textCellPhone:'',
            errorHandPhone: false,
            errorPhone: false,
            savingsAccounts:null,
            btnType:false,
            btnColor:"#b0b0b0"
        };
    }
    componentDidMount() {
        if (this.props.accountDetail.length == 0) {
         const URL = 'https://prdc-support.anabatic.com:7443/fineract-provider/api/v1/clients/131/accounts';
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
          console.log(`${JSON.stringify(response.data.savingsAccounts[0])}`);
          this.props.setAccountDetail(response.data.savingsAccounts[0]);
          this.setState({
            savingsAccounts: response.data.savingsAccounts[0],

          });
        });
        } else {
           this.setState({
                 savingsAccounts: this.props.accountDetail,
           });
         }
      }
      

  nav=(e)=>{
        
    this.props.navigate(e)
}
      validateInput=()=>{
        const numreg = /^\d{12}$/;

         if( this.state.plnNumber==""||this.state.plnNumber==null){
            this.setState({
                errorHandPhone:true,
                errorPhone:false
         })
        }
        else if(isNaN(this.state.plnNumber) || !numreg.test(this.state.plnNumber)){
            this.setState({
                errorPhone:true,
                errorHandPhone:false
               
         })
        }
        else{
            this.setState({
               errorHandPhone:false,
                errorPhone:false
        })
         this.props.setPlnNumber(this.state.plnNumber)
        //  alert(this.props.phoneNo)
         this.props.navigate('PlnConfirmation')
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

        const currencyFormatter = require('currency-formatter');
        var amtColor ="green"
        var btnColor="#a92930"
        var btnType=false;

        if(typeof this.props.accountDetail != 'undefined'){
            if(this.props.accountDetail.accountBalance<=0){
                amtColor = "red";
                btnColor="#b0b0b0";
                btnType=true;
                }else{
                amtColor = "green";
                btnColor="#a92930";
                btnType=false;
               
            }
        }
        return (
            <View style={{flex:1,backgroundColor:'#f8f6f0'}}>
            <View style={{ marginTop:hp('2%'), padding:wp('5%'), height:hp('50%')}}>
                <Loc style={styles.label} locKey="label.PayFromAccount" />
                <View style={styles.input2}>
    <TouchableOpacity style={{flexDirection:'row'}}  onPress={this.nav.bind(this, 'PlnAccountSelection')}><AtiText style={styles.text}> {this.props.accountDetail.productName} - {this.props.accountDetail.accountNo}</AtiText><AtiText style={{ paddingTop:hp('1%')}} ><Icon name='right' color="#78849e"/></AtiText></TouchableOpacity>
   
                </View>
               
                <AtiText style={{marginBottom:heightPercentageToDP('2.6%'),marginTop:heightPercentageToDP('1.6%'),color:amtColor}}>
                Available balance Rp {currencyFormatter.format(this.props.accountDetail.accountBalance, {
                code: 'IDR',
                symbol: '',
                decimal: '.',
                thousand: ',',
                precision: 2,
              })}
              
                </AtiText>
                <Loc style={styles.label} locKey="label.plnNumber" />
                <AtiTextInput textStyle={styles.input2} placeholder='12xxxxxxxxxx'
                readonly={btnType}
                type='numeric'
                maxLength={12}
                keyboardType='phone-pad'
                // keyboardType='numeric'
                value={this.state.plnNumber}
                events={{
                  onChangeText: (e) => {
                      const numreg = /^\d{12}$/;
                        if(e!==''||e!==null){
                            this.setState({
                                errorHandPhone: false
                            })
                        }  else if(e==numreg || !isNaN(e)){
                            this.setState({
                                errorPhone: false
                            })
                        }
                        this.setState({
                            plnNumber:e
                        })
                    }
                 }}
                />
                {this.state.errorHandPhone && <AtiText style={styles.err}> Field is Required</AtiText>}
                {this.state.errorPhone && <AtiText style={styles.err}> Enter Valid PLN Number</AtiText>}
                {/* <AtiTextInput textStyle={styles.input2} placeholder='08xxxxxxxxxxxx'
                type='numeric'
                maxLength={10}
                keyboardType='phone-pad'/> */}
                <TouchableOpacity disabled={btnType} style={{width:wp('80%'), backgroundColor:btnColor, height:hp("7.8%"), marginTop:hp('4%'), paddingTop:hp('2%'),  marginLeft:wp('3.8%'), borderRadius:wp('8%')}} 
                onPress={this.validateInput.bind()}
                  >
                <AtiText style={{color:'white', alignSelf:'center'}}>Next</AtiText></TouchableOpacity>
                </View>
               
                </View>
        );
    }
}
const styles= StyleSheet.create({
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
    input2: {
        flexDirection:'row',
        borderRadius: 10,
        borderColor: '#d6d6d6',
        borderWidth:1,
        paddingLeft: wp('3.5%'),
        marginTop:hp('1%'),
        height: hp('7%'),
        color:"#000000",
        fontWeight:'bold',
        fontSize:12,
        backgroundColor:"#ffffff",
        width: wp('90%'),
        paddingTop:hp('1.5%'),
    },
    label:{
        fontFamily: "AvenirNextLTPro", 
        fontSize: 14,  
        marginLeft:2,
        marginBottom:hp('0.8%'),
        color:'#000000'},
    err: {
          marginTop: hp('0.8%'),
          color: 'red',
          fontSize: 14,
          marginLeft: wp('5.0%'),
      },
    });
const mapStateToProps = (state) => {
    const { paybill  } = state;
    const { login  } = state;
    return {
        ...paybill,
        ...login
    }
}
const mapActionToProps = () => ({
    navigate,
    ...action,
    ...paybillAction,
    // ...authentication,
});
export default connect(mapStateToProps, mapActionToProps())(withWebConsole(PlnNumber));