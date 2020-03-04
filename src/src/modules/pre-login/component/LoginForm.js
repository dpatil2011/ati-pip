import React, { Component } from 'react';
import URLS from './../../../common/urls/URLS';
import { AtiText, AtiButton, AtiTextInputIcon } from 'ati-ui-elements';
import axios from 'axios';
import navigate from './../../../common/navigation/action';
import { withWebConsole } from 'ati-web-console-connector';
import { connect } from 'react-redux';
import * as action from './../../../common/components/popup/store/popup-action';
import * as act from './../store/pre-login-action'
import Storage from '../storage';
import {
    StyleSheet,
    Image,
    View,
    TouchableOpacity,
    AsyncStorage
} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';
class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {

            username: 'user84',
            password: 'coin',
            imei:'123456',
            errorPassword: false,
            errorUsername: false,
        }
    }
    componentDidMount(){
        this.login()
       //this.props.navigate('history');
    }

    register = () => {
        //window.location.reload();
        this.props.navigate('MultiStep');
    }

    login = () => {


        var username = this.state.username;
        var password = this.state.password;
        if (username === '') {
            this.setState({
                errorUsername: true
            })
        } else {
            this.setState({
                errorUsername: false
            })
        }
        if (password === '') {
            this.setState({
                errorPassword: true
            })
        } else {
            this.setState({
                errorPassword: false
            })
        }
        //var pkg = require('./../../../../package.json');
        //var apkVersion = pkg.version;
        var apkVersion = '1.0';
        var imeiNumber = this.state.imei;
        var tenantId = '000000';
        this.props.setTenantId(tenantId)
        var postData = { username, password, imeiNumber, apkVersion }
        if (username && password !== '') {
            axios({
                method: 'post',
                url: URLS.AUTHENTICATION,
                data: postData,
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    'Fineract-Platform-TenantId': tenantId,
                },
            }).then((response) => {
                this.props.setUser(response);
                this.props.setPass(password);
               this.props.setUsername(username)
               let name=username;
               AsyncStorage.setItem('name',name)
              
                this.props.navigate('home');
            })
                .catch(function (response) {
                    //handle error
                    //alert(response);
                    alert(response.response.data.defaultUserMessage);
                });

        }
    }
    render() {

        const IMEI = require('react-native-imei');
        
        // IMEI.getImei().then(imei => {
        //     this.setState({
        //         imei:imei.toString()
        //     })
        // });

        return (
            <View style={{ marginTop: '7.7%' }}>

                <AtiTextInputIcon
                    iconName="mail"
                    placeholder="Username"
                    readOnly={false}
                    value={this.state.username}
                    placeholderTextColor='#ffffff'
                    events={
                        {
                            onChangeText: (e) => {
                                this.setState({ username: e });
                            },
                        }
                    }
                    containerStyle={styles.inCon}
                    textStyle={styles.inText}
                    iconStyle={styles.inIcon}
                />
                {this.state.errorUsername && <AtiText style={styles.err}>  Username required...</AtiText>}
                <AtiTextInputIcon
                    iconName="lock"
                    placeholder="Password"
                    type="password"
                    secureTextEntry={true}
                    readOnly={false}
                    value={this.state.password}

                    placeholderTextColor='#ffffff'
                    events={
                        {
                            onChangeText: (e) => {
                                this.setState({ password: e });
                            },
                        }
                    }
                    containerStyle={styles.inCon}
                    textStyle={styles.inText}
                    iconStyle={styles.inIcon}
                />
                {this.state.errorPassword && <AtiText style={styles.err}>  Password required...</AtiText>}
                <View style={{ flexDirection: 'row', marginTop: '5.4%', marginLeft: '32.3%' }}>
                    <AtiText style={styles.text}>Forgot Password? </AtiText>
                    <TouchableOpacity >
                        <AtiText style={styles.link}>Reset Password</AtiText>
                    </TouchableOpacity>
                </View>

                <AtiButton
                    style={styles.login} textStyle={styles.loginText} onPress={this.login.bind()}>
                    Login</AtiButton>
                <View style={{ flexDirection: 'row', marginTop: '5.4%', marginLeft: '27.5%' }}>
                    <AtiText style={styles.text}>Didn't have an account? </AtiText>
                    <TouchableOpacity onPress={this.register.bind()} >
                        <AtiText style={styles.link}>Registration</AtiText>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => ({ ...state });
const mapActionToProps = () => ({
    navigate,
    ...action,
    ...act
    // ...authentication,
});

export default connect(mapStateToProps, mapActionToProps())(withWebConsole(LoginForm));
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
    inCon: {
        backgroundColor: '#a6262c',
        borderColor: '#a6262c',
        borderRadius: 10,
        marginTop: hp('3.7%'),
        marginLeft: wp('10%'),
        marginRight: wp('10%'),
    },
    inText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#ffffff',
        fontFamily: 'AvenirNextLTPro-Demi',
    },
    inIcon: {
        color: '#ffffff',
        marginLeft: wp('5.3%'),
        marginRight: wp('7.3%'),
    },
    text: {
        fontSize: 14,
        color: '#ffffff',
        fontFamily: 'AvenirNextLTPro-Regular',
        color: 'white',
        backgroundColor: 'transparent',

    },
    link: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#ffffff',
        fontFamily: 'AvenirNextLTPro-Regular',
        color: 'white',
        textDecorationLine: 'underline'
    },
    login: {
        backgroundColor: 'white',
        alignSelf: 'center',
        marginTop: '12.4%',
        height: '17.9%',
        width: '80.1%',
        borderRadius: 80,
    },
    loginText: {
        fontSize: 15,
        color: '#a92930',
        fontWeight: 'bold',
        letterSpacing: 0.03,
        fontFamily: 'AvenirNextLTPro-Regular',
        marginLeft: '37%',
    },
    err: {
        marginTop: hp('0.8%'),
        color: 'yellow',
        fontSize: 14,
        marginLeft: wp('8.0%'),
        fontWeight: 'bold',
    },
});
