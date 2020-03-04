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
import navigate from '../../common/navigation/action';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';
import * as action from '../../common/components/popup/store/popup-action';
import agentloan1 from './../../../assets/img/icon/agentloan1.png';
import agentloan2 from './../../../assets/img/icon/agentloan2.png';
import agentloan3 from './../../../assets/img/icon/agentloan3.png';

class AgentLoan extends Component {

nav=(e)=>{
    this.props.navigate(e)
}
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: "row", marginTop: hp('6%') }}>
                    <View style={{ marginLeft: wp('6.7%'), }}>
                        <TouchableOpacity onPress={this.nav.bind(this, 'PayLoan')}>
                            <Image style={{
                                width: wp('24%'),
                                height: hp('13.5%'),
                            }} source={agentloan1} />
                            <AtiText style={{
                                fontFamily: "AvenirNextLTPro",
                                fontSize: 12,
                                fontWeight: "500",
                                fontStyle: "normal",
                                letterSpacing: 0,
                                textAlign: "center",
                                color: "#000000"
                            }}>Pay Loan</AtiText>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginLeft: wp('7.5%'), marginRight: wp('7.2%'), }}>
                        <TouchableOpacity onPress={this.nav.bind(this, 'LoanProduct')}>
                            <Image style={{
                                width: wp('24%'),
                                height: hp('13.5%'),
                            }} source={agentloan2} />
                            <AtiText style={{
                                fontFamily: "AvenirNextLTPro",
                                fontSize: 12,
                                fontWeight: "500",
                                fontStyle: "normal",
                                letterSpacing: 0,
                                textAlign: "center",
                                color: "#000000"
                            }}>Submit Loan</AtiText>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginRight: wp('6.7%'), }}>
                        <TouchableOpacity >
                            <Image style={{
                                width: wp('24%'),
                                height: hp('13.5%'),
                            }} source={agentloan3} />
                            <AtiText style={{
                                 fontFamily: "AvenirNextLTPro",
                                 fontSize: 12,
                                 fontWeight: "500",
                                 fontStyle: "normal",
                                 letterSpacing: 0,
                                 textAlign: "center",
                                 color: "#000000"
                            }}>List of Debtors</AtiText>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        fontFamily: "AvenirNextLTPro",
        fontSize: 14,
        fontWeight: "normal",
        fontStyle: "normal",
        color: "#000000"
    },
    image: {
        width: wp('24%'),
        height: hp('13.5%'),
    },
    container: {
        alignItems: 'center'
    },
    button: {
        width: wp('80%'),
        height: hp('7.8%'),
        borderRadius: 80,
        backgroundColor: "#a92930",
        flexDirection: "row",
        marginTop: hp('3%')
    },
    icon: {
        width: wp('8%'),
        height: hp('5%'),
        marginTop: hp('1.2%'),
        marginLeft: wp('20%')
    },
    buttontext: {
        fontFamily: "AvenirNextLTPro",
        fontSize: 15,
        fontWeight: "500",
        fontStyle: "normal",
        color: "#ffffff",
        letterSpacing: 0,
        textAlign: "center",
        marginTop: hp('2%'),
        marginLeft: wp('7.5%')
    }


})

const mapActioToProps = () => {
    return {
        navigate,
        ...action
    }
}
export default connect(null, mapActioToProps())(AgentLoan);
