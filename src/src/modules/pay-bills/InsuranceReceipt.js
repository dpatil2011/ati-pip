import React, { Component } from 'react';
import { AtiText, AtiRow, AtiCol, AtiTextInput, AtiButton, AtiTextInputCellPhone } from 'ati-ui-elements';
import { Content } from 'native-base';
import navigate from './../../common/navigation/action';
import { withWebConsole } from 'ati-web-console-connector';
import { connect } from 'react-redux';
import * as action from './../../common/components/popup/store/popup-action';

import {
    ImageBackground,
    StyleSheet,
    View,
    Image,
    ScrollView,
    AsyncStorage,
    TouchableOpacity,
} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';
import Dash from 'react-native-dash';
import receipt1 from './../../../assets/img/icon/receipt1.png';
import receipt from './../../../assets/img/icon/receipt.png';


class InsuranceReceipt extends Component {
    home=()=>{
        this.props.navigate('HomeScreen')
    }
    render() {
        return (
            <View style={{flex:1}}>
            <ScrollView  style={{height:hp('30%')}} style={{
                height: hp('100%'),
                width: wp('100%'),
                backgroundColor: "#ffffff",
            }}>
                <Image source={receipt} style={{ width: wp('15%'), height: ('13%'), alignSelf: "center", marginTop: hp('1%') }} />
                <AtiText style={{
                    letterSpacing: 0,
                    alignSelf: 'center',
                    color: "#000000",
                    fontFamily: "AvenirNextLTPro",
                    fontSize: 16,
                    fontWeight: "bold",
                    fontStyle: "normal",
                    marginTop: hp('2.4%')

                }}>Transaction Successful</AtiText>

                <View style={{
                    flexDirection: "row",
                    marginTop: hp('5%')
                }}>
                    <AtiText
                        style={{
                            
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            color: "#000000",
                            marginLeft: wp('5.6%'),

                        }}
                    >Transaction Type</AtiText>
                    <AtiText
                        style={{
                           
                            height: hp('2.3%'),
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            textAlign: "right",
                            color: "#000000",
                            marginLeft: wp('37.3%'),

                            marginRight: wp('5.1%')
                        }}
                    >BPJSKS Payment</AtiText>
                </View>
                <Dash dashColor="#f0f0f0"
                    dashLength={6}
                    dashGap={4}
                    style={styles.dash} />
                <View style={{
                    flexDirection: "row",
                    marginTop: hp('2%')
                }}>
                    <AtiText
                        style={{
                            width: wp('28.3%'),
                            height: hp('2.3%'),
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            color: "#000000",
                            marginLeft: wp('5.6%'),

                        }}
                    >Date</AtiText>
                    <AtiText
                        style={{
                            width: wp('23.7%'),
                            height: hp('2.3%'),
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            textAlign: "right",
                            color: "#000000",
                            marginLeft: wp('37.3%'),

                            marginRight: wp('5.1%')
                        }}
                    >28 Nov 2019</AtiText>
                </View>
                <Dash dashColor="#f0f0f0"
                    dashLength={6}
                    dashGap={4}
                    style={styles.dash} />
                <View style={{
                    flexDirection: "row",
                    marginTop: hp('2.4%')
                }}>
                    <AtiText
                        style={{
                            width: wp('27.5%'),
                            height: hp('2.3%'),
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            color: "#000000",
                            marginLeft: wp('5.6%'),

                        }}
                    >Reference Code</AtiText>
                    <AtiText
                        style={{
                            width: wp('19.5%'),
                            height: hp('2.3%'),
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            textAlign: "right",
                            color: "#000000",
                            marginLeft: wp('42.4%'),

                            marginRight: wp('5.1%')
                        }}
                    >123123123</AtiText>
                </View>
                <Dash dashColor="#e6e6e6"
                    dashLength={6}
                    dashGap={4}
                    style={styles.dash} />
                <View style={{
                    flexDirection: "row",
                    marginTop: hp('2.4%')
                }}>
                    <AtiText
                        style={{
                           
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            color: "#000000",
                            marginLeft: wp('5.6%'),

                        }}
                    >CustomerID</AtiText>
                    <AtiText
                        style={{
                           
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            textAlign: "right",
                            color: "#000000",
                            marginLeft: wp('31.5%'),

                            marginRight: wp('5.1%')
                        }}
                    >TARAMAS-0011 1022 900</AtiText>
                </View>
                <Dash dashColor="#e6e6e6"
                    dashLength={6}
                    dashGap={4}
                    style={styles.dash} />
                <View style={{
                    flexDirection: "row",
                    marginTop: hp('2.4%')
                }}>
                    <AtiText
                        style={{
                            width: wp('26.1%'),
                            height: hp('2.3%'),
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            color: "#000000",
                            marginRight:wp('37.3%'),
                            marginLeft: wp('5.1%'),

                        }}
                    >BPJSKS Number</AtiText>
                    <AtiText
                        style={{
                            width: wp('25.9%'),
                            height: hp('2.3%'),
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            textAlign: "right",
                            color: "#000000",
                            
                            
                            marginRight: wp('5.1%')
                        }}
                    >1011924455</AtiText>
                </View>
                <Dash dashColor="#e6e6e6"
                    dashLength={6}
                    dashGap={4}
                    style={styles.dash} />
                <View style={{
                    flexDirection: "row",
                    marginTop: hp('2.4%')
                }}>
                    <AtiText
                        style={{
                           
                            height: hp('2.3%'),
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            color: "#000000",
                            marginLeft: wp('5.1%'),

                        }}
                >Month Total</AtiText>
                    <AtiText
                        style={{
                          
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            textAlign: "right",
                            color: "#000000",
                            marginLeft: wp('57%'),

                            marginRight: wp('5.1%')
                        }}
                    >1 Months</AtiText>
                </View>
                <Dash dashColor="#e6e6e6"
                    dashLength={6}
                    dashGap={4}
                    style={styles.dash} />
                <View style={{
                    flexDirection: "row",
                    marginTop: hp('2.4%')
                }}>
                    <AtiText
                        style={{
                            
                            height: hp('2.3%'),
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            color: "#000000",
                            marginLeft: wp('5.1%'),

                        }}
                    >Period</AtiText>
                    <AtiText
                        style={{
                           
                            height: hp('2.3%'),
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            textAlign: "right",
                            color: "#000000",
                            marginLeft: wp('56%'),

                            marginRight: wp('5.1%')
                        }}
                    >November2019</AtiText>
                </View>
                <Dash dashColor="#e6e6e6"
                    dashLength={6}
                    dashGap={4}
                    style={styles.dash} />
                <View style={{
                    flexDirection: "row",
                    marginTop: hp('2.4%')
                }}>
                    <AtiText
                        style={{
                            width: wp('22.4%'),
                            height: hp('2.3%'),
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            color: "#000000",
                            marginLeft: wp('5.1%'),

                        }}
                    >Bill Payment</AtiText>
                    <AtiText
                        style={{
                          
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            textAlign: "right",
                            color: "#000000",
                            marginLeft: wp('50%'),

                            marginRight: wp('5.1%')
                        }}
                    >Rp 265,500</AtiText>
                </View>
                <Dash dashColor="#e6e6e6"
                    dashLength={6}
                    dashGap={4}
                    style={styles.dash} />
                <View style={{
                    flexDirection: "row",
                    marginTop: hp('2.4%')
                }}>
                    <AtiText
                        style={{
                            width: wp('6.1%'),
                            height: hp('2.3%'),
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            color: "#000000",
                            marginLeft: wp('5.1%'),

                        }}
                    >Fee</AtiText>
                    <AtiText
                        style={{
                            width: wp('7.7%'),
                            height: hp('2.3%'),
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            textAlign: "right",
                            color: "#000000",
                            marginLeft: wp('75.5%'),

                            marginRight: wp('5.1%')
                        }}
                    >Rp 0</AtiText>
                </View>
                <View style={{
                    marginTop: "7%",
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

                        dashColor="#f0f0f0"
                        dashLength={10}
                        dashThickness={6}
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
                    marginTop: hp('3.4%'),
                    marginBottom: hp('1.4%')
                }}>
                    <AtiText
                        style={{
                            width: wp('27.2%'),
                            height: hp('2.3%'),
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            color: "#000000",
                            marginLeft: wp('5.1%'),
                            marginTop: hp('1.9%'),
                        }}
                    >Total</AtiText>
                    <AtiText
                        style={{
                            width: wp('27.2%'),
                            height: hp('2.3%'),
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 16,
                            fontWeight: "bold",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            textAlign: "right",
                            color: "#a92930",
                            marginLeft: wp('32%'),
                            marginTop: hp('1.9%'),
                            marginRight: wp('5.1%')
                        }}
                    >Rp 265.500</AtiText>
                </View>
                </ScrollView>
                <View style={{height:hp('18%')}}>
                <Image source={receipt1} style={{ width: wp('100%'), height: hp('2.6%') }} />
                <View style={{
                    alignContent: "flex-end",
                    width: wp('100%'),
                    height: 129.5,
                    backgroundColor: "#f0f0f0"
                }}>
                    <AtiButton buttonStyle={{
                        width: wp('80%'),
                        height: hp('6.7%'),
                        borderRadius: 62,
                        backgroundColor: "#a92930",
                        marginTop: hp('4%'),
                        marginLeft: wp('12.4%')
                    }}
                        textStyle={{

                            color: "#ffffff",
                            paddingLeft: wp('35%')
                        }}
                        onPress={this.home.bind()}
                    >Done</AtiButton>
                </View>
            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    dash: {
        height: 1,
        marginTop: hp('1.9%'),
        marginLeft: wp('5.5%'),
        marginRight: wp('5.2%'),
        opacity: 70
    }

})
const mapActionToProps = () => ({
    navigate,
    ...action,
  
    // ...authentication,
  });
  export default connect(null, mapActionToProps())(withWebConsole(InsuranceReceipt));

