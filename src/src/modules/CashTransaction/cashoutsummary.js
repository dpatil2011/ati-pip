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
import { connect } from 'react-redux';
import navigate from '../../common/navigation/action';
import * as action from '../../common/components/popup/store/popup-action';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';
import Dash from 'react-native-dash'
import confirmation from './../../../assets/img/icon/confirmation.png';
import dash from './../../../assets/img/icon/dash.png';



class CashOutSummary extends Component {


    Next = () => {
        this.props.navigate('CashOutPin')
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
                    marginTop: hp('5.7%')

                }}>Cash Out Summary</AtiText>

                <View style={{
                    flexDirection: "row",
                    marginTop: hp('6%')
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
                    >Account From</AtiText>
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
                            marginLeft: 'auto',

                            marginRight: wp('6.8%')
                        }}
                    >0011 1022 900</AtiText>
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
                    marginTop: hp('2.5%')
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
                    >Name</AtiText>
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
                            marginLeft: 'auto',

                            marginRight: wp('6.8%')
                        }}
                    >Rahmat</AtiText>
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
                    marginTop: hp('2.5%')
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
                    >Cash Amount</AtiText>
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
                    >Rp 8,000,000</AtiText>
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
                    marginTop: hp('2.5%')
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
                    >Admin Fee</AtiText>
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
                    marginTop: hp('2.5%')
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
                    >Description</AtiText>
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

                <Image

                    source={dash}
                    style={{
                        marginTop: hp('2%'),
                        width: wp('100%'), height: hp('5%')
                    }} />

                <View style={{
                    flexDirection: "row",
                    marginTop: hp('2%'),
                    marginBottom: hp('1.4%')
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
                    >Total Bill</AtiText>
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
                            marginLeft: 'auto',
                            marginRight: wp('6.8%')
                        }}
                    >Rp 5.200</AtiText>
                </View>
                <Image source={confirmation} style={{ width: wp('100%'), height: hp('2.6%') }} />
                <View style={{
                    alignContent: "flex-end",
                    width: wp('100%'),
                    height: 667,
                    backgroundColor: "#a92930"
                }}>
                    <AtiButton buttonStyle={{
                        width: wp('80.3%'),
                        height: hp('7.8%'),
                        borderRadius: 62,
                        backgroundColor: "#ffffff",
                        marginTop: hp('7%'),
                        marginLeft: wp('12.5%')
                    }}
                        textStyle={{
                            color: "#a92930",
                            paddingLeft: wp('32%')
                        }}
                        onPress={this.Next}
                    >Confirm</AtiButton>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    dash: {

    }

})
const mapStateToProps = (state) => {
    const { dataReducer } = state
    return {
        ...dataReducer
    }
}
const mapActionToProps = () => {
    return {
        navigate,
        ...action,
    }
}
export default connect(mapStateToProps, mapActionToProps())(CashOutSummary);