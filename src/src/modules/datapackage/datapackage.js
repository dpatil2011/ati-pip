import React, { Component } from 'react';
import { AtiText, AtiRow, AtiCol, AtiTextInput, AtiButton, AtiTextInputCellPhone, AtiSpinner } from 'ati-ui-elements';
import { Content } from 'native-base';
import axios from 'axios';
import {
    ImageBackground,
    StyleSheet,
    View,
    Image,
    AsyncStorage,
    TouchableOpacity,
} from 'react-native';
import { AtiForm } from 'ati-redux-form';
import navigate from '../../common/navigation/action';
import { withWebConsole } from 'ati-web-console-connector';
import { connect } from 'react-redux';
import * as action from '../../common/components/popup/store/popup-action';
import * as act from './store/datapackage-action';

import I18n, { Loc } from 'ati-react-native-redux-i18n';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/AntDesign';
class Datapackage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textCellPhone: '',
            accountDetail: [],
            productName: '',
            accountNo: '',
            savingsId: '',
            products: []
        };
    }

    componentDidMount() {
        if (this.props.accountDetail == "") {

            const URL = 'https://prdc-support.anabatic.com:7443/fineract-provider/api/v1/clients/131/accounts';
            // axios.get('https://prdc-support.anabatic.com:7443/fineract-provider/api/v1/savingsaccounts/1179?associations=all', {
            //  console.log(this.props.userData.data);
            axios.get(URL, {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    'Fineract-Platform-TenantId': '000000',
                },
                auth: {
                    username: 'user84',
                    password: 'coin',
                },
            }).then((response) => {
               // console.log(`hi${JSON.stringify(response.data.savingsAccounts[0].id)}`);
                this.props.setAccountDetail(response.data.savingsAccounts[0]);
                this.setState({
                    savingsAccounts: response.data.savingsAccounts[0],
                    savingsId: response.data.savingsAccounts[0].id,

                });

                //console.log(this.state.savingsAccounts);
            });

        } else {
            this.setState({
                accountDetail: this.props.accountDetail,
                savingsId:this.props.accountDetail.id
            })
        }
        

    }
    renderSubmit = () => {

    }
    myAccount = () => {
        // this.props.setnavigate('0')
        this.props.navigate('MyAccount')
    }
    transaction = () => {
        this.props.navigate('SelectAccount')
    }
    Next = () => {
        this.props.navigate('ChooseNominal')
    }
    render() {
        if (this.state.savingsId === '') {
            return (
                <View style={{
                    alignSelf: 'center', marginVertical: hp('30%')
                }}>
                    <AtiSpinner />
                </View>
            )
        }
        const {
            nameValidation,
            dateOfBirthValidation,
            salutationValidation,
            formID,
            onNext,
        } = this.props;
        const currencyFormatter = require('currency-formatter');

        return (
            <Content style={styles.rowStyle1}>
                <AtiForm
                    formId={formID}
                    destroyOnUnmount={false}
                    forceUnregisterOnUnmount
                    keepDirtyOnReinitialize
                    // onSubmit is a Function that will be called when submit form.
                    onSubmit={values => onNext(values)}
                    // Rendered component that as trigered to do submit.
                    submitComponent={returnOnSubmit => this.renderSubmit(returnOnSubmit)}
                >
                    <View>
                        <View style={{ height: hp("100%"), width: wp("100%"), backgroundColor: "white" }}>
                            <Loc style={styles.label1} locKey="label.Account From" />
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingLeft: wp('4.8%'),
                                marginLeft: wp('6.9%'),
                                marginRight: wp('6.9%'),
                                marginTop: hp('1.9%'),
                                height: hp('7.5%'),
                                width: wp('86.1%'),
                                borderRadius: 10,
                                backgroundColor: '#ffffff',
                                borderStyle: 'solid',
                                borderWidth: 1,
                                borderColor: '#d6d6d6',

                            }}
                            >
                                <TouchableOpacity onPress={this.myAccount.bind()}>
                                    <View style={{ flexDirection: 'row' }}>

                                        <AtiText
                                            style={{
                                                marginRight: wp('35%'),
                                                marginTop: hp('1%'),
                                                fontFamily: 'AvenirNextLTPro',
                                                fontSize: 14,
                                                fontWeight: 'bold',
                                                fontStyle: 'normal',
                                                lineHeight: 20,
                                                letterSpacing: 0.28,
                                                textAlign: 'left',
                                                color: '#000000',
                                                // paddingBottom: '10%',
                                            }}
                                        > {this.props.accountDetail.shortProductName} - {this.props.accountDetail.accountNo}
                                        </AtiText>
                                        <Icon
                                            name="right"
                                            style={{
                                                height: 24,
                                                width: 24,
                                                resizeMode: 'stretch',
                                                alignItems: 'center',
                                                marginTop: 12,
                                                color: '#78849e',
                                            }}
                                        />
                                    </View>
                                </TouchableOpacity>

                            </View>
                            <AtiText style={{
                                color: '#008211',
                                marginLeft: wp("8%"),
                                marginTop: hp("2.2%"),
                                fontFamily: "AvenirNextLTPro",
                                fontSize: 12,
                                marginBottom: hp('4.4%')
                            }}> Available balance Rp {currencyFormatter.format(this.props.accountDetail.accountBalance, {
                                code: 'IDR',
                                symbol: '',
                                decimal: '.',
                                thousand: ',',
                                precision: 2,
                            })}</AtiText>

                            <Loc style={styles.label} locKey="label.phone Number" />
                            <AtiTextInput
                                containerStyle={{
                                    borderWidth: 1,
                                    borderColor: '#d6d6d6',
                                    borderRadius: 10,
                                    paddingLeft: wp('4.8%'),
                                    marginLeft: wp('6.9%'),
                                    marginRight: wp('6.9%'),
                                    height: hp('7.5%'),
                                    width: wp('86.1%'),
                                    marginTop: hp('1.7%')
                                }}
                                events={
                                    {
                                        onChangeText: (e) => {
                                            this.setState({ textCellPhone: e.value });
                                            this.props.setCellPhone(e)
                                        },
                                    }
                                }
                                type='numeric'
                                keyboardType='phone-pad'
                                maxLength={10}
                                value={this.state.textCellPhone}

                            />
                            <AtiButton onPress={this.Next}
                                style={{ backgroundColor: '#a92930', height: hp("8%"), width: wp("80%"), borderRadius: (20), marginLeft: wp("10.1%"), marginTop: hp("4%"), marginBottom: hp("4%") }}
                                textStyle={{ alignSelf: 'center', marginTop: wp('0.5%'), marginLeft: wp("30%") }}
                            >
                                Next
                     </AtiButton>
                        </View>

                    </View>

                </AtiForm>
            </Content>
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
        marginLeft: '25%',
        marginTop: '80%',
    },
    heading: {
        fontWeight: 'bold',
        marginTop: hp('4.1%'),
        marginBottom: hp('0.1%'),
        marginLeft: wp('26.9%'),
        //  lineHeight: hp('2.1%'),
    },
    label: {
        height: hp('2.4%'),
        width: wp('27%'),
        marginLeft: wp('7.2%'),
        color: "black",
        fontFamily: "AvenirNextLTPro",
        fontSize: 14,
    },
    label1: {
        height: hp('2.4%'),
        width: wp('31.8%'),
        marginTop: hp('5.6%'),
        marginBottom: hp('1.9%'),
        marginLeft: wp('7.2%'),
        color: "black",
        fontFamily: "AvenirNextLTPro",
        fontSize: 14,
    },
    input: {
        borderWidth: 1,
        borderColor: '#d6d6d6',
        borderRadius: 10,
        paddingLeft: wp('4.8%'),
        marginTop: hp('1.6%'),
        marginLeft: wp('6.9%'),
        marginRight: wp('6.9%'),
        height: hp('7.5%'),
        width: wp('86.1%'),
    },
    input1: {
        borderRadius: 10,
        borderColor: '#d6d6d6',
        paddingLeft: wp('4.8%'),
        marginTop: hp('1.6%'),
        marginLeft: wp('6.9%'),
        marginRight: wp('6.9%'),
        height: hp('10%'),
        color: "#a92930",
        fontWeight: 'bold',
        fontSize: 23,
        backgroundColor: "#f8f6f0",
        width: wp('87.5%'),
    },
    error: {
        borderWidth: 3,
        borderColor: 'red',
    },
    err: {
        marginTop: hp('0.8%'),
        color: 'red',
        fontSize: 14,
        marginLeft: wp('8.0%'),
    },
});
const mapStateToProps = (state) => {
    const { dataReducer } = state;
    return {
        ...dataReducer
    }
}
const mapActionToProps = () => ({
    navigate,
    ...action,
    ...act,

    // ...authentication,
});
export default connect(mapStateToProps, mapActionToProps())(withWebConsole(Datapackage));