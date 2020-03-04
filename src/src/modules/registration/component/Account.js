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
    a
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

class Account extends Component {
    state = {
        email: '',
        phone: '',
        username: '',
        errorEmail: false,
        errorHandPhone: false,
        errorUserName: false,
        errorUserNameNumber: false,
        errorPhone: false,
        erroremail1: false,
    }

    renderSubmit = () => {
        if (this.props.account) {
            alert('hiiii')
        }
    }
    componentWillReceiveProps = (newProps) => {
        if (newProps.account) {
            alert('')
        }
    };

    render() {
        const numreg = /^\d{10}$/;
        const reg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;

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
                            <AtiCol><AtiText style={styles.heading}>Step 1: Fill in Account Data</AtiText></AtiCol>
                        </AtiRow>
                        <AtiRow style={styles.rowStyle}>
                            <AtiCol>
                                <View style={{ flexDirection: 'row' }}>
                                    <Loc style={styles.label} locKey="label.Email" />
                                </View>

                                <AtiTextInput
                                    textStyle={styles.input}

                                    events={{


                                        onChangeText: (e) => {
                                            //  this.props.setEmail(e)
                                            x = e;
                                            this.setState({
                                                email: e,
                                            });
                                        },
                                        onBlur: () => {
                                            if (this.state.email == null || this.state.email == '') {
                                                this.props.setErrorEmail();
                                                this.props.checkAccount();
                                                { this.props.setEmail(null); }
                                                this.setState({
                                                    errorEmail: true,
                                                    errorEmail1: false
                                                });
                                            }
                                            else if ((reg.test(this.state.email) == false)) {
                                                this.props.setErrorEmail1();
                                                this.props.checkAccount();
                                                { this.props.setEmail(null); }
                                                this.setState({
                                                    errorEmail: false,
                                                    erroremail1: true,
                                                });
                                            } else {
                                                this.props.setErrorEmail2();
                                                this.props.checkAccount();
                                                this.setState({
                                                    errorEmail: false,
                                                    erroremail1: false,
                                                });
                                                { this.props.setEmail(this.state.email); }
                                            }
                                        },
                                    }}

                                />

                                {(this.state.errorEmail || this.props.email1) && <AtiText style={styles.err}>Field is Required</AtiText>}
                                {(this.state.errorEmail1 || this.props.email2) && <AtiText style={styles.err}>Enter valid Email </AtiText>}


                            </AtiCol>
                        </AtiRow>
                        <AtiRow style={styles.rowStyle}>
                            <AtiCol>
                                <View style={{ flexDirection: 'row' }}>
                                    <Loc style={styles.label} locKey="label.Mobile" />
                                </View>

                                <AtiTextInput
                                    textStyle={styles.input}
                                    maxLength={10}
                                    keyboardType="numeric"

                                    events={{

                                        onChangeText: (e) => {
                                            //  this.props.setEmail(e)
                                            y = e;
                                            this.setState({
                                                phone: e,
                                            });
                                        },
                                        onBlur: () => {
                                            if (this.state.phone == null || this.state.phone == '') {
                                                this.props.setErrorHandPhone();
                                                this.props.checkAccount();
                                                { this.props.setMobile(null); }
                                                this.setState({
                                                    errorHandPhone: true,
                                                    errorPhone: false
                                                });
                                            }
                                            else if (isNaN(this.state.phone) || !numreg.test(this.state.phone)) {
                                                this.props.setErrorPhone();
                                                this.props.checkAccount();
                                                { this.props.setMobile(null); }
                                                this.setState({
                                                    errorHandPhone: false,
                                                    errorPhone: true,
                                                });
                                            }
                                            else {
                                                this.props.setHandPhone();
                                                this.props.checkAccount();
                                                this.setState({
                                                    errorHandPhone: false,
                                                    errorPhone: false,
                                                });
                                                { this.props.setMobile(this.state.phone); }
                                            }

                                        },
                                    }}

                                    defaultValue=""
                                />
                                {(this.state.errorHandPhone || this.props.handPhone) && <AtiText style={styles.err}> Field is Required</AtiText>}
                                {(this.state.errorPhone || this.props.phone) && <AtiText style={styles.err}> Enter Valid Handphone No</AtiText>}

                            </AtiCol>
                        </AtiRow>

                        <AtiRow style={styles.rowStyle}>
                            <AtiCol>
                                <View style={{ flexDirection: 'row' }}>
                                    <Loc style={styles.label} locKey="label.Username" />
                                </View>

                                <AtiTextInput
                                    textStyle={styles.input}

                                    events={{

                                        onChangeText: (e) => {
                                            //  this.props.setEmail(e)
                                            z = e;
                                            this.setState({
                                                username: e,
                                            });
                                        },
                                        onBlur: () => {

                                            if (this.state.username == null || this.state.username == '') {
                                                this.props.setErrorUserName();
                                                this.props.checkAccount();
                                                { this.props.setUsername(null); }
                                                this.setState({
                                                    errorUserName: true,
                                                    errorUserNameNumber: false

                                                });
                                            }
                                            else if (!isNaN(this.state.username)) {
                                                this.props.setErrorUsernameNumber();
                                                this.props.checkAccount();
                                                this.props.setUsername(null);
                                                this.setState({
                                                    errorUserNameNumber: true,
                                                    errorUserName: false,
                                                })
                                            }
                                            else {
                                                this.props.setName();
                                                this.props.checkAccount();
                                                this.setState({
                                                    errorUserName: false,
                                                    errorUserNameNumber: false
                                                });
                                                { this.props.setUsername(this.state.username); }
                                            }
                                        },
                                    }}


                                    defaultValue=""
                                />
                                {(this.state.errorUserName || this.props.name) && <AtiText style={styles.err}> Field is Required</AtiText>}
                                {(this.state.errorUserNameNumber || this.props.number) && <AtiText style={styles.err}>Enter a valid user name</AtiText>}

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

export default connect(mapStateToProps, action)(withWebConsole(Account))
const styles = StyleSheet.create({
    heading: {
        fontWeight: 'bold',
        marginTop: hp('4.1%'),
        marginBottom: hp('0.1%'),
        marginLeft: wp('26.9%'),
        //  lineHeight: hp('2.1%'),
    },
    label: {
        marginTop: hp('4.6%'),
        // lineHeight: hp('2.1%'),
        marginLeft: wp('7.2%'),
        color: "black"
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