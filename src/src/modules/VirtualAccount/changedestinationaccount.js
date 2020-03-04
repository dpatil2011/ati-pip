import React, { Component } from 'react';
import {
 AtiText, AtiRow,
    AtiCol, AtiTextInput, AtiButton, AtiTextInputCellPhone,
    AtiCheckBox, AtiFieldStatusEnum,
    AtiCard,
    AtiCardItem,
    Left,
    Right,
    AtiRadioButton,
    AtiSpinner,
 } from 'ati-ui-elements';
import { Content } from 'native-base';
import {
    ImageBackground,
    StyleSheet,
    View,
    Image,
    AsyncStorage,
    TouchableOpacity,
    ScrollView,

} from 'react-native';
import { connect } from 'react-redux';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol,
} from 'react-native-responsive-screen';
import navigate from './../../common/navigation/action';
import * as action from './../../common/components/popup/store/popup-action';
import * as ElectricTokenAction from './../ElectricityToken/Store/ElectricityToken-action';
import * as act from './../../modules/pre-login/store/pre-login-action';
import { withWebConsole } from 'ati-web-console-connector';
import axios from 'axios';

class ChangeDestinationAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            savingsAccounts: [],
            checkValue1: 'true',
            i: true,
            indexValue: '',
            checked:''
        };
    }

    componentDidMount() {
        const URL = 'https://prdc-support.anabatic.com:7443/fineract-provider/api/v1/clients/131/accounts';
        // axios.get('https://prdc-support.anabatic.com:7443/fineract-provider/api/v1/savingsaccounts/1179?associations=all', {
      //  console.log(this.props.userData.data)
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
          console.log('hi' + JSON.stringify(response.data.savingsAccounts[0].id));
          this.setState({
            savingsAccounts: response.data.savingsAccounts,
            savingsId: response.data.savingsAccounts[0].id,

          });

          console.log(this.state.savingsAccounts);
         });
      }
      select = (e) => {

      }

    render() {
        let a = [];
    if (this.state.savingsAccounts.length === 0) {
        return (
            <View style={{
                alignSelf: 'center',
                marginTop: hp('37%'),
            }}
            >
                <AtiSpinner />
            </View>
        );
    }

        return (
            <View style={{
                backgroundColor: '#f8f6f0', height: hp('100%'), width: wp('100%'),
            }}
            >
            <View>
               
                <AtiText style={{
                    marginRight: wp('5.1%'),
                     marginLeft: wp('5.9%'),
                     marginTop: hp('2.2%'),
                    fontFamily: 'AvenirNextLTPro',
                    fontSize: 14,
                    fontWeight: 'normal',
                    fontStyle: 'normal',
                    lineHeight: 20,
                    letterSpacing: 0,
                    textAlign: 'left',
                    color: '#000000',
                }}
                >Select the destination account to be used when transacting using a virtual account
                </AtiText>
            </View>
            {
                this.state.savingsAccounts.map((x, index) => {
                   // x.accountNo = '';
                  
                   a.push(0);
        const s = (e) => {
            // eslint-disable-next-line no-plusplus
            for ( let i = 0; i < a.length; i++) {
                     if (i === e) {
                       //  alert("in"+e)
                         a[i] = 1;
                        index = 1;
                     } else {
                         a[i] = 0;
                         index=0;
                     }
            }
            if (index === e) {
                index = 0;
            }
        };
                    return(
                        <View 
                        style={{  backgroundColor: '#f8f6f0', marginLeft: wp('5.1%'), marginRight: wp('5.1%'), marginTop: hp('3%'), borderRadius: 20,
                                   
                               }}>
                            <TouchableOpacity>
                                <AtiCard>
                                    <AtiCardItem>
                                        <Left>
                                            <View style={{flexDirection:'row',  backgroundColor: '#ffffff', height: hp('10.6%'), width: wp('89.9%'),}}>
                                                <View>
                                                  
                                                      <View style={{
                                                          backgroundColor:'#c6474e',
                                                          width: wp('18%'),
                                                          height: hp('8%'),
                                                           opacity: 0.53,
                                                      }}>
                                                      <View style={{
                                                           backgroundColor:'#ffffff',
                                                          width: wp('5%'),
                                                          height: hp('2.8%'),
                                                           alignSelf:'center',
                                                           borderRadius: 150,
                                                           marginTop: hp('1%')
                                                      }}>
                                                          
                                                      </View>
                                                      <AtiText style={{
                                                          fontSize: 12,
                                                          alignSelf:'center',
                                                          marginTop: hp('1%'),
                                                      }}>{x.shortProductName}</AtiText>
                                                      </View>
                                                  
                                                </View>
                                                <View style={{flexDirection:'column'}}>
                                                         <AtiText>
                                                        { x.accountNo }{'\n'}{ x.shortProductName }
                                                         </AtiText>
                                                </View>
                                                <View style={{
                                                  
                                                    marginLeft: wp('29.3%'),
                                                    marginTop: hp('3.5%'),
                                                }}>
                                                <AtiRadioButton
                                       selected={index==this.state.checked}
                                      //  label="Male"
                                        selectedColor="#c6474e"
                                        radioButtonStyle={{
                                            height: hp('15%'),
                                            width: wp('10%'),
                                        }}
                                        labelStyle={{
                                            width: wp('23%'),
                                            height: hp('10%'),
                                            fontFamily: 'AvenirNextLTPro',
                                            fontSize: 15,

                                        }}
                                        containerStyle={{
                                            height: hp('65%'),
                                            width: wp('30%'),
                                        }}
                                        events={
                                            {
                                                onPress: (e) => {
                                                   this.setState({
                                                       checked:index
                                                   })
                                                },
                                            }
                                        }
                                        status={AtiFieldStatusEnum.PRISTINE}
                                    />
                                    </View>
                                            </View>
                                        </Left>
                                    </AtiCardItem>
                                </AtiCard>
                            </TouchableOpacity>
                        </View>
                    )
                })
            }
            <View>
                
                <AtiButton
                        buttonStyle={{
                            width: wp('80%'),
                            //  height: hp('6.7%'),
                            borderRadius: 62,
                            backgroundColor: '#a92930',
                            marginTop: hp('7.5%'),
                            marginLeft: wp('10.9%'),
                            height: hp('7.5%'),
                        }}

                        textStyle={{
                            paddingLeft: wp('35%'),
                            fontFamily: 'AvenirNextLTPro',
                            fontSize: 15,
                            fontWeight: '500',
                            fontStyle: 'normal',
                            lineHeight: 21,
                            letterSpacing: 0,
                            textAlign: 'center',
                            color: '#ffffff',
                        }}
                >
                        Save
                </AtiButton>
            </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    dash: {

    },

});

const mapStateToProps = (state) => {
    const { ElectricityTokenReducer } = state;
    return {
        ...ElectricityTokenReducer,
    };
};
const mapActionToProps = () => ({
    navigate,
    ...action,
    ...act,
    ...ElectricTokenAction,

});

export default connect(mapStateToProps, mapActionToProps())(withWebConsole(ChangeDestinationAccount));