import React, { Component } from 'react';
import { AtiText, AtiCard, AtiRow, AtiGrid, AtiCol, AtiIcon, Ati, AtiButton } from 'ati-ui-elements';
import navigate from './../../common/navigation/action';

import { withWebConsole } from 'ati-web-console-connector';
import { connect } from 'react-redux';
import * as action from './../../common/components/popup/store/popup-action';

import {
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    ImageBackground,
} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol,
} from 'react-native-responsive-screen';

// import wifi from './../../../../../assets/img/icon/wifi.png';
// import topup from './../../../../../assets/img/icon/mobile_topup.png';
// import token_listrik from './../../../../../assets/img/icon/token_listrik.png';

import img from './../../../assets/img/icon/KartuHalo.png';
import img1 from './../../../assets/img/background/mask_group_5.png';
import img2 from './../../../assets/img/background/mask_group_10.png';

class LoanMain2 extends Component {
    navi = (e) => {
        this.props.navigate(e);
    }
    render() {
        return (
            <View style={{
                backgroundColor: '#f5f5f5',
                height: hp('100%'),
            }}
            >
                <View style={{
                    //   height: hp('30.3%'),
                    //   width: wp('90.7%'),
                    //   marginLeft: wp('4.8%'),
                    //   marginRight: wp('4.5%'),
                    //   marginTop: hp('3.6%'),
                    // backgroundColor: '#000',

                }}
                >
                    <ImageBackground
                        style={{
                            width: wp('90.7%'),
                            height: hp('30.3%'),
                            marginRight: wp('4.5%'),
                            marginLeft: wp('4.8%'),
                            marginTop: hp('3.6%'),
                        }}
                        source={img1}
                    >

                        <AtiText style={{
                            fontFamily: 'AvenirNextLTPro',
                            fontSize: 14,
                            fontWeight: 'bold',
                            fontStyle: 'normal',
                            lineHeight: 20,
                            letterSpacing: 0,
                            textAlign: 'left',
                            color: '#ffffff',
                            marginTop: hp('3.4%'),
                            marginLeft: wp('5.9%'),
                        }}
                        >Installment Loan - Employee
             </AtiText>
                        <AtiText style={{
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 26,
                            fontWeight: "bold",
                            fontStyle: "normal",
                            lineHeight: 36,
                            letterSpacing: 0,
                            textAlign: "left",
                            color: "#ffffff",
                            marginTop: hp('2.5'),
                            marginLeft: wp('5.9%'),
                        }}>Rp 1,299,000</AtiText>
                        <View style={{
                            flexDirection: 'row',
                            marginTop: hp('2%'),
                        }}>
                            <AtiText style={{
                                fontFamily: "AvenirNextLTPro",
                                fontSize: 14,
                                fontWeight: "normal",
                                fontStyle: "normal",
                                lineHeight: 20,
                                letterSpacing: 0,
                                textAlign: "left",
                                color: "#ffffff",

                                marginLeft: wp('5.9%'),
                            }}>Installment 6/10</AtiText>
                            <AtiText style={{
                                fontFamily: "AvenirNextLTPro",
                                fontSize: 14,
                                fontWeight: "normal",
                                fontStyle: "normal",
                                lineHeight: 20,
                                letterSpacing: 0,
                                textAlign: "right",
                                color: "#ffffff",
                                marginLeft: 'auto',
                                marginRight: wp('5%'),
                            }}>4 Payment</AtiText>
                        </View>
                        <View style={{
                            flexDirection: 'row'
                        }}>
                            <View style={{
                                flexDirection: 'column',
                                marginLeft: wp('5.9%'),
                            }}>
                                <AtiText style={{
                                    fontFamily: "AvenirNextLTPro",
                                    fontSize: 12,
                                    fontWeight: "normal",
                                    fontStyle: "normal",
                                    lineHeight: 18,
                                    letterSpacing: 0,
                                    textAlign: "left",
                                    color: "#000000",
                                    marginTop: hp('4%'),
                                }}>Due date</AtiText>
                                <AtiText style={{
                                    fontFamily: "AvenirNextLTPro",
                                    fontSize: 12,
                                    fontWeight: "bold",
                                    fontStyle: "normal",
                                    lineHeight: 18,
                                    letterSpacing: 0,
                                    textAlign: "left",
                                    color: "#a92930",
                                }}>20 Sep 2018</AtiText>

                            </View>
                            <AtiButton
                                // onPress={this.onPay}
                                // disabled={!this.state.checkBoxValue1}
                                buttonStyle={{
                                    marginTop: hp('4%'),
                                    borderRadius: 23,
                                    backgroundColor: "#a92930",
                                    borderColor: '#a92930',
                                    borderStyle: 'solid',
                                    borderWidth: 1,
                                    marginRight: wp('5.6%'),
                                    marginLeft: 'auto',
                                    width: wp('23.1%'),
                                    height: hp('6%'),

                                }}
                                textStyle={{

                                    paddingLeft: wp('9%'),
                                    fontFamily: "AvenirNextLTPro",
                                    fontSize: 14,
                                    fontWeight: "bold",
                                    fontStyle: "normal",
                                    lineHeight: 18,
                                    letterSpacing: 0,
                                    textAlign: "left",
                                    color: "#ffffff"
                                }}
                            >Pay
                        </AtiButton>
                            <View>

                            </View>
                        </View>
                    </ImageBackground>
                    <ImageBackground
                        style={{
                            width: wp('90.7%'),
                            height: hp('30.3%'),
                            marginRight: wp('4.5%'),
                            marginLeft: wp('4.8%'),
                            marginTop: hp('3.6%'),
                        }}
                        source={img2}
                    >

                        <AtiText style={{
                            fontFamily: 'AvenirNextLTPro',
                            fontSize: 14,
                            fontWeight: 'bold',
                            fontStyle: 'normal',
                            lineHeight: 20,
                            letterSpacing: 0,
                            textAlign: 'left',
                            color: '#ffffff',
                            marginTop: hp('3.4%'),
                            marginLeft: wp('5.9%'),
                        }}
                        >Installment Loan 
             </AtiText>
                        <AtiText style={{
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 26,
                            fontWeight: "bold",
                            fontStyle: "normal",
                            lineHeight: 36,
                            letterSpacing: 0,
                            textAlign: "left",
                            color: "#ffffff",
                            marginTop: hp('2.5'),
                            marginLeft: wp('5.9%'),
                        }}>Rp 3,339,000</AtiText>
                        <View style={{
                            flexDirection: 'row',
                            marginTop: hp('2%'),
                        }}>
                            <AtiText style={{
                                fontFamily: "AvenirNextLTPro",
                                fontSize: 14,
                                fontWeight: "normal",
                                fontStyle: "normal",
                                lineHeight: 20,
                                letterSpacing: 0,
                                textAlign: "left",
                                color: "#ffffff",

                                marginLeft: wp('5.9%'),
                            }}>Installment 9/10</AtiText>
                            <AtiText style={{
                                fontFamily: "AvenirNextLTPro",
                                fontSize: 14,
                                fontWeight: "normal",
                                fontStyle: "normal",
                                lineHeight: 20,
                                letterSpacing: 0,
                                textAlign: "right",
                                color: "#ffffff",
                                marginLeft: 'auto',
                                marginRight: wp('5%'),
                            }}>1 Payment</AtiText>
                        </View>
                        <View style={{
                            flexDirection: 'row'
                        }}>
                            <View style={{
                                flexDirection: 'column',
                                marginLeft: wp('5.9%'),
                            }}>
                                <AtiText style={{
                                    fontFamily: "AvenirNextLTPro",
                                    fontSize: 12,
                                    fontWeight: "normal",
                                    fontStyle: "normal",
                                    lineHeight: 18,
                                    letterSpacing: 0,
                                    textAlign: "left",
                                    color: "#000000",
                                    marginTop: hp('4%'),
                                }}>Due date</AtiText>
                                <AtiText style={{
                                    fontFamily: "AvenirNextLTPro",
                                    fontSize: 12,
                                    fontWeight: "bold",
                                    fontStyle: "normal",
                                    lineHeight: 18,
                                    letterSpacing: 0,
                                    textAlign: "left",
                                    color: "#a92930",
                                }}>20 Sep 2018</AtiText>

                            </View>
                            <AtiButton
                                // onPress={this.onPay}
                                // disabled={!this.state.checkBoxValue1}
                                buttonStyle={{
                                    marginTop: hp('4%'),
                                    borderRadius: 23,
                                    backgroundColor: "#a92930",
                                    borderColor: '#a92930',
                                    borderStyle: 'solid',
                                    borderWidth: 1,
                                    marginRight: wp('5.6%'),
                                    marginLeft: 'auto',
                                    width: wp('23.1%'),
                                    height: hp('6%'),

                                }}
                                textStyle={{

                                    paddingLeft: wp('9%'),
                                    fontFamily: "AvenirNextLTPro",
                                    fontSize: 14,
                                    fontWeight: "bold",
                                    fontStyle: "normal",
                                    lineHeight: 18,
                                    letterSpacing: 0,
                                    textAlign: "left",
                                    color: "#ffffff"
                                }}
                            >Pay
                        </AtiButton>
                            <View>

                            </View>
                        </View>
                    </ImageBackground>
                </View>
            </View>
        );
    }
}
const mapStateToProps = state => ({ ...state });
const mapActionToProps = () => ({
    navigate,
    ...action,
    // ...authentication,
});

export default connect(mapStateToProps, mapActionToProps())(withWebConsole(LoanMain2));

const styles = StyleSheet.create({
    picture: {
        flex: 1,
        padding: '8%',
        width: null,
        height: null,
        resizeMode: 'cover',
        backgroundColor: '#f8f8f1',
    },
    //   text: {
    //     color: 'white',
    //     fontWeight: 'bold',
    //     marginLeft: '25%',
    //     marginTop: '80%',
    //   },
});