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
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol,
} from 'react-native-responsive-screen';
import Dash from 'react-native-dash';
import confirmation from './../../../assets/img/icon/confirmation.png';
import navigate from './../../common/navigation/action';
import * as action from './../../common/components/popup/store/popup-action';
import * as ElectricTokenAction from './Store/ElectricityToken-action';
import { withWebConsole } from 'ati-web-console-connector';
import * as act from './../pre-login/store/pre-login-action';




class Datapackage extends Component {
    // componentDidMount() {
    //     alert(this.props.nominalTransfer);
    // }
    onPay = () => {
       this.props.navigate('ElectricityTokenPin');
    }
    render() {       
        const currencyFormatter = require('currency-formatter');
        return (
            <View style={{
                height: hp('100%'),
                width: wp('100%'),
                backgroundColor: '#ffffff',
            }}
            >
                <AtiText style={{
                    width: wp('38.9'),
                    height: hp('3.7%'),
                    letterSpacing: 0,
                    alignSelf: 'center',
                    color: '#000000',
                    fontFamily: 'AvenirNextLTPro',
                    fontSize: 16,
                    fontWeight: 'bold',
                    fontStyle: 'normal',
                    marginTop: hp('5.7%'),

                }}
                >Purchase Summary
                </AtiText>

                <View style={{
                    flexDirection: 'row',
                    marginTop: hp('6%'),
                }}
                >
                    <AtiText
                        style={{
                            width: wp('27.2%'),
                            height: hp('3.2%'),
                            fontFamily: 'AvenirNextLTPro',
                            fontSize: 14,
                            fontWeight: 'normal',
                            fontStyle: 'normal',
                            letterSpacing: 0,
                            color: '#000000',
                            marginLeft: wp('6.8%'),

                        }}
                    >Customer Id
                    </AtiText>
                    <AtiText
                        style={{
                            width: wp('27.2%'),
                            height: hp('3.2%'),
                            fontFamily: 'AvenirNextLTPro',
                            fontSize: 14,
                            fontWeight: 'bold',
                            fontStyle: 'normal',
                            letterSpacing: 0,
                            textAlign: 'right',
                            color: '#000000',
                            marginLeft: wp('32%'),

                            marginRight: wp('6.8%'),
                        }}
                    > { this.props.customerId }
                    </AtiText>
                </View>
                <Dash
dashColor="#e6e6e6"
                    dashLength={6}
                    dashGap={4}
                    style={{
                        height: 1,
                        marginTop: hp('2%'),
                        marginLeft: wp('6.7%'),
                        marginRight: wp('6.9%'),
                        opacity: 70,
                    }}
                />
                <View style={{
                    flexDirection: 'row',
                    marginTop: hp('2.5%'),
                }}
                >
                    <AtiText
                        style={{
                            width: wp('27.2%'),
                            height: hp('3.2%'),
                            fontFamily: 'AvenirNextLTPro',
                            fontSize: 14,
                            fontWeight: 'normal',
                            fontStyle: 'normal',
                            letterSpacing: 0,
                            color: '#000000',
                            marginLeft: wp('6.8%'),

                        }}
                    >Nominal
                    </AtiText>
                    <AtiText
                        style={{
                            width: wp('35.2%'),
                            height: hp('3.2%'),
                            fontFamily: 'AvenirNextLTPro',
                            fontSize: 14,
                            fontWeight: 'bold',
                            fontStyle: 'normal',
                            letterSpacing: 0,
                            textAlign: 'right',
                            color: '#000000',
                            marginLeft: wp('28%'),

                            marginRight: wp('6.8%'),
                        }}
                    >    IDR{" "}
              {currencyFormatter.format(this.props.nominalTransfer, {
                code: 'IDR',
                symbol: '',
                decimal: '.',
                thousand: ',',
                precision: 2,
              })}
                    </AtiText>
                </View>
                <Dash
dashColor="#e6e6e6"
                    dashLength={6}
                    dashGap={4}
                    style={{
                        height: 1,
                        marginTop: hp('2%'),
                        marginLeft: wp('6.7%'),
                        marginRight: wp('6.9%'),
                        opacity: 70,
                    }}
                />
                <View style={{
                    flexDirection: 'row',
                    marginTop: hp('2.5%'),
                }}
                >
                    <AtiText
                        style={{
                            width: wp('27.2%'),
                            height: hp('3.2%'),
                            fontFamily: 'AvenirNextLTPro',
                            fontSize: 14,
                            fontWeight: 'normal',
                            fontStyle: 'normal',
                            letterSpacing: 0,
                            color: '#000000',
                            marginLeft: wp('6.8%'),

                        }}
                    >Price
                    </AtiText>
                    <AtiText
                        style={{
                            width: wp('35.2%'),
                            height: hp('3.2%'),
                            fontFamily: 'AvenirNextLTPro',
                            fontSize: 14,
                            fontWeight: 'normal',
                            fontStyle: 'normal',
                            letterSpacing: 0,
                            textAlign: 'right',
                            color: '#000000',
                            marginLeft: wp('28%'),

                            marginRight: wp('6.8%'),
                        }}
                    >IDR {" "} {currencyFormatter.format(Math.round(parseInt(this.props.nominalTransfer)+ 200), {
                code: 'IDR',
                symbol: '',
                decimal: '.',
                thousand: ',',
                precision: 2,
              })}
                    </AtiText>
                </View>
                <Dash
dashColor="#e6e6e6"
                    dashLength={6}
                    dashGap={4}
                    style={{
                        height: 1,
                        marginTop: hp('2%'),
                        marginLeft: wp('6.7%'),
                        marginRight: wp('6.9%'),

                    }}
                />
                <View style={{
                    flexDirection: 'row',
                    marginTop: hp('2.5%'),
                }}
                >
                    <AtiText
                        style={{
                            width: wp('27.2%'),
                            height: hp('3.2%'),
                            fontFamily: 'AvenirNextLTPro',
                            fontSize: 14,
                            fontWeight: 'normal',
                            fontStyle: 'normal',
                            letterSpacing: 0,
                            color: '#000000',
                            marginLeft: wp('6.8%'),

                        }}
                    >Fee
                    </AtiText>
                    <AtiText
                        style={{
                            width: wp('27.2%'),
                            height: hp('3.2%'),
                            fontFamily: 'AvenirNextLTPro',
                            fontSize: 14,
                            fontWeight: 'normal',
                            fontStyle: 'normal',
                            letterSpacing: 0,
                            textAlign: 'right',
                            color: '#000000',
                            marginLeft: wp('32%'),

                            marginRight: wp('6.8%'),
                        }}
                    >Rp 0
                    </AtiText>
                </View>
                <View style={{
                    marginTop: '26%',
                    flexDirection: 'row',
alignSelf: 'center',
                }}
                >
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
                            width: '100%', height: 1,
                        }}
                    />
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
                    flexDirection: 'row',
                    marginTop: hp('3.4%'),
                    marginBottom: hp('1.4%'),
                }}
                >
                    <AtiText
                        style={{
                            width: wp('27.2%'),
                            height: hp('3.2%'),
                            fontFamily: 'AvenirNextLTPro',
                            fontSize: 14,
                            fontWeight: 'normal',
                            fontStyle: 'normal',
                            letterSpacing: 0,
                            color: '#000000',
                            marginLeft: wp('6.8%'),
                            marginTop: hp('1.9%'),
                        }}
                    >Total Bill
                    </AtiText>
                    <AtiText
                        style={{
                            width: wp('35.2%'),
                            height: hp('3.2%'),
                            fontFamily: 'AvenirNextLTPro',
                            fontSize: 16,
                            fontWeight: 'bold',
                            fontStyle: 'normal',
                            letterSpacing: 0,
                            textAlign: 'right',
                            color: '#a92930',
                            marginLeft: wp('28%'),
                            marginTop: hp('1.9%'),
                            marginRight: wp('6.8%'),
                        }}
                    >Rp{" "} {currencyFormatter.format(Math.round(parseInt(this.props.nominalTransfer)+ 200), {
                code: 'IDR',
                symbol: '',
                decimal: '.',
                thousand: ',',
                precision: 2,
              })}
                    </AtiText>
                </View>
                <Image source={confirmation} style={{ width: wp('100%'), height: hp('2.6%') }} />
                <View style={{
                    alignContent: 'flex-end',
                    width: wp('100%'),
                    height: 667,
                    backgroundColor: '#a92930',
                }}
                >
                    <AtiButton
                    onPress = { this.onPay }
buttonStyle={{
                        width: wp('80.3%'),
                        height: hp('7.8%'),
                        borderRadius: 62,
                        backgroundColor: '#ffffff',
                        marginTop: hp('8%'),
                        marginLeft: wp('12.5%'),
                    }}
                        textStyle={{

                            color: '#a92930',
                            paddingLeft: wp('35%'),
                        }}
                    >Pay
                    
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

export default connect(mapStateToProps, mapActionToProps())(withWebConsole(Datapackage));