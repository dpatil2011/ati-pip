import React, { Component } from 'react';
import { AtiHeaderNavigation } from 'ati-navigation';
import { withWebConsole } from 'ati-web-console-connector';
import { connect } from 'react-redux';
import navigate from './../../../common/navigation/action';
import { AtiText, AtiButton, AtiIcon } from 'ati-ui-elements';
import * as action from '../../../common/components/popup/store/popup-action';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    StyleSheet,
    TouchableOpacity,
    Image,
    View
} from 'react-native';
class Header extends Component {
    login = () => {
        this.props.navigate('PreLoginScreen');
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={{ marginTop: '5.3%', marginLeft: '5.1%' }} onPress={this.login.bind()} >
                    <AtiText ><Icon name="arrow-left" size={20} /></AtiText>
                </TouchableOpacity>
                <AtiText style={styles.logo} >Registration</AtiText>

            </View>
        );
    }
}

const mapStateToProps = state => ({ ...state });
const mapActionToProps = () => ({
    navigate,
    ...action,
    // ...authentication,
});


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        width: '100%',
        height: '10%'
    },
    logoHead: {
        marginLeft: '12.7%',
        letterSpacing: 0.13,
        color: '#ffffff',
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: 'AvenirNextLTPro',

    },
    head: {

        marginBottom: '3%',
        letterSpacing: 0,
        color: '#000000',
        fontSize: 18,
        fontFamily: 'AvenirNextLTPro-Bold',
    },
    logo: {
        marginLeft: '30%',
        marginTop: '5.3%',
        width: '25%',
        height: '40%',

    },


});
export default connect(mapStateToProps, mapActionToProps())(withWebConsole(Header));