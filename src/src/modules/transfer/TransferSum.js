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
import Dash from 'react-native-dash'
import confirmation from './../../../assets/img/icon/confirmation.png';


class TransferSum extends Component {
  transferReceipt=()=>{
    this.props.navigate('Pin')
  }
    render() {
        return (
            <View style={{
                height: hp('100%'),
                width: wp('100%'),
                backgroundColor: "#ffffff",
            }}>
                <AtiText style={{
                    width: wp('38.9'),
                    height: hp('3.7%'),
                    letterSpacing: 0,
                    alignSelf: 'center',
                    color: "#000000",
                    fontFamily: "AvenirNextLTPro",
                    fontSize: 16,
                    fontWeight: "bold",
                    fontStyle: "normal",
                    marginTop: hp('2.7%')

                }}>Transfer Summary</AtiText>

                <View style={{
                    flexDirection: "row",
                    marginTop:hp('4%'), 
                    justifyContent:'space-between'
                }}><View style={{flexDirection:"column"}}>
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
                    >Send To</AtiText>
                   </View>
                   <View style={{flexDirection:'column', alignItems:'flex-end'}}>
                       <View style={{flexDirection:'row', alignItems:'flex-end'}}>
                    <AtiText
                        style={{

                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "bold",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            textAlign: "right",
                            color: "#000000",
                            marginRight:wp('6.8%')
                                                   }}
                    >HENRIETTA-VERENA
                    </AtiText>
                    </View>
                    <View style={{flexDirection:'row'}}>
                     <AtiText
                        style={{
                           
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontStyle: "normal",
                            letterSpacing: 0,
                            textAlign: "right",
                            color: "#000000",                           
                            marginRight: wp('6.8%')
                        }}
                >9876543210-TARAMAS</AtiText>
                   

                   </View>
                   </View>
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
                    marginTop:hp('4%'), 
                    justifyContent:'space-between'
                }}><View style={{flexDirection:"column"}}>
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
                    >Account From</AtiText>
                   </View>
                   <View style={{flexDirection:'column', alignItems:'flex-end'}}>
                       <View style={{flexDirection:'row', alignItems:'flex-end'}}>
                    <AtiText
                        style={{

                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "bold",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            textAlign: "right",
                            color: "#000000",
                            marginRight:wp('6.8%')
                                                   }}
                    >Austine Lione
                    </AtiText>
                    </View>
                    <View style={{flexDirection:'row'}}>
                     <AtiText
                        style={{
                           
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            
                            fontStyle: "normal",
                            letterSpacing: 0,
                            textAlign: "right",
                            color: "#000000",                           
                            marginRight: wp('6.8%')
                        }}
                >91282182183
                </AtiText>
                   

                   </View>
                   </View>
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
                    >Nominal Transfer</AtiText>
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
                    >Rp 100.000</AtiText>
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
                    >Rp 6.500</AtiText>
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
                    >Message</AtiText>
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
                    >-</AtiText>
                </View>
                <View style={{
                    marginTop: "5%",
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
                    >Rp 5.200</AtiText>
                </View>
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
                    onPress={this.transferReceipt.bind()}
                        textStyle={{
                            
                            color: "#a92930",
                            paddingLeft:wp('35%')
                        }}
                    >Correct</AtiButton>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    dash:{

    }

})
const mapActionToProps = () => ({
  navigate,
  ...action,

  // ...authentication,
});
export default connect(null, mapActionToProps())(withWebConsole(TransferSum));
