import React, { Component } from 'react';
import { AtiText, AtiRow, AtiCol, AtiTextInput, AtiButton, AtiTextInputCellPhone, AtiCard } from 'ati-ui-elements';
import { Content, Left } from 'native-base';
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
import Dash from 'react-native-dash'
import navigate from '../../common/navigation/action';
import { withWebConsole } from 'ati-web-console-connector';
import { connect } from 'react-redux';
import * as action from '../../common/components/popup/store/popup-action';
import confirmation from './../../../assets/img/icon/confirmation.png';

class TopupConfirmation extends Component {
    navi(e){
        this.props.navigate(e);
    }
    render() {

        return (
        <View style={{
            height: hp('100%'),
            width: wp('100%'),
            backgroundColor: "#ffffff",}}>
        <ScrollView style={{height:hp('60%')}}>
        
            <AtiText style={{
     
                letterSpacing: 0,
                alignSelf: 'center',
                color: "#000000",
                fontFamily: "AvenirNextLTPro",
                fontSize: 16,
                fontWeight: "bold",
                fontStyle: "normal",
                marginTop: hp('5%')

            }}>Telkom Payment Confirmation</AtiText>
            <View style={{
                flexDirection: "row",
                marginTop:hp('6%')
            }}>
                <Left>
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
                >Customer ID</AtiText>
                </Left>
                <AtiText
                    style={{
                        // width: wp('27.2%'),
                        height: hp('3.2%'),
                        fontFamily: "AvenirNextLTPro",
                        fontSize: 14,
                        fontWeight: "bold",
                        fontStyle: "normal",
                        letterSpacing: 0,
                        textAlign: "right",
                        color: "#000000",
                        marginLeft: wp('32%'),
                    //    paddingRight:5,
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
                <Left>
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
                >Phone Number</AtiText>
                </Left>
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
                >081288999111</AtiText>
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
                <Left>
                <AtiText
                    style={{
                        // width: wp('27.2%'),
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
                </Left>
                <AtiText
                    style={{
                        // width: wp('27.2%'),
                        height: hp('3.2%'),
                        fontFamily: "AvenirNextLTPro",
                        fontSize: 14,
                        // fontWeight: "bold",
                        fontStyle: "normal",
                        letterSpacing: 0,
                        textAlign: "right",
                        color: "#000000",
                        marginLeft: wp('32%'),
                       
                        marginRight: wp('6.8%')
                    }}
                >REYXXXXXXXXLDI</AtiText>
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
                <Left>
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
                </Left>
                <AtiText
                    style={{
                        // width: wp('27.2%'),
                        height: hp('3.2%'),
                        fontFamily: "AvenirNextLTPro",
                        fontSize: 14,
                        // fontWeight: "bold",
                        fontStyle: "normal",
                        letterSpacing: 0,
                        textAlign: "right",
                        color: "#000000",
                        marginLeft: wp('32%'),
                        
                        marginRight: wp('6.8%')
                    }}
                >RP 300,500</AtiText>
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
                <Left>
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
                >fee</AtiText>
                </Left>
                <AtiText
                    style={{
                        // width: wp('27.2%'),
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
                >Rp 5,500</AtiText>
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
                <Left>
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
                </Left>
                <AtiText
                    style={{
                        // width: wp('27.2%'),
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
                >November 2018</AtiText>
            </View>
            <View style={{
                marginTop: "26%",
                flexDirection: "row", alignSelf: "center"
            }}>
                
                <Dash

                    dashColor="#a92930"
                    dashLength={10}
                    dashThickness={3}
                    dashGap={8}
                    style={{
                        // marginTop:hp('0.1%'),
                        width: '100%', height: 1
                    }} />
               
            </View>
            <View style={{
                flexDirection: "row",
                marginTop:hp('3.4%'),
                marginBottom:hp('1.4%')
            }}>
                <Left>
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
                </Left>
                <AtiText
                    style={{
                        // width: wp('27.2%'),
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
                >Rp 302.000</AtiText>
            </View>
            </ScrollView>
            <View style={{height:hp('40%')}}>
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
                    marginTop:hp('10%'),
                    marginLeft:wp('12.5%')
                }}
                onPress={this.navi.bind(this,'telkomReceipt')}
                    textStyle={{
                        
                        color: "#a92930",
                        paddingLeft:wp('35%')
                    }}
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
const mapStateToProps = state => ({ ...state });
const mapActionToProps = () => ({
    navigate,
    ...action,
    // ...authentication,
});
export default connect(mapStateToProps, mapActionToProps())(withWebConsole(TopupConfirmation));
