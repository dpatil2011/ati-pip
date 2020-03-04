import React, { Component } from 'react';
import { AtiText, AtiRow, AtiCol, AtiTextInput, AtiButton, AtiTextInputCellPhone } from 'ati-ui-elements';
import {
    ImageBackground,
    StyleSheet,
    View,
    Image,
    ScrollView,
    AsyncStorage,
    TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import navigate from './../../common/navigation/action';
import * as action from './../../common/components/popup/store/popup-action';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';
import Dash from 'react-native-dash'
import receipt1 from './../../../assets/img/icon/receipt1.png';
import receipt from './../../../assets/img/icon/receipt.png';



class Receipt extends Component {

    Done=()=>{
        this.props.navigate('MainScreen')
    }
    render() {
        return (
            <ScrollView>
            <View style={{
                height: hp('100%'),
                width: wp('100%'),
                backgroundColor: "#ffffff",
            }}>
                <Image source={receipt} style={{ width: wp('14%'), height: ('10%'), alignSelf: "center", marginTop: hp('2.5%') }} />
                <AtiText style={{
                    width: wp('45.9'),
                    height: hp('2.7%'),
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
                            width: wp('28.3%'),
                            height: hp('3%'),
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
                            width: wp('23.7%'),
                            height: hp('3%'),
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            alignItems:'flex-end',
                            color: "#000000",
                            alignContent:"flex-end",
                            marginLeft:'auto',
                            marginRight: wp('5.1%')
                        }}
                    >Data Package</AtiText>
                    
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
                            height: hp('3%'),
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
                            height: hp('3%'),
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
                            width: wp('8%'),
                            height: hp('3%'),
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
                            width: wp('42.7%'),
                            height: hp('3%'),
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            textAlign: "right",
                            color: "#000000",
                            marginLeft: wp('38.7%'),

                            marginRight: wp('5.1%')
                        }}
                    >15 augu 2019 - 21:30 WIB</AtiText>
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
                            height: hp('3%'),
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            color: "#000000",
                            marginRight:wp('37.3%'),
                            marginLeft: wp('5.1%'),

                        }}
                    >Phone Number</AtiText>
                    <AtiText
                        style={{
                            width: wp('25.9%'),
                            height: hp('3%'),
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            textAlign: "right",
                            color: "#000000",
                            
                            
                            marginRight: wp('5.1%')
                        }}
                    >9876543210</AtiText>
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
                            width: wp('14.1%'),
                            height: hp('3%'),
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            color: "#000000",
                            marginLeft: wp('5.1%'),

                        }}
                    >Provider</AtiText>
                    <AtiText
                        style={{
                            width: wp('4.3%'),
                            height: hp('3%'),
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            textAlign: "right",
                            color: "#000000",
                            marginLeft: wp('70.9.%'),

                            marginRight: wp('5.1%')
                        }}
                    >XL</AtiText>
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
                            width: wp('14.4%'),
                            height: hp('3%'),
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            color: "#000000",
                            marginLeft: wp('5.1%'),

                        }}
                    >Nominal</AtiText>
                    <AtiText
                        style={{
                            width: wp('15.2%'),
                            height: hp('3%'),
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            textAlign: "right",
                            color: "#000000",
                            marginLeft: wp('59.7%'),

                            marginRight: wp('5.1%')
                        }}
                    >Rp 5,000</AtiText>
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
                            height: hp('3%'),
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            color: "#000000",
                            marginLeft: wp('5.1%'),

                        }}
                    >Product Price</AtiText>
                    <AtiText
                        style={{
                            width: wp('15.2%'),
                            height: hp('3%'),
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            textAlign: "right",
                            color: "#000000",
                            marginLeft: wp('51.7%'),

                            marginRight: wp('5.1%')
                        }}
                    >Rp 5,200</AtiText>
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
                            height: hp('3%'),
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
                            height: hp('3%'),
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
                            height: hp('3%'),
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            color: "#000000",
                            marginLeft: wp('5.1%'),
                            marginTop: hp('1.9%'),
                        }}
                    >Total Bill</AtiText>
                    <AtiText
                        style={{
                            width: wp('27.2%'),
                            height: hp('3%'),
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
                    >Rp 5.200</AtiText>
                </View>
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
                        onPress={this.Done}
                    >Done</AtiButton>
                </View>
            </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    dash: {
        height: 1,
        marginTop: hp('1%'),
        marginLeft: wp('5.5%'),
        marginRight: wp('5.2%'),
        opacity: 70
    }

})
const mapActionToProps=()=>{
    return{
        navigate,
        ...action
    }
}

export default connect(null,mapActionToProps())(Receipt);