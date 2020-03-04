import React, { Component } from 'react';
import { Content, TabHeading } from 'native-base';
import {
    AtiButton,
    AtiDatePicker,
    AtiRow,
    AtiCol,
    AtiH3,
    AtiText,
    AtiTextInput,
    AtiPicker,
    AtiSpinner
} from 'ati-ui-elements';
import { View, StyleSheet, ScrollView } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';
import { AtiForm, AtiField } from 'ati-redux-form';
import I18n, { Loc } from 'ati-react-native-redux-i18n';

import axios from 'axios';
import { withWebConsole } from 'ati-web-console-connector';
import URL from '../../../common/urls/URLS';
import * as action from '../store/registration-action';
import { connect } from 'react-redux';

class Address2 extends Component {
    state = {

        errorTaxAddress: false,
        errorVillage: false,
        errorPostalCode: false,
        errorAddress: false,
        errorCountry: false,
        errorPro: false,
        errorDisc: false,
        PostalCoderange: false,
        errorVillageNumber: false,
        errorAddressNumber: false,
        village: '',
        postalcode: '',
        address: '',
        data: [],
        dis: '',
        disD: 0,
        country: '',
        countryD: 0,
        province: '',
        provinceD: 0,
        cityOptions: [],
        countryOptions: [],
        provinceOptions: [],
    }

    validateInputs(x) {
        const numreg = /^\d{6}$/;
        if (isNaN(x) || !numreg.test(x)) {
            this.props.errorPostalCode1();
            this.props.setPostalcode(null)
            this.props.checkAddress();
            this.setState({
                PostalCoderange: true,

            });
        } else if (numreg.test(x)) {
            { this.props.setPostalcode(x); }
            this.props.errorPostalCode2();
            this.props.checkAddress();
            this.setState({
                PostalCoderange: false,
            });


        } else if (x == null || x === '') {
            this.props.errorPostalCode1();
            this.props.setPostalcode(null)
            this.props.checkAddress();
            this.setState({
                PostalCoderange: false,
            });
        } else {
            { this.props.setPostalcode(x); }

            // alert();
        }
    }

    componentDidMount() {
        // const URL = 'https://prdc-support.anabatic.com:7443/fineract-provider/api/v1/clients/template/mobile';
        axios.get(URL.Mobile, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Fineract-Platform-TenantId': '000000',
            },
            // strictSSL: false,
        }).then((response) => {
            this.setState({
                data: response.data,
                provinceOptions: response.data.provinceOptions,
                countryOptions: response.data.countryOptions,
                cityOptions: response.data.cityOptions,
            });
            console.log(this.state.clientLegalFormOptions);
        });
    }



    renderSubmit = () => {

    }

    render() {
        const numreg = /^\d{6}$/;

        let x, y, z, a, b, c;
        const {
            nameValidation,
            dateOfBirthValidation,
            salutationValidation,
            formID,
            onNext,
        } = this.props;
        if (this.state.data.length == 0) {
            return (<View style={{ alignSelf: 'center', marginVertical: hp('30%') }}>
                <AtiSpinner />
            </View>);
        }
        return (
            <ScrollView>
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
                        <View style={{ paddingBottom: '30%' }}>
                            <AtiText style={{ marginBottom: hp('3%'), marginTop: hp('2.6%'), marginLeft: wp('31.5%') }}>Step 4: Fill in address</AtiText>
                            <Loc style={{ marginBottom: hp('1.1%'), marginLeft: wp('7.2%'), color: 'black', marginTop: wp('3%') }} locKey="label.Country" />

                            <AtiPicker
                                // containerStyle={{ backgroundColor: '#ffffff' }}
                                pickerStyle={{
                                    borderRadius: 10,
                                    backgroundColor: '#ffffff',
                                    borderWidth: 1,
                                    // borderColor: '#d6d6d6',
                                    borderColor: '#d6d6d6',
                                    width: wp('86.1%'),
                                    marginLeft: wp('6.9%'),
                                    height: 50,
                                    marginRight: wp('6.9%'),

                                }}
                                labelStyle={{ fontSize: 14 }}
                                id="country"

                                optionLabel="label"
                                optionValue="value"
                                source={this.state.countryOptions.map((n) => ({

                                    "label": n.description,
                                    "value": n.description,
                                }))}
                                value={this.state.country}
                                events={
                                    {
                                        onValueChange: (e) => {
                                            // this.props.setCountry(e);
                                            this.setState({
                                                country: e,
                                            });
                                            x = e;
                                            if (x == null || x == '') {
                                                this.props.errorCountry();
                                                this.props.checkAddress();
                                                this.props.setCountry(null);
                                                this.setState({
                                                    errorCountry: true,
                                                });
                                            } else {
                                                this.setState({
                                                    errorCountry: false,
                                                });
                                                { this.props.setCountry(x); }
                                                this.props.errorCountry1();
                                                this.props.checkAddress();



                                            }
                                        },
                                    }
                                }


                            />
                            {(this.state.errorCountry || this.props.errorCountryX) && <AtiText style={styles.err}>  Field is Required.</AtiText>}



                            <Loc style={{ marginBottom: hp('1.1%'), marginLeft: wp('7.2%'), color: 'black', marginTop: wp('3%') }} locKey="label.Province" />
                            {console.log(this.props.village)}
                            <AtiPicker
                                // containerStyle={{ backgroundColor: '#ffffff' }}
                                pickerStyle={{
                                    borderRadius: 10,
                                    backgroundColor: '#ffffff',
                                    borderWidth: 1,
                                    borderColor: '#d6d6d6',
                                    borderColor: '#d6d6d6',
                                    width: wp('86.1%'),
                                    marginLeft: wp('6.9%'),
                                    height: 50,
                                    marginRight: wp('6.9%'),

                                }}
                                labelStyle={{ fontSize: 14 }}
                                id="province"
                                optionLabel="label"
                                optionValue="value"
                                value={this.state.province}
                                events={
                                    {
                                        onValueChange: (e) => {
                                            //    this.props.setProvince(e);
                                            this.setState({
                                                province: e,
                                            });
                                            y = e;
                                            if (y == null || y == '') {
                                                this.props.errorPro();
                                                this.props.checkAddress();
                                                this.setState({
                                                    errorPro: true,
                                                });
                                            } else {
                                                this.props.errorPro2();
                                                this.props.checkAddress();
                                                this.setState({
                                                    errorPro: false,
                                                });
                                                { this.props.setProvince(y); }
                                            }

                                        },
                                    }
                                }

                                source={this.state.cityOptions.map((n) => ({

                                    "label": n.description,
                                    "value": n.provinceId,
                                }))} />
                            {(this.state.errorPro || this.props.errorproX) && <AtiText style={styles.err}>  Field is Required.</AtiText>}


                            <Loc style={{ marginBottom: hp('1.1%'), marginLeft: wp('7.2%'), color: 'black', marginTop: wp('3%') }} locKey="label.District" />

                            <AtiPicker
                                // containerStyle={{ backgroundColor: '#ffffff' }}
                                pickerStyle={{
                                    borderRadius: 10,
                                    backgroundColor: '#ffffff',
                                    borderWidth: 1,
                                    borderColor: '#d6d6d6',
                                    width: wp('86.1%'),
                                    marginLeft: wp('6.9%'),
                                    height: 50,
                                    marginRight: wp('6.9%'),
                                }}
                                labelStyle={{ fontSize: 14, fontWeight: 'bold' }}
                                id="district"
                                optionLabel="label"
                                optionValue="value"
                                value={this.state.dis}
                                events={
                                    {
                                        onValueChange: (e) => {
                                            // this.props.setDistrict(e);
                                            this.setState({
                                                dis: e,
                                            });

                                            z = e;
                                            if (z == null || z == '') {
                                                this.props.errorDisc();
                                                this.props.checkAddress();
                                                this.setState({
                                                    errorDisc: true,
                                                });
                                            } else {
                                                this.props.errorDisc2();
                                                this.props.checkAddress();
                                                this.setState({
                                                    errorDisc: false,
                                                });
                                                { this.props.setDistrict(z); }
                                            }

                                        },
                                    }
                                }


                                source={this.state.cityOptions.map((n) => ({

                                    "label": n.description,
                                    "value": n.description,
                                }))}
                            />
                            {(this.state.errorDisc || this.props.errorDiscX) && <AtiText style={styles.err}>  Field is Required.</AtiText>}

                            <Loc style={{ marginBottom: hp('1.1%'), marginLeft: wp('7.2%'), color: 'black', marginTop: wp('3%') }} locKey="label.Village" />

                            <AtiTextInput


                                textStyle={{
                                    backgroundColor: '#ffffff', boxSizing: 'borderBox', borderWidth: 1, borderColor: '#d6d6d6', borderRadius: 10, paddingLeft: wp('4.8%'), marginTop: hp('1.6%'), marginLeft: wp('6.9%'), marginRight: wp('6.9%'), height: 50, width: wp('86.1%'),
                                }}
                                placeholder=""
                                type="text"
                                id="village"
                                // value={this.setState.village}
                                events={{

                                    onChangeText: (e) => {
                                        //  this.props.setEmail(e)
                                        a = e;
                                        this.setState({
                                            village: e,
                                        })
                                    },
                                    onBlur: () => {

                                        if (this.state.village == null || this.state.village == "") {
                                            this.props.setErrorVillage();
                                            this.props.checkAddress();
                                            this.props.setAddress(null)
                                            this.setState({
                                                errorVillage: true,
                                                errorVillageNumber: false
                                            })
                                        }
                                        else if (!isNaN(this.state.village)) {
                                            this.props.setErrorVillageNumber();
                                            this.props.checkAddress();
                                            this.props.setVillage(null);
                                            this.setState({
                                                errorVillage: false,
                                                errorVillageNumber: true
                                            })

                                        }
                                        else {
                                            this.props.setvill();
                                            this.props.checkAddress();
                                            this.setState({
                                                errorVillage: false,
                                                errorVillageNumber: false
                                            })
                                            { this.props.setVillage(this.state.village) }
                                        }

                                    }
                                }}

                            />
                            {(this.state.errorVillage || this.props.errorVillageX) && <AtiText style={styles.err}>  Field is Required.</AtiText>}
                            {(this.state.errorVillageNumber || this.props.villageNumber) && <AtiText style={styles.err}>Enter a valid Village name</AtiText>}
                            <Loc style={{ marginBottom: hp('1.1%'), marginLeft: wp('7.2%'), color: 'black', marginTop: wp('3%') }} locKey="label.RT/WT" />

                            <AtiTextInput
                                textStyle={{
                                    backgroundColor: '#ffffff', boxSizing: 'borderBox', borderWidth: 1, borderColor: '#d6d6d6', borderRadius: 10, paddingLeft: wp('4.8%'), marginTop: hp('1.6%'), marginLeft: wp('6.9%'), marginRight: wp('6.9%'), height: 50, width: wp('86.1%'),
                                }}
                                placeholder="Optional"
                                type="text"
                                id="rtwt"
                                defaultValue=""
                                // value={this.setState.rtwt}
                                events={{
                                    onChangeText: (e) => { this.props.setRTWT(e) },
                                }}


                            />

                            <AtiRow style={styles.rowStyle}>
                                <AtiCol>
                                    <Loc style={{ marginBottom: hp('1.1%'), marginLeft: wp('7.2%'), color: 'black', marginTop: wp('3%') }} locKey="label.PostalCode" />
                                </AtiCol>
                            </AtiRow>
                            <AtiTextInput

                                textStyle={{
                                    backgroundColor: '#ffffff', boxSizing: 'borderBox', borderWidth: 1, borderColor: '#d6d6d6', borderRadius: 10, paddingLeft: wp('4.8%'), marginTop: hp('1.6%'), marginLeft: wp('6.9%'), marginRight: wp('6.9%'), height: 50, width: wp('86.1%'),
                                }}
                                numeric
                                keyboardType="number-pad"
                                type="text"
                                id="postalcode"
                                maxLength={6}
                                minLength={2}

                                events={{

                                    onChangeText: (e) => {
                                        //  this.props.setEmail(e)

                                        b = e;
                                        this.setState({
                                            postalcode: e,
                                        })
                                    },

                                    onBlur: () => {
                                        if (this.state.postalcode == null || this.state.postalcode == '') {
                                            this.props.errorPostalCode();
                                            this.props.checkAddress();
                                            this.props.setPostalcode(null)
                                            this.setState({
                                                PostalCoderange: false,
                                                errorPostalCode: true,
                                            });
                                        } else if (isNaN(this.state.postalcode) || !numreg.test(this.state.postalcode)) {
                                            this.props.errorPostalCode1();
                                            this.props.setPostalcode(null)
                                            this.props.checkAddress();
                                            this.setState({
                                                PostalCoderange: true,
                                                errorPostalCode: false,
                                            });
                                        }
                                        else if (numreg.test(this.state.postalcode)) {
                                            { this.props.setPostalcode(this.state.postalcode); }
                                            this.props.errorPostalCode2();
                                            this.props.checkAddress();
                                            this.setState({
                                                PostalCoderange: false,
                                                errorPostalCode: false,
                                            });


                                        }
                                    }
                                }}
                            />

                            {(this.state.errorPostalCode || this.props.errorPostalCodeX) && <AtiText style={styles.err}>  Field is Required.</AtiText>}
                            {(this.state.PostalCoderange || this.props.PostalCoderangeX) && <AtiText style={styles.err}>  Please Enter 6 Digit Number.</AtiText>}
                            <AtiRow>
                                <AtiCol>
                                    <Loc style={{ marginBottom: hp('1.1%'), marginLeft: wp('7.2%'), color: 'black', marginTop: wp('3%') }} locKey="label.Address" />

                                </AtiCol>
                            </AtiRow>
                            <AtiTextInput

                                textStyle={{
                                    backgroundColor: '#ffffff', boxSizing: 'borderBox', borderWidth: 1, borderColor: '#d6d6d6', borderRadius: 10, paddingLeft: wp('4.8%'), marginTop: hp('1.6%'), marginLeft: wp('6.9%'), marginRight: wp('6.9%'), height: 50, width: wp('86.1%'),
                                }}
                                type="text"
                                // value={this.setState.address}
                                id="address"
                                defaultValue=""
                                events={{

                                    onChangeText: (e) => {
                                        //  this.props.setEmail(e)
                                        c = e;
                                        this.setState({
                                            address: e
                                        })
                                    },
                                    onBlur: () => {
                                        if (this.state.address == null || this.state.address == '') {
                                            this.props.setErrorAddress();
                                            this.props.checkAddress();
                                            this.props.setAddress(null)
                                            this.setState({
                                                errorAddress: true,
                                                errorAddressNumber: false
                                            });
                                        }
                                        else if (!isNaN(this.state.address)) {
                                            this.props.setErrorAddressNumber();
                                            this.props.checkAddress();
                                            this.props.setAddress(null)
                                            this.setState({
                                                errorAddress: false,
                                                errorAddressNumber: true
                                            })

                                        }
                                        else {
                                            this.props.setErrorAdd();
                                            this.props.checkAddress();
                                            this.setState({
                                                errorAddress: false,
                                                errorAddressNumber: false
                                            })
                                            { this.props.setAddress(this.state.address) }
                                        }
                                    }
                                }}
                            />
                            {(this.state.errorAddress || this.props.errorAddressX) && <AtiText style={styles.err}>  Field is Required.</AtiText>}
                            {(this.state.errorAddressNumber || this.props.addressNumber) && <AtiText style={styles.err}>Enter a valid Address</AtiText>}
                        </View>
                    </AtiForm>
                </Content>
            </ScrollView>
        );
    }
}
const mapStateToProps = (state) => {
    const { reducer } = state;
    return {
        ...reducer
    };
};

export default connect(mapStateToProps, action)(withWebConsole(Address2))

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