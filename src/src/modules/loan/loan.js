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
import navigate from './../../common/navigation/action';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';
import * as action from './../../common/components/popup/store/popup-action';

import loanmain from './../../../assets/img/icon/loanmain.png';
import applyloan from './../../../assets/img/icon/applyloan.png';

class Loan extends Component {

    Next=()=>{
        this.props.navigate('LoanProduct')
    }

    render() {
        console.log("Acc:"+JSON.stringify(this.props.AccountInfo));
        return (
            <View style={styles.container}>
                <Image source={loanmain} style={styles.image} />
                <AtiText style={styles.text}>There is no loan,</AtiText>
                <AtiText style={styles.text}>You can apply for a loan by clicking the</AtiText>
                <AtiText style={styles.text}>button below.</AtiText>
                <View style={styles.button}>
                    <TouchableOpacity style={{ flexDirection: "row" }} onPress={this.Next} >
                        <Image source={applyloan} style={styles.icon} />
                        <AtiText style={styles.buttontext} >Apply Loan</AtiText>
                    </TouchableOpacity>
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
        width: wp('41.8%'),
        height: hp('17.1%'),
        marginTop: hp('10.2%'),
        marginBottom: hp('6%')
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

const mapActioToProps=()=>{
    return{
    navigate,
    ...action
}
}
export default connect(null,mapActioToProps())(Loan);
