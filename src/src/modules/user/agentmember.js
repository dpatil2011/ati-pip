import React, { Component } from 'react';
import { AtiText, AtiRow, AtiCol, AtiTextInput, AtiButton, AtiTextInputCellPhone, AtiIcon } from 'ati-ui-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import bgSrc from './../../../assets/img/background/bg.png';
import navigation from 'react-navigation';
import Dash from 'react-native-dash';
import {
    ImageBackground,
    StyleSheet,
    Image,
    AsyncStorage,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { connect } from 'react-redux';
import Storage from '../pre-login/storage';
import { View } from 'native-base';
import navigate from './../../common/navigation/action';
import * as action from './../../common/components/popup/store/popup-action';
import virtualcard from '../../../assets/img/icon/virtualcard.png';
import clock from '../../../assets/img/icon/clock.png';
import downarrow from '../../../assets/img/icon/downarrow.png';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';

class AgentMember extends Component {
    constructor(props) {
        super(props);
    }

    navi = (e) => {
        this.props.navigate(e);
    }




    render() {

        return (
            <ScrollView>
                <View style={{ backgroundColor: '#f8f6f0', width: wp('100%'), height: hp('115%') }}>
                    <ImageBackground style={{ width: wp('89.3%'), height: hp('25%'), marginTop: hp('2.5%'), marginLeft: wp('5.3%'), marginRight: wp('5.3%') }} source={virtualcard}>
                        <View style={{ flexDirection: "row", marginTop: hp('4%'), alignItems: "baseline" }}>
                            <AtiText style={{
                                fontFamily: "AvenirNextLTPro",
                                fontSize: 12,
                                fontWeight: "normal",
                                fontStyle: "normal",
                                letterSpacing: 0,
                                textAlign: "left",
                                color: "#ffffff",
                                marginLeft: wp('7%')
                            }}>Agent Account</AtiText>
                            <View style={{ flexDirection: "row", marginRight: wp('7%'), marginLeft: 'auto', }}>
                                <AtiText style={{
                                    fontFamily: "AvenirNextLTPro",
                                    fontSize: 12,
                                    fontWeight: "normal",
                                    fontStyle: "normal",
                                    letterSpacing: 0,
                                    textAlign: "left",
                                    color: "#ffffff",
                                }}>
                                    Change
                        </AtiText>
                                <Icon name="right" style={{ fontSize: 8, color: "#ffffff", marginLeft: wp('1%'), marginTop: hp('.7%') }} />
                            </View>
                        </View>
                        <AtiText style={{
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "bold",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            textAlign: "left",
                            color: "#ffffff",
                            marginLeft: wp('7%'),
                            marginTop: hp('4%')
                        }}>TARAMAS - 0011 1022 1900</AtiText>
                        <AtiText style={{
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 12,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            textAlign: "left",
                            color: "#ffffff",
                            marginLeft: wp('7%'),
                            marginTop: hp('2%')
                        }}>Rp 9,760,000</AtiText>
                    </ImageBackground>
                    <View style={{ flexDirection: "row", marginTop: hp('3.7%') }}>
                        <AtiText style={{
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "bold",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            textAlign: "left",
                            lineHeight: 20,
                            color: "#000000",
                            marginLeft: wp('7%'),
                        }}>Transaction Summary</AtiText>
                        <View style={{ marginLeft: 'auto', flexDirection: "row" }}>
                            <Image source={clock} style={{ marginTop: hp('.5%'), width: wp('3.8%'), height: hp('2.3%') }} />
                            <AtiText style={{
                                fontFamily: "AvenirNextLTPro",
                                fontSize: 14,
                                fontWeight: "normal",
                                fontStyle: "normal",
                                letterSpacing: 0,
                                textAlign: "left",
                                lineHeight: 20,
                                color: "#000000",
                                marginLeft: wp('2%'),
                            }}>Today</AtiText>
                            <Image source={downarrow} style={{ marginLeft: wp('4.5%'), marginRight: wp('7%'), marginTop: hp('.8%'), width: wp('2%'), height: hp('1%') }} />
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", marginTop: hp('3%'), marginLeft: wp('5%'), marginRight: wp('7%') }}>
                        <View style={{ backgroundColor: "#ffffff", width: wp('43.6%'), height: hp('13%'), borderRadius: 5, }}>
                            <AtiText style={{
                                fontFamily: "AvenirNextLTPro",
                                fontSize: 14,
                                fontWeight: "normal",
                                fontStyle: "normal",
                                letterSpacing: 0,
                                textAlign: "left",
                                lineHeight: 20,
                                color: "#000000",
                                marginLeft: wp('3%'),
                                marginTop: hp('2.5%')
                            }}>Total Transaction</AtiText>
                            <AtiText style={{
                                fontFamily: "AvenirNextLTPro",
                                fontSize: 14,
                                fontWeight: "bold",
                                fontStyle: "normal",
                                letterSpacing: 0,
                                textAlign: "left",
                                lineHeight: 20,
                                color: "#000000",
                                marginLeft: wp('3%'),
                                marginTop: hp('1.5%')
                            }}>19</AtiText>
                        </View>
                        <View style={{ backgroundColor: "#ffffff", width: wp('43.6%'), height: hp('13%'), borderRadius: 5, marginLeft: wp('2.6%'), }}>
                            <AtiText style={{
                                fontFamily: "AvenirNextLTPro",
                                fontSize: 14,
                                fontWeight: "normal",
                                fontStyle: "normal",
                                letterSpacing: 0,
                                textAlign: "left",
                                lineHeight: 20,
                                color: "#000000",
                                marginRight: 'auto',
                                marginTop: hp('2.5%'),
                                marginLeft: wp('3%')
                            }}>Total Commission</AtiText>
                            <AtiText style={{
                                fontFamily: "AvenirNextLTPro",
                                fontSize: 14,
                                fontWeight: "bold",
                                fontStyle: "normal",
                                letterSpacing: 0,
                                textAlign: "left",
                                lineHeight: 20,
                                color: "#000000",
                                marginRight: 'auto',
                                marginTop: hp('1.5%'),
                                marginLeft: wp('3%')
                            }}>Rp 210,000</AtiText>
                        </View>
                    </View>
                    <View style={{
                        flexDirection: "row",
                        marginTop: hp('5%')
                    }}>
                        <AtiText
                            style={{

                                fontFamily: "AvenirNextLTPro",
                                fontSize: 14,
                                fontWeight: "bold",
                                fontStyle: "normal",
                                letterSpacing: 0,
                                color: "#000000",
                                marginLeft: wp('5.6%'),

                            }}
                        >Transaction Type</AtiText>
                        <AtiText
                            style={{

                                fontFamily: "AvenirNextLTPro",
                                fontSize: 14,
                                fontWeight: "bold",
                                fontStyle: "normal",
                                letterSpacing: 0,
                                color: "#000000",
                                marginRight: wp('5.6%'),
                                marginLeft: 'auto'
                            }}
                        >Total #</AtiText>



                    </View>
                    <Dash dashColor="#D1D0CE"
                        dashLength={6}
                        dashGap={0}
                        style={styles.dash} />
                    <TouchableOpacity onPress={this.navi.bind(this,'agentTransferHistory')}>
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
                        >Transfer</AtiText>
                        <View style={{ marginRight: wp('5.1%'), marginLeft: 'auto', flexDirection: "row" }}>
                            <AtiText
                                style={{

                                    fontFamily: "AvenirNextLTPro",
                                    fontSize: 14,
                                    fontWeight: "normal",
                                    fontStyle: "normal",
                                    letterSpacing: 0,
                                    color: "#000000",
                                    marginLeft: 'auto',
                                    marginRight: wp('5.1%')
                                }}
                            >3</AtiText>
                            <Icon name="right" style={{ fontSize: 10, color: "#000000", marginLeft: wp('1%'), marginTop: hp('.7%') }} />
                        </View>
                    </View>
                    </TouchableOpacity>
                    <Dash dashColor="#D1D0CE"
                        dashLength={6}
                        dashGap={0}
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
                        >Pay Loan</AtiText>
                        <View style={{ marginRight: wp('5.1%'), marginLeft: 'auto', flexDirection: "row" }}>
                            <AtiText
                                style={{

                                    fontFamily: "AvenirNextLTPro",
                                    fontSize: 14,
                                    fontWeight: "normal",
                                    fontStyle: "normal",
                                    letterSpacing: 0,
                                    color: "#000000",
                                    marginLeft: 'auto',
                                    marginRight: wp('5.1%')
                                }}
                            >3</AtiText>
                            <Icon name="right" style={{ fontSize: 10, color: "#000000", marginLeft: wp('1%'), marginTop: hp('.7%') }} />
                        </View>
                    </View>
                    <Dash dashColor="#D1D0CE"
                        dashLength={6}
                        dashGap={0}
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
                        >Pulse Topup</AtiText>
                        <View style={{ marginRight: wp('5.1%'), marginLeft: 'auto', flexDirection: "row" }}>
                            <AtiText
                                style={{

                                    fontFamily: "AvenirNextLTPro",
                                    fontSize: 14,
                                    fontWeight: "normal",
                                    fontStyle: "normal",
                                    letterSpacing: 0,
                                    color: "#000000",
                                    marginLeft: 'auto',
                                    marginRight: wp('5.1%')
                                }}
                            >3</AtiText>
                            <Icon name="right" style={{ fontSize: 10, color: "#000000", marginLeft: wp('1%'), marginTop: hp('.7%') }} />
                        </View>
                    </View>
                    <Dash dashColor="#D1D0CE"
                        dashLength={6}
                        dashGap={0}
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
                        >BayarQu</AtiText>
                        <View style={{ marginRight: wp('5.1%'), marginLeft: 'auto', flexDirection: "row" }}>
                            <AtiText
                                style={{

                                    fontFamily: "AvenirNextLTPro",
                                    fontSize: 14,
                                    fontWeight: "normal",
                                    fontStyle: "normal",
                                    letterSpacing: 0,
                                    color: "#000000",
                                    marginLeft: 'auto',
                                    marginRight: wp('5.1%')
                                }}
                            >3</AtiText>
                            <Icon name="right" style={{ fontSize: 10, color: "#000000", marginLeft: wp('1%'), marginTop: hp('.7%') }} />
                        </View>
                    </View>
                    <Dash dashColor="#D1D0CE"
                        dashLength={6}
                        dashGap={0}
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
                        >Pay Bill</AtiText>
                        <View style={{ marginRight: wp('5.1%'), marginLeft: 'auto', flexDirection: "row" }}>
                            <AtiText
                                style={{

                                    fontFamily: "AvenirNextLTPro",
                                    fontSize: 14,
                                    fontWeight: "normal",
                                    fontStyle: "normal",
                                    letterSpacing: 0,
                                    color: "#000000",
                                    marginLeft: 'auto',
                                    marginRight: wp('5.1%')
                                }}
                            >3</AtiText>
                            <Icon name="right" style={{ fontSize: 10, color: "#000000", marginLeft: wp('1%'), marginTop: hp('.7%') }} />
                        </View>
                    </View>
                    <Dash dashColor="#D1D0CE"
                        dashLength={6}
                        dashGap={0}
                        style={styles.dash} />
                    <TouchableOpacity onPress={this.navi.bind(this,'agentCashWithdrawal')}>
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
                        >Cash Transaction</AtiText>
                        <View style={{ marginRight: wp('5.1%'), marginLeft: 'auto', flexDirection: "row" }}>
                            <AtiText
                                style={{

                                    fontFamily: "AvenirNextLTPro",
                                    fontSize: 14,
                                    fontWeight: "normal",
                                    fontStyle: "normal",
                                    letterSpacing: 0,
                                    color: "#000000",
                                    marginLeft: 'auto',
                                    marginRight: wp('5.1%')
                                }}
                            >3</AtiText>
                            <Icon name="right" style={{ fontSize: 10, color: "#000000", marginLeft: wp('1%'), marginTop: hp('.7%') }} />
                        </View>
                    </View>
                    </TouchableOpacity>
                    <Dash dashColor="#D1D0CE"
                        dashLength={6}
                        dashGap={0}
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
                        >OTP</AtiText>
                        <View style={{ marginRight: wp('5.1%'), marginLeft: 'auto', flexDirection: "row" }}>
                            <AtiText
                                style={{

                                    fontFamily: "AvenirNextLTPro",
                                    fontSize: 14,
                                    fontWeight: "normal",
                                    fontStyle: "normal",
                                    letterSpacing: 0,
                                    color: "#000000",
                                    marginLeft: 'auto',
                                    marginRight: wp('5.1%')
                                }}
                            >3</AtiText>
                            <Icon name="right" style={{ fontSize: 10, color: "#000000", marginLeft: wp('1%'), marginTop: hp('.7%') }} />
                        </View>
                    </View>
                    <Dash dashColor="#D1D0CE"
                        dashLength={6}
                        dashGap={0}
                        style={styles.dash} />
                        </View>
            </ScrollView>

        );
    }
}
const styles = StyleSheet.create({
    picture: {
        flex: 1,

        width: null,
        height: null,
        resizeMode: 'cover',
    },
    text: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 20,
        alignSelf: "center",
        marginTop: '20%',
        alignContent: "center"
    },
    dash: {
        height: 0.5,
        marginTop: hp('2%'),
        marginLeft: wp('5.5%'),
        marginRight: wp('5.2%'),
        opacity: 10
    }
});



const mapStateToProps = (state) => {
    const { login } = state;
    return {
        ...login,
    };
};
const mapActionToProps = () => ({
    navigate,
    ...action,

});

export default connect(mapStateToProps, mapActionToProps())(AgentMember);