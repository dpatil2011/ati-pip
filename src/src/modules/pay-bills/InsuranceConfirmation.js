import React, { Component } from 'react';
import { AtiText, AtiRow, AtiCol, AtiTextInput, AtiButton, AtiTextInputCellPhone } from 'ati-ui-elements';
import { Content } from 'native-base';
import {
    ImageBackground,
    StyleSheet,
    View,
    Image,
    AsyncStorage,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import navigate from './../../common/navigation/action';
import { withWebConsole } from 'ati-web-console-connector';
import * as action from './../../common/components/popup/store/popup-action';

import { connect } from 'react-redux';import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';
import Dash from 'react-native-dash';

import confirmation from './../../../assets/img/icon/confirmation.png';



class InsuranceConfirmation extends Component {
    inPin=()=>{
        this.props.navigate('InsurancePin')
    }
    render() {
        return (
            <View style={{flex:1}}>
            <ScrollView  style={{height:hp('30%')}} style={{
                height: hp('100%'),
                width: wp('100%'),
                backgroundColor: "#ffffff",
            }}>
                <View flexDirection='row'>
                <AtiText style={{
                   
                    height: hp('3.7%'),
                    letterSpacing: 0,
                   marginLeft:wp("23%"),
                    color: "#000000",
                    fontFamily: "AvenirNextLTPro",
                    fontSize: 16,
                    fontWeight: "bold",
                    fontStyle: "normal",
                    marginTop: hp('5.7%')

                }}>BPJSKS Payment Confirmation</AtiText>
</View>
                <View style={{
                    flexDirection: "row",
                    marginTop:hp('6%')
                }}>
                    <AtiText
                        style={{
                           
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            color: "#000000",
                            marginLeft: wp('6.8%'),
                           
                        }}
                    >Customer ID</AtiText>
                    <AtiText
                        style={{
                        
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "bold",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            textAlign: "right",
                            color: "#000000",
                            marginLeft: wp('26%'),
                           
                            marginRight: wp('6.8%')
                        }}
                    >TARAMAS-0011 1022 900</AtiText>
                </View>
                <Dash dashColor="#e6e6e6"
                    dashLength={6}
                    dashGap={4}
                    style={{
                        height: 1,
                        marginTop: hp('2%'),
                        marginLeft: wp('6.7%'),
                        marginRight: wp('6.9%'),
                        opacity: 70
                    }} />
                <View style={{
                    flexDirection: "row",
                    marginTop:hp('2.5%')
                }}>
                    <AtiText
                        style={{
                            width: wp('27.2%'),
                            height: hp('3.2%'),
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            color: "#000000",
                            marginLeft: wp('6.8%'),
                            
                        }}
                    >BPJSKS Number</AtiText>
                    <AtiText
                        style={{
                            width: wp('27.2%'),
                            height: hp('3.2%'),
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "bold",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            textAlign: "right",
                            color: "#000000",
                            marginLeft: wp('32%'),
                            
                            marginRight: wp('6.8%')
                        }}
                    >1011924455</AtiText>
                </View>
                <Dash dashColor="#e6e6e6"
                    dashLength={6}
                    dashGap={4}
                    style={{
                        height: 1,
                        marginTop: hp('2%'),
                        marginLeft: wp('6.7%'),
                        marginRight: wp('6.9%'),
                        opacity: 70
                    }} />
                <View style={{
                    flexDirection: "row",
                    marginTop:hp('2.5%')
                }}>
                    <AtiText
                        style={{
                            width: wp('27.2%'),
                            height: hp('3.2%'),
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            color: "#000000",
                            marginLeft: wp('6.8%'),
                           
                        }}
                    >Bill Sheet</AtiText>
                    <AtiText
                        style={{
                            width: wp('27.2%'),
                            height: hp('3.2%'),
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            textAlign: "right",
                            color: "#000000",
                            marginLeft: wp('32%'),
                            
                            marginRight: wp('6.8%')
                        }}
                    >1 Months</AtiText>
                </View>
                <Dash dashColor="#e6e6e6"
                    dashLength={6}
                    dashGap={4}
                    style={{
                        height: 1,
                        marginTop: hp('2%'),
                        marginLeft: wp('6.7%'),
                        marginRight: wp('6.9%'),
                        
                    }} />
                <View style={{
                    flexDirection: "row",
                    marginTop:hp('2.5%')
                }}>
                    <AtiText
                        style={{
                            width: wp('27.2%'),
                            height: hp('3.2%'),
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            color: "#000000",
                            marginLeft: wp('6.8%'),
                           
                        }}
                    >Period</AtiText>
                    <AtiText
                        style={{
                            width: wp('27.2%'),
                            height: hp('3.2%'),
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            textAlign: "right",
                            color: "#000000",
                            marginLeft: wp('32%'),
                            
                            marginRight: wp('6.8%')
                        }}
                    >November 2019</AtiText>
                </View>
                <Dash dashColor="#e6e6e6"
                    dashLength={6}
                    dashGap={4}
                    style={{
                        height: 1,
                        marginTop: hp('2%'),
                        marginLeft: wp('6.7%'),
                        marginRight: wp('6.9%'),
                        
                    }} />
                <View style={{
                    flexDirection: "row",
                    marginTop:hp('2.5%')
                }}>
                    <AtiText
                        style={{
                            width: wp('27.2%'),
                            height: hp('3.2%'),
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            color: "#000000",
                            marginLeft: wp('6.8%'),
                           
                        }}
                    >Bill Payment</AtiText>
                    <AtiText
                        style={{
                            width: wp('27.2%'),
                            height: hp('3.2%'),
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            textAlign: "right",
                            color: "#000000",
                            marginLeft: wp('32%'),
                            
                            marginRight: wp('6.8%')
                        }}
                    >Rp 265,500</AtiText>
                </View>
                <Dash dashColor="#e6e6e6"
                    dashLength={6}
                    dashGap={4}
                    style={{
                        height: 1,
                        marginTop: hp('2%'),
                        marginLeft: wp('6.7%'),
                        marginRight: wp('6.9%'),
                        
                    }} />
                <View style={{
                    flexDirection: "row",
                    marginTop:hp('2.5%')
                }}>
                    <AtiText
                        style={{
                            width: wp('27.2%'),
                            height: hp('3.2%'),
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            color: "#000000",
                            marginLeft: wp('6.8%'),
                           
                        }}
                    >Fee</AtiText>
                    <AtiText
                        style={{
                            width: wp('27.2%'),
                            height: hp('3.2%'),
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            textAlign: "right",
                            color: "#000000",
                            marginLeft: wp('32%'),
                            
                            marginRight: wp('6.8%')
                        }}
                    >Rp 0</AtiText>
                </View>
                <View style={{
                    marginTop: "20%",
                    flexDirection: "row", alignSelf: "center"
                }}>
                    {/* <Dash
                        dashColor="#a92930"
                        dashThickness={10}
                        dashStyle={{
                            borderRadius: 100, overflow: 'hidden'
                        }}
                        style={{
                            width: 6,
                            height: 11.8,
                            alignSelf: 'auto'
                        }}
                    /> */}
                    <Dash

                        dashColor="#a92930"
                        dashLength={10}
                        dashThickness={3}
                        dashGap={8}
                        style={{
                            // marginTop:hp('0.1%'),
                            width: '100%', height: 1
                        }} />
                    {/* <Dash
                        dashColor="#a92930"
                        dashThickness={10}
                        dashStyle={{
                            borderRadius: 100, overflow: 'hidden'
                        }}
                        style={{
                            width: 6,
                            height: 11.8,
                            alignSelf: 'auto',
                            marginBottom:'.5%'
                        }}
                    /> */}
                </View>
                <View style={{
                    flexDirection: "row",
                    marginTop:hp('3.4%'),
                    marginBottom:hp('1.4%')
                }}>
                    <AtiText
                        style={{
                            width: wp('27.2%'),
                            height: hp('3.2%'),
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            color: "#000000",
                            marginLeft: wp('6.8%'),
                            marginTop: hp('1.9%'),
                        }}
                    >Total</AtiText>
                    <AtiText
                        style={{
                            width: wp('27.2%'),
                            height: hp('3.2%'),
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 16,
                            fontWeight: "bold",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            textAlign: "right",
                            color: "#a92930",
                            marginLeft: wp('32%'),
                            marginTop: hp('1.9%'),
                            marginRight: wp('6.8%')
                        }}
                    >Rp 265.500</AtiText>
                </View>
                </ScrollView>
                <View style={{height:hp('20%')}}>
                <Image source={confirmation} style={{ width: wp('100%'), height: hp('2.6%') }} />
                <View style={{
                    alignContent:"flex-end",
                    width: wp('100%'),
                    height: 667,
                    backgroundColor: "#a92930"
                }}>
                    <AtiButton buttonStyle={{
                        width: wp('80.3%'),
                        height: hp('7.8%'),
                        borderRadius: 62,
                        backgroundColor: "#ffffff",
                        marginTop:hp('8%'),
                        marginLeft:wp('12.5%')
                    }}
                        textStyle={{
                            
                            color: "#a92930",
                            paddingLeft:wp('35%')
                        }} onPress={this.inPin.bind()}
                    >Pay</AtiButton>
                </View>
            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    dash:{

    }

})
const mapActionToProps=()=>{
    return{
        navigate,
        ...action
    }
}

export default connect(null,mapActionToProps())(withWebConsole(InsuranceConfirmation))
