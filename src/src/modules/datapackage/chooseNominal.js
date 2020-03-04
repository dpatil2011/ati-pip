import React, { Component } from 'react';
import { Content } from 'native-base';
import { AtiText, AtiThumbnail, AtiCard, AtiCardItem, AtiTextInput, AtiIcon, AtiListItem, Left, Right, AtiCol, AtiRow, AtiSpinner } from 'ati-ui-elements';
import { View, StyleSheet, Text, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Badge } from 'native-base';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';
import navigate from '../../common/navigation/action';
import { connect } from 'react-redux';
import * as action from '../../common/components/popup/store/popup-action';
import axios from 'axios';
import I18n, { Loc } from 'ati-react-native-redux-i18n';
import Icon from 'react-native-vector-icons/AntDesign';
import { List, ListItem, Body } from 'native-base';
import * as act from './store/datapackage-action';
class ChooseNominal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            accountDetail: this.props.accountDetail,
            product: [],
            mobile:this.props.cellPhone
        }
    }
    componentDidMount() {

        axios.get('https://prdc-support.anabatic.com:7443/fineract-provider/api/v1/ppob/product/listproduct/?category=DATA', {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Fineract-Platform-TenantId': 'default',
            },
            auth: {
                username: 'coin',
                password: 'coin',
            },
        }).then((response) => {

            console.log(JSON.stringify(response.data.data));
            //this.props.setAccountDetail(response.data.savingsAccounts[0]);
            this.setState({
                product: response.data.data,


            }).catch((error) => {

                console.log(error);
                alert(error)
            });

            console.log(this.state.product);
        });


    }
    myAccount = () => {
        this.props.setnavigate('1')
        this.props.navigate('MyAccount')
    }


    inputChange = () => {
        this.setState({
            inputValue: ''
        })
    }
    render() {
        if (this.state.product == "") {
            return (
                <View>
                    <AtiSpinner />
                </View>
            )
        }
        const Next = (e) => {
            this.props.setProduct(e);
            this.props.navigate('PurchaseConfirmation')
        }
        var currencyFormatter = require('currency-formatter');
        return (
            <ScrollView>
                <View style={{ backgroundColor: '#f7f7f7' }}>
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
                                > {this.state.accountDetail.shortProductName} - {this.state.accountDetail.accountNo}
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
                        marginBottom: hp('0.4%')
                    }}> Available balance Rp {currencyFormatter.format(this.state.accountDetail.accountBalance, {
                        code: 'IDR',
                        symbol: '',
                        decimal: '.',
                        thousand: ',',
                        precision: 2,
                    })}</AtiText>
                    <View style={{ flexDirection: 'row', marginBottom: hp('1.5%'), }}>

                        <Loc style={styles.label} locKey="label.phone Number" />
                    </View>
                    <View style={styles.input1}>

                        <View style={{ flexDirection: 'row' }}>

                            <View style={{ width: wp("73%") }}>
                                <AtiTextInput
                                    textStyle={{
                                        fontWeight: 'normal',
                                        paddingTop: hp('1.8%')
                                    }}
                                    keyboardType="numeric"
                                    autofocus
                                    events={{
                                        onChangeText: (e) => {
                                            this.setState({
                                                inputValue: e
                                            })
                                        }
                                    }}
                                    value={this.state.mobile}
                                ></AtiTextInput>
                            </View>
                            <View style={{ width: wp('6%'), marginLeft: wp('0.5%') }}><TouchableOpacity style={{ backgroundColor: 'rgba(0,0,0,0.4)', paddingLeft: wp('1.25%'), marginTop: hp('1.9%'), borderRadius: wp('3%'), height: hp('3.6%') }} onPress={this.inputChange.bind()}><AtiText style={{ padding: hp('0.2%') }} ><AtiIcon name='close' style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }} /></AtiText></TouchableOpacity></View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: hp('2%'), }}>
                        <Loc style={styles.label} locKey="label.topupPlan" />
                    </View>

                    <List style={{ paddingLeft: wp('3%'), paddingRight: wp('8%') }}>
                        {
                            this.state.product.map(function (x) {
                                return (
                                    <ListItem note>
                                        <TouchableOpacity style={{ flexDirection: 'row' }} onPress={Next.bind(this,x)}>
                                            <Left style={{ paddingRight: wp('1%') }}>
                                                <Image style={{ width: wp("15.5%"), height: hp('8.7') }} source={{ uri: x.imageAsBase64Text }} />
                                                <Body>
                                                    <AtiText style={styles.h1}>{x.name}</AtiText>
                                                    <AtiText style={styles.h2}>Rp {currencyFormatter.format(x.nominal, {
                                                        code: 'IDR',
                                                        symbol: '',
                                                        decimal: '.',
                                                        thousand: ',',
                                                        precision: 2,
                                                    })}</AtiText>
                                                    <AtiText style={styles.h3}>Active period 7 Day(s)</AtiText>
                                                </Body>
                                            </Left>
                                            <Right>
                                                <Text style={{ fontWeight: 'bold' }}><Icon
                                                    name="right"
                                                    style={{
                                                        height: 24,
                                                        width: 24,
                                                    }}
                                                >
                                                </Icon></Text>
                                            </Right>
                                        </TouchableOpacity>

                                    </ListItem>
                                )
                            })
                        }

                    </List>
                </View>
            </ScrollView>

        );
    }
}
const mapStateToProps = (state) => {
    const { dataReducer } = state;
    return {
        ...dataReducer
    }
}
const mapActionToProps = () => {
    return {
        navigate,
        ...action,
        ...act
    }
}

export default connect(mapStateToProps, mapActionToProps())(ChooseNominal);
const styles = StyleSheet.create({
    heading: {
        fontWeight: 'bold',
        marginTop: hp('4.1%'),
        marginBottom: hp('0.1%'),
        marginLeft: wp('26.9%'),
        //  lineHeight: hp('2.1%'),
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
    rowStyle: {
        color: 'red'
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
    numView: {
        borderRadius: 10,
        paddingLeft: wp('4.8%'),
        marginTop: hp('5.7%'),
        marginLeft: wp('6.9%'),
        marginRight: wp('6.9%'),
        height: hp('12%'),
        width: wp('87.5%'),
        paddingTop: hp('1.5%')
    },
    input1: {
        borderRadius: 10,
        borderColor: '#d6d6d6',
        borderWidth: 1,
        paddingLeft: wp('4.8%'),
        marginLeft: wp('6.9%'),
        marginRight: wp('6.9%'),
        height: hp('7.5%'),
        color: "#a92930",
        fontWeight: 'bold',
        fontSize: 32,
        backgroundColor: "#ffffff",
        width: wp('86.1%'),
        paddingTop: hp('0%')
    },
    h1: {
        fontSize: 13,
        paddingBottom: hp('.7%'),
        color: '#000000',
        letterSpacing: 0.28,
        fontWeight: 'normal',
        fontFamily: 'AvenirNextLTPro-Regular',
    },
    h2: {
        fontSize: 14,
        color: '#000000',
        letterSpacing: 0.28,
        paddingBottom: hp('1%'),
        fontFamily: 'AvenirNextLTPro-Bold',
    }, h3: {
        fontSize: 10,
        paddingBottom: hp('1%'),
        color: '#ff4400',
        letterSpacing: 0.2,
        fontFamily: 'AvenirNextLTPro-Regular',
    }
});