import React, { Component } from 'react';
import { AtiText, AtiRow, AtiCol, AtiTextInput, AtiButton, AtiTextInputCellPhone } from 'ati-ui-elements';
import { Content, Left, Right } from 'native-base';
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
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';
import navigate from './../../common/navigation/action';
import { withWebConsole } from 'ati-web-console-connector';
import * as action from './../../common/components/popup/store/popup-action';
import Dash from 'react-native-dash'
import receipt1 from './../../../assets/img/icon/receipt1.png';
import receipt from './../../../assets/img/icon/receipt.png';

class PlnReceipt extends Component {
    navi(e){
        this.props.navigate(e);
    }
    render() {
        return (
            <View style={{
                height: hp('100%'),
                width: wp('100%'),
                backgroundColor: "#ffffff",}}>
            <ScrollView style={{height:hp('65%'),paddingLeft:wp('6%'),paddingRight:wp('6%')}}>

                <Image source={receipt} style={{ width: wp('12%'), height: ('8%'), alignSelf: "center", marginTop: hp('2.5%') }} />
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
                    marginTop: hp('5%'),
                    
                }}>
                    <Left>
                    <AtiText style={styles.leftText}>Transaction Type</AtiText></Left>
                   <Right>
                    <AtiText style={styles.leftText}>Electricity Bill</AtiText></Right>
                </View>
                <Dash dashColor="#f0f0f0"
                    dashLength={6}
                    dashGap={4}
                    style={styles.dash} />
                <View style={{
                    flexDirection: "row",
                    marginTop: hp('2.4%')
                }}>
                <Left>
                    <AtiText style={styles.leftText}>Date</AtiText></Left>
                   <Right>
                    <AtiText style={styles.leftText}>28 Nov 2019</AtiText></Right>
                </View>
                <Dash dashColor="#e6e6e6"
                    dashLength={6}
                    dashGap={4}
                    style={styles.dash} />
                <View style={{
                    flexDirection: "row",
                    marginTop: hp('2.4%')
                }}>
                    <Left>
                    <AtiText style={styles.leftText}>Reference Code</AtiText></Left>
                   <Right>
                    <AtiText style={styles.leftText}>1213123232312</AtiText></Right>
                </View>
                <Dash dashColor="#e6e6e6"
                    dashLength={6}
                    dashGap={4}
                    style={styles.dash} />
                <View style={{
                    flexDirection: "row",
                    marginTop: hp('2.4%')
                }}>
                    <Left>
                    <AtiText style={styles.leftText}>Customer ID</AtiText></Left>
                   <Right>
                    <AtiText style={styles.leftText}>TARAMAS - 0011 1022 900</AtiText></Right>
                </View>
                <Dash dashColor="#e6e6e6"
                    dashLength={6}
                    dashGap={4}
                    style={styles.dash} />
                <View style={{
                    flexDirection: "row",
                    marginTop: hp('2.4%')
                }}>
                    <Left>
                    <AtiText style={styles.leftText}>PLN Number</AtiText></Left>
                   <Right>
                    <AtiText style={styles.leftText}>122334455999</AtiText></Right>
                </View>
                <Dash dashColor="#e6e6e6"
                    dashLength={6}
                    dashGap={4}
                    style={styles.dash} />
                <View style={{
                    flexDirection: "row",
                    marginTop: hp('2.4%')
                }}>
                    <Left>
                    <AtiText style={styles.leftText}>Tarrif / Power</AtiText></Left>
                   <Right>
                    <AtiText style={styles.leftText}>R1M/900</AtiText></Right>
                </View>
                <Dash dashColor="#e6e6e6"
                    dashLength={6}
                    dashGap={4}
                    style={styles.dash} />
                <View style={{
                    flexDirection: "row",
                    marginTop: hp('2.4%')
                }}>
                    <Left>
                    <AtiText style={styles.leftText}>Month Total</AtiText></Left>
                   <Right>
                    <AtiText style={styles.leftText}>1 Months</AtiText></Right>
                </View>
                <Dash dashColor="#e6e6e6"
                    dashLength={6}
                    dashGap={4}
                    style={styles.dash} />
                <View style={{
                    flexDirection: "row",
                    marginTop: hp('2.4%')
                }}>
                    <Left>
                    <AtiText style={styles.leftText}>Period</AtiText></Left>
                   <Right>
                    <AtiText style={styles.leftText}>November 2019</AtiText></Right>
                </View>
                <Dash dashColor="#e6e6e6"
                    dashLength={6}
                    dashGap={4}
                    style={styles.dash} />
                <View style={{
                    flexDirection: "row",
                    marginTop: hp('2.4%')
                }}>
                    <Left>
                    <AtiText style={styles.leftText}>Bill Payment</AtiText></Left>
                   <Right>
                    <AtiText style={styles.leftText}>Rp 350,000</AtiText></Right>
                    
                </View>
                <Dash dashColor="#e6e6e6"
                    dashLength={6}
                    dashGap={4}
                    style={styles.dash} />
                <View style={{
                    flexDirection: "row",
                    marginTop: hp('2.4%')
                }}>
                    <Left>
                    <AtiText style={styles.leftText}>Fee</AtiText></Left>
                   <Right>
                    <AtiText style={styles.leftText}>Rp 0</AtiText></Right>
                </View>
                <View style={{
                    marginTop: "7%",
                    flexDirection: "row", alignSelf: "center"
                }}>
                   
                    <Dash

                        dashColor="#f0f0f0"
                        dashLength={10}
                        dashThickness={6}
                        dashGap={8}
                        style={{
                            // marginTop:hp('0.1%'),
                            width: '100%', height: 1
                        }} />
                   
                </View>
                <View style={{
                    flexDirection: "row",
                    marginTop: hp('3.4%'),
                    marginBottom: hp('15%')
                }}>
                    <Left>
                    <AtiText
                        style={{
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            color: "#000000",
                            }}
                    >Total</AtiText></Left>
                    <Right>
                    <AtiText
                        style={{
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 16,
                            fontWeight: "bold",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            textAlign: "right",
                            color: "#a92930",
                            marginTop: hp('1.9%'),
                        }}
                    >Rp 350,000</AtiText></Right>
                </View>
                </ScrollView>
                <View style={{height:hp('35%')}}>
                <Image source={receipt1} style={{ width: wp('100%'), height: hp('2.6%') }} />
                <View style={{
                    alignContent: "flex-end",
                    width: wp('100%'),
                    height: hp('28%'),
                    backgroundColor: "#f0f0f0"
                }}>
                    <AtiButton 
                    onPress={this.navi.bind(this,'Utility')}
                    buttonStyle={{
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
        opacity: 70
    },
    leftText:{
        fontFamily: "AvenirNextLTPro",
        fontSize: 14,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#000000",
        textAlign: "left",
    },
    textRight:{
        fontFamily: "AvenirNextLTPro",
        fontSize: 14,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#000000",
    }

})
const mapStateToProps = state => ({ ...state });
const mapActionToProps = () => ({
    navigate,
    ...action,
    // ...authentication,
});
export default connect(mapStateToProps, mapActionToProps())(withWebConsole(PlnReceipt));
