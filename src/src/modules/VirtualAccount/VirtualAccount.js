import React, { Component } from 'react';
import { AtiText, AtiRow, AtiCol, AtiTextInput, AtiButton, AtiTextInputCellPhone, AtiCheckBox, AtiFieldStatusEnum } from 'ati-ui-elements';
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
import Dash from 'react-native-dash';
import confirmation from './../../../assets/img/icon/confirmation.png';
import navigate from './../../common/navigation/action';
import * as action from './../../common/components/popup/store/popup-action';
// import * as ElectricTokenAction from './Store/ElectricityToken-action';
import * as ElectricTokenAction from './../ElectricityToken/Store/ElectricityToken-action';
import * as act from './../../modules/pre-login/store/pre-login-action';
import line from './../../../assets/img/icon/dash.png';

import { withWebConsole } from 'ati-web-console-connector';
// import * as act from './../pre-login/store/pre-login-action';


class VirtualAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    Done=()=>{
        this.props.navigate('DestinationAccount')
    }


    render() {
        return (
            <View style={{
                backgroundColor: '#f8f6f0', width: wp('100%'), height: hp('100%'),
            }}
            >
                <View style={{
                    height: hp('34.2%'), width: wp('78%'), marginTop: hp('2.4%'), marginLeft: wp('12.8%'), marginRight: wp('10.7%'), backgroundColor: '#f6ecec',
                }}
                >
                    <View style={{
                        width: wp('55%'),
                        height: hp('21%'),
                        borderRadius: 10,
                        alignSelf: 'center',
                        marginTop: hp('8%'),
                        backgroundColor: '#ffffff',
                    }}
                    >
                        <View style={{
                            width: wp('100%'),
                            height: hp('4.3%'),
                            alignSelf: 'center',
                            marginTop: hp('5%'),
                            backgroundColor: '#fff831',
                        }}
                        >
                        </View>
                        <View style={{
                            width: wp('15%'),
                            height: hp('0.6%'),
                            marginTop: hp('1.7%'),
                            marginLeft: wp('2.2%'),
                            borderRadius: 2,
                            backgroundColor: "#fff831"
                        }}>

                        </View>
                        <View style={{
                            width: wp('15%'),
                            height: hp('0.6%'),
                            marginTop: hp('1.7%'),
                            marginLeft: wp('2.2%'),
                            borderRadius: 2,
                            backgroundColor: "#fff831"
                        }}>

                        </View>
                        <View style={{
                            width: wp('14%'),
                            height: hp('3%'),
                            marginTop: hp('2%'),
                            marginRight: wp('3%'),
                            alignSelf: 'flex-end',
                            borderRadius: 2,
                            backgroundColor: "#fff831"
                        }}>

                        </View>
                    </View>

                </View>
                <View>
                    <AtiText style={{
                        fontFamily: 'AvenirNextLTPro',
                        fontSize: 16,
                        fontWeight: 'bold',
                        fontStyle: 'normal',
                        lineHeight: 22,
                        letterSpacing: 0.32,
                        textAlign: 'center',
                        color: '#000000',
                        marginTop: hp('4.1%'),
                        alignSelf: 'center',
                    }}>Create Virtual Account</AtiText>
                    <AtiText style={{
                        fontFamily: 'AvenirNextLTPro',
                        fontSize: 14,
                        fontWeight: 'normal',
                        fontStyle: 'normal',
                        lineHeight: 20,
                        letterSpacing: 0,
                        textAlign: 'center',
                        color: '#000000',

                        marginTop: hp('3.2%'),
                        marginLeft: wp('14.7%'),
                        marginRight: wp('14.5%'),
                    }}>Make it easy for each of your transactions using a Virtual Account that can be used for each transaction without using an account number.
                    </AtiText>
                    <AtiButton
                        buttonStyle={{
                            width: wp('80%'),
                            //  height: hp('6.7%'),
                            borderRadius: 62,
                            backgroundColor: '#a92930',
                            marginTop: hp('13.7%'),
                            marginLeft: wp('10.9%'),
                            height: hp('7.5%'),
                        }}

                        textStyle={{
                            paddingLeft: wp('20%'),
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 15,
                            fontWeight: "500",
                            fontStyle: "normal",
                            lineHeight: 21,
                            letterSpacing: 0,
                            textAlign: "center",
                            color: "#ffffff"
                        }}
                      onPress={this.Done}
                    >
                        Generate Virtual Account
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

export default connect(mapStateToProps, mapActionToProps())(withWebConsole(VirtualAccount));