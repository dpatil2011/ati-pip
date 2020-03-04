/**
 * @author dennis.justine
 * @since January 08,2019
 */

import React, { Component } from 'react';
import I18n, { Loc } from 'ati-react-native-redux-i18n';
import bgSrc from './../../../../assets/img/background/bg.png';
import logoSrc from './../../../../assets/img/logo/logo.png';
import Logo from './Logo';
import LoginForm from './LoginForm';
import {
    ImageBackground,
    StyleSheet,
    Image
} from 'react-native';
class PreLogin extends Component {
    render() {
        const test = I18n.t("header.PreLoginScreen")
        return (
            <ImageBackground style={styles.picture} source={bgSrc}>
                <Logo />
                <LoginForm />
            </ImageBackground>

        );
    }
}
const styles = StyleSheet.create({
    picture: {
        flex: 1,

        width: null,
        height: null,
        resizeMode: 'cover',
    }
});

export default PreLogin;