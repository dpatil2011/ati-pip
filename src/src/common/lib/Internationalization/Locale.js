import React, { Component } from 'react';
import { Loc } from 'ati-react-native-redux-i18n';

export default class Locale extends Component {
    render() {
        const { children, key, name, customizer } = this.props;
        return (
            <Loc locKey={key} customizer={text => (customizer ? customizer(text) : text)} />
        ); 
    }
}