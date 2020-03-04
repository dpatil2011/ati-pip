import React, { Component } from 'react';
import { AtiText } from 'ati-ui-elements';
import bgSrc from './../../../../assets/img/background/bg.png';
import {
  ImageBackground,
  StyleSheet,
} from 'react-native';


class PayQ extends Component {
  render() {
    return (
      <ImageBackground style={styles.picture} source={bgSrc}>
        <AtiText style={styles.text}>PayQ </AtiText>
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
    marginLeft: '25%',
    marginTop: '80%',
  },
});
export default PayQ;