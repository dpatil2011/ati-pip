import React, { Component } from 'react';
import {
    
    AtiText,
    
} from 'ati-ui-elements';
import { View, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';
import bgSrc from '../../assets/img/background/bg.png';
class NAI extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    
    render() {
        return (
                <ImageBackground style={styles.picture}source={bgSrc}>
                                <AtiText style={styles.text}>Not at implemented... </AtiText>
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
    },
    text: {
        color: '#ffffff',
        fontWeight: 'bold',
        marginLeft: '33%',
        marginTop: '70%',
      },
  });

export default NAI;
