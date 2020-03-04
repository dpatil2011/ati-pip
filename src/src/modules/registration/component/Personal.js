/* eslint-disable no-lone-blocks */
/* eslint-disable react/no-unused-state */
/**
 * This file will display form on steps 2 of registration that filled with profile data.
 * You must be filled all mandatory field and click Next button if you want to through this step.
 * Or you can clicked previous button, if you want go back to previous step of registration on step 1.
 */
import React, { Component } from 'react';
import { Content } from 'native-base';
import {
    AtiButton,
    AtiDatePicker,
    AtiRow,
    AtiCol,
    AtiH3,
    AtiText,
    AtiTextInput,
    AtiPicker,
    AtiRadioButton,
    AtiFieldStatusEnum,
    AtiSpinner,
} from 'ati-ui-elements';
import { View, StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol,
} from 'react-native-responsive-screen';
import { AtiForm, AtiField } from 'ati-redux-form';
import { connect } from 'react-redux';
import axios from 'axios';
import I18n, { Loc } from 'ati-react-native-redux-i18n';

import { withWebConsole } from 'ati-web-console-connector';

import * as action from '../store/registration-action';


import URL from '../../../common/urls/URLS';

const i = 0;
class Personal extends Component {
    state = {
        errorTaxNumber: false,
        errorTaxName: false,
        errorTaxAddress: false,
        errorIdentity: false,
        errorFullName: false,
        errorMotherName: false,
        errorIdentityType: false,
        errorReligion: false,
        errorDate: false,
        notNumber: false,
        range: false,
        rangeDL: false,
        rangePa: false,
        rangeSc: false,
        rangeKi: false,
        dateOfBirth: '',
        setIdentityType1: '',
        religion1: '',
        typeOfIdentityOptions: [],
        religionOption: [],
        // new: 0,
        // new1: 0,
        // newr: 0,
        // newm: 0,
        cardNumber: '',
        fullname: '',
        mother: '',
        a: '',
        errorFullnameNumber: false,
        errorMotherNumber: false

    }

    componentDidMount() {
        //  const URL = 'https://prdc-support.anabatic.com:7443/fineract-provider/api/v1/clients/template/mobile';
        axios.get(URL.Mobile, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Fineract-Platform-TenantId': '000000',

            },

        }).then((response) => {
            this.setState({
                typeOfIdentityOptions: response.data.typeOfIdentityOptions,
                religionOption: response.data.religionOption,

            });
            console.log(this.state.religionOption);
        });
    }
    ValidateDate(x) {
        const datey = new Date().getFullYear();
        const datem = new Date().getMonth() + 1;
        const dateD = new Date().getDate();
        const dateyProps = new Date(x).getFullYear();
        const dateDProps = new Date(x).getDate();
        const dateprops = new Date(x).getMonth();
        var month_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const date = `${datey}-${datem}-${dateD}`;
        const newDate1 = `${dateDProps} ${month_names[dateprops]} ${dateyProps}`;

        if (x >= date) {
            { this.props.setDateOfBirth(null); }
            this.props.Error_DateOfBirth();
            this.props.checkPersonal();
            this.setState({
                errorDate: true,
            });
        } else if (x < date) {
            this.props.Error_DateOfBirth1();
            this.props.checkPersonal();
            { this.props.setDateOfBirth(newDate1); }

            this.setState({
                errorDate: false,

            });
        } else {
            this.setState({
                errorDate: false,
            });
        }
    }
    validateInputs() {
        var id = this.state.setIdentityType1
        const numreg = /^\d{16}$/;
        const numreg1 = /^\d{12}$/;
        const numreg2 = /^\d{8}$/;
        const numreg3 = /^\d{15}$/;
        // const numreg4=/^(1[0-12]|[1-14])$/;
        const numreg4 = /^[0-9]{11,14}$/;
        if (this.state.cardNumber == null || this.state.cardNumber == '') {
            {
                this.props.setIdentity(null);
            }
            this.props.seterrorIdentity1();
            this.props.checkPersonal();

            this.setState({
                range: false,
                errorIdentity: true,
            });
        } else if (isNaN(this.state.cardNumber) || (!numreg.test(this.state.cardNumber) && (id == "IC"))) {

            {
                this.props.setIdentity(null);
            }
            this.props.seterrorIdentity2();
            this.props.checkPersonal();
            this.setState({
                maxLength: 16,

                errorIdentity: false,
                range: true,
                rangeDL: false,
                rangePa: false,
                rangeSc: false,
                rangeKi: false,
            });
            //  { this.validateInputs(this.state.cardNumber, this); }
        }
        else if (isNaN(this.state.cardNumber) || (!numreg1.test(this.state.cardNumber) && (id == "DL"))) {

            {
                this.props.setIdentity(null);
            }
            this.props.seterrorIdentityDL();
            this.props.checkPersonal();
            this.setState({
                errorIdentity: false,
                rangeDL: true,
                range: false,
                rangePa: false,
                rangeSc: false,
                rangeKi: false,

            });
            //  { this.validateInputs(this.state.cardNumber, this); }
        }
        else if (isNaN(this.state.cardNumber) || (!numreg2.test(this.state.cardNumber) && (id == "PASS"))) {

            {
                this.props.setIdentity(null);
            }
            this.props.seterrorIdentityPa();
            this.props.checkPersonal();
            this.setState({
                errorIdentity: false,
                rangeDL: false,
                range: false,
                rangePa: true,
                rangeSc: false,
                rangeKi: false,
            });
            //  { this.validateInputs(this.state.cardNumber, this); }
        }
        else if (isNaN(this.state.cardNumber) || (!numreg3.test(this.state.cardNumber) && (id == "SC"))) {

            {
                this.props.setIdentity(null);
            }
            this.props.seterrorIdentitySc();
            this.props.checkPersonal();
            this.setState({
                errorIdentity: false,
                rangeDL: false,
                range: false,
                rangePa: false,
                rangeSc: true,
                rangeKi: false,

            });
            //  { this.validateInputs(this.state.cardNumber, this); }
        }
        else if (isNaN(this.state.cardNumber) || (!numreg4.test(this.state.cardNumber)) && (id == "KITAS")) {

            {
                this.props.setIdentity(null);
            }
            this.props.seterrorIdentityKi();
            this.props.checkPersonal();
            this.setState({
                errorIdentity: false,
                rangeDL: false,
                range: false,
                rangePa: false,
                rangeSc: false,
                rangeKi: true,

            });
            //  { this.validateInputs(this.state.cardNumber, this); }
        }
        else if (numreg.test(this.state.cardNumber) || numreg1.test(this.state.cardNumber) || numreg2.test(this.state.cardNumber) || numreg3.test(this.state.cardNumber) || numreg4.test(this.state.cardNumber)) {
            this.props.seterrorIdentity3();
            this.props.checkPersonal();
            this.setState({
                range: false,
                errorIdentity: false,
                rangeDL: false,
                rangePa: false,
                rangeSc: false,
                rangeKi: false,
            });
            {
                this.props.setIdentity(this.state.cardNumber);
            }
        }
    }
    renderSubmit = () => {

    }
    render() {
        let x1;
        let x2;
        let x3;
        let x4;
        let x5;
        let x6;
        const {
            nameValidation,
            dateOfBirthValidation,
            salutationValidation,
            formID,
            onNext,
        } = this.props;
        if (this.state.typeOfIdentityOptions.length === 0 || this.state.religionOption.length === 0) {
            return (<View style={{ alignSelf: 'center', marginVertical: hp('30%') }}>
                <AtiSpinner />
            </View>);
        }

        return (
            <Content style={styles.rowStyle1} style={{ marginBottom: '30.1%' }}>
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
                        <AtiRow>
                            <AtiCol><AtiText style={{
                                fontWeight: 'bold', marginTop: hp('4.1%'), marginLeft: wp('26.9%'), fontHeight: hp('2.1%'),
                            }}
                            >Step 2: Fill in Personal Data
                                    </AtiText>
                            </AtiCol>
                        </AtiRow>
                        <AtiRow style={styles.rowStyle}>
                            <AtiCol>
                                <View style={{ flexDirection: 'row' }}>
                                    <Loc
                                        style={{
                                            marginTop: hp('4.7%'), fontHeight: hp('2.1%'), marginLeft: wp('7.2%'), color: 'black',
                                        }}
                                        locKey="label.IdentityType"
                                    /><AtiText style={{ marginTop: hp('4.7%'), fontHeight: hp('2.1%') }} />
                                </View>
                                <AtiPicker
                                    pickerStyle={
                                        styles.input
                                    }
                                    labelStyle={{ fontSize: 14 }}
                                    optionLabel="label"
                                    optionValue="value"
                                    value={this.state.setIdentityType1}
                                    s
                                    source={this.state.typeOfIdentityOptions.map(x => ({
                                        label: x.name,
                                        value: x.name,
                                    }))}
                                    id="identityType"
                                    events={

                                        {
                                            onValueChange: (e) => {
                                                //   this.props.setIdentityType(e);
                                                x1 = e;
                                                this.setState({
                                                    setIdentityType1: e,
                                                });
                                                console.log(e);
                                                if (x1 == null || x1 === '') {
                                                    this.props.Error_setIdentityType();
                                                    this.props.checkPersonal();
                                                    { this.props.setIdentityType(null); }
                                                    this.setState({

                                                        errorIdentityType: true,
                                                    });
                                                } else {
                                                    this.setState({
                                                        errorIdentityType: false,
                                                    });
                                                    { this.props.setIdentityType(x1); }
                                                    this.props.Error_setIdentityType1();
                                                    this.props.checkPersonal();
                                                    // { this.props.setMother(x); }
                                                }
                                            },
                                        }
                                    }
                                />
                                {(this.state.errorIdentityType || this.props.identityType1 || this.props.errorIdentityType) && <AtiText style={styles.err}>  Field is Required.</AtiText>}

                            </AtiCol>
                        </AtiRow>
                        <AtiRow style={styles.rowStyle}>
                            <AtiCol>
                                <View style={{ flexDirection: 'row' }}>
                                    <Loc
                                        style={{
                                            marginTop: hp('4.7%'), fontHeight: hp('2.1%'), marginLeft: wp('7.2%'), color: 'black',
                                        }}
                                        locKey="label.IdentityCardNumber"
                                    /><AtiText style={{ marginTop: hp('4.7%'), fontHeight: hp('2.1%') }} />
                                </View>
                                <AtiTextInput
                                    textStyle={styles.input}
                                    placeholder=""
                                    type="text"
                                    id="Identity"
                                    keyboardType="numeric"

                                    events={{

                                        onChangeText: (e) => {
                                            x2 = e;
                                            //   { this.props.setIdentity(this.state.cardNumber); }

                                            this.setState({
                                                cardNumber: e,
                                            });

                                        },
                                        onBlur: () => {
                                            this.validateInputs()
                                        },
                                    }}
                                />
                                {(this.state.errorIdentity || this.props.identity1) && <AtiText style={styles.err}>  Field is Required.</AtiText>}
                                {(this.state.range || this.props.range1) && <AtiText style={styles.err}>  Please Enter 16 Digit Number.</AtiText>}
                                {(this.state.rangeDL || this.props.rangeDl1) && <AtiText style={styles.err}>  Please Enter 12 Digit Number.</AtiText>}
                                {(this.state.rangePa || this.props.rangePa1) && <AtiText style={styles.err}>  Please Enter 8 Digit Number.</AtiText>}
                                {(this.state.rangeSc || this.props.rangeSc1) && <AtiText style={styles.err}>  Please Enter 15 Digit Number.</AtiText>}
                                {(this.state.rangeKi || this.props.rangeKi1) && <AtiText style={styles.err}>  Please Enter 12 or 14 Digit NUmber.</AtiText>}

                            </AtiCol>
                        </AtiRow>

                        <AtiRow style={styles.rowStyle}>
                            <AtiCol>
                                <View style={{ flexDirection: 'row' }}>
                                    <Loc
                                        style={{
                                            marginTop: hp('4.7%'), fontHeight: hp('2.1%'), marginLeft: wp('7.2%'), color: 'black',
                                        }}
                                        locKey="label.FullName"
                                    /><AtiText style={{ marginTop: hp('4.7%'), fontHeight: hp('2.1%') }} />
                                </View>
                                <AtiTextInput

                                    textStyle={styles.input}
                                    type="text"

                                    id="fullname"
                                    events={{

                                        onChangeText: (e) => {
                                            x3 = e;
                                            this.setState({
                                                fullname: e,
                                            });
                                        },
                                        onBlur: () => {
                                            if (this.state.fullname == null || this.state.fullname == '') {
                                                { this.props.setFullName(null); }
                                                this.props.Error_FullName();
                                                this.props.checkPersonal();
                                                this.setState({
                                                    errorFullName: true,
                                                    errorFullnameNumber: false
                                                });
                                            }
                                            else if (!isNaN(this.state.fullname)) {
                                                this.props.setFullName(null);
                                                this.props.setErrorFullnameNumber();
                                                this.props.checkPersonal();
                                                this.setState({
                                                    errorFullName: false,
                                                    errorFullnameNumber: true
                                                })
                                            }
                                            else {
                                                this.props.Error_FullName1();
                                                this.props.checkPersonal();
                                                this.setState({
                                                    errorFullName: false,
                                                    errorFullnameNumber: false
                                                });
                                                { this.props.setFullName(this.state.fullname); }
                                            }
                                        },
                                    }}

                                    defaultValue=""
                                />
                                {(this.state.errorFullName || this.props.fullname1 || this.props.errorFullName) && <AtiText style={styles.err}>  Field is Required.</AtiText>}
                                {(this.state.errorFullnameNumber || this.props.fullnameNumber) && <AtiText style={styles.err}>Enter a valid Full name</AtiText>}


                            </AtiCol>
                        </AtiRow>

                        <AtiRow style={styles.rowStyle}>
                            <AtiCol>
                                <View style={{ flexDirection: 'row' }}>
                                    <Loc
                                        style={{
                                            marginTop: hp('4.7%'), fontHeight: hp('2.1%'), marginLeft: wp('7.2%'), color: 'black',
                                        }}
                                        locKey="label.Gender"
                                    /><AtiText style={{ marginTop: hp('4.7%'), fontHeight: hp('2.1%') }} />
                                </View>
                                <View style={{
                                    flex: 1, flexDirection: 'row', marginTop: '5%', marginLeft: '6%',
                                }}
                                >
                                    <AtiRadioButton
                                        selected={this.props.male}
                                        label="Male"
                                        selectedColor="#c6474e"
                                        radioButtonStyle={{}}
                                        labelStyle={{
                                            width: 31,
                                            height: 14,
                                            fontFamily: 'AvenirNextLTPro',
                                            fontSize: 15,
                                            marginLeft: '15.1%',

                                        }}
                                        containerStyle={{

                                        }}
                                        events={
                                            {
                                                onPress: (e) => {
                                                    this.props.setGender(true, false);
                                                },
                                            }
                                        }
                                        status={AtiFieldStatusEnum.PRISTINE}
                                    />
                                    <AtiRadioButton
                                        selected={this.props.female}
                                        label="Female"
                                        selectedColor="#c6474e"
                                        radioButtonStyle={{


                                        }}
                                        labelStyle={{
                                            width: 47,
                                            height: 14,
                                            fontFamily: 'AvenirNextLTPro',
                                            fontSize: 15,
                                            marginLeft: '15.1%',

                                        }}
                                        containerStyle={{}}
                                        events={
                                            {
                                                onPress: (e) => {
                                                    this.props.setGender(false, true);
                                                },
                                            }
                                        }
                                        status={AtiFieldStatusEnum.PRISTINE}
                                    />
                                </View>
                            </AtiCol>
                        </AtiRow>


                        <AtiRow style={styles.rowStyle}>
                            <AtiCol>
                                <View style={{ flexDirection: 'row' }}>
                                    <Loc
                                        style={{
                                            marginTop: hp('4.7%'), fontHeight: hp('2.1%'), marginLeft: wp('7.2%'), color: 'black',
                                        }}
                                        locKey="label.DateOfBirth"
                                    /><AtiText style={{ marginTop: hp('4.7%'), fontHeight: hp('2.1%') }} />
                                </View>
                                <AtiDatePicker
                                    //  label="Date Of Birth"
                                    value={this.state.dateOfBirth}
                                    id="dateOfBirth"

                                    style={{
                                        paddingLeft: '4.8%',
                                        paddingTop: '2%',
                                        marginLeft: '6.9%',
                                        marginRight: '6.9%',
                                        width: '86.1%',
                                        height: 50,
                                        borderWidth: 1,
                                        borderRadius: 10,
                                        borderStyle: 'solid',
                                        borderColor: '#d6d6d6',
                                        backgroundColor: '#ffffff',
                                    }}
                                    showIcon
                                    events={
                                        {
                                            onDateChange: (e) => {
                                                this.props.setDateOfBirth(null);
                                                this.setState({
                                                    dateOfBirth: e,
                                                });
                                                { this.ValidateDate(e); }
                                            },
                                        }
                                    }
                                />
                                {(this.state.errorDate || this.props.date1 || this.props.errorDate) && <AtiText style={styles.err}>  Date Of Birth must be earlier than today.</AtiText>}

                            </AtiCol>
                        </AtiRow>


                        <AtiRow style={styles.rowStyle}>
                            <AtiCol>
                                <View style={{ flexDirection: 'row' }}>
                                    <Loc
                                        style={{
                                            marginTop: hp('4.7%'), fontHeight: hp('2.1%'), marginLeft: wp('7.2%'), color: 'black',
                                        }}
                                        locKey="label.Religion"
                                    /><AtiText style={{ marginTop: hp('4.7%'), fontHeight: hp('2.1%') }} />
                                </View>
                                <AtiPicker
                                    pickerStyle={
                                        styles.input
                                    }
                                    labelStyle={{ fontSize: 14 }}

                                    optionLabel="label"
                                    optionValue="value"
                                    id="religion"
                                    value={this.state.religion1}
                                    source={this.state.religionOption.map(x => ({
                                        label: x.name,
                                        value: x.name,
                                    }))}
                                    events={
                                        {
                                            onValueChange: (e) => {
                                                this.setState({
                                                    religion1: e,
                                                });
                                                x4 = e;
                                                if (x4 == null || x4 == '') {
                                                    this.props.setReligion(null);
                                                    this.props.Error_Religion();
                                                    this.props.checkPersonal();
                                                    this.setState({
                                                        errorReligion: true,
                                                    });
                                                } else {
                                                    this.props.setReligion(e);
                                                    this.props.Error_Religion1();
                                                    this.props.checkPersonal();
                                                    this.setState({
                                                        errorReligion: false,
                                                    });
                                                    // { this.props.setMother(x); }
                                                }
                                            },
                                        }
                                    }

                                    // eslint-disable-next-line react/jsx-no-duplicate-props
                                    source={this.state.religionOption.map(x => ({

                                        label: x.name,
                                        value: x.name,
                                    }))}
                                />
                                {(this.state.errorReligion || this.props.religion1 || this.props.errorReligion) && <AtiText style={styles.err}>  Field is Required.</AtiText>}


                            </AtiCol>
                        </AtiRow>


                        <AtiRow style={styles.rowStyle}>
                            <AtiCol>
                                <View style={{ flexDirection: 'row' }}>
                                    <Loc
                                        style={{
                                            marginTop: hp('4.7%'), fontHeight: hp('2.1%'), marginLeft: wp('7.2%'), color: 'black',
                                        }}
                                        locKey="label.MothersMaidenName"
                                    /><AtiText style={{ marginTop: hp('4.7%'), fontHeight: hp('2.1%') }} />
                                </View>
                                <AtiTextInput

                                    textStyle={styles.input}
                                    type="text"
                                    id="mother"
                                    events={{

                                        onChangeText: (e) => {
                                            x5 = e;
                                            this.setState({
                                                mother: e,
                                            });
                                        },
                                        onBlur: () => {
                                            if (this.state.mother == null || this.state.mother === '') {
                                                { this.props.setMother(null); }
                                                this.props.Error_Mother();
                                                this.props.checkPersonal();
                                                this.setState({
                                                    errorMotherName: true,
                                                    errorMotherNumber: false
                                                });
                                            }
                                            else if (!isNaN(this.state.mother)) {
                                                this.props.setMother(null);
                                                this.props.setErrorMotherNumber();
                                                this.props.checkPersonal();
                                                this.setState({
                                                    errorMotherName: false,
                                                    errorMotherNumber: true
                                                })
                                            }
                                            else {
                                                this.props.Error_Mother1();
                                                this.props.checkPersonal();
                                                this.setState({
                                                    errorMotherName: false,
                                                    errorMotherNumber: false
                                                });

                                                { this.props.setMother(this.state.mother); }
                                            }
                                        },
                                    }}
                                    defaultValue=""
                                />
                                {(this.state.errorMotherName || this.props.mother1 || this.props.errorMotherName) && <AtiText style={styles.err}> Filed is Required</AtiText>}
                                {(this.state.errorMotherNumber || this.props.motherNumber) && <AtiText style={styles.err}>Enter a valid Name</AtiText>}


                            </AtiCol>
                        </AtiRow>
                    </View>
                </AtiForm>
            </Content>
        );
    }
}
const mapStateToProps = (state) => {
    const { reducer } = state;
    return {
        ...reducer,
    };
};

export default connect(mapStateToProps, action)(withWebConsole(Personal));
const styles = StyleSheet.create({
    heading: {
        fontWeight: 'bold',
        marginTop: hp('4.1%'),
        marginBottom: hp('0.1%'),
        marginLeft: wp('26.9%'),
        lineHeight: hp('2.1%'),
    },
    label: {
        marginTop: hp('4.6%'),
        lineHeight: hp('2.1%'),
        marginLeft: wp('7.2%'),
        color: 'black',
    },
    input: {
        marginLeft: wp('6.9%'),
        marginRight: wp('6.9%'),
        width: wp('86.1%'),
        borderWidth: 1,
        borderRadius: 10,
        borderStyle: 'solid',
        borderColor: '#d6d6d6',
        backgroundColor: '#ffffff',
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