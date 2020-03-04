import React, { Component } from 'react';
import { AtiText, AtiRow, AtiCol, AtiTextInput, AtiButton, AtiTextInputCellPhone, AtiIcon, AtiAlert } from 'ati-ui-elements';
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
import border_2 from './../../../assets/img/icon/border_2.png';
import Dialog, { DialogContent, SlideAnimation, DialogTitle, DialogFooter, DialogButton, FadeAnimation, ScaleAnimation } from 'react-native-popup-dialog';

class Receipt extends Component {

    state = {
        v: false,
        visible: false,
    }

    Done = () => {
        //this.props.navigate('MainScreen')
        this.setState({
            v: true,
            visible: true,
        })

    }
    yes = () => {
        this.props.navigate('Loanhistory');
        this.setState({
            visible: false,
        })
    }
    no = () => {
        this.setState({
            visible: false,
        })
    }
    render() {
        return (
            
            <ScrollView>
                <View style={{
                    height: hp('120%'),
                    width: wp('100%'),
                    backgroundColor: "#ffffff",
                    
                }}>
                    <Dialog
                        visible={this.state.visible}
                        dialogAnimation={new SlideAnimation({
                            slideFrom: 'top',
                        })}
                        style={{
                            borderRadius: 15,
                            backgroundColor: "#ffffff",
                            height: hp('100%'),
                            width: wp('100%'),
                        }}
                    >
                        <DialogContent
                            style={{
                                backgroundColor: "#ffffff",
                                height: hp('33.9%'),
                                width: wp('85%'),
                                borderRadius: 15,
                            }}>
                            <AtiText style={{
                                fontFamily: "AvenirNextLTPro",
                                fontSize: 14,
                                fontWeight: "bold",
                                fontStyle: "normal",
                                lineHeight: 20,
                                letterSpacing: 0,
                                textAlign: "right",
                                color: "#000000",
                                marginTop: hp('5%'),
                                alignSelf: 'center',
                            }}>Cancel Loan
    </AtiText>
                            <AtiText style={{
                                fontFamily: "AvenirNextLTPro",
                                fontSize: 14,
                                fontWeight: "normal",
                                fontStyle: "normal",
                                lineHeight: 20,
                                letterSpacing: 0,
                                textAlign: "center",
                                color: "#000000",
                                marginTop: hp('2%'),
                            }}>Are you sure to cancel the loan?</AtiText>
                            <View style={{
                                flexDirection: 'row',
                            }}>
                                <AtiButton buttonStyle={{
                                    borderRadius: 80,
                                    backgroundColor: "#ffffff",
                                    borderStyle: "solid",
                                    borderWidth: 1,
                                    borderColor: "#a92930",
                                    width: wp('32%'),
                                    height: hp('7%'),
                                    marginTop: hp('9%'),
                                    marginLeft: wp('4.7%')
                                }}

                                    textStyle={{
                                        paddingLeft: wp('12%'),
                                        fontFamily: "AvenirNextLTPro",
                                        fontSize: 15,
                                        fontWeight: "500",
                                        fontStyle: "normal",
                                        lineHeight: 21,
                                        letterSpacing: 0,
                                        textAlign: "center",
                                        color: "#a92930"
                                    }}
                                    onPress={this.yes}
                                >Yes</AtiButton>
                                <AtiButton buttonStyle={{

                                    borderRadius: 80,
                                    backgroundColor: "#a92930",
                                    // borderStyle: "solid",
                                    // borderWidth: 1,
                                    // borderColor: "#a92930",
                                    width: wp('32%'),
                                    height: hp('7%'),
                                    marginTop: hp('9%'),
                                    marginLeft: wp('2.4%'),
                                }}

                                    textStyle={{
                                        paddingLeft: wp('14%'),
                                        fontFamily: "AvenirNextLTPro",
                                        fontSize: 15,
                                        fontWeight: "500",
                                        fontStyle: "normal",
                                        lineHeight: 21,
                                        letterSpacing: 0,
                                        textAlign: "center",
                                        color: "#ffffff"
                                    }}
                                    onPress={this.no}
                                >No</AtiButton>
                            </View>
                        </DialogContent>
                    </Dialog>
                    <Image source={receipt} style={{ width: wp('13.5%'), height: ('8%'), alignSelf: "center", marginTop: hp('2.5%') }} />
                    <AtiText style={{

                        letterSpacing: 0,
                        alignSelf: 'center',
                        textAlign: 'center',
                        color: "#000000",
                        fontFamily: "AvenirNextLTPro",
                        fontSize: 16,
                        fontWeight: "bold",
                        fontStyle: "normal",
                        marginTop: hp('1.5%'),


                    }}>Loan Submission Sent</AtiText>

                    <AtiText style={{
                        fontFamily: "AvenirNextLTPro",
                        fontSize: 14,
                        fontWeight: "normal",
                        fontStyle: "normal",
                        lineHeight: 20,
                        letterSpacing: 0,
                        textAlign: "center",
                        color: "#000000",
                        marginRight: wp('5.3%'),
                        marginLeft: wp('5.3%'),
                        marginTop: hp('1%'),
                    }}>Loan application is in the process of approval.
                                         After approval, we will proceed with the disbursement process.
                     Please contact our Customer Service at the Head Office branch for more information.</AtiText>
                    <View style={{
                        flexDirection: "row",
                        marginTop: hp('5%')
                    }}>
                        <AtiText
                            style={{
                                marginLeft: wp('5.6%'),
                                fontFamily: "AvenirNextLTPro",
                                fontSize: 14,
                                fontWeight: "bold",
                                fontStyle: "normal",
                                lineHeight: 20,
                                letterSpacing: 0,
                                textAlign: "center",
                                color: "#000000"

                            }}
                        >Detail Pinjaman</AtiText>
                        <AtiIcon name="ios-arrow-down"
                            style={{
                                fontSize: 20,
                                alignItems: 'flex-end',
                                color: "#000000",
                                alignContent: "flex-end",
                                marginLeft: 'auto',
                                marginRight: wp('5.1%')
                            }} />

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
                                color: "#000000",
                                marginLeft: wp('5.6%'),
                                fontFamily: "AvenirNextLTPro",
                                fontSize: 14,
                                fontWeight: "normal",
                                fontStyle: "normal",
                                lineHeight: 20,
                                letterSpacing: 0,
                                textAlign: "left",
                                color: "#000000"

                            }}
                        >Applicant</AtiText>

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
                        >Austine Lione</AtiText>

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

                                fontFamily: "AvenirNextLTPro",
                                fontSize: 14,
                                fontWeight: "normal",
                                fontStyle: "normal",
                                letterSpacing: 0,
                                color: "#000000",
                                marginLeft: wp('5.6%'),

                            }}
                        >Applicant Account Number</AtiText>
                        <AtiText
                            style={{

                                fontFamily: "AvenirNextLTPro",
                                fontSize: 14,
                                fontWeight: "normal",
                                fontStyle: "normal",
                                letterSpacing: 0,
                                textAlign: "right",
                                color: "#000000",
                                marginLeft: "auto",

                                marginRight: wp('5.1%')
                            }}
                        >9128218218</AtiText>
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
                        >Loan Amount</AtiText>
                        <AtiText
                            style={{

                                fontFamily: "AvenirNextLTPro",
                                fontSize: 14,
                                fontWeight: "normal",
                                fontStyle: "normal",
                                letterSpacing: 0,
                                textAlign: "right",
                                color: "#000000",
                                marginLeft: 'auto',
                                marginRight: wp('5.1%')
                            }}
                        >Rp 10,000,000</AtiText>
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
                                marginRight: 'auto',
                                marginLeft: wp('5.1%'),

                            }}
                        >Loan products</AtiText>
                        <AtiText
                            style={{
                                fontFamily: "AvenirNextLTPro",
                                fontSize: 14,
                                fontWeight: "normal",
                                fontStyle: "normal",
                                letterSpacing: 0,
                                textAlign: "right",
                                color: "#000000",
                                marginLeft: 'auto',
                                marginRight: wp('5.1%')
                            }}
                        >Installment loan -{'\n'} Employee</AtiText>
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
                                marginLeft: wp('5.1%'),

                            }}
                        >Interest</AtiText>
                        <AtiText
                            style={{
                                fontFamily: "AvenirNextLTPro",
                                fontSize: 14,
                                fontWeight: "normal",
                                fontStyle: "normal",
                                letterSpacing: 0,
                                textAlign: "right",
                                color: "#000000",
                                marginLeft: 'auto',
                                marginRight: wp('5.1%')
                            }}
                        >14% / Year</AtiText>
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
                                marginLeft: wp('5.1%'),

                            }}
                        >Tenor</AtiText>
                        <AtiText
                            style={{
                                fontFamily: "AvenirNextLTPro",
                                fontSize: 14,
                                fontWeight: "normal",
                                fontStyle: "normal",
                                letterSpacing: 0,
                                textAlign: "right",
                                color: "#000000",
                                marginLeft: 'auto',

                                marginRight: wp('5.1%')
                            }}
                        >5 Months</AtiText>
                    </View>
                    <Image source={border_2} style={{ width: wp('100%'), height: hp('4%'), marginTop: hp('2%') }} />
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
                                marginLeft: wp('5.1%'),

                            }}
                        >Installment Estimates</AtiText>
                        <AtiText
                            style={{
                                marginLeft: 'auto',
                                marginRight: wp('5.1%'),
                                fontFamily: "AvenirNextLTPro",
                                fontSize: 18,
                                fontWeight: "bold",
                                fontStyle: "normal",
                                lineHeight: 24,
                                letterSpacing: 0,
                                textAlign: "right",
                                color: "#a92930",
                            }}
                        >Rp 2,166.667/Month</AtiText>
                    </View>
                    <Image source={receipt1} style={{ width: wp('100%'), height: hp('2.6%'), marginTop: hp('1.3%') }} />
                    <View style={{
                        alignContent: "flex-end",
                        width: wp('100%'),
                        height: hp('25%'),
                        backgroundColor: "#f0f0f0"
                    }}>
                        <AtiButton buttonStyle={{
                            width: wp('80%'),
                            height: hp('6.7%'),
                            borderRadius: 62,
                            backgroundColor: "#a92930",
                            marginTop: hp('4%'),
                            marginLeft: wp('12.4%'),

                        }}

                            textStyle={{

                                color: "#ffffff",
                                paddingLeft: wp('35%')
                            }}
                            onPress={this.Done}
                        >Cancel</AtiButton>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    dash: {
        height: 1,
        marginTop: hp('2%'),
        marginLeft: wp('5.5%'),
        marginRight: wp('5.2%'),
        opacity: 70
    }

})
const mapActionToProps = () => {
    return {
        navigate,
        ...action
    }
}

export default connect(null, mapActionToProps())(Receipt);