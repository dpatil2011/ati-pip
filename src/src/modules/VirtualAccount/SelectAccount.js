import React, { Component } from 'react';
import { AtiText, AtiRow, AtiCol, AtiTextInput, AtiButton, AtiTextInputCellPhone, AtiIcon, AtiSearchBar } from 'ati-ui-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/Feather';
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
import virtualcard from '../../../assets/img/icon/virtualcard.png';
import clock from '../../../assets/img/icon/clock.png';
import search from '../../../assets/img/icon/search.png';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';

class SelectAccount extends Component {
    constructor(props) {
        super(props);
    }






    render() {

        return (
            <ScrollView>
                <View style={{ backgroundColor: '#f8f6f0', width: wp('100%'), height: hp('115%') }}>
                    <ImageBackground style={{ width: wp('89.3%'), height: hp('25%'), marginTop: hp('2%'), alignSelf: "center" }} source={virtualcard}>
                        <View style={{ flexDirection: "row", marginTop: hp('4%'), alignItems: "baseline" }}>
                            <AtiText style={{
                                fontFamily: "AvenirNextLTPro",
                                fontSize: 14,
                                fontWeight: "bold",
                                fontStyle: "normal",
                                letterSpacing: 0,
                                textAlign: "left",
                                color: "#ffffff",
                                marginLeft: wp('7%')
                            }}>Virtual Account</AtiText>
                        </View>
                        <AtiText style={{
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 22,
                            fontWeight: "bold",
                            fontStyle: "normal",
                            letterSpacing: 5.5,
                            textAlign: "left",
                            color: "#ffffff",
                            marginLeft: wp('7%'),
                            marginTop: hp('2.5%')
                        }}>0011 1022 00</AtiText>
                        <View style={{
                            backgroundColor: "#ffffff",
                            width: wp('92%'),
                            height: hp('12%'),
                            marginTop: hp('3.9%'),
                            alignSelf: "center",
                            borderRadius: 10
                        }}>
                            <View style={{ flexDirection: "row" }}>
                                <AtiText style={{
                                    fontFamily: "AvenirNextLTPro",
                                    fontSize: 11,
                                    fontWeight: "normal",
                                    fontStyle: "normal",
                                    letterSpacing: 0,
                                    textAlign: "left",
                                    color: "#b8383f",
                                    marginLeft: wp('6%'),
                                    marginTop: hp('2%')
                                }}>Destination Account</AtiText>
                                <View style={{ flexDirection: "row", marginRight: wp('5%'), marginLeft: 'auto', marginTop: hp('2%') }}>
                                    <AtiText style={{
                                        fontFamily: "AvenirNextLTPro",
                                        fontSize: 11,
                                        fontWeight: "normal",
                                        fontStyle: "normal",
                                        letterSpacing: 0,
                                        textAlign: "left",
                                        color: "#000000",
                                    }}>
                                        Change
                        </AtiText>
                                    <Icon name="right" style={{ fontSize: 8, color: "#000000", marginLeft: wp('1%'), marginTop: hp('.7%') }} />
                                </View>
                            </View>
                            <AtiText style={{
                                fontFamily: "AvenirNextLTPro",
                                fontSize: 14,
                                fontWeight: "bold",
                                fontStyle: "normal",
                                letterSpacing: 0,
                                textAlign: "left",
                                color: "#000000",
                                marginLeft: wp('6%'),
                                marginTop: hp('1%')
                            }}>Taramas - 0011 1022 1900</AtiText>
                            <AtiText style={{
                                fontFamily: "AvenirNextLTPro",
                                fontSize: 14,
                                fontWeight: "normal",
                                fontStyle: "normal",
                                letterSpacing: 0,
                                textAlign: "left",
                                color: "#000000",
                                marginLeft: wp('6%'),
                                marginTop: hp('.5%')
                            }}>Rp 9,760,000</AtiText>
                        </View>
                    </ImageBackground>
                    <AtiText style={{
                        fontFamily: "AvenirNextLTPro",
                        fontSize: 14,
                        fontWeight: "bold",
                        fontStyle: "normal",
                        letterSpacing: 0,
                        textAlign: "left",
                        color: "#000000",
                        marginLeft: wp('6%'),
                        marginTop: hp('10%')
                    }}>List of Virtual Account</AtiText>
                    <View style={{ marginTop: hp('2%'),marginBottom: hp('2%') }}>
                        <AtiSearchBar
                            style={{ borderRadius: 1, backgroundColor: '#f8f6f0', alignSelf: "center", height: hp('8.7%') }}
                            searchBar
                            rounded
                            placeholder="search"
                            itemStyle={{ backgroundColor: '#ffffff', borderRadius: 10, height: hp('7.2%'), marginLeft: wp('3%'), marginRight: wp('3%') }}
                        >
                            <Image source={search} style={{ width: wp('7%'), height: hp('4%'), marginRight: wp('4%') }} />
                        </AtiSearchBar>
                    </View>
                    <View style={{ borderRadius: 5, backgroundColor: "#ffffff", width: wp('89.9%'), height: hp('8.7%'),marginTop: hp('0.7%'), alignSelf: "center",flexDirection:"row" }}>
                    <View style={{width:wp("13.7"),height:hp("5%"),backgroundColor:"blue",alignSelf:"center",marginLeft:wp('6.8%')}}>

                    </View>
                    <AtiText style={{
                        fontFamily: "AvenirNextLTPro",
                        fontSize: 14,
                        fontWeight: "normal",
                        fontStyle: "normal",
                        lineHeight: 36,
                        letterSpacing: 0,
                        textAlign: "left",
                        color: "#000000",
                        marginTop:hp('1.8%'),
                        marginLeft:wp('10.4%')
                        
                    }}>70001 001110022000</AtiText>
                    <Icon1 name="copy" style={{
                        fontSize:25,
                        marginTop:hp('2%'),
                        marginRight:wp('7%'),
                        marginLeft:"auto",
                        }}/>
                    </View>
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

export default connect(mapStateToProps, null)(SelectAccount);