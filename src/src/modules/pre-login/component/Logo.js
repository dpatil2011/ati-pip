import React, { Component } from 'react';
import { AtiText, AtiButton } from 'ati-ui-elements';
import logoSrc from './../../../../assets/img/logo/logo.png';
import {
    StyleSheet,
    Image,
    View
} from 'react-native';
class Logo extends Component {
    render() {
        return (
            <View style={{ marginTop: '18%' }}>
                <Image style={styles.logo} source={logoSrc} />
                <AtiText style={styles.logoHead}>COINCORE</AtiText>
                <AtiText style={styles.logoTitle}>Collaborating Innovations</AtiText>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    logoHead: {
        marginLeft: '34.5%',
        letterSpacing: 0.13,
        color: '#ffffff',
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: 'AvenirNextLTPro',

    },
    logoTitle: {
        marginLeft: '35%',
        letterSpacing: 0.18,
        color: '#ffffff',
        fontSize: 10,
        fontFamily: 'AvenirNextLTPro-Regular',
    },
    logo: {
        marginLeft: '44%',
        width: 53.9,
        height: 53.9
    },

});

export default Logo;