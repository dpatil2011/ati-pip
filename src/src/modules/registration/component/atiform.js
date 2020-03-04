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


class NPWP1 extends Component {
    /**
     * This function will be running when you rendered component that as trigered to do submit on redux form, then will return button submit.
     * handleSubmit is a callback function to display button login
     */
    state = {
        errorTaxNumber: false,
        errorTaxName: false,
        errorTaxAddress: false,
        taxNumber: "",

    }

    renderSubmit = () => {

    }
    render() {
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
                            <AtiCol><AtiText style={{ fontWeight: "bold", marginTop: hp('4.1%'), marginLeft: wp('26.9%'), fontHeight: hp('2.1%') }}>Step 3: Fill in NPWP </AtiText></AtiCol>
                        </AtiRow>
                        <AtiRow style={styles.rowStyle}>
                            <AtiCol>
                                <View style={{ flexDirection: 'row' }}>
                                    <Loc style={{ marginTop: hp('4.7%'), fontHeight: hp('2.1%'), marginLeft: wp('7.2%') }} locKey="label.NPWP Number" /><AtiText style={{ marginTop: hp('4.7%'), fontHeight: hp('2.1%') }}>*</AtiText>
                                </View>
                                <AtiField name="name" validate={nameValidation} >
                                    <AtiTextInput
                                        textStyle={{ boxSizing: "borderBox", borderWidth: 1, borderColor: 'grey', paddingLeft: wp('4.8%'), marginTop: hp('1.6%'), marginLeft: wp('7.2%'), borderRadius: 10, marginRight: wp('6.9%'), height: hp('7.5%'), width: wp('86.1%') }}

                                        type='text' events={
                                            {
                                                onChangeText: (e) => {
                                                    this.setState({ taxNumber: e });
                                                },
                                            }
                                        }></AtiTextInput>
                                </AtiField>
                            </AtiCol>
                        </AtiRow>
                        <AtiRow style={styles.rowStyle}>
                            <AtiCol>
                                <View style={{ flexDirection: 'row' }}>
                                    <Loc style={{ marginTop: hp('4.7%'), fontHeight: hp('2.1%'), marginLeft: wp('7.2%') }} locKey="label.Name According NPWP" /><AtiText style={{ marginTop: hp('4.7%'), fontHeight: hp('2.1%') }}>*</AtiText>
                                </View>
                                <AtiField name="dateOfBirth" validate={dateOfBirthValidation} type="date">
                                    <AtiTextInput
                                        textStyle={{ boxSizing: "borderBox", borderWidth: 1, borderColor: 'grey', paddingLeft: wp('4.8%'), marginTop: hp('1.6%'), marginLeft: wp('7.2%'), borderRadius: 10, marginRight: wp('6.9%'), height: hp('7.5%'), width: wp('86.1%') }}

                                        type='text'></AtiTextInput>
                                </AtiField>
                            </AtiCol>
                        </AtiRow>

                        <AtiRow style={styles.rowStyle}>
                            <AtiCol>
                                <View style={{ flexDirection: 'row' }}>
                                    <Loc style={{ marginTop: hp('4.7%'), fontHeight: hp('2.1%'), marginLeft: wp('7.2%') }} locKey="label.Address According NPWP" /><AtiText style={{ marginTop: hp('4.7%'), fontHeight: hp('2.1%') }}>*</AtiText>
                                </View>
                                <AtiField name="salutation" validate={salutationValidation} type="select">
                                    <AtiTextInput
                                        textStyle={{ boxSizing: "borderBox", borderWidth: 1, borderColor: 'grey', paddingLeft: wp('4.8%'), marginTop: hp('1.6%'), marginLeft: wp('7.2%'), borderRadius: 10, marginRight: wp('6.9%'), height: hp('7.5%'), width: wp('86.1%') }}

                                        type='text'></AtiTextInput>
                                </AtiField>
                            </AtiCol>
                        </AtiRow>
                    </View>
                </AtiForm>
            </Content>
        );
    }
}

export default NPWP1
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