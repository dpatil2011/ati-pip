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
} from 'ati-ui-elements';
import { View, StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';
import { AtiForm, AtiField } from 'ati-redux-form';
import I18n, { Loc } from 'ati-react-native-redux-i18n';

import { withWebConsole } from 'ati-web-console-connector';

import * as action from '../store/registration-action';
import { connect } from 'react-redux';

class NPWP1 extends Component {
    state = {
        errorTaxNumber: false,
        errorTaxName: false,
        errorTaxAddress: false,
        errorTaxAddressNumber: false,
        errorIsTaxNumber: false,
        errorTaxNameNumber: false,
        taxNumber: '',
        taxName: '',
        taxAddress: '',
    }
    renderSubmit = () => {

    }
    validateInputs(x) {
        const numreg = /^\d{10}$/;
        if (isNaN(x)) {
            this.setState({
                errorIsTaxNumber: true,
            });
        }
        else {
            this.setState({
                errorIsTaxNumber: false,
            });
            { this.props.setTaxNumber(x); }
        }
    }
    render() {
        let x, y, z;
        const {
            nameValidation,
            dateOfBirthValidation,
            salutationValidation,
            formID,
            onNext,
        } = this.props;
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

                        <AtiRow>
                            <AtiCol><AtiText style={{ fontWeight: "bold", marginTop: hp('4.1%'), marginLeft: wp('26.9%'), fontHeight: hp('2.1%') }}>Step 3: Fill in NPWP {this.props.taxNumber1}</AtiText></AtiCol>
                        </AtiRow>
                        <AtiRow style={styles.rowStyle}>
                            <AtiCol>
                                <View style={{ flexDirection: 'row' }}>
                                    <Loc style={{ marginTop: hp('4.7%'), fontHeight: hp('2.1%'), marginLeft: wp('7.2%'), color: "black" }} locKey="label.NPWP Number" />
                                </View>

                                <AtiTextInput
                                    textStyle={{ boxSizing: "borderBox", borderWidth: 1, borderColor: '#d6d6d6', paddingLeft: wp('4.8%'), marginTop: hp('1.6%'), marginLeft: wp('7.2%'), borderRadius: 10, marginRight: wp('6.9%'), height: hp('7.5%'), width: wp('86.1%') }}
                                    maxLength={15}
                                    events={{

                                        onChangeText: (e) => {
                                            //this.props.setTaxNumber(e)
                                            x = e;
                                            this.setState({
                                                taxNumber: e,
                                            })
                                        },
                                        onBlur: () => {

                                            if (this.state.taxNumber == null || this.state.taxNumber == "") {
                                                { this.props.setErrorTaxNumber(); }
                                                this.props.setTaxNumber(null)
                                                this.props.checkNPWP();
                                                this.setState({
                                                    errorTaxNumber: true,
                                                    errorIsTaxNumber: false
                                                })
                                            }
                                            else if (isNaN(this.state.taxNumber)) {
                                                this.props.setIsErrorTaxNumber();
                                                this.props.setTaxNumber(null)
                                                this.props.checkNPWP();
                                                this.setState({
                                                    errorTaxNumber: false,
                                                    errorIsTaxNumber: true
                                                })

                                            }
                                            else {
                                                { this.props.setNpwpNumber(); }
                                                this.props.checkNPWP();
                                                this.setState({
                                                    errorTaxNumber: false,
                                                    errorIsTaxNumber: false
                                                })

                                                this.props.setTaxNumber(this.state.taxNumber)
                                            }


                                        }
                                    }}>

                                </AtiTextInput>
                                {(this.state.errorTaxNumber || this.props.taxNumber1) && <AtiText style={styles.err}>Field is Required</AtiText>}
                                {(this.state.errorIsTaxNumber || this.props.isTaxNumber) && <AtiText style={styles.err}>Enter Valid Tax Number</AtiText>}

                            </AtiCol>
                        </AtiRow>
                        <AtiRow style={styles.rowStyle}>
                            <AtiCol>
                                <View style={{ flexDirection: 'row' }}>
                                    <Loc style={{ marginTop: hp('4.7%'), fontHeight: hp('2.1%'), marginLeft: wp('7.2%'), color: "black" }} locKey="label.Name According NPWP" />
                                </View>

                                <AtiTextInput
                                    textStyle={{ boxSizing: "borderBox", borderWidth: 1, borderColor: '#d6d6d6', paddingLeft: wp('4.8%'), marginTop: hp('1.6%'), marginLeft: wp('7.2%'), borderRadius: 10, marginRight: wp('6.9%'), height: hp('7.5%'), width: wp('86.1%') }}
                                    events={{

                                        onChangeText: (e) => {
                                            //  this.props.setEmail(e)
                                            y = e;
                                            this.setState({
                                                taxName: y,
                                            })
                                        },
                                        onBlur: () => {

                                            if (this.state.taxName == null || this.state.taxName == "") {
                                                this.props.setErrorTaxName();
                                                { this.props.setTaxName('') }
                                                this.props.checkNPWP();
                                                this.setState({
                                                    errorTaxName: true,
                                                    errorTaxNameNumber: false
                                                })
                                            }
                                            else if (!isNaN(this.state.taxName)) {
                                                this.props.setErrorTaxNameNumber();
                                                this.props.checkNPWP();
                                                this.props.setTaxName(null)
                                                this.setState({
                                                    errorTaxNameNumber: true,
                                                    errorTaxName: false
                                                })
                                            }
                                            else {
                                                this.props.setNpwpName();
                                                this.props.checkNPWP();
                                                this.setState({
                                                    errorTaxName: false,
                                                    errorTaxNameNumber: false
                                                })
                                                { this.props.setTaxName(this.state.taxName) }
                                            }

                                        }
                                    }}></AtiTextInput>
                                {(this.state.errorTaxName || this.props.taxname1) && <AtiText style={styles.err}>Field is Required</AtiText>}
                                {(this.state.errorTaxNameNumber || this.props.TaxnameNumber) && <AtiText style={styles.err}>Enter valid full Name</AtiText>}
                            </AtiCol>
                        </AtiRow>

                        <AtiRow style={styles.rowStyle}>
                            <AtiCol>
                                <View style={{ flexDirection: 'row' }}>
                                    <Loc style={{ marginTop: hp('4.7%'), fontHeight: hp('2.1%'), marginLeft: wp('7.2%'), color: "black" }} locKey="label.Address According NPWP" />
                                </View>

                                <AtiTextInput
                                    textStyle={{ boxSizing: "borderBox", borderWidth: 1, borderColor: '#d6d6d6', paddingLeft: wp('4.8%'), marginTop: hp('1.6%'), marginLeft: wp('7.2%'), borderRadius: 10, marginRight: wp('6.9%'), height: hp('7.5%'), width: wp('86.1%') }}

                                    events={{

                                        onChangeText: (e) => {
                                            //  this.props.setEmail(e)
                                            z = e;
                                            this.setState({
                                                taxAddress: z,
                                            })
                                        },
                                        onBlur: () => {

                                            if (this.state.taxAddress == null || this.state.taxAddress == "") {
                                                this.props.setErrorTaxAddress();
                                                { this.props.setTaxAddress(null) }
                                                this.props.checkNPWP();
                                                this.setState({
                                                    errorTaxAddress: true,
                                                    errorTaxAddressNumber: false
                                                })
                                            } else if (!isNaN(this.state.taxAddress)) {
                                                this.props.setErrorTaxAddressNumber();
                                                this.props.setTaxAddress(null)
                                                this.props.checkNPWP();
                                                this.setState({
                                                    errorTaxAddress: false,
                                                    errorTaxAddressNumber: true
                                                })
                                            }

                                            else {
                                                this.props.setNpwpAddress();
                                                this.props.checkNPWP();
                                                this.setState({
                                                    errorTaxAddress: false,
                                                    errorTaxAddressNumber: false
                                                })
                                                { this.props.setTaxAddress(this.state.taxAddress) }
                                            }

                                        }
                                    }}
                                >
                                </AtiTextInput>
                                {(this.state.errorTaxAddress || this.props.taxAddress1) && <AtiText style={styles.err}>Field is Required.</AtiText>}
                                {(this.state.errorTaxAddressNumber || this.props.TaxAddress) && <AtiText style={styles.err}>Enter a valid Tax Address</AtiText>}
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
        ...reducer
    };
};

export default connect(mapStateToProps, action)(withWebConsole(NPWP1))
const styles = StyleSheet.create({
    heading: {
        fontWeight: "bold",
        marginTop: hp('4.1%'),
        marginBottom: hp('0.1%'),
        marginLeft: wp('26.9%'),
        lineHeight: hp('2.1%')
    },
    label: {
        marginTop: hp('4.6%'),
        lineHeight: hp('2.1%'),
        marginLeft: wp('7.2%')
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
        width: wp('86.1%')
    },
    error: {
        borderWidth: 3,
        borderColor: 'red'
    },
    err: {
        marginTop: hp('0.8%'),
        color: 'red',
        fontSize: 14,
        marginLeft: wp('8.0%')
    },
});