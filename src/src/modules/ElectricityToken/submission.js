import React, { Component } from 'react';
import { AtiText } from 'ati-ui-elements';
import bgSrc from './../../../assets/img/background/bg.png';
import {
    ImageBackground,
    StyleSheet,
} from 'react-native';

class Submission extends Component {
    render() {
      return (
        <ImageBackground style={styles.picture}source={bgSrc}>
                        <AtiText style={styles.text}>Submission</AtiText>
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
                fontSize:20,
                alignSelf:"center",
                marginTop: '20%',
                alignContent:"center"
              },
          });
export default Submission;